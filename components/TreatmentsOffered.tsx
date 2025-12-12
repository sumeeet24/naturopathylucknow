import React from 'react';
import { Droplets, Brain, Activity, Sun, Flower, Wind, HeartPulse, Palette, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TreatmentsOffered: React.FC = () => {
  const treatments = [
    {
      id: "hydrotherapy",
      icon: Droplets,
      title: "HYDROTHERAPY – Water-Based Healing",
      desc: "The therapeutic use of water at different temperatures to stimulate healing responses in the body.",
      offerings: ["Hip Bath (Sitz Bath)", "Spinal Bath", "Foot Bath", "Steam Bath", "Sauna Therapy", "Underwater Massage", "Immersion Bath", "Enema Therapy"],
      conditions: "Digestive disorders, constipation, arthritis, skin diseases, detoxification, stress management, circulation problems",
      duration: "20-45 minutes per session",
      price: "₹400-₹800 per session",
      cta: "Learn More About Hydrotherapy"
    },
    {
      id: "mud-therapy",
      icon: Palette,
      title: "MUD THERAPY – Earth Element Healing",
      desc: "Therapeutic application of clean, mineral-rich mud to absorb toxins, reduce inflammation, and cool the body.",
      offerings: ["Mud Pack on Abdomen", "Mud Pack on Eyes", "Mud Pack on Joints", "Full Body Mud Bath", "Facial Mud Pack"],
      conditions: "Skin diseases, acidity, constipation, headaches, joint pain, fever, heat-related disorders",
      duration: "30-60 minutes",
      price: "₹300-₹600 per session",
      cta: "Learn More About Mud Therapy"
    },
    {
      id: "massage-therapy",
      icon: HeartPulse,
      title: "THERAPEUTIC MASSAGE – Manual Healing Touch",
      desc: "Specialized naturopathic and Ayurvedic massage techniques to relieve pain, improve circulation, and eliminate toxins.",
      offerings: ["Full Body Oil Massage (Abhyanga)", "Potli Massage (Hot Herbal Bolus)", "Kati Basti", "Janu Basti", "Greeva Basti", "Lymphatic Drainage", "Deep Tissue Massage", "Udvartana (Powder Massage)"],
      conditions: "Arthritis, back pain, neck pain, knee pain, frozen shoulder, sports injuries, stress, insomnia, poor circulation",
      duration: "45-90 minutes",
      price: "₹600-₹1200 per session",
      cta: "Learn More About Massage Therapy"
    },
    {
      id: "yoga-therapy",
      icon: Sun,
      title: "YOGA & MEDITATION THERAPY – Mind-Body Healing",
      desc: "Medical Yoga – specific yoga asanas prescribed like medicine for specific diseases. Not general yoga classes, but therapeutic yoga.",
      offerings: ["Disease-Specific Asana Sequences", "Pranayama (Breathing Exercises)", "Yoga Nidra", "Meditation & Mindfulness", "Surya Namaskar", "Therapeutic Stretching"],
      conditions: "Diabetes, hypertension, thyroid disorders, PCOD, anxiety, depression, asthma, back pain, obesity",
      duration: "45-60 minutes per session",
      price: "Included in all treatment packages; Individual sessions ₹500",
      cta: "Learn More About Medical Yoga"
    },
    {
      id: "detox",
      icon: Activity,
      title: "DETOXIFICATION PROGRAMS – Complete Body Cleanse",
      desc: "Intensive cleansing therapies to eliminate accumulated toxins (morbid matter) that cause chronic diseases.",
      offerings: ["Colon Hydrotherapy", "Enema Therapy", "Shankh Prakshalana", "Juice Fasting", "Raw Food Detox", "Liver Detox Protocol"],
      conditions: "Starting any chronic disease treatment, pre-surgery preparation, post-antibiotic cleanse, weight loss kickstart, general health maintenance",
      duration: "3-7 day programs",
      price: "₹8,000 - ₹18,000 (includes all therapies, diet, accommodation)",
      cta: "View Detox Packages"
    },
    {
      id: "shirodhara",
      icon: Brain,
      title: "SHIRODHARA – Ayurvedic Brain Therapy",
      desc: "Ancient Ayurvedic therapy where warm medicated oil is continuously poured on the forehead to calm the nervous system.",
      offerings: ["Insomnia and sleep disorders", "Anxiety and panic attacks", "Depression and mood disorders", "Migraine and chronic headaches", "Stress-related disorders"],
      conditions: "Mental fatigue, brain fog, hair fall, premature greying",
      duration: "45 minutes",
      price: "₹800-₹1200 per session",
      cta: "Learn More About Shirodhara"
    },
    {
      id: "acupressure",
      icon: Flower,
      title: "ACUPRESSURE & ACUPUNCTURE – Energy Point Therapy",
      desc: "Stimulating specific energy points on the body to relieve pain, balance energy flow, and activate self-healing.",
      offerings: ["Acupressure (Finger Pressure)", "Acupuncture (Needle Therapy)", "Sujok Therapy", "Marma Therapy"],
      conditions: "Chronic pain (back, neck, knee), sciatica, migraine, sinusitis, anxiety, insomnia, digestive issues, hormonal imbalances",
      duration: "30-45 minutes",
      price: "₹400-₹700 per session",
      cta: "Learn More About Acupressure"
    },
    {
      id: "diet-therapy",
      icon: Wind,
      title: "DIET & NUTRITION THERAPY – Food as Medicine",
      desc: "Customized therapeutic diet plans designed to heal specific diseases. Not generic advice, but personalized nutrition prescriptions.",
      offerings: ["Diabetes Diet Plan", "Hypertension Diet", "Weight Loss Diet", "Arthritis Diet", "Digestive Disorder Diet", "Kidney-Friendly Diet", "Therapeutic Fasting Guidance"],
      conditions: "We consider your food preferences, cultural habits, and budget to create a practical eating plan.",
      duration: "Weekly meal plans, recipe guides, grocery lists",
      price: "Included in consultation",
      cta: "Get Personalized Diet Plan"
    }
  ];

  const additionalTherapies = [
    "Chromo Therapy (Color Healing)",
    "Magneto Therapy",
    "Air Bath & Sun Bath",
    "Fasting Therapy",
    "Reflexology",
    "Cupping Therapy",
    "Neti Kriya (Nasal Cleansing)",
    "Kunjal Kriya (Stomach Cleansing)",
    "Basti Kriya (Colon Cleansing)"
  ];

  return (
    <section className="py-24 bg-stone-50" id="treatments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                Natural Therapies Offered at Our Lucknow Naturopathy Hospital
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Every patient receives a personalized treatment plan combining multiple therapies based on their specific condition. Unlike one-size-fits-all approaches, we customize therapy combinations for maximum effectiveness.
            </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-20">
            {treatments.map((treatment, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md md:shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden group flex flex-col h-full">
                    <div className="p-6 md:p-8 flex-grow">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-nature-light/50 md:bg-nature-light/30 flex items-center justify-center text-nature-green group-hover:bg-nature-green group-hover:text-white transition-colors shrink-0">
                                <treatment.icon size={24} />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-stone-800 ml-4 group-hover:text-nature-green transition-colors leading-tight">
                                {treatment.title}
                            </h3>
                        </div>

                        <p className="text-stone-600 mb-6 leading-relaxed italic border-l-4 border-nature-green/30 pl-4 text-sm md:text-base">
                            {treatment.desc}
                        </p>

                        <div className="space-y-4 text-sm text-stone-600">
                             <div>
                                <strong className="block text-stone-800 mb-2 font-bold">What We Offer:</strong>
                                <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                                    {treatment.offerings.map((offer, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-nature-green mr-1.5 mt-0.5 text-xs">●</span>
                                            <span className="text-stone-500 text-xs md:text-sm">{offer}</span>
                                        </li>
                                    ))}
                                </ul>
                             </div>

                             <div>
                                <strong className="text-stone-800 font-bold">Conditions Treated:</strong> <span className="text-stone-500 text-xs md:text-sm">{treatment.conditions}</span>
                             </div>

                             <div className="flex flex-wrap gap-2 md:gap-4 pt-2 text-xs font-semibold text-stone-500 uppercase tracking-wide">
                                <span className="bg-stone-50 px-3 py-1.5 rounded border border-stone-200">⏳ {treatment.duration}</span>
                                <span className="bg-stone-50 px-3 py-1.5 rounded border border-stone-200">💰 {treatment.price}</span>
                             </div>
                        </div>
                    </div>
                    <div className="p-4 md:p-6 bg-stone-50 border-t border-stone-100 mt-auto">
                         <Link href={`/treatments/${treatment.id}`} className="flex items-center justify-center w-full bg-white border border-stone-200 text-stone-700 font-bold py-3.5 md:py-3 rounded-xl hover:bg-nature-green hover:text-white hover:border-nature-green active:bg-nature-green active:text-white active:border-nature-green transition-all group/btn shadow-sm md:shadow-none">
                            {treatment.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                         </Link>
                    </div>
                </div>
            ))}
        </div>

        {/* Additional Therapies */}
        <div className="bg-white rounded-2xl p-10 shadow-lg border border-stone-100 text-center">
            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-8 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-nature-green mr-3" /> OTHER NATURAL THERAPIES
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {additionalTherapies.map((therapy, idx) => (
                    <span key={idx} className="inline-block bg-stone-50 border border-stone-200 rounded-full px-6 py-3 text-stone-700 font-medium hover:bg-nature-light hover:text-nature-green hover:border-nature-green transition-colors cursor-default">
                        {therapy}
                    </span>
                ))}
            </div>
            <Link href="/treatments" className="inline-flex items-center text-nature-green font-bold hover:text-nature-dark border-b-2 border-nature-green hover:border-nature-dark pb-1 transition-colors">
                View All Treatments <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
        </div>

      </div>
    </section>
  );
};

// Helper icon component for formatting
const Leaf = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);

export default TreatmentsOffered;
