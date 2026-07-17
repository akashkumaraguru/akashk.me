'use client';

import { ArrowUpRight } from 'lucide-react';

const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/akashkumaraguru',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    color: '#6a9bcc',
    bg: 'bg-[#6a9bcc]/10',
    label: 'Professional Network',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/akashkumaraguru',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#1d1d1f',
    bg: 'bg-[#1d1d1f]/10',
    label: 'Code Portfolio',
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/akashkumaraguru',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.64c-.31-1.06-1.74-3.67-4.71-3.15.22.56.42 1.13.6 1.7 3.32.22 3.99 1.25 4.11 1.45zM12 2.16c-4.47 0-8.23 3.03-9.35 7.15 1.58-.29 4.19-.38 6.94.3 1.07-2 2.15-4.14 2.41-4.7-1.12.01-2.18.29-2.18.29l.34.8c-.01-.01-1.07 2.45-2.07 4.38 2.65.69 4.9 2.25 5.58 3.05.51-.99.98-2.22 1.34-3.48-3.41-.85-6.19-2.91-6.19-2.91 1.27.79 3.49 1.7 6.13 2.18.39-1.25.68-2.58.83-3.82.02-.19-.05-.24-.22-.24zM5.3 19.33c.72-.75 2.87-2.6 6.32-2.11-.12-.34-.26-.68-.41-1.02-3.8-.57-7.46.73-8.28 1.04.85.94 1.84 1.63 2.37 2.09z" />
      </svg>
    ),
    color: '#d97757',
    bg: 'bg-[#d97757]/10',
    label: 'Design Shots',
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/akashkumaragurudesg',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M22 13.535h-6.223c.123 1.04.912 1.758 2.133 1.758 1.155 0 1.911-.532 2.05-1.428h2.008c-.287 1.92-1.996 3.135-4.062 3.135-2.671 0-4.237-1.854-4.237-4.321 0-2.47 1.579-4.321 4.148-4.321 2.502 0 3.985 1.815 3.985 4.321 0 .341-.019.64-.202.856zm-4.145-2.732c-.991 0-1.785.61-1.979 1.597h3.834c-.114-1.011-.871-1.597-1.855-1.597zm-10.428.532h-2.915v-2.091h2.868c.849 0 1.488.163 1.488.995 0 .848-.639 1.096-1.441 1.096zm-.05 3.424h-2.865v-2.316h2.956c.99 0 1.621.222 1.621 1.135 0 .964-.672 1.181-1.712 1.181zm.698-7.986c-1.815 0-3.327.91-3.655 2.378h5.714c-.313-1.468-1.825-2.378-2.059-2.378zm4.498 4.372c.866-.566 1.348-1.486 1.348-2.585 0-2.221-1.785-3.148-4.328-3.148h-5.918v12h5.962c2.721 0 4.673-1.085 4.673-3.626 0-1.446-.963-2.28-1.737-2.641zm4.428-4.145h5v1.238h-5v-1.238z" />
      </svg>
    ),
    color: '#788c5d',
    bg: 'bg-[#788c5d]/10',
    label: 'Design Projects',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_leo__designs/',
    icon: (
      <svg className="w-3.5 h-3.5 stroke-current fill-none" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: '#d97757',
    bg: 'bg-[#d97757]/10',
    label: 'Personal Shots',
  },
];

export default function SocialsCard() {
  return (
    <div className="flex flex-col justify-between h-full space-y-2 font-sans pt-1">
      {/* Title block */}
      <div>
        <span className="text-[11px] text-[#b0aea5] block uppercase font-bold tracking-wider font-sans mb-1">
          Socials
        </span>
      </div>

      {/* Vertical Links List */}
      <div className="space-y-1.5 flex-1 flex flex-col justify-center">
        {SOCIALS.map((social) => {
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-[#faf9f5] border border-[#b0aea5]/15 hover:border-[#b0aea5]/30 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className={`p-1.5 rounded-md flex-shrink-0 ${social.bg}`} style={{ color: social.color }}>
                  {social.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-[#1d1d1f] block leading-tight truncate">
                    {social.name}
                  </span>
                  <span className="text-[9px] text-[#b0aea5] font-serif italic block mt-0.5 leading-none truncate">
                    {social.label}
                  </span>
                </div>
              </div>
              <ArrowUpRight size={11} className="text-[#b0aea5] flex-shrink-0 group-hover:text-[#d97757] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
