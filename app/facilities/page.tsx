import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Wifi, Coffee, Bed, Activity, Sun, Droplets } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Facilities | Accommodation & Amenities",
  description: "World-class facilities at Lucknow Naturopathy Center. AC/Non-AC rooms, Organic Canteen, Yoga Hall, Treatment Rooms, and lush green campus.",
  alternates: {
    canonical: '/facilities',
  },
};

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow pt-20">

        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-nature-green font-bold tracking-widest uppercase text-sm mb-4 block">Comfort & Care</span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Facilities & Amenities</h1>
                <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
                    A serene environment designed to accelerate your healing process.
                </p>
            </div>
        </div>

        {/* Facilities Grid */}
        <div className="bg-stone-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Accommodation */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                         <div className="absolute inset-0 bg-stone-300 animate-pulse"></div>
                         {/* Replace with real image later */}
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center mb-6 text-nature-green">
                            <Bed size={24} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">In-Patient Accommodation (IPD)</h2>
                        <p className="text-stone-600 mb-6 leading-relaxed">
                            We offer clean, hygienic, and comfortable accommodation for patients requiring residential treatment. Choose from Private AC Rooms, Semi-Private Rooms, or General Wards depending on your budget and preference.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>24/7 Nursing Staff</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Daily Housekeeping</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Attached Washrooms</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Hot Water Supply</li>
                        </ul>
                    </div>
                </div>

                {/* Treatment Rooms */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center mb-6 text-nature-green">
                            <Droplets size={24} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Therapy Center</h2>
                        <p className="text-stone-600 mb-6 leading-relaxed">
                            Our treatment block is equipped with specialized equipment for all naturopathic modalities. Separate sections for male and female patients ensure privacy and comfort.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Hydrotherapy Section (Jacuzzi, Steam, Sauna)</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Mud Therapy Zone</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Massage Rooms</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Colon Hydrotherapy Unit</li>
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                         <div className="absolute inset-0 bg-stone-300 animate-pulse"></div>
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                </div>

                {/* Yoga Hall */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                         <div className="absolute inset-0 bg-stone-300 animate-pulse"></div>
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center mb-6 text-nature-green">
                            <Sun size={24} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Yoga & Meditation Hall</h2>
                        <p className="text-stone-600 mb-6 leading-relaxed">
                            A spacious, airy, and well-lit hall dedicated to Yoga and Meditation. The serene ambiance helps you connect with your inner self.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Capacity for 50+ students</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Yoga Mats & Props provided</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Audio-Visual Aid for classes</li>
                            <li className="flex items-center text-stone-700"><span className="w-2 h-2 bg-nature-green rounded-full mr-3"></span>Peaceful surroundings</li>
                        </ul>
                    </div>
                </div>

                 {/* Canteen & Others */}
                 <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-nature-green">
                        <Coffee className="w-10 h-10 text-nature-green mb-4" />
                        <h3 className="text-xl font-bold mb-3">Organic Canteen</h3>
                        <p className="text-sm text-stone-600">Serves wholesome, sattvic, and organic meals prescribed by doctors. We use fresh produce, some grown in our own garden.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-nature-green">
                        <Activity className="w-10 h-10 text-nature-green mb-4" />
                        <h3 className="text-xl font-bold mb-3">Walking Track</h3>
                        <p className="text-sm text-stone-600">A reflexology walking track and green lush garden for morning and evening walks to soak in fresh air.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-nature-green">
                        <Wifi className="w-10 h-10 text-nature-green mb-4" />
                        <h3 className="text-xl font-bold mb-3">Modern Amenities</h3>
                        <p className="text-sm text-stone-600">Free Wi-Fi in common areas, Library with health books, and 24-hour power backup for a hassle-free stay.</p>
                    </div>
                 </div>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
