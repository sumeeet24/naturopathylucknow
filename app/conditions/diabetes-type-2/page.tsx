import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema, generateReviewSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural Diabetes Treatment & Reversal in Lucknow | Type 2 Specialist",
  description: "Reverse Type 2 Diabetes naturally with Dr. Nand Lal Yadav. Our proven protocol reduces HbA1c & medication through mud therapy, yoga, and diet. Book Consultation.",
  keywords: "diabetes reversal lucknow, natural diabetes treatment lucknow, type 2 diabetes cure naturopathy, dr nand lal yadav diabetes, naturopathy for diabetes lucknow",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/diabetes-type-2',
  },
  openGraph: {
    title: "Diabetes Type 2 Reversal | Lucknow Naturopathy Center",
    description: "Drug-free diabetes management. Reduce insulin and tablets naturally.",
    url: "https://naturopathlucknow.in/conditions/diabetes-type-2",
    images: [{ url: "https://naturopathlucknow.in/images/og-diabetes.jpg" }]
  }
};

export default function DiabetesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Diabetes Type 2', item: 'https://naturopathlucknow.in/conditions/diabetes-type-2' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema(); // Base schema

  // Specific FAQ for Diabetes
  const diabetesFAQs = [
    {
      question: "Can diabetes type 2 really be reversed?",
      answer: "Yes, Type 2 diabetes is largely a lifestyle disease caused by insulin resistance. By correcting diet, reducing stress, and stimulating pancreatic function through yoga and naturopathy, we can reverse insulin resistance. Many of our patients maintain normal blood sugar levels without medication."
    },
    {
      question: "How long does the diabetes reversal program take?",
      answer: "Most patients see significant blood sugar reduction within 2-3 weeks. Complete reversal or stabilization typically takes 3-6 months depending on how long you've had diabetes and your current medication levels."
    },
    {
      question: "Will I have to stop my insulin/tablets immediately?",
      answer: "No. We never stop medication abruptly. As you follow our protocol, your blood sugar levels will naturally drop. We monitor this daily and slowly taper down your medication dosage under medical supervision to avoid hypoglycemia."
    },
    {
      question: "What does the diabetes diet look like?",
      answer: "We don't believe in starvation. Our diet is a low-glycemic, alkaline Indian diet rich in fiber. It includes whole grains, specific vegetables like bitter gourd (karela), sprouts, and herbal juices. It is tasty, filling, and sustainable."
    }
  ];

  const faqSchema = generateFAQSchema(diabetesFAQs);

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
          <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Proven Results • Drugless Therapy
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Natural Diabetes Type 2 <br className="hidden md:block" />
              Treatment & Reversal
            </h1>
            <p className="text-xl md:text-2xl text-nature-light max-w-2xl mb-8 font-light">
              Stop managing symptoms. Start treating the root cause.
              Join 1,000+ patients who have reduced their HbA1c and medication dependency naturally.
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
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-nature-light mr-2" /> No Side Effects</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-nature-light mr-2" /> Root Cause Cure</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-nature-light mr-2" /> Diet & Yoga Based</div>
                <div className="flex items-center"><CheckCircle2 className="w-5 h-5 text-nature-light mr-2" /> Medically Supervised</div>
            </div>
          </div>
        </section>

        {/* UNDERSTANDING DIABETES */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Why Conventional Medicine Fails to Cure Diabetes</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Most diabetes treatments focus on <strong>controlling blood sugar</strong> through medication or insulin. While necessary in emergencies, this approach ignores the underlying problem: <strong>Insulin Resistance</strong> and <strong>Pancreatic Dysfunction</strong>.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Medication suppresses the symptom (high sugar) but doesn&apos;t fix the metabolism. Over time, you need higher doses, leading to side effects like kidney damage, neuropathy, and vision loss.
                </p>

                <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-nature-green">
                  <h3 className="text-lg font-bold text-stone-800 mb-2">Our Naturopathic Perspective</h3>
                  <p className="text-stone-600 text-sm">
                    We view Diabetes Type 2 as a metabolic disorder caused by toxicity and stress. By cleaning the internal environment (detox), reducing stress, and feeding the body right, we restore the body&apos;s natural ability to regulate sugar.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nature-green/10 rounded-full blur-3xl"></div>
                <div className="bg-stone-100 rounded-2xl p-8 relative z-10 border border-stone-200">
                    <h3 className="text-xl font-bold mb-6 text-center">The Vicious Cycle of Diabetes</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                            <span className="text-stone-700">Poor Diet & Stress lead to Toxin Accumulation</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                            <span className="text-stone-700">Cells become resistant to Insulin</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                            <span className="text-stone-700">Blood Sugar rises</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                            <span className="text-stone-700">Medication prescribed (Treats step 3, ignores step 1 & 2)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="font-bold text-nature-green">We Break This Cycle at Step 1 & 2</span>
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
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Our Diabetes Reversal Protocol</h2>
                    <p className="text-stone-600 mt-4 max-w-2xl mx-auto">A multi-dimensional approach targeting diet, physical activity, mental stress, and detoxification.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 6.5h11"></path><path d="M6.5 17.5h11"></path><path d="M6 20v-2a6 6 0 1 1 12 0v2"></path><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Medical Yoga Therapy</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Specific asanas designed to stimulate the pancreas and improve insulin sensitivity.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Mandukasana (Frog Pose)</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Ardha Matsyendrasana</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Kapalbhati Pranayama</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-2 border-nature-green/10">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-nature-green">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Naturopathy Treatments</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Detox therapies to remove morbid matter and improve metabolic function.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Mud Pack on Abdomen</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Hip Bath (Hydrotherapy)</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Therapeutic Massage</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"></path><path d="M10 14h4"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Diet & Lifestyle</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Correction of eating habits and stress management to support healing.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Low GI Alkaline Diet</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Stress Management</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Sleep Optimization</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/contact" className="inline-flex items-center bg-nature-green text-white font-bold py-4 px-10 rounded-full hover:bg-nature-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Start Your Reversal Journey <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-12">Patient Success Stories</h2>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative">
                        <div className="absolute top-6 right-6 text-6xl text-nature-green/10 font-serif font-bold">&quot;</div>
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-stone-200 rounded-full mr-4 overflow-hidden">
                                {/* Placeholder for user image */}
                                <div className="w-full h-full bg-nature-green/20 flex items-center justify-center text-nature-green font-bold text-xl">RV</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-stone-900">Rajesh Verma</h4>
                                <p className="text-sm text-stone-500">Aliganj, Lucknow • Type 2 Diabetes</p>
                            </div>
                        </div>
                        <h5 className="font-bold text-nature-green mb-2">HbA1c reduced from 9.2 to 6.5</h5>
                        <p className="text-stone-600 italic">
                            &quot;I was diagnosed with diabetes 8 years ago. Over time, my medication kept increasing. My HbA1c was 9.2, fasting sugar 240. After 3 months at Lucknow Naturopathy Center, HbA1c is now 6.5 and fasting sugar 110. I&apos;ve reduced my medication from 3 tablets to just 1.&quot;
                        </p>
                    </div>

                     <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 relative">
                        <div className="absolute top-6 right-6 text-6xl text-nature-green/10 font-serif font-bold">&quot;</div>
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-stone-200 rounded-full mr-4 overflow-hidden">
                                <div className="w-full h-full bg-nature-green/20 flex items-center justify-center text-nature-green font-bold text-xl">SK</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-stone-900">Sushma Kapoor</h4>
                                <p className="text-sm text-stone-500">Gomti Nagar, Lucknow • Diabetic for 12 years</p>
                            </div>
                        </div>
                        <h5 className="font-bold text-nature-green mb-2">Energy levels back, numbness gone</h5>
                        <p className="text-stone-600 italic">
                            &quot;I had severe numbness in my feet due to high sugar levels. The doctors said it&apos;s neuropathy. Dr. Nand Lal Yadav&apos;s mud therapy and specific foot massages worked wonders. My sugar is controlled, and I can walk without pain.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-stone-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-10">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {diabetesFAQs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Take the First Step Towards Diabetes Freedom</h2>
                <p className="text-lg text-stone-300 mb-8">
                    Don&apos;t wait for complications to set in. Our natural, scientifically backed program is ready to help you heal.
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
