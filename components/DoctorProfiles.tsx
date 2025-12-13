import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Star, Phone, MessageCircle } from 'lucide-react';

const DoctorProfiles: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50" id="doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                Meet Our Expert Naturopathy Doctors in Lucknow
            </h2>
        </div>

        {/* Doctor 1: Dr. Nand Lal Yadav */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100 mb-20 animate-fade-in-up">
            <div className="grid lg:grid-cols-12 gap-0">

                {/* Image Side */}
                <div className="lg:col-span-5 relative h-[500px] lg:h-auto">
                    <Image
                        src="/images/team/dr-nand-lal-yadav.jpg"
                        alt="Dr. Nand Lal Yadav - Naturopathic Doctor"
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                         <h3 className="text-2xl font-bold text-white mb-1">DR. NAND LAL YADAV</h3>
                         <p className="text-nature-light font-medium text-sm tracking-wide uppercase">Founder & Chief Naturopathy Doctor</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-4 mb-8 text-xs font-bold uppercase tracking-wider text-stone-500">
                        <span className="flex items-center"><Award className="w-4 h-4 text-nature-green mr-2" /> 28+ Years Experience</span>
                        <span className="flex items-center"><Users className="w-4 h-4 text-nature-green mr-2" /> 100,000+ Patients Treated</span>
                    </div>

                    <div className="prose prose-stone mb-8">
                        <p className="text-stone-600 leading-relaxed mb-4">
                            Dr. Nand Lal Yadav is one of India&apos;s pioneering experts in Medical Yoga and natural disease management. With nearly three decades of clinical experience, he has dedicated his life to proving that chronic diseases can be reversed without heavy medication or surgery.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-6">
                            <div>
                                <h4 className="font-bold text-stone-800 mb-2 text-sm uppercase">Educational Qualifications</h4>
                                <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside marker:text-nature-green">
                                    <li>Bachelor of Naturopathy & Yogic Sciences (BNYS)</li>
                                    <li>Master&apos;s Degree in Yoga Therapy (MD)</li>
                                    <li>Registered Yoga Teacher (RYT-500)</li>
                                    <li>Diploma in Acupressure & Reflexology</li>
                                </ul>
                            </div>
                            <div>
                                 <h4 className="font-bold text-stone-800 mb-2 text-sm uppercase">Specialization</h4>
                                 <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside marker:text-nature-green">
                                    <li>Medical Yoga Protocols</li>
                                    <li>Diabetes Reversal Programs</li>
                                    <li>Hypertension Management</li>
                                    <li>Arthritis & Chronic Pain Relief</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-stone-50 border-l-4 border-nature-green p-4 italic text-stone-600 text-sm mb-8">
                            &quot;The body has an innate intelligence to heal itself. Our job is simply to remove obstacles – toxins, poor diet, stress – and provide the right conditions for healing. Nature does the rest.&quot;
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <a href="tel:+918874206748" className="flex-1 bg-stone-900 text-white font-bold py-3 rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center shadow-lg">
                            <Phone className="w-4 h-4 mr-2" /> Book Appointment
                        </a>
                        <Link href="/yoga-therapist/nand-lal-yadav" className="flex-1 bg-white border border-stone-300 text-stone-800 font-bold py-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-center shadow-sm">
                            View Profile
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center text-xs text-stone-500 text-center sm:text-left mb-8">
                        <span className="font-bold text-stone-800">Available:</span>
                        Mon-Sat, 9 AM - 1 PM, 4 PM - 7 PM
                    </div>

                    <div className="flex items-center text-sm font-bold text-stone-800">
                        <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                        4.9/5 Rating (89 Google Reviews)
                    </div>
                </div>
            </div>
        </div>

        {/* Doctor 2: Dr. Neelam Kumari */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100 mb-20 animate-fade-in-up">
            <div className="grid lg:grid-cols-12 gap-0">

                {/* Image Side (Order Last on Desktop to alternate layout) */}
                <div className="lg:col-span-5 lg:order-last relative h-[500px] lg:h-auto">
                    <Image
                        src="/images/team/dr-nilam-kumari.jpg"
                        alt="Dr. Neelam Kumari - Naturopathic Doctor"
                        fill
                        className="object-cover object-top"
                    />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                         <h3 className="text-2xl font-bold text-white mb-1">DR. NEELAM KUMARI</h3>
                         <p className="text-nature-light font-medium text-sm tracking-wide uppercase">Women&apos;s Health & Holistic Wellness Specialist</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-4 mb-8 text-xs font-bold uppercase tracking-wider text-stone-500">
                        <span className="flex items-center"><Award className="w-4 h-4 text-nature-green mr-2" /> 15+ Years Experience</span>
                        <span className="flex items-center"><Users className="w-4 h-4 text-nature-green mr-2" /> Expert in Women&apos;s Health</span>
                    </div>

                    <div className="prose prose-stone mb-8">
                        <p className="text-stone-600 leading-relaxed mb-4">
                            Dr. Neelam Kumari brings a compassionate, holistic approach to women&apos;s health issues including PCOD, thyroid disorders, weight management, and hormonal imbalances. Her gentle, patient-centric approach has made her the preferred choice for female patients in Lucknow.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-6">
                            <div>
                                <h4 className="font-bold text-stone-800 mb-2 text-sm uppercase">Educational Qualifications</h4>
                                <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside marker:text-nature-green">
                                    <li>Bachelor of Naturopathy & Yogic Sciences (BNYS)</li>
                                    <li>Certified Clinical Nutritionist – IFSM</li>
                                    <li>Diploma in Ayurvedic Massage Therapy</li>
                                    <li>Advanced Training in Hormonal Disorders</li>
                                </ul>
                            </div>
                            <div>
                                 <h4 className="font-bold text-stone-800 mb-2 text-sm uppercase">Specialization</h4>
                                 <ul className="text-sm text-stone-600 space-y-1 list-disc list-inside marker:text-nature-green">
                                    <li>PCOD / PCOS Management</li>
                                    <li>Thyroid Disorders (Hypo & Hyper)</li>
                                    <li>Weight Loss for Women</li>
                                    <li>Infertility & Post-Pregnancy Care</li>
                                </ul>
                            </div>
                        </div>

                         <div className="bg-stone-50 border-l-4 border-nature-green p-4 text-sm mb-8">
                            <strong className="block text-stone-800 mb-1">Why Women Trust Dr. Neelam:</strong>
                            <p className="text-stone-600 italic">&quot;Female patients often feel more comfortable discussing intimate health issues with a female doctor. Dr. Neelam creates a safe, judgment-free space.&quot;</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <a href={`https://wa.me/918115400106`} className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#20bd5a] transition-colors flex items-center justify-center shadow-lg">
                            <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Appointment
                        </a>
                        <Link href="/naturopathy-therapist/neelam-kumari" className="flex-1 bg-white border border-stone-300 text-stone-800 font-bold py-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-center shadow-sm">
                            View Profile
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center text-xs text-stone-500 text-center sm:text-left mb-8">
                        <span className="font-bold text-stone-800">Female-Only Hours:</span>
                        Tue & Thu, 10 AM - 12 PM
                    </div>

                    <div className="flex items-center text-sm font-bold text-stone-800">
                        <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                        4.9/5 Rating (67 Google Reviews)
                    </div>
                </div>
            </div>
        </div>

        {/* Support Team Section */}
        <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-6 uppercase tracking-wider">Our Expert Support Team</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    "Certified Yoga Instructors (RYT-500)",
                    "Trained Massage Therapists",
                    "Clinical Nutritionists",
                    "Acupressure Specialists",
                    "Nursing Staff for IPD",
                    "Patient Care Coordinators"
                ].map((role, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 text-sm text-stone-600 font-medium">
                        {role}
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorProfiles;
