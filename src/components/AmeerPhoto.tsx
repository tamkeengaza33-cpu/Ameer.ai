import { useState } from 'react';
import profileImg from '../assets/images/profile.png';

interface AmeerPhotoProps {
  className?: string;
  glow?: boolean;
}

export default function AmeerPhoto({ className = '', glow = true }: AmeerPhotoProps) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border-dark bg-neutral-950 ${glow ? 'glow-yellow-lg' : ''} ${className}`}>
      {!useFallback ? (
        <img
          src={profileImg}
          alt="الأمير الفلسطيني - Ameer Pal"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
          onError={() => setUseFallback(true)}
        />
      ) : (
        /* Extremely high-fidelity stylized profile illustration */
        <div className="relative flex h-full w-full flex-col items-center justify-center bg-radial from-neutral-900 via-neutral-950 to-black p-6 select-none">
          {/* Animated decorative tech lines & particles */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          {/* Glowing Aura Ring */}
          <div className="absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-2xl" />
          
          {/* Main Portrait Frame with double gold borders */}
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed border-brand/30 bg-neutral-900/60 p-2 shadow-inner transition-transform duration-500 hover:scale-102">
            <div className="relative h-full w-full overflow-hidden rounded-full border border-brand/40 bg-gradient-to-tr from-brand-dark/20 to-neutral-800 flex items-center justify-center">
              {/* Stylized Palestinian Keffiyeh Pattern grid overlay */}
              <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(45deg,#fff_25%,transparent_25%),linear-gradient(-45deg,#fff_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#fff_75%),linear-gradient(-45deg,transparent_75%,#fff_75%)] bg-[size:10px_10px]" />
              
              {/* Silhouette Vector holding premium gold colors */}
              <svg className="h-28 w-28 text-brand/90 mt-4" viewBox="0 0 24 24" fill="currentColor">
                {/* Clean geometric human silhouette */}
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              
              {/* Small glowing badge of honor / Palestinian flag colors symbol */}
              <div className="absolute bottom-1 right-1/2 translate-x-1/2 flex gap-0.5 px-2 py-0.5 rounded-full bg-black/80 border border-brand/30 text-[8px] font-bold text-brand">
                <span>PALESTINE</span>
              </div>
            </div>
          </div>

          {/* User profile tags */}
          <div className="relative z-10 mt-5 text-center">
            <h4 className="font-sans font-bold text-lg text-white tracking-wide glow-text-yellow">الأمير الفلسطيني</h4>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-brand">Ameer Pal</p>
            
            {/* Minimalist interactive credentials / tag labels */}
            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
              <span className="rounded-md bg-neutral-900 border border-border-dark px-2 py-0.5 text-[9px] font-medium text-neutral-400">AI Expert</span>
              <span className="rounded-md bg-neutral-900 border border-border-dark px-2 py-0.5 text-[9px] font-medium text-neutral-400">UX Designer</span>
              <span className="rounded-md bg-neutral-900 border border-border-dark px-2 py-0.5 text-[9px] font-medium text-neutral-400">Developer</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
