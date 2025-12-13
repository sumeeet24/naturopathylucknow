import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural Thyroid Treatment Lucknow | Hypothyroid & Hyperthyroid Cure",
  description: "Treat Thyroid disorders naturally in Lucknow with Dr. Neelam Kumari. Regulate TSH levels without lifetime medication using Medical Yoga (Sarvangasana) & Diet.",
  keywords: "thyroid treatment lucknow, hypothyroid cure natural, hyperthyroid treatment, thyroid yoga lucknow, tsh control naturally",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/thyroid-disorders',
  },
  openGraph: {
    title: "Thyroid Balance Naturally | Lucknow Naturopathy Center",
    description: "Balance your hormones without pills. Proven Thyroid protocol.",
    url: "https://naturopathlucknow.in/conditions/thyroid-disorders",
    images: [{ url: "https://naturopathlucknow.in/images/og-thyroid.jpg" }]
  }
};

export default function ThyroidPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Thyroid Disorders', item: 'https://naturopathlucknow.in/conditions/thyroid-disorders' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqItems = [
    {
      question: "Can Yoga cure Thyroid?",
      answer: "Specific yoga poses like Sarvangasana (Shoulder Stand) and Halasana place gentle pressure on the thyroid gland, stimulating blood flow and regulating hormone production. Regular practice can normalize TSH levels."
    },
    {
      question: "Will I have to take thyroxine forever?",
      answer: "Not necessarily. Many of our patients have successfully tapered off their medication under medical supervision after their natural thyroid function improved through our protocol."
    },
    {
      question: "What diet is good for Hypothyroid?",
      answer: "We recommend a diet rich in Selenium and Iodine (from natural sources). We also advise avoiding goitrogens (like raw cabbage/cauliflower) and soy products which can interfere with thyroid function."
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
        <section className="relative bg-violet-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Balance Hormones Naturally
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Natural Thyroid Disorder <br className="hidden md:block" />
              Treatment
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 max-w-2xl mb-8 font-light">
              Stop relying solely on Thyroxine. Reactivate your thyroid gland with Medical Yoga and Diet Therapy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-violet-900 font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Thyroid Check
              </Link>
            </div>
          </div>
        </section>

        {/* THYROID FACTS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-stone-900">Understanding Thyroid Imbalance</h2>
                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Thyroid isn&apos;t just about weight gain. It affects your energy, mood, and heart.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-violet-50 p-8 rounded-xl border border-violet-100">
                    <h3 className="text-xl font-bold text-violet-900 mb-4">Hypothyroidism (Underactive)</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-violet-500" /> Unexplained weight gain</li>
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-violet-500" /> Constant fatigue & lethargy</li>
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-violet-500" /> Hair loss & dry skin</li>
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-violet-500" /> Depression & mood swings</li>
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-violet-500" /> Sensitivity to cold</li>
                    </ul>
                </div>
                <div className="bg-orange-50 p-8 rounded-xl border border-orange-100">
                    <h3 className="text-xl font-bold text-orange-900 mb-4">Hyperthyroidism (Overactive)</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> Sudden weight loss</li>
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> Rapid heartbeat & palpitations</li>
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> Anxiety & irritability</li>
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> Tremors in hands</li>
                        <li className="flex items-center text-stone-700"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> Sensitivity to heat</li>
                    </ul>
                </div>
            </div>
          </div>
        </section>

        {/* TREATMENT */}
        <section className="py-20 bg-stone-50">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-12">Our Thyroid Protocol</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-violet-500">
                          <h3 className="font-bold text-xl mb-4 text-stone-900">1. Medical Yoga</h3>
                          <p className="text-stone-600 text-sm mb-4">Specific asanas like Sarvangasana and Matsyasana massage the thyroid gland, increasing circulation and stimulating hormone production.</p>
                          <ul className="text-sm font-medium text-violet-600">
                              <li>• Shoulder Stand</li>
                              <li>• Fish Pose</li>
                              <li>• Ujjayi Pranayama</li>
                          </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-violet-500">
                          <h3 className="font-bold text-xl mb-4 text-stone-900">2. Diet Therapy</h3>
                          <p className="text-stone-600 text-sm mb-4">We remove inflammatory foods (gluten, sugar) and add selenium-rich foods. For Hypothyroid, we avoid raw goitrogens.</p>
                          <ul className="text-sm font-medium text-violet-600">
                              <li>• Selenium-rich diet</li>
                              <li>• Anti-inflammatory</li>
                              <li>• Gut health focus</li>
                          </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-violet-500">
                          <h3 className="font-bold text-xl mb-4 text-stone-900">3. Stress Management</h3>
                          <p className="text-stone-600 text-sm mb-4">Chronic stress disrupts the HPA axis, affecting thyroid function. We use Shirodhara and Meditation to lower cortisol.</p>
                          <ul className="text-sm font-medium text-violet-600">
                              <li>• Shirodhara</li>
                              <li>• Yoga Nidra</li>
                              <li>• Deep Relaxation</li>
                          </ul>
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
        <section className="py-16 bg-violet-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">Regain Your Energy</h2>
                <p className="mb-8 opacity-90">Book your appointment and start treating the root cause of thyroid imbalance.</p>
                <Link href="/contact" className="bg-white text-violet-900 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors inline-block">
                    Book Consultation
                </Link>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
