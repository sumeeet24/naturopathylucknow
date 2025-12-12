import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SEO_AREAS } from '../lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 font-sans border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top Section with Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-stone-800 pb-8">
            <div className="mb-4 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
                    Lucknow Naturopathy & Yoga Center
                </h2>
                <p className="text-sm text-nature-green mt-1 font-medium">
                    Healing Naturally Since 2010 | 15+ Years of Trusted Care
                </p>
            </div>
            <div className="flex space-x-4">
                <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all"><Facebook size={18} /></a>
                <a href="https://instagram.com" aria-label="Instagram" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all"><Instagram size={18} /></a>
                <a href="https://youtube.com" aria-label="YouTube" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all"><Youtube size={18} /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
        </div>

        {/* 5 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Column 1: About Us */}
            <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">About Us</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href="/about-naturopathy" className="hover:text-nature-green transition-colors">About Our Center</Link></li>
                    <li><Link href="/doctor" className="hover:text-nature-green transition-colors">Meet Our Doctors</Link></li>
                    <li><Link href="/why-choose-us" className="hover:text-nature-green transition-colors">Why Choose Us</Link></li>
                    <li><Link href="/philosophy" className="hover:text-nature-green transition-colors">Our Philosophy</Link></li>
                    <li><Link href="/patient-success-stories" className="hover:text-nature-green transition-colors">Success Stories</Link></li>
                    <li><Link href="/facilities" className="hover:text-nature-green transition-colors">Facilities & Amenities</Link></li>
                    <li><Link href="/careers" className="hover:text-nature-green transition-colors">Careers (We&apos;re Hiring!)</Link></li>
                    <li><Link href="/media" className="hover:text-nature-green transition-colors">Media Coverage</Link></li>
                </ul>
            </div>

            {/* Column 2: Treatments */}
            <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Treatments</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href="/treatments" className="hover:text-nature-green transition-colors">All Treatments Overview</Link></li>
                    <li><Link href="/treatments/mud-therapy" className="hover:text-nature-green transition-colors">Mud Therapy</Link></li>
                    <li><Link href="/treatments/hydrotherapy" className="hover:text-nature-green transition-colors">Hydrotherapy</Link></li>
                    <li><Link href="/treatments/massage-therapy" className="hover:text-nature-green transition-colors">Massage Therapy</Link></li>
                    <li><Link href="/treatments/detoxification" className="hover:text-nature-green transition-colors">Detoxification</Link></li>
                    <li><Link href="/yoga-meditation-lucknow" className="hover:text-nature-green transition-colors">Yoga & Meditation</Link></li>
                    <li><Link href="/treatments/shirodhara" className="hover:text-nature-green transition-colors">Shirodhara</Link></li>
                    <li><Link href="/acupressure-acupuncture-lucknow" className="hover:text-nature-green transition-colors">Acupressure</Link></li>
                    <li><Link href="/treatments/diet-therapy" className="hover:text-nature-green transition-colors">Diet Therapy</Link></li>
                </ul>
            </div>

            {/* Column 3: Conditions We Treat */}
            <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Conditions We Treat</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href="/condition/diabetes" className="hover:text-nature-green transition-colors">Diabetes Type 2</Link></li>
                    <li><Link href="/condition/hypertension" className="hover:text-nature-green transition-colors">Hypertension (High BP)</Link></li>
                    <li><Link href="/condition/arthritis" className="hover:text-nature-green transition-colors">Arthritis & Joint Pain</Link></li>
                    <li><Link href="/condition/obesity" className="hover:text-nature-green transition-colors">Obesity & Weight Loss</Link></li>
                    <li><Link href="/condition/digestive-disorders" className="hover:text-nature-green transition-colors">Digestive Disorders</Link></li>
                    <li><Link href="/condition/skin-diseases" className="hover:text-nature-green transition-colors">Skin Diseases</Link></li>
                    <li><Link href="/condition/thyroid" className="hover:text-nature-green transition-colors">Thyroid Disorders</Link></li>
                    <li><Link href="/condition/pcod" className="hover:text-nature-green transition-colors">PCOD/PCOS</Link></li>
                    <li><Link href="/condition/stress-anxiety" className="hover:text-nature-green transition-colors">Stress & Anxiety</Link></li>
                    <li><Link href="/conditions" className="text-nature-green font-medium hover:text-white transition-colors">View All Conditions →</Link></li>
                </ul>
            </div>

            {/* Column 4: Quick Links */}
            <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href="/pricing" className="hover:text-nature-green transition-colors">Packages & Pricing</Link></li>
                    <li><Link href="/contact" className="hover:text-nature-green transition-colors">Book Appointment</Link></li>
                    <li><Link href="/contact" className="hover:text-nature-green transition-colors">Contact Us</Link></li>
                    <li><Link href="/patient-forms" className="hover:text-nature-green transition-colors">Patient Forms</Link></li>
                    <li><Link href="/insurance" className="hover:text-nature-green transition-colors">Insurance Information</Link></li>
                    <li><Link href="/faq" className="hover:text-nature-green transition-colors">FAQ</Link></li>
                    <li><Link href="/blog" className="hover:text-nature-green transition-colors">Blog & Health Tips</Link></li>
                    <li><a href="/brochure.pdf" className="hover:text-nature-green transition-colors">Download Brochure (PDF)</a></li>
                    <li><Link href="/sitemap.xml" className="hover:text-nature-green transition-colors">Sitemap</Link></li>
                </ul>
            </div>

            {/* Column 5: Contact Info */}
            <div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact Info</h3>
                <ul className="space-y-4 text-sm">
                    <li className="flex items-start">
                        <MapPin className="w-5 h-5 text-nature-green mr-3 flex-shrink-0 mt-0.5" />
                        <span>
                            Vibhuti Khand, Gomti Nagar<br/>
                            Lucknow, UP - 226010
                        </span>
                    </li>
                    <li className="flex items-start">
                        <Phone className="w-5 h-5 text-nature-green mr-3 flex-shrink-0 mt-0.5" />
                        <span>
                            +91 88742 06748<br/>
                            +91 81154 00106
                        </span>
                    </li>
                    <li className="flex items-start">
                        <Mail className="w-5 h-5 text-nature-green mr-3 flex-shrink-0 mt-0.5" />
                        <span className="break-all">biotb.instantreply@gmail.com</span>
                    </li>
                    <li className="flex items-start">
                        <Clock className="w-5 h-5 text-nature-green mr-3 flex-shrink-0 mt-0.5" />
                        <span>
                            Mon-Sat: 8AM-1PM, 4PM-7PM<br/>
                            Sunday: Closed
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        {/* Areas Served */}
        <div className="border-t border-stone-800 pt-8 mb-8">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Areas We Serve in Lucknow:</h4>
            <p className="text-xs leading-relaxed text-stone-500">
                {SEO_AREAS.join(' | ')} | Aminabad | Chowk | Charbagh | Telibagh | Viram Khand | Gomti Nagar Extension | Eldeco | Sahara Ganj | Sushant Golf City
            </p>
            <p className="text-xs leading-relaxed text-stone-500 mt-2">
                Also serving nearby cities: Barabanki | Sitapur | Hardoi | Unnao | Raebareli | Sultanpur | Faizabad | Kanpur
            </p>
        </div>

        {/* Certifications */}
        <div className="bg-stone-800/50 rounded-xl p-6 mb-8 border border-stone-800">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Certifications & Memberships:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center"><span className="text-nature-green mr-2">✓</span> Registered with AYUSH (Ministry of Health, Govt. of India)</div>
                <div className="flex items-center"><span className="text-nature-green mr-2">✓</span> ISO Certified for Healthcare Standards</div>
                <div className="flex items-center"><span className="text-nature-green mr-2">✓</span> Member: Indian Naturopathy & Yoga Association</div>
                <div className="flex items-center"><span className="text-nature-green mr-2">✓</span> Certified: Yoga Alliance (RYT-500)</div>
                <div className="flex items-center"><span className="text-nature-green mr-2">✓</span> Approved for Insurance Claims (AYUSH Category)</div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
            <div className="mb-4 md:mb-0">
                © {new Date().getFullYear()} Lucknow Naturopathy & Yoga Center. All Rights Reserved. <br className="hidden md:inline" />
                Designed with ❤️ for Natural Healing | Last Updated: December 2024
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-8 text-[10px] text-stone-600 text-center max-w-4xl mx-auto leading-relaxed">
            MEDICAL DISCLAIMER: &quot;The information provided on this website is for educational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare provider before starting any treatment program. Individual results may vary.&quot;
        </div>

        {/* Trust Badges Row Placeholder - simplified with text for now as images are external */}
        <div className="mt-8 flex justify-center gap-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest">
            <span>[Secure Payment]</span>
            <span>[AYUSH Registered]</span>
            <span>[ISO Certified]</span>
            <span>[Google Verified]</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
