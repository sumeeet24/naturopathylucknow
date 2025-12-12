import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Insurance Information | Reimbursement for Naturopathy",
  description: "Learn about insurance coverage for Naturopathy treatments. We provide necessary documentation for AYUSH reimbursement claims.",
  alternates: {
    canonical: '/insurance',
  },
};

export default function InsurancePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-stone-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <ShieldCheck className="w-16 h-16 text-nature-green mx-auto mb-4" />
                    <h1 className="text-3xl font-serif font-bold text-stone-800 mb-4">Insurance & Reimbursement</h1>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        We are a registered clinical establishment. While direct cashless facility is currently limited for AYUSH treatments, we assist you in claiming reimbursement.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 mb-10">
                    <h2 className="text-xl font-bold text-stone-800 mb-6">Does my insurance cover Naturopathy?</h2>
                    <div className="space-y-4 text-stone-700 leading-relaxed">
                        <p>
                            Many comprehensive health insurance policies now cover AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy) treatments up to a certain limit, provided the treatment is taken at a government-registered hospital.
                        </p>
                        <p>
                            <strong>Lucknow Naturopathy Center</strong> is registered with the necessary authorities, making our treatments eligible for claims under policies that include AYUSH coverage.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800 mt-4">
                            <strong>Note:</strong> We recommend checking your specific policy document or contacting your TPA (Third Party Administrator) to confirm if &quot;AYUSH Treatment&quot; or &quot;Alternative Medicine&quot; is covered under your plan.
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
                    <h2 className="text-xl font-bold text-stone-800 mb-6">How to Claim Reimbursement?</h2>
                    <ol className="list-decimal list-inside space-y-4 text-stone-700">
                        <li><strong>Admission:</strong> Inform the reception that you intend to claim insurance so we can prepare your file accordingly.</li>
                        <li><strong>Treatment:</strong> Undergo the prescribed treatment course (usually requires minimum 24-hour hospitalization for IPD claims).</li>
                        <li><strong>Documentation:</strong> At discharge, we will provide you with:
                            <ul className="list-disc list-inside ml-6 mt-2 text-sm text-stone-600 space-y-1">
                                <li>Final Hospital Bill (with GST/PAN)</li>
                                <li>Discharge Summary</li>
                                <li>Treatment Breakdown</li>
                                <li>Pharmacy/Lab bills (if any)</li>
                                <li>Registration Certificate of the Hospital</li>
                            </ul>
                        </li>
                        <li><strong>Submission:</strong> Submit these documents to your insurance provider/TPA for reimbursement.</li>
                    </ol>
                </div>

                <div className="mt-12 flex items-start p-4 bg-stone-100 rounded-lg">
                    <HelpCircle className="w-6 h-6 text-stone-500 mr-4 flex-shrink-0" />
                    <p className="text-sm text-stone-600">
                        <strong>Need Help?</strong> Our billing desk can assist you in organizing the necessary paperwork for your claim. Please note that the approval of the claim is at the sole discretion of the insurance company.
                    </p>
                </div>

            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
