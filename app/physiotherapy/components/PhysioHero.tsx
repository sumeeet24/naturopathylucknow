import React from 'react';
import { PHYSIO_HERO_TITLE, PHYSIO_HERO_SUBTITLE, PHYSIO_DOCTOR } from '@/lib/physiotherapyConstants';
import { Phone, ArrowRight } from 'lucide-react';
import { WHATSAPP } from '@/lib/constants';
import Image from 'next/image';

const PhysioHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nature-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 text-xs font-bold tracking-[0.2em] uppercase mb-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
              Physiotherapy in Lucknow
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight mb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Restore Your Movement, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Reclaim Your Life
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 fade-in-up" style={{ animationDelay: '0.3s' }}>
              {PHYSIO_HERO_SUBTITLE}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20a%20physiotherapy%20session.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 bg-white text-stone-700 border border-stone-200 rounded-full font-bold hover:bg-stone-50 hover:border-stone-300 transition-all flex items-center justify-center group"
              >
                View Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-stone-500 fade-in-up" style={{ animationDelay: '0.5s' }}>
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-stone-400 border-2 border-white"></div>
               </div>
               <p>Trusted by <span className="font-bold text-stone-800">500+ Patients</span> in Lucknow</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-[4/3] relative">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
                        alt="Physiotherapy Treatment in Lucknow"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-stone-900">Dr. Anjali Sharma</p>
                            <p className="text-xs text-stone-500">Senior Physiotherapist</p>
                        </div>
                    </div>
                </div>
            </div>
             {/* Decorative blob */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysioHero;
