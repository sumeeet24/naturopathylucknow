import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Clinical Case Studies | Naturopathy Success Stories Lucknow',
  description: 'Explore real-world success stories and clinical case studies from Lucknow Naturopathy Centre. See how we reverse chronic diseases naturally.',
  alternates: {
    canonical: '/case-studies',
  },
};

const CASE_STUDIES = [
    {
        title: "Satvik Diet Case Study: Reversing Chronic Diseases Naturally",
        excerpt: "Clinical case study on the effectiveness of Satvik Diet in reversing PCOS and digestive issues. Evidence-based naturopathic guide by Dr. Nilima & Dr. Gupta.",
        slug: "satvik-diet-reversing-chronic-diseases",
        date: "May 22, 2024",
        author: "Dr. Nilima Kumari"
    }
];

export default function CaseStudiesIndex() {
  const breadcrumbJson = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://naturopathlucknow.in' },
    { name: 'Case Studies', url: 'https://naturopathlucknow.in/case-studies' }
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <main className="flex-grow pt-20">
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
        />

        {/* Header */}
        <div className="bg-nature-green text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block backdrop-blur-sm">Clinical Evidence</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Case Studies & Success Stories</h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Documented clinical outcomes demonstrating the power of Naturopathy in reversing chronic conditions.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CASE_STUDIES.map((study) => (
                    <article key={study.slug} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="p-6 flex flex-col h-full">
                            <div className="flex items-center text-xs text-stone-500 mb-3 space-x-3">
                                <span className="flex items-center">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {study.date}
                                </span>
                                <span className="flex items-center">
                                    <User className="w-3 h-3 mr-1" />
                                    {study.author}
                                </span>
                            </div>
                            <Link href={`/case-studies/${study.slug}`} className="block group">
                                <h2 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-nature-green transition-colors line-clamp-2">
                                    {study.title}
                                </h2>
                            </Link>
                            <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
                                {study.excerpt}
                            </p>
                            <div className="pt-4 mt-auto border-t border-stone-100">
                                <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center text-nature-green font-bold text-sm hover:underline">
                                    Read Case Study <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
