'use client';

import { ArrowUpRight, PenTool } from 'lucide-react';

const OTHER_PROJECTS = [
  { name: 'VZONE International', src: '/vzone-logo.png' },
  { name: 'Tickets Pi', src: '/ticketspi-logo.png' },
  { name: 'Gnapi.tech Design System', src: '/gnapi-logo.png' },
];

export default function NiramKalavaiCard() {
  return (
    <div className="flex flex-col justify-center h-full font-sans py-2 px-1">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left: Featured products */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Niram Kalavai */}
          <div className="flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm border border-[#b0aea5]/15 flex-shrink-0 bg-gradient-to-br from-[#0052cc] to-[#001a4d] p-2.5 flex items-center justify-center group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/niram-transparent.png"
                  alt="Niram Kalavai Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="min-w-0 space-y-1">
                <span className="text-[11px] text-[#b0aea5] block uppercase font-bold tracking-wider">
                  Featured Product
                </span>
                <h3 className="text-[17px] font-bold text-[#1d1d1f] tracking-tight font-serif">
                  Niram Kalavai <span className="text-[12px] text-[#b0aea5] font-serif italic font-normal">(நிறக் கலவை)</span>
                </h3>
              </div>
            </div>
            <a
              href="https://niram-kalavai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#6a9bcc] hover:bg-[#5687b8] text-white font-semibold text-[12px] py-1.5 px-3 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer flex-shrink-0"
            >
              <span>Visit Site</span>
              <ArrowUpRight size={11} />
            </a>
          </div>

          {/* SVG Path Splitter — TODO: swap placeholder icon for the real plugin logo (drop file in /public and update src below) */}
          <div className="flex items-center justify-between gap-3.5">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm border border-[#b0aea5]/15 flex-shrink-0 bg-[#4a76c9] flex items-center justify-center">
                <PenTool size={32} className="text-white" />
              </div>
              <div className="min-w-0 space-y-1">
                <span className="text-[11px] text-[#b0aea5] block uppercase font-bold tracking-wider">
                  Figma Plugin
                </span>
                <h3 className="text-[17px] font-bold text-[#1d1d1f] tracking-tight font-serif">
                  SVG Path Splitter
                </h3>
              </div>
            </div>
            <a
              href="https://www.figma.com/community/plugin/1630306289213044905"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#4a76c9] hover:bg-[#3d63ab] text-white font-semibold text-[12px] py-1.5 px-3 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer flex-shrink-0"
            >
              <span>Get Plugin</span>
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>

        {/* Right: Other projects */}
        <div className="md:col-span-3 md:border-l md:border-[#b0aea5]/15 md:pl-6 flex flex-col gap-2.5 justify-center">
          <span className="text-[11px] text-[#b0aea5] block uppercase font-bold tracking-wider">
            Other Projects
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            {OTHER_PROJECTS.map((project) => (
              <div
                key={project.name}
                title={project.name}
                className="bg-[#faf9f5] border border-[#b0aea5]/15 rounded-lg p-3 flex items-center justify-center h-20"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.src}
                  alt={project.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
