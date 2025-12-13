import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural Fatty Liver & Cirrhosis Treatment in Lucknow | Liver Detox",
  description: "Reverse Fatty Liver (NAFLD) and manage Cirrhosis naturally. Liver detox, alcohol de-addiction, and hepatoprotective diet by Dr. Nand Lal Yadav.",
  keywords: "fatty liver treatment lucknow, liver cirrhosis cure naturopathy, nafld reversal, liver detox lucknow, natural liver tonic",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/fatty-liver-cirrhosis',
  },
  openGraph: {
    title: "Liver Health & Detox | Lucknow Naturopathy Center",
    description: "Reverse fatty liver and restore liver function naturally.",
    url: "https://naturopathlucknow.in/conditions/fatty-liver-cirrhosis",
    images: [{ url: "https://naturopathlucknow.in/images/og-liver.jpg" }]
  }
};

export default function LiverPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Liver Health', item: 'https://naturopathlucknow.in/conditions/fatty-liver-cirrhosis' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqs = [
    {
      question: "Can Grade 2/3 Fatty Liver be reversed?",
      answer: "Yes, absolutely. The liver is the only organ capable of regenerating itself. With strict dietary changes, weight loss, and our detox protocols, most patients reverse fatty liver completely within 3-6 months."
    },
    {
      question: "I have early cirrhosis. Can it be cured?",
      answer: "Cirrhosis involves scarring of liver tissue. While the scar tissue cannot be removed, we can halt the progression, prevent further damage, and maximize the function of the remaining healthy liver cells, allowing you to live a normal life."
    },
    {
      question: "Do you help with alcohol de-addiction?",
      answer: "Yes. Treating liver disease often requires stopping alcohol. We provide counseling, stress management, and substitution therapies to help you quit alcohol and manage withdrawal symptoms naturally."
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
        <section className="relative bg-amber-50 text-stone-800 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-200 text-amber-800 text-sm font-bold mb-4">
              Liver Detox • Regeneration
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-stone-900">
              Reverse Fatty Liver & <br className="hidden md:block" />
              Restore Liver Health
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mb-8 font-light">
              Your liver has the power to heal itself. We just give it the right environment. Natural treatment for NAFLD, Cirrhosis, and Jaundice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918874206748" className="inline-flex items-center justify-center px-8 py-4 bg-nature-green text-white font-bold rounded-full hover:bg-nature-dark transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Consultation
              </a>
              <a href="#program-details" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-stone-200 text-stone-700 font-bold rounded-full hover:bg-stone-50 transition-all text-lg">
                View Detox Plan
              </a>
            </div>
          </div>
        </section>

        {/* UNDERSTANDING LIVER HEALTH */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Silent Epidemic: Fatty Liver</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Non-Alcoholic Fatty Liver Disease (NAFLD) is becoming common due to poor diet and sedentary lifestyle. If left untreated, it progresses to NASH and finally Cirrhosis.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  The good news? The liver is a resilient organ. By removing the toxic load (processed foods, alcohol, medications) and introducing hepatoprotective therapies, we can flush out the fat and reverse the damage.
                </p>

                <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-400">
                  <h3 className="text-lg font-bold text-stone-800 mb-2">We Treat</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-stone-600">
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Fatty Liver (Grades 1-3)</span>
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Early Cirrhosis</span>
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Jaundice / Hepatitis</span>
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Alcoholic Liver Disease</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                 <div className="bg-stone-100 rounded-2xl p-8 relative z-10 border border-stone-200">
                    <h3 className="text-xl font-bold mb-6 text-center">Liver Detox Benefits</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Improved Digestion & Metabolism</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Clearer Skin (Acne reduction)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Increased Energy Levels</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Weight Loss</span>
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
                    <span className="text-nature-green font-bold tracking-wider uppercase text-sm">Deep Cleansing</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">The Liver Rescue Protocol</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Therapeutic Fasting</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Giving the liver a &apos;holiday&apos; to repair itself.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Juice Fasting</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Fruit Diet</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Intermittent Fasting</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-2 border-nature-green/10">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-nature-green">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16.24 7.76-2.12 2.12"></path><path d="M6 18c0 2.22 3.58 4 8 4s8-1.78 8-4V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4Z"></path><path d="M10 12c-2.33.67-4 1.83-4 3.17 0 2.22 3.58 4 8 4s8-1.78 8-4c0-1.34-1.67-2.5-4-3.17"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Detox Therapies</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Physical methods to draw out toxins.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Mud Packs on Liver</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Enema / Colon Hydrotherapy</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Hip Bath</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 10.18 0A4 4 0 0 1 18 13.87"></path><path d="M12 17v-4"></path><path d="m9 14 3 3 3-3"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Specific Diet</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Foods that actively support liver function.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Zero Oil Cooking</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Turmeric & Garlic</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Leafy Greens</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/contact" className="inline-flex items-center bg-nature-green text-white font-bold py-4 px-10 rounded-full hover:bg-nature-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Start Your Liver Detox <ArrowRight className="ml-2 w-5 h-5" />
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Heal Your Liver, Heal Your Life</h2>
                <p className="text-lg text-stone-300 mb-8">
                    Don&apos;t wait for liver failure. Act now.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact" className="bg-nature-green hover:bg-white hover:text-nature-green text-white font-bold py-4 px-10 rounded-full transition-all text-lg shadow-xl">
                        Book Appointment
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
