import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Brain } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural Anxiety & Stress Treatment Lucknow | Depression Cure",
  description: "Treat Anxiety, Depression & Insomnia naturally in Lucknow. Shirodhara Therapy, Meditation & Yoga Nidra for mental wellness without antidepressants.",
  keywords: "anxiety treatment lucknow, depression cure naturopathy, shirodhara lucknow, mental health clinic natural, stress management lucknow",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/stress-anxiety',
  },
  openGraph: {
    title: "Mental Wellness Naturally | Lucknow Naturopathy Center",
    description: "Drug-free Anxiety and Stress relief.",
    url: "https://naturopathlucknow.in/conditions/stress-anxiety",
    images: [{ url: "https://naturopathlucknow.in/images/og-stress.jpg" }]
  }
};

export default function StressPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Stress & Anxiety', item: 'https://naturopathlucknow.in/conditions/stress-anxiety' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqItems = [
    {
      question: "Can I treat severe depression naturally?",
      answer: "For mild to moderate depression, naturopathy is extremely effective. For severe clinical depression, we recommend using it as a complementary therapy alongside your psychiatrist's treatment to improve outcomes and reduce side effects."
    },
    {
      question: "How does Shirodhara help anxiety?",
      answer: "Shirodhara (pouring warm oil on the forehead) creates a rhythmic sensation that deeply relaxes the nervous system, stimulates the pituitary gland, and lowers stress hormones like cortisol almost instantly."
    },
    {
      question: "Will Yoga help me sleep?",
      answer: "Yes. Yoga Nidra (Yogic Sleep) and Pranayama (Brahmari) are specifically designed to treat insomnia. They activate the parasympathetic nervous system, preparing the body for deep, restorative sleep."
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
        <section className="relative bg-teal-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Find Your Inner Peace
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Natural Stress & Anxiety <br className="hidden md:block" />
              Treatment
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-2xl mb-8 font-light">
              Heal your mind without medication. Shirodhara, Meditation & Yoga Nidra for lasting mental wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-900 font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Mental Wellness Session
              </Link>
            </div>
          </div>
        </section>

        {/* SYMPTOMS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-stone-900">Mental Health is Physical Health</h2>
                <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Stress manifests in the body. We treat both.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    "Chronic Anxiety",
                    "Insomnia / Sleeplessness",
                    "Panic Attacks",
                    "Depression (Mild/Moderate)",
                    "Burnout",
                    "Brain Fog",
                    "Constant Fatigue",
                    "Irritability"
                ].map((item, i) => (
                    <div key={i} className="bg-teal-50 p-6 rounded-xl text-center font-bold text-stone-700 border border-teal-100">
                        {item}
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* TREATMENT */}
        <section className="py-20 bg-stone-50">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-12">Our Mental Wellness Protocol</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                      {/* Therapy 1 */}
                      <div className="bg-white rounded-xl overflow-hidden shadow-md group">
                          <div className="h-48 bg-stone-200 relative">
                               <div className="absolute inset-0 bg-teal-900/10 flex items-center justify-center text-teal-900 font-bold">Shirodhara</div>
                          </div>
                          <div className="p-6">
                              <h3 className="font-bold text-xl mb-2 text-stone-900">Shirodhara Therapy</h3>
                              <p className="text-stone-600 text-sm">Pouring warm herbal oil over the forehead to calm the mind and reduce cortisol. Proven to treat insomnia.</p>
                          </div>
                      </div>
                      {/* Therapy 2 */}
                      <div className="bg-white rounded-xl overflow-hidden shadow-md group">
                          <div className="h-48 bg-stone-200 relative">
                               <div className="absolute inset-0 bg-teal-900/10 flex items-center justify-center text-teal-900 font-bold">Yoga Nidra</div>
                          </div>
                          <div className="p-6">
                              <h3 className="font-bold text-xl mb-2 text-stone-900">Yoga Nidra</h3>
                              <p className="text-stone-600 text-sm">A guided deep relaxation technique that provides the rest equivalent to 4 hours of deep sleep in just 45 minutes.</p>
                          </div>
                      </div>
                      {/* Therapy 3 */}
                      <div className="bg-white rounded-xl overflow-hidden shadow-md group">
                          <div className="h-48 bg-stone-200 relative">
                               <div className="absolute inset-0 bg-teal-900/10 flex items-center justify-center text-teal-900 font-bold">Nutritional Psychiatry</div>
                          </div>
                          <div className="p-6">
                              <h3 className="font-bold text-xl mb-2 text-stone-900">Mood-Boosting Diet</h3>
                              <p className="text-stone-600 text-sm">Gut health affects brain health. We use probiotics and Omega-3 rich foods to naturally boost Serotonin.</p>
                          </div>
                      </div>
                 </div>
             </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                 <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-stone-400">SG</div>
                 <blockquote className="text-2xl font-serif text-stone-800 italic mb-8">
                    &quot;I was on antidepressants for 2 years. Felt like a zombie. Dr. Neelam&apos;s Shirodhara sessions and meditation practice brought me back to life. I&apos;m medication-free for 8 months now.&quot;
                 </blockquote>
                 <div className="font-bold text-stone-900">Suman Gupta</div>
                 <div className="text-stone-500 text-sm">Hazratganj, Lucknow • Anxiety</div>
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
        <section className="py-16 bg-teal-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">You Don&apos;t Have to Suffer Alone</h2>
                <p className="mb-8 opacity-90">Book your appointment for a compassionate, natural approach to mental wellness.</p>
                <Link href="/contact" className="bg-white text-teal-900 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors inline-block">
                    Book Consultation
                </Link>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
