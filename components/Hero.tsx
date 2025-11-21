import React from 'react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[85vh] bg-stone-900">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 w-full h-full bg-center bg-cover z-0"
           style={{
             backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"
           }}>
        <span id="blackOverlay" className="w-full h-full absolute opacity-60 bg-stone-900"></span>
      </div>

      <div className="container relative mx-auto z-10">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              {/* SEO Priority: H1 Tag containing main keywords */}
              <h1 className="text-white font-serif font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 drop-shadow-lg">
                {HERO_TITLE}
              </h1>
              
              <p className="mt-4 text-lg sm:text-xl text-stone-100 mb-8 font-light max-w-3xl mx-auto drop-shadow-md">
                {HERO_SUBTITLE}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-nature-green text-white active:bg-green-700 font-bold uppercase text-sm px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex items-center justify-center"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/about-naturopathy"
                  className="bg-transparent border border-white text-white active:bg-stone-600 font-bold uppercase text-sm px-8 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-white/10"
                >
                  Learn About Naturopathy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating keyword bar for extra SEO relevance */}
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur py-6 border-t border-stone-200 hidden md:block z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 text-stone-500 text-sm uppercase tracking-wider font-semibold">
            <span>Diet Therapy</span>
            <span>•</span>
            <span>Yoga & Meditation</span>
            <span>•</span>
            <span>Mud Therapy</span>
            <span>•</span>
            <span>Detoxification</span>
            <span>•</span>
            <span>Acupressure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;