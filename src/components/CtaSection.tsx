import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    // Updated Background Color
    <section className="bg-[#131508] py-20 lg:py-32 relative overflow-hidden border-t border-[#FCFFFC]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          // Updated Card Color to #B1DC40
          className="bg-[#B1DC40] rounded-[2.5rem] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-20 overflow-hidden relative group"
        >
          {/* Content Container */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20 w-full z-10">
            
            {/* Left: Heading - Updated Text Color to Dark #131508 */}
            <div className="flex-shrink-0">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#131508] tracking-tighter leading-[1.1] mb-2">
                Let’s Discuss <br />
                With Our Team
              </h2>
            </div>

            {/* Middle: Divider & Text */}
            <div className="flex flex-col md:flex-row lg:items-center gap-6 lg:border-l lg:border-[#131508]/10 lg:pl-10">
               <div className="max-w-xs">
                  <h3 className="font-bold text-[#131508] text-lg mb-2">Giving You The Best</h3>
                  <p className="text-[#131508]/70 font-medium leading-relaxed">
                    Giving You The Best Price And Coverage For Your Property Needs.
                  </p>
               </div>
            </div>

          </div>

          {/* Right: Big Action Button */}
          <div className="flex-shrink-0 self-end lg:self-center z-10">
             <button 
                onClick={() => navigate('/contact')}
                // Updated Button Colors
                className="group/btn relative w-24 h-24 md:w-32 md:h-32 rounded-[2rem] border-2 border-[#131508] flex items-center justify-center overflow-hidden transition-all duration-500 hover:bg-[#131508]"
             >
                <ArrowUpRight 
                    className="w-10 h-10 md:w-14 md:h-14 text-[#131508] transition-all duration-500 group-hover/btn:text-[#B1DC40] group-hover/btn:scale-110 group-hover/btn:rotate-45" 
                    strokeWidth={1.5} 
                />
             </button>
          </div>

          {/* Hover Effect */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/20 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;