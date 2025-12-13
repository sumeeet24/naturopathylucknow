import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Sexual Health & Wellness Treatment in Lucknow | Men & Women",
  description: "Natural treatment for sexual health problems. Cure ED, premature ejaculation, low libido, and female sexual dysfunction naturally with Dr. Nand Lal Yadav.",
  keywords: "sexual health clinic lucknow, sexologist doctor lucknow, natural ed treatment, female sexual dysfunction treatment, naturopathy for sexual wellness",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/sexual-health',
  },
  openGraph: {
    title: "Sexual Health & Wellness | Lucknow Naturopathy Center",
    description: "Confidential and natural treatment for sexual disorders. Restore confidence and vitality.",
    url: "https://naturopathlucknow.in/conditions/sexual-health",
    images: [{ url: "https://naturopathlucknow.in/images/og-sexual-health.jpg" }]
  }
};

export default function SexualHealthPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Sexual Health', item: 'https://naturopathlucknow.in/conditions/sexual-health' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqs = [
    {
      question: "Is the treatment confidential?",
      answer: "Absolutely. We understand the sensitive nature of sexual health issues. Your consultation and treatment records are kept strictly confidential."
    },
    {
      question: "Can naturopathy cure erectile dysfunction (ED)?",
      answer: "Yes, in many cases ED is caused by poor circulation, stress, or diabetes. By addressing these root causes through diet, specific yoga asanas, and hydrotherapy, we improve blood flow and nerve function, leading to natural and lasting improvement."
    },
    {
      question: "Do you treat female sexual dysfunction?",
      answer: "Yes, we treat conditions like low libido, painful intercourse (dyspareunia), and vaginismus. Our approach balances hormones and reduces stress/anxiety associated with intimacy."
    },
    {
      question: "How is this different from taking Viagra/Sildenafil?",
      answer: "Medications like Viagra provide a temporary mechanical fix but do not cure the underlying problem. Naturopathy aims to rejuvenate the entire reproductive system and general vitality, offering a permanent solution without side effects."
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
        <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Confidential • Safe • Natural
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Restore Your Vitality & <br className="hidden md:block" />
              Sexual Wellness Naturally
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mb-8 font-light">
              Don&apos;t suffer in silence. Effective, drug-free treatments for male and female sexual health problems. Regain your confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918874206748" className="inline-flex items-center justify-center px-8 py-4 bg-nature-green text-white font-bold rounded-full hover:bg-green-600 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Confidential Call
              </a>
              <a href="#program-details" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all text-lg">
                View Solutions
              </a>
            </div>
          </div>
        </section>

        {/* UNDERSTANDING SEXUAL HEALTH */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Holistic Sexual Wellness</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Sexual health is an integral part of overall well-being. Issues like Erectile Dysfunction (ED), Premature Ejaculation (PE), or Low Libido are often signals that the body is under stress, lacks proper nutrition, or has poor circulation.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  We treat these conditions not with temporary stimulants, but by revitalizing the body&apos;s energy reserves (Ojas) and correcting the root physiological or psychological causes.
                </p>

                <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-nature-green">
                  <h3 className="text-lg font-bold text-stone-800 mb-2">We Treat</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-stone-600">
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Erectile Dysfunction</span>
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Premature Ejaculation</span>
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Low Libido (Men & Women)</span>
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Painful Intercourse</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                 <div className="bg-stone-100 rounded-2xl p-8 relative z-10 border border-stone-200">
                    <h3 className="text-xl font-bold mb-6 text-center">The Natural Advantage</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                            <span className="text-stone-700">No Side Effects (unlike chemical pills)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                            <span className="text-stone-700">Improves Overall Energy & Stamina</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                            <span className="text-stone-700">Addresses Stress & Anxiety</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                            <span className="text-stone-700">Long-term Permanent Results</span>
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
                    <span className="text-nature-green font-bold tracking-wider uppercase text-sm">Comprehensive Care</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Rejuvenation Therapy</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Circulation Boost</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Improving blood flow to the reproductive organs.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Hydrotherapy (Sitz Bath)</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Therapeutic Massage</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Cardiovascular Exercise</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-2 border-nature-green/10">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-nature-green">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="6" r="3"></circle></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Nerve & Stress Control</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Calming the mind to allow the body to function naturally.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Shirodhara</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Ashwini Mudra</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Meditation</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3V4a6 6 0 0 0-6 6v0a6 6 0 0 0-6-6V2.3Z"></path><path d="M8 15v6"></path><path d="M16 15v6"></path><path d="M12 15v6"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Diet & Nutrition</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Foods that boost testosterone and reproductive health.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Zinc-rich Diet</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Herbal Juices</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Elimination of Toxins</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/contact" className="inline-flex items-center bg-nature-green text-white font-bold py-4 px-10 rounded-full hover:bg-nature-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book a Private Consultation <ArrowRight className="ml-2 w-5 h-5" />
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Regain Your Confidence</h2>
                <p className="text-lg text-stone-300 mb-8">
                    Safe, natural, and confidential treatment is just a call away.
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
