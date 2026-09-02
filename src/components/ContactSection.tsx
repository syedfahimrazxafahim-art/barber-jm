import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Gentleman’s Classic Haircut',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#be1e2d]">
              Visit & Get In Touch
            </span>
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a2a44] tracking-tight mb-3">
            Hours, Location & Direct Contact
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Located on 76th Street in Brooklyn. Walk-ins are always welcomed, or schedule ahead to guarantee zero waiting time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Hours & Shop Information (Styled like service.png board) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Hours Board with Professional Polish Navy / Gold / Red styling */}
            <div className="bg-[#1a2a44] text-white p-6 sm:p-8 border-4 border-[#be1e2d] shadow-xl relative overflow-hidden">
              <div className="h-1.5 w-full barber-pole-ribbon absolute top-0 left-0" />
              
              <div className="flex justify-between items-center pb-4 border-b border-white/15 mb-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">SHOP HOURS</h3>
                  <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                    Open 7 Days A Week
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#be1e2d] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                    OPEN NOW
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {BUSINESS_INFO.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-1.5 border-b border-white/10 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-semibold text-gray-200">{item.day}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-white">{item.hours}</span>
                      <span className="text-[10px] text-gray-400 block">{item.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-[11px] text-gray-300 text-center italic">
                ★ Walk-ins accepted daily. Late appointments available upon request.
              </div>
            </div>

            {/* Direct Connect Card */}
            <div className="bg-gray-50 border border-gray-200 p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a2a44] pb-2 border-b border-gray-200">
                Direct Contact Channels
              </h4>
              <div className="space-y-3 text-xs">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors font-semibold"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="truncate">
                    <span className="block text-[10px] uppercase font-bold text-emerald-600">WhatsApp Quick Chat</span>
                    <span>1 929-592-0764</span>
                  </div>
                </a>

                <a
                  href="tel:19295920764"
                  className="flex items-center gap-3 p-2.5 bg-white border border-gray-200 text-gray-800 hover:border-[#1a2a44] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#be1e2d] shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500">Mobile / Calls</span>
                    <span>(929) 592-0764</span>
                  </div>
                </a>

                <a
                  href="tel:7183013522"
                  className="flex items-center gap-3 p-2.5 bg-white border border-gray-200 text-gray-800 hover:border-[#1a2a44] transition-colors"
                >
                  <Phone className="w-4 h-4 text-gray-600 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-500">Shop Landline</span>
                    <span>(718) 301-3522</span>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3 p-2.5 bg-white border border-gray-200 text-gray-800 hover:border-[#1a2a44] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#be1e2d] shrink-0" />
                  <div className="truncate">
                    <span className="block text-[10px] uppercase font-bold text-gray-500">Official Email</span>
                    <span className="truncate">{BUSINESS_INFO.email}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Official Storefront & Welcome Board Asset */}
            <div className="bg-white border-2 border-gray-200 p-4 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#be1e2d]">
                  Storefront Sign • 1808 76th St
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">Verified Location</span>
              </div>
              <div className="relative rounded-sm overflow-hidden border border-gray-200 bg-gray-900">
                <img
                  src={BUSINESS_INFO.contactBoardUrl}
                  alt="Barber Shop J.M Official Welcome & Schedule Sign"
                  className="w-full h-auto object-cover max-h-56"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-gray-500 mt-2 text-center">
                Official shop sign welcoming clients to 1808 76th St, Brooklyn.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form & Neighborhood Guide */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Form */}
            <div className="bg-white border-2 border-gray-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-serif font-bold text-[#1a2a44] mb-2">
                Send a Message or Consultation Inquiry
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Have questions regarding hair treatments, color, wedding party groomings, or special bookings? Leave a message and we will respond promptly.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-800">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Your inquiry has been received. Our team will contact you at {formData.phone || formData.email} shortly. For immediate assistance, feel free to chat on WhatsApp.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-bold uppercase tracking-wider text-[#1a2a44] underline cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-2.5 border border-gray-300 focus:border-[#1a2a44] focus:outline-hidden text-gray-900 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(929) 000-0000"
                        className="w-full px-3 py-2.5 border border-gray-300 focus:border-[#1a2a44] focus:outline-hidden text-gray-900 bg-gray-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3 py-2.5 border border-gray-300 focus:border-[#1a2a44] focus:outline-hidden text-gray-900 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3 py-2.5 border border-gray-300 focus:border-[#1a2a44] focus:outline-hidden text-gray-900 bg-gray-50"
                      >
                        <option value="Gentleman’s Classic Haircut">Gentleman’s Classic Haircut ($30)</option>
                        <option value="Skin Fade & Taper Cut">Skin Fade & Taper Cut ($35)</option>
                        <option value="Traditional Hot Towel Straight Shave">Hot Towel Straight Shave ($30)</option>
                        <option value="The J.M Royal Grooming Package">The J.M Royal Package ($55)</option>
                        <option value="Beard Sculpting & Trim">Beard Sculpting & Trim ($20)</option>
                        <option value="Hair Coloring & Highlights">Hair Coloring & Highlights ($45)</option>
                        <option value="Kids & Junior Haircut">Kids Haircut ($20)</option>
                        <option value="Group / Wedding Party Booking">Group / Wedding Grooming Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold uppercase text-gray-700 text-[11px] mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know any specific styling notes, preferred dates, or questions..."
                      className="w-full px-3 py-2.5 border border-gray-300 focus:border-[#1a2a44] focus:outline-hidden text-gray-900 bg-gray-50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a2a44] hover:bg-[#be1e2d] text-white py-3 font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

            {/* Neighborhood Location Map Card */}
            <div className="bg-gray-50 border border-gray-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-[#1a2a44] font-bold text-sm uppercase tracking-wide">
                  <MapPin className="w-4 h-4 text-[#be1e2d]" />
                  <span>1808 76th St, Brooklyn, NY 11214</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Accessible via D Train (71st St / Bay Pkwy Station) or B1 / B4 buses. Street parking available.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=1808+76th+St+Brooklyn+NY+11214"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 hover:border-[#1a2a44] text-[#1a2a44] px-4 py-2 text-xs font-bold uppercase tracking-wider shrink-0 transition-colors shadow-2xs"
              >
                Open in Maps →
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
