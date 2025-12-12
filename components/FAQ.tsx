'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../lib/constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 animate-fade-in-up">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6 flex items-center justify-center">
               <HelpCircle className="w-8 h-8 text-nature-green mr-3" />
               Frequently Asked Questions
           </h2>
           <p className="text-lg text-stone-600">
               Got questions? We&apos;ve answered the most common queries about naturopathy treatment in Lucknow.
           </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    openIndex === index
                    ? 'bg-stone-50 border-nature-green shadow-md'
                    : 'bg-white border-stone-200 hover:border-nature-green/50'
                }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-base md:text-lg pr-8 ${openIndex === index ? 'text-nature-green' : 'text-stone-800'}`}>
                    {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-nature-green flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                )}
              </button>

              <div
                className={`px-6 text-stone-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                 {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-stone-600">
            <p className="mb-4">Can&apos;t find your answer?</p>
            <a href="tel:+918874206748" className="inline-flex items-center font-bold text-nature-green hover:text-nature-dark border-b-2 border-transparent hover:border-nature-dark transition-all">
                Call us at +91 88742 06748
            </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
