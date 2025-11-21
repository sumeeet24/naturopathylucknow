import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { ADDRESS, EMAIL, PHONE, WHATSAPP, SEO_AREAS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Visit Our Clinic</h2>
            <p className="text-stone-400 mb-8">
              Start your journey towards a disease-free life today. Contact us for consultation regarding chronic diseases and natural detoxification.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-nature-green mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-stone-300">{ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-nature-green mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Phone & WhatsApp</h3>
                  <p className="text-stone-300">{PHONE}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-nature-green mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-stone-300">{EMAIL}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-nature-green mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Clinic Hours</h3>
                  <p className="text-stone-300">Mon - Sat: 8:00 AM - 7:00 PM</p>
                  <p className="text-stone-300">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Local SEO Keyword block - Static Tags for Ranking */}
            <div className="mt-12 pt-8 border-t border-stone-800">
              <p className="text-sm text-stone-500 font-semibold mb-4 tracking-wider uppercase">Serving Patients From Across Lucknow</p>
              <div className="flex flex-wrap gap-2">
                {SEO_AREAS.map((area, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium text-stone-400 bg-stone-800/50 px-3 py-1.5 rounded-full border border-stone-700 select-none"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-xs text-stone-600 mt-4 italic">
                *Home visits available for senior citizens in select areas. Please call to inquire.
              </p>
            </div>
          </div>

          {/* Map / Form */}
          <div className="bg-white rounded-lg p-8 text-stone-800 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Book Your Appointment</h3>
            
            {/* Primary CTA */}
            <a 
              href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank" 
              rel="noreferrer"
              className="w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-md hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 shadow-md flex items-center justify-center mb-6 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Chat on WhatsApp
            </a>

            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-stone-300"></div>
                <span className="flex-shrink-0 mx-4 text-stone-400 text-sm">OR REQUEST CALLBACK</span>
                <div className="flex-grow border-t border-stone-300"></div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-nature-green focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-nature-green focus:border-transparent outline-none transition-all"
                  placeholder="Your Phone Number"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-nature-green text-white font-bold py-3 rounded-md hover:bg-green-800 transition-colors shadow-md mt-2"
              >
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;