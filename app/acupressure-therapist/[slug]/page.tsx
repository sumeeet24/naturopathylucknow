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
    keywords: [therapist.name, therapist.specialty, 'Acupressure Doctor Lucknow', 'Best Acupressure Therapist'],
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
    "image": therapist.image,
    "description": therapist.bio,
    "telephone": therapist.contactNumber,
    "email": therapist.email,
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
        "item": "https://naturaltreatmenthospital.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Acupressure Therapists",
        "item": "https://naturaltreatmenthospital.com/acupressure-in-lucknow"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": therapist.name,
        "item": `https://naturaltreatmenthospital.com/acupressure-therapist/${therapist.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />

      <main className="min-h-screen bg-stone-50 py-12 px-4 font-sans">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">

          {/* Header / Profile Card */}
          <div className="md:flex bg-nature-green text-white p-8">
            <div className="md:w-1/3 flex justify-center md:justify-start">
               <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                 <Image
                    src={therapist.image}
                    alt={therapist.name}
                    fill
                    className="object-cover"
                 />
               </div>
            </div>
            <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0 flex flex-col justify-center text-center md:text-left">
              <h1 className="text-3xl font-serif font-bold mb-2">{therapist.name}</h1>
              <p className="text-xl font-light opacity-90 mb-4">{therapist.specialty}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {therapist.qualifications.map((q, i) => (
                    <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        {q}
                    </span>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                 <a href={`tel:${therapist.contactNumber}`} className="bg-white text-nature-green px-6 py-2 rounded-full font-bold hover:bg-stone-100 transition shadow">
                    Call: {therapist.contactNumber}
                 </a>
                 <Link href="/contact" className="border-2 border-white text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-nature-green transition">
                    Book Appointment
                 </Link>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-12">

            {/* Bio */}
            <section>
                <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">About {therapist.name}</h2>
                <p className="text-stone-700 text-lg leading-relaxed">
                    {therapist.bio}
                </p>
            </section>

            {/* Availability */}
            <section className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span className="text-nature-green">🕒</span> Clinic Schedule
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-sm text-stone-500 uppercase tracking-wider font-semibold">Available Days</p>
                        <p className="font-medium text-stone-800 mt-1">{therapist.availableDays.join(", ")}</p>
                    </div>
                    <div>
                        <p className="text-sm text-stone-500 uppercase tracking-wider font-semibold">Timings</p>
                        <p className="font-medium text-stone-800 mt-1">{therapist.availableHours}</p>
                    </div>
                </div>
            </section>

            {/* Certifications (Placeholder) */}
            {therapist.certificateImage && (
                <section>
                    <h2 className="text-2xl font-serif font-bold text-nature-green mb-6">Certifications</h2>
                    <div className="relative h-64 w-full md:w-1/2 rounded-lg overflow-hidden bg-stone-200 border border-stone-300">
                        {/* Placeholder for certificate */}
                        <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-bold">
                            Certificate Image
                        </div>
                         <Image
                            src={therapist.certificateImage}
                            alt="Certificate"
                            fill
                            className="object-cover opacity-50 hover:opacity-75 transition"
                         />
                    </div>
                </section>
            )}

          </div>
        </div>

        {/* Areas Served Footer */}
        <section className="py-8 mt-12 bg-stone-100 text-stone-500 text-xs text-center border-t border-stone-200">
           <div className="container mx-auto px-4">
              <p className="mb-2 font-bold uppercase tracking-wider">Serving Patients From</p>
              <p>{SEO_AREAS.join(" | ")}</p>
           </div>
        </section>

      </main>
    </>
  );
}
