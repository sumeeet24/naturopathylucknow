import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cookie Policy | Lucknow Naturopathy Center",
  description: "How we use cookies to improve your experience on our website.",
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">
        <div className="bg-stone-50 py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-10 rounded-xl shadow-sm border border-stone-200">
                <h1 className="text-3xl font-serif font-bold text-stone-800 mb-8 border-b border-stone-100 pb-4">Cookie Policy</h1>

                <div className="prose prose-stone text-stone-700">
                    <p>This Cookie Policy explains how Lucknow Naturopathy & Yoga Center uses cookies and similar technologies to recognize you when you visit our website.</p>

                    <h3>1. What are cookies?</h3>
                    <p>
                        Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                    </p>

                    <h3>2. Why do we use cookies?</h3>
                    <p>We use cookies for several reasons:</p>
                    <ul>
                        <li><strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our website (e.g., security, page navigation).</li>
                        <li><strong>Performance & Analytics Cookies:</strong> These collect information about how you use our website, helping us improve the user experience (e.g., Google Analytics).</li>
                        <li><strong>Functional Cookies:</strong> These allow our website to remember choices you make (such as your language or region) to provide enhanced features.</li>
                    </ul>

                    <h3>3. Third-Party Cookies</h3>
                    <p>
                        Some cookies on our site are set by third parties, such as Google (for maps and analytics) and social media platforms (if you share content). We do not control these cookies.
                    </p>

                    <h3>4. How can you control cookies?</h3>
                    <p>
                        You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                    </p>

                    <p className="text-sm text-stone-500 mt-8 italic">Last Updated: December 2024</p>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
