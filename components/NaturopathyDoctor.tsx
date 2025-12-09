import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Award, Phone } from 'lucide-react';

const NaturopathyDoctor: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-nature-green/5 skew-x-12 translate-x-32 transform z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <span className="text-nature-green font-bold tracking-[0.2em] uppercase text-xs mb-8 block text-center md:text-left">Meet Our Doctors</span>
        <div className="flex flex-col gap-24">

          {/* Dr. Neelam Kumari Section */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Image Section */}
            <div className="w-full md:w-5/12 relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                    src="/images/team/dr-nilam-kumari.jpg"
                    alt="Dr. Neelam Kumari - Naturopathy Expert"
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
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6 leading-tight">
                Dr. Neelam Kumari <br />
                <span className="text-nature-green text-2xl md:text-3xl font-sans font-normal block mt-2">Naturopathy & Yogic Science Expert</span>
                </h2>

                <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-xl">
                Dr. Neelam Kumari brings a holistic approach to healing, combining the ancient wisdom of Naturopathy with modern Yogic Science. She specializes in treating lifestyle disorders and women&apos;s health issues through natural therapies, diet, and yoga.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/naturopathy-therapist/neelam-kumari"
                    className="group inline-flex items-center justify-center bg-nature-green text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    View Full Profile
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                    href="https://wa.me/918115400106?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Neelam."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20bd5a] transition-colors duration-300 shadow-lg"
                >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp
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

          {/* Dr. Nand Lal Yadav Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            {/* Image Section */}
            <div className="w-full md:w-5/12 relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                    src="/images/team/dr-nand-lal-yadav.jpg"
                    alt="Dr. Nand Lal Yadav - Naturopathic Doctor & Yoga Expert"
                    fill
                    className="object-cover object-center hover:scale-105 transition duration-700"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white max-w-[200px]">
                    <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-nature-green rounded-full text-white">
                        <Award className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-stone-800 text-sm">Yoga Expert</span>
                    </div>
                    <p className="text-xs text-stone-600">28+ Years Experience</p>
                </div>
                </div>
                 {/* Decorative Dot Pattern */}
                 <div className="absolute -top-8 -right-8 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#3A6351 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-7/12 md:text-right">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-6 leading-tight">
                Dr. Nand Lal Yadav <br />
                <span className="text-nature-green text-2xl md:text-3xl font-sans font-normal block mt-2">Naturopathic Doctor & Yoga Expert</span>
                </h2>

                <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-xl md:ml-auto">
                With over 28 years of experience, Dr. Nand Lal Yadav is a pioneer in Medical Yoga and Naturopathy. He has treated over 1,00,000 patients, specializing in reversing chronic diseases through targeted yoga therapy and lifestyle modifications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link
                    href="/yoga-therapist/nand-lal-yadav"
                    className="group inline-flex items-center justify-center bg-nature-green text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    View Full Profile
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                    href="tel:+918115400106"
                    className="inline-flex items-center justify-center bg-stone-800 text-white px-8 py-4 rounded-full font-bold hover:bg-stone-700 transition-colors duration-300 shadow-lg"
                >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                </a>
                </div>

                 {/* Quick Feature List */}
                 <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 gap-4 md:text-right">
                    <div>
                        <h4 className="font-bold text-stone-800 mb-1">Medical Yoga</h4>
                        <p className="text-sm text-stone-500">Specific asanas for specific ailments.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-stone-800 mb-1">Chronic Disease</h4>
                        <p className="text-sm text-stone-500">Expertise in diabetes & BP reversal.</p>
                    </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NaturopathyDoctor;
