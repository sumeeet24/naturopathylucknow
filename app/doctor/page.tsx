import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DOCTOR, PHONE } from '@/lib/constants';
import { THERAPISTS } from '@/lib/therapists';
import { ArrowRight, Star, Award, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet Our Doctors | Best Naturopath & Yoga Experts in Lucknow',
  description: 'Meet our expert team of Naturopathy doctors and therapists in Lucknow. Dr. Nand Lal Yadav, Dr. Neelam Kumari, and Dr. Kawaljeet Singh.',
  alternates: {
    canonical: 'https://naturopathlucknow.in/doctor',
  },
};

export default function DoctorTeamPage() {
  const doctors = [
    {
      name: DOCTOR.name,
      role: DOCTOR.title,
      image: DOCTOR.image,
      experience: DOCTOR.experience,
      specialty: "Naturopathy & Medical Yoga",
      bio: "A pioneer in Medical Yoga and Naturopathy with over 28 years of experience in reversing chronic diseases.",
      link: "/yoga-therapist/nand-lal-yadav",
      whatsapp: "918115400106"
    },
    {
      name: "Dr. Neelam Kumari",
      role: "Naturopathy and Yogic Science Expert",
      image: "/images/team/dr-nilam-kumari.jpg",
      experience: "10+ Years",
      specialty: "Women's Wellness & Detox",
      bio: "Specializing in holistic natural treatments, lifestyle disorders, and women's health issues.",
      link: "/naturopathy-therapist/neelam-kumari",
      whatsapp: "918115400106"
    },
    {
        // Fetching Kawaljeet from THERAPISTS array
      name: THERAPISTS[0].name,
      role: THERAPISTS[0].specialty,
      image: THERAPISTS[0].image,
      experience: "8+ Years",
      specialty: "Acupressure & Pain Relief",
      bio: THERAPISTS[0].bio,
      link: `/acupressure-therapist/${THERAPISTS[0].slug}`,
      whatsapp: THERAPISTS[0].contactNumber.replace(/[^0-9]/g, '')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans">
      <Header />
      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <section className="bg-nature-green text-white py-16 md:py-24 relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/images/pattern-leaf.png')] opacity-10"></div>
             <div className="container mx-auto px-4 relative z-10 text-center">
                 <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold tracking-wider mb-4 border border-white/30">
                    EXPERT CARE
                 </span>
                 <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Meet Our Specialists</h1>
                 <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
                     Our team of certified doctors and therapists is dedicated to your holistic well-being, combining ancient wisdom with modern science.
                 </p>
             </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-16 md:py-24 -mt-12 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doc, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group">

                            {/* Image Container */}
                            <div className="relative h-80 w-full bg-stone-100 overflow-hidden">
                                <Image
                                    src={doc.image}
                                    alt={doc.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                                    <span className="text-white bg-nature-green px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                        {doc.experience} Exp.
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <h2 className="text-2xl font-playfair font-bold text-stone-800 mb-1 group-hover:text-nature-green transition-colors">
                                    {doc.name}
                                </h2>
                                <p className="text-nature-green text-sm font-bold uppercase tracking-wider mb-4">
                                    {doc.role}
                                </p>

                                <div className="mb-6 flex-grow">
                                     <p className="text-stone-600 leading-relaxed text-sm mb-4 line-clamp-3">
                                         {doc.bio}
                                     </p>
                                     <div className="flex items-center gap-2 text-xs font-bold text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100">
                                         <Award className="w-4 h-4 text-nature-green" />
                                         <span>{doc.specialty}</span>
                                     </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between gap-4 mt-auto pt-6 border-t border-stone-100">
                                    <Link href={doc.link} className="text-stone-800 font-bold hover:text-nature-green transition-colors flex items-center text-sm group/link">
                                        View Profile
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                    <a
                                        href={`https://wa.me/${doc.whatsapp}?text=Hi,%20I%20want%20to%20book%20an%20appointment%20with%20${doc.name}.`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-[#25D366] text-white p-2 rounded-full hover:bg-green-600 transition shadow-md"
                                        aria-label={`Chat with ${doc.name} on WhatsApp`}
                                    >
                                         <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Philosophy / Trust Section */}
        <section className="bg-white py-16 mb-20">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="w-16 h-1 bg-nature-green mx-auto mb-8"></div>
                <h2 className="text-3xl font-playfair font-bold text-stone-800 mb-6">&quot;Treating the Patient, Not Just the Disease&quot;</h2>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                    Our multi-disciplinary team works together to create integrated treatment plans. Whether you need the structural correction of Yoga, the detoxification of Naturopathy, or the energy balance of Acupressure, we ensure you get the most effective holistic care under one roof.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2 text-stone-700 font-bold">
                        <ShieldCheck className="w-5 h-5 text-nature-green" />
                        <span>AYUSH Registered</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-700 font-bold">
                         <Star className="w-5 h-5 text-nature-green" />
                        <span>28+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-700 font-bold">
                         <MapPin className="w-5 h-5 text-nature-green" />
                        <span>Lucknow Based</span>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
