import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Sparkles, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check local storage or default to light
    return localStorage.getItem('mayura_theme') || 'light';
  });

  const navigate = useNavigate();

  // Handle scroll to change nav style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync theme changes with body class
  useEffect(() => {
    const bodyClass = document.body.classList;
    if (theme === 'dark') {
      bodyClass.add('dark');
    } else {
      bodyClass.remove('dark');
    }
    localStorage.setItem('mayura_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Enquiries', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'shadow-lg bg-brand-cream/95 dark:bg-brand-darkBg/95 backdrop-blur-md border-b border-primary/5 dark:border-brand-darkBorder/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-accent group-hover:scale-105 transition-transform shadow-md">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-display font-bold text-lg md:text-xl tracking-tight text-primary dark:text-accent block">
                MAYURA
              </span>
              <span className="text-[10px] tracking-[0.25em] font-medium text-slate-500 dark:text-slate-400 block -mt-1 uppercase">
                Academy of Arts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-primary dark:text-accent font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-accent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-accent rounded-full animate-pulse" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Utility Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors shadow-inner"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Portal Link */}
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-light dark:text-primary-dark rounded-xl shadow-md transition-all hover:shadow-lg active:scale-95 space-x-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </Link>
          </div>

          {/* Mobile Menu Action button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide Drawer */}
      {isOpen && (
        <div className="md:hidden animate-in fade-in duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-brand-cream dark:bg-brand-darkBg border-b border-slate-150 dark:border-brand-darkBorder shadow-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/5 text-primary dark:text-accent font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-150 dark:border-brand-darkBorder px-3 flex flex-col space-y-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 bg-primary hover:bg-primary-light dark:bg-accent dark:hover:bg-accent-light text-white dark:text-primary-dark rounded-xl font-semibold transition-colors space-x-2 text-sm shadow-md"
              >
                <LogIn className="w-4 h-4" />
                <span>Admin Portal</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
