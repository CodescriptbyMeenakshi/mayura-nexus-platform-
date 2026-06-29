import React, { useState } from 'react';
import { Megaphone, X } from 'lucide-react';

const MOCK_NOTICES = [
  { id: 1, title: 'Admissions Open for Academic Year 2026-27! Register today.', isUrgent: true },
  { id: 2, title: 'Mayura Academy Heritage Festival is scheduled for August 15th.', isUrgent: false },
  { id: 3, title: 'Special Classical Dance Workshop by Guest Artists starting next week.', isUrgent: false }
];

export default function NoticeTicker() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="ticker-wrap group select-none">
      <div className="flex items-center px-4 bg-primary-dark text-accent border-r border-primary-light/40 font-semibold z-10 space-x-1 shrink-0 h-full">
        <Megaphone className="w-4 h-4 animate-bounce" />
        <span className="text-xs uppercase tracking-wider font-display">Updates</span>
      </div>
      
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        <div className="flex whitespace-nowrap animate-ticker hover:[animation-play-state:paused] space-x-16">
          {MOCK_NOTICES.map((notice) => (
            <span key={notice.id} className="inline-flex items-center text-xs md:text-sm font-medium">
              {notice.isUrgent && (
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-ping" />
              )}
              {notice.title}
            </span>
          ))}
          {/* Duplicate list to ensure seamless infinite looping */}
          {MOCK_NOTICES.map((notice) => (
            <span key={`dup-${notice.id}`} className="inline-flex items-center text-xs md:text-sm font-medium">
              {notice.isUrgent && (
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-ping" />
              )}
              {notice.title}
            </span>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setIsVisible(false)} 
        className="p-1 hover:bg-primary-dark/50 text-accent-light hover:text-white transition-colors mr-2 z-10 rounded"
        title="Close announcements"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
