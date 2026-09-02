import React, { useState } from 'react';
import { X, Check, Calendar as CalendarIcon, Clock, Scissors, User, Phone, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES, BARBERS, TIME_SLOTS, BUSINESS_INFO } from '../data/barberData';
import { ServiceItem, Barber } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | null;
  preSelectedBarber?: Barber | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  preSelectedBarber,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem>(
    preSelectedService || SERVICES[0]
  );
  const [selectedBarberId, setSelectedBarberId] = useState<string>(
    preSelectedBarber?.id || 'any'
  );
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const handleServiceChange = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `JM-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setStep(5); // Confirmation step
  };

  const getBarberName = () => {
    if (selectedBarberId === 'any') return 'Any Available Master Barber';
    const found = BARBERS.find(b => b.id === selectedBarberId);
    return found ? found.name : 'Master Barber';
  };

  const handleWhatsAppSync = () => {
    const text = `Hello Barber Shop J.M! I just submitted an appointment request.%0A%0A• Ref: ${bookingRef}%0A• Name: ${customerName}%0A• Service: ${selectedService.name} ($${selectedService.price})%0A• Barber: ${getBarberName()}%0A• Date: ${selectedDate}%0A• Time: ${selectedTime}%0A• Phone: ${customerPhone}%0A%0APlease confirm my chair!`;
    window.open(`https://wa.me/19295920764?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white max-w-xl w-full border-4 border-[#1a2a44] shadow-2xl overflow-hidden my-6 relative">
        
        {/* Top Barber Pole Stripe Ribbon */}
        <div className="h-2.5 w-full barber-pole-ribbon" />

        {/* Modal Header */}
        <div className="bg-[#1a2a44] text-white p-5 flex justify-between items-center border-b-2 border-[#be1e2d]">
          <div className="flex items-center space-x-3">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Barber Shop J.M Official Logo"
              className="h-10 w-auto max-w-[50px] object-contain rounded-sm bg-white p-0.5 border border-[#be1e2d]"
              referrerPolicy="no-referrer"
            />
            <div>
              <h3 className="font-serif font-bold text-base tracking-wide">
                BOOK AN APPOINTMENT
              </h3>
              <p className="text-[10px] text-gray-300 uppercase tracking-wider">
                1808 76th St, Brooklyn • Open 7 Days
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="text-gray-300 hover:text-white p-1 hover:bg-white/10 rounded-sm cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 5 && (
          <div className="bg-gray-100 px-5 py-2.5 border-b border-gray-200 flex justify-between items-center text-[11px] font-bold uppercase tracking-wider">
            <span className={step >= 1 ? 'text-[#be1e2d]' : 'text-gray-400'}>
              1. Service
            </span>
            <span className="text-gray-300">›</span>
            <span className={step >= 2 ? 'text-[#be1e2d]' : 'text-gray-400'}>
              2. Barber
            </span>
            <span className="text-gray-300">›</span>
            <span className={step >= 3 ? 'text-[#be1e2d]' : 'text-gray-400'}>
              3. Date & Time
            </span>
            <span className="text-gray-300">›</span>
            <span className={step >= 4 ? 'text-[#be1e2d]' : 'text-gray-400'}>
              4. Details
            </span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          
          {/* STEP 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a2a44]">
                  Select Grooming Service
                </h4>
                <span className="text-xs text-gray-500">1 of 4</span>
              </div>

              <div className="max-h-72 overflow-y-auto space-y-2 pr-1">
                {SERVICES.map((srv) => {
                  const isSelected = selectedService.id === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => handleServiceChange(srv)}
                      className={`p-3 border transition-all cursor-pointer flex justify-between items-center ${
                        isSelected
                          ? 'border-[#be1e2d] bg-red-50/50 ring-1 ring-[#be1e2d]'
                          : 'border-gray-200 hover:border-gray-400 bg-white'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-bold text-[#1a2a44]">{srv.name}</p>
                        <p className="text-[11px] text-gray-500">{srv.durationMinutes} min • {srv.description}</p>
                      </div>
                      <div className="text-right pl-3">
                        <span className="font-serif font-bold text-base text-[#1a2a44]">
                          ${srv.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#1a2a44] hover:bg-[#be1e2d] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Continue to Barber Selection →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Barber Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a2a44]">
                  Choose Preferred Barber
                </h4>
                <span className="text-xs text-gray-500">2 of 4</span>
              </div>

              <div className="space-y-2">
                <div
                  onClick={() => setSelectedBarberId('any')}
                  className={`p-3 border transition-all cursor-pointer flex items-center justify-between ${
                    selectedBarberId === 'any'
                      ? 'border-[#be1e2d] bg-red-50/50 ring-1 ring-[#be1e2d]'
                      : 'border-gray-200 hover:border-gray-400 bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#1a2a44] text-white rounded-sm flex items-center justify-center font-bold text-xs">
                      ANY
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a2a44]">Any Available Master Barber</p>
                      <p className="text-[11px] text-gray-500">Shortest wait time, best for prompt service</p>
                    </div>
                  </div>
                  {selectedBarberId === 'any' && <Check className="w-4 h-4 text-[#be1e2d]" />}
                </div>

                {BARBERS.map((barber) => {
                  const isSelected = selectedBarberId === barber.id;
                  return (
                    <div
                      key={barber.id}
                      onClick={() => setSelectedBarberId(barber.id)}
                      className={`p-3 border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-[#be1e2d] bg-red-50/50 ring-1 ring-[#be1e2d]'
                          : 'border-gray-200 hover:border-gray-400 bg-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 text-[#1a2a44] border border-gray-300 rounded-sm flex items-center justify-center font-serif font-bold text-sm">
                          {barber.initials}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#1a2a44]">{barber.name}</p>
                          <p className="text-[11px] text-[#be1e2d] font-semibold">{barber.role}</p>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#be1e2d]" />}
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-gray-200 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-xs font-bold uppercase hover:bg-gray-50"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#1a2a44] hover:bg-[#be1e2d] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Select Date & Time →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time Picker */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a2a44]">
                  Appointment Date & Time
                </h4>
                <span className="text-xs text-gray-500">3 of 4</span>
              </div>

              {/* Date Input */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Select Date (Open 7 Days 9 AM - 9 PM)
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 text-xs font-semibold focus:border-[#1a2a44] focus:outline-hidden bg-gray-50"
                />
              </div>

              {/* Time Slots Grid */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                  Available Slots ({selectedTime})
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-1">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-1.5 text-[11px] font-bold border transition-colors ${
                          isSelected
                            ? 'bg-[#be1e2d] text-white border-[#be1e2d]'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-xs font-bold uppercase hover:bg-gray-50"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="bg-[#1a2a44] hover:bg-[#be1e2d] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Contact Information →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Client Information */}
          {step === 4 && (
            <form onSubmit={handleConfirmBooking} className="space-y-4 text-xs">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a2a44]">
                  Client Details & Confirmation
                </h4>
                <span className="text-xs text-gray-500">4 of 4</span>
              </div>

              {/* Summary recap chip */}
              <div className="bg-gray-50 border border-gray-200 p-3 text-xs flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#1a2a44] block">{selectedService.name}</span>
                  <span className="text-gray-500 text-[11px]">
                    {selectedDate} at {selectedTime} • {getBarberName()}
                  </span>
                </div>
                <span className="font-serif font-bold text-lg text-[#1a2a44]">
                  ${selectedService.price}
                </span>
              </div>

              <div>
                <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Carlos Rodriguez"
                  className="w-full px-3 py-2 border border-gray-300 bg-gray-50 focus:border-[#1a2a44] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                    Mobile Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="(929) 592-0764"
                    className="w-full px-3 py-2 border border-gray-300 bg-gray-50 focus:border-[#1a2a44] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 border border-gray-300 bg-gray-50 focus:border-[#1a2a44] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                  Styling Notes or Special Requests
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. High skin taper fade, beard trim, razor part..."
                  className="w-full px-3 py-2 border border-gray-300 bg-gray-50 focus:border-[#1a2a44] focus:outline-hidden"
                />
              </div>

              <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-xs font-bold uppercase hover:bg-gray-50"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="bg-[#be1e2d] hover:bg-red-700 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                >
                  Confirm & Reserve Chair →
                </button>
              </div>
            </form>
          )}

          {/* STEP 5: Instant Booking Confirmation Screen */}
          {step === 5 && (
            <div className="text-center space-y-5 py-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs border-2 border-emerald-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#be1e2d] block mb-1">
                  Appointment Confirmed
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1a2a44]">
                  See You In The Chair, {customerName || 'Gentleman'}!
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Booking Reference ID: <span className="font-mono font-bold text-[#1a2a44] bg-gray-100 px-2 py-0.5">{bookingRef}</span>
                </p>
              </div>

              {/* Receipt / Booking Details Card */}
              <div className="bg-gray-50 border border-gray-200 p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-bold text-[#1a2a44]">{selectedService.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-500">Barber:</span>
                  <span className="font-bold text-[#1a2a44]">{getBarberName()}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-500">Scheduled Date:</span>
                  <span className="font-bold text-[#1a2a44]">{selectedDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-bold text-[#1a2a44]">{selectedTime}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-200">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-bold text-[#1a2a44]">1808 76th St, Brooklyn, NY</span>
                </div>
                <div className="flex justify-between py-1 text-sm font-bold text-[#1a2a44]">
                  <span>Total Amount:</span>
                  <span className="text-[#be1e2d]">${selectedService.price} (Pay at shop)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppSync}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation to Barber WhatsApp (1 929-592-0764)</span>
                </button>

                <button
                  onClick={resetAndClose}
                  className="w-full bg-[#1a2a44] hover:bg-[#be1e2d] text-white py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
