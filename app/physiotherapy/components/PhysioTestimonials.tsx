import React from 'react';
import { PHYSIO_REVIEWS } from '@/lib/physiotherapyConstants';
import { Star, Quote, MapPin, User } from 'lucide-react';

const PhysioTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Patient Stories</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                What Our Patients Say
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {PHYSIO_REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                    <Quote className="absolute top-8 right-8 w-10 h-10 text-blue-100 group-hover:text-blue-200 transition-colors" />

                    <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-stone-300'}`} />
                        ))}
                    </div>

                    <p className="text-stone-600 italic mb-6 leading-relaxed flex-grow">
                        &quot;{review.text}&quot;
                    </p>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-stone-100">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-stone-900 text-sm">{review.author}</h4>
                            <div className="flex items-center text-xs text-stone-500 mt-0.5">
                                <MapPin className="w-3 h-3 mr-1" /> {review.location}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default PhysioTestimonials;
