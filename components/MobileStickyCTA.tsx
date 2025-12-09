'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE, WHATSAPP } from '@/lib/constants';

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.1)] p-4 md:hidden flex gap-4 items-center justify-between pb-safe transition-all duration-300">
      <a
        href={`tel:${PHONE}`}
        className="flex-1 flex items-center justify-center gap-2 bg-stone-100 text-stone-800 py-3.5 rounded-full font-bold active:bg-stone-200 transition border border-stone-300 hover:shadow-md"
      >
        <Phone className="w-5 h-5 text-stone-600" />
        Call Now
      </a>
      <a
        href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-full font-bold shadow-lg shadow-green-200 active:bg-green-600 transition hover:scale-[1.02]"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}
