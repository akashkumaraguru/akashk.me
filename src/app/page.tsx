'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import BentoCard from '@/components/BentoCard';
import HeroCard from '@/components/cards/HeroCard';
import AboutCard from '@/components/cards/AboutCard';
import PortfolioCard from '@/components/cards/PortfolioCard';
import NiramKalavaiCard from '@/components/cards/NiramKalavaiCard';
import SocialsCard from '@/components/cards/SocialsCard';
import ExperienceCard from '@/components/cards/ExperienceCard';
import ContactCard from '@/components/cards/ContactCard';
import SkillsCard from '@/components/cards/SkillsCard';
import EventJourneyCard from '@/components/cards/EventJourneyCard';
import TestimonialsCard from '@/components/cards/TestimonialsCard';
import QuickConnectCard from '@/components/cards/QuickConnectCard';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#e8e6dc] flex items-center justify-center">
        <div className="w-10 h-10 border-t-2 border-[#d97757] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      {/* Text-only loader overlay */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Main Dashboard Panel */}
      <AnimatePresence>
        {!loading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen w-full flex flex-col justify-between py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#e8e6dc] overflow-y-auto"
          >
            {/* Background lighting glows */}
            <div className="radial-bg" />

            <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center mt-4">
              {/* Bento Grid Panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {/* 1. Hero Card */}
                <BentoCard 
                  colSpan="col-span-1 md:col-span-2 lg:col-span-3" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.05}
                >
                  <HeroCard />
                </BentoCard>

                {/* 2. Quick Connect Card */}
                <BentoCard 
                  colSpan="col-span-1" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.1}
                >
                  <QuickConnectCard />
                </BentoCard>

                {/* 3. About Card */}
                <BentoCard 
                  colSpan="col-span-1" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.15}
                >
                  <AboutCard />
                </BentoCard>

                {/* 4. Portfolio Card */}
                <BentoCard 
                  id="portfolio"
                  colSpan="col-span-1 md:col-span-2" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.2}
                >
                  <PortfolioCard />
                </BentoCard>

                {/* 5. Niram Kalavai Card */}
                <BentoCard 
                  colSpan="col-span-1" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.25}
                >
                  <NiramKalavaiCard />
                </BentoCard>

                {/* 6. Socials Card */}
                <BentoCard 
                  colSpan="col-span-1" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.3}
                >
                  <SocialsCard />
                </BentoCard>

                {/* 7. Experience Card */}
                <BentoCard 
                  colSpan="col-span-1 md:col-span-2" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.35}
                >
                  <ExperienceCard />
                </BentoCard>

                {/* 8. Contact Card */}
                <BentoCard 
                  colSpan="col-span-1" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.4}
                >
                  <ContactCard />
                </BentoCard>

                {/* 9. Skills Card */}
                <BentoCard 
                  colSpan="col-span-1" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.45}
                >
                  <SkillsCard />
                </BentoCard>

                {/* 10. Event Journey Card */}
                <BentoCard 
                  colSpan="col-span-1 md:col-span-2" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.5}
                >
                  <EventJourneyCard />
                </BentoCard>

                {/* 11. Testimonials Card */}
                <BentoCard 
                  colSpan="col-span-1" 
                  rowSpan="row-span-1 lg:row-span-2"
                  delay={0.55}
                >
                  <TestimonialsCard />
                </BentoCard>
              </div>

              {/* Page Footer */}
              <footer className="mt-12 text-center border-t border-[#b0aea5]/20 pt-6 text-[10px] text-[#5c5a53] font-mono tracking-widest uppercase font-bold opacity-50">
                &copy; {new Date().getFullYear()} Akash Kumaraguru. All rights reserved.
              </footer>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
