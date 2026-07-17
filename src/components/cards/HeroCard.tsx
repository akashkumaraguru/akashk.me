'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, Download, Share2, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroCard() {
  const [time, setTime] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Akash Kumaraguru | Product Designer',
      text: 'Check out Akash Kumaraguru\'s digital business card and design portfolio.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing/copying profile:', err);
    }
  };

  const handleDownloadResume = () => {
    const resumeText = `AKASH KUMARAGURU - PRODUCT DESIGNER
Bengaluru, India | hello@akashdesign.in | https://akash.design

SUMMARY:
Designing digital experiences that solve real-world problems. Specialized in UX Research, UI Design, Design Systems, and Front-end Development.

EXPERIENCE:
Product Designer @ Gnapi Technologies (Present)
- Led user interface redesign and design system consolidation.
- Streamlined product workflows resulting in 30% user efficiency gain.
- Conducted user interviews and testing sessions.

Previous Design Experience
- Designed responsive interfaces and design patterns for multiple clients.
- Built interactive mockups and production-ready code templates.

SKILLS:
Product Design, UX Research, UI Design, Design Systems, Prototyping, Front-end Development, Figma, React, Tailwind CSS, Product Strategy.
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Akash_Kumaraguru_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({ 
      particleCount: 40, 
      spread: 50, 
      colors: ['#d97757', '#6a9bcc', '#788c5d'] 
    });
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-6">
      {/* Top Section: Avatar and Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Avatar Container */}
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-tr from-[#d97757] via-[#6a9bcc] to-[#788c5d] p-[2px] shadow-sm shadow-black/5 group">
            <div className="w-full h-full rounded-2xl bg-[#faf9f5] overflow-hidden flex items-center justify-center">
              {!imageError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/Akash-cartton.png"
                  alt="Akash Kumaraguru"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                /* Sleek Initial-based SVG Avatar */
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="avatar-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d97757" />
                      <stop offset="50%" stopColor="#6a9bcc" />
                      <stop offset="100%" stopColor="#788c5d" />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="100" fill="url(#avatar-grad-light)" />
                  <text
                    x="50%"
                    y="55%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="32"
                    fontWeight="800"
                    fontFamily="var(--font-sans), sans-serif"
                    letterSpacing="0.05em"
                  >
                    AK
                  </text>
                  {/* Design rings */}
                  <circle cx="50" cy="50" r="42" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
                  <circle cx="50" cy="50" r="35" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#1d1d1f] font-sans">
              Akash Kumaraguru
            </h2>
            <p className="text-sm font-semibold text-[#d97757]">Product Designer</p>
          </div>
        </div>

        {/* Status Pills */}
        <div className="flex flex-row sm:flex-col items-start gap-2 text-xs text-[#5c5a53]">
          <div className="flex items-center gap-1.5 bg-[#faf9f5] border border-[#b0aea5]/20 py-1 px-2.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#788c5d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#788c5d]"></span>
            </span>
            <MapPin size={12} className="text-[#5c5a53]" />
            <span>Bengaluru, IN</span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#faf9f5] border border-[#b0aea5]/20 py-1 px-2.5 rounded-full">
            <Clock size={12} className="text-[#5c5a53]" />
            <span className="font-mono text-[#1d1d1f] min-w-[70px]">
              {time || '12:00:00 PM'}
            </span>
          </div>
        </div>
      </div>

      {/* Middle Section: Tagline in Lora (Serif) */}
      <div className="space-y-2">
        <p className="text-xl md:text-2xl font-normal text-[#1d1d1f] leading-relaxed font-serif">
          “Designing digital experiences that <span className="text-[#d97757] font-semibold border-b border-[#d97757]/30 pb-0.5">solve real-world problems</span>.”
        </p>
      </div>

      {/* Bottom Section: CTA Actions using accents */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-2">
        <a
          href="#portfolio"
          className="flex items-center justify-center gap-2 bg-[#d97757] hover:bg-[#c66547] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-300 active:scale-95 shadow-md shadow-[#d97757]/10"
        >
          <span>View Portfolio</span>
          <ArrowUpRight size={14} />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#6a9bcc] hover:bg-[#5787b6] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-300 active:scale-95 shadow-md shadow-[#6a9bcc]/10"
        >
          <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>Connect</span>
        </a>

        <button
          onClick={handleDownloadResume}
          className="flex items-center justify-center gap-2 bg-[#788c5d] hover:bg-[#65774e] text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all duration-300 active:scale-95 shadow-md shadow-[#788c5d]/10"
        >
          <Download size={14} />
          <span>Resume</span>
        </button>

        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 bg-[#faf9f5] hover:bg-[#e8e6dc] text-[#1d1d1f] font-semibold text-sm py-3 px-4 rounded-xl border border-[#b0aea5]/30 transition-all duration-300 active:scale-95 cursor-pointer"
        >
          {copied ? (
            <>
              <Check size={14} className="text-[#788c5d]" />
              <span className="text-[#788c5d]">Copied!</span>
            </>
          ) : (
            <>
              <Share2 size={14} className="text-[#5c5a53]" />
              <span>Share Profile</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
