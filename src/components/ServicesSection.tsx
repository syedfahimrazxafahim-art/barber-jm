import React, { useState } from 'react';
import { Scissors, Clock, Check, Star, Sparkles, ArrowRight, Eye, X } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/barberData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showBoardModal, setShowBoardModal] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'haircuts', label: 'Haircuts & Fades' },
    { id: 'shaves', label: 'Beard & Straight Shaves' },
    { id: 'packages', label: 'Royal Packages' },
    { id: 'treatments', label: 'Treatments & Color' },
    { id: 'kids', label: 'Kids & Juniors' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Professional Polish styling */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#be1e2d]">
              Traditional Craftsmanship & Precision
            </span>
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a2a44] tracking-tight mb-3">
            Services & Transparent Pricing
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Every haircut and grooming service includes a precision razor neck taper, relaxing hot towel finish, and professional styling consultation. No hidden fees.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1a2a44] text-white shadow-xs border border-[#1a2a44]'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid matching Dashed-Border Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 border border-gray-200 hover:border-[#1a2a44] transition-all hover:shadow-md flex flex-col justify-between group relative"
            >
              {service.popular && (
                <span className="absolute -top-3 right-4 bg-[#be1e2d] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 shadow-xs">
                  Popular Choice
                </span>
              )}

              <div>
                <div className="flex justify-between items-start border-b border-dashed border-gray-300 pb-3 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1a2a44] group-hover:text-[#be1e2d] transition-colors flex items-center gap-2">
                      <span>{service.name}</span>
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{service.durationMinutes} Minutes</span>
                    </div>
                  </div>
                  <div className="text-right pl-4">
                    <span className="font-serif font-bold text-2xl text-[#1a2a44] block">
                      ${service.price}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Includes hot towel finish</span>
                </span>
                <button
                  onClick={() => onSelectServiceForBooking(service)}
                  className="bg-[#1a2a44] hover:bg-[#be1e2d] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
                >
                  <Scissors className="w-3 h-3" />
                  <span>Book This</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Signature VIP Package Feature Banner */}
        <div className="mt-12 bg-[#1a2a44] text-white p-8 sm:p-10 border-4 border-[#be1e2d] relative overflow-hidden shadow-lg">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#be1e2d] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                <Sparkles className="w-3 h-3" />
                <span>The Signature Experience</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                The J.M Royal Grooming Package — $55
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Experience the full ritual: tailored precision haircut + traditional 7-step straight razor hot towel shave + razor cheek & beard sculpting + eyebrow clean-up + refreshing mint scalp massage.
              </p>
            </div>
            <button
              onClick={() => onSelectServiceForBooking(SERVICES.find(s => s.id === 'royal-combo') || SERVICES[0])}
              className="bg-white text-[#1a2a44] hover:bg-gray-100 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all shrink-0 cursor-pointer shadow-md hover:scale-105"
            >
              Book Royal Package ($55)
            </button>
          </div>
        </div>

        {/* Authentic In-Shop Price Board Display */}
        <div className="mt-12 bg-white border border-gray-200 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#be1e2d]">
                <Scissors className="w-3.5 h-3.5" />
                <span>Verified In-Shop Menu</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a2a44]">
                Official Barber Shop J.M Service Board
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We believe in 100% price transparency. Below is our authentic in-shop board photographed directly at 1808 76th St, Brooklyn. Every service is honored at published rates.
              </p>
              <button
                onClick={() => setShowBoardModal(true)}
                className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a2a44] hover:text-[#be1e2d] border border-gray-300 px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#be1e2d]" />
                <span>View Full Size Menu Board</span>
              </button>
            </div>

            <div
              onClick={() => setShowBoardModal(true)}
              className="w-full md:w-80 h-48 bg-gray-900 border-2 border-gray-300 hover:border-[#1a2a44] transition-all relative cursor-pointer overflow-hidden rounded-xs group shadow-sm shrink-0"
            >
              <img
                src={BUSINESS_INFO.serviceBoardUrl}
                alt="Barber Shop J.M Official Service Price Board"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="bg-[#1a2a44] text-white text-[11px] font-bold uppercase px-3 py-1.5 shadow-md flex items-center gap-1.5 border border-[#be1e2d]">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Click to Enlarge</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for In-Shop Service Board */}
        {showBoardModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white max-w-2xl w-full border-4 border-[#1a2a44] shadow-2xl overflow-hidden relative">
              <div className="h-2 w-full barber-pole-ribbon" />
              <div className="flex justify-between items-center p-4 bg-[#1a2a44] text-white border-b-2 border-[#be1e2d]">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-sm tracking-wide">
                    OFFICIAL BARBER SHOP J.M SERVICE BOARD
                  </span>
                </div>
                <button
                  onClick={() => setShowBoardModal(false)}
                  className="p-1 text-gray-300 hover:text-white rounded-xs"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 bg-gray-900 flex items-center justify-center max-h-[75vh] overflow-auto">
                <img
                  src={BUSINESS_INFO.serviceBoardUrl}
                  alt="Official Service Price Board"
                  className="max-h-[70vh] w-auto object-contain rounded-xs"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white flex justify-between items-center text-xs">
                <span className="text-gray-500">1808 76th St, Brooklyn • Open 7 Days</span>
                <button
                  onClick={() => setShowBoardModal(false)}
                  className="bg-[#1a2a44] text-white px-5 py-2 font-bold uppercase text-[11px] hover:bg-[#be1e2d] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
