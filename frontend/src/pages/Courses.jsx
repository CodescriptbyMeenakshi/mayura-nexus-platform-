import React from 'react';
import { BookOpen } from 'lucide-react';
import CoursesGrid from '../components/CoursesGrid';

export default function Courses() {
  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col justify-between">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-10">
        
        {/* Header Title Banner */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-emerald-900/10 dark:bg-amber-400/15 flex items-center justify-center text-emerald-900 dark:text-amber-400 mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white">
            Our Cultural Programs
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover classical curations structured to elevate technical proficiency, historical grounding, and performance artistry across ages.
          </p>
        </div>

        {/* Dynamic Courses Catalog Grid */}
        <CoursesGrid />

      </section>
    </div>
  );
}
