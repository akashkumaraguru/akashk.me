'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Product Designer',
    company: 'Gnapi Technologies',
    period: '2024 - Present',
    achievements: [
      'Spearheaded redesign of core SaaS products, raising user efficiency by 30%.',
      'Designed and established a cross-product design system, halving handoff times.',
      'Conducted iterative usability tests to align visual assets with user expectations.',
    ],
  },
  {
    role: 'Previous Design Experience',
    company: 'Freelance & Contract Studio',
    period: '2022 - 2024',
    achievements: [
      'Crafted interactive mobile prototypes for early-stage fintech and health startups.',
      'Delivered pixel-perfect web layouts, combining responsive styling with modern branding.',
    ],
  },
];

export default function ExperienceCard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-4 font-sans pt-1">

      {/* Timeline List */}
      <div className="space-y-3.5 my-1 flex-1 overflow-y-auto no-scrollbar">
        {EXPERIENCE.map((job, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={job.company}
              className="relative pl-4 border-l border-[#b0aea5]/30 group/item"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[-5.5px] top-1.5 h-2.5 w-2.5 rounded-full border transition-colors duration-300 ${
                isExpanded ? 'bg-[#d97757] border-[#d97757]' : 'bg-[#faf9f5] border-[#b0aea5]/50 group-hover/item:border-[#d97757]'
              }`} />

              {/* Job Header Info */}
              <div 
                className="flex items-start justify-between gap-2 cursor-pointer"
                onClick={() => toggleExpand(idx)}
              >
                <div>
                  <h4 className="text-xs font-bold text-[#1d1d1f] group-hover/item:text-[#d97757] transition-colors">
                    {job.role}
                  </h4>
                  <p className="text-[10px] text-[#5c5a53] mt-0.5">
                    {job.company} &bull; <span className="font-mono text-gray-500">{job.period}</span>
                  </p>
                </div>
                
                <button className="text-[#5c5a53] hover:text-[#1d1d1f] p-1 transition-colors">
                  {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                </button>
              </div>

              {/* Achievements Dropdown */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-2 space-y-1.5 text-[10px] text-[#5c5a53] list-disc pl-3.5 leading-relaxed font-serif">
                      {job.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="hover:text-[#1d1d1f] transition-colors">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
