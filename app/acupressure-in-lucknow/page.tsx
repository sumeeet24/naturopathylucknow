import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { DOCTOR, PHONE, ADDRESS } from '@/lib/constants';
import { THERAPISTS } from '@/lib/therapists';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Acupressure in Lucknow | Acupuncture in Lucknow — Natural Treatment Hospital',
  description: 'Best Acupressure and Acupuncture treatment in Lucknow. Certified therapist Kawaljeet Singh offers holistic pain relief for sciatica, cervical, and migraine in Gomti Nagar.',
  keywords: ['Acupressure in Lucknow', 'Acupuncture in Lucknow', 'Acupressure Therapist Lucknow', 'Kawaljeet Singh Acupressure', 'Pain Management Lucknow'],
  alternates: {
    canonical: 'https://naturaltreatmenthospital.com/acupressure-in-lucknow',
  },
  openGraph: {
    title: 'Acupressure & Acupuncture Treatment in Lucknow',
    description: 'Relieve chronic pain naturally with Acupressure. Consult Kawaljeet Singh at Natural Treatment Hospital, Gomti Nagar.',
    url: 'https://naturaltreatmenthospital.com/acupressure-in-lucknow',
    type: 'website',
  }
};

const AcupressurePage = () => {
  const therapist = THERAPISTS[0]; // Kawaljeet Singh

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Natural Treatment Hospital - Acupressure Clinic",
    "image": therapist.image,
    "@id": "https://naturaltreatmenthospital.com",
    "url": "https://naturaltreatmenthospital.com/acupressure-in-lucknow",
    "telephone": PHONE,
    "priceRange": "₹300 - ₹1000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS,
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226010",
      "addressCountry": "IN"
    },
    "medicalSpecialty": ["Acupressure", "Acupuncture", "AlternativeMedicine"],
    "employee": {
      "@type": "Person",
      "name": therapist.name,
      "jobTitle": therapist.specialty,
      "image": therapist.image,
      "description": therapist.bio
    }
  };

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://naturaltreatmenthospital.com"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Acupressure & Acupuncture",
      "item": "https://naturaltreatmenthospital.com/acupressure-in-lucknow"
    }]
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

      <main className="min-h-screen bg-stone-50 text-stone-800 font-sans">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-nature-brown text-white overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-30">
            <Image
               src="/images/placeholders/acupressure-hero.jpg"
               alt="Acupressure Treatment in Lucknow"
               fill
               className="object-cover"
               priority
            />
           </div>
           <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-md">
               Acupressure & Acupuncture in Lucknow
             </h1>
             <p className="text-xl md:text-2xl mb-8 font-light">
               Ancient Healing for Modern Pain. No Medicine. No Surgery.
             </p>
             <Link href="/contact" className="bg-white text-nature-brown px-8 py-3 rounded-full font-semibold hover:bg-stone-100 transition-colors shadow-lg">
               Book Appointment
             </Link>
           </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-12">

          {/* Intro */}
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-nature-green mb-6">
              Holistic Pain Relief in Lucknow
            </h2>
            <p className="text-lg leading-relaxed text-stone-700 mb-4">
              Suffering from chronic back pain, cervical spondylitis, or migraines? <strong>Natural Treatment Hospital</strong> offers the most effective <strong>Acupressure and Acupuncture in Lucknow</strong>. Our drugless therapy stimulates your body&apos;s self-healing mechanisms, providing relief where modern medicine often relies on painkillers.
            </p>
            <p className="text-lg leading-relaxed text-stone-700">
              Combining the wisdom of Traditional Chinese Medicine (TCM) with Indian reflexology, our expert therapists unlock blocked energy channels (Meridians) to restore balance and health.
            </p>
          </section>

          {/* Therapist Spotlight */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 border border-stone-100">
            <div className="md:flex">
                <div className="md:w-1/3 relative h-80 md:h-auto bg-stone-200">
                    <Image
                        src={therapist.image}
                        alt={therapist.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-8 md:w-2/3">
                    <div className="uppercase tracking-wide text-sm text-nature-green font-semibold">{therapist.specialty}</div>
                    <Link href={`/acupressure-therapist/${therapist.slug}`} className="block mt-1 text-2xl leading-tight font-serif font-bold text-black hover:underline">
                        {therapist.name}
                    </Link>
                    <p className="mt-4 text-stone-600 leading-relaxed">
                        {therapist.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {therapist.qualifications.map((q, i) => (
                            <span key={i} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm border border-stone-200">{q}</span>
                        ))}
                    </div>
                    <div className="mt-6 flex items-center gap-4">
                        <Link href={`/acupressure-therapist/${therapist.slug}`} className="bg-nature-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
                            View Profile
                        </Link>
                        <a href={`tel:${therapist.contactNumber}`} className="text-nature-green font-semibold hover:underline">
                            Call: {therapist.contactNumber}
                        </a>
                    </div>
                </div>
            </div>
          </section>

          {/* Long Form Sections */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
                <section>
                    <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">What is Acupressure?</h2>
                    <p className="text-stone-700 leading-relaxed">
                        Acupressure is a non-invasive healing art where physical pressure is applied to specific points along the body&apos;s energy meridians. Unlike acupuncture which uses needles, acupressure uses fingers, palms, or elbows. It is particularly effective for stress-related ailments and is safe for all ages. In our Lucknow clinic, we use it extensively for tension headaches and lower back pain.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">What is Acupuncture?</h2>
                    <p className="text-stone-700 leading-relaxed">
                        Acupuncture involves the insertion of extremely thin, sterile needles at strategic points on your body. It is a key component of traditional Chinese medicine. From a Western medical perspective, acupuncture points are seen as places where nerves, muscles, and connective tissue can be stimulated. This stimulation boosts your body&apos;s natural painkillers (endorphins). It is highly effective for sciatica, arthritis, and frozen shoulder.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Conditions We Treat</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-nature-green">
                            <h3 className="font-bold text-stone-800">Arthritis & Joint Pain</h3>
                            <p className="text-sm text-stone-600 mt-1">Reduces inflammation and improves mobility in knees and hands.</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-nature-green">
                            <h3 className="font-bold text-stone-800">Migraine & Headaches</h3>
                            <p className="text-sm text-stone-600 mt-1">Triggers release of serotonin to block pain signals.</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-nature-green">
                            <h3 className="font-bold text-stone-800">Sciatica & Back Pain</h3>
                            <p className="text-sm text-stone-600 mt-1">Relieves compression on the sciatic nerve.</p>
                        </div>
                        <div className="bg-stone-50 p-4 rounded-lg border-l-4 border-nature-green">
                            <h3 className="font-bold text-stone-800">Digestive Issues</h3>
                            <p className="text-sm text-stone-600 mt-1">Regulates stomach acid and bowel movements (IBS).</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Acupressure vs. Acupuncture vs. Physiotherapy</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="bg-stone-100 border-b border-stone-200">
                                    <th className="py-3 px-4 font-semibold text-stone-700">Therapy</th>
                                    <th className="py-3 px-4 font-semibold text-stone-700">Method</th>
                                    <th className="py-3 px-4 font-semibold text-stone-700">Best For</th>
                                    <th className="py-3 px-4 font-semibold text-stone-700">Invasiveness</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-stone-100">
                                    <td className="py-3 px-4 font-bold">Acupressure</td>
                                    <td className="py-3 px-4">Finger Pressure</td>
                                    <td className="py-3 px-4">Mild pain, Stress, Self-care</td>
                                    <td className="py-3 px-4">None</td>
                                </tr>
                                <tr className="border-b border-stone-100">
                                    <td className="py-3 px-4 font-bold">Acupuncture</td>
                                    <td className="py-3 px-4">Thin Needles</td>
                                    <td className="py-3 px-4">Chronic pain, Nerves</td>
                                    <td className="py-3 px-4">Minimally Invasive</td>
                                </tr>
                                <tr className="border-b border-stone-100">
                                    <td className="py-3 px-4 font-bold">Physiotherapy</td>
                                    <td className="py-3 px-4">Exercises, Machines</td>
                                    <td className="py-3 px-4">Rehab, Muscle weakness</td>
                                    <td className="py-3 px-4">None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            {/* Sidebar / Extra Info */}
            <div className="md:col-span-1 space-y-8">
                <div className="bg-nature-light/10 p-6 rounded-xl border border-nature-green/20">
                    <h3 className="text-xl font-serif font-bold text-nature-green mb-4">Safety & Side Effects</h3>
                    <p className="text-sm text-stone-600 mb-4">
                        Acupressure is generally very safe. Acupuncture carries a small risk of bruising or bleeding at needle sites. We use single-use, sterile disposable needles to ensure zero risk of infection.
                    </p>
                    <p className="text-sm text-stone-600">
                        <strong>Note:</strong> Inform us if you are pregnant, have a pacemaker, or are on blood thinners.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-serif font-bold text-nature-green mb-4">FAQs</h3>
                    <div className="space-y-4">
                        <details className="group">
                            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                                Does Acupuncture hurt?
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="text-stone-600 mt-2 text-sm">Most people feel only a slight prick or a dull ache. It is not painful like an injection.</p>
                        </details>
                        <details className="group">
                            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                                How many sessions do I need?
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="text-stone-600 mt-2 text-sm">Chronic conditions usually require 10-15 sessions, while acute pain may resolve in 3-5 sessions.</p>
                        </details>
                        <details className="group">
                            <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                                Is it covered by insurance?
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <p className="text-stone-600 mt-2 text-sm">Some policies cover alternative treatments. Please check with your provider.</p>
                        </details>
                    </div>
                </div>

                <div className="bg-stone-800 text-white p-6 rounded-xl text-center">
                    <h3 className="font-serif font-bold text-xl mb-2">Book Your Session</h3>
                    <p className="text-sm text-stone-300 mb-4">Don&apos;t live with pain. Get treated naturally.</p>
                    <Link href="/contact" className="inline-block w-full bg-nature-green py-2 rounded font-bold hover:bg-opacity-90">
                        Contact Us
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AcupressurePage;
