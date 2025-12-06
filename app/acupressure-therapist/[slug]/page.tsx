import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { THERAPISTS } from '@/lib/therapists';
import { PHONE, ADDRESS, SEO_AREAS } from '@/lib/constants';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const therapist = THERAPISTS.find((t) => t.slug === params.slug);
  if (!therapist) return {};

  return {
    title: `${therapist.name} | ${therapist.specialty} in Lucknow — Natural Treatment Hospital`,
    description: therapist.description,
    keywords: [therapist.name, therapist.specialty, 'Acupressure Doctor Lucknow', 'Best Acupressure Therapist', ...therapist.specializations || []],
    openGraph: {
      title: `${therapist.name} - ${therapist.specialty}`,
      description: therapist.bio,
      images: [therapist.image],
    },
  };
}

export default function TherapistProfile({ params }: Props) {
  const therapist = THERAPISTS.find((t) => t.slug === params.slug);

  if (!therapist) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": therapist.name,
    "jobTitle": therapist.specialty,
    "image": `https://naturopathlucknow.in${therapist.image}`,
    "description": therapist.longBio || therapist.bio,
    "telephone": therapist.contactNumber,
    "email": therapist.email,
    "knowsAbout": therapist.specializations,
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Natural Treatment Hospital",
      "address": {
          "@type": "PostalAddress",
          "streetAddress": ADDRESS,
          "addressLocality": "Lucknow",
          "addressRegion": "UP",
          "postalCode": "226010",
          "addressCountry": "IN"
      }
    }
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://naturopathlucknow.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Acupressure Therapists",
        "item": "https://naturopathlucknow.in/acupressure-acupuncture-lucknow"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": therapist.name,
        "item": `https://naturopathlucknow.in/acupressure-therapist/${therapist.slug}`
      }
    ]
  };

  const faqJson = therapist.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": therapist.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <main className="min-h-screen bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      {faqJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
        />
      )}

      {/* Hero / Header Section */}
      <section className="bg-nature-green/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={therapist.image}
                alt={therapist.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-nature-green mb-4">
                {therapist.name}
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 mb-6 font-medium">
                {therapist.specialty}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <a
                  href={`tel:${therapist.contactNumber.replace(/\s+/g, '')}`}
                  className="bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-lg"
                >
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-nature-green border-2 border-nature-green px-8 py-3 rounded-full font-bold hover:bg-stone-50 transition shadow-lg"
                >
                  Book Appointment
                </Link>
              </div>
              <div className="flex flex-col md:flex-row gap-6 text-stone-700">
                <div>
                    <span className="font-bold block text-nature-green">Availability</span>
                    {therapist.availableDays.join(", ")}
                </div>
                <div>
                  <span className="font-bold block text-nature-green">Timings</span>
                  {therapist.availableHours}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-stone-800 mb-6 border-b-2 border-nature-green/30 pb-2 inline-block">
            About {therapist.name}
          </h2>
          <div className="prose prose-lg text-stone-700 whitespace-pre-line">
            {therapist.longBio || therapist.bio}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      {therapist.expertise && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-playfair font-bold text-center text-stone-800 mb-12">
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {therapist.expertise.map((item, index) => (
                <div key={index} className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition">
                  <h3 className="text-xl font-bold text-nature-green mb-3">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications & Specializations */}
      <section className="py-16 bg-nature-green/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-playfair font-bold text-stone-800 mb-6">
                Specializations
              </h2>
              <ul className="space-y-3">
                {(therapist.specializations || therapist.qualifications).map((spec, index) => (
                  <li key={index} className="flex items-center gap-3 text-stone-700">
                    <span className="w-2 h-2 bg-nature-green rounded-full"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-playfair font-bold text-stone-800 mb-6">
                Certifications
              </h2>
              <ul className="space-y-3 mb-8">
                {(therapist.certifications || therapist.qualifications).map((cert, index) => (
                  <li key={index} className="flex items-center gap-3 text-stone-700">
                    <svg className="w-5 h-5 text-nature-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>

              {/* Certificate Images Display */}
              {therapist.certificateImages && therapist.certificateImages.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {therapist.certificateImages.map((img, i) => (
                    <div key={i} className="relative w-full md:w-48 h-64 rounded-lg overflow-hidden border border-stone-200 shadow-md">
                        <Image
                            src={img}
                            alt={`${therapist.name} Certificate ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition duration-300"
                        />
                    </div>
                  ))}
                </div>
              )}
              {/* Fallback for single legacy certificateImage */}
              {!therapist.certificateImages && therapist.certificateImage && (
                 <div className="relative w-full md:w-48 h-64 rounded-lg overflow-hidden border border-stone-200 shadow-md">
                    <Image
                        src={therapist.certificateImage}
                        alt={`${therapist.name} Certificate`}
                        fill
                        className="object-cover hover:scale-105 transition duration-300"
                    />
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {therapist.faqs && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-playfair font-bold text-center text-stone-800 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {therapist.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                  <h3 className="font-bold text-lg text-nature-green mb-2">{faq.question}</h3>
                  <p className="text-stone-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="bg-nature-green text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a personalized session with {therapist.name} and experience the healing power of {therapist.specialty.split(' ').pop()}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a
              href={`tel:${therapist.contactNumber.replace(/\s+/g, '')}`}
              className="bg-white text-nature-green px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition"
            >
              Call {therapist.contactNumber}
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Areas Served Footer */}
      <section className="py-8 bg-stone-100 text-stone-500 text-xs text-center border-t border-stone-200">
         <div className="container mx-auto px-4">
            <p className="mb-2 font-bold uppercase tracking-wider">Serving Patients From</p>
            <p>{SEO_AREAS.join(" | ")}</p>
         </div>
      </section>

    </main>
  );
}
