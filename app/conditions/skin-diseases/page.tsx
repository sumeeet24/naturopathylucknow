import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Sun } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Skin Disease Natural Treatment Lucknow | Psoriasis & Eczema Cure",
  description: "Effective natural treatment for Psoriasis, Eczema, Acne & Dermatitis in Lucknow. Mud Therapy, Detox & Blood Purification methods. Clear skin naturally.",
  keywords: "skin disease treatment lucknow, psoriasis natural cure, eczema treatment naturopathy, acne removal lucknow, mud therapy for skin",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/skin-diseases',
  },
  openGraph: {
    title: "Skin Disease Cure | Lucknow Naturopathy Center",
    description: "Detox your blood to clear your skin. Natural Dermatitis treatment.",
    url: "https://naturopathlucknow.in/conditions/skin-diseases",
    images: [{ url: "https://naturopathlucknow.in/images/og-skin.jpg" }]
  }
};

export default function SkinPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Skin Diseases', item: 'https://naturopathlucknow.in/conditions/skin-diseases' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqItems = [
    {
      question: "How does mud therapy help skin?",
      answer: "Mud is cooling and draws out toxins from deep within the skin pores. It reduces inflammation, itching, and redness instantly. It is nature's best exfoliator and healer."
    },
    {
      question: "Can Psoriasis be cured?",
      answer: "Psoriasis is an autoimmune condition. While 'cure' is a strong word, we can achieve long-term remission (symptom-free status). By detoxifying the liver and blood, we reduce the autoimmune flare-ups significantly."
    },
    {
      question: "Is this effective for teenage acne?",
      answer: "Yes. Acne is often due to internal heat (Pitta) and constipation. Our treatment clears the gut and cools the blood, stopping new acne formation permanently."
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
        <section className="relative bg-rose-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Clear Skin from Within
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Natural Skin Disease <br className="hidden md:block" />
              Treatment
            </h1>
            <p className="text-xl md:text-2xl text-rose-100 max-w-2xl mb-8 font-light">
              Treat Psoriasis, Eczema, and Acne by purifying your blood. No steroids, just nature&apos;s healing touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-900 font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* SKIN CONDITIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Skin is a Mirror of Your Internal Health</h2>
                     <p className="text-stone-600 mb-6 leading-relaxed">
                         Creams and ointments only suppress the problem from the outside. That&apos;s why skin diseases keep coming back. In Naturopathy, we believe skin issues are the body&apos;s way of throwing out toxins when kidneys and bowels fail to do so.
                     </p>
                     <div className="grid grid-cols-2 gap-4">
                         <div className="flex items-center"><CheckCircle2 className="text-nature-green w-5 h-5 mr-2" /> Psoriasis</div>
                         <div className="flex items-center"><CheckCircle2 className="text-nature-green w-5 h-5 mr-2" /> Eczema</div>
                         <div className="flex items-center"><CheckCircle2 className="text-nature-green w-5 h-5 mr-2" /> Chronic Acne</div>
                         <div className="flex items-center"><CheckCircle2 className="text-nature-green w-5 h-5 mr-2" /> Dermatitis</div>
                         <div className="flex items-center"><CheckCircle2 className="text-nature-green w-5 h-5 mr-2" /> Allergies / Hives</div>
                         <div className="flex items-center"><CheckCircle2 className="text-nature-green w-5 h-5 mr-2" /> Vitiligo (Leucoderma)</div>
                     </div>
                </div>
                <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
                    <h3 className="text-xl font-bold mb-4 text-stone-900">Our Detox Approach</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="font-bold text-rose-600 mr-2">1.</span>
                            <span className="text-stone-700"><strong>Blood Purification:</strong> Using Neem, herbal juices, and steam baths.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-rose-600 mr-2">2.</span>
                            <span className="text-stone-700"><strong>External Healing:</strong> Mud packs to cool inflammation and absorb toxins.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-rose-600 mr-2">3.</span>
                            <span className="text-stone-700"><strong>Liver Support:</strong> A healthy liver equals healthy skin. We focus on liver detox.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-rose-600 mr-2">4.</span>
                            <span className="text-stone-700"><strong>Stress Reduction:</strong> Stress triggers flare-ups. Yoga manages stress levels.</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </section>

        {/* TREATMENTS */}
        <section className="py-20 bg-stone-50">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-12">Core Therapies</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                          <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center text-rose-600">
                              <Sun />
                          </div>
                          <h3 className="font-bold text-xl mb-2">Mud Therapy</h3>
                          <p className="text-stone-600 text-sm">Application of sterile, medicated mud to soothe itching and redness.</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600">
                              <ArrowRight />
                          </div>
                          <h3 className="font-bold text-xl mb-2">Steam Bath</h3>
                          <p className="text-stone-600 text-sm">Opening pores to allow toxins to escape through sweat, lightening the load on skin.</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center text-green-600">
                              <CheckCircle2 />
                          </div>
                          <h3 className="font-bold text-xl mb-2">Diet Therapy</h3>
                          <p className="text-stone-600 text-sm">Elimination of trigger foods (sour, fermented, processed) and introduction of alkaline foods.</p>
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
        <section className="py-16 bg-rose-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">Get Radiant Skin Naturally</h2>
                <p className="mb-8 opacity-90">Book your consultation and stop the itch-scratch cycle today.</p>
                <Link href="/contact" className="bg-white text-rose-900 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors inline-block">
                    Book Consultation
                </Link>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
