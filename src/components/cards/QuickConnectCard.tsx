'use client';

import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { UserPlus, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuickConnectCard() {
  const [url, setUrl] = useState('https://akash.design');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, []);

  const handleAddContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Kumaraguru;Akash;;;
FN:Akash Kumaraguru
ORG:Gnapi Technologies
TITLE:Product Designer
EMAIL;TYPE=PREF,INTERNET:hello@akashdesign.in
TEL;TYPE=CELL:+919876543210
URL:https://akash.design
ADR;TYPE=WORK:;;Bengaluru;Karnataka;;India
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const fileUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'Akash_Kumaraguru.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Dynamic celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#d97757', '#6a9bcc', '#788c5d'],
    });
  };

  return (
    <div className="flex flex-col items-center justify-between h-full text-center space-y-4 font-sans pt-1">

      {/* QR Code Container */}
      <div className="relative p-3 bg-white border border-[#b0aea5]/20 rounded-2xl flex items-center justify-center shadow-sm group">
        <QRCodeSVG
          value={url}
          size={120}
          bgColor="#ffffff"
          fgColor="#1d1d1f"
          level="H"
        />
        {/* Glow overlay */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#d97757]/10 to-[#6a9bcc]/10 -z-10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Description */}
      <div>
        <p className="text-xs font-bold text-[#1d1d1f]">Scan to connect instantly</p>
        <p className="text-[9px] text-[#5c5a53] mt-0.5 font-serif italic">Opens this page on your mobile device</p>
      </div>

      {/* Action button */}
      <button
        onClick={handleAddContact}
        className="w-full flex items-center justify-center gap-2 bg-[#d97757] hover:bg-[#c66547] text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-md shadow-[#d97757]/10 transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <UserPlus size={14} />
        <span>Add to Contacts</span>
      </button>
    </div>
  );
}
