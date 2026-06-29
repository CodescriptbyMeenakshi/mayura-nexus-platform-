import React from 'react';
import { Calendar, Award, Compass, Sparkles } from 'lucide-react';

export default function HeritageTimeline() {
  const milestones = [
    {
      year: '2000',
      title: 'Academy Foundation',
      description: 'Established by revered gurus to nurture authentic classical traditions with an initial cohort of 15 dedicated disciples.',
      icon: Calendar,
    },
    {
      year: '2008',
      title: 'Vocal & Instrumental Wing',
      description: 'Expanded the curriculum to include Carnatic Vocals, Veena, and Mridangam to foster complete rhythmic alignment.',
      icon: Compass,
    },
    {
      year: '2015',
      title: 'National Recognition',
      description: 'Honored with the Classical Heritage Excellence Award and initiated global concert tours across 10 countries.',
      icon: Award,
    },
    {
      year: '2026',
      title: 'Silver Jubilee Heritage',
      description: 'Celebrating over 25 years with a global alumni network of over 1,500 artists and state-of-the-art digital archives.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-500/5 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Our 25-Year Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Milestones that define our commitment to preserving classical authenticity and artistic growth.
          </p>
        </div>

        {/* Timeline Items Grid */}
        <div className="relative">
          {/* Vertical Center Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-800 via-amber-400 to-emerald-900 opacity-30" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((item, index) => {
              const IconComp = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 space-y-3 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-display font-black text-emerald-800 dark:text-amber-400">
                          {item.year}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-emerald-900/10 dark:bg-amber-400/10 text-emerald-900 dark:text-amber-400 flex items-center justify-center">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Marker Node */}
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-emerald-900 dark:bg-amber-400 text-white dark:text-slate-950 items-center justify-center shadow-lg font-bold text-xs z-10 shrink-0 my-4 md:my-0">
                    {index + 1}
                  </div>

                  {/* Empty space filler for desktop grid alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
