import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import LocationServiceAreas from '@/components/LocationServiceAreas';
import TreatmentsOffered from '@/components/TreatmentsOffered';
import ConditionsWeTreat from '@/components/ConditionsWeTreat';
import DoctorProfiles from '@/components/DoctorProfiles';
import PatientSuccessStories from '@/components/PatientSuccessStories';
import TreatmentPackages from '@/components/TreatmentPackages';
import FAQ from '@/components/FAQ';
import BlogPreview from '@/components/BlogPreview';
import CallToAction from '@/components/CallToAction';
import SocialProof from '@/components/SocialProof';
import Contact from '@/components/Contact';
import {
  generateMedicalBusinessSchema,
  generateOrganizationSchema,
  generatePersonSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateReviewSchema
} from '@/lib/utils';

export const metadata: Metadata = {
  title: "Naturopathy Hospital Lucknow | Dr. Nand Lal Yadav",
  description: "Leading naturopathy hospital in Lucknow since 2010. Natural treatment for diabetes, hypertension & chronic diseases. IPD/OPD. Call: 88742-06748",
  keywords: "naturopathy hospital lucknow, natural treatment lucknow, naturopathy doctor gomti nagar, chronic disease treatment lucknow, drugless therapy lucknow",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1
  },
  authors: [{ name: "Dr. Nand Lal Yadav" }],
  openGraph: {
    locale: "en_IN",
    type: "website",
    title: "Naturopathy Hospital Lucknow | Dr. Nand Lal Yadav",
    description: "Leading naturopathy hospital in Lucknow since 2010. Natural treatment for diabetes, hypertension & chronic diseases.",
    url: "https://naturopathlucknow.in/",
    siteName: "Lucknow Naturopathy Center",
    images: [
      {
        url: "https://naturopathlucknow.in/images/og-image-clinic.jpg",
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Naturopathy Hospital Lucknow | Dr. Nand Lal Yadav",
    description: "Leading naturopathy hospital in Lucknow since 2010. Natural treatment for diabetes, hypertension & chronic diseases.",
    images: ["https://naturopathlucknow.in/images/twitter-card.jpg"]
  },
  alternates: {
    canonical: 'https://naturopathlucknow.in/',
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Lucknow",
    "geo.position": "26.8467;80.9462",
    "ICBM": "26.8467, 80.9462"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-50">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateMedicalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateReviewSchema()),
          }}
        />

      <Header />

      <main className="flex-grow w-full">
        <Hero />
        <WhyChooseUs />
        <LocationServiceAreas />
        <TreatmentsOffered />
        <ConditionsWeTreat />
        <DoctorProfiles />
        <PatientSuccessStories />
        <TreatmentPackages />
        <FAQ />
        <BlogPreview />
        <CallToAction />
        <SocialProof />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
