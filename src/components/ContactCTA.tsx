import { MessageSquare, ArrowLeft } from 'lucide-react';

interface ContactCTAProps {
  setActiveTab: (tab: string) => void;
}

export default function ContactCTA({ setActiveTab }: ContactCTAProps) {
  const handleContactClick = () => {
    setActiveTab('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-16 sm:mt-24 max-w-4xl mx-auto px-4" id="contact-cta-box">
      <div className="relative rounded-3xl border border-brand/30 bg-gradient-to-br from-neutral-900 via-neutral-900/60 to-brand/5 p-8 sm:p-10 backdrop-blur-md shadow-[0_15px_40px_rgba(245,180,0,0.06)] overflow-hidden group text-center">
        {/* Background Decorative Glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/20 transition-all duration-500 pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto space-y-5">
          {/* Icon Badge */}
          <div className="h-12 w-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-2 shadow-[0_0_20px_rgba(245,180,0,0.15)]">
            <MessageSquare size={24} className="animate-pulse" />
          </div>

          <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
            راسلني <span className="text-brand glow-text-yellow">الآن</span>
          </h3>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            هل لديك فكرة مشروع إبداعي، استفسار تقني، أو رغبة في مناقشة عمل جديد؟ لا تتردد في كتابة رسالتك فوراً، وسأقوم بالرد عليك ومناقشة التفاصيل في أقرب وقت ممكن.
          </p>

          <div className="pt-4">
            <button
              onClick={handleContactClick}
              className="rounded-2xl bg-brand hover:bg-brand-dark px-8 py-4 text-black font-black text-sm sm:text-base flex items-center gap-3.5 shadow-lg hover:shadow-brand/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <span>ابدأ المراسلة الآن</span>
              <ArrowLeft size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
