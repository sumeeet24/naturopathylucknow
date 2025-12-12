import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Patient Success Stories | Real Results, Real People",
  description: "Read inspiring stories of patients who reversed diabetes, arthritis, obesity, and more at Lucknow Naturopathy Center.",
  alternates: {
    canonical: '/patient-success-stories',
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-4 block">Transformations</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Patient Success Stories</h1>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
                    Real people. Real struggles. Real recoveries. See how natural healing changed their lives.
                </p>
            </div>
        </div>

        {/* Stories Grid */}
        <div className="bg-stone-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-12">
                    {TESTIMONIALS.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow border border-stone-100">
                            <div className="relative h-64 w-full bg-stone-200">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-6 text-white">
                                    <div className="bg-nature-green text-white text-[10px] font-bold px-2 py-1 inline-block rounded mb-2 uppercase tracking-wide">
                                        {testimonial.condition}
                                    </div>
                                    <h3 className="text-xl font-bold font-serif">{testimonial.title}</h3>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <Quote className="w-8 h-8 text-nature-green/30 mb-4" />
                                <p className="text-stone-600 italic mb-6 text-lg">&quot;{testimonial.quote}&quot;</p>

                                <div className="mt-auto pt-6 border-t border-stone-100">
                                    <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                                    <div className="flex justify-between items-center text-sm text-stone-500 mt-1">
                                        <span>{testimonial.age}, {testimonial.location}</span>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                        </div>
                                    </div>
                                    <div className="mt-4 text-xs text-stone-400 bg-stone-50 p-3 rounded-lg">
                                        <strong>The Journey:</strong> {testimonial.story}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Testimonials Placeholder */}
                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-serif font-bold text-stone-800 mb-12">Watch Video Testimonials</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="aspect-video bg-stone-800 rounded-xl relative group cursor-pointer overflow-hidden shadow-lg">
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-nature-green transition-colors">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-10 text-left">
                                    <p className="text-white font-bold text-sm">Patient Review #{item}</p>
                                    <p className="text-stone-300 text-xs">Cured in 30 days</p>
                                </div>
                                {/* Placeholder image */}
                                <div className="absolute inset-0 bg-stone-700"></div>
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
