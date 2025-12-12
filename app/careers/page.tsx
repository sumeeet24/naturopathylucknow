import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Briefcase, Send, Users, Heart } from 'lucide-react';
import { EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Careers | Join Our Team at Lucknow Naturopathy Center",
  description: "We are hiring! Join the leading Naturopathy hospital in Lucknow. Openings for Naturopathic Doctors, Therapists, and Nursing staff.",
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-4 block">Work With Us</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Build a Career in Holistic Healing</h1>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
                    Join a team dedicated to restoring health through nature. We are looking for passionate individuals to join our mission.
                </p>
            </div>
        </div>

        <div className="bg-stone-50 py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Introduction */}
                <div className="bg-white p-8 rounded-2xl shadow-sm mb-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-stone-800 mb-4">Why Work at Lucknow Naturopathy Center?</h2>
                        <ul className="space-y-3">
                            {[
                                "Work alongside experienced doctors (28+ years experience)",
                                "Continuous learning and skill development",
                                "Positive, stress-free work environment",
                                "Competitive salary and incentives",
                                "Contribution to society by healing people naturally"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-stone-600 text-sm">
                                    <Heart className="w-4 h-4 text-nature-green mr-3 flex-shrink-0 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 relative h-64 w-full rounded-xl overflow-hidden bg-stone-200">
                        {/* Placeholder for Team Image */}
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559839734-2b71ea86b48e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                </div>

                {/* Open Positions */}
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8">Current Openings</h2>

                <div className="grid gap-6">
                    {[
                        {
                            title: "Naturopathy Therapist (Male/Female)",
                            type: "Full Time",
                            exp: "1-3 Years",
                            desc: "Skilled in Kerala Massage, Hydrotherapy, and Mud Therapy. Must be physically fit and have good communication skills."
                        },
                        {
                            title: "Resident Medical Officer (BNYS)",
                            type: "Full Time / Part Time",
                            exp: "Fresher / Experienced",
                            desc: "Qualified BNYS doctor to handle IPD patients, conduct consultations, and supervise therapies. Accommodation provided."
                        },
                        {
                            title: "Yoga Instructor",
                            type: "Part Time (Morning/Evening)",
                            exp: "2+ Years",
                            desc: "Certified Yoga Instructor (RYT 200/500) proficient in Therapeutic Yoga for diseases like Diabetes and Back Pain."
                        },
                         {
                            title: "Front Desk Executive",
                            type: "Full Time",
                            exp: "1+ Year",
                            desc: "Managing appointments, patient queries, and billing. Good computer knowledge and soft skills required."
                        }
                    ].map((job, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-stone-200 hover:border-nature-green hover:shadow-lg transition-all flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="mb-4 md:mb-0">
                                <h3 className="text-xl font-bold text-stone-800 flex items-center gap-3">
                                    {job.title}
                                    <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded font-normal">{job.type}</span>
                                </h3>
                                <p className="text-stone-500 text-sm mt-2 max-w-2xl">{job.desc}</p>
                                <div className="mt-3 flex items-center text-xs text-nature-green font-bold">
                                    <Briefcase size={14} className="mr-1" /> Experience: {job.exp}
                                </div>
                            </div>
                            <a href={`mailto:${EMAIL}?subject=Application for ${job.title}`} className="bg-stone-900 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-nature-green transition-colors flex items-center whitespace-nowrap">
                                Apply Now <Send size={14} className="ml-2" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-nature-light/50 rounded-xl text-center">
                    <p className="text-stone-700">
                        Don&apos;t see a matching role? Send your resume to <a href={`mailto:${EMAIL}`} className="text-nature-green font-bold underline">{EMAIL}</a> and we will contact you when a position opens.
                    </p>
                </div>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
