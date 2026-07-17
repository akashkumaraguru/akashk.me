'use client';

const AI_STACK = [
  {
    name: 'Gemini',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/gemini.svg" alt="Gemini" className="w-7 h-7 object-contain" />,
    color: 'hover:border-[#6a9bcc]/30',
  },
  {
    name: 'Claude',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/claude.svg" alt="Claude" className="w-7 h-7 object-contain" />,
    color: 'hover:border-[#d97757]/30',
  },
  {
    name: 'v0',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/v0.svg" alt="v0" className="w-7 h-7 object-contain" />,
    color: 'hover:border-black/30',
  },
  {
    name: 'Lovable',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/lovable.svg" alt="Lovable" className="w-7 h-7 object-contain rounded-md" />,
    color: 'hover:border-[#ea4c89]/30',
  },
  {
    name: 'Emergent',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/emergent.png" alt="Emergent" className="w-7 h-7 object-contain rounded-full" />,
    color: 'hover:border-[#788c5d]/30',
  },
  {
    name: 'Antigravity',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/antigravity.svg" alt="Antigravity" className="w-7 h-7 object-contain" />,
    color: 'hover:border-[#6a9bcc]/30',
  },
  {
    name: 'Cursor',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/cursor.svg" alt="Cursor" className="w-6 h-6 object-contain" />,
    color: 'hover:border-black/30',
  },
  {
    name: 'Uizard',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/uizard.png" alt="Uizard" className="w-7 h-7 object-contain rounded-md" />,
    color: 'hover:border-[#d97757]/30',
  },
  {
    name: 'Perplexity',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/perplexity.svg" alt="Perplexity" className="w-6 h-6 object-contain" />,
    color: 'hover:border-[#6a9bcc]/30',
  },
];

export default function AiStackCard() {
  return (
    <div className="flex flex-col justify-start h-full space-y-3 font-sans pt-1">
      <div>
        <span className="text-[15px] text-[#b0aea5] block uppercase font-bold tracking-wider font-sans mb-1">
          AI Tech Stack
        </span>
        <p className="text-[15px] text-[#5c5a53] leading-tight font-serif italic">
          AI agents and LLM tools incorporated in my build stack.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-2 my-2">
        {AI_STACK.map((item) => (
          <div
            key={item.name}
            title={item.name}
            className={`aspect-square flex items-center justify-center rounded-xl bg-[#faf9f5] border border-[#b0aea5]/15 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer ${item.color}`}
          >
            <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-full h-full p-2.5">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
