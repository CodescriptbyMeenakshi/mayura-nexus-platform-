import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const MOCK_TESTIMONIALS = [
  {
    id: 1,
    author_name: 'Ananya Sharma',
    relation: 'Alumna - Bharatanatyam',
    rating: 5,
    content: 'Learning at Mayura Academy transformed my understanding of classical arts. The gurus do not just teach movements; they impart rhythmic mastery and profound grace.'
  },
  {
    id: 2,
    author_name: 'Rajesh & Meena Iyer',
    relation: 'Parents of Senior Student',
    rating: 5,
    content: 'The discipline, stage exposure, and academic rigor provided here are exceptional. Our daughter performed her Arangetram with complete confidence!'
  },
  {
    id: 3,
    author_name: 'Karthik Viswanath',
    relation: 'Carnatic Vocal Student',
    rating: 5,
    content: 'The vocal training exercises and theoretical depth provided in Tala and Raga frameworks are unmatched. Truly a temple of classical learning.'
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? MOCK_TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === MOCK_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = MOCK_TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-slate-500/5 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Words From Our Academy Family
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Real stories of transformation, discipline, and artistic pride.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
          <Quote className="w-12 h-12 text-emerald-900/10 dark:text-amber-400/10 absolute top-6 left-6 -z-0 pointer-events-none" />

          <div className="relative z-10 space-y-6 text-center">
            
            {/* Rating Stars */}
            <div className="flex justify-center space-x-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Quote Body */}
            <p className="text-lg md:text-2xl font-sans text-slate-800 dark:text-slate-100 italic leading-relaxed max-w-3xl mx-auto">
              "{current.content}"
            </p>

            {/* Author Meta */}
            <div className="space-y-1 pt-2">
              <h4 className="font-display font-bold text-lg text-emerald-900 dark:text-amber-400">
                {current.author_name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                {current.relation}
              </p>
            </div>

          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
            <button
              onClick={handlePrev}
              className="p-3 glass-button rounded-full text-slate-700 dark:text-slate-200 hover:scale-105 transition-transform"
              title="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex space-x-2">
              {MOCK_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-emerald-900 dark:bg-amber-400'
                      : 'w-2.5 bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 glass-button rounded-full text-slate-700 dark:text-slate-200 hover:scale-105 transition-transform"
              title="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
