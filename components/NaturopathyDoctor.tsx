import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Award } from 'lucide-react';

const NaturopathyDoctor: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-nature-green/5 skew-x-12 translate-x-32 transform z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Image Section */}
          <div className="w-full md:w-5/12 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/team/dr-nilam-kumari.jpg"
                alt="Dr. Nilam Kumari - Naturopathy Expert"
                fill
                className="object-cover object-top hover:scale-105 transition duration-700"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white max-w-[200px]">
                <div className="flex items-center gap-3 mb-1">
                  <div className="p-2 bg-nature-green rounded-full text-white">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-stone-800 text-sm">Certified Expert</span>
                </div>
                <p className="text-xs text-stone-600">Naturopathy & Yogic Science</p>
              </div>
            </div>

            {/* Decorative Dot Pattern */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#3A6351 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-7/12">
            <span className="text-nature-green font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Meet Our Doctor</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6 leading-tight">
              Dr. Nilam Kumari <br />
              <span className="text-nature-green text-2xl md:text-3xl font-sans font-normal block mt-2">Naturopathy & Yogic Science Expert</span>
            </h2>

            <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-xl">
              Dr. Nilam Kumari brings a holistic approach to healing, combining the ancient wisdom of Naturopathy with modern Yogic Science. She specializes in treating lifestyle disorders and women&apos;s health issues through natural therapies, diet, and yoga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/naturopathy-therapist/nilam-kumari"
                className="group inline-flex items-center justify-center bg-nature-green text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Full Profile
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:8115400106"
                className="inline-flex items-center justify-center border-2 border-stone-200 text-stone-700 px-8 py-4 rounded-full font-bold hover:border-nature-green hover:text-nature-green transition-colors duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                81154 00106
              </a>
            </div>

            {/* Quick Feature List */}
            <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 gap-4">
               <div>
                  <h4 className="font-bold text-stone-800 mb-1">Holistic Healing</h4>
                  <p className="text-sm text-stone-500">Treating the root cause naturally.</p>
               </div>
               <div>
                  <h4 className="font-bold text-stone-800 mb-1">Women&apos;s Wellness</h4>
                  <p className="text-sm text-stone-500">Specialized care for hormonal health.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NaturopathyDoctor;
