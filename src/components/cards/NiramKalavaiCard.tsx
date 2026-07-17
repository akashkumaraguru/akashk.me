'use client';

import { useState } from 'react';
import { Palette, RefreshCw, ArrowUpRight } from 'lucide-react';

const PRESET_PALETTES = [
  { c1: '#d97757', c2: '#6a9bcc', name: 'Azhagu' },  // Orange to Blue
  { c1: '#6a9bcc', c2: '#788c5d', name: 'Pasumai' }, // Blue to Green
  { c1: '#d97757', c2: '#788c5d', name: 'Kanal' },   // Orange to Green
  { c1: '#b0aea5', c2: '#faf9f5', name: 'Kalavai' }, // Mid Gray to Cream
];

export default function NiramKalavaiCard() {
  const [color1, setColor1] = useState('#d97757');
  const [color2, setColor2] = useState('#6a9bcc');
  const [angle, setAngle] = useState(135);

  const randomizeColors = () => {
    const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor1(randomHex());
    setColor2(randomHex());
    setAngle(Math.floor(Math.random() * 360));
  };

  const gradientString = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  return (
    <div className="flex flex-col justify-between h-full space-y-4 font-sans pt-1">

      {/* Product Details */}
      <div>
        <h3 className="text-base font-bold text-[#1d1d1f] flex items-center gap-2">
          Niram Kalavai 
          <span className="text-xs text-[#5c5a53] font-normal font-serif italic">(நிறக் கலவை)</span>
        </h3>
        <p className="text-[11px] text-[#5c5a53] mt-1 leading-relaxed font-serif">
          Advanced gradient generator and paint-style color mixer designed for digital creators.
        </p>
      </div>

      {/* Live Preview Panel */}
      <div 
        className="w-full h-24 rounded-2xl relative overflow-hidden transition-all duration-500 shadow-sm group/preview border border-[#b0aea5]/20"
        style={{ background: gradientString }}
      >
        {/* Color values display */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <span className="text-[10px] font-mono font-bold text-[#1d1d1f] bg-[#faf9f5]/90 px-2 py-1 rounded-md border border-[#b0aea5]/20 uppercase">
            {color1}
          </span>
          <span className="text-[10px] font-mono font-bold text-[#1d1d1f] bg-[#faf9f5]/90 px-2 py-1 rounded-md border border-[#b0aea5]/20 uppercase">
            {color2}
          </span>
        </div>

        <button 
          onClick={randomizeColors}
          className="absolute right-2.5 bottom-2.5 p-2 rounded-lg bg-[#faf9f5]/90 border border-[#b0aea5]/20 text-[#1d1d1f] hover:bg-[#e8e6dc] transition-colors duration-200 cursor-pointer"
          title="Mix Colors"
        >
          <RefreshCw size={12} className="animate-spin-hover" />
        </button>
      </div>

      {/* Controls */}
      <div className="space-y-3">
        {/* Preset list */}
        <div className="flex justify-between items-center gap-1.5">
          {PRESET_PALETTES.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                setColor1(preset.c1);
                setColor2(preset.c2);
              }}
              className="flex-1 h-6 rounded-lg relative overflow-hidden group border border-[#b0aea5]/20 cursor-pointer"
              title={preset.name}
            >
              <div 
                className="w-full h-full transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${preset.c1}, ${preset.c2})` }}
              />
            </button>
          ))}
        </div>

        {/* Angle Slider */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-[#5c5a53] font-semibold w-6">Ang</span>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="flex-1 h-1 bg-[#b0aea5]/30 rounded-lg appearance-none cursor-pointer accent-[#d97757]"
          />
          <span className="text-[10px] text-[#5c5a53] font-mono w-8 text-right">{angle}°</span>
        </div>
      </div>

      {/* CTA Launch */}
      <a
        href="https://niram-kalavai.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#d97757] to-[#6a9bcc] hover:from-[#c66547] hover:to-[#5787b6] text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-md shadow-[#d97757]/10 transition-all duration-300 active:scale-98 cursor-pointer"
      >
        <span>Launch Product</span>
        <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
