import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, FileText, CheckCircle, GraduationCap, Calendar, MessageSquare } from 'lucide-react';
import { MOCK_COURSES } from '../components/CoursesGrid';

export default function CourseDetail() {
  const { slug } = useParams();

  const course = MOCK_COURSES.find((c) => c.slug === slug) || {
    title: slug ? slug.replace(/-/g, ' ') : 'Classical Arts Program',
    category: 'Classical Dance',
    duration_weeks: 24,
    description: 'Immersive training structured around classical treatises, technical posture, rhythmic precision, and stage performance readiness.',
    syllabus_url: '#'
  };

  const syllabusModules = [
    {
      title: 'Module 1: Fundamental Stances & Rhythms (Weeks 1-8)',
      details: 'Mastery over basic Tat-Adavus, Nat-Adavus, foot posture alignment, and fundamental Tala counts.'
    },
    {
      title: 'Module 2: Gestures & Expression (Weeks 9-16)',
      details: 'In-depth study of Asamyutta and Samyutta Hastas (single and combined hand gestures) and facial Abhinaya.'
    },
    {
      title: 'Module 3: Repertoire & Stage Mastery (Weeks 17-24)',
      details: 'Learning complete choreographies, stage entrance (Alarippu), and preparation for live orchestral accompaniment.'
    }
  ];

  const handleDownloadSyllabus = () => {
    alert(`Downloading syllabus PDF for: ${course.title}`);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col justify-between">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-8">
        
        {/* Back Link */}
        <Link
          to="/courses"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-500 hover:text-emerald-800 dark:text-slate-400 dark:hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Courses Catalog</span>
        </Link>

        {/* Hero Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 space-y-6 border-l-8 border-l-emerald-800 dark:border-l-amber-400 shadow-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 bg-emerald-900/10 text-emerald-900 dark:bg-amber-400/15 dark:text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider">
              {course.category}
            </span>
            <span className="flex items-center text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1 text-emerald-700 dark:text-amber-400" />
              {course.duration_weeks} Weeks Duration
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white capitalize leading-tight">
            {course.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-650 dark:text-slate-300 leading-relaxed">
            {course.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={handleDownloadSyllabus}
              className="px-6 py-3.5 bg-emerald-900 hover:bg-emerald-800 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 font-semibold rounded-xl flex items-center space-x-2 shadow-lg transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              <span>Download Syllabus PDF</span>
            </button>

            <Link
              to="/contact"
              className="px-6 py-3.5 glass-button rounded-xl font-semibold flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire for Admission</span>
            </Link>
          </div>
        </div>

        {/* Syllabus Breakdown Section */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-emerald-800 dark:text-amber-400" />
            <span>Curriculum & Module Outline</span>
          </h2>

          <div className="space-y-4">
            {syllabusModules.map((mod, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 space-y-2 border-l-4 border-l-amber-500">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                  {mod.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {mod.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
