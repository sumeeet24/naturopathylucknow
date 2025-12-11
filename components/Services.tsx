import React from 'react';
import { TREATMENTS } from '../lib/constants';
import { Leaf, Droplets, Sun, Wind, Flower, Activity, HeartPulse, Brain, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Helper to render icon by name
const IconRenderer = ({ name, className }: { name: string, className: string }) => {
  switch (name) {
    case 'Leaf': return <Leaf className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Flower': return <Flower className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Brain': return <Brain className={className} />;
    default: return <Leaf className={className} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-stone-50 via-white to-nature-light/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-nature-green/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-earth-brown/5 via-transparent to-transparent"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3A6351 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-nature-green font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Treatments</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 mb-8">
            Natural Therapies Offered in Lucknow
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-earth-brown to-transparent mx-auto mb-8 rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-stone-600 text-lg leading-relaxed font-light">
            We customize treatment plans according to your disease condition. Available for both <strong className="text-nature-green">In-Patient (Stay)</strong> and <strong className="text-nature-green">Out-Patient (Daily Visit)</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {TREATMENTS.map((service, idx) => (
            <Link 
              key={service.id} 
              href={`/treatment/${service.id}`}
              className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(58,99,81,0.15)] transition-all duration-500 border border-stone-100 hover:border-nature-green/30 flex flex-col items-start relative overflow-hidden transform hover:-translate-y-2"
            >
              {/* Card Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-nature-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-nature-green/10 rounded-full blur-2xl group-hover:bg-nature-green/20 transition-colors duration-500"></div>

              <div className="relative z-10 w-16 h-16 bg-nature-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-nature-green group-hover:rotate-6 transition-all duration-500 shadow-inner">
                <IconRenderer name={service.iconName} className="w-8 h-8 text-nature-green group-hover:text-white transition-colors duration-500" />
              </div>
              
              <h3 className="relative z-10 text-xl font-bold text-stone-900 mb-4 group-hover:text-nature-green transition-colors font-serif">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-stone-600 text-sm leading-relaxed mb-6 flex-grow group-hover:text-stone-700">
                {service.shortDescription}
              </p>

              <div className="relative z-10 flex items-center text-nature-green text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                Read More <ArrowRight className="w-3 h-3 ml-2" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
            <div className="group relative inline-block p-12 bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white shadow-2xl max-w-5xl mx-auto overflow-hidden">
                 {/* Glowing Orb */}
                <div className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 bg-gradient-to-b from-nature-light/50 to-transparent opacity-50 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(3rem+50%)] bg-white p-4 rounded-full shadow-lg border border-stone-100">
                        <Leaf className="w-8 h-8 text-nature-green" />
                    </div>

                    <p className="text-stone-700 italic text-2xl font-serif mb-10 leading-relaxed max-w-3xl mx-auto">
                        &quot;A Naturopathy doctor will customize your treatment plan according to your disease condition, focusing on Education, Prevention, and Holistic Health.&quot;
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest">
                        {["Steam Bath", "Sauna Bath", "Hip Bath", "Spinal Bath", "Jal Neti", "Sutra Neti"].map((item, i) => (
                            <span key={i} className="bg-white px-5 py-2 rounded-full border border-stone-100 shadow-sm text-stone-500 hover:text-nature-green hover:border-nature-green hover:shadow-md transition-all duration-300 cursor-default">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;