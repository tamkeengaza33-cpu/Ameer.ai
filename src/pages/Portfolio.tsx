import { useState } from 'react';
import { projects } from '../data';
import { ExternalLink, Tag, Grid } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

interface PortfolioProps {
  setActiveTab: (tab: string) => void;
}

export default function Portfolio({ setActiveTab }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'التصميم الجرافيكي', label: 'التصميم الجرافيكي' },
    { id: 'المونتاج والإنتاج المرئي', label: 'المونتاج والإنتاج المرئي' },
    { id: 'تطوير الويب', label: 'تطوير الويب' },
    { id: 'التدريب والكورسات', label: 'التدريب والكورسات' },
    { id: 'صناعة المحتوى', label: 'صناعة المحتوى' },
    { id: 'البراندات والهوية البصرية', label: 'البراندات والهوية البصرية' },
    { id: 'تصميم اللوجو', label: 'تصميم اللوجو' },
    { id: 'البرامج الإذاعية', label: 'البرامج الإذاعية' },
    { id: 'الذكاء الاصطناعي', label: 'الذكاء الاصطناعي' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleImageError = (projectId: string) => {
    setFailedImages((prev) => ({ ...prev, [projectId]: true }));
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 bg-neutral-950 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-white">
            معرض <span className="text-brand font-black">الأعمال المتميزة</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-brand mx-auto rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
            مجموعة مختارة من المشاريع والأعمال الإبداعية التي تجمع بين التصميم، البرمجة، المونتاج، التدريب، صناعة المحتوى، والهوية البصرية بأسلوب احترافي يعكس جودة التنفيذ.
          </p>
        </div>

        {/* Categories Interactive Filter bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-brand text-black shadow-[0_0_15px_rgba(245,180,0,0.35)] font-bold'
                  : 'border border-border-dark bg-neutral-900/60 text-neutral-400 hover:border-brand/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl border border-border-dark bg-neutral-900/40 overflow-hidden backdrop-blur-sm transition-all duration-350 hover:border-brand/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
            >
              {/* Image / Fallback Placeholder Section */}
              <div className="relative h-56 w-full bg-neutral-950/80 border-b border-border-dark overflow-hidden flex items-center justify-center">
                {project.imageUrl && !failedImages[project.id] ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={() => handleImageError(project.id)}
                    loading="lazy"
                  />
                ) : (
                  /* High Fidelity SVG Fallback Placeholder */
                  <div className="relative flex h-full w-full flex-col items-center justify-center bg-radial from-neutral-900/40 via-neutral-950 to-black p-6">
                    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:10px_10px]" />
                    <svg className="h-14 w-14 text-brand/30 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand/50" viewBox="0 0 24 24" fill="currentColor">
                      <path d={project.fallbackSvg || "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"} />
                    </svg>
                    <span className="mt-3 font-mono text-[10px] text-neutral-600 group-hover:text-brand/50 uppercase tracking-widest">Ameer Pal Creative Labs</span>
                  </div>
                )}
                
                {/* Category Floating Pill */}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-md bg-black/80 border border-brand/30 px-2.5 py-1 text-[10px] font-bold text-brand backdrop-blur-sm">
                  <Grid size={10} />
                  <span>{project.category}</span>
                </span>
              </div>

              {/* Text / Info Section */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-sans font-bold text-lg text-white group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  {/* Tags mapping */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 rounded bg-neutral-900 border border-border-dark px-2 py-0.5 text-[10px] font-medium text-neutral-400"
                      >
                        <Tag size={8} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Footer links */}
                  <div className="pt-4 border-t border-border-dark/60 flex items-center justify-between">
                    <a
                      href={project.link || '#'}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-white transition-colors"
                    >
                      <span>استكشف المشروع</span>
                      <ExternalLink size={12} />
                    </a>
                    <span className="font-mono text-[9px] text-neutral-600">ID: PROJ-0{project.id}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        <ContactCTA setActiveTab={setActiveTab} />
      </div>
    </section>
  );
}
