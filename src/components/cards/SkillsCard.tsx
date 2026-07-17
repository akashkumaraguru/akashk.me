'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';

const SKILL_ITEMS = [
  { name: 'Figma', category: 'design', color: 'hover:border-[#d97757]/50 hover:text-[#d97757]' },
  { name: 'Design Systems', category: 'design', color: 'hover:border-[#6a9bcc]/50 hover:text-[#6a9bcc]' },
  { name: 'UX Research', category: 'research', color: 'hover:border-[#788c5d]/50 hover:text-[#788c5d]' },
  { name: 'Prototyping', category: 'design', color: 'hover:border-[#d97757]/50 hover:text-[#d97757]' },
  { name: 'React', category: 'dev', color: 'hover:border-[#6a9bcc]/50 hover:text-[#6a9bcc]' },
  { name: 'Tailwind CSS', category: 'dev', color: 'hover:border-[#788c5d]/50 hover:text-[#788c5d]' },
  { name: 'AI Tools', category: 'strategy', color: 'hover:border-[#d97757]/50 hover:text-[#d97757]' },
  { name: 'Product Strategy', category: 'strategy', color: 'hover:border-[#6a9bcc]/50 hover:text-[#6a9bcc]' }
];

export default function SkillsCard() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (name: string) => {
    setSelectedSkills(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-4 font-sans pt-1">

      {/* Info text */}
      <p className="text-[10px] text-[#5c5a53] leading-tight font-serif italic">
        Click to highlight relevant technologies for specific projects.
      </p>

      {/* Skill Cloud */}
      <div className="flex flex-wrap gap-2 flex-grow items-center content-center justify-start">
        {SKILL_ITEMS.map((skill) => {
          const isSelected = selectedSkills.includes(skill.name);
          return (
            <button
              key={skill.name}
              onClick={() => toggleSkill(skill.name)}
              className={`text-[10px] md:text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all duration-300 active:scale-95 cursor-pointer ${
                isSelected
                  ? 'bg-[#d97757]/10 text-[#d97757] border-[#d97757]/50 scale-105 shadow-sm shadow-[#d97757]/5'
                  : `bg-[#faf9f5] text-[#5c5a53] border-[#b0aea5]/20 ${skill.color}`
              }`}
            >
              {skill.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
