'use client';

import { useState } from 'react';
import { Gift } from 'lucide-react';
import GiftModal from '@/components/gift/GiftModal';

export default function GiftCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative h-full rounded-2xl p-[2px] overflow-hidden">
        {/* Animated gradient border */}
        <div
          className="absolute -inset-[150%] animate-[spin_5s_linear_infinite]"
          style={{
            background:
              'conic-gradient(from 0deg, #d97757, #6a9bcc, #788c5d, #d97757)',
          }}
          aria-hidden="true"
        />

        <div className="relative h-full rounded-2xl bg-[#faf9f5] p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 font-sans">
          <div className="w-11 h-11 rounded-xl bg-[#d97757]/10 flex items-center justify-center flex-shrink-0">
            <Gift size={22} className="text-[#d97757]" />
          </div>

          <div className="flex-1 min-w-0 space-y-1">
            <h3 className="text-[17px] font-bold text-[#1d1d1f] font-serif tracking-tight">
              🎁 A Gift From Akash
            </h3>
            <p className="text-[13px] text-[#5c5a53] leading-snug font-serif italic">
              We met today. Let&apos;s create a small memory together.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full sm:w-auto flex-shrink-0 bg-[#d97757] hover:bg-[#c56646] text-white font-bold text-[13px] py-2.5 px-5 rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            Claim Your Gift
          </button>
        </div>
      </div>

      <GiftModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
