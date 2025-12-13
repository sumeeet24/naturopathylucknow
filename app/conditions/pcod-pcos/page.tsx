import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Flower } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural PCOD/PCOS Treatment Lucknow | Hormonal Balance",
  description: "Reverse PCOD/PCOS naturally in Lucknow with Dr. Neelam Kumari. Regulate periods, stop hair fall & lose weight with Seed Cycling, Yoga & Diet.",
  keywords: "pcod treatment lucknow, pcos cure naturopathy, irregular periods treatment, hormonal imbalance cure lucknow, pcod weight loss",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/pcod-pcos',
  },
  openGraph: {
    title: "PCOD/PCOS Reversal | Lucknow Naturopathy Center",
    description: "Drug-free hormonal balance. Regulate periods naturally.",
    url: "https://naturopathlucknow.in/conditions/pcod-pcos",
    images: [{ url: "https://naturopathlucknow.in/images/og-pcod.jpg" }]
  }
};

export default function PCODPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'PCOD/PCOS', item: 'https://naturopathlucknow.in/conditions/pcod-pcos' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqItems = [
    {
      question: "Can PCOD cause infertility?",
      answer: "Untreated PCOD is a leading cause of infertility due to irregular ovulation. However, by restoring hormonal balance and regular cycles through our program, many of our patients have conceived naturally."
    },
    {
      question: "What is Seed Cycling?",
      answer: "Seed cycling involves eating specific seeds (flax, pumpkin, sesame, sunflower) during different phases of the menstrual cycle to support Estrogen and Progesterone production naturally."
    },
    {
      question: "How long to see regular periods?",
      answer: "Most patients see improvements in their cycle regularity within 2-3 months of consistent treatment. Symptoms like acne and energy levels improve even faster."
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
        <section className="relative bg-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Women&apos;s Health Specialist
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Natural PCOD/PCOS <br className="hidden md:block" />
              Reversal
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-2xl mb-8 font-light">
              Regulate your periods, lose stubborn weight, and restore fertility without birth control pills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-900 font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* SYMPTOMS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-stone-900">More Than Just Irregular Periods</h2>
                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">PCOD is a metabolic and hormonal disorder. We treat the whole system.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    "Irregular/Missed Periods",
                    "Weight Gain",
                    "Acne & Oily Skin",
                    "Hair Thinning",
                    "Mood Swings",
                    "Sugar Cravings",
                    "Facial Hair Growth",
                    "Difficulty Conceiving"
                ].map((item, i) => (
                    <div key={i} className="bg-pink-50 p-6 rounded-xl text-center font-bold text-stone-700 border border-pink-100">
                        {item}
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* TREATMENT */}
        <section className="py-20 bg-stone-50">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-12">Our PCOD Protocol</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-500">
                          <h3 className="font-bold text-xl mb-4 text-stone-900">1. Seed Cycling</h3>
                          <p className="text-stone-600 text-sm mb-4">A natural way to balance estrogen and progesterone using Flax, Pumpkin, Sesame, and Sunflower seeds at specific cycle phases.</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-500">
                          <h3 className="font-bold text-xl mb-4 text-stone-900">2. Fertility Yoga</h3>
                          <p className="text-stone-600 text-sm mb-4">Poses like Butterfly (Baddha Konasana) and Cobra (Bhujangasana) increase blood flow to the ovaries and uterus.</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-pink-500">
                          <h3 className="font-bold text-xl mb-4 text-stone-900">3. Insulin Management</h3>
                          <p className="text-stone-600 text-sm mb-4">Since PCOD is linked to insulin resistance, we prescribe a low-glycemic diet to stabilize blood sugar and reduce cravings.</p>
                      </div>
                 </div>
             </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                 <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-stone-400">AM</div>
                 <blockquote className="text-2xl font-serif text-stone-800 italic mb-8">
                    &quot;We tried to conceive for 4 years. Fertility doctors suggested IVF. Dr. Neelam Kumari designed a PCOD reversal program with diet, seed cycling, and yoga. Month 4: Regular cycles. Month 7: Naturally conceived!&quot;
                 </blockquote>
                 <div className="font-bold text-stone-900">Anjali Mishra</div>
                 <div className="text-stone-500 text-sm">Vikas Nagar, Lucknow • Conceived Naturally</div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-stone-50">
             <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-center mb-10">Common Questions</h2>
                <div className="space-y-4">
                    {faqItems.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                            <h3 className="font-bold text-stone-900 mb-2">{item.question}</h3>
                            <p className="text-stone-600 text-sm">{item.answer}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-pink-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">Heal Your Hormones</h2>
                <p className="mb-8 opacity-90">Book your consultation with Dr. Neelam Kumari today.</p>
                <Link href="/contact" className="bg-white text-pink-900 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors inline-block">
                    Book Consultation
                </Link>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
