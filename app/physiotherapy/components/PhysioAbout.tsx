import React from 'react';
import { PHYSIO_DOCTOR } from '@/lib/physiotherapyConstants';
import Image from 'next/image';
import { BadgeCheck, Stethoscope, GraduationCap, Award } from 'lucide-react';

const PhysioAbout: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <Image
                    src={PHYSIO_DOCTOR.image}
                    alt={PHYSIO_DOCTOR.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
             {/* Decorative Background Box */}
             <div className="absolute top-10 -left-10 w-full h-full border-2 border-blue-200 rounded-2xl -z-0 hidden lg:block"></div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Meet Your Therapist</span>
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">
              Expert Care by <span className="text-blue-600">{PHYSIO_DOCTOR.name}</span>
            </h2>
            <p className="text-lg text-stone-700 font-medium mb-2 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-blue-500" /> {PHYSIO_DOCTOR.title}
            </p>
            <p className="text-stone-500 mb-8 italic">
                Experience: <span className="font-bold text-stone-700">{PHYSIO_DOCTOR.experience}</span>
            </p>

            <div className="space-y-6 text-stone-600 leading-relaxed mb-8">
                {PHYSIO_DOCTOR.bio.map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm mb-8">
                <h4 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-500" /> Qualifications
                </h4>
                <ul className="space-y-2">
                    {PHYSIO_DOCTOR.qualifications.map((qual, idx) => (
                        <li key={idx} className="flex items-start text-sm text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0"></span>
                            {qual}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap gap-3">
                 {PHYSIO_DOCTOR.specializations.map((spec, idx) => (
                     <span key={idx} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                        <Award className="w-3 h-3 mr-2" /> {spec}
                     </span>
                 ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhysioAbout;
