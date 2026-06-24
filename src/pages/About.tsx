import { Eye, Send, Sparkles, Layers, Award } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

export default function About({ setActiveTab }: AboutProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 bg-neutral-950 overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-brand/5 blur-3xl opacity-40" />
      <div className="absolute bottom-1/3 left-10 h-72 w-72 rounded-full bg-brand/5 blur-3xl opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white">
            منصة <span className="text-brand font-black">Ameer.Pal</span>
          </h2>
          <div className="mt-3 h-1 w-20 bg-brand mx-auto rounded-full" />
          <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            منصة متخصصة في التصميم والبرمجة والتدريب، نصنع من خلالها تجارب رقمية مؤثرة وحلولًا عملية تواكب احتياجات المستقبل، مع توفير برامج تدريبية وكورسات تعليمية في مجال الذكاء الاصطناعي والتقنيات الرقمية الحديثة.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: Vision, Message, What Distinguhes Us */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Vision Card */}
            <div className="group rounded-2xl border border-border-dark bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-brand/30">
              <div className="mb-6 overflow-hidden rounded-xl border border-border-dark bg-neutral-950 aspect-video">
                <img
                  src="/images/about/vision.svg"
                  alt="رؤيتنا"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="flex items-center gap-3 font-sans font-bold text-xl text-white">
                <Eye className="text-brand shrink-0" size={22} />
                <span>رؤيتنا</span>
              </h3>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                أن نكون منصة رائدة في تمكين الأفراد والشركات وصناع المحتوى من الاستفادة من التصميم والتقنية والذكاء الاصطناعي لبناء مستقبل رقمي أكثر تأثيرًا وابتكارًا.
              </p>
            </div>

            {/* Message Card */}
            <div className="group rounded-2xl border border-border-dark bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-brand/30">
              <div className="mb-6 overflow-hidden rounded-xl border border-border-dark bg-neutral-950 aspect-video">
                <img
                  src="/images/about/mission.svg"
                  alt="رسالتنا"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="flex items-center gap-3 font-sans font-bold text-xl text-white">
                <Send className="text-brand shrink-0" size={22} />
                <span>رسالتنا</span>
              </h3>
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-light">
                تقديم حلول رقمية مبتكرة وبرامج تدريبية وكورسات تعليمية متخصصة في الذكاء الاصطناعي والتقنيات الحديثة، لمساعدة الأفراد والشركات وصناع المحتوى على تطوير مهاراتهم، وتعزيز حضورهم الرقمي، وتحقيق نمو مستدام في عالم سريع التغير.
              </p>
            </div>

            {/* What Distinguishes Us Card */}
            <div className="group rounded-2xl border border-border-dark bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-brand/30">
              <div className="mb-6 overflow-hidden rounded-xl border border-border-dark bg-neutral-950 aspect-video">
                <img
                  src="/images/about/difference.svg"
                  alt="ما الذي يميزنا؟"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="flex items-center gap-3 font-sans font-bold text-xl text-white">
                <Sparkles className="text-brand shrink-0" size={22} />
                <span>ما الذي يميزنا؟</span>
              </h3>
              <p className="mt-4 text-sm text-neutral-300 leading-relaxed font-light">
                نجمع بين الإبداع والتقنية والتدريب العملي لتقديم حلول حديثة، سهلة الاستخدام، ومصممة لتحقيق نتائج حقيقية وقابلة للقياس، مع التركيز على نقل المعرفة وتمكين الأفراد والشركات من مواكبة التطور الرقمي.
              </p>
            </div>

          </div>

          {/* Left Column: What We Offer, Our Values */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* What We Offer Card */}
            <div className="group rounded-2xl border border-border-dark bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-brand/30">
              <div className="mb-6 overflow-hidden rounded-xl border border-border-dark bg-neutral-950 aspect-video">
                <img
                  src="/images/about/offers.svg"
                  alt="ماذا نقدم؟"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="flex items-center gap-3 font-sans font-bold text-xl text-white mb-6">
                <Layers className="text-brand shrink-0" size={22} />
                <span>ماذا نقدم؟</span>
              </h3>
              <ul className="space-y-4 text-sm text-neutral-300">
                {[
                  'تصميم الهويات البصرية وتجارب المستخدم (UX/UI)',
                  'تطوير المواقع والحلول الرقمية',
                  'صناعة المحتوى الرقمي والإبداعي',
                  'التدريب العملي على أدوات وتقنيات الذكاء الاصطناعي',
                  'كورسات وبرامج تعليمية متخصصة في الذكاء الاصطناعي وصناعة المحتوى الرقمي',
                  'استشارات تقنية وحلول رقمية مبتكرة'
                ].map((offer, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-brand shrink-0 shadow-[0_0_8px_rgba(245,180,0,0.6)]" />
                    <span className="leading-relaxed">{offer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Values Card */}
            <div className="group rounded-2xl border border-border-dark bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-brand/30">
              <div className="mb-6 overflow-hidden rounded-xl border border-border-dark bg-neutral-950 aspect-video">
                <img
                  src="/images/about/values.svg"
                  alt="قيمنا"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="flex items-center gap-3 font-sans font-bold text-xl text-white mb-6">
                <Award className="text-brand shrink-0" size={22} />
                <span>قيمنا</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'الإبداع والابتكار',
                  'الجودة والاحترافية',
                  'التعلم والتطوير المستمر',
                  'التركيز على النتائج',
                  'مشاركة المعرفة ونقل الخبرات',
                  'تمكين الأفراد والشركات',
                  'مواكبة التقنيات المستقبلية'
                ].map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-lg border border-border-dark/60 bg-neutral-950/40 p-3 text-sm text-neutral-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                    <span className="font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        <ContactCTA setActiveTab={setActiveTab} />
      </div>
    </section>
  );
}
