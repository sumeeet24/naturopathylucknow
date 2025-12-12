import React from 'react';
import { Leaf, Award, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center text-white overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 w-full h-full z-0">
        <Image
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
          alt="Natural Healing Center Environment"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-stone-900/50 to-black/60 z-10"></div>
      </div>

      <div className="container relative mx-auto px-4 z-20 flex flex-col items-center justify-center text-center mt-10 md:mt-0">
        <div className="w-full lg:w-10/12 animate-fade-in-up">

          {/* Main H1 Heading */}
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 drop-shadow-2xl tracking-tight text-white">
            Naturopathy Hospital in Lucknow – <br className="hidden md:block" />
            <span className="text-nature-light">Natural Treatment for Chronic Diseases</span>
          </h1>

          {/* Subheading (H2) */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-stone-200 font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
            India&apos;s Leading Drugless Therapy Center for Diabetes, Hypertension, Arthritis & Chronic Disease Reversal
          </h2>

          {/* Body Paragraph */}
          <p className="text-base sm:text-lg text-stone-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light hidden md:block">
            Welcome to Lucknow&apos;s most trusted naturopathy hospital, where ancient healing wisdom meets modern medical understanding. Since 2010, Dr. Nand Lal Yadav and our expert team have successfully treated over 5,000 patients suffering from chronic diseases using 100% natural, drug-free therapies.
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-10 text-left max-w-5xl mx-auto">
             {[
                "28+ Years Experience – Dr. Nand Lal Yadav",
                "5,000+ Patients Cured – Verified success stories",
                "IPD & OPD Facilities – Residential & daily",
                "100% Natural & Safe – No medicines, no side effects",
                "Insurance Accepted – Cashless for AYUSH policies",
                "Certified Therapists – Trained naturopathy doctors"
             ].map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm md:text-base text-stone-200">
                    <span className="text-nature-green mr-2 font-bold">✓</span> {feature}
                </div>
             ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="https://wa.me/918874206748"
              className="bg-[#25D366] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 flex items-center justify-center"
            >
              Book Appointment on WhatsApp
            </a>
            <a
              href="tel:+918874206748"
              className="bg-white text-stone-900 font-bold text-base px-8 py-4 rounded-full shadow-lg hover:bg-stone-100 transition-all transform hover:-translate-y-1 flex items-center justify-center"
            >
              Call: 88742-06748
            </a>
          </div>

          {/* Below Buttons Info */}
          <div className="text-sm text-stone-300 space-y-1 mb-10">
             <p>📅 Next Available Slot: <span className="text-nature-light font-bold">Today, 5:30 PM</span></p>
             <p>⚡ Free Consultation for First-Time Visitors</p>
          </div>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <span className="text-yellow-400 font-bold text-lg">★ 4.8</span>
                <span className="text-xs text-stone-300">Google Rating<br/>(156 Reviews)</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <ShieldCheck className="text-nature-light w-6 h-6" />
                <span className="text-xs text-stone-300">Certified<br/>AYUSH Facility</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Award className="text-nature-light w-6 h-6" />
                <span className="text-xs text-stone-300">15+ Years<br/>Established</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                <Heart className="text-nature-light w-6 h-6" />
                <span className="text-xs text-stone-300">5000+ Happy<br/>Patients</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
