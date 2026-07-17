'use client';

import { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactCard() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@akashdesign.in';
  const phone = '+91 98765 43210';
  const whatsappUrl = 'https://wa.me/919876543210';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      confetti({ 
        particleCount: 20, 
        spread: 30, 
        colors: ['#d97757', '#6a9bcc', '#788c5d'] 
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-4 font-sans pt-1">

      {/* List of details */}
      <div className="space-y-2.5 my-1 flex-grow flex flex-col justify-center">
        {/* Email Item */}
        <div className="flex items-center justify-between p-2 rounded-xl bg-[#faf9f5] border border-[#b0aea5]/15 hover:border-[#b0aea5]/30 transition-colors group">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#d97757]/10 text-[#d97757]">
              <Mail size={14} />
            </div>
            <div>
              <span className="text-[9px] text-[#b0aea5] block uppercase font-bold tracking-wider">Email</span>
              <a href={`mailto:${email}`} className="text-xs text-[#1d1d1f] hover:text-[#d97757] font-semibold font-mono transition-colors">
                {email}
              </a>
            </div>
          </div>
          <button
            onClick={copyEmail}
            className="p-2 text-[#5c5a53] hover:text-[#1d1d1f] transition-colors cursor-pointer"
            title="Copy Email"
          >
            {copied ? <Check size={14} className="text-[#788c5d]" /> : <Copy size={14} className="group-hover:scale-105 transition-transform" />}
          </button>
        </div>

        {/* Phone Item */}
        <a 
          href={`tel:${phone.replace(/\s+/g, '')}`}
          className="flex items-center gap-2.5 p-2 rounded-xl bg-[#faf9f5] border border-[#b0aea5]/15 hover:border-[#b0aea5]/30 transition-colors group"
        >
          <div className="p-2 rounded-lg bg-[#6a9bcc]/10 text-[#6a9bcc]">
            <Phone size={14} />
          </div>
          <div>
            <span className="text-[9px] text-[#b0aea5] block uppercase font-bold tracking-wider">Call</span>
            <span className="text-xs text-[#1d1d1f] font-semibold font-mono group-hover:text-[#d97757] transition-colors">
              {phone}
            </span>
          </div>
        </a>

        {/* WhatsApp Item */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 p-2 rounded-xl bg-[#faf9f5] border border-[#b0aea5]/15 hover:border-[#b0aea5]/30 transition-colors group"
        >
          <div className="p-2 rounded-lg bg-[#788c5d]/10 text-[#788c5d]">
            <MessageSquare size={14} />
          </div>
          <div>
            <span className="text-[9px] text-[#b0aea5] block uppercase font-bold tracking-wider">WhatsApp</span>
            <span className="text-xs text-[#1d1d1f] font-semibold font-mono group-hover:text-[#d97757] transition-colors">
              Chat Instantly
            </span>
          </div>
        </a>
      </div>

      {/* Footer hint */}
      <div className="text-[9px] text-[#b0aea5] font-semibold">
        Active hours: 9 AM - 6 PM IST
      </div>
    </div>
  );
}
