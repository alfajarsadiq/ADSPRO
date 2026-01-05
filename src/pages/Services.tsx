import React, { useState } from 'react';
import { Award, TrendingUp, Globe, Minus, Plus, ChevronDown, Monitor } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- COMPONENTS ---
import CtaSection from '../components/CtaSection';
import WhyChooseUs from '../components/WhyChooseUs';
import OurServices from '../components/OurServices';

// --- PLACEHOLDER ASSETS ---
import heroVideo from '../assets/partner.webm';
import qualityImage from '../assets/printin.webp';
import reliabilityImage from '../assets/web.webp';
import growthImage from '../assets/brandi.webp';
import reachImage from '../assets/automation.webp';

// --- LOGO ASSETS ---
import talalLogo from '../assets/talal.png';
import nasmatLogo from '../assets/nasmat.png';
import rumanLogo from '../assets/ruman.png';
import habibiLogo from '../assets/habibi.png';
import lamisLogo from '../assets/lamis.png';
import nooraLogo from '../assets/noora.png';
import telexLogo from '../assets/telex.png';
import wadiLogo from '../assets/wadi.png';
import teachatLogo from '../assets/teachat.png';

// --- DATA ---
const partnerLogos = [
    { name: 'Talal Restaurant', logo: talalLogo, subtitle: 'Restaurant & Catering' },
    { name: 'Nasamat Group', logo: nasmatLogo, subtitle: 'General Trading' },
    { name: 'Ruman', logo: rumanLogo, subtitle: 'Retail & Supermarket' },
    { name: 'Habibi 2020', logo: habibiLogo, subtitle: 'Lifestyle & Retail' },
    { name: 'Lamis', logo: lamisLogo, subtitle: 'Hypermarket' },
    { name: 'Noora', logo: nooraLogo, subtitle: 'Consumer Goods' },
    { name: 'Telex', logo: telexLogo, subtitle: 'Technology & Logistics' },
    { name: 'Wadi Market', logo: wadiLogo, subtitle: 'Daily Essentials' },
    { name: 'Tea Chat', logo: teachatLogo, subtitle: 'Beverage & Cafe' },
];

const partnershipBenefits = [
  {
    id: 'branding',
    icon: Award,
    title: "Branding & Identity",
    description: "Logos, packaging, product labels, store branding, and complete identity systems crafted to make businesses stand out with clarity and style.",
    image: growthImage,
    stat: '40+',
    statLabel: 'Brands Designed'
  },
  {
    id: 'webdev',
    icon: Monitor,
    title: "Website Development",
    description: "Custom websites, admin dashboards, cloud-connected systems, fast UI/UX layouts, and responsive digital platforms built for modern businesses.",
    image: reliabilityImage,
    stat: '25+',
    statLabel: 'Web Projects Delivered'
  },
  {
    id: 'automation',
    icon: TrendingUp,
    title: "Automation & Digital Systems",
    description: "Smart tools, workflow automation, WhatsApp order bots, and cloud solutions that improve efficiency and streamline business operations.",
    image: reachImage,
    stat: '30+',
    statLabel: 'Systems Automated'
  },
  {
    id: 'printing',
    icon: Globe,
    title: "Flyer, Packaging & Printing",
    description: "High-quality flyer designs, offer posters, supermarket promotions, and packaging artwork—all delivered with precision and fast turnaround.",
    image: qualityImage,
    stat: '500+',
    statLabel: 'Designs & Prints Delivered'
  }
];

const partnershipProcess = [
    {
      title: "Requirement & Creative Briefing",
      description: "We start by understanding your design needs, branding goals, printing requirements, or digital solution requests to form a clear project direction."
    },
    {
      title: "Concept Development & Strategy Planning",
      description: "Our team prepares visual concepts, design ideas, automation flow plans, or technical strategies aligned with your brand and project objectives."
    },
    {
      title: "Production & Implementation",
      description: "Once approved, we move into execution design creation, flyer layout, printing, website development, automation setup, or social media content production."
    },
    {
      title: "Delivery & Ongoing Support",
      description: "Final outputs are delivered with precision. We continue providing updates, modifications, print support, and digital assistance to keep your brand consistent and growing."
    }
];

const panelContentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const panelItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Partners = () => {
  const [activePanel, setActivePanel] = useState('branding');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <div className="bg-[#131508] font-archivo text-[#FCFFFC] selection:bg-[#B1DC40] selection:text-[#131508]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden bg-[#131508]">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
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
                 <span className="px-4 py-1.5 rounded-full border border-[#B1DC40]/30 bg-[#B1DC40]/10 text-sm uppercase tracking-[3px] text-[#B1DC40] shadow-none">
                    Strategic Alliances
                 </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-[#FCFFFC] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Design. Build. Automate <span className="text-[#B1DC40]">Grow.</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-2xl text-[#FCFFFC]/80 font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We craft visuals, websites, systems, and marketing assets that help businesses operate smarter and appear stronger.
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

      {/* --- LOGO SCROLLER (Updated: With Subtitles) --- */}
      <div className="bg-[#131508] py-24 border-b border-[#FCFFFC]/5 relative z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold text-[#B1DC40] uppercase tracking-widest mb-16">
                  Trusted Client Partners
              </p>
              
              <div className="relative flex overflow-hidden h-64 items-center">
                  <motion.div
                      className="flex gap-0 items-center whitespace-nowrap"
                      animate={{ x: ['0%', '-33.33%'] }}
                      transition={{ 
                        ease: 'linear', 
                        duration: 65, 
                        repeat: Infinity 
                      }}
                  >
                      {/* Tripled the list for a perfectly seamless infinite loop */}
                      {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                          <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center gap-4 text-center" style={{ minWidth: '320px' }}>
                              <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="h-24 md:h-32 w-auto object-contain transition-transform duration-500 hover:scale-105 pointer-events-none mb-2"
                              />
                              <div className="flex flex-col gap-1">
                                <h4 className="text-[#FCFFFC] text-lg font-bold">{partner.name}</h4>
                                <span className="text-[#B1DC40] text-xs uppercase tracking-[2px] font-semibold opacity-80">{partner.subtitle}</span>
                              </div>
                          </div>
                      ))}
                  </motion.div>

                  {/* Deep edge masks to smooth the entrance and exit */}
                  <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#131508] to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#131508] to-transparent z-10" />
              </div>
          </div>
      </div>

      {/* --- OUR SERVICES --- */}
      <OurServices />

      {/* --- SHOWCASE SECTION --- */}
      <section className="py-24 bg-[#131508] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FCFFFC] mb-6">Showcasing Our Best Creative & Digital Work</h2>
          <p className="text-xl text-[#FCFFFC]/60 max-w-3xl mx-auto mb-16 font-light">
            We deliver impactful branding, powerful websites, smart automation, and high-quality print design to help businesses grow with confidence.
          </p>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
            <div className="hidden lg:flex w-full h-[600px] gap-4 justify-center">
                {partnershipBenefits.map((benefit) => (
                <motion.div
                    key={benefit.id}
                    onHoverStart={() => setActivePanel(benefit.id)}
                    className={`relative h-full rounded-2xl cursor-pointer overflow-hidden border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        activePanel === benefit.id ? 'border-[#B1DC40]/50 shadow-none z-10' : 'border-[#FCFFFC]/10 opacity-60 hover:opacity-100 hover:border-[#FCFFFC]/30'
                    }`}
                    style={{ backgroundImage: `url(${benefit.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    animate={{ width: activePanel === benefit.id ? '55%' : '15%' }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#131508] via-[#131508]/80 to-transparent transition-opacity duration-500 ${activePanel === benefit.id ? 'opacity-100' : 'opacity-80'}`} />
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-left">
                        <AnimatePresence mode="wait">
                            {activePanel === benefit.id && (
                            <motion.div variants={panelContentVariants} initial="hidden" animate="visible" exit="exit" className="text-[#FCFFFC] w-full max-w-2xl">
                                <motion.div variants={panelItemVariants} className="mb-6">
                                    <div className="w-14 h-14 rounded-full bg-[#B1DC40]/10 border border-[#B1DC40]/30 flex items-center justify-center">
                                        <benefit.icon className="w-7 h-7 text-[#B1DC40]" />
                                    </div>
                                </motion.div>
                                <motion.h3 variants={panelItemVariants} className="text-4xl font-bold mb-4">{benefit.title}</motion.h3>
                                <motion.p variants={panelItemVariants} className="text-lg text-[#FCFFFC]/80 mb-8 leading-relaxed max-w-lg font-light">{benefit.description}</motion.p>
                                <motion.div variants={panelItemVariants} className="inline-flex items-center gap-4 bg-[#131508]/80 pr-6 pl-4 py-3 rounded-xl border border-[#FCFFFC]/10">
                                    <span className="text-3xl font-bold text-[#FCFFFC]">{benefit.stat}</span>
                                    <div className="h-8 w-[1px] bg-[#FCFFFC]/20" />
                                    <span className="text-xs uppercase tracking-widest text-[#B1DC40] font-semibold">{benefit.statLabel}</span>
                                </motion.div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {activePanel !== benefit.id && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay: 0.3} }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-[#131508]/80 p-4 rounded-full border border-[#FCFFFC]/10">
                                    <benefit.icon className="w-8 h-8 text-[#FCFFFC]/80" />
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
                ))}
            </div>
             
             <div className="lg:hidden flex flex-col w-full gap-4">
                {partnershipBenefits.map((benefit) => (
                <motion.div
                    key={benefit.id}
                    layout
                    onClick={() => setActivePanel(benefit.id)}
                    className={`w-full rounded-2xl cursor-pointer overflow-hidden border relative ${activePanel === benefit.id ? 'border-[#B1DC40]/50' : 'border-[#FCFFFC]/10'}`}
                    style={{ backgroundImage: `url(${benefit.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    animate={{ height: activePanel === benefit.id ? '500px' : '100px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131508] via-[#131508]/80 to-transparent p-6 flex flex-col justify-end text-left">
                    {activePanel !== benefit.id && (
                         <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-4 absolute bottom-6 left-6">
                            <benefit.icon className="w-6 h-6 text-[#B1DC40]" />
                            <h3 className="text-xl font-bold text-[#FCFFFC]">{benefit.title}</h3>
                        </motion.div>
                    )}
                    <AnimatePresence>
                        {activePanel === benefit.id && (
                        <motion.div variants={panelContentVariants} initial="hidden" animate="visible" exit="exit" className="text-[#FCFFFC] w-full">
                            <motion.div variants={panelItemVariants} className="mb-4">
                                <benefit.icon className="w-10 h-10 text-[#B1DC40]" />
                            </motion.div>
                            <motion.h3 variants={panelItemVariants} className="text-3xl font-bold mb-3">{benefit.title}</motion.h3>
                            <motion.p variants={panelItemVariants} className="text-sm text-[#FCFFFC]/80 mb-6 leading-relaxed">{benefit.description}</motion.p>
                            <motion.div variants={panelItemVariants}>
                                <span className="text-2xl font-bold block">{benefit.stat}</span>
                                <span className="text-xs text-[#B1DC40] uppercase tracking-wider">{benefit.statLabel}</span>
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

      {/* --- WORK PROCESS SECTION --- */}
      <section className="py-24 bg-[#131508] text-[#FCFFFC] border-t border-[#FCFFFC]/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Work Process</h2>
                <p className="text-xl text-[#FCFFFC]/60 max-w-2xl mx-auto font-light">A clear and efficient workflow that powers all our design, printing, digital, and automation solutions.</p>
            </div>
            <div className="space-y-4">
                {partnershipProcess.map((item, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`rounded-3xl overflow-hidden transition-all duration-300 ${
                            openAccordion === index ? 'bg-[#131508] border border-[#B1DC40]/30' : 'bg-transparent border-b border-[#FCFFFC]/10 rounded-none'
                        }`}
                    >
                        <button
                            type="button"
                            className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
                            onClick={(e) => { e.preventDefault(); setOpenAccordion(openAccordion === index ? null : index); }}
                        >
                            <div className="flex items-center gap-6">
                                <span className={`text-xl font-bold font-mono ${openAccordion === index ? 'text-[#B1DC40]' : 'text-[#FCFFFC]/50'}`}>0{index + 1}</span>
                                <h3 className={`text-xl md:text-2xl font-semibold ${openAccordion === index ? 'text-[#FCFFFC]' : 'text-[#FCFFFC]/80'}`}>{item.title}</h3>
                            </div>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openAccordion === index ? 'bg-[#B1DC40] text-[#131508]' : 'bg-[#131508] border border-[#FCFFFC]/10 text-[#FCFFFC]/50'}`}>
                                <AnimatePresence initial={false} mode="wait">
                                    <motion.div key={openAccordion === index ? "minus" : "plus"} initial={{ rotate: openAccordion === index ? -90 : 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: openAccordion === index ? 90 : -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        {openAccordion === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </button>
                        <AnimatePresence>
                            {openAccordion === index && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} className="overflow-hidden">
                                    <div className="p-8 pt-0 pl-4 md:pl-20 pr-8">
                                        <p className="text-[#FCFFFC]/60 leading-relaxed font-light text-lg">{item.description}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <WhyChooseUs />
      <CtaSection />
      
    </div>
  );
};

export default Partners;
