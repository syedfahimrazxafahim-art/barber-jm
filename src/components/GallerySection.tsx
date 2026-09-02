import React, { useState } from 'react';
import { Scissors, Eye, X, Check, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/barberData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenBooking: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Styles' },
    { id: 'fades', label: 'Modern Fades & Crops' },
    { id: 'classic', label: 'Classic Pompadours' },
    { id: 'beards', label: 'Beards & Straight Shaves' },
    { id: 'shop', label: '1808 76th St Shop Ambiance' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="py-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#be1e2d]">
              Precision Cuts & Craftsmanship
            </span>
            <span className="w-6 h-0.5 bg-[#be1e2d]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1a2a44] tracking-tight mb-3">
            Haircut & Grooming Gallery
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Real cuts crafted right here in Brooklyn. Bring in any style reference or consult with your master barber for a custom blend tailored to your facial structure.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#1a2a44] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 hover:border-[#1a2a44] transition-all hover:shadow-lg overflow-hidden group flex flex-col justify-between"
            >
              {/* Image Container Card */}
              <div
                onClick={() => setSelectedItem(item)}
                className="h-64 bg-gray-900 relative cursor-pointer overflow-hidden group"
              >
                {/* Real Haircut Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Top Barber Pole Stripe */}
                <div className="absolute top-0 left-0 w-full h-1.5 barber-pole-ribbon opacity-90 z-10" />

                {/* Dark Gradient Overlay for Badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Header Tag and Inspect Button */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                  <span className="bg-[#be1e2d] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-sm">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/50 group-hover:bg-[#be1e2d] text-white flex items-center justify-center transition-colors backdrop-blur-xs">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Image Title Overlay */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <h4 className="text-white font-serif font-bold text-base leading-snug drop-shadow-sm">
                    {item.title}
                  </h4>
                  <div className="flex justify-between items-center text-[10px] text-gray-300 font-bold uppercase tracking-wider mt-1">
                    <span>1808 76th St • Brooklyn</span>
                    <span className="text-amber-300 group-hover:underline">Tap to Zoom</span>
                  </div>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-dashed border-gray-200 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1a2a44] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-bold uppercase tracking-wider text-[#be1e2d] hover:text-red-800 cursor-pointer flex items-center gap-1"
                  >
                    <span>Request Cut</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Detail Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <div className="bg-white max-w-xl w-full border-4 border-[#1a2a44] shadow-2xl overflow-hidden relative my-auto">
              <div className="h-2 w-full barber-pole-ribbon" />
              
              {/* Full Image in Modal */}
              <div className="relative max-h-80 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="max-h-80 w-full object-contain bg-black"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#be1e2d] block mb-1">
                    {selectedItem.tag} • Authentic Barber Shop J.M Reference
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#1a2a44]">
                    {selectedItem.title}
                  </h3>
                </div>

                <div className="bg-gray-50 border border-gray-200 p-4 mb-5">
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Includes precision clipper fade & scissor texture blending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Straight razor neckline and temple edge finish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Styling pomade or beard conditioning oil application</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onOpenBooking();
                    }}
                    className="flex-1 bg-[#1a2a44] hover:bg-[#be1e2d] text-white py-3 text-xs font-bold uppercase tracking-widest transition-colors text-center cursor-pointer shadow-xs"
                  >
                    Book This Cut Reference
                  </button>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-3 border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
