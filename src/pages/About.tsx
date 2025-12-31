import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
  Package, FlaskConical, Globe, ChevronDown,
  PenTool, Monitor, Printer 
} from 'lucide-react';

// Component Imports
import LeadershipSection from '../components/LeadershipSection';
import SlideText from '../components/SlideText';
import MissionVisionValues from '../components/MissionVisionValues';
import TrustedLeadersSection from '../components/TrustedLeadersSection';

// --- IMPORT ASSETS ---
import heroVideo from '../assets/aboutp.webm';
import factoryImage from '../assets/branding.webp';
import aboutImage from '../assets/aboutp.webp';
import sortingImage from '../assets/flayer.webp';
import packagingImage from '../assets/website.webp';
import qaImage from '../assets/printer.webp';

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const panelContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.2 }
  }
};

const panelItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15, 
    filter: "blur(5px)"
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

// --- UPDATED: New Content for Facilities/Hubs ---
const facilitiesData = [
  {
    id: 'design',
    image: sortingImage, // Ensure these image variables match your actual imports
    icon: PenTool,
    title: 'Creative Design Studio',
    description:
      'We craft high-impact designs—flyers, menus, packaging, branding, and digital creatives—built to elevate your identity across every platform.',
    stat: '500+',
    statLabel: 'Projects Designed',
  },
  {
    id: 'automation',
    image: packagingImage,
    icon: Monitor,
    title: 'Digital Development & Automation Lab',
    description:
      'Our team builds websites, admin panels, cloud systems, and automation tools that help businesses scale smarter and operate faster.',
    stat: '30+',
    statLabel: 'Digital Systems Built',
  },
  {
    id: 'printing',
    image: qaImage,
    icon: Printer,
    title: 'Printing & Production Hub',
    description:
      'From supermarket flyers to packaging materials, we deliver high-quality printing with precision, consistency, and fast turnaround times.',
    stat: '70+',
    statLabel: 'Supermarkets Served',
  },
  {
    id: 'marketing',
    image: factoryImage,
    icon: Globe,
    title: 'Marketing & Brand Growth Center',
    description:
      'We manage social media, content creation, ad campaigns, and brand strategy to help businesses stay visible, relevant, and competitive.',
    stat: '10x',
    statLabel: 'Brand Growth Impact',
  },
];

const About = () => {
  // Set default active panel to the first item
  const [activePanel, setActivePanel] = useState(facilitiesData[0].id);

  return (
    <div className="bg-[#131508] font-archivo text-[#FCFFFC] selection:bg-[#B1DC40] selection:text-[#131508]">
      
      {/* --- SECTION 1: HERO (Dark Theme) --- */}
      <section className="relative h-screen w-full overflow-hidden bg-[#131508]">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#131508]/80 via-[#131508]/40 to-[#131508] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-6"
            >
                 <span className="px-4 py-1.5 rounded-full border border-[#B1DC40]/30 bg-[#B1DC40]/10 text-sm uppercase tracking-[3px] text-[#B1DC40] backdrop-blur-sm shadow-[0_0_15px_rgba(177,220,64,0.1)]">
                    Our Legacy
                 </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-[#FCFFFC] tracking-tight drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Driven by <span className="text-[#B1DC40]">Quality.</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-2xl text-[#FCFFFC]/80 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              A globally recognized food enterprise built on quality, sustainability, and international partnerships that strengthen food security worldwide.
            </motion.p>
          </div>
        </div>

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

      {/* --- COMPANY STORY (Light Theme) --- */}
      <section className="py-24 bg-[#FCFFFC] relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-1/2 left-0 w-full h-full max-w-[800px] bg-[#B1DC40]/10 blur-[120px] -translate-y-1/2 pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           {/* Added items-center for perfect alignment */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 relative z-10 text-left">
                <SlideText className="text-3xl md:text-5xl font-bold text-[#131508] leading-tight">
                    From Humble Beginnings to <br />
                    <span className="text-[#B1DC40]">Global Reach</span>
                </SlideText>
              </div>

              {/* Reduced to 2 concise paragraphs for better alignment with image */}
              <div className="space-y-6 text-lg text-[#131508]/70 leading-relaxed font-light">
                <p>
                  Our journey began with a simple idea to make design and digital transformation easier for businesses. Starting as a small creative studio with limited resources but a strong vision, we have evolved into a full-scale IT and design powerhouse.
                </p>
                <p>
                  Today, AdsPro is more than just a provider; we are a digital partner for brands. We help businesses build their identity and scale with smart technology, powerful design, and seamless printing solutions that deliver real results.
                </p>
              </div>
            </motion.div>
            
            {/* Image Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-[#B1DC40] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              {/* Added Aspect Ratio to ensure it matches text height nicely */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#131508]/5 bg-[#131508] aspect-[4/3]">
                <img src={aboutImage} alt="Business Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#131508]/20 mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION, VISION, VALUES --- */}
      <MissionVisionValues />

      {/* --- FACILITIES / HUBS SECTION (Dark Theme) --- */}
      <section className="py-24 bg-[#131508] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B1DC40]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <SlideText className="text-3xl md:text-4xl font-bold text-[#FCFFFC]">
              Our State-of-the-Art Facilities
            </SlideText>
          </div>
          <motion.p 
            className="text-xl text-[#FCFFFC]/60 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Where creativity, technology, and production converge. Explore our operations.
          </motion.p>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="hidden lg:flex w-full h-[600px] gap-4 justify-center">
            {facilitiesData.map((facility) => (
              <motion.div
                key={facility.id}
                onHoverStart={() => setActivePanel(facility.id)}
                className={`relative h-full rounded-2xl cursor-pointer overflow-hidden border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  activePanel === facility.id 
                    ? 'border-[#B1DC40] shadow-[0_0_20px_rgba(177,220,64,0.15)] z-10' 
                    : 'border-[#FCFFFC]/10 opacity-60 hover:opacity-100 hover:border-[#FCFFFC]/30'
                }`}
                style={{ 
                    backgroundImage: `url(${facility.image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}
                animate={{ width: activePanel === facility.id ? '55%' : '15%' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-t from-[#131508] via-[#131508]/60 to-transparent transition-opacity duration-500 ${activePanel === facility.id ? 'opacity-100' : 'opacity-80'}`} />

                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                  <AnimatePresence mode="wait">
                    {activePanel === facility.id && (
                      <motion.div
                        variants={panelContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-[#FCFFFC] w-full max-w-2xl"
                      >
                        <motion.div variants={panelItemVariants} className="mb-6">
                            <div className="w-14 h-14 rounded-full bg-[#B1DC40]/20 backdrop-blur-md border border-[#B1DC40]/30 flex items-center justify-center">
                                <facility.icon className="w-7 h-7 text-[#B1DC40]" />
                            </div>
                        </motion.div>
                        <motion.h3 variants={panelItemVariants} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
                            {facility.title}
                        </motion.h3>
                        <motion.p variants={panelItemVariants} className="text-lg text-[#FCFFFC]/70 mb-8 leading-relaxed max-w-lg font-light">
                            {facility.description}
                        </motion.p>
                        <motion.div variants={panelItemVariants} className="inline-flex items-center gap-4 bg-[#FCFFFC]/5 backdrop-blur-lg pr-6 pl-4 py-3 rounded-xl border border-[#FCFFFC]/10">
                          <span className="text-3xl font-bold text-[#FCFFFC]">{facility.stat}</span>
                          <div className="h-8 w-[1px] bg-[#FCFFFC]/20"></div>
                          <span className="text-xs uppercase tracking-widest text-[#B1DC40] font-semibold">{facility.statLabel}</span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {activePanel !== facility.id && (
                       <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1, transition: { delay: 0.3 } }} 
                        exit={{ opacity: 0 }} 
                        className="absolute inset-0 flex items-center justify-center"
                       >
                         <div className="bg-[#131508]/60 backdrop-blur-sm p-4 rounded-full border border-[#FCFFFC]/10 group-hover:bg-[#B1DC40]/20 transition-colors">
                            <facility.icon className="w-8 h-8 text-[#FCFFFC]/80" />
                         </div>
                       </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col w-full gap-4">
            {facilitiesData.map((facility) => (
              <motion.div
                key={facility.id}
                layout
                onClick={() => setActivePanel(facility.id)}
                className={`w-full rounded-2xl cursor-pointer overflow-hidden border relative ${activePanel === facility.id ? 'border-[#B1DC40]' : 'border-[#FCFFFC]/10'}`}
                style={{ backgroundImage: `url(${facility.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                animate={{ height: activePanel === facility.id ? '500px' : '100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#131508] via-[#131508]/60 to-transparent p-6 flex flex-col justify-end text-left">
                  {activePanel !== facility.id && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="flex items-center gap-4 absolute bottom-6 left-6"
                    >
                       <facility.icon className="w-6 h-6 text-[#B1DC40]" />
                       <h3 className="text-xl font-bold text-[#FCFFFC]">{facility.title}</h3>
                    </motion.div>
                  )}
                  <AnimatePresence>
                    {activePanel === facility.id && (
                       <motion.div
                        variants={panelContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-[#FCFFFC] w-full"
                      >
                        <motion.div variants={panelItemVariants} className="mb-4">
                             <facility.icon className="w-10 h-10 text-[#B1DC40]" />
                        </motion.div>
                        <motion.h3 variants={panelItemVariants} className="text-3xl font-bold mb-3">{facility.title}</motion.h3>
                        <motion.p variants={panelItemVariants} className="text-sm text-[#FCFFFC]/70 mb-6 leading-relaxed">{facility.description}</motion.p>
                        <motion.div variants={panelItemVariants}>
                             <span className="text-2xl font-bold block">{facility.stat}</span>
                             <span className="text-xs text-[#B1DC40] uppercase tracking-wider">{facility.statLabel}</span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR CAPABILITIES SECTION --- */}
      <section className="py-24 bg-[#FCFFFC] relative overflow-hidden border-t border-[#131508]/5">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#B1DC40]/10 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
             className="text-center mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
            <SlideText className="text-3xl md:text-5xl font-bold text-[#131508] mb-6">
              Our Capabilities
            </SlideText>
            <motion.p 
              className="text-xl text-[#131508]/60 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A complete ecosystem for design, technology, and production.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Card 1 */}
             <motion.div 
               className="group relative bg-[#131508] border border-[#131508] rounded-[2rem] p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
             >
               <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={factoryImage} alt="Design" className="w-full h-full object-cover grayscale" />
               </div>
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-[#B1DC40] flex items-center justify-center mb-8 shadow-lg shadow-[#B1DC40]/20 group-hover:rotate-12 transition-transform duration-500">
                    <PenTool className="h-8 w-8 text-[#131508]" />
                 </div>
                 <h3 className="text-2xl font-bold text-[#FCFFFC] mb-4">Design & Branding</h3>
                 <p className="text-[#FCFFFC]/60 leading-relaxed border-l-2 border-[#FCFFFC]/10 pl-4 group-hover:border-[#B1DC40] transition-colors">
                    Logo creation, packaging design, flyers, menus, brochures, brand identity systems and more.
                 </p>
               </div>
             </motion.div>

             {/* Card 2 */}
             <motion.div 
               className="group relative bg-[#131508] border border-[#131508] rounded-[2rem] p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
             >
               <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={packagingImage} alt="Technology" className="w-full h-full object-cover grayscale" />
               </div>
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-[#B1DC40] flex items-center justify-center mb-8 shadow-lg shadow-[#B1DC40]/20 group-hover:rotate-12 transition-transform duration-500">
                    <Monitor className="h-8 w-8 text-[#131508]" />
                 </div>
                 <h3 className="text-2xl font-bold text-[#FCFFFC] mb-4">IT & Digital Solutions</h3>
                 <p className="text-[#FCFFFC]/60 leading-relaxed border-l-2 border-[#FCFFFC]/10 pl-4 group-hover:border-[#B1DC40] transition-colors">
                    Website development, admin panels, automation systems, cloud integration, app UI/UX and more.
                 </p>
               </div>
             </motion.div>

             {/* Card 3 */}
             <motion.div 
               className="group relative bg-[#131508] border border-[#131508] rounded-[2rem] p-8 overflow-hidden hover:-translate-y-2 transition-all duration-500"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
             >
               <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                  <img src={qaImage} alt="Printing" className="w-full h-full object-cover grayscale" />
               </div>
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-2xl bg-[#B1DC40] flex items-center justify-center mb-8 shadow-lg shadow-[#B1DC40]/20 group-hover:rotate-12 transition-transform duration-500">
                    <Printer className="h-8 w-8 text-[#131508]" />
                 </div>
                 <h3 className="text-2xl font-bold text-[#FCFFFC] mb-4">Printing & Production</h3>
                 <p className="text-[#FCFFFC]/60 leading-relaxed border-l-2 border-[#FCFFFC]/10 pl-4 group-hover:border-[#B1DC40] transition-colors">
                    High-quality printing, finishing, lamination, packaging, custom labels, banners, and retail media.
                 </p>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      <LeadershipSection />
      <TrustedLeadersSection />

    </div>
  );
};

export default About;