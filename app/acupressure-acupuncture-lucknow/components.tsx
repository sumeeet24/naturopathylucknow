'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { PHONE } from '@/lib/constants';

// --- FAQ Accordion Component ---
interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border border-stone-200 rounded-xl bg-white overflow-hidden transition-all duration-300 ${
            openIndex === index ? 'shadow-md ring-1 ring-nature-green/20' : 'shadow-sm'
          }`}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <span className={`font-bold text-lg ${openIndex === index ? 'text-nature-green' : 'text-stone-700'}`}>
              {item.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-nature-green flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-5 pt-0 text-stone-600 leading-relaxed border-t border-stone-100 mt-2">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Mobile Sticky CTA Component ---
export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 md:hidden flex gap-4 items-center justify-between pb-safe">
      <a
        href={`tel:${PHONE}`}
        className="flex-1 flex items-center justify-center gap-2 bg-stone-100 text-stone-800 py-3 rounded-full font-bold active:bg-stone-200 transition border border-stone-300"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <Link
        href="#book"
        className="flex-1 flex items-center justify-center gap-2 bg-nature-green text-white py-3 rounded-full font-bold shadow-lg active:bg-nature-dark transition"
      >
        <Calendar className="w-4 h-4" />
        Book Appt
      </Link>
    </div>
  );
}

// --- Timeline Component ---
export function Timeline() {
  return (
    <div className="relative">
      {/* Desktop Connection Line */}
      <div className="absolute top-[28px] left-0 w-full h-1 bg-stone-200 -z-10 hidden md:block"></div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-4">
        {[
          { step: 1, title: "Sessions 1-3", desc: "Initial relief. Pain levels drop. Improved relaxation and sleep." },
          { step: 2, title: "Sessions 4-8", desc: "Cumulative effect. Inflammation reduces. Mobility improves significantly." },
          { step: 3, title: "Sessions 9-12", desc: "Stabilization. Symptoms rarely return. Body learns to self-regulate." },
          { step: 4, title: "Maintenance", desc: "Once a month sessions to maintain balance and prevent recurrence." },
        ].map((item, idx) => (
          <div key={idx} className="flex-1 flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0">
             {/* Number Circle */}
             <div className="relative flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white border-4 border-nature-green rounded-full flex items-center justify-center text-xl font-bold text-nature-green shadow-sm z-10">
                   {item.step}
                </div>
                {/* Mobile Vertical Line */}
                {idx !== 3 && (
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-1 h-full bg-stone-200 -z-10 md:hidden h-[calc(100%+2rem)]"></div>
                )}
             </div>

             {/* Content */}
             <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 w-full md:mt-6 text-left md:text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg text-stone-800 mb-2">{item.title}</h4>
                <p className="text-sm text-stone-600 leading-snug">{item.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
