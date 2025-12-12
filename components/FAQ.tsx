'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is naturopathy and how does it work?",
      answer: "Naturopathy is a drugless system of healing that uses natural elements like water, mud, diet, yoga, and massage to treat diseases. It works by removing toxins (morbid matter) from the body and activating the body's natural healing mechanisms. Unlike conventional medicine that suppresses symptoms, naturopathy addresses the root cause of disease."
    },
    {
      question: "Is naturopathy scientifically proven or just alternative medicine?",
      answer: "While classified as alternative medicine, many therapies are backed by research. Studies show yoga reduces HbA1c, hydrotherapy improves circulation, and the DASH diet lowers BP. We integrate traditional wisdom with modern diagnostics (blood tests, monitoring) to ensure evidence-based results."
    },
    {
      question: "How long does naturopathy treatment take to show results?",
      answer: "It varies. Quick relief (1-2 weeks) for constipation, acidity, and pain. Moderate timeline (4-8 weeks) for BP, weight loss, and stress. Longer timeline (3-6 months) for diabetes reversal and chronic conditions. It's not a quick fix but aims for permanent cure."
    },
    {
      question: "Do I have to stop my current medications to start naturopathy?",
      answer: "NO. Never stop essential medications abruptly. We start naturopathy alongside your current treatment. As your health parameters (BP, sugar) improve, your doctor will gradually reduce the dosage. Complete elimination happens only under medical supervision when safe."
    },
    {
      question: "What is the success rate of naturopathy for diabetes?",
      answer: "Based on 15+ years of data: 92% show blood sugar improvement in 3 months. 68% reduce medication by half. 34% achieve medication-free status. Results depend on patient compliance and disease duration. Type 2 diabetes is highly reversible."
    },
    {
      question: "Can naturopathy cure arthritis completely?",
      answer: "For Osteoarthritis, we can't regenerate lost cartilage but can reduce pain by 70-90% and improve mobility, often avoiding surgery. For Rheumatoid Arthritis, we can reduce inflammation and dependency on steroids significantly."
    },
    {
      question: "Is naturopathy treatment painful or uncomfortable?",
      answer: "Most treatments like massage, steam bath, and yoga are relaxing. Some like enema or acupressure might have mild discomfort initially but are not painful. We always work within your comfort level."
    },
    {
      question: "What should I bring if I'm admitted for residential treatment (IPD)?",
      answer: "Comfortable cotton clothes, toiletries, current medications, recent medical reports, and walking shoes. We provide linens, therapy materials, and food. No outside food is allowed."
    },
    {
      question: "Can I continue working while undergoing outpatient (OPD) treatment?",
      answer: "YES. OPD is designed for working professionals. You can visit for 1-2 hours in the morning (6:30-8:00 AM) or evening (5:00-7:00 PM). We schedule appointments to suit your work life."
    },
    {
      question: "Is your center certified and doctors qualified?",
      answer: "YES. We are AYUSH registered. Dr. Nand Lal Yadav (BNYS, MD) and Dr. Neelam Kumari (BNYS) are qualified naturopathy doctors. Our therapists are certified. We are ISO certified for hygiene."
    },
    {
      question: "Do you provide diet charts and can I follow them at home?",
      answer: "YES. You get a personalized chart with simple Indian recipes, portion guides, and shopping lists. It's designed to be practical and sustainable, not boring or impossible to follow."
    },
    {
      question: "Is naturopathy safe for elderly patients (60+ years)?",
      answer: "YES, it's ideal for seniors as it uses no harsh chemicals. We modify therapies to be gentle (chair yoga, light massage). It improves quality of life for arthritis, BP, and diabetes significantly."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 animate-fade-in-up">
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6 flex items-center justify-center">
               <HelpCircle className="w-8 h-8 text-nature-green mr-3" />
               Frequently Asked Questions
           </h2>
           <p className="text-lg text-stone-600">
               Got questions? We&apos;ve answered the most common queries about naturopathy treatment in Lucknow.
           </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    openIndex === index
                    ? 'bg-stone-50 border-nature-green shadow-md'
                    : 'bg-white border-stone-200 hover:border-nature-green/50'
                }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-base md:text-lg pr-8 ${openIndex === index ? 'text-nature-green' : 'text-stone-800'}`}>
                    {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-nature-green flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                )}
              </button>

              <div
                className={`px-6 text-stone-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                 {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-stone-600">
            <p className="mb-4">Can&apos;t find your answer?</p>
            <a href="tel:+918874206748" className="inline-flex items-center font-bold text-nature-green hover:text-nature-dark border-b-2 border-transparent hover:border-nature-dark transition-all">
                Call us at +91 88742 06748
            </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
