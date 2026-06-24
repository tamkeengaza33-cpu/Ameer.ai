import Logo from './Logo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-dark bg-neutral-950/80 pt-16 pb-8 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          
          {/* Brand Col */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Logo size="lg" />
            <p className="mt-2 max-w-sm text-sm text-neutral-400 leading-relaxed font-light">
              مزيج متكامل من تطوير البرمجيات الذكية، تصميم واجهات وتجربة المستخدم، والمونتاج الإبداعي. أؤمن بتحويل الأفكار المعقدة إلى أعمال رقمية استثنائية وبسيطة.
            </p>
            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.tiktok.com/@ameer.pal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/20 bg-neutral-900 text-brand transition-colors hover:border-brand hover:bg-brand/10 hover:shadow-[0_0_10px_rgba(245,180,0,0.3)]"
                title="تيك توك"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.43-.59-.67-.07 3.26-.03 6.52-.05 9.78-.07 1.83-.62 3.73-1.9 4.99-1.57 1.59-3.96 2.27-6.14 1.86-2.83-.53-5.02-3.04-5.07-5.92-.08-2.91 1.91-5.64 4.75-6.31 1.12-.27 2.3-.19 3.39.23V11.2c-.81-.39-1.74-.5-2.61-.31-1.49.33-2.68 1.65-2.82 3.17-.18 2.01 1.34 3.86 3.35 4.07 1.57.16 3.19-.76 3.69-2.27.18-.55.19-1.14.19-1.72-.01-4.73 0-9.46-.01-14.19v-.03Z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ameer.pls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/20 bg-neutral-900 text-brand transition-colors hover:border-brand hover:bg-brand/10 hover:shadow-[0_0_10px_rgba(245,180,0,0.3)]"
                title="فيس بوك"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a
                href="https://t.me/ameer.pls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/20 bg-neutral-900 text-brand transition-colors hover:border-brand hover:bg-brand/10 hover:shadow-[0_0_10px_rgba(245,180,0,0.3)]"
                title="تليجرام"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.6 1.48-1.55 2.73-2.61 3.17-2.81.2-.09.39-.14.53-.14.12 0 .28.05.38.14.09.09.11.23.09.39-.11.78-.65 2.91-1.14 4.54l-.44 1.42c-.22.68-.43.91-.71.93-.65.05-1.14-.38-1.73-.78-.96-.65-1.52-1.05-2.45-1.68-.96-.65-.45-1.12.18-1.78.18-.18 3.09-2.87 3.15-3.13.01-.03.01-.14-.05-.2-.07-.06-.17-.04-.25-.02-.11.02-1.89 1.22-5.34 3.57l-1.37.45c-.68.21-.92.25-.97.16-.07-.11-.04-.51.46-1.06 3.12-2.12 6.51-4.34 10.16-6.64.44-.28.84-.42 1.19-.42.23 0 .42.06.56.17.18.15.26.39.23.75z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ameer.pls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/20 bg-neutral-900 text-brand transition-colors hover:border-brand hover:bg-brand/10 hover:shadow-[0_0_10px_rgba(245,180,0,0.3)]"
                title="يوتيوب"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-sm text-white tracking-wider border-r-2 border-brand pr-2">خريطة الموقع</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-400">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-brand transition-colors text-right w-full">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-brand transition-colors text-right w-full">
                  عن المنصة
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-brand transition-colors text-right w-full">
                  الخدمات
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('portfolio')} className="hover:text-brand transition-colors text-right w-full">
                  معرض الأعمال
                </button>
              </li>
            </ul>
          </div>

          {/* Core Fields Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-sans font-bold text-sm text-white tracking-wider border-r-2 border-brand pr-2">أقسام مخصصة</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-400">
              <li>
                <button onClick={() => handleLinkClick('ailab')} className="hover:text-brand transition-colors text-right w-full">
                  مختبر الذكاء الاصطناعي
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('library')} className="hover:text-brand transition-colors text-right w-full">
                  المكتبة والمصادر الرقمية
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('achievements')} className="hover:text-brand transition-colors text-right w-full">
                  إنجازات وإحصائيات
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-brand transition-colors text-right w-full">
                  استشارة وتواصل فوري
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 border-t border-border-dark pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>جميع الحقوق محفوظة © {currentYear} Ameer.pal</p>
          <p className="flex items-center gap-1.5">
            <span>صُنع بشغف وحب لأرض فلسطين</span>
            <svg className="h-3.5 w-5.5 rounded-xs shadow-xs border border-neutral-800/20 inline-block" viewBox="0 0 24 12" fill="none">
              <rect width="24" height="4" fill="#000000" />
              <rect y="4" width="24" height="4" fill="#FFFFFF" />
              <rect y="8" width="24" height="4" fill="#007A3D" />
              <path d="M0 0 L6 6 L0 12 Z" fill="#E4312B" />
            </svg>
          </p>
        </div>

      </div>
    </footer>
  );
}
