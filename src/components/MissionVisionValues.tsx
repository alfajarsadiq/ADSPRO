import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import SlideText from './SlideText';

const MissionVisionValues = () => {
  return (
    // Updated: Section Background to Off-White #FCFFFC
    <section className="py-24 bg-[#FCFFFC] relative font-archivo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Updated Heading Color to Dark #131508 */}
          <div className="flex justify-center mb-4">
            <SlideText className="text-3xl md:text-4xl font-bold text-[#131508]">
              Our Core Pillars
            </SlideText>
          </div>

          <p className="text-xl text-[#131508]/60 max-w-3xl mx-auto">
            Different perspectives, one unified goal: <span className="text-[#131508] font-bold">Your Success.</span>
          </p>
        </motion.div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Mission (Dark Card / Lime Accent) */}
          <motion.div 
            className="group bg-[#131508] rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-[#131508]/5 hover:-translate-y-2 transition-all duration-300" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Icon: Lime BG with Dark Icon */}
            <div className="w-14 h-14 bg-[#B1DC40] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B1DC40]/20 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-7 w-7 text-[#131508]" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#FCFFFC] mb-4">The Mission</h3>
            <p className="text-[#FCFFFC]/60 leading-relaxed font-light">
              To empower businesses with high-impact <span className="text-[#B1DC40] font-medium">graphic design</span>, precision <span className="text-[#B1DC40] font-medium">printing</span>, and robust <span className="text-[#B1DC40] font-medium">web solutions</span> that drive visibility and revenue.
            </p>
          </motion.div>
          
          {/* Card 2: Vision (Dark Card / Lime Accent) */}
          <motion.div 
            className="group bg-[#131508] rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-[#131508]/5 hover:-translate-y-2 transition-all duration-300" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-[#B1DC40] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B1DC40]/20 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-7 w-7 text-[#131508]" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#FCFFFC] mb-4">The Vision</h3>
            <p className="text-[#FCFFFC]/60 leading-relaxed font-light">
              To be the most trusted creative partner for brands worldwide, known for bridging the gap between <span className="text-[#B1DC40] font-medium">digital innovation</span> and <span className="text-[#B1DC40] font-medium">physical branding</span>.
            </p>
          </motion.div>

          {/* Card 3: Values (Dark Card / Lime Accent) */}
          <motion.div 
            className="group bg-[#131508] rounded-[2rem] p-8 lg:p-10 shadow-xl shadow-[#131508]/5 hover:-translate-y-2 transition-all duration-300" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-14 h-14 bg-[#B1DC40] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B1DC40]/20 group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-7 w-7 text-[#131508]" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#FCFFFC] mb-4">Our Values</h3>
            <p className="text-[#FCFFFC]/60 leading-relaxed font-light">
              We believe in <span className="text-[#B1DC40] font-medium">creative excellence</span>, obsessive attention to detail, and a commitment to delivering deadlines without compromise.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;