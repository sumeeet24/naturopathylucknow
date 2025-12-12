import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Disclaimer | Medical & Website Disclaimer",
  description: "Medical disclaimer for Lucknow Naturopathy Center website. Information provided is for educational purposes only.",
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-stone-50 py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-xl shadow-sm border border-stone-200">
                <h1 className="text-3xl font-serif font-bold text-stone-800 mb-8 border-b border-stone-100 pb-4">Medical & Website Disclaimer</h1>

                <div className="prose prose-stone text-stone-700">
                    <h3>1. Not Medical Advice</h3>
                    <p>
                        The content provided on this website (including text, graphics, images, and other material) is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                    <p>
                        Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                    </p>

                    <h3>2. No Doctor-Patient Relationship</h3>
                    <p>
                        Use of this website or communication through the forms/contact numbers provided does not create a doctor-patient relationship. A relationship is established only after a formal consultation and registration at our clinic.
                    </p>

                    <h3>3. Individual Results May Vary</h3>
                    <p>
                        Testimonials and success stories appearing on this site are individual experiences, reflecting real life experiences of those who have used our services. However, they are individual results and results do vary. We do not claim that they are typical results that consumers will generally achieve.
                    </p>

                    <h3>4. External Links</h3>
                    <p>
                        This website may contain links to other websites. We are not responsible for the privacy practices or content of such other sites.
                    </p>

                    <h3>5. Accuracy of Information</h3>
                    <p>
                        While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information.
                    </p>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
