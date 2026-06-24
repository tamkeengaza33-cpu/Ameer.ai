import React, { useState } from 'react';
import WhatsAppQR from '../components/WhatsAppQR';
import { Mail, MapPin, Send, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'ai-solutions', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API Submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: 'ai-solutions', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/3 left-10 h-72 w-72 rounded-full bg-brand/5 blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white">
            راسلني <span className="text-brand font-black">الآن</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-brand mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            سواء كنت ترغب في دمج الذكاء الاصطناعي، تصميم هوية جديدة، أو برمجة موقع متكامل، أنا هنا لمساعدتك على بدء الرحلة فوراً.
          </p>
        </div>

        {/* Contact Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Right Column: Contact info sidebar with WhatsApp QR */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-8">
            
            {/* Quick Stats/Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>متاح حالياً لاستقبال مشاريع جديدة</span>
            </div>

            {/* Structured Contact Details */}
            <div className="w-full rounded-2xl border border-border-dark bg-neutral-950 p-6 space-y-5 text-right">
              <h3 className="font-sans font-bold text-base text-white border-b border-border-dark pb-3 mb-4">بيانات المراسلة</h3>
              
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-brand">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">بريد إلكتروني مباشر</span>
                  <a href="mailto:tamkeengaza33@gmail.com" className="text-sm font-semibold text-neutral-200 hover:text-brand transition-colors font-mono">
                    tamkeengaza33@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-brand">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">المقر والموقع الجغرافي</span>
                  <span className="text-sm font-semibold text-neutral-200">
                    مصر/ القاهرة - متاح للعمل عن بُعد عالمياً
                  </span>
                </div>
              </div>
            </div>

            {/* QR Code Container */}
            <WhatsAppQR className="w-full" size="md" />

          </div>

          {/* Left Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border-dark bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
              
              {success ? (
                /* Success Message State */
                <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-95 duration-300">
                  <div className="rounded-full bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400 mb-6">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-white">تم إرسال رسالتك بنجاح!</h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
                    شكراً لاهتمامك وتواصلك الإبداعي. سأقوم بمراجعة طلبك والرد عليك عبر بريدك الإلكتروني في أقل من ٢٤ ساعة.
                  </p>
                </div>
              ) : (
                /* Interactive Form State */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-sans font-bold text-lg text-white mb-6 flex items-center gap-2">
                    <MessageSquare size={18} className="text-brand" />
                    <span>نموذج مراسلة</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5 text-right">
                      <label htmlFor="name" className="text-xs font-semibold text-neutral-400">الاسم الكريم</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="أدخل اسمك بالكامل"
                        className="rounded-xl bg-neutral-950 border border-border-dark px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-brand/40 focus:outline-none focus:ring-1 focus:ring-brand/40"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5 text-right">
                      <label htmlFor="email" className="text-xs font-semibold text-neutral-400">البريد الإلكتروني</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        className="rounded-xl bg-neutral-950 border border-border-dark px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-brand/40 focus:outline-none focus:ring-1 focus:ring-brand/40 text-left font-mono"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 text-right">
                    <label htmlFor="subject" className="text-xs font-semibold text-neutral-400">نوع الخدمة المطلوبة</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="rounded-xl bg-neutral-950 border border-border-dark px-4 py-3 text-xs sm:text-sm text-white focus:border-brand/40 focus:outline-none focus:ring-1 focus:ring-brand/40"
                    >
                      <option value="visual-identity">تصميم الهويات البصرية</option>
                      <option value="ux-ui">تصميم تجربة وواجهة المستخدم UX/UI</option>
                      <option value="web-dev">تطوير المواقع والمنصات الرقمية</option>
                      <option value="tech-solutions">البرمجة والحلول التقنية</option>
                      <option value="ai-content">إنتاج المحتوى بالذكاء الاصطناعي</option>
                      <option value="video-ads">إنتاج الفيديو والإعلانات الذكية</option>
                      <option value="campaign-mgmt">إدارة الحملات الإعلانية</option>
                      <option value="ai-training">التدريب الإلكتروني في الذكاء الاصطناعي</option>
                      <option value="creators-training">تدريب صناع المحتوى</option>
                      <option value="prompt-eng">هندسة الأوامر Prompt Engineering</option>
                      <option value="digital-consulting">الاستشارات الرقمية والذكاء الاصطناعي</option>
                      <option value="course-building">بناء المحتوى التعليمي والكورسات</option>
                      <option value="poster-design">تصميم الصور والبوسترات الإعلانية</option>
                      <option value="presentation-design">تصميم العروض التقديمية الاحترافية</option>
                      <option value="short-videos">إنتاج فيديوهات إعلانية قصيرة</option>
                      <option value="other">طلب مخصص آخر</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 text-right">
                    <label htmlFor="message" className="text-xs font-semibold text-neutral-400">تفاصيل الرسالة</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="يرجى كتابة تفاصيل موجزة عن فكرة المشروع، الميزانية المقدرة، أو أي تساؤل يدور في ذهنك..."
                      className="rounded-xl bg-neutral-950 border border-border-dark px-4 py-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:border-brand/40 focus:outline-none focus:ring-1 focus:ring-brand/40"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-brand py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-brand-dark hover:shadow-[0_4px_20px_rgba(245,180,0,0.3)] disabled:opacity-55"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>يتم إرسال رسالتك الآن...</span>
                      </>
                    ) : (
                      <>
                        <span>إرسل الان</span>
                        <Send size={16} className="rotate-180" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
