import React from 'react';
import { motion } from 'framer-motion';
import SlideText from '../components/SlideText';
import { Mail, Phone, MapPin, ArrowRight, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    // SECTION WRAPPER: Reduced padding on mobile (py-12 px-4) vs Desktop (py-24 px-8)
    <section className="bg-[#131508] text-[#FCFFFC] py-12 md:py-24 px-4 md:px-6 lg:px-8 font-archivo overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Container: Reduced internal padding on mobile (p-5) to give content more room */}
        <div className="rounded-[2rem] md:rounded-[2.5rem] border border-[#FCFFFC]/10 bg-[#131508] p-5 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Background Glow Effects */}
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#B1DC40]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-[#B1DC40]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          {/* --- TOP SECTION: INFO & FORM --- */}
          {/* Reduced gap and margin-bottom on mobile */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 relative z-10 mb-12 md:mb-20">
            
            {/* Left Column: Contact Info */}
            <div className="flex flex-col justify-center">
              
              {/* Animated Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 self-start border border-[#B1DC40]/30 bg-[#B1DC40]/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8"
              >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#B1DC40] animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#B1DC40] uppercase">Get In Touch</span>
              </motion.div>

              {/* Headline: Text-3xl on mobile prevents awkward breaks */}
              <SlideText 
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
              >
                Let's Discuss Your <br />
                <span className="text-[#B1DC40]">Next Project</span>
              </SlideText>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#FCFFFC]/60 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-md"
              >
                Whether you're looking for a complete rebrand, a high-performance website, or bulk printing solutions, our experts are here to help.
              </motion.p>

              {/* Contact Details List: Reduced spacing (gap-6 -> gap-5) */}
              <div className="space-y-6 md:space-y-8">
                {/* Email */}
                <motion.a 
                  href="mailto:info@adspro.ae"
                  className="flex items-center gap-4 md:gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Smaller Icon Container on Mobile (w-12 vs w-14) */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/5 flex items-center justify-center group-hover:border-[#B1DC40]/50 group-hover:bg-[#B1DC40]/10 transition-all duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#B1DC40]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#FCFFFC]/40 font-medium mb-0.5">Email us at</p>
                    <p className="text-base md:text-lg font-medium group-hover:text-[#B1DC40] transition-colors">info@adsprodxb.com</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a 
                  href="tel:+971585639040"
                  className="flex items-center gap-4 md:gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/5 flex items-center justify-center group-hover:border-[#B1DC40]/50 group-hover:bg-[#B1DC40]/10 transition-all duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#B1DC40]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#FCFFFC]/40 font-medium mb-0.5">Call us on</p>
                    <p className="text-base md:text-lg font-medium group-hover:text-[#B1DC40] transition-colors">+971 50 928 5454</p>
                  </div>
                </motion.a>

                {/* Location Text */}
                <motion.div 
                  className="flex items-center gap-4 md:gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#B1DC40]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#FCFFFC]/40 font-medium mb-0.5">Visit us</p>
                    <p className="text-base md:text-lg font-medium leading-snug">AdsPro Headquarters, Dubai, UAE</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1C1E14]/50 border border-[#FCFFFC]/5 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 lg:p-10 backdrop-blur-sm h-fit"
            >
              {/* Reduced space-y for mobile */}
              <form className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-[#FCFFFC]/70 ml-2">Full Name</label>
                  <input 
                    type="text"
                    placeholder="John Doe"
                    // Reduced padding (px-4 py-3) on mobile
                    className="w-full bg-[#131508] border border-[#FCFFFC]/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-[#FCFFFC] placeholder-[#FCFFFC]/20 focus:outline-none focus:border-[#B1DC40]/50 focus:ring-1 focus:ring-[#B1DC40]/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-[#FCFFFC]/70 ml-2">Business Email</label>
                  <input 
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-[#131508] border border-[#FCFFFC]/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-[#FCFFFC] placeholder-[#FCFFFC]/20 focus:outline-none focus:border-[#B1DC40]/50 focus:ring-1 focus:ring-[#B1DC40]/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-[#FCFFFC]/70 ml-2">Project Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-[#131508] border border-[#FCFFFC]/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-[#FCFFFC] placeholder-[#FCFFFC]/20 focus:outline-none focus:border-[#B1DC40]/50 focus:ring-1 focus:ring-[#B1DC40]/50 transition-all duration-300 resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="group w-full bg-[#B1DC40] text-[#131508] font-bold text-base md:text-lg py-3 md:py-4 rounded-full hover:bg-[#a3cc35] transition-all duration-300 flex items-center justify-center gap-3 mt-2 md:mt-4"
                >
                  <span>Send Inquiry</span>
                  <div className="bg-[#131508]/10 p-1 rounded-full group-hover:rotate-[-45deg] transition-transform duration-300">
                    <ArrowRight size={16} className="text-[#131508] md:w-[18px] md:h-[18px]" />
                  </div>
                </button>
              </form>
            </motion.div>
          </div>

          {/* --- BOTTOM SECTION: MAP --- */}
          <div className="relative z-10 pt-8 md:pt-10 border-t border-[#FCFFFC]/10">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#B1DC40]/10 flex items-center justify-center text-[#B1DC40]">
                  <Globe size={18} className="md:w-[20px] md:h-[20px]" />
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-[#FCFFFC]">Locate Us</h3>
            </div>
            
            {/* Map Container: Reduced height on mobile (h-[300px]) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-full h-[300px] lg:h-[450px] rounded-3xl overflow-hidden border border-[#FCFFFC]/10 relative bg-[#1C1E14]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25403.850995232093!2d55.383449753985644!3d25.28244149249559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5de7d4a9d9ef%3A0x1d1d16ba4897049e!2sFERRARI%20FOODS%20LLC%20DUBAI%20BRANCH!5e1!3m2!1sen!2sae!4v1766820273747!5m2!1sen!2sae"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="AdsPro Location"
              />
              <div className="absolute inset-0 bg-[#131508] mix-blend-color pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;