import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, MessageSquare, ShieldCheck, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenBooking }) => {
  return (
    <footer className="bg-[#050c1b] text-gray-300 border-t-4 border-[#1a2a44]">
      {/* Decorative Barber Stripe Accent */}
      <div className="h-1.5 w-full barber-pole-ribbon" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Barber Shop J.M Official Logo"
                className="h-14 w-auto max-w-[70px] object-contain rounded-md border border-white/20 bg-white p-0.5"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-lg font-serif font-bold text-white tracking-wider block">
                  BARBER SHOP J.M
                </span>
                <span className="text-[10px] tracking-widest text-[#be1e2d] font-bold uppercase block">
                  New York • Est. 1970
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Traditional American barbershop excellence in Brooklyn. Dedicated to master scissor craftsmanship, skin fades, hot towel straight shaves, and hospitable grooming.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#be1e2d] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600/30 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#be1e2d]"></span> Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="hover:text-white transition-colors cursor-pointer text-gray-400 hover:text-[#be1e2d]"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('services')}
                  className="hover:text-white transition-colors cursor-pointer text-gray-400 hover:text-[#be1e2d]"
                >
                  Services & Price List
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('team')}
                  className="hover:text-white transition-colors cursor-pointer text-gray-400 hover:text-[#be1e2d]"
                >
                  The Master Barbers
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="hover:text-white transition-colors cursor-pointer text-gray-400 hover:text-[#be1e2d]"
                >
                  Haircut Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('loyalty')}
                  className="hover:text-white transition-colors cursor-pointer text-gray-400 hover:text-[#be1e2d]"
                >
                  Digital Loyalty Card (8th Free)
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#be1e2d]"></span> Operating Hours
            </h3>
            <div className="space-y-1.5 text-xs text-gray-400">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="font-semibold text-white">9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Saturday</span>
                <span className="font-semibold text-white">9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Sunday</span>
                <span className="font-semibold text-white">9:00 AM – 9:00 PM</span>
              </div>
              <p className="text-[11px] text-[#be1e2d] pt-1 font-medium">
                ★ Walk-ins accepted daily until closing!
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-[#be1e2d]"></span> Visit & Contact
            </h3>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#be1e2d] shrink-0 mt-0.5" />
                <span>1808 76th St, Brooklyn, NY 11214 (New York)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#be1e2d] shrink-0" />
                <a href="tel:19295920764" className="hover:text-white transition-colors">
                  WhatsApp: 1 929-592-0764
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                <a href="tel:7183013522" className="hover:text-white transition-colors">
                  Shop: (718) 301-3522
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#be1e2d] shrink-0" />
                <a href="mailto:jmayancela70@gmail.com" className="hover:text-white transition-colors truncate">
                  jmayancela70@gmail.com
                </a>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full mt-2 bg-[#be1e2d] text-white py-2 text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors flex items-center justify-center gap-1.5"
              >
                <Scissors className="w-3.5 h-3.5" />
                <span>Book Chair Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching design HTML */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] uppercase tracking-[0.2em] text-gray-400 gap-4">
          <div>
            © 2024 BARBER SHOP J.M • ALL RIGHTS RESERVED • BROOKLYN, NY
          </div>
          <div className="flex space-x-6 text-[11px]">
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Licensed & Certified Barbers</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
