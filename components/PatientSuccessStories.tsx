import React from 'react';
import { Star, Play, Quote, ArrowRight, Video } from 'lucide-react';
import Image from 'next/image';
import { TESTIMONIALS } from '../lib/constants';

const PatientSuccessStories: React.FC = () => {
  const testimonials = TESTIMONIALS;

  const shortTestimonials = [
    { name: "Suresh Kumar", loc: "Gomti Nagar", condition: "Hypertension", text: "BP reduced from 160/100 to 130/85 in 2 months. Stopped 2 out of 3 BP medications." },
    { name: "Kavita Rastogi", loc: "Aliganj", condition: "Thyroid Disorder", text: "TSH normalized from 8.2 to 3.5 in 4 months. Energy levels back. Weight loss started." },
    { name: "Renu Chaudhary", loc: "Rajajipuram", condition: "Cervical Spondylitis", text: "Neck pain gone after 3 weeks of treatment. Can work on computer 8 hours without pain." },
    { name: "Pankaj Dubey", loc: "Mahanagar", condition: "Sciatica", text: "Couldn't sit in car for more than 5 minutes. After hydrotherapy and yoga, drove to Delhi pain-free." },
    { name: "Dr. A.K. Asthana", loc: "Civil Lines", condition: "General Wellness", text: "As a doctor myself, I appreciate their scientific approach. Not quackery – genuine evidence-based natural healing." },
    { name: "Deepa Sethi", loc: "Alambagh", condition: "Post-Pregnancy", text: "Lost 11 kg of pregnancy weight in 3 months. Belly fat reduced significantly." }
  ];

  return (
    <section className="py-24 bg-white" id="success-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                Real Patient Success Stories from Lucknow Naturopathy Center
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Don&apos;t just take our word for it. Hear directly from patients who have transformed their health through our natural treatment protocols. These are real people with verified results – not stock photos or made-up testimonials.
            </p>
        </div>

        {/* Featured Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                    {/* Header with Image */}
                    <div className="p-6 pb-0 flex items-center mb-4">
                        <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-white shadow-md mr-4 flex-shrink-0">
                            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-800 text-lg leading-tight">{testimonial.name}</h3>
                            <p className="text-xs text-stone-500">{testimonial.age} • {testimonial.location}</p>
                            <div className="flex text-yellow-400 mt-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                            </div>
                        </div>
                    </div>

                    <div className="px-6 flex-grow">
                        <div className="mb-4">
                            <span className="inline-block bg-nature-light/50 text-nature-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-2">
                                {testimonial.condition}
                            </span>
                            <h4 className="font-serif font-bold text-stone-800 text-base leading-tight">&quot;{testimonial.title}&quot;</h4>
                        </div>

                        <div className="relative mb-6 pl-6">
                            <Quote className="absolute top-0 left-0 w-4 h-4 text-nature-green opacity-40 transform -scale-x-100" />
                            <p className="text-sm text-stone-600 italic leading-relaxed">
                                {testimonial.quote}
                            </p>
                        </div>

                        <p className="text-xs text-stone-500 leading-relaxed border-t border-stone-200 pt-4 mb-4">
                            <strong className="text-stone-700 block mb-1">The Story:</strong>
                            {testimonial.story}
                        </p>
                    </div>

                    <div className="bg-white p-4 text-[10px] text-stone-400 font-medium uppercase tracking-wider flex justify-between items-center border-t border-stone-100">
                         <span className="flex items-center text-nature-green"><span className="mr-1">✓</span> Verified Patient</span>
                         <button className="flex items-center hover:text-nature-green transition-colors">
                            <Video size={12} className="mr-1" /> Watch Video
                         </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Grid of Short Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {shortTestimonials.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                    <p className="text-sm text-stone-600 italic mb-4">&quot;{item.text}&quot;</p>
                    <div className="flex justify-between items-end border-t border-stone-100 pt-3">
                        <div>
                            <p className="text-xs font-bold text-stone-800">{item.name}</p>
                            <p className="text-[10px] text-stone-500">{item.loc}</p>
                        </div>
                        <span className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                            {item.condition}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Statistics Bar */}
        <div className="bg-stone-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-nature-green rounded-full blur-[100px] opacity-20"></div>

             <div className="relative z-10 text-center mb-10">
                <h3 className="text-2xl font-serif font-bold mb-2">OUR PROVEN TRACK RECORD (2010-2024)</h3>
                <p className="text-stone-400 text-sm">Consistent results speak louder than promises.</p>
             </div>

             <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { val: "5,247", label: "Patients Treated" },
                    { val: "4.8★", label: "Google Rating" },
                    { val: "3,200+", label: "Disease Reversals" },
                    { val: "94%", label: "Referral Rate" }
                ].map((stat, idx) => (
                    <div key={idx}>
                        <div className="text-3xl md:text-4xl font-bold text-nature-green mb-2">{stat.val}</div>
                        <div className="text-xs md:text-sm text-stone-300 font-medium uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
             </div>

             <div className="mt-10 text-center relative z-10">
                <a href="https://g.page/lucknownaturopathy" target="_blank" rel="noreferrer" className="inline-flex items-center text-white border-b border-white/30 hover:border-white pb-1 transition-all text-sm font-medium hover:text-nature-light">
                    Read All 156 Google Reviews <ArrowRight className="ml-2 w-4 h-4" />
                </a>
             </div>
        </div>

      </div>
    </section>
  );
};

export default PatientSuccessStories;
