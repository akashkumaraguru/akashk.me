'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  colSpan?: string;
  rowSpan?: string;
  id?: string;
}

export default function BentoCard({
  children,
  className = '',
  delay = 0,
  colSpan = 'col-span-1',
  rowSpan = 'row-span-1',
  id,
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass glass-hover-border relative overflow-hidden rounded-3xl p-6 transition-all duration-300 ${colSpan} ${rowSpan} ${className}`}
    >
      {/* Mouse spotlight overlay (warm orange tint) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(217, 119, 87, 0.05), transparent 85%)`,
        }}
      />
      {/* Subtle secondary spotlight (light glow) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.8 : 0,
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.6), transparent 80%)`,
        }}
      />
      <div className="relative z-10 h-full w-full flex flex-col">{children}</div>
    </motion.div>
  );
}
