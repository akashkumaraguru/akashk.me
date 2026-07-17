'use client';

import { ArrowUpRight } from 'lucide-react';

export default function NiramKalavaiCard() {
  return (
    <div className="flex flex-col justify-center h-full font-sans py-2 px-1">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* Left Side: Product Logo Container */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-sm border border-[#b0aea5]/15 flex-shrink-0 bg-gradient-to-br from-[#0052cc] to-[#001a4d] p-3 flex items-center justify-center group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/niram-transparent.png"
            alt="Niram Kalavai Logo"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side: Product Details & CTA */}
        <div className="flex-grow flex flex-col justify-between space-y-3 text-center sm:text-left pt-1">
          <div className="space-y-1">
            <span className="text-[14px] text-[#b0aea5] block uppercase font-bold tracking-wider">
              Featured Product
            </span>
            <h3 className="text-[22px] font-bold text-[#1d1d1f] tracking-tight font-serif">
              Niram Kalavai <span className="text-[14px] text-[#b0aea5] font-serif italic font-normal">(நிறக் கலவை)</span>
            </h3>
            <p className="text-[15px] text-[#5c5a53] leading-relaxed font-serif pt-1 max-w-md">
              An advanced gradient generator and paint-style color mixer designed for digital creators. Experience real-time color blending, preset configurations, and precise angle customization in a fluid, tactile web interface.
            </p>
          </div>

          <div>
            <a
              href="https://niram-kalavai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6a9bcc] hover:bg-[#5687b8] text-white font-semibold text-[14px] py-2.5 px-4.5 rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Visit Site</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
