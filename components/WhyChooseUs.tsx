import React from 'react';
import { Building2, UserCheck, Microscope, Wallet, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                Why Lucknow Residents Trust Our Naturopathy Hospital <br/>for Chronic Disease Treatment
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                When you search for &quot;naturopathy treatment in Lucknow&quot; or &quot;natural cure for diabetes near me,&quot; you&apos;ll find many options. But here&apos;s what makes our naturopathy hospital the preferred choice for thousands of patients seeking genuine, effective, and scientifically-backed natural healing.
            </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-white md:bg-stone-50 rounded-2xl p-6 md:p-8 shadow-md md:shadow-none hover:shadow-xl transition-all duration-300 border border-stone-100 group">
                <div className="w-14 h-14 bg-nature-light/50 md:bg-nature-light/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-nature-green group-hover:text-white transition-colors text-nature-green shadow-sm md:shadow-none">
                    <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">COMPLETE MEDICAL FACILITY</h3>
                <h4 className="text-xs md:text-sm font-bold text-nature-green uppercase tracking-wider mb-4">Inpatient (IPD) & Outpatient (OPD) Services</h4>
                <p className="text-stone-600 mb-4 leading-relaxed text-sm md:text-base">
                    We&apos;re not just a wellness center – we&apos;re a fully functional naturopathy hospital. Our inpatient facility accommodates patients for 7-21 day intensive disease reversal programs with:
                </p>
                <ul className="space-y-2 mb-6 text-stone-600 text-sm">
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Private AC & Non-AC rooms</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> 24/7 medical supervision</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Customized meal plans (sattvic, therapeutic diet)</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Daily monitoring of vitals (BP, sugar, weight)</li>
                </ul>
                <p className="text-stone-600 mb-6 text-sm">
                    For working professionals, we offer daily OPD therapy sessions.
                </p>
                <Link href="/pricing" className="text-nature-green font-bold hover:text-nature-dark inline-flex items-center">
                    View IPD Packages & Pricing <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white md:bg-stone-50 rounded-2xl p-6 md:p-8 shadow-md md:shadow-none hover:shadow-xl transition-all duration-300 border border-stone-100 group">
                <div className="w-14 h-14 bg-nature-light/50 md:bg-nature-light/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-nature-green group-hover:text-white transition-colors text-nature-green shadow-sm md:shadow-none">
                    <UserCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">EXPERT MEDICAL TEAM</h3>
                <h4 className="text-xs md:text-sm font-bold text-nature-green uppercase tracking-wider mb-4">28+ Years of Specialized Experience</h4>
                <p className="text-stone-600 mb-4 leading-relaxed text-sm md:text-base">
                    Led by Dr. Nand Lal Yadav (BNYS, MD Yoga Therapy), India&apos;s pioneer in Medical Yoga, our team includes:
                </p>
                <ul className="space-y-2 mb-6 text-stone-600 text-sm">
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Certified Naturopathy Doctors (BNYS qualified)</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Clinical Nutritionists & Diet Therapists</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Trained Massage Therapists (Ayurvedic & Naturopathic)</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Experienced Yoga Instructors (RYT certified)</li>
                </ul>
                <p className="text-stone-600 mb-6 text-sm">
                    Dr. Nand Lal Yadav has personally treated over 100,000 patients in his career.
                </p>
                <Link href="/doctor" className="text-nature-green font-bold hover:text-nature-dark inline-flex items-center">
                    Meet Our Doctors <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white md:bg-stone-50 rounded-2xl p-6 md:p-8 shadow-md md:shadow-none hover:shadow-xl transition-all duration-300 border border-stone-100 group">
                <div className="w-14 h-14 bg-nature-light/50 md:bg-nature-light/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-nature-green group-hover:text-white transition-colors text-nature-green shadow-sm md:shadow-none">
                    <Microscope size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">EVIDENCE-BASED PROTOCOLS</h3>
                <h4 className="text-xs md:text-sm font-bold text-nature-green uppercase tracking-wider mb-4">Scientific Approach to Natural Healing</h4>
                <p className="text-stone-600 mb-4 leading-relaxed text-sm md:text-base">
                    Our treatments aren&apos;t based on guesswork. We use evidence-based naturopathy protocols that combine:
                </p>
                <ul className="space-y-2 mb-6 text-stone-600 text-sm">
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Modern diagnostic testing (blood work, body composition)</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Personalized treatment plans based on condition</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Regular progress tracking with measurable markers</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Integration with existing medical care</li>
                </ul>
                <p className="text-stone-600 mb-6 text-sm">
                    We maintain detailed records of patient progress including HbA1c levels and BP readings.
                </p>
                <Link href="/patient-success-stories" className="text-nature-green font-bold hover:text-nature-dark inline-flex items-center">
                    View Patient Case Studies <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white md:bg-stone-50 rounded-2xl p-6 md:p-8 shadow-md md:shadow-none hover:shadow-xl transition-all duration-300 border border-stone-100 group">
                <div className="w-14 h-14 bg-nature-light/50 md:bg-nature-light/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-nature-green group-hover:text-white transition-colors text-nature-green shadow-sm md:shadow-none">
                    <Wallet size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">TRANSPARENT & AFFORDABLE PRICING</h3>
                <h4 className="text-xs md:text-sm font-bold text-nature-green uppercase tracking-wider mb-4">Quality Healthcare Within Your Budget</h4>
                <p className="text-stone-600 mb-4 leading-relaxed text-sm md:text-base">
                    No hidden charges. No surprise bills. We believe natural healing should be accessible to everyone.
                </p>
                <ul className="space-y-2 mb-6 text-stone-600 text-sm">
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Free initial consultation for first-time visitors</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Clearly defined package pricing (₹15,000 - ₹45,000)</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Single therapy sessions available (₹300 - ₹800)</li>
                    <li className="flex items-start"><span className="text-nature-green mr-2">•</span> Insurance support for AYUSH claims</li>
                </ul>
                <p className="text-stone-600 mb-6 text-sm">
                    We&apos;re 30-40% more affordable than similar naturopathy hospitals in metro cities.
                </p>
                <Link href="/pricing" className="text-nature-green font-bold hover:text-nature-dark inline-flex items-center">
                    View Complete Pricing <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
