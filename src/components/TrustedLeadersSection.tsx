import React from 'react';
import { Users, Globe, Shield, ArrowRight } from 'lucide-react';
import SlideText from './SlideText'; // Imported SlideText component

const TrustedLeadersSection = () => {
  return (
    <section className="relative w-full bg-[#131508] py-24 overflow-hidden font-archivo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B1DC40]/10 text-[#B1DC40] text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Our Workflow</span>
            </div>
            
            {/* Heading with SlideText Animation */}
            <SlideText className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCFFFC] leading-tight mb-6">
              Trusted by <br/>
              <span className="text-[#B1DC40]">
                Growing Brands
              </span>
            </SlideText>
            
            {/* Description */}
            <p className="text-lg text-[#FCFFFC]/60 mb-8 max-w-lg leading-relaxed">
              Our creative expertise, reliable production, and smart digital solutions help supermarkets, restaurants, and businesses scale with confidence. From design to automation, we empower brands with results they can trust.
            </p>

            {/* Button */}
            <button className="group flex items-center gap-2 bg-[#B1DC40] hover:bg-[#a3cc35] text-[#131508] px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#B1DC40]/20 hover:shadow-[#B1DC40]/40 transform hover:-translate-y-1">
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Orbit Visual */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B1DC40] rounded-full blur-3xl opacity-10 -z-10"></div>

            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              
              {/* Outer Orbit Ring */}
              <div className="absolute inset-0 border border-[#FCFFFC]/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
              
              {/* Middle Orbit Ring */}
              <div className="absolute inset-12 border border-[#FCFFFC]/20 rounded-full"></div>
              
              {/* Floating Orbiting Icons */}
              {/* Icon 1 - Top Right */}
              <div className="absolute top-10 right-10 bg-[#1C1E14] border border-[#FCFFFC]/10 p-3 rounded-2xl shadow-xl animate-bounce delay-700">
                <Globe className="w-6 h-6 text-[#B1DC40]" />
              </div>

              {/* Icon 2 - Bottom Left */}
              <div className="absolute bottom-16 left-4 bg-[#1C1E14] border border-[#FCFFFC]/10 p-3 rounded-2xl shadow-xl animate-bounce delay-1000">
                <Shield className="w-6 h-6 text-[#FCFFFC]" />
              </div>

              {/* Icon 3 - Right */}
              <div className="absolute top-1/2 -right-4 bg-[#1C1E14] border border-[#FCFFFC]/10 p-2 rounded-xl shadow-lg animate-pulse">
                <div className="w-2 h-2 bg-[#B1DC40] rounded-full"></div>
              </div>

              {/* Central Hub */}
              <div className="relative z-10 w-32 h-32 bg-[#B1DC40] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#B1DC40]/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Users className="w-12 h-12 text-[#131508]" />
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedLeadersSection;