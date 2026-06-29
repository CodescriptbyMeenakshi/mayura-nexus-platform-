import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxViewer({ image, onClose, onPrev, onNext }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
      {/* Close Action */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
        title="Close Preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
          title="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Main Image View */}
      <div className="max-w-4xl max-h-[85vh] space-y-4 text-center z-10">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl max-h-[75vh] flex items-center justify-center bg-slate-950">
          <img
            src={image.image_url || image.url}
            alt={image.title}
            className="max-h-[75vh] max-w-full object-contain rounded-2xl"
          />
        </div>
        <div className="space-y-1 text-white">
          <h3 className="font-display font-bold text-xl">{image.title}</h3>
          {image.category && (
            <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider">
              {image.category}
            </span>
          )}
        </div>
      </div>

      {/* Next Navigation */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-20"
          title="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
