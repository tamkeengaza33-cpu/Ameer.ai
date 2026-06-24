import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ContactCTA from '../components/ContactCTA';
import { 
  Sparkles, Cpu, Send, Bot, AlertCircle, Loader2, 
  Check, Copy, Sliders, Wand2, Image, Video, 
  FileText, ArrowLeftRight, Terminal, RefreshCw,
  HelpCircle, ChevronRight, Zap, Target, Flame
} from 'lucide-react';

// Full Categorized AI Tools Data for display in the grid
const toolCategories = [
  {
    id: 'text',
    title: 'توليد النصوص والذكاء التوليدي اللغوي (LLMs & Generation)',
    icon: FileText,
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'group-hover:border-amber-500/30',
    iconColor: 'text-amber-500',
    tools: [
      { name: 'Gemini 3.5 Flash & Pro', description: 'نموذج جوجل الأحدث للفهم متعدد الوسائط، صياغة الأكواد، وتحليل البيانات والملفات والبحث الموسع.', level: 'خبير / Expert', useCase: 'بناء وكلاء أذكياء وتطبيقات مخصصة.' },
      { name: 'GPT-4o & Claude 3.5 Sonnet', description: 'أقوى النماذج اللغوية في التفكير المنطقي، كتابة السكربتات وصياغة الأوامر عالية الجودة والتفصيل.', level: 'خبير / Expert', useCase: 'كتابة المحتوى والبرمجة وحل المشكلات.' },
      { name: 'Google Workspace AI Integration', description: 'ربط خدمات مستندات وجداول بيانات جوجل بذكاء لتسريع وتلقائية الأعمال المكتبية اليومية.', level: 'متقدم / Advanced', useCase: 'أتمتة الأعمال وإعداد التقارير تلقائياً.' }
    ]
  },
  {
    id: 'visual',
    title: 'التصميم الإبداعي والفن الرقمي (AI Visual Arts & Imaging)',
    icon: Image,
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'group-hover:border-blue-500/30',
    iconColor: 'text-blue-500',
    tools: [
      { name: 'Midjourney v6', description: 'إنتاج لوحات فنية فائقة الواقعية، شعارات مبتكرة، وتخطيطات واجهات مستخدم مذهلة بهندسة أوامر احترافية.', level: 'خبير / Expert', useCase: 'تصميم الهوية البصرية والمواد الدعائية.' },
      { name: 'Stable Diffusion XL (SDXL)', description: 'توليد وتعديل الصور محلياً مع تحكم كامل بالتركيب، الوضعيات والأنماط البصرية المطلوبة.', level: 'متقدم / Advanced', useCase: 'صناعة التصاميم المخصصة والدمج الرقمي.' },
      { name: 'Magnific AI & Photoshop Generative Fill', description: 'تكبير وتوضيح تفاصيل الصور (Upscaling) وإعادة صياغة العناصر بذكاء خارق لتظهر بدقة 4K.', level: 'خبير / Expert', useCase: 'تحسين جودة صور المنتجات واللوحات الإعلانية.' }
    ]
  },
  {
    id: 'video-audio',
    title: 'المونتاج، الفيديو والذكاء الصوتي (AI Video & Audio Synthesis)',
    icon: Video,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-purple-500/30',
    iconColor: 'text-purple-500',
    tools: [
      { name: 'Runway Gen-3 Alpha & Sora', description: 'توليد مقاطع فيديو سينمائية متحركة من الأوامر النصية والمشاهد التخيلية بإخراج مبهر.', level: 'متقدم / Advanced', useCase: 'إنتاج الموشن جرافيك والمقاطع الترويجية.' },
      { name: 'ElevenLabs', description: 'أقوى محرك لتوليد واستنساخ الأصوات البشرية بمشاعر واقعية ونبرات طبيعية متعددة اللهجات.', level: 'خبير / Expert', useCase: 'التعليق الصوتي الاحترافي للفيديوهات.' },
      { name: 'Suno & Udio AI', description: 'تأليف وإنتاج مقاطع موسيقية تصويرية وأغانٍ تسويقية متكاملة الألحان والكلمات لخدمة المحتوى البصري.', level: 'خبير / Expert', useCase: 'صناعة الموسيقى الخلفية للإعلانات والبرامج.' }
    ]
  },
  {
    id: 'coding',
    title: 'هندسة وتطوير البرمجيات والواجهات (AI Coding & Prototyping)',
    icon: Cpu,
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'group-hover:border-emerald-500/30',
    iconColor: 'text-emerald-500',
    tools: [
      { name: 'Cursor AI & GitHub Copilot', description: 'بيئات برمجة ذكية تفهم الشيفرة كاملة لتوليد حلول برمجية فورية، وتصحيح الأخطاء بكفاءة تامة.', level: 'خبير / Expert', useCase: 'برمجة وتطوير مواقع وتطبيقات الويب.' },
      { name: 'v0.dev by Vercel', description: 'توليد وتصميم واجهات المستخدم الحديثة وتنسيقات Tailwind CSS فورياً بمجرد الوصف النصي.', level: 'خبير / Expert', useCase: 'بناء النماذج الأولية السريعة والواجهات المبهرة.' },
      { name: 'Bolt.new', description: 'تطوير وتشغيل تطبيقات ويب متكاملة (Fullstack) مباشرة في المتصفح واكتشاف وحل المشكلات آلياً.', level: 'متقدم / Advanced', useCase: 'التطوير المتكامل وبناء النماذج للعملاء.' }
    ]
  }
];

interface AiLabProps {
  setActiveTab: (tab: string) => void;
}

export default function AiLab({ setActiveTab }: AiLabProps) {
  // Playground Tabs State
  const [activePlaygroundTab, setActivePlaygroundTab] = useState<'ad-writer' | 'prompt-optimizer' | 'image-slider'>('ad-writer');

  // Ad Copywriter State
  const [productName, setProductName] = useState('');
  const [adPlatform, setAdPlatform] = useState('TikTok / Reels');
  const [adTone, setAdTone] = useState('حماسي ومؤثر جداً');
  const [adResult, setAdResult] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [adCopied, setAdCopied] = useState(false);

  // Prompt Optimizer State
  const [targetEngine, setTargetEngine] = useState('Midjourney (صور)');
  const [simplePrompt, setSimplePrompt] = useState('');
  const [optimizedResult, setOptimizedResult] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);

  // Image Slider State
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [hasProcessed, setHasProcessed] = useState(true); // default loaded

  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Handle slide movement for Before/After Slider
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Global mouseup listeners to release the drag
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  // Trigger processing animation for image enhancer
  const triggerImageEnhance = () => {
    setIsProcessing(true);
    setHasProcessed(false);
    setProcessingProgress(0);
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setHasProcessed(true);
          setSliderPos(50); // reset handle to center
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  // Preset Visual Renderer for AI Enhancer
  const renderPreset = (presetIndex: number, enhanced: boolean) => {
    const isBlurryClass = enhanced ? '' : 'filter blur-[5px] grayscale-[50%] brightness-75 contrast-[85%]';
    
    if (presetIndex === 0) {
      // Luxurious Watch
      return (
        <div className={`w-full h-full flex flex-col items-center justify-center transition-all duration-300 ${isBlurryClass}`}>
          <div className={`relative w-44 h-44 rounded-full border-4 ${enhanced ? 'border-brand bg-neutral-900 shadow-[0_0_30px_rgba(245,180,0,0.3)]' : 'border-neutral-700 bg-neutral-950'} flex items-center justify-center transition-all duration-300`}>
            <div className="absolute inset-2 rounded-full border border-dashed border-neutral-800 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="text-center z-10 px-2">
              <span className={`text-[9px] uppercase font-mono tracking-widest block mb-1 ${enhanced ? 'text-brand' : 'text-neutral-500'}`}>chronograph</span>
              <div className={`font-mono font-black text-3xl ${enhanced ? 'text-white text-shadow-yellow' : 'text-neutral-400'}`}>10:08</div>
              <span className={`text-[8px] ${enhanced ? 'text-emerald-400 font-bold' : 'text-neutral-600'}`}>AI ENHANCED (4K)</span>
            </div>
            <div className={`absolute top-4 bottom-1/2 w-0.5 rounded-full origin-bottom transform rotate-[45deg] ${enhanced ? 'bg-brand' : 'bg-neutral-600'}`} />
          </div>
        </div>
      );
    } else if (presetIndex === 1) {
      // Tech Logo
      return (
        <div className={`w-full h-full flex flex-col items-center justify-center transition-all duration-300 ${isBlurryClass}`}>
          <div className="relative flex flex-col items-center justify-center">
            <div className={`w-36 h-36 border-2 transform rotate-45 flex items-center justify-center transition-all duration-300 ${enhanced ? 'border-brand bg-brand/5 shadow-[0_0_20px_rgba(245,180,0,0.15)]' : 'border-neutral-800 bg-neutral-950'}`}>
              <div className={`w-24 h-24 border transform rotate-[15deg] flex items-center justify-center ${enhanced ? 'border-brand/40' : 'border-neutral-800'}`}>
                <Cpu size={enhanced ? 44 : 36} className={`${enhanced ? 'text-brand animate-pulse' : 'text-neutral-600'}`} />
              </div>
            </div>
            {enhanced && (
              <span className="absolute -bottom-6 text-[10px] font-mono text-brand font-bold bg-neutral-950 px-2.5 py-0.5 border border-brand/20 rounded">
                VECTOR_SHARP_OK
              </span>
            )}
          </div>
        </div>
      );
    } else {
      // Cinematic Portrait
      return (
        <div className={`w-full h-full flex flex-col items-center justify-center transition-all duration-300 ${isBlurryClass}`}>
          <div className="relative w-44 h-44 rounded-2xl flex items-center justify-center overflow-hidden border border-neutral-800">
            <div className={`w-32 h-32 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${enhanced ? 'border-brand bg-gradient-to-t from-brand/20 to-transparent glow-yellow' : 'border-neutral-800 bg-neutral-900'}`}>
              <Bot size={enhanced ? 72 : 56} className={`${enhanced ? 'text-brand animate-pulse' : 'text-neutral-500'}`} />
            </div>
            <div className={`absolute inset-0 border border-dashed rounded-2xl animate-spin-slow ${enhanced ? 'border-brand/20' : 'border-transparent'}`} />
            {enhanced && (
              <>
                <div className="absolute top-2 right-2 text-[8px] font-mono text-emerald-400 bg-neutral-950/80 px-1.5 py-0.5 border border-emerald-500/20 rounded">
                  SCAN: 99.8% PASS
                </div>
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-brand bg-neutral-950/80 px-1.5 py-0.5 border border-brand/20 rounded">
                  SUPER RESOLUTION
                </div>
              </>
            )}
          </div>
        </div>
      );
    }
  };

  // Live Copywriting API request to Gemini Proxy
  const generateAdScript = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName.trim() || isWriting) return;

    setIsWriting(true);
    setAdResult('');

    const prompt = `اكتب سكربت فيديو إعلاني ترويجي احترافي ومبتكر للمنتج أو الخدمة التالية: "${productName}".
المنصة المستهدفة: "${adPlatform}".
نبرة الصوت والتأثير: "${adTone}".
اكتب السكربت باللغة العربية بطريقة ممتعة ومنسقة تشمل:
1) المشاهد البصرية المقترحة.
2) التعليق الصوتي المنطوق (Voiceover).
3) التوجيهات الصوتية والموسيقى والمؤثرات (Sound Effects).
4) خطاف البداية (Hook) لجذب المشاهدين في أول 3 ثوانٍ.
5) دعوة لاتخاذ إجراء (Call to Action) مقنعة في النهاية.`;

    const systemInstruction = `أنت خبير كتابة نصوص إعلانية وسكربتات تسويقية (Direct Response Copywriting) ذو خبرة عالمية. تقوم بكتابة نصوص جذابة، مقنعة، ومثيرة للاهتمام تزيد المبيعات والوصول باللغة العربية بأسلوب احترافي وجذاب جداً ومنسق بطريقة المشاهد السينمائية والتسويقية الرقمية المتطورة.`;

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt, systemInstruction }),
      });

      if (!response.ok) {
        throw new Error('خطأ في الاتصال بالسيرفر.');
      }

      const data = await response.json();
      setAdResult(data.reply);
    } catch (err) {
      console.error(err);
      // Offline fallback template in case server route is not available
      setTimeout(() => {
        setAdResult(`🎬 **سيناريو إعلاني ترويجي مبتكر (نسخة تجريبية احترافية)**

📌 **اسم المنتج/الخدمة:** ${productName}
📱 **المنصة المستهدفة:** ${adPlatform}
🎭 **نبرة الصوت:** ${adTone}

---

### ⏱️ الخطاف (Hook) - أول 3 ثوانٍ
* **بصري:** زاوية تصوير قريبة جداً وسريعة، حركة ديناميكية، إضاءة قوية.
* **صوت:** تأثير صوتي سريع وخاطف (Whoosh).
* **التعليق الصوتي:** "انتظر! هل مللت من الطرق القديمة وتبحث عن الحل المثالي لتغيير معادلة نجاحك؟"

---

### 📦 المشهد الأول: المشكلة والحل المقترح
* **بصري:** لقطة سينمائية توضح التحدي، ثم ظهور مذهل لشعار أو تفاصيل "${productName}" مع إضاءة دافئة.
* **الموسيقى:** تصاعد إيقاعي حماسي.
* **التعليق الصوتي:** "هنا تبدأ الحكاية.. مع ${productName}، قمنا بإعادة ابتكار التجربة بالكامل لنمنحك الكفاءة التي تستحقها وبأسهل طريقة ممكنة."

---

### ✨ المشهد الثاني: الميزات واللمسة الفنية
* **بصري:** استعراض سريع لثلاث ميزات رئيسية عبر نصوص متحركة مضيئة وأيقونات أنيقة.
* **التعليق الصوتي:** "دقة بالغة، سرعة فائقة، وتجربة سلسة صُممت خصيصاً لتناسب أسلوب حياتك أو عملك اليومي."

---

### 🚀 النهاية ودعوة لاتخاذ إجراء (Call to Action)
* **بصري:** شاشة النهاية تحتوي على الشعار وتفاصيل التواصل والطلب الفوري.
* **التعليق الصوتي:** "لا تتردد! ابدأ الآن، وتواصل مع الأمير الفلسطيني فوراً عبر واتساب لتنفيذ وتطوير فكرتك وتحويلها لواقع رقمي مذهل!"`);
      }, 1000);
    } finally {
      setIsWriting(false);
    }
  };

  // Live Prompt Optimization API request to Gemini Proxy
  const generateOptimizedPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!simplePrompt.trim() || isOptimizing) return;

    setIsOptimizing(true);
    setOptimizedResult('');

    const prompt = `قم بتحسين وتطوير وهندسة الأمر البسيط التالي لصالح أداة "${targetEngine}": "${simplePrompt}".
حول الأمر إلى صيغة برومبت جاهزة للاستخدام والنسخ الفوري باللغة الإنجليزية في كود برمي لكي يفهمها محرك الذكاء الاصطناعي بشكل مذهل، ثم اشرح باللغة العربية التعديلات الإضافية التي قمت بها (مثل الإضاءة، الكاميرا، جودة التفاصيل، الأسلوب، التراكيب) ولماذا أضفتها لتجعل النتيجة في غاية الاحترافية والدقة والجمال.`;

    const systemInstruction = `أنت خبير هندسة الأوامر (Prompt Engineering) الأكثر احترافية وتفوقاً في العالم. تفهم بعمق طريقة تفكير وكيفية استجابة نماذج توليد الصور مثل Midjourney وStable Diffusion والنماذج اللغوية مثل ChatGPT وClaude. تقوم بصياغة أوامر مفصلة وغنية بالكلمات المفتاحية والبارامترات التقنية التي تحقق جودة مبهرة من أول توليد.`;

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt, systemInstruction }),
      });

      if (!response.ok) {
        throw new Error('خطأ في الاتصال بالسيرفر.');
      }

      const data = await response.json();
      setOptimizedResult(data.reply);
    } catch (err) {
      console.error(err);
      // Offline fallback template
      setTimeout(() => {
        setOptimizedResult(`🚀 **الأمر المحسن والجاهز للنسخ (Optimized Prompt)**

\`\`\`text
high-end luxury cinematic rendering of ${simplePrompt}, photorealistic, ultra-detailed 8k resolution, cinematic studio lighting, volumetric glow, sharp focus, octane render, photorealistic textures, golden hour accent, elegant compositions, depth of field, artstation trending --ar 16:9 --v 6.0
\`\`\`

---

### 💡 الشرح الهندسي للتعديلات (Prompt Engineering Breakdown)

1. **الأسلوب البصري (Visual Style):** أضفنا \`high-end luxury cinematic\` و \`photorealistic\` لضمان خروج الصورة بطابع سينمائي راقٍ بدلاً من المظهر الكرتوني الافتراضي.
2. **محرك الرندر والتفاصيل (Render & Details):** كلمات مثل \`octane render\` و \`8k resolution\` تجبر النموذج على توليد أنسجة دقيقة جداً وانعكاسات ضوئية فائقة الدقة.
3. **الإضاءة (Lighting):** استهدفنا \`cinematic studio lighting\` مع \`volumetric glow\` للحصول على عمق إضاءة دراماتيكي يبرز العنصر الأساسي بشكل جذاب.
4. **بارامترات القياس والاصدار (Parameters):** قمنا بإضافة بارامتر الأبعاد \`--ar 16:9\` المناسب للعروض، وبارامتر الاصدار الأحدث \`--v 6.0\` لضمان الاستجابة القصوى للأوامر.`);
      }, 1000);
    } finally {
      setIsOptimizing(false);
    }
  };

  // Copy helper function
  const copyToClipboard = (text: string, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 bg-neutral-950 overflow-hidden" id="ai-lab-page">
      {/* Dynamic background tech particles and glowing circles */}
      <div className="absolute top-20 right-10 h-[400px] w-[400px] rounded-full bg-brand/5 blur-3xl opacity-30 animate-pulse pointer-events-none" />
      <div className="absolute bottom-40 left-10 h-[500px] w-[500px] rounded-full bg-brand/5 blur-3xl opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold font-mono mb-4">
              <Zap size={12} className="animate-bounce" />
              <span>INTERACTIVE GENERATIVE PLAYGROUND</span>
            </div>
            <h1 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-tight">
              مختبر <span className="text-brand glow-text-yellow">الذكاء الاصطناعي</span> (AI Lab)
            </h1>
            <div className="mt-4 h-1 w-24 bg-brand mx-auto rounded-full shadow-[0_0_10px_#F5B400]" />
            <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
              استكشف قوة دمج هندسة الذكاء الاصطناعي التوليدي في حلول الأعمال الرقمية. اختبر المولدات التفاعلية المباشرة بالأسفل والمدعومة بنماذج Gemini لمعاينة الجودة والسرعة الفائقة في تنفيذ الأفكار.
            </p>
          </motion.div>
        </div>

        {/* ==============================================
            SECTION 1: THE INTERACTIVE PLAYGROUND (مختبر الأدوات التفاعلي)
            ============================================== */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="flex items-center justify-center gap-2 font-sans font-extrabold text-xl sm:text-2xl text-white">
              <Wand2 className="text-brand" />
              <span>المختبر التفاعلي الذكي (جرب الأدوات فوراً)</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              اضغط على أحد التبويبات بالأسفل لتجربة حلول الذكاء الاصطناعي في صياغة المحتوى والتصميم
            </p>
          </div>

          {/* Tab Selection Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 max-w-2xl mx-auto p-1.5 rounded-2xl bg-neutral-900/60 border border-border-dark">
            <button
              onClick={() => setActivePlaygroundTab('ad-writer')}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activePlaygroundTab === 'ad-writer'
                  ? 'bg-brand text-black shadow-[0_0_15px_rgba(245,180,0,0.3)]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
              id="tab-ad-writer"
            >
              <FileText size={16} />
              <span>صانع السكربت الإعلاني</span>
            </button>
            <button
              onClick={() => setActivePlaygroundTab('prompt-optimizer')}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activePlaygroundTab === 'prompt-optimizer'
                  ? 'bg-brand text-black shadow-[0_0_15px_rgba(245,180,0,0.3)]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
              id="tab-prompt-optimizer"
            >
              <Terminal size={16} />
              <span>مهندس الأوامر المتقدم</span>
            </button>
            <button
              onClick={() => setActivePlaygroundTab('image-slider')}
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activePlaygroundTab === 'image-slider'
                  ? 'bg-brand text-black shadow-[0_0_15px_rgba(245,180,0,0.3)]'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
              id="tab-image-slider"
            >
              <Sliders size={16} />
              <span>محسن الصور بالرؤية</span>
            </button>
          </div>

          {/* Tab Contents Frame */}
          <div className="rounded-3xl border border-border-dark bg-card-dark/40 backdrop-blur-md p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              
              {/* Tab 1: AI Ad Copywriter */}
              {activePlaygroundTab === 'ad-writer' && (
                <motion.div
                  key="ad-writer-pane"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-brand">
                        <Flame size={18} />
                      </div>
                      <h3 className="font-sans font-bold text-lg text-white">صياغة سيناريوهات الإعلانات الفائقة</h3>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      أداة ذكية تكتب لك نصوصاً إعلانية وسكربتات فيديو للمنصات الرقمية تضمن تفاعلاً مذهلاً ومعدل تحويل مرتفع باستخدام نماذج Gemini.
                    </p>

                    <form onSubmit={generateAdScript} className="space-y-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-neutral-300 mb-1.5">ما هو المنتج أو الخدمة التي تريد ترويجها؟</label>
                        <input
                          type="text"
                          required
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          placeholder="مثال: تطبيق ذكي لتوصيل الوجبات الصحية والاشتراكات الشهرية"
                          className="w-full rounded-xl bg-neutral-900 border border-border-dark px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-brand/40 focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-neutral-300 mb-1.5">منصة النشر</label>
                          <select
                            value={adPlatform}
                            onChange={(e) => setAdPlatform(e.target.value)}
                            className="w-full rounded-xl bg-neutral-900 border border-border-dark px-3 py-3 text-xs text-white focus:border-brand/40 focus:outline-none"
                          >
                            <option value="TikTok / Reels">تيك توك / ريلز قصيرة</option>
                            <option value="YouTube Video">يوتيوب (فيديو كامل)</option>
                            <option value="Facebook / Instagram Posts">فيسبوك / انستقرام نصي</option>
                            <option value="LinkedIn Article / Post">لينكد إن احترافي</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-neutral-300 mb-1.5">نبرة الصوت المرجوة</label>
                          <select
                            value={adTone}
                            onChange={(e) => setAdTone(e.target.value)}
                            className="w-full rounded-xl bg-neutral-900 border border-border-dark px-3 py-3 text-xs text-white focus:border-brand/40 focus:outline-none"
                          >
                            <option value="حماسي ومؤثر جداً">حماسي ومحفز</option>
                            <option value="رسمي واحترافي مقنع">رسمي واحترافي</option>
                            <option value="كوميدي وخفيف الظل">فكاهي ومرح</option>
                            <option value="قصصي وتشويقي غامض">درامي وتشويقي</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isWriting || !productName.trim()}
                        className="w-full rounded-xl bg-brand py-3.5 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-brand-dark transition-all disabled:opacity-50"
                        id="btn-generate-ad"
                      >
                        {isWriting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>جاري التوليد وصياغة الأفكار...</span>
                          </>
                        ) : (
                          <>
                            <Wand2 size={16} />
                            <span>توليد السكربت الإعلاني ذكياً</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Ad Copywriter Output panel */}
                  <div className="lg:col-span-7 flex flex-col h-[350px] sm:h-[400px] rounded-2xl border border-border-dark bg-neutral-950/60 overflow-hidden">
                    <div className="bg-neutral-900/60 p-3.5 border-b border-border-dark flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-300 flex items-center gap-2">
                        <Terminal size={14} className="text-brand" />
                        <span>مخرجات صياغة النصوص والسيناريوهات</span>
                      </span>
                      {adResult && (
                        <button
                          onClick={() => copyToClipboard(adResult, setAdCopied)}
                          className="text-[10px] text-neutral-400 hover:text-brand flex items-center gap-1.5 bg-neutral-900 border border-border-dark px-2.5 py-1 rounded-lg"
                        >
                          {adCopied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                          <span>{adCopied ? 'تم النسخ!' : 'نسخ النص'}</span>
                        </button>
                      )}
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-xs sm:text-sm text-neutral-300 space-y-4 leading-relaxed whitespace-pre-wrap font-sans text-right scroll-smooth">
                      {adResult ? (
                        adResult
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-neutral-500 text-center space-y-3">
                          <FileText size={44} className="opacity-30 text-brand" />
                          <div className="max-w-xs">
                            <p className="font-bold text-neutral-400 text-xs sm:text-sm">لم يتم توليد أي سيناريو بعد</p>
                            <p className="text-[10px] sm:text-xs text-neutral-500 mt-1">أدخل تفاصيل منتجك في النموذج الأيمن، واضغط على زر التوليد لتشغيل الذكاء الاصطناعي مباشرة.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: AI Prompt Optimizer */}
              {activePlaygroundTab === 'prompt-optimizer' && (
                <motion.div
                  key="prompt-optimizer-pane"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <Terminal size={18} />
                      </div>
                      <h3 className="font-sans font-bold text-lg text-white">هندسة الأوامر الرقمية المتقدمة</h3>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      أداة احترافية تُمكّنك من تحويل الأفكار البسيطة والبدائية لبرومبتات (Prompts) برمجية مفصلة للغاية ومدعومة بالكلمات المفتاحية لـ Midjourney و ChatGPT.
                    </p>

                    <form onSubmit={generateOptimizedPrompt} className="space-y-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-neutral-300 mb-1.5">المنصة المستهدفة بالذكاء الاصطناعي</label>
                        <div className="grid grid-cols-3 gap-2">
                          {['Midjourney (صور)', 'Stable Diffusion', 'ChatGPT / Claude'].map((engine) => (
                            <button
                              key={engine}
                              type="button"
                              onClick={() => setTargetEngine(engine)}
                              className={`py-2 rounded-lg text-[10px] sm:text-xs font-bold border transition-all duration-300 ${
                                targetEngine === engine
                                  ? 'border-brand/40 bg-brand/10 text-brand'
                                  : 'border-border-dark bg-neutral-900 text-neutral-400 hover:text-white'
                              }`}
                            >
                              {engine.split(' ')[0]}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-300 mb-1.5">اكتب فكرتك أو أمرك البسيط باللغة العربية</label>
                        <textarea
                          required
                          rows={3}
                          value={simplePrompt}
                          onChange={(e) => setSimplePrompt(e.target.value)}
                          placeholder="مثال: صورة فنجان قهوة سعودية يخرج منها بخار على طاولة خشبية دافئة"
                          className="w-full rounded-xl bg-neutral-900 border border-border-dark px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-brand/40 focus:outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isOptimizing || !simplePrompt.trim()}
                        className="w-full rounded-xl bg-brand py-3.5 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-brand-dark transition-all disabled:opacity-50"
                        id="btn-optimize-prompt"
                      >
                        {isOptimizing ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            <span>جاري معالجة وهندسة البرومبت...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={16} />
                            <span>هندسة وتحسين الأمر فوراً</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  {/* Prompt Output panel */}
                  <div className="lg:col-span-7 flex flex-col h-[350px] sm:h-[400px] rounded-2xl border border-border-dark bg-neutral-950/60 overflow-hidden">
                    <div className="bg-neutral-900/60 p-3.5 border-b border-border-dark flex items-center justify-between">
                      <span className="text-xs font-bold text-neutral-300 flex items-center gap-2">
                        <Cpu size={14} className="text-brand" />
                        <span>الأمر المهندس المحسن (Prompt Output)</span>
                      </span>
                      {optimizedResult && (
                        <button
                          onClick={() => copyToClipboard(optimizedResult, setPromptCopied)}
                          className="text-[10px] text-neutral-400 hover:text-brand flex items-center gap-1.5 bg-neutral-900 border border-border-dark px-2.5 py-1 rounded-lg"
                        >
                          {promptCopied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                          <span>{promptCopied ? 'تم النسخ!' : 'نسخ البرومبت'}</span>
                        </button>
                      )}
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-xs sm:text-sm text-neutral-300 space-y-4 leading-relaxed whitespace-pre-wrap font-mono text-right scroll-smooth">
                      {optimizedResult ? (
                        optimizedResult
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-neutral-500 text-center space-y-3">
                          <Terminal size={44} className="opacity-30 text-brand" />
                          <div className="max-w-xs font-sans">
                            <p className="font-bold text-neutral-400 text-xs sm:text-sm">في انتظار صياغة الأمر</p>
                            <p className="text-[10px] sm:text-xs text-neutral-500 mt-1">اكتب أي أمر بسيط على اليمين، ودع مهندس الأوامر يضيف لك تفاصيل الإضاءة والواقعية وبارامترات الكاميرا الدقيقة.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: AI Vision Slider (Image Enhancer) */}
              {activePlaygroundTab === 'image-slider' && (
                <motion.div
                  key="image-slider-pane"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                        <Sliders size={18} />
                      </div>
                      <h3 className="font-sans font-bold text-lg text-white">معالجة وتحسين جودة الصور</h3>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      عرض توضيحي تفاعلي لتقنيات معالجة الرؤية بالذكاء الاصطناعي (AI Upscaling / Super Resolution) حيث يتم إعادة بناء التفاصيل التالفة والوضوح للأشياء.
                    </p>

                    {/* Presets selectors */}
                    <div className="space-y-2.5">
                      <label className="block text-xs font-bold text-neutral-300">اختر عنصر الفحص والمعاينة</label>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          { title: 'ساعة ذكية فاخرة (تفاصيل معدنية زجاجية)', desc: 'تحسين انعكاسات الإضاءة ووضوح الأرقام' },
                          { title: 'شعار تقني (معالجة حواف وخطوط بكسلية)', desc: 'تحويل الحواف المتدرجة إلى متجهات حادة ونظيفة' },
                          { title: 'صورة شخصية (استعادة ملامح وإضاءة استوديو)', desc: 'تصحيح التعرض واستعادة تفاصيل البشرة والشعر' }
                        ].map((preset, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => {
                              setSelectedPreset(idx);
                              setHasProcessed(true);
                            }}
                            className={`p-3 text-right rounded-xl border transition-all duration-300 flex flex-col ${
                              selectedPreset === idx
                                ? 'border-brand bg-brand/5'
                                : 'border-border-dark bg-neutral-900/40 hover:bg-neutral-800/40'
                            }`}
                          >
                            <span className="text-xs font-bold text-white">{preset.title}</span>
                            <span className="text-[10px] text-neutral-400 mt-1">{preset.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={triggerImageEnhance}
                      disabled={isProcessing}
                      className="w-full rounded-xl bg-brand py-3.5 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-brand-dark transition-all disabled:opacity-50"
                      id="btn-enhance-image"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>جاري فحص وتكبير بيكسلات الصورة {processingProgress}%...</span>
                        </>
                      ) : (
                        <>
                          <RefreshCw size={16} />
                          <span>تطبيق معالجة الذكاء الاصطناعي الفوري</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Interactive Image Slider */}
                  <div className="lg:col-span-7 flex flex-col items-center justify-center">
                    
                    {isProcessing ? (
                      /* Futuristic processing / scan animation */
                      <div className="w-full h-[320px] sm:h-[360px] rounded-3xl border border-border-dark bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(#F5B400_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                        
                        {/* Scanner Laser effect */}
                        <div 
                          className="absolute left-0 right-0 h-1.5 bg-brand/60 shadow-[0_0_15px_#F5B400] z-20 animate-bounce"
                          style={{ top: `${processingProgress}%` }}
                        />

                        <div className="text-center z-10 space-y-4">
                          <Cpu size={48} className="text-brand animate-spin mx-auto" style={{ animationDuration: '3s' }} />
                          <div className="space-y-1">
                            <p className="font-mono text-xs text-brand font-bold">ANALYZING MATRIX PIXELS...</p>
                            <p className="text-[10px] text-neutral-400">Generative Adversarial Networks Active</p>
                          </div>
                          {/* Progress bar */}
                          <div className="w-48 h-1.5 bg-neutral-900 rounded-full overflow-hidden mx-auto border border-border-dark">
                            <div className="h-full bg-brand transition-all duration-150" style={{ width: `${processingProgress}%` }} />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Live Interactive Before/After Clip Slider */
                      <div className="w-full">
                        <div 
                          ref={sliderContainerRef}
                          onMouseMove={handleMouseMove}
                          onTouchMove={handleTouchMove}
                          onMouseDown={() => setIsDragging(true)}
                          onTouchStart={() => setIsDragging(true)}
                          className="w-full h-[320px] sm:h-[360px] rounded-3xl border border-border-dark bg-neutral-950 relative overflow-hidden select-none cursor-ew-resize glow-yellow"
                        >
                          {/* 1. Behind view: Before (Low-Quality) */}
                          <div className="absolute inset-0 w-full h-full p-4 flex items-center justify-center bg-neutral-950">
                            {renderPreset(selectedPreset, false)}
                            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-[9px] font-mono text-neutral-400 px-2 py-1 rounded-md border border-neutral-800">
                              BEFORE (دقة ضعيفة)
                            </div>
                          </div>

                          {/* 2. Top view: After (High-Quality, masked using clipPath) */}
                          <div 
                            className="absolute inset-0 w-full h-full p-4 flex items-center justify-center bg-neutral-950 pointer-events-none"
                            style={{ 
                              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` 
                            }}
                          >
                            {renderPreset(selectedPreset, true)}
                            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-[9px] font-mono text-brand px-2 py-1 rounded-md border border-brand/20">
                              AFTER (معالجة فائقة 4K)
                            </div>
                          </div>

                          {/* 3. Sliding Vertical bar handle divider */}
                          <div 
                            className="absolute top-0 bottom-0 w-1 bg-brand shadow-[0_0_10px_#F5B400] z-30 pointer-events-none"
                            style={{ left: `${sliderPos}%` }}
                          >
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-8 w-8 rounded-full bg-brand border-4 border-neutral-950 text-neutral-950 flex items-center justify-center shadow-lg">
                              <ArrowLeftRight size={12} className="font-black" />
                            </div>
                          </div>

                        </div>
                        <p className="text-center text-[11px] text-neutral-400 mt-3 flex items-center justify-center gap-1.5 font-light">
                          <span>اسحب المقبض الأصفر في المنتصف يميناً ويساراً لمشاهدة الفرق المذهل</span>
                          <ArrowLeftRight size={12} className="text-brand" />
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>

        {/* ==============================================
            SECTION 2: ALL AI TOOLS DIRECTORY (قائمة جميع الأدوات وتصنيفاتها)
            ============================================== */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-sans font-black text-2xl text-white">
              منظومة الأدوات ومجالات الإتقان
            </h2>
            <div className="mt-2 h-1 w-16 bg-brand mx-auto rounded-full" />
            <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-light">
              تصنيف متكامل لجميع برمجيات ومحركات الذكاء الاصطناعي التوليدي التي يوظفها الأمير باحترافية لتسريع ورفع جودة الإنتاج الرقمي.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {toolCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="group rounded-3xl border border-border-dark bg-card-dark/25 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center ${cat.iconColor} border border-white/5`}>
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-sm sm:text-base text-white group-hover:text-brand transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] text-neutral-500 font-mono">0{idx + 1} // AREA SYSTEM</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {cat.tools.map((tool, tIdx) => (
                      <div
                        key={tIdx}
                        className="rounded-xl border border-border-dark/60 bg-neutral-950/40 p-4 transition-colors hover:bg-neutral-900/30"
                      >
                        <div className="flex items-start justify-between">
                          <span className="font-bold text-white text-xs sm:text-sm">{tool.name}</span>
                          <span className="rounded-full bg-brand/10 border border-brand/20 px-2 py-0.5 text-[9px] font-bold text-brand font-mono">
                            {tool.level}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-neutral-400 font-light leading-relaxed">
                          {tool.description}
                        </p>
                        <div className="mt-2.5 pt-2 border-t border-border-dark/40 text-[9px] text-neutral-500">
                          <span className="text-neutral-400 font-bold">الاستخدام:</span> {tool.useCase}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <ContactCTA setActiveTab={setActiveTab} />
      </div>
    </section>
  );
}
