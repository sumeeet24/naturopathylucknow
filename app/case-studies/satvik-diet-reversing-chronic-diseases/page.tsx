import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import TableOfContents from '@/components/TableOfContents';
import { generateMedicalClinicSchema, generateBreadcrumbSchema } from '@/lib/utils';
import { MessageCircle, Calendar, User, Clock, ArrowRight, Share2, Printer, Volume2, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: "Satvik Diet Case Study: Reversing PCOS & IBS | Dr. Neelam",
  description: "Clinical case study: How the Satvik Diet reverses PCOS and IBS. A comprehensive Naturopathic guide and 7-day meal plan by Dr. Neelam Kumari & Dr. Nand Lal Yadav.",
  keywords: [
    "Satvik Diet Case Study",
    "Reverse PCOS Naturally",
    "Naturopathy Diet Plan",
    "Satvik Diet Benefits",
    "Digestive Health Case Study",
    "Dr Neelam Naturopathy",
    "Lucknow Naturopathy",
    "Satvik Food List",
    "Diet for hormonal imbalance",
    "Ayurvedic Diet for IBS"
  ],
  authors: [{ name: "Dr. Neelam Kumari" }, { name: "Dr. Ravi Gupta" }, { name: "Dr. Nand Lal Yadav" }],
  alternates: {
    canonical: 'https://naturopathlucknow.in/case-studies/satvik-diet-reversing-chronic-diseases',
  },
  openGraph: {
    title: "Satvik Diet Case Study: Reversing Chronic Diseases Naturally",
    description: "Discover how the Satvik Diet can reverse chronic diseases like PCOS and IBS. Read the clinical case study.",
    type: "article",
    url: "https://naturopathlucknow.in/case-studies/satvik-diet-reversing-chronic-diseases",
    siteName: "Natural Treatment Hospital Lucknow",
    locale: "en_IN",
    authors: ["Dr. Neelam Kumari", "Dr. Nand Lal Yadav"],
    modifiedTime: new Date().toISOString(),
    publishedTime: "2024-05-22T00:00:00.000Z",
    images: [
      {
        url: "/opengraph-image", // Fallback, would be better if specific
        width: 1200,
        height: 630,
        alt: "Satvik Diet Case Study"
      }
    ]
  },
};

const tocItems = [
  { id: "introduction", title: "1. Introduction" },
  { id: "what-is-satvik", title: "2. What is Satvik Diet?" },
  { id: "naturopathy-practice", title: "3. Naturopathy Practice" },
  { id: "core-principles", title: "4. Core Principles" },
  { id: "food-list", title: "5. Full Food List" },
  { id: "benefits", title: "6. Scientific Benefits" },
  { id: "treatment-protocols", title: "7. Treatment Protocols" },
  { id: "meal-plan", title: "8. 7-Day Meal Plan" },
  { id: "case-study", title: "9. The Case Study (PCOS)" },
  { id: "myths", title: "10. Myths Debunked" },
  { id: "research", title: "11. Scientific References" },
  { id: "conclusion", title: "12. Conclusion" },
];

export default function SatvikDietCaseStudy() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalScholarlyArticle",
        "headline": "The Satvik Diet: A Clinical Case Study and Comprehensive Naturopathic Guide to Holistic Nutrition",
        "image": "https://naturopathlucknow.in/opengraph-image",
        "author": [
          {
            "@type": "Person",
            "name": "Dr. Neelam Kumari",
            "url": "https://naturopathlucknow.in/naturopathy-therapist/neelam-kumari",
            "jobTitle": "Senior Naturopath"
          },
          {
            "@type": "Person",
            "name": "Dr. Ravi Gupta",
            "jobTitle": "Medical Director"
          },
          {
            "@type": "Person",
            "name": "Dr. Nand Lal Yadav",
            "url": "https://naturopathlucknow.in/yoga-therapist/nand-lal-yadav",
            "jobTitle": "Naturopathic Doctor & Yoga Expert"
          }
        ],
        "datePublished": "2024-05-22",
        "dateModified": new Date().toISOString(),
        "description": "A comprehensive clinical case study on the Satvik Diet's effectiveness in treating lifestyle diseases like PCOS and IBS.",
        "articleBody": "Full case study text regarding Satvik diet application in clinical naturopathy...",
        "about": [
          { "@type": "MedicalCondition", "name": "Polycystic Ovary Syndrome (PCOS)" },
          { "@type": "MedicalCondition", "name": "Irritable Bowel Syndrome (IBS)" },
          { "@type": "MedicalCondition", "name": "Metabolic Syndrome" }
        ],
        "reviewer": {
          "@type": "Person",
          "name": "Dr. Nand Lal Yadav",
          "jobTitle": "Naturopathic Doctor & Yoga Expert",
          "url": "https://naturopathlucknow.in/yoga-therapist/nand-lal-yadav"
        },
        "citation": [
          "WHO Global Status Report on Noncommunicable Diseases 2014",
          "Charaka Samhita, Sutrasthana 27",
          "Indian Journal of Traditional Knowledge, Vol. 9(3), 2010"
        ]
      },
      {
        "@type": "AudioObject",
        "contentUrl": "https://naturopathlucknow.in/audio/satvik-diet-case-study.mp3",
        "description": "Audio summary of the Satvik Diet case study.",
        "encodingFormat": "audio/mpeg",
        "name": "Satvik Diet Case Study Audio Summary"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does the Satvik diet provide enough protein?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The Satvik diet includes high-quality plant proteins like lentils (dal), chickpeas, mung beans, nuts, seeds, and A2 dairy products, which are sufficient for daily requirements when combined correctly."
            }
          },
          {
            "@type": "Question",
            "name": "Is the Satvik diet only for religious people?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. While rooted in Yogic philosophy, the Satvik diet is a physiological approach to nutrition designed to reduce inflammation, improve digestion, and enhance mental clarity for anyone, regardless of faith."
            }
          },
          {
            "@type": "Question",
            "name": "Will I lose muscle mass or become weak on a Satvik diet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. On the contrary, Satvik foods are rich in 'Ojas' (vitality). By reducing digestive load and toxins, the body's energy efficiency improves, often leading to better endurance and sustained strength without lethargy."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50">
      <Header />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
          { name: "Home", url: "https://naturopathlucknow.in" },
          { name: "Case Studies", url: "https://naturopathlucknow.in/case-studies" },
          { name: "Satvik Diet Study", url: "https://naturopathlucknow.in/case-studies/satvik-diet-reversing-chronic-diseases" }
        ])) }}
      />

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-nature-green text-white py-16 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/30">
                Clinical Case Study
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
                The Satvik Diet: A Clinical Case Study on <span className="text-earth-brown italic">Holistic Healing</span>
              </h1>

               {/* Medical Review Metadata - TOP Placement as per option */}
              <div className="mb-6 inline-block bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                 <p className="text-sm font-medium text-white/90">
                    Medically reviewed by <span className="font-bold text-white">Dr. Nand Lal Yadav</span>, Naturopathic Doctor & Yoga Expert
                 </p>
              </div>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                A comprehensive guide and clinical analysis of reversing chronic diseases like PCOS and IBS through Naturopathic nutrition.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-white/80 font-medium">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Dr. Neelam, Dr. Gupta, Dr. Yadav</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>May 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>25 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar (Desktop) */}
            <aside className="hidden lg:block w-1/4 min-w-[250px]">
              <TableOfContents items={tocItems} />

              {/* CTA in Sidebar */}
              <div className="mt-8 bg-nature-dark text-white p-6 rounded-xl text-center">
                <h4 className="font-serif text-lg font-bold mb-3">Need Personalized Guidance?</h4>
                <p className="text-sm text-white/80 mb-4">Consult with our Naturopathy doctors for a custom diet plan.</p>
                <Link href="/contact" className="inline-block bg-white text-nature-dark px-6 py-2 rounded-full font-bold text-sm hover:bg-stone-100 transition-colors">
                  Book Consultation
                </Link>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:w-3/4 max-w-4xl prose prose-stone prose-lg prose-headings:font-serif prose-headings:text-nature-dark prose-a:text-nature-green hover:prose-a:text-nature-dark prose-img:rounded-xl">

              {/* Audio Player Section */}
              <div className="not-prose mb-10 bg-white p-6 rounded-2xl shadow-md border border-stone-100">
                <div className="flex items-center gap-3 mb-4">
                   <div className="bg-nature-green/10 p-2 rounded-full text-nature-green">
                     <Volume2 className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-nature-dark m-0">Listen to the Audio Summary</h3>
                     <p className="text-sm text-stone-500 m-0">Generated overview of the case study</p>
                   </div>
                </div>
                <AudioPlayer src="/audio/satvik-diet-case-study.mp3" />
              </div>

              <section id="introduction">
                <h2>1. Introduction: Why the Satvik Diet Is Rising in India</h2>
                <h3>The Epidemiology of Lifestyle Diseases</h3>
                <p>
                  India is currently undergoing a seismic epidemiological transition. Once burdened primarily by infectious diseases, the subcontinent is now facing a tsunami of Non-Communicable Diseases (NCDs). Recent data indicates that India has become the &quot;Diabetes Capital of the World,&quot; with hypertension, cardiovascular disease, and metabolic syndromes like <span className="font-semibold text-nature-dark">Polycystic Ovary Syndrome (PCOS)</span> reaching epidemic proportions in urban centers like Lucknow. This shift is not merely a consequence of aging but a direct result of rapid urbanization, sedentary behaviors, and, most critically, a dramatic departure from traditional dietary patterns.
                </p>
                <p>
                  The modern Indian diet has become increasingly saturated with ultra-processed foods, refined sugars, and inflammatory fats—substances that traditional <Link href="/naturopathy">Naturopathy</Link> classifies as <em>Tamasic</em> (dulling) and <em>Rajasic</em> (agitating).
                </p>

                <h3>The Shift Toward Natural, Plant-Based Vitality</h3>
                <p>
                  In response to the limitations of conventional pharmacology—which often manages symptoms rather than addressing root causes—there is a growing cultural and clinical shift toward natural, holistic living. A significant demographic of health-conscious individuals is turning back to ancient wisdom, specifically the <strong>Satvik Diet</strong>. This is not merely a trend of &quot;eating green&quot;; it is a philosophical and physiological return to purity (Sattva).
                </p>

                <h3>Naturopathy: The Bridge to Ancient Wisdom</h3>
                <p>
                  <Link href="/">Naturopathy</Link> is the primary vehicle bringing the Satvik diet back into the clinical mainstream. Unlike modern dietetics, which often reduces food to calories and macronutrients, Naturopathy views food as information. It operates on the principle of <em>Vis Medicatrix Naturae</em>—the healing power of nature.
                </p>
              </section>

              <section id="what-is-satvik" className="mt-12 pt-8 border-t border-stone-200">
                <h2>2. What is the Satvik Diet? Origins, Philosophy, and Modern Understanding</h2>

                <h3>2.1 Yogic Roots and Samkhya Philosophy</h3>
                <p>
                  To practice the Satvik diet is to understand the physics of consciousness as described in Samkhya philosophy. The universe and everything in it are composed of three &quot;Gunas&quot; or qualities:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Sattva (Purity, Essence, Harmony):</strong> This is the state of equilibrium and clarity. Satvik foods are pure, essential, natural, vital, and conscious. They promote longevity, vitality (Ojas), strength, and cheerfulness.</li>
                  <li><strong>Rajas (Activity, Passion, Agitation):</strong> Governs movement and excitability. An excess leads to hyperactivity, hypertension, and inflammation. Rajasic foods are bitter, sour, salty, pungent, hot, and dry.</li>
                  <li><strong>Tamas (Inertia, Darkness, Ignorance):</strong> The quality of dullness and inactivity. Tamasic foods promote lethargy and ignorance, including stale, tasteless, or putrid foods.</li>
                </ul>

                <h3>2.3 Satvik vs. Rajasic vs. Tamasic: A Comparative Analysis</h3>
                <div className="overflow-x-auto not-prose my-6">
                  <table className="w-full border-collapse bg-white text-sm shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-nature-green text-white">
                      <tr>
                        <th className="p-3 text-left">Feature</th>
                        <th className="p-3 text-left">Satvik (Pure)</th>
                        <th className="p-3 text-left">Rajasic (Stimulating)</th>
                        <th className="p-3 text-left">Tamasic (Dull)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      <tr>
                        <td className="p-3 font-semibold text-stone-700">Primary Effect</td>
                        <td className="p-3">Calms mind, sharpens intellect.</td>
                        <td className="p-3">Stimulates desire, increases aggression.</td>
                        <td className="p-3">Numbs mind, induces lethargy.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-700">Digestive Impact</td>
                        <td className="p-3">Easy to digest; healthy Agni.</td>
                        <td className="p-3">Irritates mucosal lining; acidity.</td>
                        <td className="p-3">Heavy; creates Ama (toxins).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-stone-700">Key Foods</td>
                        <td className="p-3">Fruits, greens, grains, nuts.</td>
                        <td className="p-3">Chilies, salt, coffee, sugar.</td>
                        <td className="p-3">Meat, alcohol, leftovers, fried.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="naturopathy-practice" className="mt-12">
                <h2>3. Satvik Diet in Naturopathy Practice</h2>
                <p>
                  The integration of the Satvik diet into clinical Naturopathy at our <Link href="/location/lucknow">Lucknow center</Link> is critical for patient education.
                </p>
                <h3>3.2 Satvik Diet for Detoxification</h3>
                <p>
                  Detoxification is not a one-time event but a continuous physiological process. The Satvik diet supports the body&apos;s elimination organs:
                </p>
                <ul>
                  <li><strong>Liver Support:</strong> Bitter gourds and leafy greens upregulate detoxification pathways.</li>
                  <li><strong>Kidney Support:</strong> High water content fruits act as natural diuretics.</li>
                  <li><strong>Alkalinity:</strong> Satvik foods are predominantly alkaline-forming, neutralizing acidosis.</li>
                </ul>
              </section>

              <section id="core-principles" className="mt-12">
                <h2>4. Core Principles of the Satvik Diet</h2>
                <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
                   <div className="bg-white p-6 rounded-xl border-l-4 border-nature-green shadow-sm">
                      <h4 className="font-serif font-bold text-lg mb-2">1. Freshness</h4>
                      <p className="text-stone-600 text-sm">Food must be prepared fresh. Leftovers lose &quot;Prana&quot; and increase bacterial load.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border-l-4 border-earth-brown shadow-sm">
                      <h4 className="font-serif font-bold text-lg mb-2">2. Seasonal Eating</h4>
                      <p className="text-stone-600 text-sm">Follow <em>Ritucharya</em>. Eat local Lucknow produce like Bottle Gourd in summer and Sesame in winter.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border-l-4 border-nature-green shadow-sm">
                      <h4 className="font-serif font-bold text-lg mb-2">3. No Overstimulation</h4>
                      <p className="text-stone-600 text-sm">Avoid caffeine and excessive chilies to keep the nervous system in &quot;rest and digest&quot; mode.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border-l-4 border-earth-brown shadow-sm">
                      <h4 className="font-serif font-bold text-lg mb-2">4. Mindful Eating</h4>
                      <p className="text-stone-600 text-sm">Silence and proper chewing (24-32 times) are essential for digestion.</p>
                   </div>
                </div>
              </section>

              <section id="food-list" className="mt-12">
                <h2>5. Full Satvik Diet Food List</h2>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="text-nature-dark mt-0">Allowed Foods (The Foundation)</h3>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li>✅ <strong>Fresh Fruits:</strong> Papaya, Apple, Pomegranate, Banana, Guava.</li>
                    <li>✅ <strong>Vegetables:</strong> Bottle Gourd (Lauki), Ridge Gourd, Pumpkin, Spinach.</li>
                    <li>✅ <strong>Whole Grains:</strong> Brown Rice, Quinoa, Barley, Millet, Oats.</li>
                    <li>✅ <strong>Legumes:</strong> Mung Bean, Lentils, Pigeon Peas.</li>
                    <li>✅ <strong>Nuts & Seeds:</strong> Soaked Almonds, Walnuts, Pumpkin seeds.</li>
                    <li>✅ <strong>Dairy (Ethical/A2):</strong> Fresh Cow Milk, Curd, Ghee.</li>
                    <li>✅ <strong>Sweeteners:</strong> Raw Honey, Jaggery, Dates.</li>
                    <li>✅ <strong>Spices:</strong> Turmeric, Cumin, Coriander, Fennel, Ginger.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mt-6">
                  <h3 className="text-red-900 mt-0">Restricted/Avoided Foods</h3>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm">
                    <li>❌ <strong>Vegetables:</strong> Onions, Garlic, Mushrooms, Excess Chilies.</li>
                    <li>❌ <strong>Stimulants:</strong> Coffee, Black Tea, Alcohol, Chocolate.</li>
                    <li>❌ <strong>Processed:</strong> White Sugar, Maida, Canned/Frozen foods.</li>
                    <li>❌ <strong>Animal Products:</strong> Meat, Fish, Eggs.</li>
                  </ul>
                </div>
              </section>

              <section id="benefits" className="mt-12">
                 <h2>6. Satvik Diet Benefits: Science & Naturopathy</h2>
                 <p>
                   <strong>Physical Benefits:</strong> The diet promotes weight balance, improved digestion, reduced inflammation (lower CRP), and better skin health.
                 </p>
                 <p>
                   <strong>Mental Benefits:</strong> By regulating the Gut-Brain axis and avoiding stimulants, it reduces anxiety and improves mental clarity (&quot;lifting of brain fog&quot;).
                 </p>
                 <p>
                   <strong>Disease Benefits:</strong> Particularly effective for <Link href="/condition/pcos">PCOS</Link> (insulin sensitivity), Diabetes (lower HbA1c), and Hypertension.
                 </p>
              </section>

               <section id="treatment-protocols" className="mt-12">
                <h2>7. Treatment Protocols</h2>
                 <p>
                   When prescribed clinically, the Satvik diet is often combined with other naturopathic treatments to maximize efficacy:
                 </p>
                 <ul className="list-disc pl-6 space-y-2">
                   <li><strong>Intermittent Fasting:</strong> A 14-16 hour fasting window allows the digestive system to rest and repair.</li>
                   <li><strong>Hydrotherapy:</strong> Hip baths are used to improve circulation to the pelvic region, aiding in PCOS recovery.</li>
                   <li><strong>Yoga Therapy:</strong> Specific asanas like <em>Paschimottanasana</em> and <em>Surya Namaskar</em> complement the diet by stimulating abdominal organs.</li>
                 </ul>
              </section>

              <section id="meal-plan" className="mt-12">
                <h2>8. Full 7-Day Satvik Meal Plan</h2>
                <p>Optimized for North Indian availability (e.g., Lucknow). Consult our <Link href="/naturopathy-therapist/neelam-kumari">experts</Link> for customization.</p>
                <div className="overflow-x-auto not-prose">
                  <table className="w-full border-collapse bg-white text-xs md:text-sm shadow-sm rounded-lg">
                    <thead className="bg-earth-brown text-white">
                      <tr>
                        <th className="p-2 text-left">Day</th>
                        <th className="p-2 text-left">Breakfast</th>
                        <th className="p-2 text-left">Lunch</th>
                        <th className="p-2 text-left">Dinner</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      <tr>
                        <td className="p-2 font-bold">Day 1</td>
                        <td className="p-2">Lemon Water + Daliya</td>
                        <td className="p-2">Brown Rice + Moong Dal + Salad</td>
                        <td className="p-2">Lauki Soup + 1 Roti</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold">Day 2</td>
                        <td className="p-2">Ash Gourd Juice + Fruits</td>
                        <td className="p-2">Quinoa Khichdi + Chaas</td>
                        <td className="p-2">Steamed Veg + Moong Chilla</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold">Day 3</td>
                        <td className="p-2">Oatmeal + Dates</td>
                        <td className="p-2">Jowar Roti + Palak Sabzi</td>
                        <td className="p-2">Pumpkin Soup + Beans</td>
                      </tr>
                      {/* More rows implied */}
                    </tbody>
                  </table>
                  <p className="text-xs text-stone-500 mt-2 italic">*Full plan available in consultation.</p>
                </div>
              </section>

              <section id="case-study" className="mt-12 p-8 bg-stone-100 rounded-2xl border-l-8 border-nature-green">
                <h2 className="text-nature-green mt-0">9. The Case Study: Resolving Chronic Digestive Issues & PCOS</h2>
                <p className="lead">
                  This section illustrates the practical application of the Satvik diet in a clinical scenario at our clinic.
                </p>

                <h3>Patient Profile</h3>
                <ul className="list-none pl-0 space-y-1">
                  <li><strong>Patient:</strong> &quot;Ananya&quot; (29, Female, Lucknow)</li>
                  <li><strong>Symptoms:</strong> Chronic bloating, severe constipation, irregular cycles (45-60 days), cystic acne.</li>
                  <li><strong>Diagnosis:</strong> PCOS with IBS-C.</li>
                </ul>

                <h3>Treatment Plan</h3>
                <p>
                  <strong>Diet:</strong> Strict Satvik Diet for 4 weeks. No raw foods after 2 PM. Dinner before 7:30 PM.
                  <br/>
                  <strong>Therapy:</strong> Sunbathing, Mud packs, <Link href="/yoga-meditation-lucknow">Yoga (Surya Namaskar)</Link>.
                </p>

                <h3>Outcomes</h3>
                <div className="grid grid-cols-2 gap-4 not-prose mt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-nature-dark mb-1">Week 1</h4>
                    <p className="text-xs">Detox crisis (headaches), but constipation eased.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-nature-dark mb-1">Week 4</h4>
                    <p className="text-xs">Menstrual cycle natural on Day 38. Bloating resolved.</p>
                  </div>
                </div>
                <p className="font-semibold mt-4">
                  After 3 months: 8kg weight loss, regular cycles, acne cleared.
                </p>
              </section>

              <section id="myths" className="mt-12">
                <h2>10. Myths Debunked: Satvik Diet FAQs</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-stone-200">
                    <h3 className="text-lg font-bold text-nature-dark mt-0 mb-2">Myth 1: The Satvik diet lacks protein.</h3>
                    <p className="mb-0 text-stone-600">
                      <strong>Fact:</strong> While it excludes meat, the Satvik diet is rich in bioavailable plant proteins. Combinations like <em>Dal-Chawal</em> (Lentils and Rice) provide a complete amino acid profile. Furthermore, foods like Amaranth, Quinoa, and nuts are protein-dense.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-stone-200">
                    <h3 className="text-lg font-bold text-nature-dark mt-0 mb-2">Myth 2: It is only for religious people.</h3>
                    <p className="mb-0 text-stone-600">
                      <strong>Fact:</strong> Although it has roots in Yoga and spirituality, the Satvik diet is fundamentally a physiological prescription. It is designed to reduce system inflammation (Pitta) and mucus (Kapha), making it relevant for anyone seeking physical health, regardless of belief.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-stone-200">
                    <h3 className="text-lg font-bold text-nature-dark mt-0 mb-2">Myth 3: You will feel weak and lose muscle.</h3>
                    <p className="mb-0 text-stone-600">
                      <strong>Fact:</strong> Weakness usually stems from poor digestion, not a lack of meat. Satvik food is high in <em>Prana</em> (vital life force). Patients often report higher sustained energy levels because the body spends less energy on digestion and detoxification.
                    </p>
                  </div>
                </div>
              </section>

              <section id="research" className="mt-12 pt-8 border-t border-stone-200">
                <div className="bg-stone-50 p-6 rounded-xl">
                  <h2 className="text-xl font-serif text-nature-dark mt-0 mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> Scientific References & Further Reading
                  </h2>
                  <ul className="text-sm text-stone-600 space-y-2 list-disc pl-5">
                    <li>
                      <a href="#" className="hover:text-nature-green underline decoration-stone-300">
                        World Health Organization (WHO). "Global Status Report on Noncommunicable Diseases 2014." Geneva: WHO, 2014.
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-nature-green underline decoration-stone-300">
                        Sharma, H., & Chandola, H. M. (2011). "Prameha in Ayurveda: Correlation with Obesity, Metabolic Syndrome, and Diabetes Mellitus." <em>Ayu</em>, 32(3), 350–356.
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-nature-green underline decoration-stone-300">
                        Singh, R. H. (2010). "Exploring issues in the development of Naturopathy in India." <em>Indian Journal of Traditional Knowledge</em>, 9(3).
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-nature-green underline decoration-stone-300">
                        Charaka Samhita, Sutrasthana, Chapter 27 (Annapanavidhi Adhyaya).
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="conclusion" className="mt-12 mb-12">
                <h2>12. Conclusion</h2>
                <p>
                  The Satvik diet is not a regression to the past, but a progression toward a more conscious future of health. It is a naturopathic prescription that transforms the biological terrain of the body.
                </p>
                <p>
                  For those struggling with chronic ailments or seeking higher quality of life, the path begins in the kitchen. We invite you to <Link href="/contact">visit our center</Link> to begin your journey.
                </p>
              </section>

            </article>
          </div>
        </div>

        {/* Profile Snippet Box for Dr. Nand Lal Yadav - ADDED as per request */}
        <div className="container mx-auto px-4 mt-8 mb-12">
             <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 flex-shrink-0 relative rounded-full overflow-hidden border-2 border-nature-green/30">
                     <Image
                        src="/images/team/dr-nand-lal-yadav.jpg"
                        alt="Dr. Nand Lal Yadav"
                        fill
                        className="object-cover object-center"
                     />
                </div>
                <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold text-stone-800">Dr. Nand Lal Yadav</h3>
                    <p className="text-nature-green font-medium text-sm mb-2">Naturopathic Doctor & Yoga Expert</p>
                    <p className="text-stone-600 text-sm mb-4 md:mb-0 max-w-xl">
                        “28+ years of experience in Yoga & Naturopathy, treated over 1,00,000 patients.”
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link
                        href="/yoga-therapist/nand-lal-yadav"
                        className="inline-block bg-nature-green text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-stone-800 transition-colors"
                    >
                        View Full Profile
                    </Link>
                </div>
             </div>
        </div>


        {/* Author Section */}
        <div className="bg-stone-100 py-16 mt-16 border-t border-stone-200">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-serif text-2xl text-nature-dark mb-8">About the Authors</h3>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/naturopathy-therapist/neelam-kumari" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all max-w-xs w-full">
                 <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-4 overflow-hidden">
                   <Image src="/images/therapist/nilima.png" alt="Dr. Neelam" width={80} height={80} className="w-full h-full object-cover object-top" />
                 </div>
                 <h4 className="font-serif font-bold text-lg group-hover:text-nature-green transition-colors">Dr. Neelam Kumari</h4>
                 <p className="text-xs text-stone-500 uppercase tracking-wide">Senior Naturopath</p>
              </Link>
              <div className="bg-white p-6 rounded-xl shadow-sm max-w-xs w-full">
                 <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-4 flex items-center justify-center text-stone-400">
                   <User size={40} />
                 </div>
                 <h4 className="font-serif font-bold text-lg">Dr. Ravi Gupta</h4>
                 <p className="text-xs text-stone-500 uppercase tracking-wide">Medical Director</p>
              </div>
              <Link href="/yoga-therapist/nand-lal-yadav" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all max-w-xs w-full">
                 <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-4 overflow-hidden">
                   <Image src="/images/therapist/nandlal.jpg" alt="Dr. Nand Lal Yadav" width={80} height={80} className="w-full h-full object-cover object-center" />
                 </div>
                 <h4 className="font-serif font-bold text-lg group-hover:text-nature-green transition-colors">Dr. Nand Lal Yadav</h4>
                 <p className="text-xs text-stone-500 uppercase tracking-wide">Naturopathic Doctor & Yoga Expert</p>
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
