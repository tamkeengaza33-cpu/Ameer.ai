import * as Icons from 'lucide-react';
import { services } from '../data';
import ContactCTA from '../components/ContactCTA';

interface ServicesProps {
  setActiveTab: (tab: string) => void;
}

export default function Services({ setActiveTab }: ServicesProps) {
  // Dynamic Icon Renderer
  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6 text-brand" />;
    }
    return <Icons.Sparkles className="h-6 w-6 text-brand" />;
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 h-80 w-80 rounded-full bg-brand/5 blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white">
            الخدمات و<span className="text-brand font-black">الحلول الرقمية</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-brand mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light font-sans">
            مجموعة متكاملة من الخدمات التخصصية والبرامج التدريبية المبتكرة التي تدمج قوة الهندسة والذكاء الاصطناعي مع جماليات الفن والتصميم.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-border-dark bg-neutral-900/40 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_8px_30px_rgba(245,180,0,0.08)]"
            >
              <div>
                {/* Service Image */}
                {service.image && (
                  <div className="mb-6 overflow-hidden rounded-xl border border-border-dark bg-neutral-950 aspect-video">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Icon Circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-border-dark shadow-inner transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/5">
                  {renderIcon(service.icon)}
                </div>

                {/* Service Title */}
                <h3 className="mt-5 font-sans font-bold text-xl text-white group-hover:text-brand transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Decorative side accent */}
              <div className="absolute top-0 right-0 bottom-0 w-1 rounded-l-2xl bg-transparent transition-colors duration-300 group-hover:bg-brand" />

              {/* Bottom footer tag */}
              <div className="mt-6 pt-4 border-t border-border-dark/60 flex items-center justify-between text-xs font-semibold text-neutral-500 group-hover:text-brand-dark transition-colors">
                <span>استشارة مخصصة متوفرة</span>
                <span className="font-mono">ID: {service.id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Guarantee Banner */}
        <div className="mt-16 rounded-2xl border border-brand/20 bg-radial from-brand/5 to-transparent p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <h4 className="font-sans font-bold text-lg text-white">
            هل تبحث عن حل رقمي <span className="text-brand">مخصص وخارج عن المألوف</span>؟
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            نحن هنا لنقدم لك تجربة مخصصة تنقل أعمالك إلى آفاق جديدة. كل مشروع يتم التخطيط له لضمان تلبية تطلعاتك وتحقيق نتائج قابلة للقياس.
          </p>
        </div>

        <ContactCTA setActiveTab={setActiveTab} />
      </div>
    </section>
  );
}
