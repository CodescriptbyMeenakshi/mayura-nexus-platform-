import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

export const MOCK_COURSES = [
  {
    id: 1,
    title: 'Bharatanatyam Foundation Program',
    slug: 'bharatanatyam-foundation-program',
    category: 'Classical Dance',
    duration_weeks: 24,
    description: 'Comprehensive training covering basic Adavus, Hastas (hand gestures), Nritta rhythm exercises, and introductory items.',
    syllabus_url: '/syllabus-bharatanatyam.pdf'
  },
  {
    id: 2,
    title: 'Advanced Bharatanatyam Margam',
    slug: 'advanced-bharatanatyam-margam',
    category: 'Classical Dance',
    duration_weeks: 36,
    description: 'Mastery over traditional Margam items including Varnam, Padam, and Tillana with intensive Abhinaya facial expression practice.',
    syllabus_url: '/syllabus-advanced-dance.pdf'
  },
  {
    id: 3,
    title: 'Carnatic Vocal Primer (Kritis & Varnams)',
    slug: 'carnatic-vocal-primer',
    category: 'Carnatic Vocal',
    duration_weeks: 16,
    description: 'Structured vocal training focusing on Sarali Varisai, Alankaram, Geetham, and fundamental Raga Lakshanas.',
    syllabus_url: '/syllabus-vocal.pdf'
  },
  {
    id: 4,
    title: 'Classical Veena Mastery',
    slug: 'classical-veena-mastery',
    category: 'Instrumental Arts',
    duration_weeks: 20,
    description: 'Fretwork techniques, Gamaka nuances, and traditional compositions played on the Saraswati Veena.',
    syllabus_url: '/syllabus-veena.pdf'
  },
  {
    id: 5,
    title: 'Mridangam Rhythmic Percussion',
    slug: 'mridangam-rhythmic-percussion',
    category: 'Instrumental Arts',
    duration_weeks: 20,
    description: 'Understanding Laya, Solkattu rhythmic syllables, and accompaniment techniques for classical concerts.',
    syllabus_url: '/syllabus-mridangam.pdf'
  },
  {
    id: 6,
    title: 'Theoretical Natyasastra Workshop',
    slug: 'theoretical-natyasastra-workshop',
    category: 'Theory & Shastras',
    duration_weeks: 8,
    description: 'Deep dive into ancient Sanskrit treatises covering Karana postures, Rasa theory, and historical dance lineages.',
    syllabus_url: '/syllabus-theory.pdf'
  }
];

export default function CoursesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Classical Dance', 'Carnatic Vocal', 'Instrumental Arts', 'Theory & Shastras'];

  const filteredCourses = MOCK_COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      
      {/* Controls Bar: Search & Category Tabs */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 glass-card p-4 md:p-6 rounded-3xl">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search courses or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input pl-11 py-2.5 text-sm"
          />
        </div>

        {/* Category Selector Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-emerald-900 text-white dark:bg-amber-400 dark:text-slate-950 shadow-md'
                  : 'glass-button'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Course Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-2xl group border-t-4 border-t-emerald-800 dark:border-t-amber-400"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-emerald-900/10 text-emerald-900 dark:bg-amber-400/15 dark:text-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {course.category}
                  </span>
                  <span className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 mr-1 text-emerald-700 dark:text-amber-400" />
                    {course.duration_weeks} Weeks
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-amber-300 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {course.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-900 dark:text-amber-400 flex items-center space-x-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Curriculum Guide</span>
                </span>

                <Link
                  to={`/courses/${course.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white hover:text-emerald-800 dark:hover:text-amber-300 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-card rounded-3xl space-y-3">
          <Sparkles className="w-8 h-8 text-slate-400 mx-auto animate-bounce" />
          <h3 className="font-display font-bold text-lg text-slate-800 dark:text-slate-200">
            No programs found matching your filter
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Try resetting your search term or selecting "All" categories.
          </p>
        </div>
      )}

    </div>
  );
}
