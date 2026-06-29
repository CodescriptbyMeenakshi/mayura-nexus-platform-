import React from 'react';
import { CheckCircle2, HeartHandshake, History, GraduationCap } from 'lucide-react';

export default function AboutUsView() {
  const highlights = [
    'Traditional Guru-Shishya Parampara mentorship style',
    'Structured syllabus integrating theory (Shastras) and practice',
    'Annual stage recitals & national cultural festival participation',
    'Comprehensive exam preparations recognized by art boards'
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs md:text-sm font-semibold text-emerald-900 dark:text-amber-400 uppercase tracking-widest">
              <History className="w-4 h-4" />
              <span>Our Heritage & Values</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              A Quarter Century of Artistic Dedication & Classical Integrity
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded over twenty-five years ago, Mayura Academy has served as a beacon for classical arts education. We believe that learning dance and music is not merely an extracurricular activity, but a transformative journey that builds posture, discipline, rhythm, and spiritual connection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Graphical Card Feature Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="glass-card rounded-3xl p-6 space-y-3 border-l-4 border-l-emerald-800 dark:border-l-amber-400">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/10 dark:bg-amber-400/10 text-emerald-900 dark:text-amber-400 flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Holistic Mentorship
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Deep individualized attention focused on developing expression (Abhinaya) alongside stamina.
                </p>
              </div>

              <div className="glass-card rounded-3xl p-6 space-y-3 border-l-4 border-l-amber-600">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  Academic Rigor
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Graduated levels ensuring students understand Tala, Raga, and Natyasastra treatises.
                </p>
              </div>
            </div>

            <div className="sm:pt-8">
              <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 space-y-4 shadow-2xl relative overflow-hidden">
                <div className="text-4xl font-display font-extrabold text-amber-300">
                  "Art is the bridge between discipline & devotion."
                </div>
                <p className="text-xs text-slate-300 italic">
                  — Academy Founders Statement
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
