import React from 'react';
import { X, Download, Briefcase, Award, GraduationCap, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { timelineItems } from '../data';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a clean text file or handle simulated PDF download
    const cvText = `
=========================================
AMEER.PAL - PERSONAL RESUME & PORTFOLIO
الأمير الفلسطيني - سيرة ذاتية مهنية متكاملة
=========================================

معلومات الاتصال (Contact Info):
----------------------------
البريد الإلكتروني: tamkeengaza33@gmail.com
الهاتف / واتساب: +201013189909
الموقع: فلسطين / غزة (متاح للعمل عن بُعد عالمياً)

الملخص المهني (Professional Summary):
----------------------------------
مهندس ومطور حلول ذكاء اصطناعي، مصمم هويات بصرية وتجربة مستخدم، وصانع محتوى مرئي.
أقوم بدمج الفن بالتكنولوجيا لخلق تجارب رقمية متكاملة وسهلة الاستخدام تخدم الأهداف الرقمية والتسويقية للشركات.

الخبرات المهنية (Professional Experience):
--------------------------------------
* ٢٠٢٤ - ٢٠٢٦: مطور واجهات ذكية ومصمم مستقل
  - تطوير بوابات إلكترونية وحلول برمجية مبنية على الذكاء الاصطناعي التوليدي.
* ٢٠٢٢ - ٢٠٢٤: أخصائي تصميم هوية بصرية ومونتاج
  - بناء وتصميم العلامات التجارية للشركات والناشئين، وصناعة الفيديوهات التسويقية لزيادة الوصول والمبيعات.
* ٢٠٢٠ - ٢٠٢٢: بداية الرحلة في عالم التصميم البرمجي
  - دراسة واكتساب الخبرات العميقة في مجالات تصميم الويب والمونتاج الإبداعي.

المهارات والأدوات المعتمدة (Skills & Tools):
-----------------------------------------
- الذكاء الاصطناعي التوليدي: Gemini 2.5 Flash / Pro, Prompt Engineering
- التصميم وتوليد الصور: Midjourney, Stable Diffusion, Figma
- البرمجة وتطوير الويب: React 19, TypeScript, Tailwind CSS, Vite
- صناعة المحتوى والمونتاج: After Effects, Premiere Pro, Blender 3D

الشهادات والاعتمادات (Certifications):
------------------------------------
1. شهادة مطور حلول ذكاء اصطناعي معتمد - Google AI Cloud (٢٠٢٥)
2. دبلوم متقدم في هندسة وتصميم تجربة المستخدم - Interaction Design Foundation (٢٠٢٤)
3. أفضل مصمم بورتفوليو رقمي مستقل - عرب ويب للمطورين (٢٠٢٣)
    `;
    
    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ameer_Pal_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-brand/30 bg-neutral-950 p-6 sm:p-10 shadow-[0_0_50px_rgba(245,180,0,0.15)] text-right"
        dir="rtl"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-xl bg-neutral-900 border border-border-dark text-neutral-400 hover:text-brand hover:border-brand/40 transition-all cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* CV Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border-dark pb-8 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-brand font-bold uppercase">Ameer.pal Profile</span>
            <h2 className="font-sans font-black text-3xl text-white mt-1">الأمير الفلسطيني</h2>
            <p className="text-sm text-neutral-400 mt-2">مهندس ومطور حلول ذكاء اصطناعي • مصمم هويات بصرية وتجربة مستخدم • صانع محتوى</p>
          </div>
          
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-brand-dark hover:shadow-[0_0_20px_rgba(245,180,0,0.35)] cursor-pointer"
          >
            <Download size={16} />
            <span>تحميل السيرة الذاتية (TXT)</span>
          </button>
        </div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
          
          {/* Right Column: Experience and Education */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h3 className="flex items-center gap-2 font-sans font-bold text-lg text-white mb-4 border-r-4 border-brand pr-2">
                <Briefcase size={18} className="text-brand" />
                <span>الخبرة المهنية</span>
              </h3>
              
              <div className="space-y-4">
                {timelineItems.map((item, index) => (
                  <div key={index} className="rounded-xl border border-border-dark bg-neutral-900/30 p-5">
                    <span className="text-xs font-mono text-brand font-bold">{item.year}</span>
                    <h4 className="font-sans font-bold text-base text-white mt-1">{item.title}</h4>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-sans font-bold text-lg text-white mb-4 border-r-4 border-brand pr-2">
                <Award size={18} className="text-brand" />
                <span>الشهادات والاعتمادات</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border-dark bg-neutral-900/30 p-4">
                  <h4 className="text-xs font-bold text-white">مطور ذكاء اصطناعي معتمد</h4>
                  <span className="text-[10px] text-neutral-500 block mt-1">Google AI Cloud • ٢٠٢٥</span>
                </div>
                <div className="rounded-xl border border-border-dark bg-neutral-900/30 p-4">
                  <h4 className="text-xs font-bold text-white">دبلوم تجربة المستخدم</h4>
                  <span className="text-[10px] text-neutral-500 block mt-1">IDF • ٢٠٢٤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column: Contact and Skills */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-xl border border-border-dark bg-neutral-900/20 p-5 space-y-4">
              <h3 className="font-sans font-bold text-base text-white border-b border-border-dark pb-2">بيانات التواصل</h3>
              
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <Mail size={14} className="text-brand shrink-0" />
                <span className="font-mono">tamkeengaza33@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <Phone size={14} className="text-brand shrink-0" />
                <span className="font-mono" dir="ltr">+201013189909</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <MapPin size={14} className="text-brand shrink-0" />
                <span>فلسطين / غزة (عن بُعد)</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <Globe size={14} className="text-brand shrink-0" />
                <span className="font-mono">Ameer.pal</span>
              </div>
            </div>

            <div className="rounded-xl border border-border-dark bg-neutral-900/20 p-5">
              <h3 className="font-sans font-bold text-base text-white border-b border-border-dark pb-2 mb-3">المهارات والتقنيات</h3>
              <div className="flex flex-wrap gap-1.5">
                {['Gemini SDK', 'React 19', 'TypeScript', 'Tailwind CSS', 'Figma UI/UX', 'After Effects', 'Midjourney', 'Blender 3D', 'Prompt Engineering', 'Advertising Strategy'].map((skill, index) => (
                  <span 
                    key={index}
                    className="rounded bg-neutral-900 border border-border-dark px-2.5 py-1 text-[10px] font-semibold text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
              <div className="inline-block rounded-full bg-emerald-500/20 p-1.5 text-emerald-400 mb-2">
                <span className="block h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <h4 className="text-xs font-bold text-emerald-400">متاح للمشاريع الجديدة والتعاقدات</h4>
              <p className="text-[10px] text-neutral-400 mt-1">ابدأ استشارتك المجانية اليوم لمشروع مخصص بالكامل</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
