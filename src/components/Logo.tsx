import { useState } from 'react';
import logoImg from '../assets/images/logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export default function Logo({ className = '', showText = true, size = 'md', onClick }: LogoProps) {
  const [hasCustomLogo, setHasCustomLogo] = useState(true);

  const dimensions = {
    sm: { icon: 'h-8 w-8', text: 'text-lg' },
    md: { icon: 'h-10 w-10', text: 'text-xl' },
    lg: { icon: 'h-16 w-16', text: 'text-3xl' },
  }[size];

  return (
    <div 
      className={`flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {hasCustomLogo ? (
        <img
          src={logoImg}
          alt="Ameer.pal Logo"
          referrerPolicy="no-referrer"
          className={`${dimensions.icon} object-contain`}
          onError={() => setHasCustomLogo(false)}
        />
      ) : (
        /* Precise high-fidelity SVG recreation of the official Ameer.pal Logo symbol */
        <svg
          className={`${dimensions.icon} filter drop-shadow-[0_0_8px_rgba(245,180,0,0.15)]`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main outer stylized geometric "A" structure */}
          {/* Left yellow pillar - thick diagonal */}
          <path
            d="M50 15L15 80H33L50 44L59 62L68 53L50 15Z"
            fill="#F5B400"
          />
          {/* Inner white stylized chevron and crossbar */}
          <path
            d="M50 44L36 72H72L63 54L50 44Z"
            fill="#FFFFFF"
          />
          {/* Black interior knockout to complete the negative space look */}
          <path
            d="M50 52L42 68H58L50 52Z"
            fill="#0A0A0A"
          />
        </svg>
      )}

      {showText && (
        <span className={`font-sans font-bold tracking-tight select-none ${dimensions.text}`}>
          <span className="text-white">Ameer.</span>
          <span className="text-brand font-black">pal</span>
        </span>
      )}
    </div>
  );
}
