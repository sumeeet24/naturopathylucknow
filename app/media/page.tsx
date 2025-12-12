import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Newspaper, Video, Mic } from 'lucide-react';

export const metadata: Metadata = {
  title: "Media Coverage | Lucknow Naturopathy in News",
  description: "Check out our media features, newspaper articles, and interviews. Recognized as the best Naturopathy center in Lucknow.",
  alternates: {
    canonical: '/media',
  },
};

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-4 block">In The Press</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Media & Recognition</h1>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
                    Our efforts to promote natural healing have been recognized by leading media outlets.
                </p>
            </div>
        </div>

        <div className="bg-stone-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* News Articles Grid */}
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-8 flex items-center">
                    <Newspaper className="mr-3 text-nature-green" /> Newspaper Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        { title: "Naturopathy: The Future of Medicine", source: "Dainik Jagran", date: "Jan 15, 2023", img: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop" },
                        { title: "Reversing Diabetes Naturally", source: "Hindustan Times", date: "Nov 14, 2022", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" },
                        { title: "Yoga Camp for Senior Citizens", source: "Amar Ujala", date: "Jun 21, 2023", img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group">
                            <div className="h-48 bg-stone-200 relative overflow-hidden">
                                 {/* Placeholder Image */}
                                 <div className="absolute inset-0 bg-stone-300"></div>
                                 <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-bold opacity-30">News Clipping</div>
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-bold text-nature-green uppercase tracking-wide">{item.source}</span>
                                <h3 className="font-bold text-lg mt-2 mb-2 group-hover:text-nature-green transition-colors">{item.title}</h3>
                                <p className="text-stone-400 text-sm">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Interviews */}
                <h2 className="text-2xl font-serif font-bold text-stone-800 mb-8 flex items-center">
                    <Video className="mr-3 text-nature-green" /> Interviews & Talks
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                     {[
                        { title: "Dr. Nand Lal Yadav on DD News", desc: "Discussing the importance of lifestyle management in preventing heart disease." },
                        { title: "Panel Discussion: Integrated Medicine", desc: "A debate on how Allopathy and Naturopathy can work together." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-stone-900 rounded-xl overflow-hidden shadow-lg relative aspect-video group cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-nature-green transition-colors">
                                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                                </div>
                            </div>
                            {/* Placeholder for Thumbnail */}
                            <div className="absolute inset-0 bg-stone-800 opacity-50"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                <p className="text-stone-300 text-sm mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
