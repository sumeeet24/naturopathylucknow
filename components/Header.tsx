import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP, TREATMENTS, CONDITIONS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Brand Name for SEO */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-nature-green tracking-tight">
              Lucknow<span className="text-earth-brown">Naturopathy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-stone-600 hover:text-nature-green px-2 py-2 text-sm font-medium transition-colors">Home</Link>
            
            {/* Treatments Dropdown */}
            <div className="relative group">
              <button className="text-stone-600 group-hover:text-nature-green px-2 py-2 text-sm font-medium transition-colors flex items-center outline-none">
                Treatments <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                <div className="py-1">
                  {TREATMENTS.slice(0, 6).map(item => (
                    <Link key={item.id} to={`/treatment/${item.id}`} className="block px-4 py-2 text-sm text-stone-700 hover:bg-nature-light hover:text-nature-green">
                      {item.title}
                    </Link>
                  ))}
                  <Link to="/treatments" className="block px-4 py-2 text-sm font-bold text-nature-green hover:bg-nature-light border-t border-stone-100">
                    View All Treatments
                  </Link>
                </div>
              </div>
            </div>

            {/* Conditions Dropdown */}
            <div className="relative group">
              <button className="text-stone-600 group-hover:text-nature-green px-2 py-2 text-sm font-medium transition-colors flex items-center outline-none">
                Diseases We Cure <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                <div className="py-1">
                  {CONDITIONS.slice(0, 6).map(item => (
                    <Link key={item.id} to={`/condition/${item.id}`} className="block px-4 py-2 text-sm text-stone-700 hover:bg-nature-light hover:text-nature-green">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-stone-600 hover:text-nature-green px-2 py-2 text-sm font-medium transition-colors">Pricing</Link>
            <Link to="/doctor" className="text-stone-600 hover:text-nature-green px-2 py-2 text-sm font-medium transition-colors">About Doctor</Link>
            <Link to="/contact" className="text-stone-600 hover:text-nature-green px-2 py-2 text-sm font-medium transition-colors">Contact</Link>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-nature-green hover:bg-green-800 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-nature-green focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-nature-light rounded-md">Home</Link>
            
            {/* Mobile Dropdown: Treatments */}
            <div>
              <button onClick={() => toggleDropdown('treatments')} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-stone-700 hover:bg-nature-light rounded-md">
                Treatments <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'treatments' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'treatments' && (
                <div className="pl-4 space-y-1 bg-stone-50 py-2 rounded-md">
                  {TREATMENTS.map(item => (
                    <Link key={item.id} to={`/treatment/${item.id}`} className="block px-3 py-2 text-sm text-stone-600 hover:text-nature-green">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown: Conditions */}
            <div>
              <button onClick={() => toggleDropdown('conditions')} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-stone-700 hover:bg-nature-light rounded-md">
                Diseases We Cure <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === 'conditions' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'conditions' && (
                <div className="pl-4 space-y-1 bg-stone-50 py-2 rounded-md">
                  {CONDITIONS.map(item => (
                    <Link key={item.id} to={`/condition/${item.id}`} className="block px-3 py-2 text-sm text-stone-600 hover:text-nature-green">
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-nature-light rounded-md">Pricing</Link>
            <Link to="/doctor" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-nature-light rounded-md">About Doctor</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-stone-700 hover:bg-nature-light rounded-md">Contact</Link>
            
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`}
              className="text-white bg-nature-green hover:bg-green-800 block px-3 py-2 rounded-md text-base font-medium mt-4 text-center"
              target="_blank"
              rel="noreferrer"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;