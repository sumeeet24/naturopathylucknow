import React from 'react';
import { PHYSIO_SERVICES } from '@/lib/physiotherapyConstants';
import { Activity, HeartPulse, Brain, Sun, ArrowRight, Zap, Users } from 'lucide-react';

// Helper to render icon by name (reusing similar logic but adapted for Physio context)
const IconRenderer = ({ name, className }: { name: string, className: string }) => {
  switch (name) {
    case 'Activity': return <Activity className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Users': return <Users className={className} />;
    default: return <Activity className={className} />;
  }
};

const PhysioServices: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            Specialized Physiotherapy Treatments
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-stone-600 text-lg leading-relaxed font-light">
            Advanced rehabilitation techniques combined with compassionate care to help you move pain-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHYSIO_SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-stone-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-blue-200 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

              <div className="relative z-10 w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <IconRenderer name={service.iconName} className="w-7 h-7" />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-stone-900 mb-3 group-hover:text-blue-700 transition-colors font-serif">
                {service.title}
              </h3>

              <p className="relative z-10 text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.shortDescription}
              </p>

              <div className="relative z-10 mt-auto pt-6 border-t border-stone-200/50">
                 <button className="flex items-center text-blue-600 text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhysioServices;
