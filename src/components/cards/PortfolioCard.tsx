'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Monitor, Layers } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Gnapi Design Hub',
    category: 'Enterprise SaaS',
    description: 'Design system and interface consolidation for 4 core products.',
    icon: Monitor,
    gradient: 'from-[#6a9bcc]/10 to-[#788c5d]/10 border-[#6a9bcc]/25 hover:border-[#6a9bcc]/45',
    iconColor: 'text-[#6a9bcc]',
    iconBg: 'bg-[#6a9bcc]/10',
    tags: ['SaaS', 'Figma', 'System'],
  },
  {
    title: 'Zeta Mobile Wallet',
    category: 'Fintech Mobile',
    description: 'A beautiful, gesture-driven crypto and fiat banking mobile app.',
    icon: Layers,
    gradient: 'from-[#d97757]/10 to-[#6a9bcc]/10 border-[#d97757]/25 hover:border-[#d97757]/45',
    iconColor: 'text-[#d97757]',
    iconBg: 'bg-[#d97757]/10',
    tags: ['iOS', 'UI Design', 'Gradients'],
  },
];

export default function PortfolioCard() {
  return (
    <div className="flex flex-col justify-between h-full space-y-4 font-sans pt-1">

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {PROJECTS.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              whileHover={{ y: -4 }}
              className={`flex flex-col justify-between p-4 rounded-2xl border bg-gradient-to-br ${project.gradient} transition-all duration-300 group cursor-pointer h-40`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${project.iconBg} ${project.iconColor}`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-[#5c5a53] bg-white border border-[#b0aea5]/20 py-1 px-2.5 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-sm font-bold text-[#1d1d1f] mt-3 group-hover:text-[#d97757] transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-[11px] text-[#5c5a53] mt-1 line-clamp-2 font-serif">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex gap-1 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-semibold text-[#5c5a53] border border-[#b0aea5]/15 bg-white px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Action Footer */}
      <button className="w-full flex items-center justify-center gap-2 bg-[#faf9f5] hover:bg-[#e8e6dc] text-[#1d1d1f] font-semibold text-sm py-2.5 px-4 rounded-xl border border-[#b0aea5]/30 transition-all duration-300 active:scale-98 cursor-pointer">
        <span>Browse Case Studies</span>
        <ArrowUpRight size={14} className="text-[#6a9bcc]" />
      </button>
    </div>
  );
}
