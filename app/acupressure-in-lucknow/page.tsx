import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { THERAPISTS } from '@/lib/therapists';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Leaf, Award } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Acupressure in Lucknow | Acupuncture in Lucknow',
  description: 'Best Acupressure and Acupuncture treatment in Lucknow. Expert therapists for pain relief, stress management, and holistic healing. Book now.',
  alternates: {
    canonical: '/acupressure-in-lucknow',
  },
};

export default function AcupressurePage() {
  const breadcrumbJson = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://lucknownaturopathy.com' },
    { name: 'Acupressure & Acupuncture', url: 'https://lucknownaturopathy.com/acupressure-in-lucknow' }
  ]);

  const activeTherapists = THERAPISTS.filter(t => !t.isPlaceholder);
  const placeholders = THERAPISTS.filter(t => t.isPlaceholder);

  // Combine to show placeholders if needed, or just map placeholders for layout demonstration
  const displayTeam = [...activeTherapists, ...placeholders];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />

        {/* Hero Section */}
        <div className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-3 block">Holistic Healing</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                Acupressure & Acupuncture <br/>
                <span className="text-nature-green">in Lucknow</span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                Restore your body&apos;s natural balance and eliminate pain through the ancient art of pressure point therapy.
                We combine both Acupressure and Acupuncture therapies to provide comprehensive relief for our patients.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Why Combine Acupressure & Acupuncture?</h2>
                <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
                  <p>
                    While distinct in their application, both Acupressure and Acupuncture share the same fundamental principle:
                    stimulating specific points along the body&apos;s energy meridians to promote healing and pain relief.
                  </p>
                  <p>
                    We present these therapies together because many patients benefit from a synergistic approach.
                    Whether you prefer the needle-free touch of Acupressure or the deep precision of Acupuncture,
                    our specialists in Lucknow are equipped to guide your healing journey.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-nature-light/30 p-4 rounded-xl border border-nature-green/10">
                    <Leaf className="w-8 h-8 text-nature-green mb-2" />
                    <h3 className="font-bold text-stone-800">Drugless Therapy</h3>
                    <p className="text-sm text-stone-500">100% natural pain relief</p>
                  </div>
                  <div className="bg-nature-light/30 p-4 rounded-xl border border-nature-green/10">
                    <Star className="w-8 h-8 text-nature-green mb-2" />
                    <h3 className="font-bold text-stone-800">Holistic Care</h3>
                    <p className="text-sm text-stone-500">Treats root cause</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                 {/* Decorative Image */}
                 <Image
                   src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop"
                   alt="Acupressure Treatment"
                   fill
                   className="object-cover"
                 />
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="py-16 bg-stone-50 border-y border-stone-200">
           <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                   <div className="inline-flex items-center space-x-2 text-nature-green mb-4">
                      <Award className="w-6 h-6" />
                      <span className="font-bold tracking-wide uppercase">Certified Excellence</span>
                   </div>
                   <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Acupressure Specialist Certificate</h2>
                   <p className="text-stone-600 text-lg mb-6">
                      Our Lead Therapist, <span className="font-bold text-stone-900">Kawaljeet Singh</span>, is a certified professional
                      dedicated to maintaining the highest standards of safety and efficacy in alternative medicine treatments.
                   </p>
                   <div className="space-y-2">
                      <div className="flex justify-between border-b border-stone-100 pb-2">
                        <span className="text-stone-500">Therapist</span>
                        <span className="font-medium text-stone-900">Kawaljeet Singh</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-100 pb-2">
                        <span className="text-stone-500">Designation</span>
                        <span className="font-medium text-stone-900">Acupressure Therapist</span>
                      </div>
                      <div className="flex justify-between pt-2">
                        <span className="text-stone-500">Contact</span>
                        <span className="font-medium text-stone-900">+91 76072 06523</span>
                      </div>
                   </div>
                </div>
                <div className="md:w-1/2 bg-stone-200 relative min-h-[300px]">
                   {/* Certificate Image */}
                   <Image
                      src="/images/team/kawaljeet-singh-certificate.jpg"
                      alt="Acupressure Certificate"
                      fill
                      className="object-cover"
                   />
                </div>
             </div>
           </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Our Acupressure Therapists</h2>
              <p className="text-stone-500 text-lg max-w-2xl mx-auto">
                Meet our dedicated team of certified professionals committed to your well-being.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {displayTeam.map((therapist, idx) => (
                <div key={idx} className="group bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {therapist.isPlaceholder ? (
                    // Placeholder Card
                    <div className="h-full flex flex-col items-center justify-center p-8 bg-stone-50/50 min-h-[400px]">
                       <div className="w-32 h-32 rounded-full bg-stone-200 mb-6 flex items-center justify-center">
                          <Leaf className="w-10 h-10 text-stone-400" />
                       </div>
                       <h3 className="text-xl font-bold text-stone-400 mb-2">{therapist.name}</h3>
                       <span className="text-stone-400 text-sm mb-6">{therapist.designation}</span>
                       <div className="w-16 h-1 bg-stone-200 rounded-full"></div>
                    </div>
                  ) : (
                    // Active Profile Card
                    <Link href={`/acupressure-therapist/${therapist.slug}`} className="block h-full flex flex-col">
                      <div className="relative h-80 overflow-hidden bg-stone-200">
                        <Image
                          src={therapist.image}
                          alt={therapist.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute bottom-4 left-4 text-white">
                           <span className="bg-nature-green text-xs font-bold px-2 py-1 rounded mb-2 inline-block">Specialist</span>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1 group-hover:text-nature-green transition-colors">
                          {therapist.name}
                        </h3>
                        <p className="text-stone-500 font-medium text-sm mb-4">{therapist.designation}</p>

                        <p className="text-stone-600 line-clamp-3 mb-6 flex-grow">
                          {therapist.shortBio}
                        </p>

                        <div className="mt-auto flex items-center text-nature-green font-bold text-sm tracking-wide">
                          View Full Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
