import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SlideText from '../components/SlideText';
import { Mail, Phone, MapPin, ArrowRight, Globe, Loader2 } from 'lucide-react';

const ContactSection = () => {
  // --- STATE FOR FORM DATA ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });

  // --- STATE FOR FEEDBACK ---
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', projectDetails: '' });
        // Reset button after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="bg-[#131508] text-[#FCFFFC] py-12 md:py-24 px-4 md:px-6 lg:px-8 font-archivo overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="rounded-[2rem] md:rounded-[2.5rem] border border-[#FCFFFC]/10 bg-[#131508] p-5 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#B1DC40]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-[#B1DC40]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 relative z-10 mb-12 md:mb-20">
            
            <div className="flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 self-start border border-[#B1DC40]/30 bg-[#B1DC40]/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8"
              >
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#B1DC40] animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#B1DC40] uppercase">Get In Touch</span>
              </motion.div>

              <SlideText className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
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

              <div className="space-y-6 md:space-y-8">
                <motion.a 
                  href="mailto:info@adsprodxb.com"
                  className="flex items-center gap-4 md:gap-6 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/5 flex items-center justify-center group-hover:border-[#B1DC40]/50 group-hover:bg-[#B1DC40]/10 transition-all duration-300">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#B1DC40]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#FCFFFC]/40 font-medium mb-0.5">Email us at</p>
                    <p className="text-base md:text-lg font-medium group-hover:text-[#B1DC40] transition-colors">info@adsprodxb.com</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="tel:+971509285454"
                  className="flex items-center gap-4 md:gap-6 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/5 flex items-center justify-center group-hover:border-[#B1DC40]/50 group-hover:bg-[#B1DC40]/10 transition-all duration-300">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#B1DC40]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#FCFFFC]/40 font-medium mb-0.5">Call us on</p>
                    <p className="text-base md:text-lg font-medium group-hover:text-[#B1DC40] transition-colors">+971 50 928 5454</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#B1DC40]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-[#FCFFFC]/40 font-medium mb-0.5">Visit us</p>
                    <p className="text-base md:text-lg font-medium leading-snug">AdsPro Headquarters, Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1C1E14]/50 border border-[#FCFFFC]/5 rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 lg:p-10 backdrop-blur-sm h-fit"
            >
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-[#FCFFFC]/70 ml-2">Full Name</label>
                  <input 
                    required
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#131508] border border-[#FCFFFC]/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-[#FCFFFC] placeholder-[#FCFFFC]/20 focus:outline-none focus:border-[#B1DC40]/50 focus:ring-1 focus:ring-[#B1DC40]/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-[#FCFFFC]/70 ml-2">Business Email</label>
                  <input 
                    required
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#131508] border border-[#FCFFFC]/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-[#FCFFFC] placeholder-[#FCFFFC]/20 focus:outline-none focus:border-[#B1DC40]/50 focus:ring-1 focus:ring-[#B1DC40]/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-medium text-[#FCFFFC]/70 ml-2">Project Details</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                    className="w-full bg-[#131508] border border-[#FCFFFC]/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-[#FCFFFC] placeholder-[#FCFFFC]/20 focus:outline-none focus:border-[#B1DC40]/50 focus:ring-1 focus:ring-[#B1DC40]/50 transition-all duration-300 resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className={`group w-full font-bold text-base md:text-lg py-3 md:py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 mt-2 md:mt-4 ${
                    status === 'success' ? 'bg-green-500 text-white' : 
                    status === 'error' ? 'bg-red-500 text-white' : 
                    'bg-[#B1DC40] text-[#131508] hover:bg-[#a3cc35]'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      <span>Send Inquiry</span>
                      <div className="bg-[#131508]/10 p-1 rounded-full group-hover:rotate-[-45deg] transition-transform duration-300">
                        <ArrowRight size={16} className="text-[#131508]" />
                      </div>
                    </>
                  )}
                  {status === 'sending' && <Loader2 className="animate-spin w-6 h-6" />}
                  {status === 'success' && <span>Message Sent!</span>}
                  {status === 'error' && <span>Failed to Send</span>}
                </button>
              </form>
            </motion.div>
          </div>

          <div className="relative z-10 pt-8 md:pt-10 border-t border-[#FCFFFC]/10">
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#B1DC40]/10 flex items-center justify-center text-[#B1DC40]">
                  <Globe size={18} />
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-[#FCFFFC]">Locate Us</h3>
            </div>
            
            <motion.div className="w-full h-[300px] lg:h-[450px] rounded-3xl overflow-hidden border border-[#FCFFFC]/10 relative bg-[#1C1E14]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.178653249129!2d55.274158!3d25.197197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4334adcc6837%3A0x2a98f12270914109!2sAdsPro!5e0!3m2!1sen!2sae!4v1715849000000!5m2!1sen!2sae"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
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
