import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';
import StatsCardSection from '../components/StatsCardSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutUsSection from '../components/AboutUsSection';
import HeroCarousel from '../components/HeroCarousel'; // This now holds the full section
import HomeCTA from '../components/HomeCTA';

// ASSETS
import heroVideo from '../assets/intro.webm';

const Home = () => {
  const brandColors = { gold: '#3B82F6', white: '#ffffff', black: '#0F172A' };

  return (
    <div className="bg-white font-archivo">
      <Navbar />

      {/* --- SECTION 1: PURE HERO VIDEO --- */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>


      {/* --- SECTION 2: HERO CONTENT (Replaced with Single Component) --- */}
      {/* The entire section code has been removed from here because it is now inside HeroCarousel */}
      <HeroCarousel />


      {/* --- SERVICES SECTION --- */}
      <FeaturedProducts />

      <AboutUsSection brandColors={brandColors} />

      <StatsCardSection />

      <TestimonialsSection />

      {/* --- CALL TO ACTION SECTION --- */}
      <HomeCTA />

      <ContactSection/>
    </div>
  );
};

export default Home;