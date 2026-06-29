import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-primary-dark">
                <Sparkles className="w-4 h-4 fill-current" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-accent">
                MAYURA ACADEMY
              </span>
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Nurturing classical art heritage, creativity, and spiritual depth for over twenty-five years.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-slate-350">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-accent transition-colors">Course Catalog</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors">Media Gallery</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Office Hours
            </h3>
            <ul className="space-y-2 text-sm text-slate-350">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>12, Heritage Lane, Cultural District, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@mayuraacademy.org</span>
              </li>
            </ul>
          </div>

          {/* Location / Schedule */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Classes & Sessions
            </h3>
            <p className="text-sm text-slate-300">
              Monday – Friday: 4:00 PM – 8:00 PM
            </p>
            <p className="text-sm text-slate-300">
              Saturday – Sunday: 9:00 AM – 1:00 PM
            </p>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 pt-8 border-t border-slate-750 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <p>© {currentYear} Mayura Academy of Classical Arts. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>for Classical Dance & Music.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
