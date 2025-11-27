import React from 'react';
import { SEO_AREAS } from '../lib/constants';
import Link from 'next/link';
import { ArrowRight, Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-12 border-t border-stone-900 font-sans relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nature-green to-transparent opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-nature-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">

            {/* Brand Section */}
            <div className="md:col-span-4 space-y-6">
                <Link href="/" className="inline-block text-3xl font-serif font-bold text-white tracking-tight group">
                Lucknow<span className="text-nature-green group-hover:text-nature-light transition-colors">Naturopathy</span>
                </Link>
                <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
                    Reversing Chronic Diseases Naturally since 2010. Your trusted partner for holistic healing and wellness in the heart of Lucknow.
                </p>
                <div className="flex space-x-4 pt-2">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-nature-green hover:border-nature-green hover:text-white transition-all duration-300 group">
                        <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-nature-green hover:border-nature-green hover:text-white transition-all duration-300 group">
                        <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
            
            {/* Quick Links */}
            <div className="md:col-span-4">
                <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Quick Links</h5>
                <ul className="space-y-4 text-sm">
                    {[
                        { label: "Home", href: "/" },
                        { label: "About Naturopathy", href: "/about-naturopathy" },
                        { label: "Treatments", href: "/treatments" },
                        { label: "About Dr. Gupta", href: "/doctor" },
                        { label: "Packages & Pricing", href: "/pricing" },
                        { label: "Contact Us", href: "/contact" },
                    ].map((link, idx) => (
                         <li key={idx}>
                            <Link href={link.href} className="group flex items-center hover:text-white transition-colors duration-300">
                                <span className="w-6 h-px bg-stone-700 mr-3 group-hover:bg-nature-green group-hover:w-8 transition-all duration-300"></span>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Service Areas */}
            <div className="md:col-span-4">
                <h5 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Areas We Serve</h5>
                <p className="text-xs text-stone-500 leading-relaxed mb-6 font-light">
                    {SEO_AREAS.join(', ')}
                </p>
                <div className="p-5 bg-gradient-to-br from-stone-900 to-transparent rounded-xl border border-white/5">
                    <p className="text-xs text-stone-400">
                        <strong className="text-nature-green block mb-2 font-serif text-sm">Local SEO Note</strong>
                        We are centrally located in Gomti Nagar, serving patients from all major localities in Lucknow.
                    </p>
                </div>
            </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
            <p className="flex items-center gap-1">
                &copy; {new Date().getFullYear()} Lucknow Naturopathy. Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> for Nature.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
                <Link href="/sitemap.xml" className="hover:text-stone-300 transition-colors">Sitemap</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;