import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Award, Users, ShieldCheck, Globe } from 'lucide-react';

export default function HeroSection() {
  const stats = [
    { label: 'Years of Lineage', value: '25+', icon: Award },
    { label: 'Graduated Alumni', value: '1,500+', icon: Users },
    { label: 'Certified Gurus', value: '100%', icon: ShieldCheck },
    { label: 'Global Stage Events', value: '50+', icon: Globe },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-tr from-emerald-900/10 via-amber-500/5 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Heritage Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-900/10 dark:bg-amber-400/10 border border-emerald-800/20 dark:border-amber-400/30 text-emerald-900 dark:text-amber-300 text-xs md:text-sm font-semibold uppercase tracking-widest animate-pulse shadow-sm">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>25+ Years of Heritage & Classical Mastery</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Nurturing Heritage, <br />
            <span className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-amber-600 dark:from-amber-200 dark:via-amber-400 dark:to-emerald-300 bg-clip-text text-transparent">
              Inspiring Artistic Expression
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Welcome to Mayura Academy. Dedicated to preserving Indian classical traditions, technical precision, and spiritual depth across generations of passionate artists.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/courses"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-900 hover:bg-emerald-800 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group text-base"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 glass-button rounded-2xl text-base text-center"
            >
              Enquire for Admission
            </Link>
          </div>

        </div>

        {/* Metric Cards Banner */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 text-center space-y-2 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-900/10 dark:bg-amber-400/10 text-emerald-900 dark:text-amber-400 flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
