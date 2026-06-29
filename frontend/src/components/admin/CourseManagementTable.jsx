import React, { useState } from 'react';
import { Plus, Edit3, Trash2, BookOpen, Clock } from 'lucide-react';
import { MOCK_COURSES } from '../CoursesGrid';
import CourseModalForm from './CourseModalForm';

export default function CourseManagementTable() {
  const [courses, setCourses] = useState(MOCK_COURSES);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateNew = () => {
    setSelectedCourse(null);
    setIsModalOpen(true);
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this course program?')) {
      setCourses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const handleSaveCourse = (savedData) => {
    if (savedData.id) {
      setCourses((prev) => prev.map((c) => (c.id === savedData.id ? savedData : c)));
    } else {
      const newCourse = { ...savedData, id: Date.now() };
      setCourses((prev) => [newCourse, ...prev]);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Table Top Header Action */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-emerald-800 dark:text-amber-400" />
            <span>Course Catalog Management ({courses.length})</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Create, edit, or archive public curriculum offerings.
          </p>
        </div>

        <button
          onClick={handleCreateNew}
          className="px-4 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 font-semibold rounded-xl text-xs flex items-center space-x-2 shadow"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Program</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="glass-card rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-100/80 dark:bg-slate-800/80 uppercase text-[11px] font-bold tracking-wider text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4">Program Title</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">
                      {course.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-xs">
                      {course.description}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-emerald-900/10 text-emerald-900 dark:bg-amber-400/15 dark:text-amber-300 rounded-full font-semibold">
                      {course.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center text-slate-600 dark:text-slate-300">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {course.duration_weeks} Weeks
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(course)}
                      className="p-2 text-slate-600 hover:text-emerald-800 dark:text-slate-400 dark:hover:text-amber-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Edit Course"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="p-2 text-slate-600 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Delete Course"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      <CourseModalForm
        isOpen={isModalOpen}
        course={selectedCourse}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCourse}
      />

    </div>
  );
}
