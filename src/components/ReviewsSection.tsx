import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/barberData';

export const ReviewsSection: React.FC = () => {
  return (
    <div className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#be1e2d]">
              Real Community Feedback
            </span>
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a2a44] tracking-tight mb-2">
            Trusted by Brooklyn Gentlemen
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#1a2a44]">
              4.9 / 5.0 Star Average • Over 250+ Verified Visits
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 border border-gray-200 p-6 flex flex-col justify-between hover:border-[#1a2a44] transition-colors relative"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 font-semibold">{t.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs text-gray-700 leading-relaxed italic mb-4">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1a2a44] uppercase tracking-wide">
                    {t.author}
                  </h4>
                  <p className="text-[10px] text-gray-500">{t.neighborhood}</p>
                </div>
                <span className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 font-semibold text-[#be1e2d]">
                  {t.service.split('+')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
