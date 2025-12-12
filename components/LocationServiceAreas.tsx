import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const LocationServiceAreas: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
                Conveniently Located Naturopathy Center in Gomti Nagar, Lucknow
            </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Info Column */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-stone-100">
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                        <MapPin className="w-6 h-6 text-nature-green mr-2" />
                        COMPLETE ADDRESS:
                    </h3>
                    <p className="text-stone-600 ml-8 leading-relaxed">
                        Lucknow Naturopathy & Yoga Center<br/>
                        Vibhuti Khand, Gomti Nagar<br/>
                        Near Phoenix United Mall<br/>
                        Lucknow, Uttar Pradesh - 226010
                    </p>
                </div>

                <div className="mb-10">
                     <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                        <Navigation className="w-6 h-6 text-nature-green mr-2" />
                        LANDMARKS:
                    </h3>
                    <ul className="space-y-2 ml-8 text-stone-600">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-3"></span> 5 minutes from Gomti Nagar Metro Station</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-3"></span> Opposite Vibhuti Khand Market</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-3"></span> 2 km from Sahara Ganj Mall</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-nature-green rounded-full mr-3"></span> Ample parking available for patients</li>
                    </ul>
                </div>

                <div className="space-y-4 ml-8">
                     <div className="flex items-center text-stone-700">
                        <Phone className="w-5 h-5 text-nature-green mr-3" />
                        <span className="font-bold">+91 88742 06748</span>
                     </div>
                     <div className="flex items-center text-stone-700">
                        <Mail className="w-5 h-5 text-nature-green mr-3" />
                        <span>biotb.instantreply@gmail.com</span>
                     </div>
                </div>

                <div className="mt-10 pt-8 border-t border-stone-100">
                    <h3 className="text-lg font-bold text-stone-800 mb-4">🗺️ AREAS WE SERVE IN LUCKNOW:</h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        We proudly serve patients from all major localities of Lucknow and nearby districts. Our centrally located Gomti Nagar facility is easily accessible from:
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-stone-600">
                        <p><strong className="text-stone-800">Central:</strong> Hazratganj, Chowk, Aminabad</p>
                        <p><strong className="text-stone-800">North:</strong> Aliganj, Vikas Nagar, Telibagh</p>
                        <p><strong className="text-stone-800">East:</strong> Indira Nagar, Gomti Nagar Ext.</p>
                        <p><strong className="text-stone-800">South:</strong> Jankipuram, Alambagh, Amausi</p>
                        <p><strong className="text-stone-800">West:</strong> Mahanagar, Ashiyana, Rajajipuram</p>
                    </div>
                    <p className="text-xs text-stone-500 mt-6 italic">
                        🚕 Many patients also visit us from nearby cities: Barabanki, Sitapur, Hardoi, Unnao, Raebareli, and Sultanpur.
                    </p>
                </div>
            </div>

            {/* Map Column */}
            <div className="h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg border border-stone-200 relative">
                 <iframe
                    src="https://maps.google.com/maps?q=26.8467,80.9462&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{border:0, position: 'absolute', top: 0, left: 0}}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Map Location"
                ></iframe>
            </div>

        </div>
      </div>
    </section>
  );
};

export default LocationServiceAreas;
