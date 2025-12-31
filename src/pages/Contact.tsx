import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Video Asset ---
import contactVideo from '../assets/aboutp.webm'; 

// --- Import Components ---
import ContactForm from '../components/ContactForm'; 
// import GlobalPresenceSection from '../components/GlobalPresenceSection'; 
import Commitment from '../components/Commitment';

const Contact = () => {
  return (
    <div className="bg-[#131508] font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden bg-[#131508]">
        {/* Background Video */}
        <video 
          src={contactVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#131508]/80 via-[#131508]/40 to-[#131508] pointer-events-none" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-6"
            >
                 <span className="px-4 py-1.5 rounded-full border border-[#B1DC40]/30 bg-[#B1DC40]/10 text-sm uppercase tracking-[3px] text-[#B1DC40] shadow-none">
                    Get In Touch
                 </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-[#FCFFFC] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Let's Start a <span className="text-[#B1DC40]">Conversation</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-2xl text-[#FCFFFC]/80 font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Whether you need design, branding, printing, or digital systems our team is ready to bring your ideas to life. Let’s create something impactful together.
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#FCFFFC]/60 flex flex-col items-center gap-2 z-30"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <section>
         <ContactForm />
      </section>

      {/* --- OUR GLOBAL PRESENCE SECTION (Commented out for future update) --- */}
      {/* <GlobalPresenceSection /> */}

      {/* --- RESPONSE TIME COMMITMENT --- */}
      <Commitment />
      
    </div>
  );
};

export default Contact;