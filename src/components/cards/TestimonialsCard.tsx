'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Akash has an incredible eye for details. His ability to prototype interactive flows rapidly sets him apart.",
    author: "Lead Architect",
    company: "Gnapi Technologies",
  },
  {
    quote: "He didn't just build our design system; he unified our developers and design workflows. A true bridge builder.",
    author: "Design Manager",
    company: "Creative Studio",
  },
  {
    quote: "Akash's product 'Niram Kalavai' shows his deep understanding of design utilities. He solves genuine designer bottlenecks.",
    author: "Product Lead",
    company: "Zeta Pay",
  },
];

export default function TestimonialsCard() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full space-y-4 font-sans pt-1">

      {/* Quote Slides in Lora */}
      <div className="relative flex-grow flex items-center min-h-[90px] font-serif">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full flex flex-col justify-center"
          >
            <p className="text-xs md:text-sm text-[#5c5a53] italic leading-relaxed">
              “{TESTIMONIALS[currentIdx].quote}”
            </p>
            <div className="mt-2.5 font-sans">
              <span className="text-[10px] font-bold text-[#1d1d1f] block">
                {TESTIMONIALS[currentIdx].author}
              </span>
              <span className="text-[9px] text-[#b0aea5] block font-semibold">
                {TESTIMONIALS[currentIdx].company}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel dots */}
      <div className="flex items-center gap-1.5 pt-1 justify-center">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIdx ? 'bg-[#d97757] w-4' : 'bg-[#b0aea5]/40 hover:bg-[#b0aea5]/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
