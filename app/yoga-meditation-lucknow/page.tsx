import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { DOCTOR, PHONE, ADDRESS, WHATSAPP } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yoga and Meditation in Lucknow | Best Yoga Classes — Natural Treatment Hospital',
  description: 'Join the best Yoga and Meditation classes in Lucknow at Natural Treatment Hospital. Expert-led medical yoga for diabetes, stress, and chronic diseases. Located in Gomti Nagar.',
  keywords: ['Yoga Classes in Lucknow', 'Meditation in Lucknow', 'Yoga for Diabetes', 'Medical Yoga Lucknow', 'Naturopathy Center Lucknow'],
  alternates: {
    canonical: 'https://naturaltreatmenthospital.com/yoga-meditation-lucknow',
  },
  openGraph: {
    title: 'Yoga and Meditation in Lucknow | Natural Treatment Hospital',
    description: 'Transform your health with Medical Yoga & Meditation. Expert guidance by Dr. Ravi Gupta in Gomti Nagar, Lucknow.',
    url: 'https://naturaltreatmenthospital.com/yoga-meditation-lucknow',
    type: 'website',
  }
};

const YogaPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Natural Treatment Hospital",
    "image": DOCTOR.image,
    "@id": "https://naturaltreatmenthospital.com",
    "url": "https://naturaltreatmenthospital.com/yoga-meditation-lucknow",
    "telephone": PHONE,
    "priceRange": "₹500 - ₹2000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS,
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.850000,
      "longitude": 80.949997
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "16:00",
        "closes": "19:00"
      }
    ],
    "medicalSpecialty": ["Naturopathic", "Yoga", "AlternativeMedicine"],
    "founder": {
      "@type": "Person",
      "name": "Dr. Ravi Gupta"
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
      "name": "Yoga & Meditation",
      "item": "https://naturaltreatmenthospital.com/yoga-meditation-lucknow"
    }]
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which type of Yoga is best for Diabetes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For diabetes, we focus on abdominal compression poses like Mandukasana (Frog Pose) and Ardha Matsyendrasana to stimulate the pancreas. This is part of our Medical Yoga protocol in Lucknow."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer meditation classes for beginners in Lucknow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our meditation sessions in Gomti Nagar are designed for all levels, starting with guided breathwork (Pranayama) and Yoga Nidra for deep relaxation."
        }
      },
      {
        "@type": "Question",
        "name": "How is Medical Yoga different from regular Yoga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medical Yoga at Natural Treatment Hospital is therapy-based. Unlike general fitness yoga, we prescribe specific asanas to treat conditions like back pain, hypertension, and thyroid issues under doctor supervision."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of Yoga classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our sessions are affordable and often part of a holistic treatment package. Contact us at " + PHONE + " for current rates."
        }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />

      <main className="min-h-screen bg-stone-50 text-stone-800 font-sans">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-nature-green text-white overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-40">
            <Image
               src="/images/placeholders/yoga-hero.jpg"
               alt="Group Yoga Class in Lucknow"
               fill
               className="object-cover"
               priority
            />
           </div>
           <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-md">
               Yoga & Meditation in Lucknow
             </h1>
             <p className="text-xl md:text-2xl mb-8 font-light">
               Restore Balance, Heal Naturally, and Find Inner Peace with Medical Yoga.
             </p>
             <Link href="/contact" className="bg-white text-nature-green px-8 py-3 rounded-full font-semibold hover:bg-stone-100 transition-colors shadow-lg">
               Book a Class Today
             </Link>
           </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12">

          {/* Intro */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-nature-green mb-6">
              Experience Holistic Healing with Yoga in Gomti Nagar
            </h2>
            <p className="text-lg leading-relaxed text-stone-700 mb-4">
              Welcome to <strong>Natural Treatment Hospital</strong>, the premier destination for <strong>Yoga and Meditation in Lucknow</strong>. Unlike standard fitness studios, our approach is deeply rooted in <strong>Medical Yoga</strong>—a therapeutic application of asanas designed to treat specific ailments. Located in the heart of Gomti Nagar, we serve patients from Aliganj, Hazratganj, and Indira Nagar who seek more than just a workout.
            </p>
            <p className="text-lg leading-relaxed text-stone-700">
              Under the guidance of <strong>Dr. Ravi Gupta</strong>, our sessions integrate breathwork (Pranayama), physical postures (Asanas), and mindfulness (Dhyana) to harmonize your body, mind, and spirit. Whether you are managing diabetes, chronic pain, or simply the stress of city life, our tailored programs offer a sanctuary for healing.
            </p>
          </section>

          {/* Long Form Sections */}
          <div className="space-y-16">

            <section>
              <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">What is Yoga?</h2>
              <p className="text-stone-700 leading-relaxed">
                Yoga is an ancient Indian science of living, not just a set of physical exercises. The word &apos;Yoga&apos; comes from the Sanskrit root &apos;Yuj&apos;, meaning to join or unite. It represents the union of individual consciousness with universal consciousness. At our Lucknow center, we practice <strong>Hatha Yoga</strong> and <strong>Ashtanga Yoga</strong>, focusing on alignment and breath. Regular practice improves flexibility, muscle strength, and posture while reducing the risk of injury. It is a holistic discipline that fosters physical health, mental clarity, and emotional stability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">What is Meditation?</h2>
              <p className="text-stone-700 leading-relaxed">
                Meditation (Dhyana) is the art of silencing the mind. In today&apos;s fast-paced world, stress is a silent killer. Our meditation classes in Lucknow teach you how to detach from the chaos of daily life. We use techniques like <strong>Mindfulness Meditation</strong>, <strong>Om Chanting</strong>, and <strong>Trataka</strong> (candle gazing) to improve focus and reduce anxiety. It is scientifically proven to lower cortisol levels, lower blood pressure, and improve sleep quality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Why Practice in Lucknow?</h2>
              <p className="text-stone-700 leading-relaxed">
                Lucknow, the city of Nawabs, is known for its rich culture but also for its rising pollution and lifestyle diseases. Residents of busy areas like <strong>Alambagh</strong> and <strong>Charbagh</strong> often suffer from respiratory issues and stress. Practicing Yoga in a clean, naturopathic environment like ours provides a much-needed detox. We offer a serene space away from the noise, allowing you to reconnect with nature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Yoga for Diabetes</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                India is the diabetes capital of the world, and Lucknow is no exception. Our specialized <strong>Yoga for Diabetes</strong> program focuses on stimulating the abdominal organs.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-700">
                <li><strong>Mandukasana (Frog Pose):</strong> Directly pressurizes the pancreas to stimulate insulin production.</li>
                <li><strong>Vakrasana (Twisted Pose):</strong> Massages the liver and pancreas.</li>
                <li><strong>Kapalbhati Pranayama:</strong> Increases metabolic rate and burns sugar.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Yoga for Heart Health & Hypertension</h2>
              <p className="text-stone-700 leading-relaxed">
                High blood pressure is a common ailment among professionals in Lucknow. We teach gentle, cooling pranayamas like <strong>Chandra Bhedi</strong> and <strong>Sheetali</strong> to lower blood pressure naturally. Asanas like <strong>Shavasana</strong> (Corpse Pose) and <strong>Yoga Nidra</strong> are used to induce deep relaxation, reducing the strain on the heart. We avoid inverted poses for high BP patients to ensure safety.
              </p>
            </section>

             <section>
              <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Yoga for Mental Health & Students</h2>
              <p className="text-stone-700 leading-relaxed">
                With the pressure of exams and competitive careers, students in Lucknow need tools to manage stress. Our <strong>Yoga for Mental Health</strong> sessions include <strong>Bhramari Pranayama</strong> (Humming Bee Breath) which instantly calms the nervous system. We help students improve memory and concentration through <strong>Super Brain Yoga</strong> and balancing poses like <strong>Vrikshasana</strong> (Tree Pose).
              </p>
            </section>

            <section>
                <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                    <h3 className="text-2xl font-serif font-bold text-nature-green mb-4">Quick Reference: Yoga Styles & Benefits</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-stone-300">
                                    <th className="py-3 px-4 font-semibold text-stone-700">Yoga Style</th>
                                    <th className="py-3 px-4 font-semibold text-stone-700">Best For</th>
                                    <th className="py-3 px-4 font-semibold text-stone-700">Intensity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-stone-200">
                                    <td className="py-3 px-4">Hatha Yoga</td>
                                    <td className="py-3 px-4">Beginners, Balance, Flexibility</td>
                                    <td className="py-3 px-4">Low - Medium</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="py-3 px-4">Medical Yoga</td>
                                    <td className="py-3 px-4">Treating Diseases (Diabetes, BP)</td>
                                    <td className="py-3 px-4">Customized</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="py-3 px-4">Power Yoga</td>
                                    <td className="py-3 px-4">Weight Loss, Stamina</td>
                                    <td className="py-3 px-4">High</td>
                                </tr>
                                <tr className="border-b border-stone-200">
                                    <td className="py-3 px-4">Pranayama</td>
                                    <td className="py-3 px-4">Stress, Lung Capacity, Anxiety</td>
                                    <td className="py-3 px-4">Low (Breathwork)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-nature-green mb-4">Side Effects & Safety</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                While Yoga is generally safe, incorrect practice can lead to injury. This is why learning from a qualified Naturopath is crucial.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-700">
                <li><strong>Overstretching:</strong> Can cause muscle tears. Always warm up.</li>
                <li><strong>Inversions:</strong> Headstands (Sirsasana) should be avoided by those with high BP or neck injuries.</li>
                <li><strong>Pranayama:</strong> Incorrect holding of breath (Kumbhaka) can cause dizziness.</li>
                <li>At Natural Treatment Hospital, we prioritize safety and use props to assist beginners.</li>
              </ul>
            </section>

            {/* Local CTA */}
            <div className="bg-nature-green text-white p-8 rounded-xl text-center shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-4">Ready to Transform Your Health?</h3>
                <p className="text-lg mb-6">
                    Join our community of wellness seekers in Gomti Nagar. Whether you are from Jankipuram, Mahanagar, or Chowk, good health is just a visit away.
                </p>
                <Link href="/contact" className="inline-block bg-white text-nature-green px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition-colors">
                    View Class Schedule & Book
                </Link>
            </div>

            {/* FAQ */}
            <section>
                <h2 className="text-3xl font-serif font-bold text-nature-green mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqJson.mainEntity.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                            <h3 className="text-xl font-semibold text-stone-800 mb-2">{faq.name}</h3>
                            <p className="text-stone-600">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                         <h3 className="text-xl font-semibold text-stone-800 mb-2">Do I need to be flexible to do Yoga?</h3>
                         <p className="text-stone-600">Not at all. Yoga creates flexibility. You don&apos;t need to touch your toes to start; you just need to be willing to try.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                         <h3 className="text-xl font-semibold text-stone-800 mb-2">What should I wear?</h3>
                         <p className="text-stone-600">Wear loose, comfortable cotton clothing that allows you to move freely. Avoid tight synthetics.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                         <h3 className="text-xl font-semibold text-stone-800 mb-2">Can Yoga cure back pain?</h3>
                         <p className="text-stone-600">Yes, specific asanas like Bhujangasana (Cobra Pose) and Marjariasana (Cat-Cow) are excellent for strengthening the spine and relieving back pain.</p>
                    </div>
                     <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                         <h3 className="text-xl font-semibold text-stone-800 mb-2">Is it safe for seniors?</h3>
                         <p className="text-stone-600">Absolutely. We have a dedicated &apos;Yoga for Elderly&apos; program that uses chair yoga and gentle movements to improve mobility without strain.</p>
                    </div>
                </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
};

export default YogaPage;
