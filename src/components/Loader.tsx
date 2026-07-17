'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [stage, setStage] = useState(0); // 0: enter, 1: text reveal, 2: fadeout

  useEffect(() => {
    // Stage 1: Subtitle reveal after 1s
    const textTimer = setTimeout(() => {
      setStage(1);
    }, 1000);

    // Stage 2: Start exit transition after 2.6s
    const completeTimer = setTimeout(() => {
      setStage(2);
    }, 2600);

    // Call onComplete after 3.2s (600ms fadeout)
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#e8e6dc] px-4"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background image with reduced 40% opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40"
            style={{ backgroundImage: 'url("/loader-bg.jpg")' }}
          />

          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,119,87,0.05)_0%,transparent_70%)] pointer-events-none" />

          {/* Typography Section */}
          <div className="text-center space-y-6 relative z-10 w-full max-w-4xl">
            {/* Big Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[38px] sm:text-[62px] md:text-[74px] lg:text-[98px] font-extrabold tracking-tighter text-[#1d1d1f] font-serif"
              >
                Akash Kumaraguru
              </motion.h1>
            </div>

            {/* Separator line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] bg-[#d97757] w-24 mx-auto origin-center"
            />

            {/* Big Designation */}
            <div className="overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={stage >= 1 ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold tracking-[0.25em] text-[#5c5a53] uppercase font-mono"
              >
                Product Designer &amp; &lt;/Builder &gt;
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
