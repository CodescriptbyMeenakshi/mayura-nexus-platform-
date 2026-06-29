import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { buildDynamicWhatsAppLink } from '../utils/whatsapp';

export default function EnquirySubmissionForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    course_interested: 'Bharatanatyam Foundation Program',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required';
    } else if (formData.phone_number.trim().length < 8) {
      newErrors.phone_number = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);

    // Build automated WhatsApp pre-filled link
    const whatsappMsg = `Hello Mayura Academy! My name is ${formData.full_name}. I am interested in enrolling for "${formData.course_interested}". Email: ${formData.email}. Message: ${formData.message || 'I would like to know more about upcoming batch timings.'}`;
    const whatsappUrl = buildDynamicWhatsAppLink('+919876543210', whatsappMsg);

    // Redirect to WhatsApp chat after 1.5s
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <div className="glass-card rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
      
      {submitted ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-900/10 dark:bg-amber-400/20 text-emerald-900 dark:text-amber-400 flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
            Enquiry Received!
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Thank you, <span className="font-semibold text-emerald-900 dark:text-amber-300">{formData.full_name}</span>. We are opening WhatsApp to connect you directly with our administration team...
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-700 dark:text-amber-400 animate-pulse">
              <MessageCircle className="w-4 h-4" />
              <span>Redirecting to WhatsApp Chat...</span>
            </span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Full Name *
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="e.g. Lakshmi Narayan"
              value={formData.full_name}
              onChange={handleChange}
              className={`form-input ${errors.full_name ? 'border-red-500 focus:border-red-500' : ''}`}
            />
            {errors.full_name && (
              <p className="text-xs text-red-500 flex items-center mt-1">
                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                {errors.full_name}
              </p>
            )}
          </div>

          {/* Contact Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="lakshmi@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone_number"
                placeholder="+91 98765 43210"
                value={formData.phone_number}
                onChange={handleChange}
                className={`form-input ${errors.phone_number ? 'border-red-500 focus:border-red-500' : ''}`}
              />
              {errors.phone_number && (
                <p className="text-xs text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.phone_number}
                </p>
              )}
            </div>
          </div>

          {/* Program Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Program of Interest
            </label>
            <select
              name="course_interested"
              value={formData.course_interested}
              onChange={handleChange}
              className="form-input"
            >
              <option value="Bharatanatyam Foundation Program">Bharatanatyam Foundation Program</option>
              <option value="Advanced Bharatanatyam Margam">Advanced Bharatanatyam Margam</option>
              <option value="Carnatic Vocal Primer">Carnatic Vocal Primer</option>
              <option value="Classical Veena Mastery">Classical Veena Mastery</option>
              <option value="Mridangam Rhythmic Percussion">Mridangam Rhythmic Percussion</option>
              <option value="General Admission Inquiry">General Admission Inquiry</option>
            </select>
          </div>

          {/* Additional Message */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Message or Specific Queries (Optional)
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Ask us about weekend batches, fees, or preliminary auditions..."
              value={formData.message}
              onChange={handleChange}
              className="form-input resize-none"
            />
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-slate-950 font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 text-base pt-3"
          >
            <Send className="w-5 h-5" />
            <span>Submit Enquiry & Connect on WhatsApp</span>
          </button>

        </form>
      )}

    </div>
  );
}
