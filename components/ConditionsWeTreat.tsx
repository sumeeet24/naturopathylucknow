import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, Calendar, Activity, Heart, Bone, Utensils, Smile } from 'lucide-react';

const ConditionsWeTreat: React.FC = () => {
  const conditions = [
    {
      id: "diabetes",
      icon: Activity,
      title: "DIABETES TYPE 2 – Natural Diabetes Reversal Program",
      subtitle: "Can diabetes be reversed naturally? Yes – and we've helped hundreds of patients reduce or eliminate diabetes medication.",
      stats: [
        "Average HbA1c reduction: 2-3 points in 3 months",
        "68% of patients reduce medication by 50%+",
        "34% achieve complete medication-free status"
      ],
      includes: ["Low Glycemic Index (GI) Diet Plan", "Mud Therapy on Abdomen", "Medical Yoga (17-asana sequence)", "Pancreas Activation Massage", "Daily Blood Sugar Monitoring"],
      result: `"My HbA1c was 9.2. After 3 months, it's 6.5. Reduced medication from 3 tablets to 1." - Rajesh Verma`,
      price: "₹25,000 - ₹40,000 (3-month complete protocol)",
      primaryCta: "Download Diabetes Reversal Guide (PDF)",
      secondaryCta: "Book Consultation"
    },
    {
      id: "hypertension",
      icon: Heart,
      title: "HYPERTENSION (HIGH BLOOD PRESSURE)",
      subtitle: "Stop relying on lifelong BP medications. Our natural hypertension protocol helps 70%+ patients achieve normal blood pressure.",
      stats: [
        "Systolic BP reduction: 10-15 mmHg",
        "Diastolic BP reduction: 5-10 mmHg",
        "Stress hormone reduction: 30-40%"
      ],
      includes: ["DASH Diet (Indian Adaptation)", "Shirodhara Therapy", "Pranayama & Meditation", "Hydrotherapy for vascular function", "Daily BP Monitoring"],
      result: `"I was on 3 BP medicines. Now medication-free with BP consistently at 125/80." - Suresh Kumar`,
      price: "₹18,000 - ₹35,000 (2-3 month protocol)",
      primaryCta: "Get Free BP Assessment",
      secondaryCta: "Book Consultation"
    },
    {
      id: "arthritis",
      icon: Bone,
      title: "ARTHRITIS & JOINT PAIN – Natural Pain Relief",
      subtitle: "Suffering from knee pain or back pain? Our natural pain management protocols provide lasting relief without surgery.",
      stats: [
        "85% patients report 50%+ pain reduction in 3 weeks",
        "60% achieve normal mobility within 2 months",
        "40% eliminate painkiller dependency completely"
      ],
      includes: ["Potli Massage (Hot Herbal Bolus)", "Kati Basti / Janu Basti", "Mud Packs on inflamed joints", "Anti-Inflammatory Diet", "Medical Yoga"],
      result: `"Doctors suggested knee replacement. After 6 weeks here, I'm pain-free and walking 3 km daily." - Meera Gupta`,
      price: "₹15,000 - ₹30,000",
      primaryCta: "Watch Patient Testimonial Video",
      secondaryCta: "Book Consultation"
    },
    {
      id: "obesity",
      icon: Activity, // Using Activity as a placeholder for weight/scale
      title: "OBESITY & WEIGHT LOSS – Permanent Weight Loss",
      subtitle: "Lose weight the healthy way – sustainably, scientifically, and without starving yourself. No crash diets.",
      stats: [
        "4-6 kg weight loss per month (healthy rate)",
        "2-3 inch reduction in waist circumference",
        "Improved energy levels and digestion"
      ],
      includes: ["Personalized Calorie Plan", "Udvartana Massage (Fat reduction)", "Detoxification Protocol", "Medical Yoga for fat burning", "Behavioral Counseling"],
      result: `"Lost 12 kg in 3 months and kept it off for 1 year now. Finally learned how to eat properly." - Priya Sharma`,
      price: "₹20,000 - ₹35,000",
      primaryCta: "Calculate Your Ideal Weight",
      secondaryCta: "Book Consultation"
    },
    {
      id: "digestive",
      icon: Utensils,
      title: "DIGESTIVE DISORDERS – Complete Gut Healing",
      subtitle: "Suffering from chronic acidity, gas, bloating, IBS, or constipation? Restore your digestive health naturally.",
      stats: [
        "90% constipation patients report relief in 1 week",
        "75% acidity patients stop antacids within 2 weeks",
        "70% IBS patients achieve symptom-free status"
      ],
      includes: ["Colon Hydrotherapy", "Enema Therapy", "Mud Pack on Abdomen", "Gut Healing Diet", "Stress Management"],
      result: `"One day without Pantoprazole meant unbearable pain. Now haven't taken antacid in 6 months!" - Vikram Singh`,
      price: "₹12,000 - ₹25,000",
      primaryCta: "Get Gut Health Assessment",
      secondaryCta: "Book Consultation"
    },
    {
      id: "stress",
      icon: Smile, // Mental health
      title: "STRESS, ANXIETY & DEPRESSION – Mental Wellness",
      subtitle: "Mental health is physical health. Treat anxiety and depression without dependency on psychiatric medications.",
      stats: [
        "Yoga reduces anxiety by 40-50%",
        "Meditation increases GABA levels",
        "Shirodhara reduces cortisol significantly"
      ],
      includes: ["Shirodhara Therapy", "Meditation & Mindfulness", "Pranayama breathwork", "Abhyanga Massage", "Nutritional Psychiatry"],
      result: `"I was on antidepressants for 2 years. Dr. Neelam's sessions brought me back to life." - Suman Gupta`,
      price: "₹15,000 - ₹28,000",
      primaryCta: "Take Mental Health Assessment",
      secondaryCta: "Book Consultation"
    }
  ];

  const otherConditions = [
    { name: "Diabetes Type 2", link: "/conditions/diabetes-type-2" },
    { name: "High Blood Pressure", link: "/conditions/hypertension-high-bp" },
    { name: "Arthritis & Joint Pain", link: "/conditions/arthritis-joint-pain" },
    { name: "Digestive Disorders", link: "/conditions/digestive-disorders" },
    { name: "Obesity & Weight Loss", link: "/conditions/obesity-weight-loss" },
    { name: "Skin Diseases", link: "/conditions/skin-diseases" },
    { name: "Thyroid Disorders", link: "/conditions/thyroid-disorders" },
    { name: "PCOD/PCOS", link: "/conditions/pcod-pcos" },
    { name: "Stress & Anxiety", link: "/conditions/stress-anxiety" },
    { name: "Asthma & Respiratory Issues", link: "/conditions/respiratory" },
    { name: "Kidney Stones", link: "/conditions/kidney-stones" },
    { name: "Fatty Liver Disease", link: "/conditions/fatty-liver" },
    { name: "Migraine & Headaches", link: "/conditions/migraine" },
    { name: "Sciatica & Back Pain", link: "/conditions/back-pain" },
    { name: "Sinusitis", link: "/conditions/sinusitis" },
    { name: "Varicose Veins", link: "/conditions/varicose-veins" },
    { name: "Infertility", link: "/conditions/infertility" },
    { name: "Prostate Problems", link: "/conditions/prostate" }
  ];

  return (
    <section className="py-24 bg-white" id="conditions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                Chronic Diseases We Successfully Treat with Naturopathy in Lucknow
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Naturopathy is most effective for chronic lifestyle diseases that conventional medicine manages but rarely cures. Our hospital specializes in reversing these conditions by addressing root causes.
            </p>
        </div>

        {/* Condition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-20">
            {conditions.map((condition, idx) => (
                <div key={idx} className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:shadow-2xl hover:border-nature-green/30 transition-all duration-300 group">
                    <div className="flex items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-nature-green mr-5 flex-shrink-0 group-hover:bg-nature-green group-hover:text-white transition-colors">
                            <condition.icon size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-800 leading-tight mb-2 group-hover:text-nature-green transition-colors">{condition.title}</h3>
                            <p className="text-sm text-stone-600 leading-relaxed">{condition.subtitle}</p>
                        </div>
                    </div>

                    {/* Stats Box */}
                    <div className="bg-white rounded-xl p-5 mb-6 shadow-sm border border-stone-100">
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Proven Results</h4>
                        <ul className="space-y-2">
                            {condition.stats.map((stat, i) => (
                                <li key={i} className="text-sm font-medium text-stone-700 flex items-start">
                                    <span className="text-nature-green mr-2">📈</span> {stat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-stone-800 mb-2">Treatment Includes:</h4>
                        <div className="flex flex-wrap gap-2">
                            {condition.includes.map((item, i) => (
                                <span key={i} className="text-xs bg-white border border-stone-200 px-2 py-1 rounded text-stone-600">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8 italic text-stone-600 text-sm border-l-4 border-nature-green pl-4 bg-nature-green/5 py-3 pr-2 rounded-r-lg">
                        {condition.result}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-stone-500 mb-6 bg-stone-200/50 px-4 py-2 rounded-lg">
                        <span>PROGRAM INVESTMENT:</span>
                        <span className="text-stone-800">{condition.price}</span>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 bg-white border border-stone-300 text-stone-700 font-bold py-3 rounded-xl hover:bg-stone-100 transition-colors text-xs sm:text-sm flex items-center justify-center">
                            <Download className="w-4 h-4 mr-2" /> {condition.primaryCta.replace("Download ", "").replace(" (PDF)", "")}
                        </button>
                        <Link href={
                            condition.id === 'diabetes' ? '/conditions/diabetes-type-2' :
                            condition.id === 'hypertension' ? '/conditions/hypertension-high-bp' :
                            condition.id === 'arthritis' ? '/conditions/arthritis-joint-pain' :
                            condition.id === 'obesity' ? '/conditions/obesity-weight-loss' :
                            condition.id === 'digestive' ? '/conditions/digestive-disorders' :
                            condition.id === 'stress' ? '/conditions/stress-anxiety' :
                            '/contact'
                        } className="flex-1 bg-nature-green text-white font-bold py-3 rounded-xl hover:bg-nature-dark transition-colors text-xs sm:text-sm flex items-center justify-center shadow-lg shadow-nature-green/20">
                            {condition.secondaryCta} <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        {/* Other Conditions List */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-nature-green rounded-full blur-[100px] opacity-20"></div>

            <h3 className="text-2xl font-serif font-bold mb-8 relative z-10 flex items-center">
                <span className="text-nature-green mr-3">🔥</span> OTHER CONDITIONS WE SUCCESSFULLY TREAT:
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
                {otherConditions.map((item, idx) => (
                    <Link key={idx} href={item.link} className="flex items-center group">
                        <span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                        <span className="text-stone-300 text-sm font-medium group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/50 pb-0.5">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>

            <div className="mt-10 text-center relative z-10">
                <Link href="/conditions" className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-stone-900 transition-all">
                    View All Conditions We Treat <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ConditionsWeTreat;
