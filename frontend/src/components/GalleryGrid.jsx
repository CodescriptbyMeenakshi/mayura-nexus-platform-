import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';
import LightboxViewer from './LightboxViewer';

const MOCK_GALLERY = [
  {
    id: 1,
    title: 'Annual Bharatanatyam Arangetram Recital',
    category: 'Performances',
    url: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Carnatic Vocal Music Ensemble Concert',
    category: 'Recitals',
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Natyasastra Theory & Abhinaya Masterclass',
    category: 'Workshops',
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Heritage Stage Production Performance',
    category: 'Performances',
    url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Instrumental Veena & Mridangam Jugalbandi',
    category: 'Recitals',
    url: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Summer Youth Intensive Workshop',
    category: 'Workshops',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
  },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ['All', 'Performances', 'Recitals', 'Workshops'];

  const filteredItems = activeCategory === 'All'
    ? MOCK_GALLERY
    : MOCK_GALLERY.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs md:text-sm font-semibold text-emerald-900 dark:text-amber-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Visual Archives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Capturing Classical Moments
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A glimpse into stage recitals, traditional workshops, and academy milestones.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-emerald-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-md'
                    : 'glass-button'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 bg-slate-900"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-sm">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImageIndex !== null && (
          <LightboxViewer
            image={filteredItems[selectedImageIndex]}
            onClose={() => setSelectedImageIndex(null)}
            onPrev={filteredItems.length > 1 ? handlePrev : null}
            onNext={filteredItems.length > 1 ? handleNext : null}
          />
        )}

      </div>
    </section>
  );
}
