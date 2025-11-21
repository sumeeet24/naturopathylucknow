import React from 'react';
import { TREATMENTS } from '../constants';
import { Leaf, Droplets, Sun, Wind, Flower, Activity, HeartPulse, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nature-green font-bold tracking-wider uppercase text-sm">Our Treatments</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-stone-900">
            Natural Therapies Offered in Lucknow
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-stone-600">
            We customize treatment plans according to your disease condition using pure, natural elements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.map((service) => (
            <Link 
              key={service.id} 
              to={`/treatment/${service.id}`}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-stone-100 hover:border-nature-green relative"
            >
              <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center mb-6 group-hover:bg-nature-green transition-colors">
                <IconRenderer name={service.iconName} className="w-6 h-6 text-nature-green group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-nature-green transition-colors">
                {service.title}
              </h3>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {service.shortDescription}
              </p>

              <div className="flex items-center text-nature-green text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-white rounded-lg border border-stone-200 shadow-inner">
          <p className="text-stone-700 italic mb-4">
            "A Naturopathy doctor will customize your treatment plan according to your disease condition, focusing on Education, Prevention, and Holistic Health."
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-stone-500 font-medium uppercase">
            <span>Steam Bath</span> •
            <span>Sauna Bath</span> •
            <span>Hip Bath</span> •
            <span>Spinal Bath</span> •
            <span>Jal Neti</span> •
            <span>Sutra Neti</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;