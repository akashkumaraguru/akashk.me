'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Check } from 'lucide-react';
import { toPng } from 'html-to-image';
import NetworkingIllustration from './NetworkingIllustration';
import { AKASH_LINKEDIN, GENDER_COLORS, type Badge, type Gender } from './giftData';

interface GeneratedCardProps {
  name: string;
  gender: Gender;
  badge: Badge;
}

const formattedToday = () => "July 18, 2026";

export default function GeneratedCard({ name, gender, badge }: GeneratedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  
  // Use badge's color as the visitor color to keep it vibrant & thematic when gender is unspecified
  const visitorColor = gender === 'unspecified'
    ? (badge.color === '#d97757' ? '#6a9bcc' : badge.color)
    : GENDER_COLORS[gender];
    
  const BadgeIcon = badge.icon;

  const handleDownload = async () => {
    if (!cardRef.current || downloading) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2, cacheBust: true });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `akash-kumaraguru-x-${name.trim().toLowerCase().replace(/\s+/g, '-') || 'friend'}.png`;
      link.click();
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (err) {
      console.error('Failed to export card:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Collectible card (captured for download) */}
      <div
        ref={cardRef}
        className="rounded-2xl border border-[#b0aea5]/20 bg-[#faf9f5] p-5 space-y-4 shadow-sm"
      >
        <h3 className="text-[19px] font-bold text-[#1d1d1f] font-serif text-center">
          Nice meeting you, {name || 'friend'}! 👋
        </h3>

        <div className="rounded-xl overflow-hidden border border-[#b0aea5]/15">
          <NetworkingIllustration visitorColor={visitorColor} className="w-full h-auto" />
        </div>

        <div className="text-center space-y-1.5">
          <p className="text-[15px] font-bold text-[#1d1d1f] font-serif">
            Akash Kumaraguru <span className="text-[#b0aea5] font-normal">×</span> {name || 'friend'}
          </p>
          <p className="text-[11px] text-[#b0aea5] font-mono uppercase tracking-wider">
            {formattedToday()}
          </p>
          <p className="text-[13px] text-[#5c5a53] leading-relaxed font-serif italic pt-1 max-w-sm mx-auto">
            Every great connection begins with a simple hello. Thank you for sharing a moment of your
            journey with me today.
          </p>
        </div>

        {/* Badge */}
        <div className="flex justify-center pt-1">
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2 border"
            style={{
              borderColor: `${badge.color}40`,
              backgroundColor: `${badge.color}12`,
              boxShadow: `0 0 20px ${badge.color}30`,
            }}
          >
            <BadgeIcon size={16} style={{ color: badge.color }} />
            <span className="text-[13px] font-bold" style={{ color: badge.color }}>
              {badge.name}
            </span>
          </div>
        </div>
      </div>

      {/* Actions (outside captured card) */}
      <div className="grid grid-cols-2 gap-2.5">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center justify-center gap-2 bg-[#1d1d1f] hover:bg-[#333] text-white font-semibold text-[13px] py-2.5 px-3 rounded-xl transition-colors cursor-pointer disabled:opacity-60 w-full"
        >
          {downloaded ? <Check size={15} /> : <Download size={15} />}
          <span>{downloaded ? 'Downloaded' : downloading ? 'Saving...' : 'Download Card'}</span>
        </motion.button>

        <a
          href={AKASH_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#faf9f5] border border-[#b0aea5]/20 hover:border-[#b0aea5]/40 text-[#1d1d1f] font-semibold text-[13px] py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-center w-full"
        >
          <svg className="w-[15px] h-[15px] fill-current text-[#6a9bcc]" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
