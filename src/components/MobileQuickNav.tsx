import { User, Briefcase, Palette, BookOpen } from 'lucide-react';

interface MobileQuickNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileQuickNav({ activeTab, setActiveTab }: MobileQuickNavProps) {
  const items = [
    { id: 'about', label: 'من نحن', icon: User },
    { id: 'services', label: 'الخدمات', icon: Briefcase },
    { id: 'portfolio', label: 'الاستوديو', icon: Palette },
    { id: 'library', label: 'المكتبة الذكية', icon: BookOpen },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="lg:hidden fixed bottom-5 left-4 right-4 z-40 mx-auto max-w-md" dir="rtl">
      <div className="flex items-center justify-around rounded-2xl border border-brand/20 bg-neutral-900/90 py-2.5 px-2 shadow-[0_-5px_25px_rgba(245,180,0,0.15)] backdrop-blur-md">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center justify-center gap-1 py-1 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'text-brand scale-110 font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
              id={`quick-nav-${item.id}`}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-brand/10 border border-brand/30 shadow-[0_0_10px_rgba(245,180,0,0.15)]'
                    : 'bg-transparent border border-transparent'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-brand' : 'text-neutral-400'} />
              </div>
              <span className="text-[10px] tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
