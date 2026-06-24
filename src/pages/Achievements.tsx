import { achievementStats } from '../data';
import { Award, ShieldCheck, Milestone, CheckSquare, Heart } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

interface AchievementsProps {
  setActiveTab: (tab: string) => void;
}

export default function Achievements({ setActiveTab }: AchievementsProps) {
  const statItems = [
    {
      value: achievementStats.projectsCount,
      label: 'مشاريع ذكية مكتملة',
      description: 'من بوابات إلكترونية وحلول برمجية ومستودعات برمجية معقدة.',
      icon: <Milestone className="h-6 w-6 text-brand" />
    },
    {
      value: achievementStats.designsCount,
      label: 'شعار وهوية بصرية',
      description: 'علامات تجارية متكاملة وواجهات مستخدم تم بناؤها من الصفر.',
      icon: <Award className="h-6 w-6 text-brand" />
    },
    {
      value: achievementStats.videosCount,
      label: 'فيديو ترويجي وموشن جرافيك',
      description: 'حملات تسويقية مرئية ومونتاج سينمائي بمئات آلاف المشاهدات.',
      icon: <CheckSquare className="h-6 w-6 text-brand" />
    },
    {
      value: achievementStats.fieldsCount,
      label: 'مجالات تخصص متكاملة',
      description: 'هندسة الذكاء الاصطناعي، التصميم، المونتاج، وتطوير الويب.',
      icon: <ShieldCheck className="h-6 w-6 text-brand" />
    }
  ];

  const certificates = [
    { title: 'شهادة مطور حلول ذكاء اصطناعي معتمد', issuer: 'Google AI Cloud', date: '٢٠٢٥' },
    { title: 'دبلوم متقدم في هندسة وتصميم تجربة المستخدم', issuer: 'Interaction Design Foundation', date: '٢٠٢٤' },
    { title: 'أفضل مصمم بورتفوليو رقمي مستقل', issuer: 'عرب ويب للمطورين', date: '٢٠٢٣' },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 bg-neutral-900 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white">
            الإنجازات و<span className="text-brand font-black">أرقام النجاح</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-brand mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            نظرة سريعة على الإحصائيات الواقعية والمحطات والاعتمادات التي حصدناها طوال سنوات الكفاح والعمل الدؤوب.
          </p>
        </div>

        {/* Stats Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statItems.map((stat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-border-dark bg-neutral-950 p-6 text-right transition-all duration-300 hover:border-brand/20 hover:shadow-[0_0_15px_rgba(245,180,0,0.1)]"
            >
              {/* Icon Frame */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 border border-border-dark group-hover:border-brand/30">
                {stat.icon}
              </div>

              {/* Stat Value */}
              <div className="mt-6 font-mono font-black text-3xl sm:text-4xl text-brand tracking-tight glow-text-yellow">
                {stat.value}
              </div>

              {/* Stat Label */}
              <h3 className="mt-2 font-sans font-bold text-base text-white">
                {stat.label}
              </h3>

              {/* Stat Description */}
              <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certificates & Recognition Row */}
        <div className="mt-20 border-t border-border-dark/60 pt-16">
          <h3 className="font-sans font-bold text-xl text-center text-white mb-10 flex items-center justify-center gap-2">
            <Award className="text-brand" />
            <span>الاعتمادات والتكريمات والشهادات الدولية</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-border-dark bg-neutral-900/30 p-5 backdrop-blur-sm"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-brand/5 border border-brand/20 text-brand">
                  <ShieldCheck size={16} />
                </div>
                
                <div className="flex flex-col text-right">
                  <span className="font-sans font-bold text-sm text-neutral-100">{cert.title}</span>
                  <span className="mt-1 text-xs text-neutral-500">{cert.issuer} • {cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Palestinian Badge of Honor footer banner */}
        <div className="mt-16 text-center text-xs text-neutral-500 flex items-center justify-center gap-1.5 border border-border-dark bg-neutral-950 p-4 rounded-xl max-w-md mx-auto">
          <span>نهدي كل نجاح وفخر وإنجاز إلى فلسطين الغالية وعاصمتها القدس الشريف</span>
          <Heart size={12} className="text-red-500 fill-current" />
        </div>

        <ContactCTA setActiveTab={setActiveTab} />
      </div>
    </section>
  );
}
