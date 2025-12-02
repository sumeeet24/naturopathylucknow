import React from 'react';
import { PHYSIO_BENEFITS } from '@/lib/physiotherapyConstants';
import { CheckCircle, Activity, HeartPulse, Sun } from 'lucide-react';

// Helper for icons
const BenefitIcon = ({ name, className }: { name: string, className: string }) => {
    switch (name) {
      case 'Activity': return <Activity className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Sun': return <Sun className={className} />;
      default: return <CheckCircle className={className} />;
    }
};

const PhysioBenefits: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {PHYSIO_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg">
                        <BenefitIcon name={benefit.icon} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-blue-100 leading-relaxed text-sm">
                        {benefit.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PhysioBenefits;
