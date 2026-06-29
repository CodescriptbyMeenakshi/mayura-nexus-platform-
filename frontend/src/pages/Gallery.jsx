import React from 'react';
import { Image } from 'lucide-react';

export default function Gallery() {
  return (
    <div className="pt-24 min-h-screen flex flex-col justify-between">
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 w-full flex-1">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-accent/15 flex items-center justify-center text-primary dark:text-accent mx-auto">
            <Image className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Media Gallery
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
            Capturing performance milestones, concert recitals, and workshop memories at Mayura Academy.
          </p>
        </div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-xl animate-pulse flex items-center justify-center text-slate-400 dark:text-slate-600">
              <Image className="w-8 h-8" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
