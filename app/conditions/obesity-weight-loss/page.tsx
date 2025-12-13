import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Scale } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural Weight Loss Treatment in Lucknow | Obesity Management",
  description: "Lose weight naturally in Lucknow with Dr. Neelam Kumari. No crash diets. Sustainable fat loss with Udvartana massage, Detox & Medical Yoga. Proven results.",
  keywords: "weight loss lucknow, natural weight loss, obesity treatment naturopathy, fat loss massage lucknow, udvartana massage, diet chart for weight loss",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/obesity-weight-loss',
  },
  openGraph: {
    title: "Permanent Weight Loss | Lucknow Naturopathy Center",
    description: "Lose fat, not muscle. Sustainable weight loss protocol.",
    url: "https://naturopathlucknow.in/conditions/obesity-weight-loss",
    images: [{ url: "https://naturopathlucknow.in/images/og-weightloss.jpg" }]
  }
};

export default function ObesityPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Obesity & Weight Loss', item: 'https://naturopathlucknow.in/conditions/obesity-weight-loss' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqItems = [
    {
      question: "Will I regain the weight after stopping treatment?",
      answer: "No, if you follow our maintenance plan. Unlike crash diets that slow metabolism, our program BOOSTS metabolism through detox and yoga. We teach you 'how to eat', which is a lifelong skill."
    },
    {
      question: "Do I have to starve myself?",
      answer: "Absolutely not. Starvation puts the body in 'famine mode', causing it to store more fat later. We provide a balanced, filling Indian diet rich in fiber and nutrients. You will eat real food."
    },
    {
      question: "How much weight can I expect to lose?",
      answer: "A healthy, sustainable rate is 4-6 kg per month. Losing faster often means losing water and muscle, which is unhealthy. We focus on fat loss (inches lost) rather than just weight scale numbers."
    },
    {
      question: "Is this suitable for PCOD or Thyroid related weight gain?",
      answer: "Yes, in fact, it is the BEST approach for hormonal weight gain. We address the underlying hormonal imbalance (insulin resistance, hypothyroidism) which is the root cause of stubborn weight."
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
        <section className="relative bg-emerald-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              No Crash Diets • No Pills
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Permanent Weight Loss <br className="hidden md:block" />
              Without Starvation
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl mb-8 font-light">
              Heal your metabolism. Lose fat sustainably with Udvartana Massage, Detox & Medical Yoga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Consultation
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800/50 text-white font-bold rounded-full hover:bg-emerald-800/70 transition-all backdrop-blur-sm border border-white/30 text-lg">
                Our Method
              </a>
            </div>
          </div>
        </section>

        {/* THE PROBLEM WITH DIETS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-stone-900">Why Most Diets Fail You</h2>
                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">It&apos;s not about willpower. It&apos;s about metabolic health.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                    <h3 className="font-bold text-lg text-red-700 mb-3">Metabolic Slowdown</h3>
                    <p className="text-stone-600 text-sm">Crash diets cause your body to panic and slow down metabolism to conserve energy. When you eat normally again, you gain back double.</p>
                </div>
                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                    <h3 className="font-bold text-lg text-red-700 mb-3">Muscle Loss</h3>
                    <p className="text-stone-600 text-sm">Quick weight loss often burns muscle, not fat. Muscle burns calories. Less muscle = easier weight gain in future.</p>
                </div>
                <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                    <h3 className="font-bold text-lg text-red-700 mb-3">Toxin Re-absorption</h3>
                    <p className="text-stone-600 text-sm">Fat stores toxins. When you burn fat without detox, toxins flood your system, causing inflammation and stalling weight loss.</p>
                </div>
            </div>
          </div>
        </section>

        {/* OUR SOLUTION */}
        <section id="how-it-works" className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">The Natural Way</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2 mb-6">We Focus on Fat Loss & Metabolic Reset</h2>

                        <div className="space-y-6">
                            <div className="flex">
                                <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm text-emerald-600"><CheckCircle2 /></div>
                                <div>
                                    <h4 className="font-bold text-stone-900">Udvartana (Powder Massage)</h4>
                                    <p className="text-sm text-stone-600">Ayurvedic dry powder massage that breaks down cellulite and improves lymphatic drainage.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm text-emerald-600"><CheckCircle2 /></div>
                                <div>
                                    <h4 className="font-bold text-stone-900">Detoxification</h4>
                                    <p className="text-sm text-stone-600">Enema and steam baths to flush out toxins released during fat burning.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="mr-4 mt-1 bg-white p-2 rounded-full shadow-sm text-emerald-600"><CheckCircle2 /></div>
                                <div>
                                    <h4 className="font-bold text-stone-900">Hormonal Balance</h4>
                                    <p className="text-sm text-stone-600">Addressing Insulin, Thyroid, and Cortisol levels through specific yoga and diet.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
                        <h3 className="text-xl font-bold mb-6 text-center">Expected Results</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                                <span className="text-stone-600">Weight Loss</span>
                                <span className="font-bold text-emerald-600">4-6 kg / month</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                                <span className="text-stone-600">Waist Reduction</span>
                                <span className="font-bold text-emerald-600">2-3 inches</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                                <span className="text-stone-600">Energy Levels</span>
                                <span className="font-bold text-emerald-600">Significantly Higher</span>
                            </div>
                            <div className="flex justify-between items-center pb-2">
                                <span className="text-stone-600">Metabolism</span>
                                <span className="font-bold text-emerald-600">Reset & Boosted</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                 <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-stone-400">PS</div>
                 <blockquote className="text-2xl font-serif text-stone-800 italic mb-8">
                    &quot;I tried every diet – keto, intermittent fasting. Lost weight but gained it all back. Dr. Neelam Kumari&apos;s approach was different. Lost 12 kg in 3 months and kept it off for 1 year now. Finally learned how to eat properly.&quot;
                 </blockquote>
                 <div className="font-bold text-stone-900">Priya Sharma</div>
                 <div className="text-stone-500 text-sm">Indira Nagar, Lucknow • Lost 12 kgs</div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-stone-50">
             <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-center mb-10">Common Questions</h2>
                <div className="space-y-4">
                    {faqItems.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
                            <h3 className="font-bold text-stone-900 mb-2">{item.question}</h3>
                            <p className="text-stone-600 text-sm">{item.answer}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-emerald-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">Calculate Your Ideal Weight</h2>
                <p className="mb-8 opacity-90">Start your transformation journey today with a free BMI assessment.</p>
                <Link href="/contact" className="bg-white text-emerald-900 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors inline-block">
                    Book Assessment
                </Link>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
