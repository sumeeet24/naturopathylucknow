import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { THERAPISTS } from '@/lib/therapists';
import { PHONE, ADDRESS, SEO_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Acupressure & Acupuncture in Lucknow – Certified Therapy & Treatments',
  description: 'Certified acupressure & acupuncture treatments in Lucknow for pain relief, stress management, sleep, digestion and holistic wellness. Book now.',
  alternates: {
    canonical: 'https://naturaltreatmenthospital.com/acupressure-in-lucknow',
  },
  openGraph: {
    title: 'Acupressure & Acupuncture in Lucknow | Natural Treatment Hospital',
    description: 'Certified acupressure & acupuncture treatments in Lucknow for pain relief, stress management, sleep, digestion and holistic wellness. Book now.',
    url: 'https://naturaltreatmenthospital.com/acupressure-in-lucknow',
    type: 'website',
  }
};

export default function AcupressurePage() {
  const therapist = THERAPISTS.find(t => t.slug === 'kawaljeet-singh') || THERAPISTS[0];

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
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is acupressure safe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, acupressure is a non-invasive and highly safe therapy. It involves applying manual pressure to specific points on the body. Unlike medication or surgery, it has no major side effects."
            }
          },
          {
            "@type": "Question",
            "name": "How many sessions are needed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The number of sessions depends on the severity and duration of the condition. Acute pain may resolve in 3-5 sessions, while chronic issues like old arthritis or frozen shoulder might require 10-15 sessions for lasting relief."
            }
          },
          {
             "@type": "Question",
             "name": "Can I do acupressure at home?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes, basic self-care acupressure is encouraged. We teach patients simple points for headaches or stress relief. However, deep therapeutic work for serious conditions should be done by a certified professional to ensure accuracy and safety."
             }
          },
          {
            "@type": "Question",
            "name": "Acupressure vs Acupuncture — which is better?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both are effective. Acupressure is great for general wellness, stress, and mild pain. Acupuncture is often more potent for deep-seated chronic pain, nerve issues, and severe inflammation. Our therapist will recommend the best approach for you."
            }
          },
          {
             "@type": "Question",
             "name": "Does it really help back pain?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes, acupressure is one of the most effective non-drug treatments for back pain. It releases muscle tension, improves blood flow to the spine, and triggers the release of endorphins (natural painkillers)."
             }
          },
          {
             "@type": "Question",
             "name": "Are there any age limitations?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "No, acupressure can be performed on anyone from infants to the elderly. The pressure intensity is adjusted according to the patient's age and frailty."
             }
          },
          {
             "@type": "Question",
             "name": "What is the cost of a session?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Our sessions are very affordable compared to other medical treatments. Please contact the clinic directly at " + PHONE + " for the current pricing packages."
             }
          },
          {
             "@type": "Question",
             "name": "What to expect after the first session?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Most patients feel an immediate sense of relaxation and reduced pain. Some may feel a 'good soreness' similar to after a workout, which fades in a day, leaving you feeling lighter and more mobile."
             }
          },
          {
             "@type": "Question",
             "name": "How long are the sessions?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "A typical session lasts between 30 to 45 minutes, depending on the complexity of the treatment required."
             }
          },
          {
             "@type": "Question",
             "name": "Is acupuncture painful?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Acupuncture needles are hair-thin. Most people feel only a tiny prick or nothing at all. Once the needle is in, you might feel a dull ache or tingling, which indicates the energy (Qi) is moving."
             }
          },
          {
             "@type": "Question",
             "name": "Can it help with anxiety?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Absolutely. Acupressure points like Yin Tang (Third Eye) and H7 (Spirit Gate) are powerful for calming the mind, reducing heart palpitations, and alleviating anxiety."
             }
          },
          {
             "@type": "Question",
             "name": "Is it safe during pregnancy?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Acupressure can be beneficial for morning sickness and back pain during pregnancy, but CERTAIN points must be avoided as they can induce labor. Always inform your therapist if you are pregnant."
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
            "item": "https://naturaltreatmenthospital.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Acupressure in Lucknow",
            "item": "https://naturaltreatmenthospital.com/acupressure-in-lucknow"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-stone-50 text-stone-800 font-lato">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-nature-brown text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 z-0">
             <Image
                src="/images/hero/acupressure.jpg"
                alt="Acupressure and Acupuncture Treatment in Lucknow"
                fill
                className="object-cover"
                priority
             />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
            <span className="block mb-2">Acupressure & Acupuncture</span>
            <span className="block text-nature-light">in Lucknow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-stone-100">
            Certified therapy for pain relief, stress management, and holistic wellness. Experience ancient healing without medicines or surgery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href={`tel:${PHONE}`} className="bg-nature-green text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition shadow-lg text-lg">
               Call Now
             </a>
             <Link href="#book" className="bg-white text-nature-brown px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition text-lg">
               Book a Session
             </Link>
          </div>
        </div>
      </section>

      {/* Therapist Profile Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-stone-50 rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                 <Image
                    src={therapist.image}
                    alt={`${therapist.name} - Acupressure Therapist Lucknow`}
                    fill
                    className="object-cover"
                 />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-playfair font-bold text-nature-brown mb-2">
                Meet Our Specialist
              </h2>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{therapist.name}</h3>
              <p className="text-lg text-stone-600 mb-6 font-medium">
                {therapist.specialty}
              </p>
              <p className="text-stone-700 mb-6 leading-relaxed">
                {therapist.bio}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-stone-700">
                {therapist.qualifications.map((qual, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-nature-green rounded-full"></span>
                        {qual}
                    </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 <Link href={`/acupressure-therapist/${therapist.slug}`} className="bg-nature-brown text-white px-6 py-3 rounded-full font-bold hover:bg-stone-700 transition">
                   View Full Profile
                 </Link>
                 <a href={`https://wa.me/${therapist.contactNumber.replace(/[^0-9]/g, '')}`} className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition flex items-center gap-2">
                   Chat on WhatsApp
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8 text-center">
             Holistic Pain Relief & Healing in Lucknow
           </h2>
           <div className="prose prose-lg text-stone-700 mx-auto leading-relaxed">
             <p className="mb-6">
               In the vibrant city of <strong>Lucknow</strong>, finding effective relief from chronic pain and stress can be a challenge. Whether it is the long hours spent in traffic, the sedentary nature of desk jobs in Gomti Nagar, or the general hustle of city life, our bodies often pay the price. Back pain, migraines, and fatigue have become all too common.
             </p>
             <p className="mb-6">
               At <strong>Natural Treatment Hospital</strong>, we offer a sanctuary of healing. We specialize in <strong>Acupressure</strong> and <strong>Acupuncture</strong>, time-honored therapies that treat the root cause of your ailments, not just the symptoms. Unlike conventional medicine that relies heavily on painkillers with potential side effects, our approach is 100% natural, drug-free, and holistic.
             </p>
             <p className="mb-6">
               Our certified therapists understand the unique health challenges faced by the people of Lucknow. We combine ancient wisdom with modern anatomical understanding to restore balance to your body. Whether you are seeking relief from a frozen shoulder, looking to manage stress, or simply want to boost your overall vitality, our acupressure and acupuncture treatments offer a safe and effective solution right here in your city.
             </p>
           </div>
        </div>
      </section>

      {/* What is Acupressure */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8">
            What is Acupressure?
          </h2>
          <div className="prose prose-lg text-stone-700">
            <p className="mb-6">
              <strong>Acupressure</strong> is an ancient healing art that originated in Traditional Chinese Medicine (TCM) over 2,000 years ago. It is based on the same principles as acupuncture but uses physical pressure instead of needles. The underlying philosophy is that the body has invisible channels of energy flow called <strong>Meridians</strong>. This life force energy is known as <strong>Qi</strong> (pronounced &quot;chi&quot;).
            </p>
            <p className="mb-6">
              When the flow of Qi is blocked or imbalanced due to stress, injury, or poor lifestyle, illness and pain occur. Acupressure involves applying firm pressure with fingers, palms, or elbows to specific points (acupoints) along these meridians. This pressure clears the blockages, restores the free flow of energy, and promotes the body&apos;s natural self-curative abilities.
            </p>
            <p className="mb-6">
              While the concept of Qi is ancient, modern science views acupressure as a way to release muscle tension and improve blood circulation. By pressing specific points, we can trigger the release of endorphins (neurochemicals that relieve pain) and promote relaxation. It is a gentle yet powerful therapy suitable for a wide range of conditions, from simple headaches to complex digestive disorders.
            </p>
          </div>
        </div>
      </section>

      {/* What is Acupuncture */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8 text-right">
            What is Acupuncture?
          </h2>
          <div className="prose prose-lg text-stone-700">
            <p className="mb-6">
              <strong>Acupuncture</strong> is perhaps the most well-known modality of Traditional Chinese Medicine. It involves the insertion of extremely thin, sterile, disposable needles at strategic points on the body. While the idea of needles might sound daunting, acupuncture is generally painless. The needles are much thinner than those used for injections—about the width of a human hair.
            </p>
            <p className="mb-6">
              Acupuncture is often preferred over acupressure for deeper, more chronic conditions. The needles can reach deeper tissues and provide a stronger stimulation to the nervous system. It is recognized by the World Health Organization (WHO) as an effective treatment for dozens of conditions, including respiratory diseases, gastrointestinal disorders, and neurological issues.
            </p>
            <p className="mb-6">
              At our clinic in Lucknow, we practice safe, hygienic acupuncture. We strictly use single-use needles to ensure zero risk of infection. Our approach is gentle, ensuring you feel comfortable throughout the session. Many patients report a sensation of heaviness or tingling at the needle site, which is a positive sign that the treatment is working (known as &quot;De Qi&quot;).
            </p>
          </div>
        </div>
      </section>

      {/* How it Works - Science */}
      <section className="py-16 md:py-24 bg-nature-brown/5">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8 text-center">
              How It Works: The Science & Mechanism
            </h2>
            <div className="prose prose-lg text-stone-700">
               <p className="mb-6">
                 While traditional theories speak of energy flow, modern medical science offers several compelling explanations for how acupressure and acupuncture work to heal the body. Understanding these mechanisms helps bridge the gap between ancient wisdom and modern healthcare.
               </p>
               <h3 className="text-2xl font-bold text-nature-brown mt-8 mb-4">1. The Gate Control Theory of Pain</h3>
               <p className="mb-6">
                 This theory suggests that pain signals travel to the brain via the spinal cord. Non-painful input, such as the pressure from acupressure or the sensation of a needle, closes the &quot;gates&quot; to painful input. This prevents pain sensation from traveling to the central nervous system, effectively &quot;turning off&quot; the pain signal.
               </p>
               <h3 className="text-2xl font-bold text-nature-brown mt-8 mb-4">2. Release of Endorphins</h3>
               <p className="mb-6">
                 Stimulation of acupoints activates the hypothalamus and pituitary gland to release <strong>endorphins</strong> and <strong>enkephalins</strong>. These are the body&apos;s natural painkillers, often more potent than morphine. They not only block pain but also induce a feeling of well-being and relaxation, which is why many patients fall asleep during treatment.
               </p>
               <h3 className="text-2xl font-bold text-nature-brown mt-8 mb-4">3. Improving Blood Circulation</h3>
               <p className="mb-6">
                 Both pressure and needling cause a local physiological response. Blood vessels dilate (vasodilation), increasing blood flow to the area. This fresh blood brings oxygen and nutrients essential for tissue repair and flushes out metabolic waste products like lactic acid that cause muscle soreness.
               </p>
               <h3 className="text-2xl font-bold text-nature-brown mt-8 mb-4">4. Regulating the Nervous System</h3>
               <p className="mb-6">
                 Chronic stress keeps our bodies in a &quot;fight or flight&quot; (sympathetic) mode. Acupressure stimulates the <strong>parasympathetic nervous system</strong>, responsible for &quot;rest and digest.&quot; This regulation lowers heart rate, reduces blood pressure, and calms anxiety, allowing the body to heal itself.
               </p>
            </div>
         </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
             Conditions & Issues Commonly Treated
           </h2>
           <div className="grid md:grid-cols-2 gap-10">

             {/* Pain */}
             <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition">
               <h3 className="text-2xl font-bold text-nature-brown mb-4">Pain & Musculoskeletal Issues</h3>
               <p className="text-stone-700 mb-4">
                 We are renowned in Lucknow for treating chronic pain. Whether it is <strong>lower back pain (Sciatica)</strong>, <strong>neck pain (Cervical Spondylitis)</strong>, or <strong>frozen shoulder</strong>, our therapy targets the deep muscle knots (trigger points) that cause discomfort.
               </p>
               <p className="text-stone-700 mb-4">
                 <strong>What to expect:</strong> Immediate reduction in stiffness. We often combine acupressure with gentle stretches.
                 <br/><span className="text-sm italic text-stone-500">Frequency: 2-3 times a week initially.</span>
               </p>
             </div>

             {/* Headache */}
             <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition">
               <h3 className="text-2xl font-bold text-nature-brown mb-4">Headache & Migraine</h3>
               <p className="text-stone-700 mb-4">
                 Tension headaches and migraines often stem from restricted blood flow to the head and neck tension. Acupressure on the neck, shoulders, and hands can abort a migraine attack and reduce the frequency of future episodes.
               </p>
               <p className="text-stone-700 mb-4">
                 <strong>What to expect:</strong> Relief from throbbing pain and nausea.
                 <br/><span className="text-sm italic text-stone-500">Frequency: Weekly maintenance recommended.</span>
               </p>
             </div>

             {/* Sleep */}
             <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition">
               <h3 className="text-2xl font-bold text-nature-brown mb-4">Sleep Problems & Insomnia</h3>
               <p className="text-stone-700 mb-4">
                 If you toss and turn at night, acupressure can help reset your biological clock. By calming the &quot;Shen&quot; (Spirit) and reducing cortisol, we help you achieve deep, restorative sleep without sleeping pills.
               </p>
               <p className="text-stone-700 mb-4">
                 <strong>What to expect:</strong> Better sleep quality and feeling refreshed in the morning.
                 <br/><span className="text-sm italic text-stone-500">Frequency: Evening sessions are best.</span>
               </p>
             </div>

             {/* Digestive */}
             <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition">
               <h3 className="text-2xl font-bold text-nature-brown mb-4">Digestive Issues</h3>
               <p className="text-stone-700 mb-4">
                 From <strong>IBS (Irritable Bowel Syndrome)</strong> to chronic acidity and constipation, gut health is central to TCM. We stimulate points that regulate stomach acid and improve peristalsis (gut movement).
               </p>
               <p className="text-stone-700 mb-4">
                 <strong>What to expect:</strong> Reduction in bloating, gas, and irregular bowel habits.
                 <br/><span className="text-sm italic text-stone-500">Precautions: Avoid heavy meals before session.</span>
               </p>
             </div>

             {/* Anxiety */}
             <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition">
               <h3 className="text-2xl font-bold text-nature-brown mb-4">Anxiety & Mental Stress</h3>
               <p className="text-stone-700 mb-4">
                 Mental health is as important as physical health. Acupressure is a powerful tool for emotional regulation. It helps release trapped emotions and reduces physical symptoms of anxiety like heart palpitations and shallow breathing.
               </p>
               <p className="text-stone-700 mb-4">
                 <strong>What to expect:</strong> A profound sense of calm and emotional stability.
               </p>
             </div>

             {/* Lifestyle */}
             <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition">
               <h3 className="text-2xl font-bold text-nature-brown mb-4">Lifestyle Diseases</h3>
               <p className="text-stone-700 mb-4">
                 We provide supportive therapy for <strong>Hypertension (High BP)</strong> and <strong>Diabetes</strong>. While not a replacement for medication, it helps manage the side effects and improves overall organ function (kidney, liver).
               </p>
               <p className="text-stone-700 mb-4">
                 <strong>What to expect:</strong> Better blood circulation and stress reduction which aids BP control.
               </p>
             </div>

           </div>
        </div>
      </section>

      {/* Internal Link Banner */}
      <section className="py-10 bg-stone-800 text-white text-center">
         <div className="container mx-auto px-4">
            <p className="text-xl mb-4 font-playfair">Looking for Yoga & Meditation classes in Lucknow?</p>
            <Link href="/yoga-meditation-lucknow" className="inline-block bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
               Visit Our Yoga Center
            </Link>
         </div>
      </section>

      {/* Self Care Section */}
      <section className="py-16 md:py-24 bg-stone-100">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8">
               Self-care & Home Acupressure
            </h2>
            <p className="text-lg text-stone-700 mb-8">
               Empowering yourself with simple acupressure techniques can be a game-changer for daily ailments. Here are three powerful points you can use at home:
            </p>

            <div className="space-y-8">
               <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-white p-6 rounded-xl shadow-sm md:w-full">
                     <h3 className="text-xl font-bold text-nature-brown mb-2">1. LI4 (He Gu) - For Headaches & Pain</h3>
                     <p className="text-stone-600 mb-2"><strong>Location:</strong> In the fleshy web between your thumb and index finger.</p>
                     <p className="text-stone-600"><strong>Technique:</strong> Squeeze this point firmly with the thumb and index finger of your other hand. Massage in a circular motion for 1-2 minutes. Great for tension headaches and toothaches.</p>
                     <p className="text-red-500 text-xs mt-2 font-bold uppercase">Do not use if pregnant.</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-white p-6 rounded-xl shadow-sm md:w-full">
                     <h3 className="text-xl font-bold text-nature-brown mb-2">2. P6 (Nei Guan) - For Nausea & Anxiety</h3>
                     <p className="text-stone-600 mb-2"><strong>Location:</strong> Three finger-widths below your wrist crease, between the two tendons.</p>
                     <p className="text-stone-600"><strong>Technique:</strong> Apply steady pressure with your thumb. It is highly effective for motion sickness, morning sickness, and calming a racing heart.</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="bg-white p-6 rounded-xl shadow-sm md:w-full">
                     <h3 className="text-xl font-bold text-nature-brown mb-2">3. GV24.5 (Yin Tang) - For Stress & Sleep</h3>
                     <p className="text-stone-600 mb-2"><strong>Location:</strong> Directly between your eyebrows (Third Eye).</p>
                     <p className="text-stone-600"><strong>Technique:</strong> Gently stroke upward or apply steady pressure. This point calms the mind instantly and is excellent for insomnia.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Safety & Side Effects */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8">
               Safety & Side Effects
            </h2>
            <div className="prose prose-lg text-stone-700">
               <p className="mb-6">
                  One of the biggest advantages of acupressure and acupuncture is their safety profile. Unlike pharmaceutical drugs which tax the liver and kidneys, these therapies work with the body&apos;s natural energy. However, it is important to be aware of potential reactions.
               </p>
               <h3 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Possible Side Effects</h3>
               <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Soreness:</strong> You may feel sore at the pressure points or needle sites. This is common and usually subsides within 24 hours.</li>
                  <li><strong>Bruising:</strong> Minor bruising can occur at the needle site (hematoma), especially if you are on blood thinners.</li>
                  <li><strong>Fatigue:</strong> A feeling of deep tiredness after a session is normal. It is your body telling you to rest and heal.</li>
                  <li><strong>Lightheadedness:</strong> Rarely, patients may feel faint, especially if they come on an empty stomach.</li>
               </ul>
               <h3 className="text-2xl font-bold text-stone-800 mt-8 mb-4">Contraindications (When to Avoid)</h3>
               <p className="mb-6">
                  Therapy should be modified or avoided in cases of:
               </p>
               <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Pregnancy:</strong> Certain points can stimulate uterine contractions. Always inform us if you are pregnant.</li>
                  <li><strong>Open Wounds or Burns:</strong> We cannot treat areas with inflamed or broken skin.</li>
                  <li><strong>Bleeding Disorders:</strong> Acupuncture may not be suitable for those with severe clotting disorders.</li>
               </ul>
               <p className="mb-6 font-bold">
                  Always consult with our therapist before starting treatment if you have a pacemaker or serious heart condition.
               </p>
            </div>
         </div>
      </section>

      {/* Tables Section */}
      <section className="py-16 md:py-24 bg-nature-light/10">
         <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
               Comparisons & Timeline
            </h2>

            {/* Table 1 */}
            <div className="mb-12 overflow-x-auto bg-white rounded-xl shadow-sm">
               <h3 className="text-xl font-bold p-6 bg-nature-brown text-white">Table 1: Therapy Comparison</h3>
               <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-stone-100 text-stone-700">
                     <tr>
                        <th className="p-4 font-semibold">Therapy Type</th>
                        <th className="p-4 font-semibold">Method</th>
                        <th className="p-4 font-semibold">Best For</th>
                        <th className="p-4 font-semibold">Invasiveness</th>
                        <th className="p-4 font-semibold">Session Duration</th>
                     </tr>
                  </thead>
                  <tbody className="text-stone-700">
                     <tr className="border-b">
                        <td className="p-4 font-bold">Acupressure</td>
                        <td className="p-4">Finger Pressure</td>
                        <td className="p-4">Stress, Headaches, Self-care</td>
                        <td className="p-4">Non-invasive</td>
                        <td className="p-4">30-45 mins</td>
                     </tr>
                     <tr className="border-b">
                        <td className="p-4 font-bold">Acupuncture</td>
                        <td className="p-4">Thin Needles</td>
                        <td className="p-4">Chronic Pain, Nerve Issues</td>
                        <td className="p-4">Minimally Invasive</td>
                        <td className="p-4">30-60 mins</td>
                     </tr>
                     <tr className="border-b">
                        <td className="p-4 font-bold">Physiotherapy</td>
                        <td className="p-4">Exercises & Machines</td>
                        <td className="p-4">Rehabilitation, Muscle Strength</td>
                        <td className="p-4">Non-invasive</td>
                        <td className="p-4">45-60 mins</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            {/* Table 2 */}
            <div className="mb-12 overflow-x-auto bg-white rounded-xl shadow-sm">
               <h3 className="text-xl font-bold p-6 bg-nature-brown text-white">Table 2: Conditions & Recommended Approach</h3>
               <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-stone-100 text-stone-700">
                     <tr>
                        <th className="p-4 font-semibold">Condition</th>
                        <th className="p-4 font-semibold">Recommended Therapy</th>
                        <th className="p-4 font-semibold">What It Helps With</th>
                        <th className="p-4 font-semibold">Precautions</th>
                     </tr>
                  </thead>
                  <tbody className="text-stone-700">
                     <tr className="border-b">
                        <td className="p-4 font-bold">Back Pain</td>
                        <td className="p-4">Acupuncture + Cupping</td>
                        <td className="p-4">Reduces inflammation, releases knots</td>
                        <td className="p-4">Avoid heavy lifting after</td>
                     </tr>
                     <tr className="border-b">
                        <td className="p-4 font-bold">Migraine</td>
                        <td className="p-4">Acupressure (Head/Neck)</td>
                        <td className="p-4">Improves blood flow, reduces nausea</td>
                        <td className="p-4">Stay hydrated</td>
                     </tr>
                     <tr className="border-b">
                        <td className="p-4 font-bold">Insomnia</td>
                        <td className="p-4">Acupuncture (Ear/Head)</td>
                        <td className="p-4">Regulates sleep hormones</td>
                        <td className="p-4">Avoid caffeine</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            {/* Timeline Chart */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
               <h3 className="text-xl font-bold text-stone-800 mb-8 text-center">What to Expect: Progress Timeline</h3>
               <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
                  {/* Line */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-stone-200 -z-10 hidden md:block"></div>

                  {/* Step 1 */}
                  <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 text-center w-full md:w-1/4">
                     <div className="w-10 h-10 bg-nature-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                     <h4 className="font-bold text-lg mb-2">Sessions 1-3</h4>
                     <p className="text-sm text-stone-600">Initial relief. Pain levels drop. Improved relaxation and sleep.</p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 text-center w-full md:w-1/4">
                     <div className="w-10 h-10 bg-nature-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                     <h4 className="font-bold text-lg mb-2">Sessions 4-8</h4>
                     <p className="text-sm text-stone-600">Cumulative effect. Inflammation reduces. Mobility improves significantly.</p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 text-center w-full md:w-1/4">
                     <div className="w-10 h-10 bg-nature-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                     <h4 className="font-bold text-lg mb-2">Sessions 9-12</h4>
                     <p className="text-sm text-stone-600">Stabilization. Symptoms rarely return. Body learns to self-regulate.</p>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 text-center w-full md:w-1/4">
                     <div className="w-10 h-10 bg-nature-brown text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                     <h4 className="font-bold text-lg mb-2">Maintenance</h4>
                     <p className="text-sm text-stone-600">Once a month sessions to maintain balance and prevent recurrence.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-stone-50">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
               Frequently Asked Questions
            </h2>
            <div className="space-y-6">
               {[
                  { q: "Is acupressure safe?", a: "Yes, acupressure is a non-invasive and highly safe therapy. It involves applying manual pressure to specific points on the body. Unlike medication or surgery, it has no major side effects and stimulates the body's natural healing." },
                  { q: "How many sessions needed?", a: "The number of sessions depends on the severity and duration of the condition. Acute pain may resolve in 3-5 sessions, while chronic issues like old arthritis or frozen shoulder might require 10-15 sessions for lasting relief." },
                  { q: "Can I do it at home?", a: "Yes, basic self-care acupressure is encouraged. We teach patients simple points for headaches or stress relief. However, deep therapeutic work for serious conditions should be done by a certified professional to ensure accuracy." },
                  { q: "Acupressure vs Acupuncture — which is better?", a: "Both are effective. Acupressure is great for general wellness, stress, and mild pain. Acupuncture is often more potent for deep-seated chronic pain, nerve issues, and severe inflammation. Our therapist will recommend the best approach for you." },
                  { q: "Does it really help back pain?", a: "Yes, acupressure is one of the most effective non-drug treatments for back pain. It releases muscle tension, improves blood flow to the spine, and triggers the release of endorphins (natural painkillers)." },
                  { q: "Any age limitations?", a: "No, acupressure can be performed on anyone from infants to the elderly. The pressure intensity is adjusted according to the patient's age and frailty." },
                  { q: "Cost?", a: "Our sessions are very affordable compared to other medical treatments. Please contact the clinic directly for the current pricing packages." },
                  { q: "What to expect after first session?", a: "Most patients feel an immediate sense of relaxation and reduced pain. Some may feel a 'good soreness' similar to after a workout, which fades in a day, leaving you feeling lighter and more mobile." },
                  { q: "How long are sessions?", a: "A typical session lasts between 30 to 45 minutes, depending on the complexity of the treatment required." },
                  { q: "Is it painful?", a: "Acupressure involves firm pressure which can feel 'tender' on tight spots, but it should not be unbearably painful. Acupuncture creates a mild sensation, but is generally not painful." },
                  { q: "Can I eat before a session?", a: "It is best to have a light meal 1-2 hours before your session. Avoid coming on an empty stomach (to prevent dizziness) or a very full stomach (to be comfortable lying down)." },
                  { q: "Do you use sterile needles?", a: "Absolutely. For acupuncture, we only use sterile, single-use, disposable needles. They are opened in front of you and discarded immediately after use." }
               ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                     <h3 className="font-bold text-lg text-nature-brown mb-2">{faq.q}</h3>
                     <p className="text-stone-600">{faq.a}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA & Contact */}
      <section id="book" className="py-20 bg-nature-brown text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-4xl font-playfair font-bold mb-6">Heal Naturally. Live Pain-Free.</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
               Book your consultation with Kawaljeet Singh at Natural Treatment Hospital, Lucknow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <a href={`tel:${PHONE}`} className="bg-white text-nature-brown px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition shadow-lg text-lg min-w-[200px]">
                  Call {PHONE}
               </a>
               <Link href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition text-lg min-w-[200px]">
                  Get Directions
               </Link>
            </div>
            <p className="mt-8 text-sm opacity-75">
               Clinic Address: {ADDRESS}, Lucknow
            </p>
         </div>
      </section>

      {/* Bottom Internal Links */}
      <section className="py-8 bg-stone-900 text-stone-400 text-sm text-center">
         <div className="container mx-auto px-4 flex justify-center gap-6 flex-wrap">
            <Link href="/physiotherapy-lucknow" className="hover:text-white transition">Physiotherapy in Lucknow</Link>
            <span>|</span>
            <Link href="/yoga-meditation-lucknow" className="hover:text-white transition">Yoga Classes Lucknow</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
         </div>
      </section>

      {/* Areas Served */}
      <section className="py-8 bg-stone-100 text-stone-500 text-xs border-t border-stone-200">
         <div className="container mx-auto px-4 text-center">
            <p className="mb-2 font-bold uppercase tracking-wider">Serving Areas in Lucknow</p>
            <p>{SEO_AREAS.join(" | ")}</p>
         </div>
      </section>

    </main>
  );
}
