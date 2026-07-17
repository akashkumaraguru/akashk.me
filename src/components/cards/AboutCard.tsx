'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

const SKILLS = [
  'Product Design',
  'UX Research',
  'UI Design',
  'Design Systems',
  'Front-end Development'
];

export default function AboutCard() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      <div>
        <p className="text-[#5c5a53] text-sm leading-relaxed font-serif pt-1">
          I am a designer-developer hybrid who believes in crafting interfaces that are as functional as they are beautiful. I translate complex user problems into clean, high-fidelity design systems and intuitive user journeys.
        </p>
      </div>

      {/* Stats and Role */}
      <div className="grid grid-cols-2 gap-4 py-2 border-t border-b border-[#b0aea5]/20 my-1 font-sans">
        <div>
          <p className="text-xs text-[#b0aea5] font-semibold uppercase tracking-wider">Current Role</p>
          <p className="text-sm font-bold text-[#1d1d1f] mt-0.5">Product Designer</p>
          <p className="text-[10px] text-[#6a9bcc] font-bold">@ Gnapi Technologies</p>
        </div>
        <div>
          <p className="text-xs text-[#b0aea5] font-semibold uppercase tracking-wider">Experience</p>
          <p className="text-sm font-bold text-[#1d1d1f] mt-0.5">3+ Years</p>
          <p className="text-[10px] text-[#788c5d] font-bold">In Design & Dev</p>
        </div>
      </div>

      {/* Skills list */}
      <div>
        <p className="text-xs text-[#5c5a53] font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-sans">
          <Terminal size={12} className="text-[#6a9bcc]" />
          <span>Core Competencies</span>
        </p>
        <div className="flex flex-wrap gap-1.5">
          {SKILLS.map((skill) => {
            const isActive = activeSkill === skill;
            return (
              <button
                key={skill}
                onClick={() => setActiveSkill(isActive ? null : skill)}
                className={`relative px-3 py-1.5 rounded-xl text-xs font-semibold font-sans transition-all duration-300 overflow-hidden cursor-pointer ${
                  isActive
                    ? 'text-[#d97757] border border-[#d97757]/45 shadow-sm shadow-[#d97757]/5'
                    : 'text-[#5c5a53] hover:text-[#1d1d1f] border border-[#b0aea5]/20 hover:border-[#b0aea5]/40 bg-[#faf9f5]/50 hover:bg-[#faf9f5]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillBgLight"
                    className="absolute inset-0 bg-gradient-to-r from-[#d97757]/15 to-[#6a9bcc]/15 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{skill}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
