import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Utensils } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Digestive Disorders Natural Treatment Lucknow | IBS & Acidity Cure",
  description: "Cure IBS, Constipation, Acidity & Gas naturally in Lucknow. Colon Hydrotherapy, Mud Packs & Gut Healing Diet. Restore your digestion without antacids.",
  keywords: "digestive treatment lucknow, ibs cure naturopathy, acidity natural treatment, constipation relief lucknow, colon hydrotherapy lucknow",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/digestive-disorders',
  },
  openGraph: {
    title: "Gut Health & Digestion Cure | Lucknow Naturopathy Center",
    description: "Permanent relief from Acidity, IBS, and Constipation.",
    url: "https://naturopathlucknow.in/conditions/digestive-disorders",
    images: [{ url: "https://naturopathlucknow.in/images/og-digestion.jpg" }]
  }
};

export default function DigestivePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Digestive Disorders', item: 'https://naturopathlucknow.in/conditions/digestive-disorders' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqItems = [
    {
      question: "Is colon hydrotherapy painful?",
      answer: "Not at all. It is a gentle washing of the colon with warm water. Most patients find it relieving and feel 'lighter' immediately after. It is conducted by trained therapists in a private, hygienic setting."
    },
    {
      question: "Can naturopathy cure chronic acidity?",
      answer: "Yes. Antacids only suppress acid temporarily. We heal the gut lining, correct the pH balance through diet, and remove the root cause (toxins/stress), providing permanent relief."
    },
    {
      question: "How does it help with IBS?",
      answer: "IBS is often linked to stress and gut inflammation. Our protocol combines stress management (Shirodhara/Yoga) with a soothing gut-healing diet and probiotics to calm the irritable bowel."
    },
    {
      question: "Do I need to fast?",
      answer: "In some severe cases, short therapeutic fasting (on juices or fruits) gives the digestive system much-needed rest to repair itself. This is always supervised by our doctors."
    }
  ];

  const faqSchema = generateFAQSchema(faqItems);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative bg-orange-800 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532009877282-3340270e0529?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Heal Your Gut
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Digestive Disorders <br className="hidden md:block" />
              Natural Treatment
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mb-8 font-light">
              Stop living with bloating, acidity, and IBS. Restore your digestion with Colon Hydrotherapy and Gut Healing Diet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-900 font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Gut Assessment
              </Link>
            </div>
          </div>
        </section>

        {/* CONDITIONS LIST */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-stone-900">What We Treat</h2>
                <p className="text-stone-600 mt-4">Digestive health is the foundation of all health.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Chronic Acidity (GERD)", "IBS (Irritable Bowel)", "Severe Constipation", "Gas & Bloating", "Indigestion", "Piles (Hemorrhoids)", "Fatty Liver", "Ulcers"].map((item, i) => (
                    <div key={i} className="bg-orange-50 p-6 rounded-xl text-center font-bold text-stone-700 border border-orange-100">
                        {item}
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* TREATMENT PROTOCOL */}
        <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div>
                         <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Our 3-Step Gut Restoration</h2>
                         <div className="space-y-8">
                             <div className="flex">
                                 <div className="w-12 h-12 bg-nature-green text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">1</div>
                                 <div>
                                     <h3 className="text-xl font-bold text-stone-900 mb-2">Cleanse (Detox)</h3>
                                     <p className="text-stone-600">We remove accumulated waste and toxins using Enema, Colon Hydrotherapy, and Kunjal Kriya.</p>
                                 </div>
                             </div>
                             <div className="flex">
                                 <div className="w-12 h-12 bg-nature-green text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">2</div>
                                 <div>
                                     <h3 className="text-xl font-bold text-stone-900 mb-2">Cool & Heal</h3>
                                     <p className="text-stone-600">Mud packs on the abdomen absorb excess heat (Pitta) and reduce inflammation in the stomach and liver lining.</p>
                                 </div>
                             </div>
                             <div className="flex">
                                 <div className="w-12 h-12 bg-nature-green text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">3</div>
                                 <div>
                                     <h3 className="text-xl font-bold text-stone-900 mb-2">Rebuild</h3>
                                     <p className="text-stone-600">We reintroduce healthy bacteria with probiotics and a specific alkaline diet to restore long-term digestive fire.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500">
                         <h3 className="text-xl font-bold mb-6 text-center">Patient Result: Acidity Cured</h3>
                         <div className="mb-6">
                             <p className="text-stone-600 italic">
                                &quot;I had severe acidity for 8 years. Was on Pantoprazole daily. Dr. Yadav&apos;s mud therapy and diet changes cleared my stomach completely. Haven&apos;t taken antacid in 6 months now!&quot;
                             </p>
                             <div className="mt-4 font-bold text-stone-900">- Vikram Singh, Jankipuram</div>
                         </div>
                         <Link href="/contact" className="block w-full text-center bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-colors">
                            Get Similar Results
                         </Link>
                     </div>
                 </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
             <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-center mb-10">Common Questions</h2>
                <div className="space-y-4">
                    {faqItems.map((item, idx) => (
                        <div key={idx} className="bg-stone-50 p-6 rounded-lg shadow-sm border border-stone-100">
                            <h3 className="font-bold text-stone-900 mb-2">{item.question}</h3>
                            <p className="text-stone-600 text-sm">{item.answer}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-orange-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">Eat Without Fear</h2>
                <p className="mb-8 opacity-90">Enjoy your favorite foods again with a healthy, strong digestive system.</p>
                <Link href="/contact" className="bg-white text-orange-900 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors inline-block">
                    Book Consultation
                </Link>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
