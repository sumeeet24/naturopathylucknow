import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { SEO_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Dr. Nand Lal Yadav | Expert Yoga Therapist in Lucknow',
  description: 'Meet Dr. Nand Lal Yadav, a certified Yoga Therapist and Meditation Instructor with 10+ years of experience in treating lifestyle disorders naturally.',
};

export default function DoctorProfile() {
  const doctor = {
    name: "Dr. Nand Lal Yadav",
    role: "Yoga Therapist & Meditation Instructor",
    image: "/images/team/dr-nand-lal-yadav.jpg",
    experience: "10+ Years",
    phone: "+91 81154 00106",
    whatsapp: "https://wa.me/918115400106",
    specializations: [
      "Medical Yoga",
      "Yoga Therapy",
      "Lifestyle Disorders",
      "Stress Management",
      "Meditation Techniques",
      "Pranayama",
      "Naturopathy Integration"
    ],
    certifications: [
      "Diploma in Yoga Therapy",
      "Certified Meditation Instructor",
      "Advanced Pranayama Training",
      "Naturopathy & Yoga Science Certification"
    ],
    biography: `Dr. Nand Lal Yadav is a distinguished Yoga Therapist and Meditation Instructor based in Lucknow, dedicated to the holistic well-being of his patients. With over a decade of hands-on experience, he has successfully treated thousands of individuals suffering from chronic lifestyle disorders through the scientific application of Yoga and Meditation.

His journey began with a deep-rooted passion for ancient Indian sciences, leading him to pursue rigorous training and certification in Yoga Therapy. Unlike generic yoga instructors, Dr. Yadav specializes in "Medical Yoga"—a therapeutic approach designed to address specific ailments such as Diabetes, Hypertension (BP), Thyroid disorders, and Spinal issues. He believes that every body is unique, and thus, he customizes yoga sequences to match the physiological and psychological needs of each patient.

Dr. Yadav is also a master of meditation techniques. He understands that in today's fast-paced world, mental health is as crucial as physical health. His sessions often blend physical asanas with calming pranayama and mindfulness meditation to reduce stress, anxiety, and insomnia. His compassionate approach and in-depth knowledge make him one of the most sought-after Yoga Therapists in Lucknow.

At the Natural Treatment Hospital, Dr. Yadav leads the Yoga department, working closely with Naturopaths to provide an integrated treatment plan. He empowers his patients with the knowledge and tools they need to take charge of their health, promoting a drugless path to recovery and vitality.`,
    expertise: [
      {
        title: "Therapeutic Yoga for Chronic Disease",
        description: "Specialized sequences for managing Diabetes, Hypertension, Arthritis, and Digestive disorders without heavy medication."
      },
      {
        title: "Stress Management & Mental Health",
        description: "Advanced meditation and breathing techniques (Pranayama) to combat anxiety, depression, and insomnia."
      },
      {
        title: "Rehabilitative Yoga",
        description: "Gentle yoga practices for elderly patients and those recovering from injuries or surgeries."
      },
      {
        title: "Corporate Wellness",
        description: "Designing ergonomic yoga programs for professionals to prevent back pain and burnout."
      }
    ]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": doctor.name,
    "jobTitle": doctor.role,
    "image": `https://naturaltreatmenthospital.com${doctor.image}`,
    "telephone": doctor.phone,
    "url": "https://naturaltreatmenthospital.com/yoga-therapist/nand-lal-yadav",
    "description": doctor.biography,
    "knowsAbout": doctor.specializations
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
        "name": "Yoga & Meditation",
        "item": "https://naturaltreatmenthospital.com/yoga-meditation-lucknow"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": doctor.name,
        "item": "https://naturaltreatmenthospital.com/yoga-therapist/nand-lal-yadav"
      }
    ]
  };

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can Dr. Yadav help with severe back pain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dr. Yadav specializes in Yoga Therapy for spinal issues. He designs gentle, therapeutic sequences specifically for back pain relief and strengthening the spine without strain."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need prior yoga experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. The sessions are customized to your level. Beginners are welcomed and guided step-by-step."
        }
      },
      {
        "@type": "Question",
        "name": "Is online consultation available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dr. Yadav offers online sessions for those who cannot visit the center in Lucknow. Please contact the clinic to schedule."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Schema */}
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

      {/* Hero / Header Section */}
      <section className="bg-nature-green/10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-nature-green mb-4">
                {doctor.name}
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 mb-6 font-medium">
                {doctor.role}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <a
                  href={`tel:${doctor.phone.replace(/\s+/g, '')}`}
                  className="bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-lg"
                >
                  Call Now
                </a>
                <a
                  href={doctor.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg flex items-center gap-2"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 text-stone-700">
                <div>
                  <span className="font-bold block text-nature-green">Experience</span>
                  {doctor.experience}
                </div>
                <div>
                  <span className="font-bold block text-nature-green">Location</span>
                  Lucknow, India
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
            About Dr. Nand Lal Yadav
          </h2>
          <div className="prose prose-lg text-stone-700 whitespace-pre-line">
            {doctor.biography}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair font-bold text-center text-stone-800 mb-12">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {doctor.expertise.map((item, index) => (
              <div key={index} className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-nature-green mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Specializations */}
      <section className="py-16 bg-nature-green/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-playfair font-bold text-stone-800 mb-6">
                Specializations
              </h2>
              <ul className="space-y-3">
                {doctor.specializations.map((spec, index) => (
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
                {doctor.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3 text-stone-700">
                    <svg className="w-5 h-5 text-nature-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>

              {/* Certificate Images */}
              <div className="flex flex-wrap gap-4">
                  {[
                    "/images/certificate/nand-lal-yadav-certificate-1.jpg",
                    "/images/certificate/nand-lal-yadav-certificate-2.jpg"
                  ].map((img, i) => (
                    <div key={i} className="relative w-full md:w-48 h-64 rounded-lg overflow-hidden border border-stone-200 shadow-md">
                        <Image
                            src={img}
                            alt={`${doctor.name} Certificate ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition duration-300"
                        />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair font-bold text-center text-stone-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <h3 className="font-bold text-lg text-nature-green mb-2">Can Dr. Yadav help with severe back pain?</h3>
              <p className="text-stone-600">Yes, Dr. Yadav specializes in Yoga Therapy for spinal issues. He designs gentle, therapeutic sequences specifically for back pain relief and strengthening the spine without strain.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <h3 className="font-bold text-lg text-nature-green mb-2">Do I need prior yoga experience?</h3>
              <p className="text-stone-600">Not at all. The sessions are customized to your level. Beginners are welcomed and guided step-by-step.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
              <h3 className="font-bold text-lg text-nature-green mb-2">Is online consultation available?</h3>
              <p className="text-stone-600">Yes, Dr. Yadav offers online sessions for those who cannot visit the center in Lucknow. Please contact the clinic to schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-nature-green text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a personalized session with Dr. Nand Lal Yadav and experience the healing power of Yoga.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a
              href={`tel:${doctor.phone.replace(/\s+/g, '')}`}
              className="bg-white text-nature-green px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition"
            >
              Call {doctor.phone}
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
