import React from 'react';
import { Check, ShieldCheck, Download, CreditCard, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TreatmentPackages: React.FC = () => {
  const packages = [
    {
      title: "INTENSIVE RESIDENTIAL (IPD)",
      subtitle: "For Chronic Disease Reversal",
      price: "₹15,000 - ₹55,000",
      duration: "7 - 21 Days",
      features: [
        "Private AC/Non-AC accommodation",
        "3 wholesome therapeutic meals daily",
        "Minimum 3-4 therapies per day",
        "Daily doctor consultation & monitoring",
        "All medicines & herbal preparations",
        "Medical yoga classes (morning & evening)",
        "Blood tests (initial & final)",
        "Diet chart for home"
      ],
      cta: "Book IPD Admission",
      highlight: true
    },
    {
      title: "OUTPATIENT PROGRAM (OPD)",
      subtitle: "For Daily Visitors",
      price: "₹4,500 - ₹20,000",
      duration: "10 - 30 Sessions",
      features: [
        "Doctor consultation & treatment plan",
        "1-2 therapies per visit (45-90 mins)",
        "Personalized diet chart",
        "Exercise/yoga guidance",
        "Weekly progress monitoring",
        "WhatsApp support",
        "Flexible timings (Morning/Evening)"
      ],
      cta: "Book OPD Appointment",
      highlight: false
    },
    {
      title: "DETOXIFICATION PROGRAMS",
      subtitle: "Complete Body Cleanse",
      price: "₹8,000 - ₹38,000",
      duration: "7 - 21 Days",
      features: [
        "Colon hydrotherapy / Enema",
        "Juice fasting or raw food diet",
        "Steam bath & Sauna",
        "Liver detox protocol",
        "Full Panchakarma (in 21-day plan)",
        "Yoga & Meditation",
        "Complete system reset"
      ],
      cta: "Book Detox Program",
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-stone-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                Naturopathy Treatment Packages & Pricing
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                We believe in complete pricing transparency. No hidden costs. Choose the package that suits your condition and budget.
            </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, idx) => (
                <div key={idx} className={`rounded-3xl p-8 border ${pkg.highlight ? 'bg-white border-nature-green shadow-xl ring-4 ring-nature-green/10 transform md:-translate-y-4' : 'bg-white border-stone-100 shadow-lg'} flex flex-col h-full transition-transform hover:-translate-y-2 duration-300 relative overflow-hidden`}>

                    {pkg.highlight && (
                        <div className="absolute top-0 right-0 bg-nature-green text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                            Most Popular
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-stone-800 mb-1">{pkg.title}</h3>
                        <p className="text-sm text-stone-500 font-medium mb-4">{pkg.subtitle}</p>
                        <div className="text-2xl font-bold text-nature-green mb-1">{pkg.price}</div>
                        <div className="text-xs text-stone-400 font-medium uppercase tracking-wide">{pkg.duration}</div>
                    </div>

                    <div className="flex-grow mb-8">
                        <ul className="space-y-3">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-sm text-stone-600">
                                    <Check className="w-4 h-4 text-nature-green mr-2 flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link
                        href="/contact"
                        className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center transition-all ${
                            pkg.highlight
                            ? 'bg-nature-green text-white hover:bg-nature-dark shadow-lg shadow-nature-green/30'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                    >
                        {pkg.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            ))}
        </div>

        {/* Additional Pricing Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Couple Packages */}
            <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-md">
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 mr-4">
                        <Heart size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-stone-800">Couple Wellness Packages</h3>
                        <p className="text-xs text-stone-500">Heal together, save together</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm border-b border-stone-50 pb-2">
                        <span className="text-stone-700">Romantic Wellness (7 Days)</span>
                        <span className="font-bold text-stone-800">₹35,000</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-stone-50 pb-2">
                        <span className="text-stone-700">Chronic Disease Couple (14 Days)</span>
                        <span className="font-bold text-stone-800">₹50,000</span>
                    </div>
                    <p className="text-xs text-stone-500 italic mt-2">Includes double occupancy room and individual customized treatments.</p>
                </div>
            </div>

            {/* A La Carte */}
            <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-md">
                <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mr-4">
                        <CreditCard size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-stone-800">Single Therapy Sessions</h3>
                        <p className="text-xs text-stone-500">Pay per session</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-stone-600">Full Body Massage</span> <span className="font-bold text-stone-800">₹800</span></div>
                    <div className="flex justify-between"><span className="text-stone-600">Shirodhara</span> <span className="font-bold text-stone-800">₹1,000</span></div>
                    <div className="flex justify-between"><span className="text-stone-600">Potli Massage</span> <span className="font-bold text-stone-800">₹700</span></div>
                    <div className="flex justify-between"><span className="text-stone-600">Colon Hydrotherapy</span> <span className="font-bold text-stone-800">₹1,200</span></div>
                    <div className="flex justify-between"><span className="text-stone-600">Steam Bath</span> <span className="font-bold text-stone-800">₹300</span></div>
                    <div className="flex justify-between"><span className="text-stone-600">Mud Therapy</span> <span className="font-bold text-stone-800">₹400</span></div>
                </div>
                <div className="mt-4 text-center">
                    <Link href="/pricing" className="text-xs font-bold text-nature-green hover:text-nature-dark uppercase tracking-wide">View Full Menu →</Link>
                </div>
            </div>
        </div>

        {/* Payment & Insurance Info */}
        <div className="bg-stone-900 rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 md:max-w-xl">
                <h3 className="font-bold text-xl mb-2 flex items-center">
                    <ShieldCheck className="w-6 h-6 text-nature-green mr-2" />
                    Insurance & Cashless Treatment
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                    We are registered under AYUSH category. We provide all necessary documentation (medical necessity certificate, bills, diagnosis reports) for reimbursement claims from insurers like Star Health, HDFC Ergo, ICICI Lombard, etc.
                </p>
                <div className="flex gap-4 text-xs font-bold text-stone-500 uppercase tracking-wider">
                    <span>EMI Available</span>
                    <span>•</span>
                    <span>All Cards Accepted</span>
                    <span>•</span>
                    <span>UPI / Cash</span>
                </div>
            </div>
            <div>
                <Link
                    href="/contact"
                    className="bg-white text-stone-900 font-bold px-8 py-4 rounded-xl hover:bg-stone-200 transition-colors shadow-lg flex items-center"
                >
                    <Download className="w-4 h-4 mr-2" /> Download Brochure
                </Link>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TreatmentPackages;
