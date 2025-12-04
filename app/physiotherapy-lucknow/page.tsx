import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { DOCTOR, PHONE, ADDRESS } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Physiotherapy in Lucknow | Best Physiotherapist — Natural Treatment Hospital',
  description: 'Top-rated Physiotherapy clinic in Lucknow. Specialist rehabilitation for back pain, sports injuries, and paralysis. Located in Gomti Nagar near Aliganj.',
  keywords: ['Physiotherapy Lucknow', 'Physiotherapist in Lucknow', 'Physiotherapy Center Gomti Nagar', 'Back Pain Treatment Lucknow', 'Sports Injury Rehab Lucknow'],
  alternates: {
    canonical: 'https://naturaltreatmenthospital.com/physiotherapy-lucknow',
  },
  openGraph: {
    title: 'Physiotherapy in Lucknow | Expert Rehabilitation',
    description: 'Recover faster with advanced Physiotherapy. Neuro, Ortho & Sports rehab at Natural Treatment Hospital, Lucknow.',
    url: 'https://naturaltreatmenthospital.com/physiotherapy-lucknow',
    type: 'website',
  }
};

const PhysiotherapyPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Natural Treatment Hospital - Physiotherapy Dept",
    "image": DOCTOR.image,
    "@id": "https://naturaltreatmenthospital.com",
    "url": "https://naturaltreatmenthospital.com/physiotherapy-lucknow",
    "telephone": PHONE,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS,
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226010",
      "addressCountry": "IN"
    },
    "medicalSpecialty": ["Physiotherapy", "PhysicalTherapy", "Rehabilitation"],
    "availableService": [
        { "@type": "MedicalTherapy", "name": "Orthopedic Rehabilitation" },
        { "@type": "MedicalTherapy", "name": "Neurological Rehabilitation" },
        { "@type": "MedicalTherapy", "name": "Sports Injury Management" }
    ]
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
      "name": "Physiotherapy",
      "item": "https://naturaltreatmenthospital.com/physiotherapy-lucknow"
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
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-blue-900 text-white overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-40">
            <Image
               src="/images/placeholders/physio-hero.jpg"
               alt="Physiotherapy Clinic in Lucknow"
               fill
               className="object-cover"
               priority
            />
           </div>
           <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-md">
               Physiotherapy in Lucknow
             </h1>
             <p className="text-xl md:text-2xl mb-8 font-light">
               Advanced Rehabilitation for Pain-Free Movement.
             </p>
             <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-stone-100 transition-colors shadow-lg">
               Consult a Physiotherapist
             </Link>
           </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-12">

          {/* Intro */}
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-nature-green mb-6">
              Restore Your Mobility & Strength
            </h2>
            <p className="text-lg leading-relaxed text-stone-700 mb-4">
              At <strong>Natural Treatment Hospital</strong>, we provide world-class <strong>Physiotherapy in Lucknow</strong>. Whether you are recovering from surgery, managing a sports injury, or dealing with chronic arthritis, our expert physiotherapists design personalized recovery plans.
            </p>
            <p className="text-lg leading-relaxed text-stone-700">
                We combine manual therapy, therapeutic exercises, and electrotherapy (IFT, Ultrasound, TENS) to ensure rapid recovery. Our clinic in Gomti Nagar is equipped to handle complex orthopedic and neurological cases.
            </p>
          </section>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition">
                 <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.8 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.8A9 9 0 0 1 19 6.3z"/></svg>
                 </div>
                 <h3 className="text-xl font-bold mb-2 text-stone-800">Orthopedic Rehab</h3>
                 <p className="text-stone-600">Specialized care for fractures, joint replacements (Knee/Hip), spondylitis, and frozen shoulder.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition">
                 <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>
                 </div>
                 <h3 className="text-xl font-bold mb-2 text-stone-800">Sports Injuries</h3>
                 <p className="text-stone-600">Fast-track recovery for ligament tears (ACL/PCL), muscle strains, and tennis elbow for athletes.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition">
                 <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                 </div>
                 <h3 className="text-xl font-bold mb-2 text-stone-800">Neuro Rehabilitation</h3>
                 <p className="text-stone-600">Improving balance and motor skills for Paralysis (Stroke), Parkinson&apos;s, and Cerebral Palsy patients.</p>
             </div>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
             <section>
                 <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">What is Physiotherapy?</h2>
                 <p className="text-stone-700 leading-relaxed">
                     Physiotherapy is a science-based healthcare profession that assesses, diagnoses, treats, and works to prevent disease and disability. It uses physical means like exercise, massage, heat, and electricity rather than drugs. It is crucial for restoring function after injury or illness.
                 </p>
             </section>

             <section>
                 <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Common Techniques We Use</h2>
                 <ul className="grid md:grid-cols-2 gap-4">
                     <li className="flex items-start gap-3">
                         <span className="text-nature-green mt-1">✓</span>
                         <div>
                             <strong className="block text-stone-800">Manual Therapy</strong>
                             <span className="text-stone-600 text-sm">Mobilization of joints and soft tissues to reduce pain.</span>
                         </div>
                     </li>
                     <li className="flex items-start gap-3">
                         <span className="text-nature-green mt-1">✓</span>
                         <div>
                             <strong className="block text-stone-800">Electrotherapy</strong>
                             <span className="text-stone-600 text-sm">Ultrasound and IFT to reduce inflammation and muscle spasms.</span>
                         </div>
                     </li>
                     <li className="flex items-start gap-3">
                         <span className="text-nature-green mt-1">✓</span>
                         <div>
                             <strong className="block text-stone-800">Dry Needling</strong>
                             <span className="text-stone-600 text-sm">Releasing trigger points in tight muscles.</span>
                         </div>
                     </li>
                     <li className="flex items-start gap-3">
                         <span className="text-nature-green mt-1">✓</span>
                         <div>
                             <strong className="block text-stone-800">Taping</strong>
                             <span className="text-stone-600 text-sm">Kinesio taping to support muscles during movement.</span>
                         </div>
                     </li>
                 </ul>
             </section>

             <section>
                 <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Home Exercise Program</h2>
                 <p className="text-stone-700 mb-4">
                     Recovery doesn&apos;t end at the clinic. We provide detailed home exercise charts. Here are simple exercises often prescribed (do only after consultation):
                 </p>
                 <div className="bg-stone-100 p-6 rounded-lg">
                     <ul className="space-y-3">
                         <li className="text-stone-700"><strong>Neck Isometrics:</strong> Pressing palm against forehead/sides of head without moving the neck. Good for Cervical Spondylosis.</li>
                         <li className="text-stone-700"><strong>Straight Leg Raise:</strong> Lifting leg while lying down. Good for Knee Pain and Back Pain.</li>
                         <li className="text-stone-700"><strong>Ankle Pumps:</strong> Moving ankle up and down. Improves circulation.</li>
                     </ul>
                 </div>
             </section>

             <section>
                 <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Safety & Red Flags</h2>
                 <p className="text-stone-700 leading-relaxed">
                     Physiotherapy is very safe when performed by qualified professionals. However, stop exercises if you feel sharp pain, dizziness, or numbness. Always inform your therapist about any history of heart issues or recent surgeries.
                 </p>
             </section>

             {/* FAQ */}
             <section>
                <h2 className="text-2xl font-serif font-bold text-nature-green mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div className="border-b border-stone-200 pb-4">
                        <h3 className="font-semibold text-stone-800 mb-1">Do I need a doctor&apos;s referral?</h3>
                        <p className="text-stone-600 text-sm">Not necessarily. You can consult our physiotherapists directly. However, if you have recent X-rays or MRI, please bring them.</p>
                    </div>
                    <div className="border-b border-stone-200 pb-4">
                        <h3 className="font-semibold text-stone-800 mb-1">How long is a session?</h3>
                        <p className="text-stone-600 text-sm">A typical session lasts 45 to 60 minutes depending on the treatment required.</p>
                    </div>
                    <div className="border-b border-stone-200 pb-4">
                        <h3 className="font-semibold text-stone-800 mb-1">Is Physiotherapy painful?</h3>
                        <p className="text-stone-600 text-sm">It should not be painful. You might feel mild soreness after stretching (like after a gym workout), which is normal.</p>
                    </div>
                </div>
             </section>
          </div>

        </div>
      </main>
    </>
  );
};

export default PhysiotherapyPage;
