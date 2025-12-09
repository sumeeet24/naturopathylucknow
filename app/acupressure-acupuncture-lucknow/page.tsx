import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { THERAPISTS } from '@/lib/therapists';
import { PHONE, ADDRESS, SEO_AREAS } from '@/lib/constants';
import {
  Activity,
  Brain,
  Moon,
  Utensils,
  HeartPulse,
  Leaf,
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { FAQAccordion, Timeline } from './components';

export const metadata: Metadata = {
  title: 'Acupressure & Acupuncture in Lucknow – Certified Therapy & Treatments',
  description: 'Certified acupressure & acupuncture treatments in Lucknow for pain relief, stress management, sleep, digestion and holistic wellness. Book now.',
  alternates: {
    canonical: 'https://naturopathlucknow.in/acupressure-acupuncture-lucknow',
  },
  openGraph: {
    title: 'Acupressure & Acupuncture in Lucknow | Natural Treatment Hospital',
    description: 'Certified acupressure & acupuncture treatments in Lucknow for pain relief, stress management, sleep, digestion and holistic wellness. Book now.',
    url: 'https://naturopathlucknow.in/acupressure-acupuncture-lucknow',
    type: 'website',
  }
};

export default function AcupressurePage() {
  const therapist = THERAPISTS.find(t => t.slug === 'kawaljeet-singh') || THERAPISTS[0];

  const faqData = [
    { question: "Is acupressure safe?", answer: "Yes, acupressure is a non-invasive and highly safe therapy. It involves applying manual pressure to specific points on the body. Unlike medication or surgery, it has no major side effects." },
    { question: "How many sessions are needed?", answer: "The number of sessions depends on the severity and duration of the condition. Acute pain may resolve in 3-5 sessions, while chronic issues like old arthritis or frozen shoulder might require 10-15 sessions for lasting relief." },
    { question: "Can I do acupressure at home?", answer: "Yes, basic self-care acupressure is encouraged. We teach patients simple points for headaches or stress relief. However, deep therapeutic work for serious conditions should be done by a certified professional to ensure accuracy and safety." },
    { question: "Acupressure vs Acupuncture — which is better?", answer: "Both are effective. Acupressure is great for general wellness, stress, and mild pain. Acupuncture is often more potent for deep-seated chronic pain, nerve issues, and severe inflammation. Our therapist will recommend the best approach for you." },
    { question: "Does it really help back pain?", answer: "Yes, acupressure is one of the most effective non-drug treatments for back pain. It releases muscle tension, improves blood flow to the spine, and triggers the release of endorphins (natural painkillers)." },
    { question: "Are there any age limitations?", answer: "No, acupressure can be performed on anyone from infants to the elderly. The pressure intensity is adjusted according to the patient's age and frailty." },
    { question: "What is the cost of a session?", answer: "Our sessions are very affordable compared to other medical treatments. Please contact the clinic directly at " + PHONE + " for the current pricing packages." },
    { question: "What to expect after the first session?", answer: "Most patients feel an immediate sense of relaxation and reduced pain. Some may feel a 'good soreness' similar to after a workout, which fades in a day, leaving you feeling lighter and more mobile." },
    { question: "How long are the sessions?", answer: "A typical session lasts between 30 to 45 minutes, depending on the complexity of the treatment required." },
    { question: "Is acupuncture painful?", answer: "Acupuncture needles are hair-thin. Most people feel only a tiny prick or nothing at all. Once the needle is in, you might feel a dull ache or tingling, which indicates the energy (Qi) is moving." },
    { question: "Can it help with anxiety?", answer: "Absolutely. Acupressure points like Yin Tang (Third Eye) and H7 (Spirit Gate) are powerful for calming the mind, reducing heart palpitations, and alleviating anxiety." },
    { question: "Is it safe during pregnancy?", answer: "Acupressure can be beneficial for morning sickness and back pain during pregnancy, but CERTAIN points must be avoided as they can induce labor. Always inform your therapist if you are pregnant." }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Natural Treatment Hospital",
        "image": "https://naturaltreatmenthospital.com/images/logo.png",
        "url": "https://naturaltreatmenthospital.com",
        "telephone": PHONE,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": ADDRESS,
          "addressLocality": "Lucknow",
          "addressRegion": "UP",
          "postalCode": "226010",
          "addressCountry": "IN"
        },
        "department": [
          {
            "@type": "MedicalSpecialty",
            "name": "Acupressure & Acupuncture Department",
            "description": "Specialized pain relief through traditional Chinese medicine and reflexology."
          }
        ]
      },
      {
        "@type": "Person",
        "name": therapist.name,
        "url": `https://naturaltreatmenthospital.com/acupressure-therapist/${therapist.slug}`,
        "jobTitle": "Certified Acupressure Therapist",
        "image": therapist.image
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      },
      {
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
            "name": "Acupressure in Lucknow",
            "item": "https://naturopathlucknow.in/acupressure-acupuncture-lucknow"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-sand text-stone-800 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Optimized for Mobile First */}
      <section className="relative min-h-[80vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-nature-dark text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-nature-dark/90 z-10"></div>
        <div className="absolute inset-0 z-0">
             <Image
                src="/images/hero/acupressure.jpg"
                alt="Acupressure and Acupuncture Treatment in Lucknow"
                fill
                className="object-cover"
                priority
             />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center mt-12 md:mt-0">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold tracking-wider mb-4 border border-white/30 animate-fade-in">
             NATURAL HEALING IN LUCKNOW
          </span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight animate-fade-in-up">
            <span className="block mb-2">Acupressure &</span>
            <span className="block text-nature-light">Acupuncture Therapy</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-light text-stone-100 leading-relaxed animate-fade-in-up delay-100">
            Reclaim your life from pain and stress. Experience certified, non-invasive healing that treats the root cause, not just the symptoms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
             <a href={`tel:${PHONE}`} className="bg-nature-green text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition shadow-lg text-lg flex items-center justify-center gap-2">
               <Phone className="w-5 h-5" />
               Call for Appointment
             </a>
             <Link href="#book" className="bg-white text-nature-dark px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition text-lg flex items-center justify-center gap-2">
               Book Online
             </Link>
          </div>
        </div>
      </section>

      {/* Therapist Profile Section - Redesigned Card */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-stone-50 rounded-3xl p-6 md:p-12 shadow-xl border border-stone-200 flex flex-col md:flex-row items-center gap-8 md:gap-12 transform md:-translate-y-12 md:mb-[-3rem] z-30 relative">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-nature-light">
                 <Image
                    src={therapist.image}
                    alt={`${therapist.name} - Acupressure Therapist Lucknow`}
                    fill
                    className="object-cover"
                 />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <span className="text-nature-green font-bold tracking-widest text-sm uppercase mb-2 block">Head Therapist</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-2">
                {therapist.name}
              </h2>
              <p className="text-lg text-nature-dark mb-4 font-medium italic">
                {therapist.specialty}
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {therapist.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-stone-700">
                {therapist.qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-center gap-2 justify-center md:justify-start bg-white px-3 py-2 rounded-lg border border-stone-100 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-nature-green flex-shrink-0" />
                        <span className="text-sm font-semibold">{qual}</span>
                    </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                 <Link href={`/acupressure-therapist/${therapist.slug}`} className="bg-nature-dark text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition shadow-md">
                   View Full Profile
                 </Link>
                 <a href={`https://wa.me/${therapist.contactNumber.replace(/[^0-9]/g, '')}`} className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition flex items-center justify-center gap-2 shadow-md">
                   Chat on WhatsApp
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-24 mt-4 md:mt-0">
        <div className="container mx-auto px-4 max-w-3xl text-center md:text-left">
           <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-6 text-center">
                  Holistic Pain Relief & Healing
                </h2>
                <div className="prose prose-lg text-stone-600 mx-auto leading-relaxed text-justify md:text-left">
                  <p className="mb-4">
                    In the vibrant city of <strong>Lucknow</strong>, finding effective relief from chronic pain and stress can be a challenge. Whether it is the long hours spent in traffic, the sedentary nature of desk jobs in Gomti Nagar, or the general hustle of city life, our bodies often pay the price.
                  </p>
                  <p className="mb-4">
                    At <strong>Natural Treatment Hospital</strong>, we offer a sanctuary of healing. We specialize in <strong>Acupressure</strong> and <strong>Acupuncture</strong>, time-honored therapies that treat the root cause of your ailments, not just the symptoms. Unlike conventional medicine that relies heavily on painkillers, our approach is 100% natural and drug-free.
                  </p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* What is Acupressure & Acupuncture - Split Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* Acupressure */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 h-full">
              <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center mb-6 text-nature-green">
                 <Leaf className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-stone-800 mb-4">
                What is Acupressure?
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-4">
                <p>
                  <strong>Acupressure</strong> is an ancient healing art that originated in Traditional Chinese Medicine (TCM). It uses physical pressure on specific points (acupoints) along the body&apos;s energy meridians to clear blockages and restore the flow of <strong>Qi</strong> (life energy).
                </p>
                <p>
                  Modern science views it as a way to release muscle tension, improve circulation, and trigger the release of endorphins—the body&apos;s natural painkillers. It is gentle, non-invasive, and effective.
                </p>
              </div>
            </div>

            {/* Acupuncture */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 h-full">
              <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center mb-6 text-nature-green">
                 <Activity className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-stone-800 mb-4">
                What is Acupuncture?
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-4">
                <p>
                  <strong>Acupuncture</strong> involves the insertion of hair-thin, sterile needles at strategic points. Unlike injections, these needles are so fine that most people feel little to no pain.
                </p>
                <p>
                  It is often preferred for deeper, chronic conditions as it can stimulate the nervous system more potently than pressure alone. We use strictly single-use, sterile needles to ensure 100% safety and hygiene.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Conditions Treated - Enhanced with Icons */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="text-center mb-16">
             <span className="text-nature-green font-bold tracking-widest text-sm uppercase">Our Expertise</span>
             <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mt-2">
               Conditions Commonly Treated
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

             {/* Pain */}
             <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition group">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-earth-brown shadow-sm group-hover:bg-nature-green group-hover:text-white transition-colors">
                 <Activity className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-stone-800 mb-3">Chronic Pain</h3>
               <p className="text-stone-600 text-sm mb-3">
                 Sciatica, Cervical Spondylitis, Frozen Shoulder, and Arthritis. We target deep trigger points to release tension.
               </p>
               <span className="text-xs font-bold text-nature-green bg-nature-light px-2 py-1 rounded inline-block">Best for: Back & Neck Pain</span>
             </div>

             {/* Headache */}
             <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition group">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-earth-brown shadow-sm group-hover:bg-nature-green group-hover:text-white transition-colors">
                 <Brain className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-stone-800 mb-3">Migraine & Headaches</h3>
               <p className="text-stone-600 text-sm mb-3">
                 Relief from throbbing pain, nausea, and tension headaches by improving blood flow to the head.
               </p>
               <span className="text-xs font-bold text-nature-green bg-nature-light px-2 py-1 rounded inline-block">Best for: Recurring Migraines</span>
             </div>

             {/* Sleep */}
             <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition group">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-earth-brown shadow-sm group-hover:bg-nature-green group-hover:text-white transition-colors">
                 <Moon className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-stone-800 mb-3">Insomnia & Sleep</h3>
               <p className="text-stone-600 text-sm mb-3">
                 Reset your biological clock and calm the mind to achieve deep, restorative sleep naturally.
               </p>
               <span className="text-xs font-bold text-nature-green bg-nature-light px-2 py-1 rounded inline-block">Best for: Restless Sleep</span>
             </div>

             {/* Digestive */}
             <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition group">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-earth-brown shadow-sm group-hover:bg-nature-green group-hover:text-white transition-colors">
                 <Utensils className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-stone-800 mb-3">Digestive Health</h3>
               <p className="text-stone-600 text-sm mb-3">
                 Treat IBS, acidity, constipation, and bloating by regulating stomach function and gut motility.
               </p>
               <span className="text-xs font-bold text-nature-green bg-nature-light px-2 py-1 rounded inline-block">Best for: Gut Issues</span>
             </div>

             {/* Anxiety */}
             <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition group">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-earth-brown shadow-sm group-hover:bg-nature-green group-hover:text-white transition-colors">
                 <HeartPulse className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-stone-800 mb-3">Anxiety & Stress</h3>
               <p className="text-stone-600 text-sm mb-3">
                 Powerful emotional regulation. Reduces palpitations and calms the &quot;fight or flight&quot; response.
               </p>
               <span className="text-xs font-bold text-nature-green bg-nature-light px-2 py-1 rounded inline-block">Best for: Mental Peace</span>
             </div>

             {/* Lifestyle */}
             <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg transition group">
               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-earth-brown shadow-sm group-hover:bg-nature-green group-hover:text-white transition-colors">
                 <Leaf className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-stone-800 mb-3">Lifestyle Diseases</h3>
               <p className="text-stone-600 text-sm mb-3">
                 Supportive therapy for Hypertension and Diabetes management, improving overall organ function.
               </p>
               <span className="text-xs font-bold text-nature-green bg-nature-light px-2 py-1 rounded inline-block">Best for: Long-term Health</span>
             </div>

           </div>
        </div>
      </section>

      {/* Internal Link Banner */}
      <section className="py-12 bg-nature-dark text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-2xl font-playfair mb-4">Looking for holistic fitness?</h2>
            <Link href="/yoga-meditation-lucknow" className="inline-block bg-white text-nature-dark px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition shadow-lg">
               Explore Yoga & Meditation Classes
            </Link>
         </div>
      </section>

      {/* Tables & Timeline Section */}
      <section className="py-16 md:py-24 bg-nature-light/30">
         <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
               Therapy Comparison & Timeline
            </h2>

            {/* Comparison Table */}
            <div className="mb-16 overflow-hidden bg-white rounded-2xl shadow-sm border border-stone-200">
               <div className="p-6 bg-nature-green text-white">
                 <h3 className="text-xl font-bold">Quick Comparison</h3>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead className="bg-stone-50 text-stone-700 text-sm uppercase tracking-wide">
                       <tr>
                          <th className="p-4 font-bold border-b">Feature</th>
                          <th className="p-4 font-bold border-b text-nature-dark">Acupressure</th>
                          <th className="p-4 font-bold border-b text-nature-dark">Acupuncture</th>
                          <th className="p-4 font-bold border-b text-stone-500">Physiotherapy</th>
                       </tr>
                    </thead>
                    <tbody className="text-stone-700 text-sm md:text-base">
                       <tr className="border-b hover:bg-stone-50">
                          <td className="p-4 font-bold text-stone-900">Method</td>
                          <td className="p-4">Finger Pressure</td>
                          <td className="p-4">Thin Needles</td>
                          <td className="p-4">Exercise/Machines</td>
                       </tr>
                       <tr className="border-b hover:bg-stone-50">
                          <td className="p-4 font-bold text-stone-900">Best For</td>
                          <td className="p-4">Stress, Mild Pain</td>
                          <td className="p-4">Chronic Pain, Nerves</td>
                          <td className="p-4">Rehabilitation</td>
                       </tr>
                       <tr className="border-b hover:bg-stone-50">
                          <td className="p-4 font-bold text-stone-900">Sensation</td>
                          <td className="p-4">Firm Pressure</td>
                          <td className="p-4">Mild Tingling</td>
                          <td className="p-4">Muscle Exertion</td>
                       </tr>
                    </tbody>
                 </table>
               </div>
            </div>

            {/* Timeline Component */}
            <Timeline />

         </div>
      </section>

      {/* FAQ Section - Uses Client Component */}
      <section className="py-16 bg-stone-50">
         <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-4 text-center">
               Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-center mb-10 max-w-xl mx-auto">
              Everything you need to know about our treatments, safety, and booking process.
            </p>

            <FAQAccordion items={faqData} />

         </div>
      </section>

      {/* Final CTA & Contact - High Contrast */}
      <section id="book" className="py-20 bg-nature-green text-white text-center relative overflow-hidden">
         {/* Decorative Circles */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">Heal Naturally. Live Pain-Free.</h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 font-light">
               Book your consultation with Kawaljeet Singh at Natural Treatment Hospital today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <a href={`tel:${PHONE}`} className="bg-white text-nature-green px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition shadow-xl text-lg min-w-[200px] flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call {PHONE}
               </a>
               <Link href="/contact" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition text-lg min-w-[200px] flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Get Directions
               </Link>
            </div>
            <p className="mt-8 text-sm opacity-80 bg-black/20 inline-block px-4 py-1 rounded-full">
               Clinic Address: {ADDRESS}, Lucknow
            </p>
         </div>
      </section>

      {/* Areas Served */}
      <section className="py-8 bg-stone-100 text-stone-500 text-xs border-t border-stone-200">
         <div className="container mx-auto px-4 text-center">
            <p className="mb-2 font-bold uppercase tracking-wider text-stone-400">Serving Areas in Lucknow</p>
            <p className="leading-relaxed opacity-70">{SEO_AREAS.join(" | ")}</p>
         </div>
      </section>

    </main>
  );
}
