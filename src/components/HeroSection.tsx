import React from 'react';
import { Calendar, Phone, MessageSquare, MapPin, Clock, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, BARBERS } from '../data/barberData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  setActiveTab: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, setActiveTab }) => {
  // Top 3 featured preview services
  const previewServices = SERVICES.slice(0, 3);
  // Top 3 preview team members
  const previewBarbers = BARBERS.slice(0, 3);

  return (
    <section className="bg-white border-b border-gray-200">
      {/* Outer Theme Frame / Split Layout */}
      <div className="max-w-7xl mx-auto border-x border-gray-200">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          {/* Left Hero Panel (Navy #1a2a44 with Classic Cut typography) */}
          <div className="w-full lg:w-1/2 bg-[#1a2a44] text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Barber Pole subtle gradient strip along right border */}
            <div className="absolute top-0 right-0 h-full w-2.5 barber-pole-vertical opacity-40 hidden lg:block" />
            
            {/* Background luxury seal watermark */}
            <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-white/5 pointer-events-none flex items-center justify-center">
              <span className="text-white/5 text-9xl font-serif font-bold">JM</span>
            </div>

            <div className="relative z-10 space-y-6">
              {/* Official Logo & Established Tag */}
              <div className="flex items-center gap-4">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="Barber Shop J.M Official Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md bg-white p-1 border-2 border-[#be1e2d] shadow-lg shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-[#be1e2d] text-white text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                      Open 7 Days • 9 AM - 9 PM
                    </span>
                  </div>
                  <span className="text-[11px] tracking-widest text-gray-300 font-semibold uppercase block mt-1">
                    1808 76th St, Brooklyn, NY • Est. 1970
                  </span>
                </div>
              </div>

              {/* Serif Headline directly from Theme */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold italic leading-tight text-white">
                The Art of the <span className="text-[#be1e2d] not-italic">Classic</span> Cut
              </h2>

              <p className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed font-sans">
                Experience the finest grooming services in New York. From traditional hot towel straight razor shaves to modern skin fades, J.M offers precision, discipline, and luxury in every chair.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#be1e2d] text-white px-7 py-3.5 rounded-none font-bold uppercase tracking-wider text-xs hover:bg-red-700 transition-all shadow-md flex items-center gap-2 cursor-pointer group"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-none font-bold uppercase tracking-wider text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 1 929-592-0764</span>
                </a>
              </div>

              {/* Key Features List */}
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#be1e2d]" />
                  <span>Walk-ins Welcome</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#be1e2d]" />
                  <span>Bilingual Staff (EN / ES)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#be1e2d]" />
                  <span>Hot Towel Neck Finish</span>
                </span>
              </div>
            </div>

            {/* Location & Contact Info Boxes from Theme */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 mt-6 border-t border-white/10">
              <div className="bg-white/10 p-4 border border-white/20 backdrop-blur-xs">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[#be1e2d] font-bold uppercase text-xs tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Location
                  </h4>
                  <span className="text-[10px] text-gray-400">Brooklyn, NY</span>
                </div>
                <p className="text-sm font-semibold text-white">1808 76th St, 11214</p>
                <p className="text-[11px] text-gray-300">New York, New York</p>
              </div>

              <div className="bg-white/10 p-4 border border-white/20 backdrop-blur-xs">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[#be1e2d] font-bold uppercase text-xs tracking-wider flex items-center gap-1">
                    <Phone className="w-3 h-3" /> Phone & WhatsApp
                  </h4>
                  <span className="text-[10px] text-emerald-400 font-semibold">Fast Reply</span>
                </div>
                <p className="text-sm font-semibold text-white">1 929-592-0764</p>
                <p className="text-[11px] text-gray-300">Shop: (718) 301-3522</p>
              </div>
            </div>

          </div>

          {/* Right Hero Panel (Split into Our Services Preview + Meet The Artists Preview) */}
          <div className="w-full lg:w-1/2 flex flex-col bg-white">
            
            {/* Top Half: Our Services Preview */}
            <div className="bg-gray-50 p-6 sm:p-10 border-b border-gray-200 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-[#1a2a44] flex items-center">
                    <span className="w-8 h-0.5 bg-[#be1e2d] mr-3"></span> Our Services
                  </h3>
                  <button
                    onClick={() => setActiveTab('services')}
                    className="text-xs font-bold uppercase tracking-wider text-[#be1e2d] hover:text-red-700 cursor-pointer flex items-center gap-1"
                  >
                    <span>View All (10+)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Service Price Items with dashed borders matching Design Theme */}
                <div className="space-y-4">
                  {previewServices.map((srv) => (
                    <div
                      key={srv.id}
                      className="flex justify-between items-end border-b border-dashed border-gray-300 pb-3 group hover:border-[#be1e2d] transition-colors"
                    >
                      <div className="pr-4">
                        <p className="font-bold text-[#1a2a44] group-hover:text-[#be1e2d] transition-colors text-sm sm:text-base">
                          {srv.name}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-1">{srv.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-serif font-bold text-lg sm:text-xl text-[#1a2a44]">
                          ${srv.price}
                        </span>
                        <span className="block text-[10px] text-gray-400 font-semibold uppercase">
                          {srv.durationMinutes} min
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Footer Note */}
              <div className="mt-4 pt-3 flex items-center justify-between text-xs text-gray-500">
                <span className="italic">All cuts include straight razor neck taper & hot towel finish.</span>
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold uppercase tracking-wider text-[#1a2a44] hover:text-[#be1e2d] cursor-pointer"
                >
                  Quick Book →
                </button>
              </div>
            </div>

            {/* Bottom Half: Meet The Artists Preview */}
            <div className="bg-white p-6 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-[#1a2a44] flex items-center">
                    <span className="w-8 h-0.5 bg-[#be1e2d] mr-3"></span> Meet The Artists
                  </h3>
                  <button
                    onClick={() => setActiveTab('team')}
                    className="text-xs font-bold uppercase tracking-wider text-[#be1e2d] hover:text-red-700 cursor-pointer flex items-center gap-1"
                  >
                    <span>Meet All</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 3 Artists Cards matching Design Theme */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {previewBarbers.map((barber) => (
                    <div
                      key={barber.id}
                      onClick={() => setActiveTab('team')}
                      className="flex flex-col items-center text-center p-3 bg-gray-50 border border-gray-100 hover:border-[#1a2a44] hover:shadow-xs transition-all cursor-pointer group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1a2a44] text-white rounded-md mb-2 overflow-hidden border-2 border-gray-100 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform relative">
                        <span className="font-serif font-bold text-lg sm:text-xl">
                          {barber.initials}
                        </span>
                        <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white" title="Available Today" />
                      </div>
                      <p className="text-xs font-bold uppercase text-[#1a2a44] truncate w-full">
                        {barber.name}
                      </p>
                      <p className="text-[10px] text-[#be1e2d] font-semibold truncate w-full">
                        {barber.role.replace("Founder & ", "")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge Bar */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-gray-900 text-[11px] ml-1">4.9 / 5.0 (200+ Reviews)</span>
                </div>
                <span className="text-[11px] text-gray-500 font-medium">Bensonhurst, Brooklyn</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
