'use client';

import { useState } from 'react';
import { MapPin, Briefcase, Mail, Phone } from 'lucide-react';

const EMAIL = 'dev.iamakash@gmail.com';
const PHONE = '+91 9345509223';

const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/akash-kumaraguru/',
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
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
        <path d="M16.969 16.927a2.561 2.561 0 0 0 1.901.677 2.501 2.501 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.091 5.091 0 0 1-1.9 2.896 5.292 5.292 0 0 1-3.091.88 5.839 5.839 0 0 1-2.284-.433 4.871 4.871 0 0 1-1.723-1.211 5.657 5.657 0 0 1-1.08-1.874 7.057 7.057 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.313 5.313 0 0 1 5.088-3.604 4.87 4.87 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187ZM6.947 4.084a8.065 8.065 0 0 1 1.928.198 4.29 4.29 0 0 1 1.49.638c.418.303.748.711.958 1.182.241.579.357 1.203.341 1.83a3.506 3.506 0 0 1-.506 1.961 3.726 3.726 0 0 1-1.503 1.287 3.588 3.588 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.593 4.593 0 0 1-.423 2.032 3.945 3.945 0 0 1-1.163 1.413 5.114 5.114 0 0 1-1.683.807 7.135 7.135 0 0 1-1.928.259H0V4.084h6.947Zm-.235 12.9c.308.004.616-.029.916-.099a2.18 2.18 0 0 0 .766-.332c.228-.158.411-.371.534-.619.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715 2.618 2.618 0 0 0-1.696-.505h-3.54v4.279h3.471Zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619 2.336 2.336 0 0 0-1.163.259 2.474 2.474 0 0 0-.738.62 2.359 2.359 0 0 0-.396.792c-.074.239-.12.485-.137.734h4.769a3.239 3.239 0 0 0-.679-1.785l-.002-.001Zm-13.813-.648a2.254 2.254 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.916 1.916 0 0 0-.178-.891 1.298 1.298 0 0 0-.495-.533 1.851 1.851 0 0 0-.711-.274 3.966 3.966 0 0 0-.835-.073H3.241v3.631h3.293v-.014ZM21.62 5.122h-5.976v1.527h5.976V5.122Z"/>
      </svg>
    ),
    color: '#788c5d',
    bg: 'bg-[#788c5d]/10',
    label: 'Design Projects',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_leo__designs?igsh=dmtleW1kaGZvYjE0',
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

export default function HeroCard() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full">
      {/* Left: big image */}
      <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-auto md:h-auto md:w-56 lg:w-64 flex-shrink-0">
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-tr from-[#d97757] via-[#6a9bcc] to-[#788c5d] p-[2px] shadow-sm shadow-black/5 group">
          <div className="w-full h-full rounded-2xl bg-[#faf9f5] overflow-hidden flex items-center justify-center">
            {!imageError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/akash.jpg"
                alt="Akash Kumaraguru"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              /* Sleek Initial-based SVG Avatar */
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <defs>
                  <linearGradient id="avatar-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d97757" />
                    <stop offset="50%" stopColor="#6a9bcc" />
                    <stop offset="100%" stopColor="#788c5d" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" fill="url(#avatar-grad-light)" />
                <text
                  x="50%"
                  y="55%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="32"
                  fontWeight="800"
                  fontFamily="var(--font-sans), sans-serif"
                  letterSpacing="0.05em"
                >
                  AK
                </text>
                {/* Design rings */}
                <circle cx="50" cy="50" r="42" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Right: everything else */}
      <div className="flex-1 min-w-0 flex flex-col justify-around gap-5">
        {/* Name, title & meta */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div>
            <h2 className="text-[30px] font-bold tracking-tight text-[#1d1d1f] font-serif leading-tight">
              Akash Kumaraguru
            </h2>
            <p className="text-[16px] font-semibold text-[#d97757] mt-0.5">Product Designer &amp; Builder</p>
          </div>

          <div className="flex flex-row sm:flex-col items-start gap-1.5 text-[12px] text-[#5c5a53] flex-shrink-0">
            <div className="flex items-center gap-1.5 bg-[#b0aea5]/10 py-1 px-2.5 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#788c5d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#788c5d]"></span>
              </span>
              <MapPin size={11} className="text-[#5c5a53]" />
              <span>Bengaluru, IN</span>
            </div>

            <div className="flex items-center gap-1.5 bg-[#b0aea5]/10 py-1 px-2.5 rounded-full">
              <Briefcase size={11} className="text-[#5c5a53]" />
              <span className="font-mono">1.5+ years experience</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <blockquote className="border-l-2 border-[#d97757]/40 pl-3.5 text-[17px] md:text-[19px] font-normal text-[#1d1d1f] italic leading-snug font-serif">
          Designer by passion. Builder by curiosity. <span className="text-[#d97757] font-semibold not-italic">Creating clarity from complexity.</span>
        </blockquote>

        {/* Socials + Contact, icon-only */}
        <div className="space-y-2">
          <span className="text-[11px] text-[#b0aea5] block uppercase font-bold tracking-wider">
            Find Me Online
          </span>
          <div className="flex flex-wrap gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#faf9f5] border border-[#b0aea5]/15 hover:border-[#b0aea5]/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              style={{ color: social.color }}
            >
              <span className="[&_svg]:w-6 [&_svg]:h-6">{social.icon}</span>
            </a>
          ))}

          <a
            href={`mailto:${EMAIL}`}
            title="Email"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#faf9f5] border border-[#b0aea5]/15 hover:border-[#b0aea5]/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-[#d97757]"
          >
            <Mail size={24} />
          </a>

          <a
            href={`tel:${PHONE.replace(/\s+/g, '')}`}
            title="Call"
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#faf9f5] border border-[#b0aea5]/15 hover:border-[#b0aea5]/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-[#6a9bcc]"
          >
            <Phone size={24} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
