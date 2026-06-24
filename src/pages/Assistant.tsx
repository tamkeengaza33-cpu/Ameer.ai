import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, Loader2, AlertCircle, MessageSquare, ArrowLeft, Sparkles, User, RefreshCw } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AssistantProps {
  setActiveTab: (tab: string) => void;
}

const QUICK_QUESTIONS = [
  "ما هي الخدمات الإبداعية والتقنية التي يقدمها الأمير؟",
  "كيف يمكنني حجز استشارة ومراسلة الأمير مباشرة لبدء مشروع؟",
  "ما هي أهم المشاريع والأعمال المنجزة في البورتفوليو؟",
  "أخبرني عن إنجازات وأرقام الأمير وخبراته السابقة."
];

export default function Assistant({ setActiveTab }: AssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'مرحباً بك! أنا مساعد الأمير الذكي والمبرمج للإجابة عن كافة استفساراتك حول هذا الموقع ومناقشة الفرص الإبداعية المتاحة.\n\nيمكنك سؤالي عن الخدمات، معرض الأعمال، كيفية المراسلة، أو تجربة أدوات الذكاء الاصطناعي في المختبر. كيف يمكنني مساعدتك اليوم؟' 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messageFeedRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    if (messageFeedRef.current) {
      messageFeedRef.current.scrollTo({
        top: messageFeedRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    const userMessage = textToSend.trim();
    if (!userMessage || loading) return;

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('خطأ في الاتصال بالخادم الذكي.');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err: any) {
      console.error(err);
      // Offline fallback trigger
      setTimeout(() => {
        let reply = 'أعتذر، واجهت مشكلة في الاتصال بالذكاء الاصطناعي حالياً.';
        const lowerMsg = userMessage.toLowerCase();
        if (lowerMsg.includes('خدمات') || lowerMsg.includes('خدمه') || lowerMsg.includes('ماذا تقدم') || lowerMsg.includes('الخدمات')) {
          reply = `يقدم الأمير باقة واسعة من الخدمات الاحترافية الذكية والإبداعية وتشمل:
1. تصميم الهويات البصرية والشعارات الفاخرة لتعزيز حضور علامتك التجارية.
2. تصميم واجهات وتجربة المستخدم UX/UI للمواقع الإلكترونية ومنصات الويب الذكية.
3. برمجة وتطوير مواقع الويب الكاملة والمنصات السريعة بـ React وTailwind.
4. إنتاج وتحرير الفيديو الإعلاني والمونتاج والموشن جرافيك لوسائل التواصل الاجتماعي.
5. إدارة الحملات الإعلانية والتخطيط الاستراتيجي لزيادة الوصول والمبيعات.
6. التدريب العملي في توظيف أدوات الذكاء الاصطناعي التوليدي وهندسة الأوامر (Prompt Engineering).`;
        } else if (lowerMsg.includes('تواصل') || lowerMsg.includes('حجز') || lowerMsg.includes('رقم') || lowerMsg.includes('راسلني') || lowerMsg.includes('مراسلة')) {
          reply = 'يمكنك التواصل المباشر مع الأمير وحجز استشارتك الفورية عبر الواتساب على الرقم: +201013189909 أو تعبئة نموذج المراسلة المتطور في صفحة "راسلني" بالموقع للبدء فوراً في مشروعك!';
        } else if (lowerMsg.includes('مشاريع') || lowerMsg.includes('معرض') || lowerMsg.includes('أعمال') || lowerMsg.includes('بورتفوليو') || lowerMsg.includes('سابقة')) {
          reply = `يحتوي بورتفوليو الأمير على مشاريع متميزة مثل:
- هويات بصرية متكاملة وشعارات احترافية للشركات والمنصات التقنية.
- منشورات وبوسترات إعلانية لوسائل التواصل الاجتماعي لعلامات تجارية ومطاعم.
- فيديوهات ومونتاج Reels وTikTok إبداعية ذات إيقاع حركي سريع.
- مواقع ويب سريعة وجذابة ومتجاوبة مطورة بالكامل باستخدام React وTailwind CSS.
- كورسات تدريبية وخطط محتوى تسويقية مبتكرة وصياغة سكربتات إعلانية.`;
        } else if (lowerMsg.includes('إنجاز') || lowerMsg.includes('ارقام') || lowerMsg.includes('أرقام') || lowerMsg.includes('خبره') || lowerMsg.includes('خبرات')) {
          reply = `حقق الأمير إنجازات وأرقاماً ممتازة تضمن جودة العمل والخدمة:
- 150+ مشروع مكتمل ومسجل بنجاح لعملاء وشركاء محليين وعالميين.
- 20+ كورس تدريبي متقدم تم تقديمه لتمكين المتدربين من التميز الرقمي.
- 100% نسبة رضا العملاء والشركاء مع التزام كامل بمواعيد التسليم الفائقة.
- مئات الساعات من التوجيه المهني وتطوير الأفكار التقنية والإبداعية.`;
        } else {
          reply = `شكراً لرسالتك المميزة! بصفتي المساعد الذكي للأمير، أود إخبارك أنه يدمج حلول الذكاء الاصطناعي والبرمجة والتصميم الاحترافي بأعلى المعايير لمساعدتك في بناء وتطوير علامتك التجارية وأتمتة أعمالك. 

للتحدث معه والحصول على عرض سعر فوري مخصص لمشروعك، يرجى مراسلته مباشرة عبر واتساب على الرقم: +201013189909.`;
        }
        setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      }, 700);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      { 
        role: 'assistant', 
        content: 'مرحباً بك مجدداً! تم إعادة تهيئة المحادثة. كيف يمكنني مساعدتك الآن بخصوص خدمات وأعمال الأمير؟' 
      }
    ]);
    setError(null);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-neutral-950 overflow-hidden" id="assistant-page" dir="rtl">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-20 right-10 h-[400px] w-[400px] rounded-full bg-brand/5 blur-3xl opacity-35 animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-10 h-[450px] w-[450px] rounded-full bg-purple-500/5 blur-3xl opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold mb-4">
            <Sparkles size={12} className="animate-pulse" />
            <span>مساعد الاستشارات الذكي</span>
          </div>
          <h1 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight">
            مساعد الأمير <span className="text-brand glow-text-yellow">الذكي</span>
          </h1>
          <div className="mt-4 h-1 w-24 bg-brand mx-auto rounded-full shadow-[0_0_10px_#F5B400]" />
          <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            مساعد الأمير الذكي جاهز للإجابة على أسئلتك، مساعدتك في اختيار الخدمة المناسبة، تقديم عروض أسعار تقديرية، وإرشادك خلال رحلتك الرقمية خطوة بخطوة.
          </p>
        </div>

        {/* Chat Component Container */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-border-dark bg-neutral-900/40 backdrop-blur-md overflow-hidden flex flex-col h-[600px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* Header / Top Bar */}
            <div className="border-b border-border-dark bg-neutral-950 p-4 sm:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand/10 border border-brand/20 text-brand shadow-[0_0_15px_rgba(245,180,0,0.1)] animate-pulse">
                  <Bot size={22} />
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-sans font-black text-sm sm:text-base text-white">مساعد الأمير الذكي</span>
                  <span className="text-[10px] sm:text-xs text-brand font-bold flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
                    <span>Gemini 3.5 AI Engine Active</span>
                  </span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetChat}
                  title="إعادة بدء المحادثة"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-dark bg-neutral-900/80 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all cursor-pointer"
                >
                  <RefreshCw size={16} />
                </button>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 text-[10px] text-neutral-400 border border-border-dark font-mono">
                  <span>SECURE CONNECTED</span>
                </div>
              </div>
            </div>

            {/* Quick Suggestions Helper */}
            <div className="bg-neutral-950/40 border-b border-border-dark/60 p-3 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
              <span className="text-[10px] font-bold text-neutral-500 shrink-0 px-2">أسئلة شائعة:</span>
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  disabled={loading}
                  onClick={() => handleSendMessage(q)}
                  className="text-[11px] sm:text-xs bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-border-dark/80 px-3.5 py-1.5 rounded-full transition-all cursor-pointer inline-block shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Message Feed */}
            <div 
              ref={messageFeedRef}
              className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 flex flex-col bg-gradient-to-b from-neutral-950/10 to-neutral-950/40"
            >
              {messages.map((msg, index) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 max-w-[85%] ${
                      isUser ? 'self-start flex-row-reverse' : 'self-end'
                    }`}
                  >
                    {/* Mini Avatar */}
                    <div className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 border text-xs ${
                      isUser 
                        ? 'bg-brand/10 border-brand/30 text-brand' 
                        : 'bg-neutral-900 border-border-dark text-neutral-400'
                    }`}>
                      {isUser ? <User size={14} /> : <Bot size={14} />}
                    </div>

                    {/* Speech Bubble */}
                    <div
                      className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-sm transition-all ${
                        isUser
                          ? 'bg-brand text-black font-semibold rounded-tl-none shadow-[0_5px_15px_rgba(245,180,0,0.15)]'
                          : 'bg-neutral-950 text-neutral-200 border border-border-dark rounded-tr-none'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                );
              })}
              
              {loading && (
                <div className="flex items-start gap-3 max-w-[85%] self-end">
                  <div className="h-8 w-8 rounded-xl flex items-center justify-center bg-neutral-900 border border-border-dark text-neutral-400 shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-950/80 border border-border-dark p-3.5 rounded-2xl rounded-tr-none">
                    <Loader2 size={14} className="animate-spin text-brand" />
                    <span>يتم صياغة الرد الذكي من قاعدة المعرفة...</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/20 border border-red-900/30 p-3.5 rounded-xl self-center max-w-md">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            {/* Input Bar / Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-4 bg-neutral-950 border-t border-border-dark flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اسألني عن الخدمات، الأعمال، السيرة الذاتية، أو المراسلة..."
                disabled={loading}
                className="flex-1 rounded-xl bg-neutral-900/80 border border-border-dark px-4 py-3.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:border-brand/40 focus:outline-none focus:ring-1 focus:ring-brand/40 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="h-12 w-12 rounded-xl bg-brand hover:bg-brand-dark text-black flex items-center justify-center transition-all shadow-md hover:shadow-brand/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send size={18} className="rotate-180" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
