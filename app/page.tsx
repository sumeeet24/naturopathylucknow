import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutPrinciples from '@/components/AboutPrinciples';
import Services from '@/components/Services';
import NaturopathyDoctor from '@/components/NaturopathyDoctor';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: "No.1 Naturopathy in Lucknow, Natural Treatment Hospital, Naturopath Doctor | Holistic Healing Lucknow",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50">
      <Header />

      <main className="flex-grow w-full">
        <Hero />
        <AboutPrinciples />
        <Services />
        <NaturopathyDoctor />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
