import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Hypertension Treatment in Lucknow | High BP Natural Cure",
  description: "Control High Blood Pressure naturally in Lucknow. Proven naturopathy treatment for Hypertension using Shirodhara, Diet & Yoga. Drug-free BP management.",
  keywords: "hypertension treatment lucknow, high blood pressure cure lucknow, naturopathy for high bp, shirodhara therapy lucknow, natural bp control",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/hypertension-high-bp',
  },
  openGraph: {
    title: "High BP Natural Treatment | Lucknow Naturopathy Center",
    description: "Drug-free hypertension management. Reduce BP naturally.",
    url: "https://naturopathlucknow.in/conditions/hypertension-high-bp",
    images: [{ url: "https://naturopathlucknow.in/images/og-hypertension.jpg" }]
  }
};

export default function HypertensionPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Hypertension', item: 'https://naturopathlucknow.in/conditions/hypertension-high-bp' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqItems = [
    {
      question: "Can I stop my BP medicine immediately?",
      answer: "No. Stopping BP medication abruptly is dangerous and can cause a rebound spike. We work alongside your current medication. As your BP naturally normalizes through our therapies, your doctor can safely reduce the dosage."
    },
    {
      question: "How does Shirodhara help in High BP?",
      answer: "Shirodhara (pouring warm herbal oil on forehead) directly calms the nervous system and reduces cortisol (stress hormone). Since stress is a major cause of hypertension, this therapy is highly effective in lowering BP."
    },
    {
      question: "What is the diet for High BP?",
      answer: "We prescribe a DASH-style diet adapted to Indian cuisine. It is rich in Potassium (fruits like banana, coconut water), Magnesium (leafy greens), and low in Sodium (salt). We also focus on eliminating processed foods."
    },
    {
      question: "Is this effective for hereditary hypertension?",
      answer: "Yes. While genetics load the gun, lifestyle pulls the trigger. Even with a family history, you can maintain normal BP through proper diet, stress management, and yoga."
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
        <section className="relative bg-red-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Drug-Free BP Management
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Natural Hypertension (High BP) <br className="hidden md:block" />
              Treatment in Lucknow
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-2xl mb-8 font-light">
              Don&apos;t just suppress your BP with lifelong pills. Heal your heart naturally with Shirodhara, DASH Diet & Medical Yoga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-900 font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book BP Assessment
              </Link>
              <a href="#protocol" className="inline-flex items-center justify-center px-8 py-4 bg-red-800/50 text-white font-bold rounded-full hover:bg-red-800/70 transition-all backdrop-blur-sm border border-white/30 text-lg">
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Silent Killer: Why You Must Act Now</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Hypertension is often called the &quot;Silent Killer&quot; because it has no obvious symptoms until it&apos;s too late. Uncontrolled High BP is the leading cause of <strong>Heart Attack, Stroke, and Kidney Failure</strong>.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Conventional medicine relies on lifelong medication (beta-blockers, ACE inhibitors). While they lower the numbers, they don&apos;t address the <strong>Stress, Arterial Stiffness, and Dietary habits</strong> causing the pressure.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                        <span className="block text-2xl font-bold text-red-600">10-15</span>
                        <span className="text-xs text-stone-500 uppercase">mmHg Drop</span>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                        <span className="block text-2xl font-bold text-red-600">30-40%</span>
                        <span className="text-xs text-stone-500 uppercase">Stress Reduction</span>
                    </div>
                </div>
              </div>
              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-stone-900">Our Natural Approach</h3>
                  <ul className="space-y-4">
                      <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-nature-green mr-3 flex-shrink-0" />
                          <span className="text-stone-700"><strong>Deep Stress Relief:</strong> Therapies like Shirodhara directly lower cortisol.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-nature-green mr-3 flex-shrink-0" />
                          <span className="text-stone-700"><strong>Dietary Correction:</strong> Indian DASH diet to balance sodium/potassium.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-nature-green mr-3 flex-shrink-0" />
                          <span className="text-stone-700"><strong>Arterial Health:</strong> Yoga and massage to improve flexibility of blood vessels.</span>
                      </li>
                      <li className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-nature-green mr-3 flex-shrink-0" />
                          <span className="text-stone-700"><strong>Heart-Rate Variability:</strong> Pranayama to improve autonomic nervous system balance.</span>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROTOCOL */}
        <section id="protocol" className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Our Protocol</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Natural Hypertension Treatment Plan</h2>
                    <p className="text-stone-600 mt-4 max-w-2xl mx-auto">A holistic combination of therapies designed to relax blood vessels and the mind.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Therapy 1 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                        <div className="h-48 bg-stone-200 relative">
                             {/* Image placeholder */}
                             <div className="absolute inset-0 bg-nature-green/10 flex items-center justify-center text-nature-green font-bold">Shirodhara Therapy</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-nature-green transition-colors">Shirodhara & Massage</h3>
                            <p className="text-stone-600 text-sm mb-4">
                                Ancient Ayurvedic technique of pouring warm oil on the forehead. Proven to activate the parasympathetic nervous system and lower BP immediately.
                            </p>
                        </div>
                    </div>

                    {/* Therapy 2 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                        <div className="h-48 bg-stone-200 relative">
                             <div className="absolute inset-0 bg-nature-green/10 flex items-center justify-center text-nature-green font-bold">DASH Diet (Indian)</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-nature-green transition-colors">Dietary Therapy</h3>
                            <p className="text-stone-600 text-sm mb-4">
                                Specific foods that act as natural vasodilators. Rich in potassium, magnesium, and fiber. Low sodium, heart-healthy fats.
                            </p>
                        </div>
                    </div>

                    {/* Therapy 3 */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                        <div className="h-48 bg-stone-200 relative">
                             <div className="absolute inset-0 bg-nature-green/10 flex items-center justify-center text-nature-green font-bold">Medical Yoga</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-nature-green transition-colors">Yoga for Hypertension</h3>
                            <p className="text-stone-600 text-sm mb-4">
                                Gentle restorative yoga (Shavasana, Viparita Karani) and calming Pranayama (Chandra Bhedana) to reduce cardiac workload.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                 <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-stone-400">SK</div>
                 <blockquote className="text-2xl font-serif text-stone-800 italic mb-8">
                    &quot;I was on 3 BP medicines for 5 years. BP was still 150/95. After Dr. Nand Lal&apos;s treatment, I&apos;m now medication-free with BP consistently at 125/80. The Shirodhara and breathing exercises were game-changers.&quot;
                 </blockquote>
                 <div className="font-bold text-stone-900">Suresh Kumar</div>
                 <div className="text-stone-500 text-sm">Gomti Nagar, Lucknow</div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-stone-50">
             <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-center mb-10">Common Questions</h2>
                <div className="space-y-4">
                    {faqItems.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold text-stone-900 mb-2">{item.question}</h3>
                            <p className="text-stone-600 text-sm">{item.answer}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-nature-green text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">Protect Your Heart Naturally</h2>
                <p className="mb-8 opacity-90">Book your appointment today and start your journey to a medication-free life.</p>
                <Link href="/contact" className="bg-white text-nature-green font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors inline-block">
                    Book Consultation
                </Link>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
