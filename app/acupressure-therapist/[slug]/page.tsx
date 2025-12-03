import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { THERAPISTS } from '@/lib/therapists';
import { WHATSAPP } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, CheckCircle2, MessageCircle, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return THERAPISTS.filter(t => !t.isPlaceholder).map((therapist) => ({
    slug: therapist.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const therapist = THERAPISTS.find(t => t.slug === params.slug);

  if (!therapist) {
    return {
      title: 'Therapist Not Found',
    };
  }

  return {
    title: `${therapist.name} - ${therapist.designation} in Lucknow | Profile`,
    description: `Meet ${therapist.name}, our expert ${therapist.designation} in Lucknow. View certifications, specializations, and contact details.`,
    alternates: {
      canonical: `/acupressure-therapist/${params.slug}`,
    },
    openGraph: {
      title: `${therapist.name} - ${therapist.designation}`,
      description: therapist.shortBio,
      images: [therapist.image],
    }
  };
}

export default function TherapistProfilePage({ params }: Props) {
  const therapist = THERAPISTS.find(t => t.slug === params.slug);

  if (!therapist || therapist.isPlaceholder) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": therapist.name,
    "jobTitle": therapist.designation,
    "image": `https://lucknownaturopathy.com${therapist.image}`,
    "telephone": therapist.phone,
    "description": therapist.shortBio,
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Lucknow Naturopathy & Holistic Healing Centre"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="bg-stone-50 min-h-screen pb-20">
          {/* Breadcrumb / Back Link */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
             <Link href="/acupressure-in-lucknow" className="inline-flex items-center text-stone-500 hover:text-nature-green transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Acupressure Department
             </Link>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">

              {/* Profile Header Section */}
              <div className="md:flex">
                {/* Image Side */}
                <div className="md:w-1/3 relative h-96 md:h-auto bg-stone-200">
                  <Image
                    src={therapist.image}
                    alt={therapist.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Info Side */}
                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block py-1 px-3 rounded-full bg-nature-light text-nature-green font-bold text-sm tracking-wide uppercase mb-3">
                      {therapist.designation}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-2">
                      {therapist.name}
                    </h1>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                     {therapist.specializations.map((spec, idx) => (
                       <span key={idx} className="flex items-center text-stone-600 bg-stone-50 px-3 py-1 rounded-lg border border-stone-200 text-sm">
                         <CheckCircle2 className="w-4 h-4 text-nature-green mr-2" />
                         {spec}
                       </span>
                     ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <a
                        href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20want%20to%20book%20an%20appointment%20with%20${therapist.name}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center bg-[#25D366] text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Book Appointment
                    </a>
                    <a
                        href={`tel:${therapist.phone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center justify-center bg-stone-100 text-stone-800 font-bold py-3 px-8 rounded-full hover:bg-stone-200 transition-all"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        {therapist.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">

              {/* Bio Section */}
              <div className="md:col-span-2 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                  <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 text-nature-green mr-3" />
                    About {therapist.name}
                  </h2>
                  <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed text-lg">
                    {therapist.detailedBio.map((para, idx) => (
                      <p key={idx} className="mb-4">{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 sticky top-24">
                  <h3 className="text-xl font-bold text-stone-900 mb-6">Certifications</h3>

                  {/* Certificate Image Preview */}
                  {therapist.certificateImage && (
                    <div className="mb-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-stone-200 shadow-sm group cursor-pointer">
                      <Image
                        src={therapist.certificateImage}
                        alt={`${therapist.name} Certificate`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  )}

                  <ul className="space-y-4">
                    {therapist.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Award className="w-4 h-4 text-nature-green mr-3 mt-1 flex-shrink-0" />
                        <span className="text-stone-700 font-medium">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
