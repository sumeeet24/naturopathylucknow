import React from 'react';
import { APP_NAME, SEO_AREAS } from '../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="mb-4 md:mb-0">
            <h4 className="text-white font-serif font-bold text-lg">{APP_NAME}</h4>
            <p className="text-sm mt-2 text-stone-500 leading-relaxed">Reversing Chronic Diseases Naturally since 2010. Your trusted partner for holistic healing and wellness.</p>
            </div>
            
            <div>
                <h5 className="text-white font-bold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                    <li><Link to="/about-naturopathy" className="hover:text-white transition-colors">About Naturopathy</Link></li>
                    <li><Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
                    <li><Link to="/doctor" className="hover:text-white transition-colors">About Dr. Verma</Link></li>
                    <li><Link to="/pricing" className="hover:text-white transition-colors">Packages & Pricing</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
            </div>

            <div>
                <h5 className="text-white font-bold mb-4">Areas We Serve</h5>
                {/* Static text list for SEO keywords without complex routing */}
                <p className="text-xs text-stone-500 leading-relaxed">
                    {SEO_AREAS.join(', ')}
                </p>
                <p className="mt-4 text-xs text-stone-600">
                    <strong>Local SEO Note:</strong> We are centrally located in Gomti Nagar, serving patients from all major localities in Lucknow including {SEO_AREAS[1]}, {SEO_AREAS[2]}, and surrounding areas.
                </p>
            </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-stone-900 text-center text-xs text-stone-600">
        <p>&copy; {new Date().getFullYear()} Lucknow Naturopathy. All rights reserved. | Natural Healing & Holistic Wellness</p>
      </div>
    </footer>
  );
};

export default Footer;