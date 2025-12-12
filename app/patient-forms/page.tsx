import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { FileText, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: "Patient Forms | Download Registration & Consent Forms",
  description: "Download necessary patient forms to save time during your visit. Registration form, Medical History, and Consent forms available.",
  alternates: {
    canonical: '/patient-forms',
  },
};

export default function PatientFormsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-stone-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">Patient Forms</h1>
                <p className="text-stone-600 mb-10">
                    To expedite your check-in process, please download, print, and fill out the relevant forms before your appointment.
                </p>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 divide-y divide-stone-100">
                    {[
                        { title: "New Patient Registration Form", desc: "Basic information and contact details.", size: "150 KB" },
                        { title: "Detailed Medical History", desc: "Comprehensive questionnaire about your past and current health.", size: "240 KB" },
                        { title: "Consent for Treatment", desc: "Legal consent for naturopathic therapies and procedures.", size: "110 KB" },
                        { title: "Dietary Assessment Form", desc: "Log of your current dietary habits for our nutritionist.", size: "130 KB" },
                        { title: "IPD Admission Rules", desc: "Guidelines for patients staying in the hospital.", size: "90 KB" }
                    ].map((form, idx) => (
                        <div key={idx} className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-stone-50 transition-colors">
                            <div className="flex items-start mb-4 sm:mb-0">
                                <div className="p-3 bg-stone-100 rounded-lg mr-4">
                                    <FileText className="text-stone-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-800 text-lg">{form.title}</h3>
                                    <p className="text-stone-500 text-sm">{form.desc}</p>
                                    <span className="text-xs text-stone-400 mt-1 inline-block">PDF • {form.size}</span>
                                </div>
                            </div>
                            <button className="flex items-center font-bold text-nature-green hover:text-stone-900 transition-colors">
                                <Download size={18} className="mr-2" /> Download
                            </button>
                        </div>
                    ))}
                </div>

                <p className="text-xs text-stone-400 mt-6 text-center">
                    Note: If you cannot print these forms, they will be provided to you at the reception desk upon arrival.
                </p>

            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
