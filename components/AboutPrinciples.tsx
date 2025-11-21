import React from 'react';
import { PRINCIPLES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const AboutPrinciples: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Naturopathy Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            Why Choose Naturopathy in Lucknow?
          </h2>
          <div className="w-24 h-1 bg-nature-green mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-stone-600 leading-relaxed">
            Naturopathy is an art and science of natural treatment for healthy living. It is a drugless system 
            of healing that does not imply any kind of medicine. The fundamental difference between Naturopathy 
            and other systems is our <strong>holistic view point</strong>—treating the whole person rather than just the symptom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/800/1000?random=1" 
              alt="Naturopathy Treatment Center Lucknow Interior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-stone-800 mb-6">Restoring Health Naturally</h3>
            <p className="text-stone-600 mb-6">
              In Naturopathy, we believe that the primary cause of disease is the accumulation of 
              <strong> morbid matter</strong>. Bacteria and viruses are secondary; they only survive 
              when the body's internal atmosphere allows them to.
            </p>
            <p className="text-stone-600 mb-6">
              Our approach focuses on:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-nature-green mr-3 flex-shrink-0" />
                <span className="text-stone-700">Educating patients on self-care and prevention.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-nature-green mr-3 flex-shrink-0" />
                <span className="text-stone-700">Using "Pancha Maha Bhuthas" (Five Great Elements) to restore balance.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-nature-green mr-3 flex-shrink-0" />
                <span className="text-stone-700">Providing harmless treatments with zero side effects.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Principles Section - ID for navigation */}
        <div id="principles" className="bg-nature-light rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-serif font-bold text-center text-stone-800 mb-12">
            Fundamental Principles of Naturopathy
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle, index) => (
              <article key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-nature-green">
                <h3 className="text-xl font-bold text-stone-800 mb-3">{principle.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {principle.content}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPrinciples;