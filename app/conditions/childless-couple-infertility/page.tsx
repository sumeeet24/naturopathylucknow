import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural Infertility Treatment in Lucknow | Childless Couple Solution",
  description: "Natural fertility treatment for childless couples. Reverse PCOD, improve sperm count, and conceive naturally with Dr. Neelam Kumari. Holistic care in Lucknow.",
  keywords: "infertility treatment lucknow, natural fertility clinic lucknow, pcod pregnancy lucknow, male infertility naturopathy, childless couple treatment lucknow",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/childless-couple-infertility',
  },
  openGraph: {
    title: "Natural Solution for Childless Couples | Lucknow Naturopathy Center",
    description: "Conceive naturally. Addressing root causes like PCOD, stress, and hormonal imbalance.",
    url: "https://naturopathlucknow.in/conditions/childless-couple-infertility",
    images: [{ url: "https://naturopathlucknow.in/images/og-infertility.jpg" }]
  }
};

export default function InfertilityPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Infertility Treatment', item: 'https://naturopathlucknow.in/conditions/childless-couple-infertility' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqs = [
    {
      question: "Can naturopathy help with blocked fallopian tubes?",
      answer: "Naturopathy can help reduce inflammation and improve circulation in the pelvic region. While severe mechanical blockages may need surgery, partial blockages due to inflammation often respond well to therapies like Uttara Basti and specific diet protocols."
    },
    {
      question: "How effective is this for male infertility?",
      answer: "Very effective. Lifestyle changes, stress reduction, and specific yoga asanas can significantly improve sperm count, motility, and morphology. We have had many success cases where male factor infertility was the primary issue."
    },
    {
      question: "I have PCOD. Can I still get pregnant naturally?",
      answer: "Yes! PCOD is one of the most common causes of infertility we treat. By correcting insulin resistance and hormonal balance through diet and yoga, many of our patients regulate their ovulation and conceive naturally without IVF."
    },
    {
      question: "Do you offer IVF?",
      answer: "No, we are a Naturopathy center. We focus on natural conception. However, our treatments can also prepare your body for IVF if you choose that route, significantly increasing the success rate."
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
        <section className="relative bg-rose-50 text-stone-800 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-rose-200 text-rose-800 text-sm font-bold mb-4">
              Natural Fertility • Holistic Conception
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-stone-900">
              Hope for Childless Couples: <br className="hidden md:block" />
              Natural Fertility Treatment
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mb-8 font-light">
              Don&apos;t lose hope. Address the root cause of infertility—be it PCOD, stress, or hormonal imbalance—and welcome the joy of parenthood naturally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918874206748" className="inline-flex items-center justify-center px-8 py-4 bg-nature-green text-white font-bold rounded-full hover:bg-nature-dark transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Consultation
              </a>
              <a href="#program-details" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-stone-200 text-stone-700 font-bold rounded-full hover:bg-stone-50 transition-all text-lg">
                View Fertility Plan
              </a>
            </div>
          </div>
        </section>

        {/* UNDERSTANDING INFERTILITY */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Why Natural Conception?</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Infertility is often a symptom of underlying health issues. Stress, poor diet, toxins, and hormonal imbalances disrupt the body&apos;s natural reproductive rhythms.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Before opting for invasive and expensive procedures like IVF, give your body a chance to heal. Our protocols detoxify the reproductive system, regulate hormones, and prepare the womb for a healthy pregnancy.
                </p>

                <div className="bg-rose-50 p-6 rounded-xl border-l-4 border-rose-400">
                  <h3 className="text-lg font-bold text-stone-800 mb-2">Our Success Rate</h3>
                  <p className="text-stone-600 text-sm">
                    We have helped hundreds of couples conceive naturally, even after years of trying and failed treatments elsewhere. By treating the couple as a whole, miracles happen.
                  </p>
                </div>
              </div>
              <div className="relative">
                 <div className="bg-stone-100 rounded-2xl p-8 relative z-10 border border-stone-200">
                    <h3 className="text-xl font-bold mb-6 text-center">Common Causes We Treat</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">PCOD / PCOS</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Irregular Periods & Hormonal Imbalance</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Male Infertility (Low Count/Motility)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-rose-100 text-rose-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Unexplained Infertility</span>
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
                    <span className="text-nature-green font-bold tracking-wider uppercase text-sm">Holistic Fertility Care</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">The Fertility Renewal Program</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 text-pink-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Hormonal Balance</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Regulating the endocrine system to ensure healthy ovulation and sperm production.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Seed Cycling</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Fertility Yoga</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Stress Reduction</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-2 border-nature-green/10">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-nature-green">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Reproductive Detox</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Clearing toxins that affect egg and sperm quality.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Fertility Massage</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Mud Packs (Pelvic Area)</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Diet Therapy</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Couples Counseling</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Addressing the emotional aspect of infertility to reduce stress and improve bonding.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Stress Management</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Lifestyle Correction</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Partner Yoga</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/contact" className="inline-flex items-center bg-nature-green text-white font-bold py-4 px-10 rounded-full hover:bg-nature-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Start Your Journey to Parenthood <ArrowRight className="ml-2 w-5 h-5" />
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Your Family Begins Here</h2>
                <p className="text-lg text-stone-300 mb-8">
                    Let nature help you create life.
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
