import React from 'react';
import { FAQS } from '../lib/constants';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { generateFAQSchema } from '@/lib/utils';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-stone-50/50">
      {/* Inject FAQ Schema for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQS)),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nature-green font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Knowledge Center</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
            Common Questions about Naturopathy in Lucknow
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            Understanding how natural healing works for you.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 border border-stone-100 hover:border-nature-green/30 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-nature-light flex items-center justify-center group-hover:bg-nature-green transition-colors duration-300">
                  <HelpCircle className="w-5 h-5 text-nature-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-grow">
                  {/* H3 is critical here for Google to parse the Question */}
                  <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-nature-green transition-colors font-serif flex justify-between items-center">
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-base border-t border-stone-100 pt-3 mt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;