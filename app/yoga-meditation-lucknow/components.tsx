'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, CalendarCheck, Award, MapPin,
  ChevronDown, Star, Activity, Users,
  Home, Briefcase, Brain, Play, Clock
} from 'lucide-react';

// --- Types ---
interface TabData {
  id: string;
  label: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

// --- Components ---

export const ImmediateTrustSection = () => {
  return (
    <section className="bg-[#FDFBF7] py-8 border-b border-stone-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-nature-green/10 p-3 rounded-full mb-3 text-nature-green">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-800 text-sm md:text-base">Quick Response</h3>
            <p className="text-xs text-stone-500">Call answered in 30 seconds</p>
            <a href="tel:8115400106" className="text-nature-green font-bold text-sm mt-1">8115400106</a>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-nature-green/10 p-3 rounded-full mb-3 text-nature-green">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-800 text-sm md:text-base">Free Trial Class</h3>
            <p className="text-xs text-stone-500">No commitment required</p>
            <span className="text-nature-green font-bold text-sm mt-1">Book First Class Free</span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-nature-green/10 p-3 rounded-full mb-3 text-nature-green">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-800 text-sm md:text-base">Qualified Expert</h3>
            <p className="text-xs text-stone-500">BYN, PGDNYS, UGC NET</p>
            <span className="text-nature-green font-bold text-sm mt-1">28 Years Experience</span>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-nature-green/10 p-3 rounded-full mb-3 text-nature-green">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-800 text-sm md:text-base">All Lucknow Areas</h3>
            <p className="text-xs text-stone-500">Gomti Nagar, Aliganj</p>
            <span className="text-nature-green font-bold text-sm mt-1">Home Visits Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('medical-yoga');

  const tabs: TabData[] = [
    {
      id: 'medical-yoga',
      label: 'Medical Yoga',
      icon: Activity,
      content: (
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-nature-green/10 p-3 rounded-full text-nature-green">
              <Activity className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-nature-green">MEDICAL YOGA THERAPY - The Healing Science</h3>
          </div>
          <p className="text-stone-700 mb-6 text-lg">
            This is not exercise—it&apos;s medicine without pills. Dr. Yadav uses specific yoga asanas, breathing techniques, and meditation to treat chronic diseases that plague modern Lucknow residents.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-stone-800 mb-3 border-b border-stone-200 pb-2">WHAT IT TREATS:</h4>
              <ul className="space-y-2">
                {[
                  "Type 2 Diabetes - Stimulate pancreas, regulate insulin",
                  "Hypertension (High BP) - Lower blood pressure naturally",
                  "Thyroid Disorders - Balance hormone production",
                  "Obesity & Weight Management - Metabolic correction",
                  "Back Pain & Sciatica - Spine strengthening & pain relief"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-nature-green mt-1">●</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
               <h4 className="font-bold text-stone-800 mb-3 border-b border-stone-200 pb-2">ADDITIONAL CONDITIONS:</h4>
               <ul className="space-y-2">
                {[
                  "Arthritis & Joint Pain - Improved mobility without medication",
                  "PCOD/PCOS - Hormonal balance for women",
                  "Digestive Issues - IBS, acidity, constipation",
                  "Stress, Anxiety & Depression - Mental health restoration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-stone-700">
                    <span className="text-nature-green mt-1">●</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mb-6">
            <h4 className="font-bold text-stone-800 mb-4">SESSION DETAILS:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               <div>
                 <span className="block text-xs text-stone-500 uppercase tracking-wider">Duration</span>
                 <span className="font-medium">60-90 minutes</span>
               </div>
               <div>
                 <span className="block text-xs text-stone-500 uppercase tracking-wider">Includes</span>
                 <span className="font-medium">Health assessment, customized asanas</span>
               </div>
               <div>
                 <span className="block text-xs text-stone-500 uppercase tracking-wider">Target</span>
                 <span className="font-medium">Anyone with chronic health conditions</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-nature-green/5 p-6 rounded-xl border border-nature-green/20">
            <div>
              <h4 className="font-bold text-nature-green mb-1">PRICING:</h4>
              <p className="text-sm text-stone-600">Individual Session: ₹1,500 | Monthly (8 sessions): ₹10,000</p>
            </div>
            <a href="tel:8115400106" className="mt-4 md:mt-0 bg-nature-green text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-md">
              Schedule Consultation
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'group-classes',
      label: 'Group Classes',
      icon: Users,
      content: (
        <div className="animate-fade-in-up">
           <div className="flex items-center gap-3 mb-4">
            <div className="bg-nature-green/10 p-3 rounded-full text-nature-green">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-nature-green">GROUP YOGA CLASSES - Learn with Community</h3>
          </div>
          <p className="text-stone-700 mb-6 text-lg">
             Join our small-batch group yoga classes conducted in a serene, well-equipped studio in Lucknow. Perfect for beginners to advanced practitioners looking for regular practice.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
               <h4 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                 <Clock className="w-4 h-4 text-nature-green"/> MORNING BATCHES
               </h4>
               <ul className="space-y-3">
                 <li className="flex justify-between border-b border-stone-200 pb-2">
                   <span>6:00 AM - 7:00 AM</span>
                   <span className="text-sm bg-stone-200 px-2 py-0.5 rounded text-stone-600">Advanced</span>
                 </li>
                 <li className="flex justify-between pb-2">
                   <span>7:30 AM - 8:30 AM</span>
                   <span className="text-sm bg-nature-green/20 text-nature-green px-2 py-0.5 rounded font-bold">Most Popular</span>
                 </li>
               </ul>
            </div>
            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
               <h4 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                 <Clock className="w-4 h-4 text-nature-green"/> EVENING BATCHES
               </h4>
               <ul className="space-y-3">
                 <li className="flex justify-between border-b border-stone-200 pb-2">
                   <span>5:30 PM - 6:30 PM</span>
                   <span className="text-sm bg-stone-200 px-2 py-0.5 rounded text-stone-600">Beginners</span>
                 </li>
                 <li className="flex justify-between pb-2">
                   <span>7:00 PM - 8:00 PM</span>
                   <span className="text-sm bg-stone-200 px-2 py-0.5 rounded text-stone-600">Stress Relief</span>
                 </li>
               </ul>
            </div>
          </div>

          <div className="mb-8">
             <h4 className="font-bold text-stone-800 mb-3">WHAT&apos;S INCLUDED:</h4>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {["Yoga mats provided", "Pranayama", "Meditation & Yoga Nidra", "Diet guidance", "Progress tracking"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-stone-700 bg-white p-2 rounded border border-stone-100">
                    <span className="text-nature-green">✓</span> {item}
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-nature-green/5 p-6 rounded-xl border border-nature-green/20 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
             <div>
               <h4 className="font-bold text-nature-green mb-1">MONTHLY FEE: ₹2,000/month</h4>
               <p className="text-sm text-stone-600">Special Offer: First class FREE - No commitment required</p>
             </div>
             <a href="tel:8115400106" className="mt-4 md:mt-0 bg-nature-green text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-md">
               Book FREE Trial Class
             </a>
          </div>
        </div>
      )
    },
    {
      id: 'home-visits',
      label: 'Home Visits',
      icon: Home,
      content: (
        <div className="animate-fade-in-up">
           <div className="flex items-center gap-3 mb-4">
            <div className="bg-nature-green/10 p-3 rounded-full text-nature-green">
              <Home className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-nature-green">PRIVATE YOGA AT HOME - Personalized & Convenient</h3>
          </div>
          <p className="text-stone-700 mb-6 text-lg">
             Can&apos;t visit the center? Dr. Yadav provides personalized yoga sessions at your home across Lucknow.
          </p>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm mb-6">
             <h4 className="font-bold text-stone-800 mb-4 text-center">AREAS COVERED IN LUCKNOW</h4>
             <div className="flex flex-wrap justify-center gap-2">
               {["Gomti Nagar", "Aliganj", "Hazratganj", "Indira Nagar", "Mahanagar", "Jankipuram", "Ashiyana", "Vikas Nagar", "Rajajipuram", "Cantonment"].map((area, i) => (
                 <span key={i} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm">{area}</span>
               ))}
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div>
                <h4 className="font-bold text-stone-800 mb-3">IDEAL FOR:</h4>
                <ul className="space-y-2">
                  {["Busy professionals", "Elderly with mobility issues", "Post-surgery recovery", "Privacy-seeking individuals", "Families"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-700">
                      <span className="w-1.5 h-1.5 bg-nature-green rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-stone-800 mb-3">HOME VISIT FEES:</h4>
                <ul className="space-y-3">
                   <li className="flex justify-between border-b border-stone-100 pb-2">
                     <span>Individual (1 person)</span>
                     <span className="font-bold">₹3,000 / session</span>
                   </li>
                   <li className="flex justify-between border-b border-stone-100 pb-2">
                     <span>Couple (2 people)</span>
                     <span className="font-bold">₹4,000 / session</span>
                   </li>
                   <li className="flex justify-between border-b border-stone-100 pb-2">
                     <span>Family (3-4 people)</span>
                     <span className="font-bold">₹5,000 / session</span>
                   </li>
                </ul>
             </div>
          </div>

          <div className="text-center">
             <a href="tel:8115400106" className="inline-block bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-md">
               Inquire About Home Visits
             </a>
          </div>
        </div>
      )
    },
    {
      id: 'corporate',
      label: 'Corporate',
      icon: Briefcase,
      content: (
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-nature-green/10 p-3 rounded-full text-nature-green">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-nature-green">CORPORATE WELLNESS YOGA</h3>
          </div>
          <p className="text-stone-700 mb-6 text-lg">
             Lucknow&apos;s IT companies, banks, hospitals, and corporate offices trust Dr. Yadav for employee wellness programs. Reduce workplace stress and improve productivity.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div className="bg-stone-50 p-6 rounded-xl">
                <h4 className="font-bold text-stone-800 mb-4">PROGRAM INCLUDES:</h4>
                <ul className="space-y-2">
                  {["On-site yoga sessions", "Stress management workshops", "Breathing techniques for focus", "Ergonomic posture correction", "Meditation for mental clarity"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-700">
                      <span className="text-nature-green">✓</span> {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-stone-50 p-6 rounded-xl">
                <h4 className="font-bold text-stone-800 mb-4">BENEFITS FOR ORGANIZATION:</h4>
                <ul className="space-y-2">
                  {["Reduced sick leaves", "Improved employee morale", "Enhanced productivity & focus", "Lower healthcare costs", "Better team bonding"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-700">
                      <span className="text-nature-green">✓</span> {item}
                    </li>
                  ))}
                </ul>
             </div>
          </div>

          <div className="text-center">
             <a href="tel:8115400106" className="inline-block bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-md">
               Request Corporate Proposal
             </a>
          </div>
        </div>
      )
    },
    {
      id: 'meditation',
      label: 'Meditation',
      icon: Brain,
      content: (
        <div className="animate-fade-in-up">
           <div className="flex items-center gap-3 mb-4">
            <div className="bg-nature-green/10 p-3 rounded-full text-nature-green">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-nature-green">MEDITATION & BREATHING MASTERY</h3>
          </div>
          <p className="text-stone-700 mb-6 text-lg">
             In Lucknow&apos;s fast-paced environment, your mind needs rest. Learn scientifically-proven meditation techniques and advanced pranayama from a UGC NET qualified expert.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
             <div>
                <h4 className="font-bold text-stone-800 mb-3">WHAT YOU&apos;LL LEARN:</h4>
                <ul className="space-y-2">
                   {[
                     "Mindfulness Meditation - Be present",
                     "Yoga Nidra - Deep relaxation",
                     "Anulom Vilom - Brain balance",
                     "Kapalbhati - Cleanse system",
                     "Bhramari - Stress relief"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-stone-700">
                       <span className="w-1.5 h-1.5 bg-nature-green rounded-full"></span> {item}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="bg-nature-green/5 p-6 rounded-xl border border-nature-green/10">
                <h4 className="font-bold text-stone-800 mb-3">CLASS DETAILS:</h4>
                <div className="space-y-3">
                   <div className="flex justify-between">
                     <span className="text-stone-600">Duration</span>
                     <span className="font-medium">45 minutes</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-stone-600">Schedule</span>
                     <span className="font-medium">Sat & Sun</span>
                   </div>
                   <div className="flex justify-between border-t border-nature-green/20 pt-2 mt-2">
                     <span className="text-stone-600">Fee</span>
                     <span className="font-bold text-nature-green">₹1,500/month</span>
                   </div>
                </div>
             </div>
          </div>

          <div className="text-center">
             <a href="tel:8115400106" className="inline-block bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition shadow-md">
               Join Meditation Program
             </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-stone-100 overflow-hidden">
      {/* Mobile Accordion / Desktop Tabs Header */}
      <div className="flex overflow-x-auto border-b border-stone-200 hide-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-nature-green text-nature-green bg-nature-green/5'
                  : 'border-transparent text-stone-500 hover:text-stone-800 hover:bg-stone-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-bold text-sm md:text-base">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 min-h-[400px]">
        {tabs.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
};

export const ConditionsAccordion = () => {
  const [openItem, setOpenItem] = useState<string | null>('diabetes');

  const conditions = [
    {
      id: 'diabetes',
      title: '🩸 Yoga for Diabetes - Control Blood Sugar Naturally',
      content: (
        <>
          <p className="mb-4 text-stone-700">Diabetes has become epidemic in Lucknow. Dr. Yadav&apos;s Medical Yoga for Diabetes focuses on stimulating the pancreas and improving insulin sensitivity through specific abdominal compression asanas and metabolic pranayama.</p>
          <div className="bg-green-50 border border-green-100 p-3 rounded-lg mb-4 text-sm text-green-800 font-medium">
             SUCCESS RATE: 82% of patients show significant blood sugar reduction within 3 months.
          </div>
          <div className="mb-4">
             <h4 className="font-bold text-stone-800 text-sm mb-2">TARGETED ASANAS:</h4>
             <ul className="text-sm text-stone-700 list-disc pl-5 space-y-1">
               <li>Mandukasana (Frog Pose) - Direct pancreatic stimulation</li>
               <li>Ardha Matsyendrasana - Abdominal organ massage</li>
               <li>Paschimottanasana - Liver & pancreas activation</li>
               <li>Kapalbhati Pranayama - Metabolic boost</li>
             </ul>
          </div>
          <blockquote className="italic text-stone-600 border-l-4 border-nature-green pl-3 mb-4 text-sm">
             &quot;My fasting sugar was 180. After 4 months with Dr. Yadav, it&apos;s now 105.&quot; — Rajesh Kumar
          </blockquote>
          <a href="tel:8115400106" className="inline-block text-nature-green font-bold text-sm hover:underline">
             Book Diabetes Consultation →
          </a>
        </>
      )
    },
    {
      id: 'bp',
      title: '💓 Yoga for High Blood Pressure - Lower BP Naturally',
      content: (
        <>
          <p className="mb-4 text-stone-700">Hypertension affects 1 in 3 adults in Lucknow. Medical Yoga for BP focuses on activating the parasympathetic nervous system (rest & digest mode) to naturally lower blood pressure.</p>
          <div className="mb-4">
             <h4 className="font-bold text-stone-800 text-sm mb-2">THERAPEUTIC ASANAS:</h4>
             <ul className="text-sm text-stone-700 list-disc pl-5 space-y-1">
               <li>Shavasana (Corpse Pose) - Ultimate BP reducer</li>
               <li>Viparita Karani (Legs Up Wall) - Improves circulation</li>
               <li>Anulom Vilom & Bhramari - Lowers BP within minutes</li>
             </ul>
          </div>
           <div className="bg-red-50 border border-red-100 p-3 rounded-lg mb-4 text-sm text-red-800">
             <strong>WHAT TO AVOID:</strong> No inversions (headstand), no breath retention, no intense backbends.
          </div>
          <a href="tel:8115400106" className="inline-block text-nature-green font-bold text-sm hover:underline">
             Start BP Management Yoga →
          </a>
        </>
      )
    },
    {
      id: 'weight-loss',
      title: '⚖️ Yoga for Weight Loss - Sustainable Fat Reduction',
      content: (
        <>
           <p className="mb-4 text-stone-700">Lucknow&apos;s food culture makes weight management challenging. Dr. Yadav&apos;s approach combines calorie-burning dynamic yoga with metabolic pranayama.</p>
           <p className="mb-4 text-stone-700 text-sm">NOT JUST EXERCISE: Yoga balances hormones (thyroid, cortisol, insulin) that regulate weight—this is why it works when diets fail.</p>
           <div className="mb-4">
             <h4 className="font-bold text-stone-800 text-sm mb-2">POWER ASANAS:</h4>
             <ul className="text-sm text-stone-700 list-disc pl-5 space-y-1">
               <li>Surya Namaskar (Sun Salutation) - 12 rounds = 417 calories</li>
               <li>Navasana (Boat Pose) - Blast belly fat</li>
               <li>Kapalbhati & Bhastrika - Ignite digestive fire</li>
             </ul>
          </div>
          <div className="text-sm text-stone-600 mb-4 font-medium">AVERAGE RESULTS: 8-12 kg weight loss in 3 months.</div>
           <a href="tel:8115400106" className="inline-block text-nature-green font-bold text-sm hover:underline">
             Start Weight Loss Journey →
          </a>
        </>
      )
    },
    {
      id: 'back-pain',
      title: '🦴 Yoga for Back Pain - Permanent Relief',
      content: (
        <>
          <p className="mb-4 text-stone-700">IT professionals and desk workers in Lucknow suffer from chronic back pain. Dr. Yadav&apos;s therapeutic yoga addresses the root cause: weak core and poor posture.</p>
          <div className="mb-4">
             <h4 className="font-bold text-stone-800 text-sm mb-2">HEALING ASANAS:</h4>
             <ul className="text-sm text-stone-700 list-disc pl-5 space-y-1">
               <li>Marjaryasana-Bitilasana (Cat-Cow) - Spine mobilization</li>
               <li>Bhujangasana (Cobra Pose) - Strengthen lumbar muscles</li>
               <li>Setu Bandhasana (Bridge Pose) - Core activation</li>
             </ul>
          </div>
          <blockquote className="italic text-stone-600 border-l-4 border-nature-green pl-3 mb-4 text-sm">
             &quot;I couldn&apos;t sit for more than 20 minutes. After 6 weeks, I&apos;m pain-free.&quot; — Amit Singh
          </blockquote>
           <a href="tel:8115400106" className="inline-block text-nature-green font-bold text-sm hover:underline">
             Get Back Pain Assessment →
          </a>
        </>
      )
    },
    {
      id: 'stress',
      title: '🧠 Yoga for Mental Health - Anxiety & Depression',
      content: (
        <>
          <p className="mb-4 text-stone-700">Medical yoga activates neurotransmitters (serotonin, dopamine) better than many medications, without side effects.</p>
          <div className="mb-4">
             <h4 className="font-bold text-stone-800 text-sm mb-2">THERAPEUTIC PROTOCOL:</h4>
             <ul className="text-sm text-stone-700 list-disc pl-5 space-y-1">
               <li>Pranayama - Instant nervous system regulation</li>
               <li>Yoga Nidra - Deep subconscious healing</li>
               <li>Balasana - Feel safe & grounded</li>
             </ul>
          </div>
           <a href="tel:8115400106" className="inline-block text-nature-green font-bold text-sm hover:underline">
             Book Mental Wellness Session →
          </a>
        </>
      )
    },
     {
      id: 'thyroid',
      title: '🦋 Yoga for Thyroid - Balance Hormones',
      content: (
        <>
          <p className="mb-4 text-stone-700">Dr. Yadav&apos;s Medical Yoga directly stimulates the thyroid gland through throat-compressing asanas and specific pranayama to regulate T3 & T4.</p>
          <div className="mb-4">
             <h4 className="font-bold text-stone-800 text-sm mb-2">SPECIFIC ASANAS:</h4>
             <ul className="text-sm text-stone-700 list-disc pl-5 space-y-1">
               <li>Sarvangasana (Shoulder Stand) - Maximum thyroid stimulation</li>
               <li>Matsyasana (Fish Pose) - Thyroid stretch</li>
               <li>Ujjayi Pranayama - Throat-focused breathing</li>
             </ul>
          </div>
           <a href="tel:8115400106" className="inline-block text-nature-green font-bold text-sm hover:underline">
             Book Thyroid Yoga Therapy →
          </a>
        </>
      )
    },
     {
      id: 'pcod',
      title: '🌸 Yoga for PCOD/PCOS - Restore Balance',
      content: (
        <>
          <p className="mb-4 text-stone-700">Medical Yoga helps regulate menstrual cycles, reduce ovarian cysts, and improve fertility naturally.</p>
          <div className="mb-4">
             <h4 className="font-bold text-stone-800 text-sm mb-2">HEALING APPROACH:</h4>
             <ul className="text-sm text-stone-700 list-disc pl-5 space-y-1">
               <li>Baddha Konasana (Butterfly) - Ovarian stimulation</li>
               <li>Surya Namaskar - Weight management (reduces insulin resistance)</li>
               <li>Pranayama - Stress reduction (major PCOD trigger)</li>
             </ul>
          </div>
           <a href="tel:8115400106" className="inline-block text-nature-green font-bold text-sm hover:underline">
             Get PCOD Treatment Plan →
          </a>
        </>
      )
    }
  ];

  return (
    <div className="space-y-3">
      {conditions.map((item) => (
        <div key={item.id} className="border border-stone-200 rounded-xl bg-white overflow-hidden">
          <button
            onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
              openItem === item.id ? 'bg-nature-green/5' : 'hover:bg-stone-50'
            }`}
          >
            <span className="font-bold text-stone-800 text-sm md:text-base">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-stone-400 transition-transform ${
                openItem === item.id ? 'rotate-180 text-nature-green' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openItem === item.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 border-t border-stone-100">
               {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "What are the yoga class timings in Lucknow?", a: "We offer morning batches at 6:00 AM and 7:30 AM, and evening batches at 5:30 PM and 7:00 PM, Monday to Saturday. Sunday Closed." },
        { q: "How much do yoga classes cost?", a: "Monthly fees start from ₹2,000 for group classes. Individual medical yoga therapy sessions are ₹1,500 per session. First trial class is FREE." },
        { q: "Can yoga really cure diabetes?", a: "82% of Dr. Yadav's diabetes patients show significant blood sugar reduction within 3 months. It's not magic, it's physiology - stimulating the pancreas." },
        { q: "Do you offer home visits?", a: "Yes, Dr. Yadav offers home visit sessions across Gomti Nagar, Aliganj, Hazratganj, and Indira Nagar. Fees start from ₹3,000 per session." },
        { q: "I am a beginner. Can I join?", a: "Absolutely! The 7:30 AM and 5:30 PM batches are designed for beginners. We provide all equipment and step-by-step guidance." },
        { q: "Is it safe for seniors?", a: "Yes, we specialize in Gentle Yoga for seniors (60+) to improve mobility and balance without strain." }
    ];

    return (
        <div className="space-y-3">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-lg overflow-hidden">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex justify-between items-center p-4 text-left font-bold text-stone-800 hover:bg-stone-50 transition"
                    >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180 text-nature-green' : 'text-stone-400'}`} />
                    </button>
                    {openIndex === index && (
                        <div className="p-4 pt-0 text-stone-600 border-t border-stone-100 mt-2 bg-stone-50/50">
                            {faq.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
