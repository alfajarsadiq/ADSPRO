import React from 'react';
import { ArrowUpRight, ArrowRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SlideText from './SlideText';

const HeroCarousel = () => {
  return (
    <section className="bg-[#F4F4F4] min-h-screen py-16 px-4 sm:px-8 lg:px-12 font-sans text-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- 1. HEADER SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div className="max-w-4xl">
            <SlideText className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter text-black mb-4">
              Your Brand, Our Craft
            </SlideText>
            <p className="text-gray-500 text-lg md:text-xl font-light tracking-wide">
              Delivering innovative design, digital solutions, and printing excellence for businesses that want to stand out.
            </p>
          </div>
          
          <Link to="/about">
            <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-black transition-colors duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* --- 2. HERO IMAGE SECTION --- */}
        <div className="relative w-full h-[500px] md:h-[600px] rounded-[40px] overflow-hidden mb-6 group">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Floating Glass Content Bar */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[30px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3">
              <span className="inline-block bg-white/20 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                Our Work
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Leading in Creative & Digital Solutions
              </h2>
              <p className="text-gray-300 text-sm md:text-base max-w-xl">
                Our expertise includes branding, website development, flyer & package design, automation systems, and premium printing. Everything you need to take your brand to the next level all in one place.
              </p>
            </div>
            
            <button className="bg-white text-black p-4 rounded-full hover:bg-gray-200 transition-colors duration-300 flex-shrink-0">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* --- 3. STATS GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Stat Card 1: Total Units */}
          <div className="bg-[#EAEAEA] rounded-[30px] p-8 h-48 md:h-56 relative flex flex-col justify-between group cursor-pointer hover:bg-[#E0E0E0] transition-colors">
            <div>
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-2">300+</h3>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Brands Served</p>
            </div>
            <div className="absolute bottom-6 right-6 bg-[#1A1A1A] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
               <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Stat Card 2: M2 Built */}
          <div className="bg-[#EAEAEA] rounded-[30px] p-8 h-48 md:h-56 relative flex flex-col justify-between group cursor-pointer hover:bg-[#E0E0E0] transition-colors">
            <div className="absolute top-8 right-8">
              <span className="border border-gray-400 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                Reliable
              </span>
            </div>
            <div className="mt-auto">
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-2">5000+</h3>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Creative Projects Completed</p>
            </div>
          </div>

          {/* Stat Card 3: Portfolio Value (Dark) */}
          <div className="bg-[#1A1A1A] rounded-[30px] p-8 h-48 md:h-56 flex flex-col justify-center relative overflow-hidden group">
            {/* Subtle background accent */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
            
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">1M</h3>
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Print Outputs Delivered</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroCarousel;