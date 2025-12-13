import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ImmediateTrustSection,
  ServicesTabs,
  ConditionsAccordion,
  FAQAccordion
} from './components';
import {
  Phone, Star, ShieldCheck, MapPin,
  CheckCircle, Calendar, Users, Activity, Award, Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Yoga Classes in Lucknow | Dr. Nand Lal Yadav | 28 Years',
  description: 'Join Lucknow\'s most experienced yoga therapist Dr. Nand Lal Yadav (28 years, 1 lakh+ patients). Medical yoga for diabetes, BP, weight loss. Book free trial: 8115400106',
  alternates: {
    canonical: 'https://naturopathlucknow.in/yoga-meditation-lucknow',
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Best Yoga Classes in Lucknow | Dr. Nand Lal Yadav',
    description: '28 years experience, 1 lakh+ patients treated. Medical yoga therapy for chronic diseases in Lucknow.',
    url: 'https://naturopathlucknow.in/yoga-meditation-lucknow',
    siteName: 'Natural Treatment Hospital Lucknow',
    images: [
      {
        url: 'https://naturopathlucknow.in/images/hero/yoga.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Nand Lal Yadav conducting yoga therapy session in Lucknow',
      },
    ],
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Lucknow',
    'geo.position': '26.8467;80.9462',
    'ICBM': '26.8467, 80.9462',
  }
};

export default function YogaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "YogaStudio",
        "name": "Medical Yoga Therapy - Natural Treatment Hospital Lucknow",
        "image": "https://naturopathlucknow.in/images/hero/yoga.jpg",
        "description": "Premier medical yoga and meditation center in Lucknow led by Dr. Nand Lal Yadav with 28 years experience and over 100,000 patients treated.",
        "@id": "https://naturopathlucknow.in/yoga-meditation-lucknow",
        "url": "https://naturopathlucknow.in/yoga-meditation-lucknow",
        "telephone": "+91-8115400106",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "CP-143, Viraj Khand, Gomti Nagar",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "226010",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.8467",
          "longitude": "80.9462"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "06:00",
            "closes": "20:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/naturopathlucknow",
          "https://www.instagram.com/naturopathlucknow",
          "https://www.youtube.com/@naturopathlucknow"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Yoga Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Medical Yoga Therapy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Group Yoga Classes"
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "name": "Dr. Nand Lal Yadav",
        "jobTitle": "Yoga Therapist & Naturopathic Doctor",
        "description": "Experienced yoga therapist with 28 years of practice, BYN, PGDNYS, UGC NET qualified, treated over 100,000 patients in Lucknow.",
        "image": "https://naturopathlucknow.in/images/team/dr-nand-lal-yadav.jpg",
        "url": "https://naturopathlucknow.in/yoga-therapist/nand-lal-yadav",
        "worksFor": {
          "@type": "Organization",
          "name": "Natural Treatment Hospital Lucknow"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Bachelor of Yoga and Naturopathy"
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "BYN - Bachelor of Yoga and Naturopathy"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certificate",
            "name": "PGDNYS - Post Graduate Diploma in Yoga and Naturopathy"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certificate",
            "name": "UGC NET Qualified for Assistant Professor, Yoga"
          }
        ],
        "knowsAbout": ["Medical Yoga", "Yoga Therapy", "Naturopathy", "Meditation", "Pranayama", "Lifestyle Disease Management"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the yoga class timings in Lucknow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer morning batches at 6:00 AM and 7:30 AM, and evening batches at 5:30 PM and 7:00 PM, six days a week (Monday to Saturday) at our Lucknow center."
            }
          },
          {
            "@type": "Question",
            "name": "How much do yoga classes cost in Lucknow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Monthly fees start from ₹2,000 for group classes. Individual medical yoga therapy sessions are ₹1,500 per session. We offer a free trial class. Call 8115400106 for details."
            }
          },
          {
            "@type": "Question",
            "name": "Does Dr. Nand Lal Yadav treat diabetes with yoga?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Dr. Nand Lal Yadav specializes in medical yoga for diabetes management. With 28 years of experience treating over 100,000 patients, he uses specific asanas and pranayama techniques to help regulate blood sugar naturally."
            }
          },
          {
            "@type": "Question",
            "name": "Are home visits available for yoga classes in Lucknow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Dr. Nand Lal Yadav offers personalized home visit yoga sessions across Lucknow including Gomti Nagar, Aliganj, Hazratganj, and Indira Nagar. Contact 8115400106 to schedule."
            }
          }
        ]
      },
      {
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
            "name": "Yoga Classes in Lucknow",
            "item": "https://naturopathlucknow.in/yoga-meditation-lucknow"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-lato">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-900 text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
               <Image
                  src="/images/hero/yoga.jpg"
                  alt="Dr. Nand Lal Yadav conducting yoga therapy session in Lucknow"
                  fill
                  className="object-cover opacity-50"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          </div>

          <div className="relative z-20 container mx-auto px-4 mt-16 md:mt-0">
            <div className="max-w-4xl">
               {/* Badge */}
               <div className="inline-block bg-nature-green text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6 animate-fade-in-up">
                 🏆 Lucknow&apos;s Most Experienced Yoga Therapist
               </div>

               {/* H1 */}
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
                 Medical Yoga Classes <br/>in Lucknow
                 <span className="block text-xl md:text-4xl mt-4 font-light text-stone-200">
                   28 Years Experience | 1 Lakh+ Lives Transformed
                 </span>
               </h1>

               {/* Sub-headline */}
               <p className="text-base md:text-xl text-stone-300 mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
                 Treat Diabetes, Hypertension, Back Pain & Stress Naturally. <br/>
                 Led by Dr. Nand Lal Yadav (BYN, PGDNYS, UGC NET Qualified).
               </p>

               {/* CTAs */}
               <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-300">
                 <a href="tel:8115400106" className="bg-nature-green hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2 shadow-lg hover:scale-105 transform duration-200">
                   <Phone className="w-5 h-5" /> Call Now: 8115400106
                 </a>
                 <a href="tel:8115400106" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center gap-2 hover:scale-105 transform duration-200">
                   🎁 Book FREE Trial Class
                 </a>
               </div>

               {/* Trust Indicators */}
               <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base font-medium text-stone-300 animate-fade-in-up animation-delay-400">
                  <div className="flex items-center gap-2">
                     <Star className="w-5 h-5 text-yellow-400 fill-current" /> 4.9/5 Rating
                  </div>
                  <div className="flex items-center gap-2">
                     <Users className="w-5 h-5 text-nature-light-green" /> 1,00,000+ Patients
                  </div>
                  <div className="flex items-center gap-2">
                     <Calendar className="w-5 h-5 text-nature-light-green" /> 28 Years Exp.
                  </div>
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="w-5 h-5 text-nature-light-green" /> Medical Yoga Specialist
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* IMMEDIATE TRUST SECTION */}
        <ImmediateTrustSection />

        {/* ABOUT DR. YADAV SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Text Content (60%) */}
                <div className="lg:w-3/5 order-2 lg:order-1">
                   <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-6">
                     Meet Dr. Nand Lal Yadav - Lucknow&apos;s Pioneer in Medical Yoga Therapy
                   </h2>
                   <div className="prose prose-lg text-stone-600 mb-8">
                      <p>
                        Since 1997, Dr. Nand Lal Yadav has been transforming lives across Lucknow through the ancient science of Medical Yoga. With over 28 years of dedicated practice and having successfully treated more than 1,00,000 patients, Dr. Yadav is not just a yoga instructor—he is a certified Naturopathic Doctor and UGC NET qualified Professor of Yoga.
                      </p>
                      <p>
                        Unlike generic yoga classes, Dr. Yadav specializes in therapeutic yoga designed specifically for chronic lifestyle diseases prevalent in Lucknow&apos;s modern lifestyle—diabetes, hypertension, thyroid disorders, obesity, and spinal problems.
                      </p>
                   </div>

                   {/* Credentials Box */}
                   <div className="bg-stone-50 border border-stone-200 p-6 rounded-xl mb-8 shadow-sm">
                      <ul className="grid md:grid-cols-2 gap-3 text-stone-700 font-medium">
                         <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nature-green mt-0.5 shrink-0"/> BYN - Bachelor of Yoga and Naturopathy</li>
                         <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nature-green mt-0.5 shrink-0"/> PGDNYS - PG Diploma in Yoga Science</li>
                         <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nature-green mt-0.5 shrink-0"/> UGC NET Qualified (Asst. Professor)</li>
                         <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nature-green mt-0.5 shrink-0"/> 28 Years Clinical Experience</li>
                         <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nature-green mt-0.5 shrink-0"/> 1 Lakh+ Patients Treated</li>
                         <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-nature-green mt-0.5 shrink-0"/> Medical Yoga Specialist</li>
                      </ul>
                   </div>

                   {/* Quote Box */}
                   <blockquote className="border-l-4 border-nature-green pl-6 py-2 italic text-xl text-stone-600">
                     &quot;True healing doesn&apos;t come from medicines alone. I&apos;ve witnessed thousands of Lucknow residents reverse their diabetes and eliminate chronic pain through dedicated medical yoga. Your body has the power to heal—I just guide it.&quot;
                     <footer className="mt-2 font-bold not-italic text-stone-800">— Dr. Nand Lal Yadav</footer>
                   </blockquote>
                </div>

                {/* Image (40%) */}
                <Link href="/yoga-therapist/nand-lal-yadav" className="lg:w-2/5 relative block group cursor-pointer order-1 lg:order-2 transform transition hover:scale-[1.02] duration-300">
                   <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                      <Image
                         src="/images/team/dr-nand-lal-yadav.jpg"
                         alt="Dr. Nand Lal Yadav - Experienced Yoga Therapist"
                         fill
                         className="object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                   </div>
                   {/* Floating Badge */}
                   <div className="absolute -bottom-6 -left-6 bg-nature-green text-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block group-hover:bg-nature-dark transition-colors">
                      <p className="text-3xl font-bold mb-1">28+</p>
                      <p className="text-sm font-medium opacity-90">Years of Experience Healing Patients</p>
                   </div>
                   <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg font-bold text-nature-green text-sm flex items-center gap-2 md:hidden">
                        View Profile <Award className="w-4 h-4" />
                   </div>
                </Link>
             </div>
          </div>
        </section>

        {/* COMPETITIVE ADVANTAGE */}
        <section className="py-16 bg-stone-50">
           <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-stone-800 mb-12">
                 Why Choose Dr. Nand Lal Yadav&apos;s Medical Yoga?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                 {/* Card 1 */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-nature-green/10 rounded-full flex items-center justify-center text-nature-green mb-6">
                       <Activity className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-3">Medical Yoga, Not Fitness</h3>
                    <p className="text-stone-600 mb-4">
                      While others focus on flexibility, we specialize in Therapy. Each session is designed to treat conditions like diabetes, BP, arthritis, and PCOD.
                    </p>
                    <p className="text-sm font-bold text-stone-700 border-t border-stone-100 pt-3">
                      Conditions: Diabetes, Thyroid, Back Pain, Obesity
                    </p>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-nature-green/10 rounded-full flex items-center justify-center text-nature-green mb-6">
                       <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-3">28 Years + 1 Lakh Patients</h3>
                    <p className="text-stone-600 mb-4">
                      Dr. Yadav isn&apos;t a weekend-certified instructor. He brings nearly three decades of clinical expertise and university-level knowledge (UGC NET).
                    </p>
                    <p className="text-sm font-bold text-stone-700 border-t border-stone-100 pt-3">
                      Since 1997 | UGC NET Qualified
                    </p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-nature-green/10 rounded-full flex items-center justify-center text-nature-green mb-6">
                       <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mb-3">Customized for YOUR Body</h3>
                    <p className="text-stone-600 mb-4">
                      No generic routines. We conduct initial health assessments and design personalized sequences based on your medical history and goals.
                    </p>
                    <p className="text-sm font-bold text-stone-700 border-t border-stone-100 pt-3">
                      Includes: Consultation, Diet Guidance
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* SERVICES OVERVIEW (TABS) */}
        <section className="py-16 md:py-24 bg-white">
           <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-stone-800 mb-12">
                 Our Yoga & Meditation Services in Lucknow
              </h2>
              <ServicesTabs />
           </div>
        </section>

        {/* YOGA FOR CONDITIONS (ACCORDION) */}
        <section className="py-16 bg-stone-50">
           <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-stone-800 mb-6">
                 Medical Yoga for Common Health Problems
              </h2>
              <p className="text-center text-stone-600 max-w-2xl mx-auto mb-12">
                 Lucknow&apos;s lifestyle has led to a surge in chronic diseases. Dr. Nand Lal Yadav specializes in treating these naturally through Medical Yoga Therapy.
              </p>
              <ConditionsAccordion />
           </div>
        </section>

        {/* SCHEDULE & PRICING */}
        <section className="py-16 md:py-24 bg-white">
           <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-stone-800 mb-12">
                 Yoga Class Schedule & Fees in Lucknow
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                 {/* Schedule */}
                 <div>
                    <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                       <Calendar className="w-6 h-6 text-nature-green" /> WEEKLY SCHEDULE
                    </h3>
                    <div className="space-y-6">
                       <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition">
                          <h4 className="font-bold text-stone-700 mb-4 border-b border-stone-200 pb-2">MORNING BATCHES</h4>
                          <div className="space-y-4">
                             <div className="flex justify-between items-center">
                                <div>
                                   <span className="block font-bold text-stone-800">6:00 - 7:00 AM</span>
                                   <span className="text-sm text-stone-500">Power Yoga</span>
                                </div>
                                <span className="bg-stone-200 text-stone-600 text-xs px-2 py-1 rounded">Advanced</span>
                             </div>
                             <div className="flex justify-between items-center">
                                <div>
                                   <span className="block font-bold text-stone-800">7:30 - 8:30 AM</span>
                                   <span className="text-sm text-stone-500">Hatha Yoga</span>
                                </div>
                                <span className="bg-nature-green text-white text-xs px-2 py-1 rounded">All Levels</span>
                             </div>
                          </div>
                       </div>

                       <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition">
                          <h4 className="font-bold text-stone-700 mb-4 border-b border-stone-200 pb-2">EVENING BATCHES</h4>
                          <div className="space-y-4">
                             <div className="flex justify-between items-center">
                                <div>
                                   <span className="block font-bold text-stone-800">5:30 - 6:30 PM</span>
                                   <span className="text-sm text-stone-500">Foundation</span>
                                </div>
                                <span className="bg-stone-200 text-stone-600 text-xs px-2 py-1 rounded">Beginners</span>
                             </div>
                             <div className="flex justify-between items-center">
                                <div>
                                   <span className="block font-bold text-stone-800">7:00 - 8:00 PM</span>
                                   <span className="text-sm text-stone-500">Stress Relief</span>
                                </div>
                                <span className="bg-stone-200 text-stone-600 text-xs px-2 py-1 rounded">All Levels</span>
                             </div>
                          </div>
                       </div>
                       <p className="text-xs text-center text-stone-500">Monday to Saturday | Sunday Closed</p>
                    </div>
                 </div>

                 {/* Pricing */}
                 <div>
                    <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                       <ShieldCheck className="w-6 h-6 text-nature-green" /> FEE STRUCTURE
                    </h3>
                    <div className="bg-gradient-to-br from-nature-green/5 to-nature-green/10 p-8 rounded-2xl border border-nature-green/10 h-full shadow-lg backdrop-blur-sm">
                       <ul className="space-y-6">
                          <li className="flex justify-between items-baseline border-b border-stone-200/50 pb-3">
                             <span className="font-medium text-stone-700">Monthly Group Class</span>
                             <span className="font-bold text-xl text-stone-800">₹2,000</span>
                          </li>
                          <li className="flex justify-between items-baseline border-b border-stone-200/50 pb-3">
                             <span className="font-medium text-stone-700">3-Month Package</span>
                             <div className="text-right">
                                <span className="font-bold text-xl text-stone-800">₹5,400</span>
                                <span className="block text-xs text-green-600 font-bold">Save ₹600</span>
                             </div>
                          </li>
                          <li className="flex justify-between items-baseline border-b border-stone-200/50 pb-3">
                             <span className="font-medium text-stone-700">Medical Yoga (Session)</span>
                             <span className="font-bold text-xl text-stone-800">₹1,500</span>
                          </li>
                          <li className="flex justify-between items-baseline border-b border-stone-200/50 pb-3">
                             <span className="font-medium text-stone-700">Home Visit (Session)</span>
                             <span className="font-bold text-xl text-stone-800">₹3,000+</span>
                          </li>
                          <li className="flex justify-between items-baseline pt-2">
                             <span className="font-bold text-nature-green">First Trial Class</span>
                             <span className="font-bold text-xl text-nature-green">FREE</span>
                          </li>
                       </ul>

                       <div className="mt-8 space-y-3">
                          <a href="tel:8115400106" className="block w-full bg-nature-green text-white text-center py-4 rounded-full font-bold hover:bg-green-700 transition shadow-lg transform hover:scale-[1.02] duration-200">
                             Enroll Now - Call 8115400106
                          </a>
                          <a href="https://wa.me/918115400106" className="block w-full border-2 border-nature-green text-nature-green text-center py-3 rounded-full font-bold hover:bg-green-50 transition">
                             WhatsApp for Quick Response
                          </a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* LOCATION & CONTACT */}
        <section className="py-16 bg-stone-900 text-white">
           <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
                 Visit Our Yoga Center in Lucknow
              </h2>
              <div className="grid md:grid-cols-2 gap-8 h-[500px] md:h-[450px]">
                 {/* Map Placeholder */}
                 <div className="bg-stone-800 rounded-2xl overflow-hidden relative shadow-2xl">
                    <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877372338604!2d81.0121!3d26.8436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzM3LjAiTiA4McKwMDAnNDMuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                       width="100%"
                       height="100%"
                       style={{ border: 0 }}
                       allowFullScreen={true}
                       loading="lazy"
                       className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500"
                    ></iframe>
                 </div>

                 {/* Contact Info */}
                 <div className="flex flex-col justify-center p-8 bg-stone-800 rounded-2xl shadow-xl">
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                          <MapPin className="w-6 h-6 text-nature-light-green shrink-0 mt-1" />
                          <div>
                             <h4 className="font-bold text-lg mb-1">Our Address:</h4>
                             <p className="text-stone-300">Natural Treatment Hospital<br/>CP-143, Viraj Khand, Gomti Nagar<br/>Lucknow, Uttar Pradesh 226010</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <Phone className="w-6 h-6 text-nature-light-green shrink-0 mt-1" />
                          <div>
                             <h4 className="font-bold text-lg mb-1">Contact:</h4>
                             <p className="text-stone-300">+91-8115400106</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4">
                          <Clock className="w-6 h-6 text-nature-light-green shrink-0 mt-1" />
                          <div>
                             <h4 className="font-bold text-lg mb-1">Opening Hours:</h4>
                             <p className="text-stone-300">Mon-Sat: 6:00 AM - 8:30 PM<br/>Sunday: Closed (Home Visits Only)</p>
                          </div>
                       </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-stone-700">
                       <p className="text-sm text-stone-400 mb-2 font-bold uppercase tracking-wider">Serving Areas:</p>
                       <p className="text-xs text-stone-500 leading-relaxed">
                         Gomti Nagar | Aliganj | Hazratganj | Indira Nagar | Mahanagar | Jankipuram | Cantonment | Ashiyana | Vikas Nagar | Rajajipuram
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16 md:py-24 bg-white">
           <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-stone-800 mb-4">
                 What Our 1 Lakh+ Patients Say
              </h2>
               <div className="flex justify-center items-center gap-2 mb-12">
                  <div className="flex text-yellow-400">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <span className="font-bold text-stone-600">4.9/5 Rating</span>
               </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {/* Testimonial 1 */}
                 <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative hover:shadow-lg transition duration-300">
                    <div className="flex text-yellow-400 mb-4">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-stone-600 mb-6 italic">
                      &quot;My diabetes was out of control for 5 years. Dr. Yadav&apos;s medical yoga brought my sugar from 220 to 110 in just 4 months. I&apos;ve reduced my medication by half.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden">
                         <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" width={100} height={100} alt="Rajesh Kumar" />
                       </div>
                       <div>
                          <h4 className="font-bold text-stone-800">Rajesh Kumar</h4>
                          <p className="text-xs text-stone-500">Gomti Nagar | Diabetes</p>
                       </div>
                    </div>
                 </div>

                 {/* Testimonial 2 */}
                 <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative hover:shadow-lg transition duration-300">
                    <div className="flex text-yellow-400 mb-4">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-stone-600 mb-6 italic">
                      &quot;I was suffering from chronic back pain for 3 years. Physiotherapy didn&apos;t help much. Dr. Yadav&apos;s therapeutic yoga gave me permanent relief in 8 weeks.&quot;
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden">
                          <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" width={100} height={100} alt="Amit Singh" />
                       </div>
                       <div>
                          <h4 className="font-bold text-stone-800">Amit Singh</h4>
                          <p className="text-xs text-stone-500">Hazratganj | Back Pain</p>
                       </div>
                    </div>
                 </div>

                 {/* Testimonial 3 */}
                 <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative hover:shadow-lg transition duration-300">
                    <div className="flex text-yellow-400 mb-4">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-stone-600 mb-6 italic">
                      &quot;PCOD ruined my life—irregular periods, weight gain. After 6 months of yoga therapy with Dr. Yadav, my cycles are regular and I lost 9 kg!&quot;
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden">
                          <Image src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" width={100} height={100} alt="Kavita Agarwal" />
                       </div>
                       <div>
                          <h4 className="font-bold text-stone-800">Kavita Agarwal</h4>
                          <p className="text-xs text-stone-500">Jankipuram | PCOD</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="mt-12 text-center">
                 <a href="tel:8115400106" className="inline-block border-2 border-stone-800 text-stone-800 px-8 py-3 rounded-full font-bold hover:bg-stone-800 hover:text-white transition transform hover:scale-105 duration-200">
                    Book Your First Session
                 </a>
              </div>
           </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-stone-50">
           <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-stone-800 mb-12">
                 Frequently Asked Questions
              </h2>
              <FAQAccordion />
           </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="py-16 md:py-24 bg-white">
           <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-stone-800 mb-12">
                 Yoga & Health Tips
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   {
                     title: "10 Best Yoga Asanas for Diabetes Control",
                     excerpt: "Learn which specific yoga poses help regulate blood sugar naturally...",
                     image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   },
                   {
                     title: "Breathing Exercise to Lower BP Instantly",
                     excerpt: "Dr. Yadav shares a powerful pranayama technique you can do anywhere...",
                     image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   },
                   {
                     title: "Complete Guide to Weight Loss with Yoga",
                     excerpt: "How to lose 10 kg in 3 months with yoga while enjoying Lucknow's food...",
                     image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                   }
                 ].map((post, i) => (
                   <div key={i} className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md">
                         <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                      </div>
                      <h3 className="font-bold text-xl text-stone-800 mb-2 group-hover:text-nature-green transition">{post.title}</h3>
                      <p className="text-stone-600 text-sm mb-3">{post.excerpt}</p>
                      <span className="text-nature-green font-bold text-sm group-hover:underline">Read Article →</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-nature-green text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-stone-900/10"></div>
          <div className="relative container mx-auto px-4 z-10">
             <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Ready to Transform Your Health?</h2>
             <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
               Join 1,00,000+ Lucknow residents who chose natural healing. Start your yoga journey with Dr. Nand Lal Yadav today.
             </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
               <a href="tel:8115400106" className="bg-white text-nature-green px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition shadow-lg text-lg flex items-center justify-center gap-2 transform hover:scale-105 duration-200">
                 <Phone className="w-5 h-5" /> Call Now: 8115400106
               </a>
               <a href="tel:8115400106" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition text-lg transform hover:scale-105 duration-200">
                 Book FREE Trial Class
               </a>
             </div>

             <div className="flex flex-wrap justify-center gap-6 text-sm font-medium opacity-80">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4"/> No Credit Card Required</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4"/> 100% Free Trial</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4"/> Instant Confirmation</span>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
