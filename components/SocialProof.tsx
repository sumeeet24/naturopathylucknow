import React from 'react';
import { Star, Facebook, Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-stone-100" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                What Lucknow Residents Say About Our Naturopathy Center
            </h2>
        </div>

        {/* Google Reviews Widget Placeholder */}
        <div className="bg-stone-50 rounded-2xl p-8 mb-16 shadow-inner relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 opacity-5 transform translate-x-10 -translate-y-10">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81Z" />
                </svg>
             </div>

             <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                    </div>
                    <div className="text-3xl font-bold text-stone-800 mb-1">4.8 out of 5</div>
                    <div className="text-sm text-stone-500 font-medium">Based on 156 Google Reviews</div>
                </div>

                <div className="flex-grow max-w-2xl">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                        <div className="flex items-center mb-3">
                             <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-600 text-xs mr-3">RK</div>
                             <div>
                                 <div className="text-sm font-bold text-stone-800">Rajesh Kumar</div>
                                 <div className="text-[10px] text-stone-400">5 days ago • Google Review</div>
                             </div>
                        </div>
                        <p className="text-stone-600 text-sm italic">
                            &quot;Best naturopathy center in Lucknow. Dr. Nand Lal Yadav is very knowledgeable. My diabetes improved significantly in 3 months. Highly recommended for anyone looking for natural treatment.&quot;
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto">
                    <a href="https://g.page/lucknownaturopathy" target="_blank" rel="noreferrer" className="bg-white border border-stone-300 text-stone-700 font-bold py-3 px-6 rounded-xl hover:bg-stone-50 transition-colors text-sm text-center">
                        Read All 156 Reviews
                    </a>
                    <a href="https://g.page/lucknownaturopathy/review" target="_blank" rel="noreferrer" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors text-sm text-center shadow-lg shadow-blue-600/20">
                        Write a Review
                    </a>
                </div>
             </div>
        </div>

        {/* Social Media & Media Coverage Grid */}
        <div className="grid md:grid-cols-2 gap-12">

            {/* Social Media */}
            <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-6 flex items-center">
                    📱 FOLLOW US ON SOCIAL MEDIA
                </h3>
                <p className="text-stone-600 text-sm mb-6">
                    Stay updated with health tips, patient success stories, and special offers on our social channels.
                </p>

                <div className="space-y-4">
                     <a href="https://facebook.com" className="flex items-center p-3 rounded-xl bg-stone-50 hover:bg-[#1877F2]/10 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                            <Facebook size={20} />
                        </div>
                        <div>
                            <div className="font-bold text-stone-800 group-hover:text-[#1877F2] transition-colors">Facebook</div>
                            <div className="text-xs text-stone-500">@LucknowNaturopathy (2.4k followers)</div>
                        </div>
                     </a>

                     <a href="https://instagram.com" className="flex items-center p-3 rounded-xl bg-stone-50 hover:bg-[#E4405F]/10 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-[#E4405F] text-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                            <Instagram size={20} />
                        </div>
                        <div>
                            <div className="font-bold text-stone-800 group-hover:text-[#E4405F] transition-colors">Instagram</div>
                            <div className="text-xs text-stone-500">@lucknow_naturopathy (3.1k followers)</div>
                        </div>
                     </a>

                     <a href="https://youtube.com" className="flex items-center p-3 rounded-xl bg-stone-50 hover:bg-[#FF0000]/10 transition-colors group">
                        <div className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                            <Youtube size={20} />
                        </div>
                        <div>
                            <div className="font-bold text-stone-800 group-hover:text-[#FF0000] transition-colors">YouTube</div>
                            <div className="text-xs text-stone-500">Lucknow Naturopathy (1.2k subscribers)</div>
                        </div>
                     </a>
                </div>
            </div>

            {/* Media Coverage */}
            <div>
                 <h3 className="text-xl font-serif font-bold text-stone-800 mb-6 flex items-center">
                    📰 FEATURED IN MEDIA
                </h3>
                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                    <ul className="space-y-6">
                        {[
                            { outlet: "Times of India", title: "Leading Natural Treatment Center" },
                            { outlet: "Dainik Jagran", title: "Diabetes Reversal Success Stories" },
                            { outlet: "Amar Ujala", title: "Alternative Medicine Pioneer in Lucknow" },
                            { outlet: "Lucknow Times", title: "Best Naturopathy Hospital 2023" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-stone-300 mt-2 mr-4 flex-shrink-0"></span>
                                <div>
                                    <strong className="block text-stone-800">{item.outlet}</strong>
                                    <span className="text-sm text-stone-500 italic">&quot;{item.title}&quot;</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-stone-200">
                        <Link href="/media" className="inline-flex items-center text-sm font-bold text-stone-600 hover:text-nature-green transition-colors">
                            View All Media Coverage <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default SocialProof;
