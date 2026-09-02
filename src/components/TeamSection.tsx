import React from 'react';
import { Award, CheckCircle, Scissors, Calendar } from 'lucide-react';
import { BARBERS } from '../data/barberData';
import { Barber } from '../types';

interface TeamSectionProps {
  onSelectBarberForBooking: (barber: Barber) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectBarberForBooking }) => {
  return (
    <div className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#be1e2d]">
              Master Barbers & Stylists
            </span>
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a2a44] tracking-tight mb-3">
            The Artists Behind The Chair
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our team brings decades of combined mastery to every cut, taper, and razor shave. Certified, bilingual, and dedicated to old-school hospitality.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BARBERS.map((barber) => (
            <div
              key={barber.id}
              className="bg-gray-50 border border-gray-200 hover:border-[#1a2a44] transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="p-6">
                {/* Avatar / Monogram Header */}
                <div className="relative mb-6 text-center">
                  <div className="w-24 h-24 mx-auto bg-[#1a2a44] text-white rounded-md flex items-center justify-center font-serif text-3xl font-bold border-2 border-gray-200 group-hover:border-[#be1e2d] transition-colors shadow-xs">
                    {barber.initials}
                  </div>
                  <div className="inline-flex items-center gap-1 bg-white border border-gray-200 text-gray-700 text-[10px] font-bold uppercase px-2 py-0.5 mt-3 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>In Shop Today</span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-[#1a2a44] uppercase tracking-wide">
                    {barber.name}
                  </h3>
                  <p className="text-xs font-bold text-[#be1e2d] uppercase tracking-wider">
                    {barber.role}
                  </p>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                    {barber.experience}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-gray-600 leading-relaxed text-center mb-5">
                  {barber.bio}
                </p>

                {/* Specialties Tags */}
                <div className="space-y-1.5 pt-3 border-t border-dashed border-gray-200">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider text-center">
                    Signature Specialties:
                  </p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {barber.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="bg-white text-[#1a2a44] text-[10px] font-semibold px-2 py-0.5 border border-gray-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 bg-white border-t border-gray-200">
                <button
                  onClick={() => onSelectBarberForBooking(barber)}
                  className="w-full bg-[#1a2a44] hover:bg-[#be1e2d] text-white py-2.5 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {barber.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chair Standards / Sanitation Guarantee */}
        <div className="mt-12 bg-gray-50 border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1a2a44] text-white rounded-none flex items-center justify-center shrink-0 border border-[#be1e2d]">
              <Award className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-[#1a2a44] tracking-wider">
                Hospital Grade Sterilization & Fresh Straight Blades
              </h4>
              <p className="text-xs text-gray-500">
                Every client receives fresh disposable single-use straight razor blades and sanitized clippers.
              </p>
            </div>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#be1e2d] shrink-0">
            ★ New York State Licensed Barbers
          </div>
        </div>

      </div>
    </div>
  );
};
