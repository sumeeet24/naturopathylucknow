import React from 'react';
import { Metadata } from 'next';
import PhysioHero from './components/PhysioHero';
import PhysioServices from './components/PhysioServices';
import PhysioAbout from './components/PhysioAbout';
import PhysioBenefits from './components/PhysioBenefits';
import PhysioTestimonials from './components/PhysioTestimonials';
import Contact from '@/components/Contact';
import { generateMedicalClinicSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/utils';
import { PHYSIO_HERO_TITLE, PHYSIO_HERO_SUBTITLE, PHYSIO_FAQS } from '@/lib/physiotherapyConstants';
import { FAQS } from '@/lib/constants'; // Importing global FAQs to verify, but we should use PHYSIO_FAQS

export const metadata: Metadata = {
  title: PHYSIO_HERO_TITLE,
  description: PHYSIO_HERO_SUBTITLE,
  keywords: "Physiotherapist in Lucknow, Physiotherapy Clinic Lucknow, Sports Injury Rehab, Back Pain Treatment, Dr. Anjali Sharma, Best Physiotherapist, Post Surgery Rehab Lucknow",
  alternates: {
    canonical: 'https://naturopathlucknow.in/physiotherapy',
  },
};

const PhysioFAQ = () => {
    // Simple FAQ section reused logic but for Physio specific questions
    return (
        <section className="py-24 bg-stone-50/50">
             {/* Inject FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify(generateFAQSchema(PHYSIO_FAQS)),
                }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">
                        Physiotherapy FAQs
                    </h2>
                </div>
                <div className="space-y-4">
                    {PHYSIO_FAQS.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                            <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.question}</h3>
                            <p className="text-stone-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default function PhysiotherapyPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://naturopathlucknow.in" },
    { name: "Physiotherapy", url: "https://naturopathlucknow.in/physiotherapy" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateMedicalClinicSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <main className="min-h-screen bg-stone-50">
        <PhysioHero />
        <PhysioBenefits />
        <PhysioServices />
        <PhysioAbout />
        <PhysioTestimonials />
        <PhysioFAQ />
        <Contact />
      </main>
    </>
  );
}
