import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

export default function CourseModalForm({ course, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Classical Dance',
    duration_weeks: 12,
    description: '',
    syllabus_url: ''
  });

  useEffect(() => {
    if (course) {
      setFormData(course);
    } else {
      setFormData({
        title: '',
        slug: '',
        category: 'Classical Dance',
        duration_weeks: 12,
        description: '',
        syllabus_url: ''
      });
    }
  }, [course, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === 'title' && !course) {
        next.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      }
      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-xl w-full space-y-6 shadow-2xl relative border-t-4 border-t-emerald-800 dark:border-t-amber-400">
        
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
            {course ? 'Edit Classical Course' : 'Create New Classical Course'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Course Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Classical Dance">Classical Dance</option>
                <option value="Carnatic Vocal">Carnatic Vocal</option>
                <option value="Instrumental Arts">Instrumental Arts</option>
                <option value="Theory & Shastras">Theory & Shastras</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Duration (Weeks)
              </label>
              <input
                type="number"
                name="duration_weeks"
                value={formData.duration_weeks}
                onChange={handleChange}
                className="form-input"
                min={1}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Description & Summary
            </label>
            <textarea
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className="form-input resize-none"
              required
            />
          </div>

          <div className="pt-2 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 glass-button rounded-xl text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 font-semibold rounded-xl text-xs flex items-center space-x-1.5 shadow"
            >
              <Save className="w-4 h-4" />
              <span>Save Course</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
