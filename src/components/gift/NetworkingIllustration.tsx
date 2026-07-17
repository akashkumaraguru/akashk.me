'use client';

interface NetworkingIllustrationProps {
  visitorColor?: string;
  className?: string;
}

export default function NetworkingIllustration({
  visitorColor = '#6a9bcc',
  className = '',
}: NetworkingIllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Cute chibi illustration of Akash and visitor networking"
    >
      <defs>
        {/* Soft background grid */}
        <pattern id="cute-dot-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#b0aea5" fillOpacity="0.2" />
        </pattern>
        {/* Table glass top */}
        <linearGradient id="cute-table-glass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e8e6dc" stopOpacity="0.4" />
        </linearGradient>
        {/* Table leg chrome */}
        <linearGradient id="cute-table-leg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b0aea5" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#8d8b82" />
        </linearGradient>
      </defs>

      {/* Background card */}
      <rect width="400" height="260" rx="16" fill="#faf9f5" />
      <rect width="400" height="260" rx="16" fill="url(#cute-dot-grid)" />

      {/* Decorative soft clouds/bubbles in the corners */}
      <circle cx="40" cy="45" r="20" fill="#6a9bcc" opacity="0.04" />
      <circle cx="360" cy="55" r="28" fill="#d97757" opacity="0.04" />

      {/* Cute hanging string light wire */}
      <path
        d="M10 20 Q 100 50, 200 22 T 390 20"
        stroke="#b0aea5"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      {[
        [40, 31],
        [110, 42],
        [160, 33],
        [230, 28],
        [290, 23],
        [350, 26],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill={i % 3 === 0 ? '#d97757' : i % 3 === 1 ? '#6a9bcc' : '#788c5d'}
          opacity="0.6"
        />
      ))}

      {/* Floor line */}
      <line x1="0" y1="230" x2="400" y2="230" stroke="#b0aea5" strokeWidth="1" opacity="0.2" />

      {/* Cute round glass table */}
      <ellipse cx="200" cy="186" rx="40" ry="12" fill="url(#cute-table-glass)" stroke="#b0aea5" strokeOpacity="0.2" strokeWidth="1" />
      <rect x="198" y="196" width="4" height="34" fill="url(#cute-table-leg)" rx="2" />
      <ellipse cx="200" cy="230" rx="20" ry="5" fill="#b0aea5" fillOpacity="0.3" />

      {/* Cute coffee cups with tiny happy faces */}
      {/* Left Cup (Akash's) */}
      <path d="M174 179 L180 179 L179 186 L175 186 Z" fill="#d97757" />
      <path d="M174 180 C172.5 180 172 181 172 182.5 C172 184 172.5 185 174 185" stroke="#d97757" strokeWidth="1" fill="none" />
      <circle cx="176" cy="182" r="0.4" fill="#faf9f5" />
      <circle cx="178" cy="182" r="0.4" fill="#faf9f5" />
      <path d="M176.5 183.5 Q177 184.2 177.5 183.5" stroke="#faf9f5" strokeWidth="0.4" fill="none" />
      {/* Steam */}
      <path d="M177 175 Q178.5 172 177 169" stroke="#d97757" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Right Cup (Visitor's) */}
      <path d="M220 179 L226 179 L225 186 L221 186 Z" fill={visitorColor} />
      <path d="M226 180 C227.5 180 228 181 228 182.5 C228 184 227.5 185 226 185" stroke={visitorColor} strokeWidth="1" fill="none" />
      <circle cx="222" cy="182" r="0.4" fill="#faf9f5" />
      <circle cx="224" cy="182" r="0.4" fill="#faf9f5" />
      <path d="M222.5 183.5 Q223 184.2 223.5 183.5" stroke="#faf9f5" strokeWidth="0.4" fill="none" />
      {/* Steam */}
      <path d="M223 175 Q221.5 172 223 169" stroke={visitorColor} strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Akash figure (left, gesturing mid-conversation) */}
      <g transform="translate(110, 95)">
        <ellipse cx="0" cy="135" rx="28" ry="6" fill="#1d1d1f" opacity="0.03" />
        {/* Cute rounded body */}
        <path d="M-18 135 C-18 96 -14 66 0 66 C14 66 18 96 18 135 Z" fill="#d97757" />
        {/* Arm gesturing */}
        <path
          d="M15 85 C32 82 38 72 42 62"
          stroke="#d97757"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="43" cy="58" r="4.5" fill="#d97757" />
        
        {/* Cute big chibi head */}
        <circle cx="0" cy="36" r="24" fill="#e8b699" />
        {/* Cute curly hair */}
        <path d="M-26 24 C-27 10, -12 -5, 0 -3 C12 -5, 27 10, 26 24 C28 28, 23 31, 17 29 C12 27, 3 27, -2 29 C-7 31, -28 28, -26 24 Z" fill="#2d221a" />
        {/* Eyebrows */}
        <path d="M-11 31 Q-7 27 -3 29" stroke="#2d221a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M3 29 Q7 27 11 31" stroke="#2d221a" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* Adorable closed smiling eyes */}
        <path d="M-12 36 Q-7 32 -2 36" stroke="#2d221a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M2 36 Q7 32 12 36" stroke="#2d221a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* Blushing cheeks */}
        <ellipse cx="-13" cy="41" rx="3.5" ry="1.8" fill="#ea4c89" fillOpacity="0.4" />
        <ellipse cx="13" cy="41" rx="3.5" ry="1.8" fill="#ea4c89" fillOpacity="0.4" />
        {/* Happy smile */}
        <path d="M-4 46 Q0 50 4 46" stroke="#2d221a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </g>

      {/* Visitor figure (right, listening warmly) */}
      <g transform="translate(290, 95)">
        <ellipse cx="0" cy="135" rx="28" ry="6" fill="#1d1d1f" opacity="0.03" />
        {/* Cute rounded body */}
        <path d="M-18 135 C-18 96 -14 66 0 66 C14 66 18 96 18 135 Z" fill={visitorColor} />
        {/* Arm relaxed */}
        <path
          d="M-15 85 C-28 89 -32 99 -28 109"
          stroke={visitorColor}
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="-28" cy="111" r="4.5" fill={visitorColor} />
        
        {/* Cute big chibi head */}
        <circle cx="0" cy="36" r="24" fill="#f0c9a3" />
        {/* Cute styled hair */}
        <path d="M-25 25 C-26 10, -12 0, 0 0 C12 0, 26 10, 25 25 C27 29, 21 31, 15 29 C10 27, 3 27, -2 29 C-7 31, -27 29, -25 25 Z" fill="#4a3525" />
        {/* Eyebrows */}
        <path d="M-10 31 Q-6 28 -2 30" stroke="#4a3525" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M2 30 Q6 28 10 31" stroke="#4a3525" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* Adorable closed smiling eyes */}
        <path d="M-11 36 Q-6 32 -1 36" stroke="#4a3525" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M1 36 Q6 32 11 36" stroke="#4a3525" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* Blushing cheeks */}
        <ellipse cx="-13" cy="41" rx="3.5" ry="1.8" fill="#ea4c89" fillOpacity="0.4" />
        <ellipse cx="13" cy="41" rx="3.5" ry="1.8" fill="#ea4c89" fillOpacity="0.4" />
        {/* Happy smile */}
        <path d="M-4 46 Q0 50 4 46" stroke="#4a3525" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </g>

      {/* Small floating sparkles around them */}
      <g opacity="0.7">
        {/* Sparkle 1 */}
        <path d="M190 90 L192 85 L194 90 L199 92 L194 94 L192 99 L190 94 L185 92 Z" fill="#f59e0b" />
        {/* Sparkle 2 */}
        <path d="M210 100 L211 97 L212 100 L215 101 L212 102 L211 105 L210 102 L207 101 Z" fill="#f59e0b" />
        {/* Tiny floaty circle */}
        <circle cx="202" cy="80" r="1.5" fill="#f59e0b" />
      </g>
    </svg>
  );
}
