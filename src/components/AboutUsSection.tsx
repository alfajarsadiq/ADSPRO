import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SlideText from './SlideText'; 

// --- Placeholder image ---
import aboutSectionImage from '../assets/hold.webp';

const AboutUsSection = ({ brandColors }: { brandColors: { gold: string } }) => {
  return (
    // SECTION WRAPPER: Reduced vertical padding on mobile
    <section className="bg-[#131508] py-12 md:py-20 lg:py-32 px-4 md:px-6 relative overflow-hidden border-t border-[#FCFFFC]/5">
      
      {/* SHADE ANIMATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#B1DC40]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        
        {/* INNER CONTAINER: Reduced padding on mobile (p-6 vs p-16) */}
        <div className="bg-[#131508] border border-white/10 rounded-[2rem] lg:rounded-[2.5rem] p-6 md:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden">
           
           {/* Decorative background pattern */}
           <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
            
            {/* --- Left Column: Image & Stats --- */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#B1DC40]"></span>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#B1DC40]">About Us</p>
              </div>
              
              {/* Image Container: Reduced height on mobile (h-52) */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#B1DC40]/5 mb-6 md:mb-8 border border-white/10 group">
                <img 
                  src={aboutSectionImage} 
                  alt="Team working together" 
                  className="w-full h-52 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* Stats Grid: Changed to grid-cols-3 on mobile to prevent huge stacking */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 text-center">
                
                {/* Stat Card 1 */}
                <div className="p-3 md:p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-[#B1DC40]/30 transition-colors">
                  <Award className="w-5 h-5 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-[#B1DC40]" />
                  <p className="text-xl md:text-3xl font-bold text-white mb-1">15+</p>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Experience</p>
                </div>
                
                {/* Stat Card 2 */}
                <div className="p-3 md:p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-[#B1DC40]/30 transition-colors">
                  <Globe className="w-5 h-5 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-[#B1DC40]" />
                  <p className="text-xl md:text-3xl font-bold text-white mb-1">7+</p>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Countries</p>
                </div>
                
                {/* Stat Card 3 */}
                <div className="p-3 md:p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-[#B1DC40]/30 transition-colors">
                  <Users className="w-5 h-5 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-[#B1DC40]" />
                  <p className="text-xl md:text-3xl font-bold text-white mb-1">25+</p>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Experts</p>
                </div>

              </div>
            </motion.div>

            {/* --- Right Column: Text Content --- */}
            <div className="flex flex-col justify-center">
              
              {/* Headline: Adjusted text size for mobile */}
              <SlideText className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter">
                Dedicated experts passionate about{' '}
                <span className="text-[#B1DC40]">
                  your brand's growth.
                </span>
              </SlideText>

              {/* Description */}
              <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-400 leading-relaxed max-w-lg">
                With a shared commitment to excellence, we help businesses build their identity through creative design, precision printing, and robust web solutions designed for lasting impact and partnership.
              </p>
              
              {/* Button */}
              <Link to="/about" className="inline-block mt-8 md:mt-10">
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }} 
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-[#B1DC40] rounded-full overflow-hidden w-full md:w-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative flex items-center justify-center gap-2 font-bold text-[#131508] text-base md:text-lg">
                    Our Story
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;