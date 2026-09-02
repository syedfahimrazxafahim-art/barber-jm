import React, { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin, Calendar, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'team', label: 'The Artists' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'loyalty', label: 'Loyalty Club' },
    { id: 'contact', label: 'Contact & Hours' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
      {/* Top Heritage Barber Pole Ribbon */}
      <div className="h-3 w-full barber-pole-ribbon" />

      {/* Top Utilities Sub-bar */}
      <div className="bg-[#1a2a44] text-white text-[11px] py-1.5 px-4 sm:px-8 flex flex-wrap justify-between items-center border-b border-[#0f1d32]">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5 text-gray-200">
            <MapPin className="w-3.5 h-3.5 text-[#be1e2d]" />
            <span>1808 76th St, Brooklyn, NY 11214</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-gray-200">
            <Clock className="w-3.5 h-3.5 text-[#be1e2d]" />
            <span>Open 7 Days: 9:00 AM – 9:00 PM</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
          >
            <span>WhatsApp: {BUSINESS_INFO.phonePrimary}</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phonePrimary.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center gap-1 text-gray-200 hover:text-white"
          >
            <Phone className="w-3 h-3 text-[#be1e2d]" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3.5 text-left group cursor-pointer focus:outline-hidden"
        >
          {/* Official Business Logo */}
          <div className="relative shrink-0">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Barber Shop J.M Official Logo"
              className="h-14 w-auto max-w-[70px] object-contain rounded-md border border-gray-200 shadow-xs group-hover:scale-105 transition-transform bg-white"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#1a2a44] leading-tight tracking-tight flex items-center gap-2">
              <span>BARBER SHOP J.M</span>
            </h1>
            <p className="text-[10px] sm:text-[11px] tracking-widest text-[#be1e2d] font-bold uppercase">
              New York • Established 1970
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold uppercase tracking-wider text-[#1a2a44]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-2 transition-colors cursor-pointer relative ${
                  isActive
                    ? 'text-[#be1e2d] font-extrabold border-b-2 border-[#be1e2d]'
                    : 'text-[#1a2a44] hover:text-[#be1e2d]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('loyalty')}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1a2a44] px-3 py-2 border border-gray-300 hover:border-[#1a2a44] hover:bg-gray-50 transition-colors"
          >
            <Award className="w-3.5 h-3.5 text-[#be1e2d]" />
            <span>Stamp Card</span>
          </button>
          <button
            onClick={onOpenBooking}
            className="bg-[#1a2a44] text-white px-5 py-2.5 rounded-none font-bold uppercase tracking-wider text-xs hover:bg-[#be1e2d] transition-colors border border-[#1a2a44] shadow-xs cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="bg-[#1a2a44] text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider hover:bg-[#be1e2d] transition-colors"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1a2a44] hover:bg-gray-100 rounded-md focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-md">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-sm font-bold uppercase tracking-wider rounded-none ${
                  activeTab === item.id
                    ? 'bg-[#1a2a44] text-white border-l-4 border-[#be1e2d]'
                    : 'text-[#1a2a44] hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#1a2a44] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#be1e2d] transition-colors text-center"
            >
              Book Appointment Now
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white py-2 text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
