'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import GeneratedCard from './GeneratedCard';
import { pickRandomBadge, type Badge } from './giftData';

interface GiftModalProps {
  open: boolean;
  onClose: () => void;
}

const PARTICLE_COUNT = 14;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 6 + Math.random() * 6,
  size: 3 + Math.random() * 4,
  color: [`#d97757`, `#6a9bcc`, `#788c5d`][i % 3],
}));

export default function GiftModal({ open, onClose }: GiftModalProps) {
  const [step, setStep] = useState<'form' | 'result'>('form');
  const [name, setName] = useState('');
  const [badge, setBadge] = useState<Badge>(() => pickRandomBadge());

  const reset = useCallback(() => {
    setStep('form');
    setName('');
  }, []);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(reset, 300);
      return () => clearTimeout(t);
    }
  }, [open, reset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setBadge(pickRandomBadge());
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#d97757', '#6a9bcc', '#788c5d'],
    });
    setStep('result');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Glassmorphism backdrop */}
          <div
            className="absolute inset-0 bg-[#1d1d1f]/50 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                className="absolute rounded-full"
                style={{
                  left: `${p.left}%`,
                  bottom: '-10px',
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  opacity: 0.35,
                }}
                animate={{ y: '-110vh', opacity: [0, 0.4, 0] }}
                transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
              />
            ))}
          </div>

          {/* Modal card with flip perspective */}
          <div style={{ perspective: 1200 }} className="relative w-full max-w-md">
            {/* Fixed Close Button (On top of scrollable container, never scrolls away) */}
            <button
              onClick={onClose}
              title="Close"
              className="absolute -top-3.5 -right-3.5 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#b0aea5] hover:text-[#1d1d1f] shadow-lg border border-[#b0aea5]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <X size={18} />
            </button>

            <motion.div
              key={step}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl p-6"
            >
              {step === 'form' ? (
                <form onSubmit={handleGenerate} className="space-y-5 pt-2">
                  <div className="space-y-1.5">
                    <h2 className="text-[22px] font-bold text-[#1d1d1f] font-serif">
                      Nice meeting you today!
                    </h2>
                    <p className="text-[14px] text-[#5c5a53] font-sans leading-relaxed">
                      Let&apos;s create a personalized memory from our conversation.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="gift-name" className="text-[12px] text-[#b0aea5] uppercase font-bold tracking-wider block">
                      Name
                    </label>
                    <input
                      id="gift-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full text-[15px] text-[#1d1d1f] bg-[#faf9f5] border border-[#b0aea5]/20 focus:border-[#d97757]/50 rounded-xl px-3.5 py-2.5 outline-none transition-colors font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d97757] hover:bg-[#c56646] text-white font-bold text-[15px] py-3 rounded-xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Generate My Gift
                  </button>
                </form>
              ) : (
                <div className="pt-2">
                  <GeneratedCard name={name.trim()} gender="unspecified" badge={badge} />
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
