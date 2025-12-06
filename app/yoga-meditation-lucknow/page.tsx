import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { SEO_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Yoga & Meditation in Lucknow | Yoga Classes & Meditation Training',
  description: 'Join the best Yoga & Meditation classes in Lucknow with Dr. Nand Lal Yadav. Specialized Medical Yoga for diabetes, BP, thyroid, and stress management. Call 81154 00106.',
  alternates: {
    canonical: 'https://naturopathlucknow.in/yoga-meditation-lucknow',
  },
};

export default function YogaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "name": "Natural Treatment Hospital",
        "image": "https://naturopathlucknow.in/images/logo.png",
        "url": "https://naturopathlucknow.in",
        "telephone": "+918115400106",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "CP-143, Viraj Khand, Gomti Nagar",
          "addressLocality": "Lucknow",
          "addressRegion": "UP",
          "postalCode": "226010",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.8467,
          "longitude": 80.9462
        },
        "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "13:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "16:00",
              "closes": "19:00"
            }
        ],
        "department": [
          {
            "@type": "MedicalSpecialty",
            "name": "Yoga Therapy Department",
            "description": "Specialized therapeutic yoga for chronic diseases."
          }
        ]
      },
      {
        "@type": "Person",
        "name": "Dr. Nand Lal Yadav",
        "url": "https://naturopathlucknow.in/yoga-therapist/nand-lal-yadav",
        "jobTitle": "Yoga Therapist"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Medical Yoga safe for everyone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Medical Yoga is designed to be safe for all ages and conditions. However, it must be practiced under the guidance of a certified therapist like Dr. Nand Lal Yadav. He customizes the poses to suit your physical limitations, ensuring there is no strain or injury."
            }
          },
          {
            "@type": "Question",
            "name": "Can Yoga cure high Blood Pressure (BP)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yoga is highly effective in managing hypertension. Poses like Shavasana and pranayamas like Chandra Bhedi cool down the system and lower BP. While it may not 'cure' it overnight, regular practice can significantly reduce the need for medication."
            }
          },
          {
            "@type": "Question",
            "name": "Is Yoga helpful for Thyroid problems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Specific throat-stimulating poses like Sarvangasana (Shoulder Stand) and Matsyasana (Fish Pose) massage the thyroid gland, regulating the secretion of thyroxine. It helps in both Hypo and Hyperthyroidism."
            }
          },
          {
             "@type": "Question",
             "name": "How does meditation help with Insomnia?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Meditation shifts the brain from the active Beta waves to the relaxed Alpha and Theta waves. This transition is essential for sleep initiation. Techniques like Yoga Nidra provide a deep state of conscious rest that mimics sleep."
             }
          },
          {
             "@type": "Question",
             "name": "How long does it take to see results?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "You will feel mental relaxation after the very first session. For physical benefits like flexibility and pain relief, consistent practice for 4-8 weeks is usually required. Chronic conditions may take 3-6 months for significant improvement."
             }
          },
          {
             "@type": "Question",
             "name": "What is the best time to practice Yoga?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "The Brahma Muhurta (early morning before sunrise) is considered ideal as the air is fresh and the mind is calm. However, evening practice (before dinner) is also good for relieving the day's stress."
             }
          },
          {
             "@type": "Question",
             "name": "Who should avoid certain asanas?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "People with recent surgeries, hernia, severe back pain, or pregnancy should avoid intense core work and deep twists. Always inform your instructor about your medical history before starting."
             }
          },
          {
             "@type": "Question",
             "name": "Can I do Yoga if I am stiff?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes! Flexibility is a result of yoga, not a prerequisite. In fact, stiff people benefit the most. We use props like belts and blocks to help you perform poses comfortably."
             }
          },
          {
             "@type": "Question",
             "name": "Do you offer private home sessions in Lucknow?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes, Dr. Nand Lal Yadav offers private home sessions for patients who are bedridden or prefer privacy. These are premium sessions tailored exclusively for you."
             }
          },
          {
             "@type": "Question",
             "name": "What should I wear to class?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Wear loose, comfortable cotton clothing that allows free movement. Avoid tight synthetic wear that restricts blood flow or breathing."
             }
          },
          {
             "@type": "Question",
             "name": "Is there an age limit for Yoga?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "No, yoga is for everyone from age 5 to 95. We have specific batches for kids, adults, and senior citizens to cater to their specific needs."
             }
          },
          {
             "@type": "Question",
             "name": "Can Yoga help with weight loss?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes, dynamic forms of yoga like Surya Namaskar burn calories. More importantly, yoga reduces stress eating and regulates metabolism, leading to sustainable weight loss."
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
            "name": "Yoga & Meditation in Lucknow",
            "item": "https://naturopathlucknow.in/yoga-meditation-lucknow"
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-nature-green text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Placeholder for background image */}
        <div className="absolute inset-0 z-0 bg-stone-300">
             <Image
                src="/images/hero/yoga.jpg"
                alt="Yoga Classes in Lucknow"
                fill
                className="object-cover opacity-60"
             />
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
            <span className="block mb-2">Yoga & Meditation</span>
            <span className="block text-nature-light-green">Classes in Lucknow</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Experience the ancient healing power of Medical Yoga and Mindfulness Meditation to restore your physical health and inner peace in the heart of Lucknow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="tel:8115400106" className="bg-white text-nature-green px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition shadow-lg text-lg">
               Book a Class Now
             </a>
             <Link href="#intro" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition text-lg">
               Learn More
             </Link>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-stone-50 rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                 <Image
                    src="/images/team/dr-nand-lal-yadav.jpg"
                    alt="Dr. Nand Lal Yadav - Yoga Therapist Lucknow"
                    fill
                    className="object-cover"
                 />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-playfair font-bold text-nature-green mb-2">
                Our Yoga & Meditation Specialist in Lucknow
              </h2>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">Dr. Nand Lal Yadav</h3>
              <p className="text-lg text-stone-600 mb-6 font-medium">
                Yoga Therapist & Meditation Instructor (10+ Years Experience)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-stone-700">
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-nature-green rounded-full"></span>
                   Specialization: Medical Yoga & Therapy
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-nature-green rounded-full"></span>
                   Expertise: Lifestyle Disorders & Stress
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-nature-green rounded-full"></span>
                   Certification: Diploma in Yoga Therapy
                </div>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-nature-green rounded-full"></span>
                   Focus: Holistic Healing & Naturopathy
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 <Link href="/yoga-therapist/nand-lal-yadav" className="bg-nature-green text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition">
                   View Full Profile
                 </Link>
                 <a href="https://wa.me/918115400106" className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition flex items-center gap-2">
                   Chat on WhatsApp
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Introduction */}
      <section id="intro" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8 text-center">
            Introduction to Yoga & Meditation in Lucknow
          </h2>
          <div className="prose prose-lg text-stone-700 mx-auto">
            <p className="mb-6">
              In the bustling city of <strong>Lucknow</strong>, where the rich heritage of Nawabs meets the fast-paced modern lifestyle, health often takes a backseat. The rising pollution levels, increasing work pressure in corporate hubs like Gomti Nagar, and the sedentary lifestyle prevalent in areas like Hazratganj and Aliganj have led to a surge in lifestyle diseases. Diabetes, hypertension, anxiety, and back pain are no longer just medical terms; they are daily realities for many Lucknowites.
            </p>
            <p className="mb-6">
              This is where the ancient science of <strong>Yoga</strong> and <strong>Meditation</strong> steps in as a powerful, drugless solution. At <em>Natural Treatment Hospital</em>, we believe that true health is not just the absence of disease but a state of complete physical, mental, and spiritual well-being. Our specialized <strong>yoga classes in Lucknow</strong> are not just about twisting your body; they are about twisting your fate towards a healthier, happier life.
            </p>
            <p className="mb-6">
              Under the expert guidance of <strong>Dr. Nand Lal Yadav</strong>, we offer &quot;Medical Yoga&quot;—a targeted therapeutic approach that uses specific asanas and breathing techniques to treat and manage chronic ailments. Whether you are a student struggling with exam stress, a professional dealing with burnout, or a senior citizen seeking mobility, our <strong>meditation classes in Lucknow</strong> provide the sanctuary you need. We integrate traditional wisdom with modern scientific understanding to offer a holistic healing experience right here in your city.
            </p>
          </div>
        </div>
      </section>

      {/* What is Yoga */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8">
            What is Yoga?
          </h2>
          <div className="prose prose-lg text-stone-700">
            <p className="mb-6">
              <strong>Yoga</strong> is often misunderstood as merely a set of physical exercises or acrobatics. In reality, it is a profound science of living that originated in India thousands of years ago. The word &quot;Yoga&quot; is derived from the Sanskrit root &apos;Yuj&apos;, meaning to join or to yoke or to unite. It symbolizes the union of the individual consciousness with the universal consciousness, a perfect harmony between mind and body, man and nature.
            </p>
            <p className="mb-6">
              Physiologically, yoga combines physical postures (<strong>Asanas</strong>), breathing techniques (<strong>Pranayama</strong>), and meditation (<strong>Dhyana</strong>). Unlike gym workouts that focus primarily on muscle building, yoga focuses on the internal health of the organs, flexibility of the spine, and calmness of the mind. It stimulates the parasympathetic nervous system, shifting the body from a &quot;fight or flight&quot; mode to a &quot;rest and digest&quot; mode, which is crucial for healing.
            </p>
            <p className="mb-6">
              In the context of <strong>Lucknow&apos;s lifestyle</strong>, where rich culinary traditions (like Tunday Kababi and Malai Makkhan) often lead to digestive issues and obesity, Yoga acts as a balancing force. It improves metabolism, aids digestion, and helps manage weight effectively. Our <strong>yoga therapy in Lucknow</strong> is designed to counteract the negative effects of urban living, offering a path to rejuvenation and longevity. It is a discipline that fosters self-discipline, awareness, and a deep sense of inner peace.
            </p>
          </div>
        </div>
      </section>

      {/* What is Meditation */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8 text-right">
            What is Meditation?
          </h2>
          <div className="prose prose-lg text-stone-700">
            <p className="mb-6">
              <strong>Meditation</strong> (Dhyana) is the art of silencing the mind. It is a state of profound deep peace that occurs when the mind is calm and silent, yet completely alert. In our <strong>meditation classes in Lucknow</strong>, we teach that meditation is not about forcing your mind to be empty; it is about finding the quiet that is already there, buried under the 50,000 thoughts the average person thinks every day.
            </p>
            <p className="mb-6">
              There are various styles of meditation, ranging from <strong>Mindfulness Meditation</strong> (observing thoughts without judgment) to <strong>Transcendental Meditation</strong> (using mantras) and <strong>Vipassana</strong> (insight meditation). At our center, Dr. Nand Lal Yadav focuses on therapeutic meditation techniques that are scientifically proven to reduce cortisol (stress hormone) levels.
            </p>
            <p className="mb-6">
              The impact of meditation on <strong>mental health</strong> is transformative. Clinical studies have shown that regular practice can physically change the brain structure—increasing the density of grey matter in areas associated with learning, memory, and emotion regulation. For the residents of Lucknow facing the pressures of modern life, meditation serves as a mental detox. It alleviates anxiety, cures insomnia, and enhances emotional resilience. It is the ultimate tool for stress management, allowing you to navigate life&apos;s challenges with a calm and centered demeanor.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Link Banner 1 */}
      <section className="py-8 bg-nature-green text-white">
         <div className="container mx-auto px-4 text-center">
            <p className="text-xl mb-4 font-playfair">Suffering from chronic pain? Explore our specialized treatments.</p>
            <Link href="/acupressure-acupuncture-lucknow" className="inline-block bg-white text-nature-green px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition">
               Explore Acupressure in Lucknow
            </Link>
         </div>
      </section>


      {/* Why Yoga */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8">
            Why Choose Yoga?
          </h2>
          <div className="prose prose-lg text-stone-700">
            <p className="mb-6">
              Choosing <strong>Yoga</strong> over other forms of exercise is choosing a holistic path to health. While a gym workout focuses on the superficial appearance of the body—building biceps or six-pack abs—yoga works on the internal organs, glands, and nerves. It is an all-encompassing system that ensures the healthy functioning of the heart, liver, kidneys, and lungs.
            </p>
            <p className="mb-6">
              One of the primary reasons to choose yoga is its sustainability. High-intensity workouts can often lead to injuries, joint wear and tear, and burnout. Yoga, on the other hand, is low-impact and can be practiced by anyone, from a 5-year-old child to an 80-year-old grandparent. It improves flexibility, balance, and core strength without putting undue stress on the body.
            </p>
            <p className="mb-6">
              Moreover, yoga is a powerful tool for <strong>preventive healthcare</strong>. Regular practice boosts immunity, regulates blood pressure, and balances hormones. In a city like Lucknow, where lifestyle diseases are on the rise, yoga offers a protective shield. It also fosters a deep connection between the mind and body, helping you become more aware of your body&apos;s signals and needs. When you choose yoga, you are not just choosing an exercise; you are choosing a lifestyle of wellness, awareness, and harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Why Meditation */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8">
            Why Practice Meditation?
          </h2>
          <div className="prose prose-lg text-stone-700">
            <p className="mb-6">
              In an era defined by distraction and digital overload, <strong>Meditation</strong> is the antidote. Why should you practice it? Because your mind needs rest just as much as your body does. Sleep is not enough to clear the accumulated mental clutter and emotional baggage. Meditation provides a deep state of rest—deeper than sleep—that rejuvenates the mind and restores clarity.
            </p>
            <p className="mb-6">
              Meditation is essential for <strong>stress reduction</strong>. It triggers the relaxation response, lowering blood pressure and heart rate. For professionals in Lucknow dealing with high-pressure jobs, meditation is a survival skill. It enhances focus, productivity, and creativity. It allows you to respond to situations rather than react impulsively.
            </p>
            <p className="mb-6">
              Furthermore, meditation cultivates emotional intelligence. It helps you understand your own thought patterns and emotions, leading to better relationships and self-acceptance. It breaks the cycle of negative thinking and fosters a positive outlook on life. If you seek peace, clarity, and mental resilience, meditation is the key.
            </p>
          </div>
        </div>
      </section>

      {/* Yoga for Diseases - Part 1 */}
      <section className="py-16 md:py-24 bg-nature-green/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
            Yoga for Specific Diseases
          </h2>

          <div className="space-y-12">
            {/* Diabetes */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Diabetes</h3>
              <p className="mb-4 text-stone-700">
                Diabetes is becoming an epidemic in Lucknow. <strong>Yoga for diabetes</strong> focuses on stimulating the pancreas to improve insulin production and sensitivity. Specific abdominal twists and compressions massage the internal organs, aiding in better blood sugar control.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Asanas:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Mandukasana (Frog Pose):</strong> Directly puts pressure on the pancreas.</li>
                <li><strong>Ardha Matsyendrasana (Half Spinal Twist):</strong> Squeezes the abdominal organs.</li>
                <li><strong>Paschimottanasana (Seated Forward Bend):</strong> Stimulates liver and pancreas.</li>
                <li><strong>Kapalbhati Pranayama:</strong> Improves metabolism and weight control.</li>
              </ul>
              <p className="text-sm text-stone-500 italic">Caution: Avoid deep forward bends if you have high BP or back pain along with diabetes.</p>
            </div>

            {/* Heart Disease */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Heart Disease</h3>
              <p className="mb-4 text-stone-700">
                Cardiovascular health is critical. <strong>Yoga for heart disease</strong> is gentle and preventive. It helps reduce arterial plaque, lowers bad cholesterol, and manages blood pressure. The focus is on relaxation and deep breathing to reduce the workload on the heart.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Asanas:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Shavasana (Corpse Pose):</strong> The ultimate pose for deep relaxation and BP reduction.</li>
                <li><strong>Tadasana (Mountain Pose):</strong> Improves circulation without strain.</li>
                <li><strong>Vrikshasana (Tree Pose):</strong> Calms the mind and stabilizes the heart rhythm.</li>
                <li><strong>Anulom Vilom Pranayama:</strong> Balances the autonomic nervous system.</li>
              </ul>
              <p className="text-sm text-stone-500 italic">Caution: Avoid holding breath (Kumbhaka) and intense inversions like Headstand.</p>
            </div>

            {/* Cancer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Cancer (Supportive Care)</h3>
              <p className="mb-4 text-stone-700">
                While not a cure, <strong>Yoga for cancer</strong> is a powerful supportive therapy. It helps manage the side effects of chemotherapy and radiation, such as fatigue, nausea, and pain. It boosts the immune system and provides immense mental strength to fight the disease.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Practices:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Restorative Yoga:</strong> Supported poses to conserve energy.</li>
                <li><strong>Yoga Nidra:</strong> Guided relaxation for deep mental healing.</li>
                <li><strong>Gentle Stretching:</strong> To maintain mobility and reduce stiffness.</li>
                <li><strong>Bhramari Pranayama:</strong> Relieves anxiety and induces sleep.</li>
              </ul>
              <p className="text-sm text-stone-500 italic">Caution: Practice under strict supervision. Avoid poses that put pressure on tumors.</p>
            </div>

            {/* Kidney Disorders */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Kidney Disorders</h3>
              <p className="mb-4 text-stone-700">
                 The kidneys are vital for detoxifying the body. <strong>Yoga for kidney health</strong> focuses on poses that stimulate the lower back and abdominal area, improving blood flow to the kidneys and aiding their function.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Asanas:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Bhujangasana (Cobra Pose):</strong> Stretches abdominal organs and strengthens the back.</li>
                <li><strong>Setu Bandhasana (Bridge Pose):</strong> Stimulates abdominal organs and regulates blood pressure.</li>
                <li><strong>Ardha Matsyendrasana:</strong> Stimulates the kidneys and liver.</li>
              </ul>
              <p className="text-sm text-stone-500 italic">Caution: Stay hydrated and avoid extreme backbends if suffering from kidney stones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block 1 */}
      <section className="py-12 bg-nature-green text-white text-center">
         <div className="container mx-auto px-4">
            <p className="text-2xl font-playfair font-bold mb-6">&quot;Call 81154 00106 to book a personalised yoga session with Dr. Nand Lal Yadav in Lucknow.&quot;</p>
            <a href="tel:8115400106" className="bg-white text-nature-green px-8 py-3 rounded-full font-bold hover:bg-stone-100 transition">Call Now</a>
         </div>
      </section>


      {/* Yoga for Diseases - Part 2 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">

            {/* Liver Health */}
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Liver Health</h3>
              <p className="mb-4 text-stone-700">
                A fatty liver is a common issue in Lucknow due to rich diets. <strong>Yoga for liver</strong> helps detoxify the organ and reduce fat deposits. Twisting poses are particularly effective as they squeeze out toxins and bring in fresh, oxygenated blood.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Asanas:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Meru Vakrasana (Spinal Twist):</strong> Massages the liver.</li>
                <li><strong>Dhanurasana (Bow Pose):</strong> Stimulates the entire abdominal region.</li>
                <li><strong>Gomukhasana (Cow Face Pose):</strong> Improves metabolism.</li>
              </ul>
              <p className="text-sm text-stone-500 italic">Caution: Avoid Dhanurasana if you have a hernia.</p>
            </div>

            {/* Stomach Problems */}
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Stomach Problems</h3>
              <p className="mb-4 text-stone-700">
                From constipation to IBS and acidity, stomach issues are rampant. <strong>Yoga for digestion</strong> strengthens the digestive fire (Agni). It relieves gas, bloating, and constipation naturally without laxatives.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Asanas:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Pawanmuktasana (Wind-Relieving Pose):</strong> Excellent for gas and bloating.</li>
                <li><strong>Vajrasana (Thunderbolt Pose):</strong> The only pose recommended immediately after meals for digestion.</li>
                <li><strong>Malasana (Garland Pose):</strong> Helps in regular bowel movements.</li>
              </ul>
              <p className="text-sm text-stone-500 italic">Caution: Avoid Pawanmuktasana if you have had recent abdominal surgery.</p>
            </div>

            {/* Stress & Anxiety */}
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Stress & Anxiety</h3>
              <p className="mb-4 text-stone-700">
                Stress is the root cause of many modern ailments. <strong>Yoga for anxiety</strong> activates the parasympathetic nervous system. It reduces cortisol levels and induces a state of calm.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Asanas:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Balasana (Child&apos;s Pose):</strong> Instantly calms the mind.</li>
                <li><strong>Viparita Karani (Legs Up the Wall):</strong> Relieves nervous exhaustion.</li>
                <li><strong>Nadi Shodhana Pranayama:</strong> Balances the left and right hemispheres of the brain.</li>
              </ul>
            </div>

            {/* Weight Loss */}
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Weight Loss</h3>
              <p className="mb-4 text-stone-700">
                <strong>Yoga for weight loss</strong> is sustainable and effective. While it burns calories, it also balances hormones that regulate appetite and metabolism. Power Yoga and Surya Namaskar are excellent for shedding kilos.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Asanas:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Surya Namaskar (Sun Salutation):</strong> A full-body cardiovascular workout.</li>
                <li><strong>Virabhadrasana (Warrior Poses):</strong> Builds muscle and burns fat.</li>
                <li><strong>Navasana (Boat Pose):</strong> Targets belly fat.</li>
              </ul>
            </div>

            {/* Immunity */}
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Immunity</h3>
              <p className="mb-4 text-stone-700">
                A strong immune system is your best defense. <strong>Yoga for immunity</strong> improves the circulation of lymph fluid, which carries immune cells throughout the body. It also reduces stress, which suppresses immunity.
              </p>
              <h4 className="font-bold text-stone-800 mb-2">Recommended Asanas:</h4>
              <ul className="list-disc list-inside text-stone-700 mb-4 space-y-1">
                <li><strong>Matsyasana (Fish Pose):</strong> Stimulates the thymus gland (vital for immunity).</li>
                <li><strong>Adho Mukha Svanasana (Downward Dog):</strong> Improves sinus flow.</li>
                <li><strong>Bhastrika Pranayama:</strong> Cleanses the lungs and respiratory tract.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Yoga for Age Groups */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
             Yoga for Every Age Group
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
               <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Children</h3>
               <p className="text-stone-700 mb-4">
                 Children in Lucknow face increasing academic pressure and screen time. <strong>Yoga for kids</strong> helps improve concentration, memory, and physical height. It channels their energy positively and teaches them emotional regulation early in life.
               </p>
               <ul className="list-disc list-inside text-stone-700">
                  <li><strong>Vrikshasana:</strong> For focus and balance.</li>
                  <li><strong>Tadasana:</strong> For height increase.</li>
                  <li><strong>Super Brain Yoga:</strong> For memory power.</li>
               </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
               <h3 className="text-2xl font-bold text-nature-green mb-4">Yoga for Elderly</h3>
               <p className="text-stone-700 mb-4">
                 For our senior citizens, yoga is a lifeline. <strong>Yoga for seniors</strong> focuses on maintaining mobility, reducing joint pain (arthritis), and preventing falls by improving balance. It also combats loneliness and depression common in old age.
               </p>
               <ul className="list-disc list-inside text-stone-700">
                  <li><strong>Chair Yoga:</strong> Gentle stretches while sitting.</li>
                  <li><strong>Sukhasana:</strong> Easy seated pose for meditation.</li>
                  <li><strong>Joint Rotations:</strong> To keep joints lubricated.</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Link Banner 2 */}
      <section className="py-8 bg-stone-800 text-white">
         <div className="container mx-auto px-4 text-center">
            <p className="text-xl mb-4 font-playfair">Recovering from an injury? We offer specialized physiotherapy.</p>
            <Link href="/physiotherapy-lucknow" className="inline-block bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition">
               Explore Physiotherapy in Lucknow
            </Link>
         </div>
      </section>

      {/* Meditation for Mental Health */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8">
             Meditation for Mental Health
           </h2>
           <div className="prose prose-lg text-stone-700">
             <p className="mb-6">
               Mental health is a critical component of overall wellness. In Lucknow, the stigma around mental health is slowly fading, and people are seeking natural solutions. <strong>Meditation for mental health</strong> is a clinically proven method to manage psychiatric conditions without heavy medication.
             </p>
             <p className="mb-6">
               <strong>Depression:</strong> Meditation increases the levels of serotonin and dopamine, the &quot;feel-good&quot; neurotransmitters. It helps break the cycle of negative rumination and hopelessness.
             </p>
             <p className="mb-6">
               <strong>Anxiety:</strong> Regular practice reduces the size of the amygdala, the brain&apos;s fear center. This leads to a significant reduction in anxiety attacks and general worry.
             </p>
             <p className="mb-6">
               <strong>Insomnia:</strong> By inducing deep relaxation (Theta and Delta brain waves), meditation cures sleeplessness. It helps you fall asleep faster and improves the quality of sleep, ensuring you wake up refreshed.
             </p>
           </div>
        </div>
      </section>

      {/* Meditation for Students */}
      <section className="py-16 md:py-24 bg-nature-green/5">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-8">
             Meditation for Students in Lucknow
           </h2>
           <div className="prose prose-lg text-stone-700">
             <p className="mb-6">
               Lucknow is an educational hub with thousands of students preparing for competitive exams like NEET, JEE, and UPSC. The pressure is immense. <strong>Meditation for students</strong> is not a luxury; it&apos;s a necessity.
             </p>
             <p className="mb-6">
               Practicing mindfulness for just 20 minutes a day can significantly enhance <strong>concentration and memory retention</strong>. It calms the &quot;monkey mind,&quot; allowing students to study for longer hours without fatigue. It also helps in managing exam anxiety, preventing blackouts during tests. Dr. Yadav teaches specific visualization techniques that boost confidence and performance.
             </p>
           </div>
        </div>
      </section>


      {/* Side Effects Section */}
      <section className="py-16 md:py-24 bg-red-50">
        <div className="container mx-auto px-4 max-w-5xl">
           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
             Potential Side Effects & Cautions
           </h2>
           <div className="grid md:grid-cols-2 gap-12">
             <div>
               <h3 className="text-2xl font-bold text-red-700 mb-4">Side Effects of Improper Yoga</h3>
               <p className="text-stone-700 mb-4">
                 While yoga is generally safe, practicing it incorrectly can lead to serious injuries. This is why learning from a certified <strong>Yoga Therapist</strong> like Dr. Nand Lal Yadav is crucial.
               </p>
               <ul className="list-disc list-inside text-stone-700 space-y-2">
                 <li><strong>Muscle Strain:</strong> Overstretching without warming up.</li>
                 <li><strong>Joint Injury:</strong> Incorrect alignment in poses like Lotus or Headstand.</li>
                 <li><strong>Spinal Damage:</strong> Forcing backbends beyond capacity.</li>
                 <li><strong>Vertigo:</strong> Doing inversions if you have low BP or ear issues.</li>
               </ul>
             </div>
             <div>
               <h3 className="text-2xl font-bold text-red-700 mb-4">Side Effects of Incorrect Meditation</h3>
               <p className="text-stone-700 mb-4">
                 Meditation brings up suppressed emotions. Without guidance, this can sometimes be overwhelming.
               </p>
               <ul className="list-disc list-inside text-stone-700 space-y-2">
                 <li><strong>Emotional Flooding:</strong> Sudden release of trauma without support.</li>
                 <li><strong>Disassociation:</strong> Feeling detached from reality if not grounded.</li>
                 <li><strong>Headaches:</strong> Straining the eyes or forehead during focus.</li>
                 <li><strong>Lethargy:</strong> Using meditation as an escape rather than awareness.</li>
               </ul>
             </div>
           </div>
        </div>
      </section>

      {/* Tables Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
             Comparison & Benefits Tables
           </h2>

           {/* Table 1: Yoga Styles */}
           <div className="mb-12 overflow-x-auto">
             <h3 className="text-xl font-bold text-stone-800 mb-4">Table 1: Yoga Styles Comparison</h3>
             <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
               <thead className="bg-nature-green text-white">
                 <tr>
                   <th className="p-4">Yoga Style</th>
                   <th className="p-4">Level</th>
                   <th className="p-4">Best For</th>
                   <th className="p-4">Benefits</th>
                   <th className="p-4">Intensity</th>
                 </tr>
               </thead>
               <tbody className="text-stone-700">
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Hatha Yoga</td>
                   <td className="p-4">Beginner</td>
                   <td className="p-4">Foundation</td>
                   <td className="p-4">Balance, flexibility</td>
                   <td className="p-4">Low</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Vinyasa</td>
                   <td className="p-4">Intermediate</td>
                   <td className="p-4">Weight Loss</td>
                   <td className="p-4">Cardio, flow</td>
                   <td className="p-4">High</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Iyengar</td>
                   <td className="p-4">All Levels</td>
                   <td className="p-4">Therapy/Injury</td>
                   <td className="p-4">Alignment, precision</td>
                   <td className="p-4">Medium</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Ashtanga</td>
                   <td className="p-4">Advanced</td>
                   <td className="p-4">Discipline</td>
                   <td className="p-4">Strength, stamina</td>
                   <td className="p-4">Very High</td>
                 </tr>
               </tbody>
             </table>
           </div>

           {/* Table 2: Benefits by Condition */}
           <div className="mb-12 overflow-x-auto">
             <h3 className="text-xl font-bold text-stone-800 mb-4">Table 2: Yoga & Meditation Benefits by Condition</h3>
             <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
               <thead className="bg-nature-green text-white">
                 <tr>
                   <th className="p-4">Condition</th>
                   <th className="p-4">Recommended Yoga</th>
                   <th className="p-4">Meditation Tech.</th>
                   <th className="p-4">Expected Results</th>
                   <th className="p-4">Cautions</th>
                 </tr>
               </thead>
               <tbody className="text-stone-700">
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Diabetes</td>
                   <td className="p-4">Mandukasana</td>
                   <td className="p-4">Om Chanting</td>
                   <td className="p-4">Better Insulin</td>
                   <td className="p-4">Avoid if Hernia</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Hypertension</td>
                   <td className="p-4">Shavasana</td>
                   <td className="p-4">Yoga Nidra</td>
                   <td className="p-4">Lower BP</td>
                   <td className="p-4">No Inversions</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Anxiety</td>
                   <td className="p-4">Balasana</td>
                   <td className="p-4">Mindfulness</td>
                   <td className="p-4">Calmer Mind</td>
                   <td className="p-4">Trauma sensitive</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Back Pain</td>
                   <td className="p-4">Bhujangasana</td>
                   <td className="p-4">Body Scan</td>
                   <td className="p-4">Spine Strength</td>
                   <td className="p-4">Gentle moves</td>
                 </tr>
               </tbody>
             </table>
           </div>

           {/* Table 3: Comparison */}
           <div className="mb-12 overflow-x-auto">
             <h3 className="text-xl font-bold text-stone-800 mb-4">Table 3: Yoga vs Gym vs Physiotherapy</h3>
             <table className="w-full text-left border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
               <thead className="bg-nature-green text-white">
                 <tr>
                   <th className="p-4">Feature</th>
                   <th className="p-4">Yoga</th>
                   <th className="p-4">Gym</th>
                   <th className="p-4">Physiotherapy</th>
                 </tr>
               </thead>
               <tbody className="text-stone-700">
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Focus</td>
                   <td className="p-4">Mind-Body-Spirit</td>
                   <td className="p-4">Muscle/Cardio</td>
                   <td className="p-4">Injury Rehab</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Breath</td>
                   <td className="p-4">Central Focus</td>
                   <td className="p-4">Secondary</td>
                   <td className="p-4">Supportive</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Equipment</td>
                   <td className="p-4">Minimal (Mat)</td>
                   <td className="p-4">Heavy Weights</td>
                   <td className="p-4">Machines/Tools</td>
                 </tr>
                 <tr className="border-b hover:bg-stone-50">
                   <td className="p-4 font-bold">Cost</td>
                   <td className="p-4">Affordable</td>
                   <td className="p-4">Moderate/High</td>
                   <td className="p-4">Per Session</td>
                 </tr>
               </tbody>
             </table>
           </div>

           {/* HTML Chart Block */}
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
             <h3 className="text-xl font-bold text-stone-800 mb-6">Improvement Timeline</h3>
             <div className="flex flex-col md:flex-row justify-between items-end gap-4 h-64">
               <div className="w-full md:w-1/4 bg-nature-green/20 rounded-t-lg relative group h-[25%]">
                 <div className="absolute bottom-0 w-full bg-nature-green text-white text-center py-2 rounded-t-lg group-hover:bg-green-700 transition h-full flex items-end justify-center pb-2">
                    <span className="font-bold">4 Weeks</span>
                 </div>
                 <div className="absolute -top-10 w-full text-center text-sm text-stone-600">Better Sleep</div>
               </div>
               <div className="w-full md:w-1/4 bg-nature-green/40 rounded-t-lg relative group h-[50%]">
                 <div className="absolute bottom-0 w-full bg-nature-green text-white text-center py-2 rounded-t-lg group-hover:bg-green-700 transition h-full flex items-end justify-center pb-2">
                    <span className="font-bold">8 Weeks</span>
                 </div>
                 <div className="absolute -top-10 w-full text-center text-sm text-stone-600">Flexibility</div>
               </div>
               <div className="w-full md:w-1/4 bg-nature-green/60 rounded-t-lg relative group h-[75%]">
                 <div className="absolute bottom-0 w-full bg-nature-green text-white text-center py-2 rounded-t-lg group-hover:bg-green-700 transition h-full flex items-end justify-center pb-2">
                    <span className="font-bold">12 Weeks</span>
                 </div>
                 <div className="absolute -top-10 w-full text-center text-sm text-stone-600">Weight Loss</div>
               </div>
               <div className="w-full md:w-1/4 bg-nature-green/80 rounded-t-lg relative group h-[100%]">
                 <div className="absolute bottom-0 w-full bg-nature-green text-white text-center py-2 rounded-t-lg group-hover:bg-green-700 transition h-full flex items-end justify-center pb-2">
                    <span className="font-bold">6 Months+</span>
                 </div>
                 <div className="absolute -top-10 w-full text-center text-sm text-stone-600">Lifestyle Change</div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl md:text-4xl font-playfair font-bold text-stone-800 mb-12 text-center">
             Frequently Asked Questions (FAQs)
           </h2>
           <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">Is Medical Yoga safe for everyone?</h3>
               <p className="text-stone-600">Yes, Medical Yoga is designed to be safe for all ages and conditions. However, it must be practiced under the guidance of a certified therapist like Dr. Nand Lal Yadav. He customizes the poses to suit your physical limitations, ensuring there is no strain or injury.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">Can Yoga cure high Blood Pressure (BP)?</h3>
               <p className="text-stone-600">Yoga is highly effective in managing hypertension. Poses like Shavasana and pranayamas like Chandra Bhedi cool down the system and lower BP. While it may not &apos;cure&apos; it overnight, regular practice can significantly reduce the need for medication.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">Is Yoga helpful for Thyroid problems?</h3>
               <p className="text-stone-600">Absolutely. Specific throat-stimulating poses like Sarvangasana (Shoulder Stand) and Matsyasana (Fish Pose) massage the thyroid gland, regulating the secretion of thyroxine. It helps in both Hypo and Hyperthyroidism.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">How does meditation help with Insomnia?</h3>
               <p className="text-stone-600">Meditation shifts the brain from the active Beta waves to the relaxed Alpha and Theta waves. This transition is essential for sleep initiation. Techniques like Yoga Nidra provide a deep state of conscious rest that mimics sleep.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">How long does it take to see results?</h3>
               <p className="text-stone-600">You will feel mental relaxation after the very first session. For physical benefits like flexibility and pain relief, consistent practice for 4-8 weeks is usually required. Chronic conditions may take 3-6 months for significant improvement.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">What is the best time to practice Yoga?</h3>
               <p className="text-stone-600">The Brahma Muhurta (early morning before sunrise) is considered ideal as the air is fresh and the mind is calm. However, evening practice (before dinner) is also good for relieving the day&apos;s stress.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">Who should avoid certain asanas?</h3>
               <p className="text-stone-600">People with recent surgeries, hernia, severe back pain, or pregnancy should avoid intense core work and deep twists. Always inform your instructor about your medical history before starting.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">Can I do Yoga if I am stiff?</h3>
               <p className="text-stone-600">Yes! Flexibility is a result of yoga, not a prerequisite. In fact, stiff people benefit the most. We use props like belts and blocks to help you perform poses comfortably.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">Do you offer private home sessions in Lucknow?</h3>
               <p className="text-stone-600">Yes, Dr. Nand Lal Yadav offers private home sessions for patients who are bedridden or prefer privacy. These are premium sessions tailored exclusively for you.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">What should I wear to class?</h3>
               <p className="text-stone-600">Wear loose, comfortable cotton clothing that allows free movement. Avoid tight synthetic wear that restricts blood flow or breathing.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">Is there an age limit for Yoga?</h3>
               <p className="text-stone-600">No, yoga is for everyone from age 5 to 95. We have specific batches for kids, adults, and senior citizens to cater to their specific needs.</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
               <h3 className="font-bold text-lg text-nature-green mb-2">Can Yoga help with weight loss?</h3>
               <p className="text-stone-600">Yes, dynamic forms of yoga like Surya Namaskar burn calories. More importantly, yoga reduces stress eating and regulates metabolism, leading to sustainable weight loss.</p>
             </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-nature-green text-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Transform Your Life?</h2>
           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
             Join the best yoga and meditation classes in Lucknow today. Experience health, happiness, and harmony.
           </p>
           <a href="tel:8115400106" className="bg-white text-nature-green px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition shadow-lg text-lg">
             Call 81154 00106 to Book
           </a>
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
