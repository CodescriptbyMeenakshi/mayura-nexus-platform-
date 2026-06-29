import React from 'react';
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import EnquirySubmissionForm from '../components/EnquirySubmissionForm';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 min-h-screen flex flex-col justify-between">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-12">
        
        {/* Header Banner */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-emerald-900/10 dark:bg-amber-400/15 flex items-center justify-center text-emerald-900 dark:text-amber-400 mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white">
            Admission Enquiries
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Connect with our administration desk for admissions, class schedules, or custom performances.
          </p>
        </div>

        {/* Content Grid: Form + Info Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Form (7 Cols) */}
          <div className="lg:col-span-7">
            <EnquirySubmissionForm />
          </div>

          {/* Contact Information & Map Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
                Academy Premises
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/10 dark:bg-amber-400/10 text-emerald-900 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Main Cultural Campus</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      108 Mayura Heritage Complex, Classical Arts Avenue, Heritage City, India 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/10 dark:bg-amber-400/10 text-emerald-900 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Phone & WhatsApp Desk</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      +91 98765 43210 / +91 80 2345 6789
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/10 dark:bg-amber-400/10 text-emerald-900 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Email Communications</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      admissions@mayuraacademy.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/10 dark:bg-amber-400/10 text-emerald-900 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Office Hours</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Tuesday – Sunday: 9:00 AM – 7:30 PM (Mondays Closed)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Banner */}
            <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-6 space-y-3 shadow-xl relative overflow-hidden">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
                <h4 className="font-display font-bold text-lg">Instant Chat Support</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prefer direct messaging? Reach out on WhatsApp for immediate class availability updates.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold shadow transition-colors"
              >
                Start WhatsApp Chat
              </a>
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}
