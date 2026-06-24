import { useState } from 'react';
import qrWhatsappImg from '../assets/qr-whatsapp.png';

interface WhatsAppQRProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function WhatsAppQR({ className = '', size = 'md' }: WhatsAppQRProps) {
  const containerSizes = {
    sm: 'p-3 w-44',
    md: 'p-4 w-56',
    lg: 'p-5 w-64',
  }[size];

  const qrSizes = {
    sm: 'h-36 w-36',
    md: 'h-48 w-48',
    lg: 'h-56 w-56',
  }[size];

  // Dynamic QR Code generation with api.qrserver.com pointing to WhatsApp chat link for Ameer
  const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fwa.me%2F201013189909&color=000000&bgcolor=ffffff";
  const [imgSrc, setImgSrc] = useState<string>(qrWhatsappImg);

  return (
    <div className={`flex flex-col items-center justify-center rounded-2xl border border-border-dark bg-neutral-900/90 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-brand/30 hover:shadow-[0_0_20px_rgba(245,180,0,0.15)] ${containerSizes} ${className}`}>
      <div className={`relative flex items-center justify-center rounded-xl bg-white p-2.5 ${qrSizes}`}>
        <img
          src={imgSrc}
          alt="WhatsApp QR Code"
          referrerPolicy="no-referrer"
          className="h-full w-full object-contain"
          onError={() => {
            if (imgSrc !== qrUrl) {
              setImgSrc(qrUrl);
            }
          }}
        />
        {/* Glowing WhatsApp icon overlay in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-white p-1.5 shadow-md">
            <svg className="h-6 w-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.004 2c-5.523 0-10 4.477-10 10a9.982 9.982 0 0 0 1.53 5.253L2 22l4.908-1.288A9.957 9.957 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 2a8.002 8.002 0 0 1 8 8 8.002 8.002 0 0 1-8 8c-1.574 0-3.047-.457-4.29-1.246l-2.903.762.775-2.836A7.957 7.957 0 0 1 4.004 12c0-4.418 3.582-8 8-8zm-2.94 4.383c-.15 0-.363.056-.554.26-.192.203-.733.716-.733 1.745s.748 2.028.854 2.17c.106.142 1.472 2.248 3.567 3.15.498.214.887.342 1.19.438.5.158.956.136 1.316.082.4-.06 1.23-.503 1.403-.988.172-.486.172-.903.12-1.012l-.462-.23c-.27-.137-1.603-.79-1.85-.88-.247-.09-.427-.137-.607.137-.18.273-.697.88-.854 1.06-.157.182-.315.204-.585.068-.27-.136-1.14-.42-2.17-1.34-.8-.713-1.34-1.595-1.497-1.865-.157-.27-.017-.417.12-.552.12-.122.27-.315.405-.473.135-.158.18-.27.27-.45.09-.18.045-.34-.022-.477l-.63-1.516c-.173-.418-.352-.36-.48-.36h-.438z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center gap-0.5 text-center">
        <span className="text-xs font-semibold text-neutral-400">تواصل مباشر</span>
        <span className="text-[10px] font-mono text-neutral-500">wa.me/201013189909</span>
      </div>
    </div>
  );
}
