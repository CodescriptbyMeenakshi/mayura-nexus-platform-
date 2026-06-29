import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="pt-24 min-h-screen flex flex-col justify-between">
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 w-full flex-1">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-accent/15 flex items-center justify-center text-primary dark:text-accent mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Student & Parent Testimonials
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">
            Read stories of transformation, discipline, and artistic excellence shared by our academy family.
          </p>
        </div>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="glass-card rounded-2xl p-6 space-y-4 animate-pulse">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full" />
                ))}
              </div>
              <div className="h-3 bg-slate-200 dark:bg-slate-800 w-full rounded" />
              <div className="h-3 bg-slate-200 dark:bg-slate-800 w-full rounded" />
              <div className="h-3 bg-slate-200 dark:bg-slate-800 w-2/3 rounded" />
              <div className="flex items-center space-x-3 pt-2">
                <div className="w-10 h-10 bg-slate-300 dark:bg-slate-700 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-slate-300 dark:bg-slate-700 w-1/3 rounded" />
                  <div className="h-2 bg-slate-200 dark:bg-slate-800 w-1/4 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
