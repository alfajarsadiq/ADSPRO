import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SlideText from '../components/SlideText';
import { ArrowUpRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    // REDUCED OUTER PADDING: Changed py-20 lg:py-32 to py-12 lg:py-16
    <section className="bg-[#131508] py-12 lg:py-16 relative overflow-hidden border-t border-[#FCFFFC]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          // REDUCED INNER PADDING & GAPS: Greatly reduced p-* and gap-* values for a more compact height
          className="bg-[#B1DC40] rounded-[2.5rem] p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 overflow-hidden relative group"
        >
          
          {/* Left Side: Headline */}
          <div className="flex-1 w-full lg:w-auto relative z-10">
            {/* REDUCED FONT SIZE: Changed lg:text-7xl to lg:text-6xl for better horizontal fit */}
            <SlideText className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#131508] tracking-tighter leading-[1.1]">
              Let’s Build Something <br />
              {/* Reduced mt-2 to mt-1 */}
              <span className="text-white bg-[#131508] px-2 leading-[1.3] inline-block transform -rotate-1 mt-1">Extraordinary</span> <br />
              Together
            </SlideText>
          </div>

          {/* Right Side: Description Text & Link */}
          <div className="flex-1 w-full lg:w-auto flex flex-col justify-center lg:pl-8 lg:border-l lg:border-[#131508]/10">
             <div className="max-w-lg">
               {/* Reduced text sizes and margins */}
               <h3 className="font-bold text-[#131508] text-xl mb-3">Creative Partnership</h3>
               <p className="text-[#131508]/80 font-medium leading-relaxed text-base md:text-lg mb-6">
                 Whether you need high-impact flyers, eye-catching packaging, a modern website, or a complete brand revamp, we are your partner for powerful design.
               </p>
               
               {/* UPDATED LINK: Changed to /services and updated text */}
               <Link 
                 to="/services" 
                 className="inline-flex items-center gap-2 text-[#131508] font-bold text-lg hover:opacity-70 transition-opacity group/link"
               >
                  <span className="border-b-2 border-[#131508]">View Our Services</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
               </Link>
             </div>
          </div>

          {/* Hover Effect Background - Sized down slightly */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/20 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;