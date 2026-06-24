import AmeerPhoto from '../components/AmeerPhoto';
import { ArrowLeft, Sparkles, Brain, Cpu } from 'lucide-react';
import heroBgImg from '../assets/images/hero-bg.jpg';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const handleActionClick = (id: string) => {
    setActiveTab(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Hero background image */}
      <div 
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBgImg})`,
          width: '100%',
          minHeight: '100vh'
        }}
      />

      {/* Dark gradient overlay above the image to keep Arabic text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950 pointer-events-none" />

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-brand/5 blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right/Main Content Column (RTL text) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Display Heading */}
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.3] tracking-tight">
              الإبداع الرقمي <br />
              <span className="text-brand glow-text-yellow font-black">يبدأ من هنا</span>
            </h1>

            {/* Subtitle description */}
            <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
              منصة إبداعية متكاملة تجمع بين التصميم والذكاء الاصطناعي والتدريب، لمساعدة الأفراد والشركات وصناع المحتوى على بناء حضور رقمي احترافي، وإنتاج محتوى مؤثر، وتطوير مهاراتهم باستخدام أحدث التقنيات لتحقيق نتائج مستدامة.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleActionClick('portfolio')}
                className="flex items-center justify-center gap-2.5 rounded-xl bg-brand px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-brand-dark hover:shadow-[0_0_25px_rgba(245,180,0,0.35)] cursor-pointer"
              >
                <span>شاهد معرض أعمالي</span>
                <ArrowLeft size={16} />
              </button>
              
              <button
                onClick={() => handleActionClick('contact')}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-border-dark bg-neutral-900/60 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-neutral-800 hover:border-brand/40 cursor-pointer"
              >
                <span>تواصل فوري</span>
                <ArrowLeft size={16} className="rotate-180" />
              </button>

              <button
                onClick={() => handleActionClick('assistant')}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-purple-500/40 bg-purple-950/20 px-7 py-4 text-sm font-bold text-purple-300 transition-all duration-300 hover:bg-purple-900/30 hover:border-purple-400/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] cursor-pointer"
              >
                <Brain size={16} className="text-purple-400 animate-pulse" />
                <span>المساعد الذكي (AI)</span>
                <ArrowLeft size={16} className="rotate-180 text-purple-400" />
              </button>
            </div>



          </div>

          {/* Left Photo & Badges Column */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <AmeerPhoto className="h-[440px] w-full max-w-sm shadow-[0_20px_50px_rgba(0,0,0,0.7)]" glow={true} />
          </div>

        </div>
      </div>
    </section>
  );
}
