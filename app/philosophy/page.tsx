import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Leaf, Droplets, Sun, Wind, Mountain, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Philosophy | Naturopathy & Yoga Principles",
  description: "Understand the core philosophy of Naturopathy: The body heals itself. Learn about the 5 Elements (Panchamahabhuta) and holistic healing.",
  alternates: {
    canonical: '/philosophy',
  },
};

export default function PhilosophyPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-4 block">Ancient Wisdom</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Healing Philosophy</h1>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
                   &quot;Nature itself is the best physician.&quot; — Hippocrates
                </p>
            </div>
        </div>

        {/* Core Beliefs */}
        <div className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-stone prose-lg mx-auto">
                    <p className="lead text-center text-xl text-stone-600 mb-12 italic">
                        At Lucknow Naturopathy Center, we believe that health is not just the absence of disease, but a state of complete physical, mental, and spiritual well-being.
                    </p>

                    <h2 className="text-3xl font-serif font-bold text-stone-800 mt-12 mb-6 text-center">The 5 Great Elements (Panchamahabhuta)</h2>
                    <p className="text-center mb-10">
                        Our body is composed of five great elements of nature. Imbalance in these elements causes disease; restoring balance cures it.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-4 text-center mb-20">
                    {[
                        { icon: Mountain, name: "Earth (Prithvi)", desc: "Mud Therapy" },
                        { icon: Droplets, name: "Water (Jala)", desc: "Hydrotherapy" },
                        { icon: Sun, name: "Fire (Agni)", desc: "Sun Bath" },
                        { icon: Wind, name: "Air (Vayu)", desc: "Breathing/Pranayama" },
                        { icon: Leaf, name: "Ether (Akasha)", desc: "Fasting" },
                    ].map((el, idx) => (
                        <div key={idx} className="p-6 bg-stone-50 rounded-xl hover:bg-nature-light/30 transition-colors border border-stone-100">
                            <el.icon className="w-8 h-8 mx-auto text-nature-green mb-3" />
                            <h3 className="font-bold text-stone-800">{el.name}</h3>
                            <p className="text-xs text-stone-500 mt-1">{el.desc}</p>
                        </div>
                    ))}
                </div>

                {/* 10 Principles */}
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-10 text-center">Ten Basic Principles of Naturopathy</h2>
                <div className="space-y-6">
                    {[
                        "All diseases, their causes, and their treatment are one.",
                        "The primary cause of disease is not bacteria or virus, but the accumulation of morbid matter.",
                        "Acute diseases (fever, cold, diarrhea) are self-healing efforts of the body.",
                        "Nature is the greatest healer. The body has the capacity to heal itself.",
                        "In Naturopathy, the patient is treated, not the disease.",
                        "Diagnosis is easily possible through facial expression and iris diagnosis.",
                        "Chronic diseases are the outcome of suppression of acute diseases.",
                        "Nature Cure treats the body as a whole (physical, mental, spiritual).",
                        "No strong medicines or drugs are used; food is the only medicine.",
                        "Prayer acts as a curative force."
                    ].map((principle, idx) => (
                        <div key={idx} className="flex items-start bg-stone-50 p-4 rounded-lg border-l-4 border-nature-green">
                            <span className="font-bold text-nature-green mr-4 text-xl">{idx + 1}.</span>
                            <p className="text-stone-700 font-medium">{principle}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-stone-900 text-white p-10 rounded-2xl text-center">
                    <HeartHandshake className="w-12 h-12 text-nature-green mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-4">Our Promise to You</h3>
                    <p className="text-stone-300 leading-relaxed max-w-2xl mx-auto">
                        We promise to treat you with compassion, respect, and honesty. We will never prescribe unnecessary treatments. Our goal is to make you independent of doctors, including us.
                    </p>
                </div>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
