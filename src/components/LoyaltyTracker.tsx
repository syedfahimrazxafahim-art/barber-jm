import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, Gift, Sparkles, RotateCcw, ShieldCheck, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barberData';

interface LoyaltyTrackerProps {
  onOpenBooking: () => void;
}

export const LoyaltyTracker: React.FC<LoyaltyTrackerProps> = ({ onOpenBooking }) => {
  const TOTAL_STAMPS = 8;
  const [stamps, setStamps] = useState<number>(() => {
    const saved = localStorage.getItem('jm_barber_stamps');
    return saved ? parseInt(saved, 10) : 5; // Default to 5 to show progress
  });

  useEffect(() => {
    localStorage.setItem('jm_barber_stamps', stamps.toString());
  }, [stamps]);

  const handleAddStamp = () => {
    if (stamps < TOTAL_STAMPS) {
      setStamps(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setStamps(0);
  };

  const isComplete = stamps >= TOTAL_STAMPS;

  return (
    <div className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#be1e2d]">
              Gentleman's Club Rewards
            </span>
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a2a44] tracking-tight mb-3">
            Digital Loyalty Rewards Card
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Every haircut earns one stamp. Collect 7 stamps and your <span className="font-bold text-[#be1e2d]">8th haircut is completely on the house!</span>
          </p>
        </div>

        {/* The Digital Punch Card */}
        <div className="bg-[#1a2a44] text-white p-6 sm:p-10 border-4 border-[#be1e2d] shadow-2xl relative overflow-hidden mb-8">
          {/* Top Barber Ribbon */}
          <div className="absolute top-0 left-0 w-full h-2 barber-pole-ribbon" />

          {/* Card Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/15">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 bg-white text-[#1a2a44] rounded-full flex items-center justify-center font-serif text-xl font-bold border-2 border-[#be1e2d] shadow-xs">
                JM
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold tracking-wide">
                  BARBER SHOP J.M VIP REWARDS
                </h3>
                <p className="text-[11px] tracking-widest text-[#be1e2d] uppercase font-bold">
                  Cardholder Loyalty Pass • Brooklyn, NY
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs text-gray-300 font-medium block">Current Progress:</span>
              <span className="text-2xl font-bold text-amber-400 font-serif">
                {stamps} / {TOTAL_STAMPS} <span className="text-xs text-gray-300 font-normal">Stamps</span>
              </span>
            </div>
          </div>

          {/* Stamp Grid (8 Stamps) */}
          <div className="py-8">
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4">
              {Array.from({ length: TOTAL_STAMPS }).map((_, index) => {
                const isStamped = index < stamps;
                const isFinalReward = index === TOTAL_STAMPS - 1;

                return (
                  <div
                    key={index}
                    className={`aspect-square rounded-md border-2 flex flex-col items-center justify-center p-2 relative transition-all duration-300 ${
                      isStamped
                        ? 'bg-[#be1e2d] border-white shadow-md text-white scale-105'
                        : isFinalReward
                        ? 'bg-amber-400/10 border-dashed border-amber-400 text-amber-300'
                        : 'bg-white/5 border-dashed border-white/30 text-white/40'
                    }`}
                  >
                    {isStamped ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-6 h-6 text-white mb-0.5" />
                        <span className="text-[9px] font-extrabold uppercase tracking-tighter">
                          Cut #{index + 1}
                        </span>
                      </div>
                    ) : isFinalReward ? (
                      <div className="flex flex-col items-center text-center">
                        <Gift className="w-6 h-6 text-amber-400 animate-bounce mb-0.5" />
                        <span className="text-[9px] font-extrabold uppercase text-amber-300 leading-tight">
                          FREE CUT
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Scissors className="w-5 h-5 opacity-40 mb-0.5" />
                        <span className="text-[9px] font-semibold opacity-60">
                          #{index + 1}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 mb-6">
            <div className="flex justify-between text-xs text-gray-300">
              <span>{Math.round((stamps / TOTAL_STAMPS) * 100)}% to Free Haircut</span>
              <span>
                {isComplete ? 'Goal Reached!' : `${TOTAL_STAMPS - stamps} cuts remaining`}
              </span>
            </div>
            <div className="w-full h-3 bg-white/10 rounded-none overflow-hidden p-0.5 border border-white/20">
              <div
                className="h-full bg-gradient-to-r from-red-600 via-amber-400 to-emerald-400 transition-all duration-500"
                style={{ width: `${(stamps / TOTAL_STAMPS) * 100}%` }}
              />
            </div>
          </div>

          {/* Reward Notification Banner */}
          {isComplete ? (
            <div className="bg-amber-400 text-gray-950 p-4 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#be1e2d] shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wide">
                    Congratulations! Your 8th Haircut Is 100% Free
                  </h4>
                  <p className="text-xs text-gray-800">
                    Voucher Code: <span className="font-mono font-bold bg-white px-2 py-0.5 border border-gray-400 text-[#1a2a44]">JM-VIP-FREE8TH</span>
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="bg-[#1a2a44] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#be1e2d] transition-colors cursor-pointer shrink-0 shadow-xs"
              >
                Claim & Book Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300 bg-white/5 p-4 border border-white/10">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Tracked automatically at checkout via your phone number: {BUSINESS_INFO.phonePrimary}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddStamp}
                  className="bg-white text-[#1a2a44] hover:bg-amber-400 hover:text-gray-950 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  + Simulate Stamp
                </button>
                <button
                  onClick={handleReset}
                  className="text-gray-400 hover:text-white p-1.5 transition-colors cursor-pointer"
                  title="Reset demo stamps"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* VIP Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-5 border border-gray-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a2a44] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#be1e2d]"></span>
              Priority Chair Booking
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Loyalty members receive priority slot confirmations during busy Friday and Saturday peak barber hours.
            </p>
          </div>

          <div className="bg-gray-50 p-5 border border-gray-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a2a44] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#be1e2d]"></span>
              Birthday Month Upgrade
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Complimentary hot towel straight razor neck shave upgrade on any haircut booked during your birth month.
            </p>
          </div>

          <div className="bg-gray-50 p-5 border border-gray-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a2a44] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#be1e2d]"></span>
              Family & Kids Pass
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Haircuts for family members and kids can be pooled under one single household mobile number.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
