import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, MapPin, Clock, Calendar, ShieldCheck, Award } from 'lucide-react';

// SEO Metadata
export const metadata: Metadata = {
  title: 'Dr. Neelam Kumari | Naturopathy and Yogic Science Expert Lucknow',
  description: 'Meet Dr. Neelam Kumari, a certified Naturopathy and Yogic Science expert in Lucknow. Specializing in holistic healing, natural treatments, and women\'s wellness. Call 81154 00106.',
};

export default function DrNeelamProfile() {
  // Doctor Data - Defined locally as requested
  const doctor = {
    name: "Dr. Neelam Kumari",
    role: "Naturopathy and Yogic Science Expert",
    image: "/images/team/dr-nilam-kumari.jpg",
    phone: "81154 00106",
    whatsapp: "8115400106",
    experience: "10+ Years Experience", // Estimated placeholder
    location: "Lucknow, India",
    biography: `Dr. Neelam Kumari is a dedicated and compassionate practitioner of Naturopathy and Yogic Science. With a deep understanding of the body's natural healing capabilities, she focuses on treating the root cause of ailments rather than just the symptoms.

    Her approach integrates traditional naturopathic treatments—such as mud therapy, hydrotherapy, and diet therapy—with the ancient wisdom of Yoga. She believes in empowering patients to take charge of their health through lifestyle modifications and natural remedies.

    Dr. Neelam specializes in lifestyle disorders, women's health issues, and chronic pain management. Her personalized treatment plans are designed to restore balance to the body, mind, and spirit, promoting long-term wellness and vitality.`,
    expertise: [
      {
        title: "Naturopathy",
        description: "Utilizing natural elements like earth, water, and air to detoxify the body and boost immunity."
      },
      {
        title: "Yogic Science",
        description: "Therapeutic application of yoga asanas and pranayama to manage stress and improve physical health."
      },
      {
        title: "Diet Therapy",
        description: "Customized nutrition plans to treat diseases and maintain optimal health naturally."
      },
      {
        title: "Women's Wellness",
        description: "Specialized care for hormonal imbalance, PCOD/PCOS, and pre/post-natal health."
      }
    ],
    specializations: [
      "Lifestyle Disease Management",
      "Detoxification & Rejuvenation",
      "Digestive Disorders",
      "Stress Management",
      "Joint Pain & Arthritis",
      "Obesity Management"
    ],
    certifications: [
      "Bachelor of Naturopathy and Yogic Sciences (BNYS)", // Assumption based on title
      "Certified Yoga Therapist",
      "Registered Naturopathy Practitioner"
    ],
    certificateImages: [
        {
            src: "/images/certificate/dr-nilam-kumari-certificate.jpg",
            alt: "Certificate of Dr. Neelam Kumari"
        }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50">
      <Header />

      <main className="flex-grow pt-24">
        {/* Breadcrumb / Back Link */}
        <div className="container mx-auto px-4 py-4">
            <Link href="/" className="text-nature-green hover:underline flex items-center gap-2 text-sm font-medium">
                ← Back to Home
            </Link>
        </div>

        {/* Profile Hero Section */}
        <section className="pb-16 pt-8">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100 flex flex-col md:flex-row gap-12 items-center">

              {/* Left Column: Image */}
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-stone-100 shadow-2xl mb-8">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Quick Stats / Badges */}
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="text-center p-3 bg-nature-green/5 rounded-xl border border-nature-green/10">
                        <Award className="w-6 h-6 text-nature-green mx-auto mb-1" />
                        <p className="text-xs font-bold text-stone-600">Expert</p>
                    </div>
                     <div className="text-center p-3 bg-nature-green/5 rounded-xl border border-nature-green/10">
                        <ShieldCheck className="w-6 h-6 text-nature-green mx-auto mb-1" />
                        <p className="text-xs font-bold text-stone-600">Certified</p>
                    </div>
                </div>
              </div>

              {/* Right Column: Text Info */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-stone-800 mb-2">
                  {doctor.name}
                </h1>
                <p className="text-xl text-nature-green font-medium mb-6 uppercase tracking-wide">
                  {doctor.role}
                </p>

                 {/* Qualification List (as per layout request) */}
                 <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                    <div className="flex items-center gap-2 text-stone-600 bg-stone-50 px-4 py-2 rounded-full border border-stone-200">
                        <Clock className="w-4 h-4 text-nature-green" />
                        <span className="text-sm font-semibold">{doctor.experience}</span>
                    </div>
                     <div className="flex items-center gap-2 text-stone-600 bg-stone-50 px-4 py-2 rounded-full border border-stone-200">
                        <MapPin className="w-4 h-4 text-nature-green" />
                        <span className="text-sm font-semibold">{doctor.location}</span>
                    </div>
                 </div>

                <p className="text-stone-600 text-lg leading-relaxed mb-8 max-w-2xl">
                    Specializing in holistic natural treatments and yogic science to restore balance and vitality.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href={`tel:${doctor.phone.replace(/\s+/g, '')}`}
                    className="bg-stone-800 text-white px-8 py-3 rounded-full font-bold hover:bg-stone-900 transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`https://wa.me/91${doctor.whatsapp}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Neelam.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-playfair font-bold text-stone-800 mb-6 border-b-2 border-nature-green/30 pb-2 inline-block">
              About {doctor.name}
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
                      <ShieldCheck className="w-5 h-5 text-nature-green" />
                      {cert}
                    </li>
                  ))}
                </ul>

                {/* Certificate Images */}
                <div className="flex flex-wrap gap-4">
                    {doctor.certificateImages.map((img, i) => (
                      <div key={i} className="relative w-full md:w-48 h-64 rounded-lg overflow-hidden border border-stone-200 shadow-md">
                          <Image
                              src={img.src}
                              alt={img.alt || `${doctor.name} Certificate ${i + 1}`}
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
                <h3 className="font-bold text-lg text-nature-green mb-2">How can Naturopathy help me?</h3>
                <p className="text-stone-600">Naturopathy treats the whole person, not just the disease. It stimulates the body&apos;s self-healing mechanisms, making it effective for chronic conditions and overall wellness.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                <h3 className="font-bold text-lg text-nature-green mb-2">Is diet therapy difficult to follow?</h3>
                <p className="text-stone-600">Dr. Neelam creates practical and sustainable diet plans tailored to your lifestyle and preferences, making them easy to adopt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-nature-green text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Start Your Natural Healing Journey
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Book a personalized consultation with Dr. Neelam Kumari today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <a
                href={`tel:${doctor.phone.replace(/\s+/g, '')}`}
                className="bg-white text-nature-green px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition"
              >
                Call
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

        <Footer />
      </main>
    </div>
  );
}
