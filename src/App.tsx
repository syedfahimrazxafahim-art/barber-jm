import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { LoyaltyTracker } from './components/LoyaltyTracker';
import { ContactSection } from './components/ContactSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingModal } from './components/BookingModal';
import { MobileNav } from './components/MobileNav';
import { ServiceItem, Barber } from './types';
import { Scissors, ShieldCheck, Clock, Award, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from './data/barberData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);

  const handleOpenBooking = () => {
    setSelectedService(null);
    setSelectedBarber(null);
    setIsBookingOpen(true);
  };

  const handleSelectServiceForBooking = (service: ServiceItem) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleSelectBarberForBooking = (barber: Barber) => {
    setSelectedBarber(barber);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans pb-16 lg:pb-0">
      
      {/* Primary Header with Professional Polish Theme */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* Split Screen Hero matching provided design theme */}
            <HeroSection
              onOpenBooking={handleOpenBooking}
              setActiveTab={setActiveTab}
            />

            {/* Value Proposition Bar */}
            <div className="bg-[#1a2a44] text-white py-6 border-b-2 border-[#be1e2d]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Scissors className="w-5 h-5 text-[#be1e2d] mb-1.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Master Scissor Work</span>
                    <span className="text-[10px] text-gray-300">Over 18 years in craft</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-5 h-5 text-[#be1e2d] mb-1.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Open 7 Days</span>
                    <span className="text-[10px] text-gray-300">9:00 AM to 9:00 PM</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-5 h-5 text-[#be1e2d] mb-1.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Sterile Single-Use Blades</span>
                    <span className="text-[10px] text-gray-300">Hygienic perfection</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="w-5 h-5 text-[#be1e2d] mb-1.5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Loyalty Club</span>
                    <span className="text-[10px] text-gray-300">8th Haircut 100% Free</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Services Preview Section */}
            <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

            {/* Master Barbers Showcase */}
            <TeamSection onSelectBarberForBooking={handleSelectBarberForBooking} />

            {/* Community Reviews & Ratings */}
            <ReviewsSection />

            {/* Loyalty Quick Banner */}
            <div className="bg-gray-100 py-10 border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[#1a2a44] text-amber-400 rounded-md flex items-center justify-center border-2 border-[#be1e2d] shrink-0">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1a2a44]">
                      Join The J.M Gentleman’s Loyalty Club
                    </h3>
                    <p className="text-xs text-gray-600">
                      Collect 7 stamps and claim your 8th haircut for free. Track your progress with our digital stamp card!
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('loyalty');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#1a2a44] hover:bg-[#be1e2d] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  View My Digital Card →
                </button>
              </div>
            </div>

            {/* Hours & Contact Preview */}
            <ContactSection />
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />
            <ReviewsSection />
          </div>
        )}

        {activeTab === 'team' && (
          <div>
            <TeamSection onSelectBarberForBooking={handleSelectBarberForBooking} />
            <ReviewsSection />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <GallerySection onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeTab === 'loyalty' && (
          <div>
            <LoyaltyTracker onOpenBooking={handleOpenBooking} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <ContactSection />
          </div>
        )}
      </main>

      {/* Primary Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Mobile Bottom Sticky Navigation */}
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Multi-step Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedService={selectedService}
        preSelectedBarber={selectedBarber}
      />

    </div>
  );
}
