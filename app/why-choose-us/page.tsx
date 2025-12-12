import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Award, Users, Heart, Leaf, ShieldCheck, Smile, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Why Choose Us | Best Naturopathy Hospital in Lucknow",
  description: "Discover why Lucknow Naturopathy Center is the top choice for natural healing. 15+ years experience, certified doctors, and holistic care.",
  alternates: {
    canonical: '/why-choose-us',
  },
};

export default function WhyChooseUsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-4 block">Excellence in Natural Care</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Why Choose Us?</h1>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
                    Your health is our priority. We combine ancient wisdom with modern diagnostic standards to provide the safest and most effective natural treatment.
                </p>
            </div>
        </div>

        {/* Main Content */}
        <div className="bg-stone-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">A Legacy of Trust & Healing</h2>
                    <div className="w-24 h-1 bg-nature-green mx-auto rounded-full"></div>
                    <p className="mt-6 text-stone-600 max-w-3xl mx-auto leading-relaxed">
                        Since 2010, Lucknow Naturopathy & Yoga Center has been a beacon of hope for those suffering from chronic lifestyle diseases. We don&apos;t just treat symptoms; we empower you to heal yourself through the power of nature.
                    </p>
                </div>

                {/* Grid of Reasons */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[
                        {
                            icon: Award,
                            title: "15+ Years of Experience",
                            description: "Our center is led by Dr. Nand Lal Yadav, a veteran in Naturopathy with over two decades of clinical experience in treating complex chronic cases."
                        },
                        {
                            icon: ShieldCheck,
                            title: "Certified & Registered",
                            description: "We are a fully registered medical facility under the AYUSH ministry, ensuring that you receive care that meets the highest safety and ethical standards."
                        },
                        {
                            icon: Users,
                            title: "Expert Team of Doctors",
                            description: "Our team includes qualified BNYS doctors and certified therapists who work together to design a personalized treatment plan for every patient."
                        },
                        {
                            icon: Leaf,
                            title: "100% Natural & Drugless",
                            description: "Say goodbye to side effects. Our treatments use only natural elements like mud, water, air, and diet to restore your health naturally."
                        },
                        {
                            icon: Heart,
                            title: "Holistic Approach",
                            description: "We treat the whole person—body, mind, and spirit. We combine Naturopathy, Yoga, Acupuncture, and Diet to ensure comprehensive healing."
                        },
                        {
                            icon: DollarSign,
                            title: "Affordable Treatment",
                            description: "We believe health is a right, not a privilege. Our treatment packages are transparently priced and designed to be accessible to all."
                        },
                         {
                            icon: Clock,
                            title: "Flexible Timings",
                            description: "Whether you need residential care (IPD) or daily visits (OPD), our flexible schedules accommodate your busy lifestyle."
                        },
                         {
                            icon: Smile,
                            title: "Personalized Care",
                            description: "You are not just a file number. We offer one-on-one consultations and daily monitoring to track your progress closely."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-stone-100 hover:shadow-xl transition-shadow group">
                            <div className="w-14 h-14 bg-nature-light rounded-full flex items-center justify-center mb-6 group-hover:bg-nature-green transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-nature-green group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-800 mb-3">{item.title}</h3>
                            <p className="text-stone-600 leading-relaxed text-sm">{item.description}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>

        {/* CTA Section */}
        <div className="bg-nature-green py-16 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold mb-6">Ready to Experience the Difference?</h2>
                <p className="text-xl mb-8 opacity-90">Join thousands of satisfied patients who have reclaimed their health naturally.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact" className="bg-white text-nature-green font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition-colors shadow-lg">
                        Book Appointment
                    </Link>
                    <Link href="/treatments" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
                        Explore Treatments
                    </Link>
                </div>
            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
