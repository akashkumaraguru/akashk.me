'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import BentoCard from '@/components/BentoCard';
import HeroCard from '@/components/cards/HeroCard';
import NiramKalavaiCard from '@/components/cards/NiramKalavaiCard';
import SkillsCard from '@/components/cards/SkillsCard';
import AiStackCard from '@/components/cards/AiStackCard';
import ToolsCard from '@/components/cards/ToolsCard';
import GiftCard from '@/components/cards/GiftCard';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {/* Text-only loader overlay */}
      <Loader onComplete={handleLoaderComplete} />

      {/* Main Dashboard Panel */}
      <AnimatePresence>
        {!loading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative isolate min-h-screen w-full flex flex-col justify-between py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#e8e6dc] overflow-y-auto"
          >
            {/* Background image wash */}
            <div
              className="fixed inset-0 -z-10 bg-cover bg-center opacity-25 pointer-events-none"
              style={{ backgroundImage: "url('/cloudy-sky.jpg')" }}
              aria-hidden="true"
            />

            {/* Background lighting glows */}
            <div className="radial-bg" />

            <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center mt-4">
              {/* Welcome note */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center text-[18px] md:text-[20px] font-serif italic text-[#5c5a53] mb-6"
              >
                It was great meeting you! Let&apos;s stay connected <span className="not-italic">😊</span>
              </motion.p>

              {/* Bento Grid Panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {/* Row 1: Full-width Hero Card (4 cols) with inline Socials */}
                <BentoCard 
                  colSpan="col-span-1 md:col-span-2 lg:col-span-4" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.05}
                >
                  <HeroCard />
                </BentoCard>

                {/* Row 2: Niram Kalavai + Other Projects (full width) */}
                <BentoCard
                  colSpan="col-span-1 md:col-span-2 lg:col-span-4"
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.1}
                >
                  <NiramKalavaiCard />
                </BentoCard>

                {/* Row 3: Tools (2 cols) + AI Tech Stack (2 cols) */}
                <BentoCard
                  colSpan="col-span-1 lg:col-span-2"
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.15}
                >
                  <ToolsCard />
                </BentoCard>

                <BentoCard
                  colSpan="col-span-1 lg:col-span-2"
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.2}
                >
                  <AiStackCard />
                </BentoCard>

                {/* Row 4: Skills (full width) */}
                <BentoCard
                  colSpan="col-span-1 md:col-span-2 lg:col-span-4"
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.25}
                >
                  <SkillsCard />
                </BentoCard>

                {/* Row 5: Gift (full width) */}
                <BentoCard
                  colSpan="col-span-1 md:col-span-2 lg:col-span-4"
                  rowSpan="row-span-1"
                  delay={0.3}
                >
                  <GiftCard />
                </BentoCard>
              </div>

              {/* Page Footer */}
              <footer className="mt-12 text-center border-t border-[#b0aea5]/20 pt-6 text-[14px] text-[#5c5a53] font-mono tracking-widest uppercase font-bold opacity-50">
                 Built with ❤️ by Akash Kumaraguru ( This isn&apos;t my portfolio—it&apos;s a quick way to connect. The portfolio is currently under construction)
              </footer>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
