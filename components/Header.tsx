'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TREATMENTS_MENU = [
  "Mud Therapy",
  "Hydrotherapy",
  "Massage Therapy",
  "Detoxification",
  "Yoga Therapy",
  "Acupressure",
  "Diet Therapy",
  "All Treatments"
];

const CONDITIONS_MENU = [
  "Diabetes Type 2",
  "High Blood Pressure",
  "Arthritis & Joint Pain",
  "Digestive Disorders",
  "Obesity & Weight Loss",
  "Skin Diseases",
  "Thyroid Disorders",
  "All Conditions"
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const navLinkClass = "text-sm font-semibold text-stone-700 hover:text-nature-green transition-colors py-2 flex items-center";

  return (
    <>
      {/* Top Bar */}
      <div className="bg-nature-green text-white py-2 px-4 text-xs sm:text-sm font-medium hidden lg:block z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> Call Now: +91 88742 06748</span>
            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> Vibhuti Khand, Gomti Nagar, Lucknow</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> Mon-Sat: 8AM-1PM, 4PM-7PM</span>
          </div>
        </div>
      </div>

      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'top-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100' : 'lg:top-9 top-0 bg-white shadow-sm lg:shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <Link href="/" className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold text-nature-green tracking-tight leading-none">
                LUCKNOW NATUROPATHY & YOGA CENTER
                </span>
                <span className="text-[10px] md:text-xs text-stone-500 font-medium tracking-wide mt-1">
                  Established 2010 • 15+ Years of Natural Healing
                </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className={navLinkClass}>Home</Link>
              <Link href="/about-naturopathy" className={navLinkClass}>About Naturopathy</Link>

              <div className="relative group">
                <button className={navLinkClass}>
                  Treatments <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                   <div className="bg-white rounded-lg shadow-xl border border-stone-100 py-2">
                     {TREATMENTS_MENU.map((item, idx) => (
                        <Link key={idx} href={`/treatments/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block px-4 py-2 text-sm text-stone-600 hover:bg-nature-light/20 hover:text-nature-green">
                           {item}
                        </Link>
                     ))}
                   </div>
                </div>
              </div>

              <div className="relative group">
                <button className={navLinkClass}>
                  Conditions We Treat <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                   <div className="bg-white rounded-lg shadow-xl border border-stone-100 py-2">
                     {CONDITIONS_MENU.map((item, idx) => (
                        <Link key={idx} href={`/condition/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block px-4 py-2 text-sm text-stone-600 hover:bg-nature-light/20 hover:text-nature-green">
                           {item}
                        </Link>
                     ))}
                   </div>
                </div>
              </div>

              <Link href="/doctor" className={navLinkClass}>Doctors Team</Link>
              <Link href="/patient-success-stories" className={navLinkClass}>Patient Success Stories</Link>
              <Link href="/pricing" className={navLinkClass}>Packages & Pricing</Link>
              <Link href="/blog" className={navLinkClass}>Blog & Health Tips</Link>
              <Link href="/contact" className={navLinkClass}>Contact Us</Link>

              <Link
                href="/contact"
                className="bg-nature-green hover:bg-nature-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ml-4"
              >
                Book Free Consultation
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-stone-600 hover:text-nature-green focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transform transition-transform duration-300 lg:hidden overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <div className="px-6 pb-20 space-y-4">
             {/* Mobile Top Bar Info */}
            <div className="pb-4 mb-4 border-b border-stone-100 text-sm text-stone-500 space-y-3 bg-stone-50/50 p-4 rounded-xl">
                <p className="flex items-center font-medium"><Phone className="w-4 h-4 mr-2 text-nature-green" /> +91 88742 06748</p>
                <p className="flex items-center font-medium"><Clock className="w-4 h-4 mr-2 text-nature-green" /> Mon-Sat: 8AM-1PM, 4PM-7PM</p>
            </div>

            <Link href="/" className="block text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">Home</Link>
            <Link href="/about-naturopathy" className="block text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">About Naturopathy</Link>

            <div>
                <button onClick={() => toggleMobileDropdown('treatments')} className="flex w-full justify-between items-center text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">
                    Treatments <ChevronDown className={`w-5 h-5 text-nature-green transition-transform duration-300 ${activeMobileDropdown === 'treatments' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === 'treatments' ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 space-y-2 border-l-2 border-nature-green/20 ml-1">
                        {TREATMENTS_MENU.map((item, idx) => (
                             <Link key={idx} href={`/treatments/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block text-base text-stone-600 py-1 hover:text-nature-green">
                                {item}
                             </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <button onClick={() => toggleMobileDropdown('conditions')} className="flex w-full justify-between items-center text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">
                    Conditions We Treat <ChevronDown className={`w-5 h-5 text-nature-green transition-transform duration-300 ${activeMobileDropdown === 'conditions' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === 'conditions' ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 space-y-2 border-l-2 border-nature-green/20 ml-1">
                        {CONDITIONS_MENU.map((item, idx) => (
                             <Link key={idx} href={`/condition/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block text-base text-stone-600 py-1 hover:text-nature-green">
                                {item}
                             </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Link href="/doctor" className="block text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">Doctors Team</Link>
            <Link href="/patient-success-stories" className="block text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">Patient Success Stories</Link>
            <Link href="/pricing" className="block text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">Packages & Pricing</Link>
            <Link href="/blog" className="block text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">Blog & Health Tips</Link>
            <Link href="/contact" className="block text-lg font-semibold text-stone-800 border-b border-stone-100/50 pb-3 hover:text-nature-green transition-colors">Contact Us</Link>

            <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-nature-green to-nature-dark text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform active:scale-[0.98] transition-all mt-8">
                Book Free Consultation
            </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
