import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMedicalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Natural Autism Spectrum Support in Lucknow | Holistic Therapy",
  description: "Natural support for children with Autism. Improve gut health, sensory processing, and behavior with diet, massage, and yoga. Dr. Nand Lal Yadav.",
  keywords: "autism treatment lucknow, natural autism therapy, gut brain axis autism, naturopathy for autism, sensory integration therapy lucknow",
  alternates: {
    canonical: 'https://naturopathlucknow.in/conditions/autism',
  },
  openGraph: {
    title: "Holistic Autism Support | Lucknow Naturopathy Center",
    description: "Supporting children with autism through diet, detox, and sensory integration.",
    url: "https://naturopathlucknow.in/conditions/autism",
    images: [{ url: "https://naturopathlucknow.in/images/og-autism.jpg" }]
  }
};

export default function AutismPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', item: 'https://naturopathlucknow.in/' },
    { name: 'Conditions', item: 'https://naturopathlucknow.in/conditions' },
    { name: 'Autism Support', item: 'https://naturopathlucknow.in/conditions/autism' }
  ]);

  const medicalSchema = generateMedicalBusinessSchema();

  const faqs = [
    {
      question: "Can diet really affect autism?",
      answer: "Yes, significantly. The &apos;Gut-Brain Axis&apos; connects digestion to brain function. Many children with autism have gut inflammation, leaky gut, or food sensitivities (like Gluten/Casein). Healing the gut often leads to improved behavior, sleep, and focus."
    },
    {
      question: "What therapies do you use for autism?",
      answer: "We use a combination of GFCF (Gluten-Free Casein-Free) diet, specific massages for sensory integration, wet sheet packs for calming hyperactivity, and specialized yoga to improve coordination."
    },
    {
      question: "Is this a replacement for speech or occupational therapy?",
      answer: "No, it is a complementary foundation. When a child's internal system (gut/metabolism) is balanced, they respond much better to speech and occupational therapy."
    },
    {
      question: "At what age can we start?",
      answer: "The earlier, the better. We have seen the most significant improvements in children aged 2-7 years, but older children and teens also benefit from reduced anxiety and better sleep."
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
        <section className="relative bg-blue-50 text-stone-800 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-200 text-blue-800 text-sm font-bold mb-4">
              Gut-Brain Healing • Sensory Support
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-stone-900">
              Holistic Support for <br className="hidden md:block" />
              Autism Spectrum Disorder
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mb-8 font-light">
              Healing from the inside out. Improving focus, sleep, and behavior by addressing the root metabolic and sensory imbalances.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918874206748" className="inline-flex items-center justify-center px-8 py-4 bg-nature-green text-white font-bold rounded-full hover:bg-nature-dark transition-all shadow-lg text-lg">
                <Phone className="w-5 h-5 mr-2" /> Book Consultation
              </a>
              <a href="#program-details" className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-stone-200 text-stone-700 font-bold rounded-full hover:bg-stone-50 transition-all text-lg">
                View Therapy Plan
              </a>
            </div>
          </div>
        </section>

        {/* UNDERSTANDING AUTISM SUPPORT */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Gut-Brain Connection</h2>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  Autism is not just a brain disorder; it is often a whole-body disorder affecting the immune system, digestion, and detoxification pathways.
                </p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  At Lucknow Naturopathy Center, we focus on the <strong>Gut-Brain Axis</strong>. By healing the gut lining and removing inflammatory foods (like gluten and casein), we often see dramatic improvements in a child&apos;s cognition, eye contact, and emotional stability.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-lg font-bold text-stone-800 mb-2">Sensory Integration</h3>
                  <p className="text-stone-600 text-sm">
                    Children with autism often struggle with sensory processing. Our specialized massage therapies and water treatments (hydrotherapy) help calm the nervous system, reducing hyperactivity and sensory overload.
                  </p>
                </div>
              </div>
              <div className="relative">
                 <div className="bg-stone-100 rounded-2xl p-8 relative z-10 border border-stone-200">
                    <h3 className="text-xl font-bold mb-6 text-center">Benefits We Observe</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Better Sleep Patterns</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Reduced Hyperactivity & Stimming</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Improved Digestion (Less Constipation/Diarrhea)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="bg-nature-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">✓</span>
                            <span className="text-stone-700">Enhanced Focus & Attention</span>
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
                    <span className="text-nature-green font-bold tracking-wider uppercase text-sm">Gentle & Effective</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Our Autism Support Protocol</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Dietary Intervention</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Removing inflammatory triggers to heal the gut.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> GFCF Diet Plans</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Probiotic Foods</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Removal of Additives</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 border-2 border-nature-green/10">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-nature-green">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Calming Therapies</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Physical treatments to regulate sensory input.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Wet Sheet Packs</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Therapeutic Massage</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Mud Therapy</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                         <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-stone-900 mb-3">Yoga for Kids</h3>
                        <p className="text-stone-600 text-sm mb-4">
                            Simple movements to improve coordination and body awareness.
                        </p>
                        <ul className="text-sm text-stone-600 space-y-2">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Balancing Poses</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Breathing Exercises</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-nature-green mr-2"/> Relaxation Techniques</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link href="/contact" className="inline-flex items-center bg-nature-green text-white font-bold py-4 px-10 rounded-full hover:bg-nature-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Schedule an Assessment <ArrowRight className="ml-2 w-5 h-5" />
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Give Your Child a Stronger Foundation</h2>
                <p className="text-lg text-stone-300 mb-8">
                    Let nature help unlock their potential.
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
