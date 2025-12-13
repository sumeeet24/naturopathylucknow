import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural Cancer Supportive Care in Lucknow | Integrative Oncology",
  description: "Holistic cancer support in Lucknow. Boost immunity and manage side effects of chemo/radiation naturally with Dr. Nand Lal Yadav. Detox, Diet & Yoga.",
  keywords: "cancer treatment support lucknow, natural cancer care lucknow, integrative oncology lucknow, naturopathy for cancer patients, immune boosting therapy",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/cancer',
  },
  openGraph: {
    title: "Natural Cancer Supportive Care | Lucknow Naturopathy Center",
    description: "Integrative approach to cancer care. Enhance quality of life and immunity naturally.",
    url: "https://naturopathlucknow.in/conditions/cancer",
    images: [{ url: "https://naturopathlucknow.in/images/og-cancer.jpg" }]
  }
};

export default function CancerPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Cancer Support', item: 'https://naturopathlucknow.in/conditions/cancer' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqs = [
    {
      question: "Can naturopathy cure cancer?",
      answer: "Naturopathy is an excellent supportive therapy. While we do not claim to 'cure' cancer in isolation, our integrative approach helps boost immunity, manage side effects of chemotherapy/radiation, and improve the quality of life significantly. Many patients find it essential for recovery and prevention of recurrence."
    },
    {
      question: "Is it safe to do naturopathy along with chemotherapy?",
      answer: "Yes, absolutely. Our protocols are designed to be complementary. We focus on detoxification and strengthening the body's vital force, which helps you tolerate conventional treatments better and recover faster."
    },
    {
      question: "What kind of diet is recommended for cancer patients?",
      answer: "We advocate an alkaline, antioxidant-rich diet. This includes fresh organic juices (like wheatgrass), raw vegetables, and specific anti-inflammatory foods. We eliminate sugar and processed foods which are known to feed cancer cells."
    },
    {
      question: "How does stress management help in cancer?",
      answer: "Chronic stress suppresses the immune system. Our mind-body therapies like Meditation and Yoga Nidra reduce cortisol levels, allowing your body's natural killer (NK) cells to function more effectively against cancer cells."
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative bg-nature-green text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1579165466741-7f35a4755657?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Integrative Oncology • Holistic Support
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Natural Support for <br className="hidden md:block" />
              Cancer Care & Recovery
            </h1>
            <p className="text-xl md:text-2xl text-nature-light max-w-2xl mb-8 font-light">
              Strengthen your body's fight against cancer. Reduce side effects and improve quality of life with our holistic protocols.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918874206748" className="inline-flex items-center justify-center px-8 py-4 bg-white text-nature-green font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Consultation
              </a>
              <a href="#program-details" className="inline-flex items-center justify-center px-8 py-4 bg-nature-dark/50 text-white font-bold rounded-full hover:bg-nature-dark/70 transition-all backdrop-blur-sm border border-white/30 text-lg">
                View Treatment Plan
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-white/90">
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-nature-light mr-2" /> Immunity Boost</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-nature-light mr-2" /> Detoxification</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-nature-light mr-2" /> Side-Effect Mgmt</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-nature-light mr-2" /> Emotional Healing</div>
            </div>
          </div>
        </section>

        {/* UNDERSTANDING CANCER SUPPORT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">A Holistic Approach to Cancer Care</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Cancer treatment often takes a toll on the body. Chemotherapy and radiation, while targeting cancer cells, also damage healthy cells and weaken the immune system.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Our goal is not to replace your oncologist, but to <strong>support your body</strong> through the process. We focus on rebuilding immunity, managing nausea/fatigue, and creating an internal environment where cancer finds it hard to thrive.
                </p>

                <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-nature-green">
                  <h3 className="text-lg font-bold text-stone-800 mb-2">Our Philosophy</h3>
                  <p className="text-stone-600 text-sm">
                    "Treat the person, not just the tumor." We believe that healing requires addressing the physical toxicity, nutritional deficiencies, and emotional trauma that often accompany cancer.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nature-green/10 rounded-full blur-3xl"></div>
                <div className="bg-stone-100 rounded-2xl p-8 relative z-10 border border-stone-200">
                    <h3 className="text-xl font-bold mb-6 text-center">Benefits of Integrative Care</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                            <span className="text-stone-700">Reduced Nausea & Fatigue</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                            <span className="text-stone-700">Improved Appetite & Digestion</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                            <span className="text-stone-700">Better Sleep & Mental Strength</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                            <span className="text-stone-700">Prevention of Recurrence</span>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR TREATMENT PROTOCOL */}
        <section id="program-details" className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-nature-green font-bold tracking-wider uppercase text-sm">Comprehensive Support</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Our Healing Protocol</h2>
                    <p className="text-stone-600 mt-4 max-w-2xl mx-auto">Gentle, non-invasive therapies to restore your vitality.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3V4a6 6 0 0 0-6 6v0a6 6 0 0 0-6-6V2.3Z"></path><path d="M8 15v6"></path><path d="M16 15v6"></path><path d="M12 15v6"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Detoxification</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Gently removing accumulated toxins (chemo residue) to lighten the burden on the liver and kidneys.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Coffee Enema (Liver Detox)</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Wheatgrass Therapy</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Hydrotherapy</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-2 border-nature-green/10">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-nature-green">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 10.18 0A4 4 0 0 1 18 13.87"></path><path d="M12 17v-4"></path><path d="m9 14 3 3 3-3"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Anti-Cancer Diet</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Nutrition is your first medicine. We design plans to starve cancer cells while nourishing healthy ones.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Alkaline Diet Plan</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Raw Juices & Smoothies</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Metabolic Correction</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Mind-Body Healing</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Harnessing the power of the mind to boost immunity and fight disease.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Yoga Nidra</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Pranayama (Oxygenation)</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Meditation</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/contact" className="inline-flex items-center bg-nature-green text-white font-bold py-4 px-10 rounded-full hover:bg-nature-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-10">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-stone-50 rounded-xl p-6 shadow-sm border border-stone-200">
                            <h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start">
                                <span className="text-nature-green mr-3">Q.</span> {faq.question}
                            </h3>
                            <p className="text-stone-600 ml-8 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-nature-dark text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">You Are Not Alone in This Fight</h2>
                <p className="text-lg text-stone-300 mb-8">
                    Let us support you with the healing power of nature.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact" className="bg-nature-green hover:bg-white hover:text-nature-green text-white font-bold py-4 px-10 rounded-full transition-all text-lg shadow-xl">
                        Book Your Appointment
                    </Link>
                    <a href="tel:+918874206748" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-nature-dark font-bold py-4 px-10 rounded-full transition-all text-lg">
                        Call +91 88742 06748
                    </a>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
