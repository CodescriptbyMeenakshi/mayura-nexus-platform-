import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUsView from '../components/AboutUsView';
import HeritageTimeline from '../components/HeritageTimeline';
import GalleryGrid from '../components/GalleryGrid';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function Home() {
  return (
    <div className="pt-16 min-h-screen flex flex-col justify-between">
      {/* 1. Hero Section (FR-01) */}
      <HeroSection />

      {/* 2. About Us & Values Section (FR-02) */}
      <AboutUsView />

      {/* 3. Heritage Timeline (FR-02) */}
      <HeritageTimeline />

      {/* 4. Visual Media Gallery (FR-05) */}
      <GalleryGrid />

      {/* 5. Student & Parent Testimonials (FR-06) */}
      <TestimonialCarousel />
    </div>
  );
}
