import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Refund Policy | Lucknow Naturopathy Center",
  description: "Read our refund and cancellation policy for appointment bookings and treatment packages.",
  alternates: {
    canonical: '/refund-policy',
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-stone-50 py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-xl shadow-sm border border-stone-200">
                <h1 className="text-3xl font-serif font-bold text-stone-800 mb-8 border-b border-stone-100 pb-4">Refund & Cancellation Policy</h1>

                <div className="prose prose-stone text-stone-700">
                    <p>At Lucknow Naturopathy & Yoga Center, we value your time and health. We strive to provide the best services. However, we understand that plans can change.</p>

                    <h3>1. Appointment Cancellation</h3>
                    <ul>
                        <li><strong>More than 24 hours notice:</strong> Full refund or rescheduling allowed without penalty.</li>
                        <li><strong>Less than 24 hours notice:</strong> 50% of the consultation fee may be charged as a cancellation fee.</li>
                        <li><strong>No Show:</strong> No refund will be provided if the patient does not show up for the scheduled appointment without prior intimation.</li>
                    </ul>

                    <h3>2. Treatment Packages (OPD)</h3>
                    <p>Refunds for unused sessions in a treatment package are handled on a case-by-case basis:</p>
                    <ul>
                        <li>If a patient discontinues treatment due to medical reasons (certified by our doctor), a pro-rata refund for the unused sessions will be processed.</li>
                        <li>If a patient discontinues voluntarily without medical advice, a 20% administrative fee will be deducted from the refund amount of the unused balance.</li>
                    </ul>

                    <h3>3. IPD (Residential) Booking</h3>
                    <ul>
                        <li><strong>Booking Deposit:</strong> The advance deposit for room booking is non-refundable but can be adjusted for a future date if informed 7 days prior to admission.</li>
                        <li><strong>Early Discharge:</strong> If a patient decides to leave before the completion of the booked duration, charges for the days stayed will be calculated at the standard daily rate (not the discounted package rate), and the balance will be refunded.</li>
                    </ul>

                    <h3>4. Processing Time</h3>
                    <p>Approved refunds will be processed within 7-10 working days via the original method of payment (Bank Transfer/UPI/Cash).</p>

                    <p className="text-sm text-stone-500 mt-8 italic">Last Updated: December 2024</p>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
