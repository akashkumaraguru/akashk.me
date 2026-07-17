'use client';

import { Calendar, Award, Code, Compass, Users } from 'lucide-react';

const EVENTS = [
  {
    name: 'Designathon Winner',
    type: 'Competition',
    date: '2025',
    icon: Award,
    color: 'from-[#d97757]/10 via-[#d97757]/5 to-transparent border-[#d97757]/20 hover:border-[#d97757]/45 text-[#d97757]',
    colSpan: 'col-span-2',
    rowSpan: 'row-span-1',
  },
  {
    name: 'Figma Meetup',
    type: 'Community',
    date: '2025',
    icon: Compass,
    color: 'from-[#6a9bcc]/10 via-[#6a9bcc]/5 to-transparent border-[#6a9bcc]/20 hover:border-[#6a9bcc]/45 text-[#6a9bcc]',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-2',
  },
  {
    name: 'DevFest BLR',
    type: 'Tech Conf',
    date: '2024',
    icon: Code,
    color: 'from-[#788c5d]/10 via-[#788c5d]/5 to-transparent border-[#788c5d]/20 hover:border-[#788c5d]/45 text-[#788c5d]',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    name: 'Design Meetups',
    type: 'Networking',
    date: '2024',
    icon: Users,
    color: 'from-[#d97757]/10 via-[#6a9bcc]/5 to-transparent border-[#d97757]/20 hover:border-[#d97757]/45 text-[#d97757]',
    colSpan: 'col-span-2',
    rowSpan: 'row-span-1',
  },
];

export default function EventJourneyCard() {
  return (
    <div className="flex flex-col justify-between h-full space-y-3 font-sans pt-1">

      {/* Grid Masonry Layout */}
      <div className="grid grid-cols-3 gap-2 flex-1 my-1">
        {EVENTS.map((event) => {
          const Icon = event.icon;
          return (
            <div
              key={event.name}
              className={`p-3 rounded-xl border bg-gradient-to-br transition-all duration-300 flex flex-col justify-between group cursor-pointer ${event.colSpan} ${event.rowSpan} ${event.color}`}
            >
              <div className="flex items-start justify-between">
                <div className="p-1 rounded-md bg-white/60 shadow-sm border border-[#b0aea5]/10">
                  <Icon size={12} />
                </div>
                <span className="text-[8px] font-mono text-[#5c5a53] font-bold">{event.date}</span>
              </div>
              
              <div className="mt-3">
                <h5 className="text-[10px] font-bold text-[#1d1d1f] leading-tight group-hover:text-[#d97757] transition-colors">
                  {event.name}
                </h5>
                <p className="text-[8px] text-[#5c5a53] mt-0.5">{event.type}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
