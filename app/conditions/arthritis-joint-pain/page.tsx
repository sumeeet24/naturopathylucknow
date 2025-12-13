import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight, Activity } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Arthritis & Joint Pain Natural Treatment Lucknow | Pain Relief",
  description: "Natural Arthritis Treatment in Lucknow. Avoid knee replacement surgery with Potli Massage, Janu Basti & Mud Therapy. Effective for Osteoarthritis & Rheumatoid Arthritis.",
  keywords: "arthritis treatment lucknow, knee pain natural cure, joint pain relief lucknow, potli massage lucknow, avoid knee surgery naturopathy",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/arthritis-joint-pain',
  },
  openGraph: {
    title: "Arthritis Natural Cure | Lucknow Naturopathy Center",
    description: "Pain relief without surgery. Ancient therapies for modern joint problems.",
    url: "https://naturopathlucknow.in/conditions/arthritis-joint-pain",
    images: [{ url: "https://naturopathlucknow.in/images/og-arthritis.jpg" }]
  }
};

export default function ArthritisPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Arthritis & Joint Pain', item: 'https://naturopathlucknow.in/conditions/arthritis-joint-pain' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqItems = [
    {
      question: "Can naturopathy really avoid knee replacement surgery?",
      answer: "In many cases of Osteoarthritis (Grade 1-3), yes. By reducing inflammation, improving lubrication through Janu Basti, and strengthening muscles through yoga, we can significantly reduce pain and improve mobility, making surgery unnecessary."
    },
    {
      question: "Is this effective for Rheumatoid Arthritis?",
      answer: "Rheumatoid Arthritis is autoimmune. While we cannot 'cure' the autoimmune condition, our anti-inflammatory diet and detox therapies are extremely effective in managing flare-ups, reducing pain, and lowering dependency on steroids."
    },
    {
      question: "Is the massage painful for swollen joints?",
      answer: "Not at all. We use specialized techniques like Potli Massage (herbal bolus) which uses heat and herbs to soothe the pain. It is very relaxing and designed specifically for inflamed joints."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most patients report 30-40% pain reduction within the first week of intensive therapy. Significant mobility improvements typically happen within 3-4 weeks."
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
        <section className="relative bg-amber-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold mb-4 border border-white/30">
              Avoid Surgery Naturally
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Arthritis & Joint Pain <br className="hidden md:block" />
              Natural Relief in Lucknow
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mb-8 font-light">
              Don&apos;t let pain limit your life. Regain mobility with Potli Massage, Janu Basti & Anti-Inflammatory Therapies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-900 font-bold rounded-full hover:bg-stone-100 transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Pain Assessment
              </Link>
              <a href="#therapies" className="inline-flex items-center justify-center px-8 py-4 bg-amber-800/50 text-white font-bold rounded-full hover:bg-amber-800/70 transition-all backdrop-blur-sm border border-white/30 text-lg">
                See Treatments
              </a>
            </div>
          </div>
        </section>

        {/* PAIN STATISTICS */}
        <section className="py-12 bg-white -mt-8 relative z-30 max-w-6xl mx-auto rounded-xl shadow-xl px-8 border border-stone-100">
             <div className="grid md:grid-cols-3 gap-8 text-center divide-x divide-stone-100">
                 <div>
                     <div className="text-4xl font-bold text-amber-600 mb-2">85%</div>
                     <div className="text-stone-600 font-medium">Patients report reduced pain</div>
                 </div>
                 <div>
                     <div className="text-4xl font-bold text-amber-600 mb-2">3 Weeks</div>
                     <div className="text-stone-600 font-medium">To significant mobility improvement</div>
                 </div>
                 <div>
                     <div className="text-4xl font-bold text-amber-600 mb-2">40%</div>
                     <div className="text-stone-600 font-medium">Completely stop painkillers</div>
                 </div>
             </div>
        </section>

        {/* CONDITIONS WE TREAT */}
        <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-stone-900">Types of Arthritis We Treat</h2>
                    <p className="text-stone-600 mt-4">We specialize in various musculoskeletal conditions.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Osteoarthritis (Knee/Hip)",
                        "Rheumatoid Arthritis",
                        "Cervical Spondylitis",
                        "Lumbar Spondylitis (Back)",
                        "Frozen Shoulder",
                        "Gout (Uric Acid)",
                        "Sciatica",
                        "Tennis Elbow"
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm flex items-center hover:shadow-md transition-shadow">
                            <CheckCircle2 className="text-nature-green w-5 h-5 mr-3" />
                            <span className="font-bold text-stone-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* THERAPIES */}
        <section id="therapies" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="mb-12">
                     <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Our Treatments</span>
                     <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Ancient Therapies for Modern Pain</h2>
                 </div>

                 <div className="space-y-12">
                     {/* Therapy Item 1 */}
                     <div className="flex flex-col md:flex-row gap-8 items-center">
                         <div className="md:w-1/2 h-64 bg-stone-200 rounded-2xl overflow-hidden relative">
                              <div className="absolute inset-0 bg-amber-900/10 flex items-center justify-center text-amber-900 font-bold">Janu Basti / Kati Basti</div>
                         </div>
                         <div className="md:w-1/2">
                             <h3 className="text-2xl font-bold text-stone-900 mb-3">Janu Basti & Kati Basti</h3>
                             <p className="text-stone-600 leading-relaxed mb-4">
                                 A specialized treatment where warm medicated oil is retained over the affected joint (Knee or Back) using a dough dam. This deep-soaking heat nourishes the joint tissues, improves lubrication, and relieves stiffness.
                             </p>
                             <ul className="text-sm text-stone-500 space-y-2">
                                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span> Improves synovial fluid production</li>
                                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span> Reduces friction in joints</li>
                             </ul>
                         </div>
                     </div>

                     {/* Therapy Item 2 */}
                     <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                         <div className="md:w-1/2 h-64 bg-stone-200 rounded-2xl overflow-hidden relative">
                              <div className="absolute inset-0 bg-amber-900/10 flex items-center justify-center text-amber-900 font-bold">Potli Massage</div>
                         </div>
                         <div className="md:w-1/2">
                             <h3 className="text-2xl font-bold text-stone-900 mb-3">Potli Massage (Bolus Therapy)</h3>
                             <p className="text-stone-600 leading-relaxed mb-4">
                                 Massaging the body with heated herbal pouches (Potlis). The heat combined with the medicinal herbs penetrates deep into the muscles to reduce inflammation and pain instantly.
                             </p>
                             <ul className="text-sm text-stone-500 space-y-2">
                                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span> Reduces swelling</li>
                                 <li className="flex items-center"><span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span> Relieves muscle spasms</li>
                             </ul>
                         </div>
                     </div>
                 </div>
            </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20 bg-stone-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                 <div className="w-20 h-20 bg-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-stone-400">MG</div>
                 <blockquote className="text-2xl font-serif text-stone-800 italic mb-8">
                    &quot;I couldn&apos;t climb stairs due to severe knee pain. Doctors suggested knee replacement surgery. I tried Dr. Yadav&apos;s treatment as a last hope. After 6 weeks of Janu Basti, mud therapy and yoga, I&apos;m now pain-free and can walk 3 km daily. Surgery cancelled!&quot;
                 </blockquote>
                 <div className="font-bold text-stone-900">Meera Gupta</div>
                 <div className="text-stone-500 text-sm">Hazratganj, Lucknow • Osteoarthritis</div>
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
        <section className="py-16 bg-amber-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-4">Live Pain-Free Again</h2>
                <p className="mb-8 opacity-90">Avoid surgery. Choose natural healing for your joints.</p>
                <Link href="/contact" className="bg-white text-amber-900 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors inline-block">
                    Book Pain Assessment
                </Link>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
