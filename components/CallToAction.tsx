import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { PHONE, WHATSAPP } from '../lib/constants';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-nature-green text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          Ready to Start Your Natural Healing Journey?
        </h2>

        <p className="text-lg md:text-xl text-nature-light mb-12 max-w-3xl mx-auto font-light">
          Take the first step towards a healthier, medication-free life. Book your consultation today and discover how naturopathy can transform your health.
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto mb-12 border border-white/20">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">🎁 SPECIAL OFFER FOR NEW PATIENTS</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm font-medium">
                <div className="flex items-center justify-center bg-black/20 rounded-lg py-3 px-4">
                    <span className="text-nature-light mr-2">✓</span> FREE Initial Consultation
                </div>
                <div className="flex items-center justify-center bg-black/20 rounded-lg py-3 px-4">
                    <span className="text-nature-light mr-2">✓</span> FREE Health Assessment
                </div>
                <div className="flex items-center justify-center bg-black/20 rounded-lg py-3 px-4">
                    <span className="text-nature-light mr-2">✓</span> FREE Diet Recommendations
                </div>
            </div>
            <p className="text-xs text-white/60 mt-4 italic">No obligation – just come, talk to our doctors, understand our approach.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
             <a
                href={`tel:${PHONE.replace(/\s+/g, '')}`}
                className="bg-white text-nature-green hover:bg-stone-100 font-bold py-4 px-8 rounded-full shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg"
            >
                <Phone className="w-5 h-5 mr-3" /> Call: {PHONE}
            </a>

            <a
                href={`https://wa.me/${WHATSAPP}`}
                className="bg-[#25D366] text-white hover:bg-[#20bd5a] font-bold py-4 px-8 rounded-full shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg border border-white/20"
            >
                <MessageCircle className="w-5 h-5 mr-3" /> WhatsApp Now
            </a>

            <a
                href="#contact"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center text-lg"
            >
                <MapPin className="w-5 h-5 mr-3" /> Get Directions
            </a>
        </div>

        {/* Urgency Section */}
        <div className="inline-block bg-black/30 rounded-xl px-8 py-4 backdrop-blur-sm border border-white/10">
             <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
                 <span className="flex items-center font-bold text-white"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></span> TODAY&apos;S SLOTS:</span>
                 <span className="text-stone-300">Morning: <span className="line-through text-white/40">Booked</span></span>
                 <span className="text-stone-300">Evening: <span className="text-nature-light font-bold">2 Slots Available</span></span>
                 <a href="#contact" className="ml-4 text-white font-bold hover:text-nature-light underline text-xs uppercase tracking-wide">Book Now →</a>
             </div>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;
