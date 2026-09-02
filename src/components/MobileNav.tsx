import React from 'react';
import { Home, Scissors, Calendar, Award, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1a2a44] border-t-2 border-[#be1e2d] text-white shadow-2xl px-2 py-1.5 flex justify-around items-center">
      <button
        onClick={() => {
          setActiveTab('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center py-1 px-2 text-[10px] uppercase font-bold tracking-wider cursor-pointer ${
          activeTab === 'home' ? 'text-[#be1e2d]' : 'text-gray-300'
        }`}
      >
        <Home className="w-4 h-4 mb-0.5" />
        <span>Home</span>
      </button>

      <button
        onClick={() => {
          setActiveTab('services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center py-1 px-2 text-[10px] uppercase font-bold tracking-wider cursor-pointer ${
          activeTab === 'services' ? 'text-[#be1e2d]' : 'text-gray-300'
        }`}
      >
        <Scissors className="w-4 h-4 mb-0.5" />
        <span>Services</span>
      </button>

      {/* Prominent Center Action */}
      <button
        onClick={onOpenBooking}
        className="flex flex-col items-center bg-[#be1e2d] hover:bg-red-700 text-white px-3.5 py-1.5 -mt-3 rounded-full border-2 border-white shadow-lg cursor-pointer transform active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4" />
        <span className="text-[9px] uppercase font-extrabold tracking-wider mt-0.5">Book</span>
      </button>

      <button
        onClick={() => {
          setActiveTab('loyalty');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center py-1 px-2 text-[10px] uppercase font-bold tracking-wider cursor-pointer ${
          activeTab === 'loyalty' ? 'text-[#be1e2d]' : 'text-gray-300'
        }`}
      >
        <Award className="w-4 h-4 mb-0.5" />
        <span>Loyalty</span>
      </button>

      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center py-1 px-2 text-[10px] uppercase font-bold tracking-wider text-emerald-400 cursor-pointer"
      >
        <Phone className="w-4 h-4 mb-0.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
