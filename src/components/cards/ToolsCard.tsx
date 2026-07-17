'use client';

const TOOLS = [
  {
    name: 'Figma',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/figma.svg" alt="Figma" className="w-7 h-7 object-contain" />,
    color: 'hover:border-[#FF7262]/30',
  },
  {
    name: 'Penpot',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/penpot.svg" alt="Penpot" className="w-6 h-6 object-contain" />,
    color: 'hover:border-[#788c5d]/30',
  },
  {
    name: 'Miro',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/miro.svg" alt="Miro" className="w-6 h-6 object-contain" />,
    color: 'hover:border-[#d97757]/30',
  },
  {
    name: 'After Effects',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/after-effects.svg" alt="After Effects" className="w-7 h-7 object-contain rounded" />,
    color: 'hover:border-[#40a3ff]/30',
  },
  {
    name: 'LottieFiles',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/lottiefiles.svg" alt="LottieFiles" className="w-6 h-6 object-contain" />,
    color: 'hover:border-[#00ddb3]/30',
  },
  {
    name: 'Premiere Pro',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/premiere-pro.svg" alt="Premiere Pro" className="w-7 h-7 object-contain rounded" />,
    color: 'hover:border-[#e054ff]/30',
  },
  {
    name: 'Rive',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/rive.svg" alt="Rive" className="w-6 h-6 object-contain" />,
    color: 'hover:border-black/30',
  },
  {
    name: 'VSCode',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/vscode.svg" alt="VSCode" className="w-7 h-7 object-contain" />,
    color: 'hover:border-[#6a9bcc]/30',
  },
  {
    name: 'GitHub',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/github.svg" alt="GitHub" className="w-6 h-6 object-contain" />,
    color: 'hover:border-black/30',
  },
  {
    name: 'Framer',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/framer.svg" alt="Framer" className="w-6 h-6 object-contain" />,
    color: 'hover:border-black/30',
  },
  {
    name: 'Photoshop',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/photoshop.svg" alt="Photoshop" className="w-7 h-7 object-contain rounded" />,
    color: 'hover:border-[#001e36]/30',
  },
  {
    name: 'Illustrator',
    // eslint-disable-next-line @next/next/no-img-element
    icon: <img src="/illustrator.svg" alt="Illustrator" className="w-7 h-7 object-contain rounded" />,
    color: 'hover:border-[#330000]/30',
  },
];

export default function ToolsCard() {
  return (
    <div className="flex flex-col justify-between h-full space-y-3 font-sans pt-1">
      <div>
        <span className="text-[15px] text-[#b0aea5] block uppercase font-bold tracking-wider font-sans mb-1">
          Design &amp; Dev Tools
        </span>
        <p className="text-[15px] text-[#5c5a53] leading-tight font-serif italic">
          Software and platforms I use to design, prototype, and build.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-2 my-2">
        {TOOLS.map((item) => (
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
