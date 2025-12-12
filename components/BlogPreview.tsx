import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const BlogPreview: React.FC = () => {
  const posts = [
    {
      title: "7 Natural Ways to Lower Blood Sugar Without Medication",
      excerpt: "Discover science-backed natural methods to control diabetes including specific yoga asanas like Mandukasana, dietary modifications using bitter gourd, and lifestyle habits that can reduce your HbA1c.",
      author: "Dr. Nand Lal Yadav",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "Diabetes"
    },
    {
      title: "Complete Guide to Mud Therapy: Benefits & Procedure",
      excerpt: "Everything you need to know about mud therapy – how it works to absorb toxins, the scientific explanation behind cooling effects, what conditions benefit most (like skin diseases and acidity), and procedure.",
      author: "Dr. Neelam Kumari",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1600334019640-eb2e9124237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "Therapies"
    },
    {
      title: "Can Arthritis Be Reversed? Natural Treatment Options",
      excerpt: "Explore evidence-based natural treatments for osteoarthritis. Learn which therapies (like Potli massage and Janu Basti) work, realistic expectations for pain relief, and how to avoid surgery.",
      author: "Dr. Nand Lal Yadav",
      date: "Nov 15, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1552674605-46d990812d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tag: "Arthritis"
    }
  ];

  return (
    <section className="py-24 bg-stone-50" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-in-up">
            <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
                    Naturopathy Health Tips & Articles
                </h2>
                <p className="text-stone-600 max-w-xl">
                    Stay informed about natural health with articles, tips, and insights from our experienced naturopathy doctors.
                </p>
            </div>
            <Link href="/blog" className="inline-flex items-center text-nature-green font-bold hover:text-nature-dark group">
                View All Articles <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {posts.map((post, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full text-stone-800 uppercase tracking-wide">
                            {post.tag}
                        </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center text-xs text-stone-400 mb-4 space-x-4">
                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-stone-800 mb-3 leading-tight group-hover:text-nature-green transition-colors">
                            <Link href="/blog">{post.title}</Link>
                        </h3>

                        <p className="text-sm text-stone-600 mb-6 leading-relaxed line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                            <div className="flex items-center text-xs font-medium text-stone-500">
                                <User className="w-3 h-3 mr-1" /> {post.author}
                            </div>
                            <Link href="/blog" className="text-xs font-bold text-nature-green hover:text-nature-dark uppercase tracking-wide">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-stone-900 rounded-3xl p-10 text-white relative overflow-hidden">
             {/* Decorative */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nature-green to-transparent opacity-50"></div>

             <h3 className="text-xl font-serif font-bold mb-8 flex items-center text-nature-light relative z-10">
                💡 QUICK HEALTH TIPS FROM OUR DOCTORS
             </h3>

             <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 relative z-10 text-sm text-stone-300">
                {[
                    "🥤 Drink lukewarm water first thing in morning",
                    "🧘 10 minutes of pranayama daily reduces stress hormones",
                    "🥗 Eat dinner before 7 PM for better digestion",
                    "🚶 Walk 30 minutes after dinner to regulate sugar",
                    "🌅 Get morning sunlight for natural Vitamin D",
                    "😴 Sleep by 10 PM to align with circadian rhythm"
                ].map((tip, idx) => (
                    <div key={idx} className="flex items-start">
                        <span className="mr-3 mt-1 text-nature-green">●</span>
                        <span>{tip}</span>
                    </div>
                ))}
             </div>

             <div className="mt-8 text-center relative z-10">
                 <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3 px-6 rounded-full transition-colors border border-white/20">
                    Subscribe to Weekly Health Newsletter
                 </button>
             </div>
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
