import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { CONDITIONS } from '@/lib/constants';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Conditions We Treat | Naturopathy for Chronic Diseases",
  description: "Comprehensive list of diseases treated at Lucknow Naturopathy Center including Diabetes, Arthritis, PCOD, and Digestive Disorders.",
  alternates: {
    canonical: '/conditions',
  },
};

export default function ConditionsIndexPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-20 overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-4 block">Disease Reversal</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Conditions We Treat</h1>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
                    We don&apos;t just manage symptoms. We target the root cause of the disease for a permanent cure.
                </p>
            </div>
        </div>

        <div className="bg-stone-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CONDITIONS.map((condition) => (
                        <div key={condition.id} className="bg-white rounded-xl shadow-md border border-stone-100 hover:shadow-xl hover:border-nature-green/30 transition-all p-8 flex flex-col h-full group">
                            <h3 className="text-2xl font-bold text-stone-800 mb-3 group-hover:text-nature-green transition-colors">{condition.title}</h3>
                            <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                                {condition.shortDescription}
                            </p>

                            <div className="mb-6">
                                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2">Common Symptoms:</span>
                                <div className="flex flex-wrap gap-2">
                                    {condition.symptoms.slice(0, 3).map((sym, i) => (
                                        <span key={i} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded">
                                            {sym}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link href={`/condition/${condition.id}`} className="inline-flex items-center font-bold text-stone-900 hover:text-nature-green transition-colors mt-auto">
                                View Treatment Plan <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Other Conditions List */}
                <div className="mt-20 bg-white p-10 rounded-2xl shadow-sm border border-stone-100">
                    <h2 className="text-2xl font-bold text-stone-800 mb-6">Other Conditions Treated</h2>
                    <div className="grid md:grid-cols-4 gap-4 text-sm text-stone-600">
                        {[
                            "Migraine & Headache", "Sinusitis", "Bronchitis & Asthma", "Allergies",
                            "Insomnia", "Depression", "Fatty Liver", "Kidney Stones (Small)",
                            "Eczema & Psoriasis", "Acne & Hair Fall", "Sciatica", "Spondylitis",
                            "Menstrual Disorders", "Menopause Symptoms", "Gout", "Varicose Veins"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-2"></span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
