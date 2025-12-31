import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SlideText from './SlideText'; 

// --- Data for the cards (Updated with Brand Themes) ---
const statsData = [
  {
    id: 'projects',
    label: 'Projects Delivered',
    value: '800+',
    keyword: 'High-Quality Creative Output',
    theme: 'dark', // Fits the "Dark" card style
    detailTitle: 'Delivering Creativity at Scale',
    detailText: 'We have successfully delivered more than 800 design, branding, and digital projects for supermarkets, retail clients, restaurants, and corporate brands. Our team specializes in producing fast, high–impact creative work.',
    link: '/portfolio'
  },
  {
    id: 'clients',
    label: 'Supermarkets & Businesses Served',
    value: '120+',
    keyword: 'Trusted by Growing Brands',
    theme: 'lime', // Fits the "Lime" card style
    detailTitle: 'Partnering with 120+ Businesses',
    detailText: 'AdsPro is the creative partner for over 120 supermarkets and businesses across UAE. Our end-to-end design, printing, digital marketing, and web solutions help our clients grow faster.',
    link: '/about'
  },
  {
    id: 'delivery',
    label: 'On-Time Delivery Rate',
    value: '99.7%',
    keyword: 'Fast & Reliable Execution',
    theme: 'light', // Fits the "Light" card style
    detailTitle: 'Reliability You Can Count On',
    detailText: 'We understand that supermarkets and businesses run on tight timelines. With a 99.7% on-time delivery record for flyer designs, printing jobs, website projects, and digital services, we ensure your business never slows down.',
    link: '/services'
  },
  {
    id: 'volume',
    label: 'Flyers & Creatives Monthly',
    value: '6,000+',
    keyword: 'High-Volume Production',
    theme: 'dark', // Fits the "Dark" card style
    detailTitle: 'High-Capacity Creative Production',
    detailText: 'From 1-page offers to 12-page hypermarket flyers, AdsPro produces over 6,000+ creatives every month, helping supermarkets and retail stores grow footfall and sales.',
    link: '/services'
  },
];

// --- Card Color Styles (Matched to OurServices.tsx) ---
const themeStyles: { [key: string]: { bg: string; text: string; arrowBg: string; arrowText: string; hoverShadow: string } } = {
  dark: { 
    bg: 'bg-[#131508]', 
    text: 'text-[#FCFFFC]', 
    arrowBg: 'bg-[#B1DC40]', 
    arrowText: 'text-[#131508]',
    hoverShadow: '0 20px 40px -10px rgba(19, 21, 8, 0.5)' 
  },
  lime: { 
    bg: 'bg-[#B1DC40]', 
    text: 'text-[#131508]', 
    arrowBg: 'bg-[#131508]', 
    arrowText: 'text-[#B1DC40]',
    hoverShadow: '0 20px 40px -10px rgba(177, 220, 64, 0.4)'
  },
  light: { 
    bg: 'bg-[#F2F4F2]', 
    text: 'text-[#131508]', 
    arrowBg: 'bg-[#131508]', 
    arrowText: 'text-[#FCFFFC]',
    hoverShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)'
  },
};


// --- Individual Stat Card Component ---
const StatCard = ({ item, onSelect }: { item: typeof statsData[0], onSelect: () => void }) => {
  const styles = themeStyles[item.theme];
  return (
    <motion.div
      layoutId={`card-${item.id}`}
      className={`group relative p-8 rounded-[2rem] overflow-hidden cursor-pointer ${styles.bg} ${styles.text} shadow-xl border border-transparent hover:border-black/5 transition-all duration-300`}
      whileHover={{ y: -6, boxShadow: styles.hoverShadow }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onSelect}
    >
      <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <p className={`text-xs font-bold uppercase tracking-widest ${item.theme === 'dark' ? 'opacity-60' : 'opacity-70'}`}>
            {item.label}
          </p>
          
          {/* Arrow Icon */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 ${styles.arrowBg} ${styles.arrowText}`}>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Middle Value */}
        <div className="mt-8 mb-8">
           <p className="text-6xl font-bold tracking-tight">{item.value}</p>
        </div>

        {/* Bottom Keyword */}
        <div className="mt-auto pt-6 border-t border-current border-opacity-10">
          <p className="text-lg font-medium">{item.keyword}</p>
        </div>
      </div>
    </motion.div>
  );
};


// --- Detailed Card Modal Component ---
const StatDetailCard = ({ item, onClose }: { item: typeof statsData[0], onClose: () => void }) => {
    const styles = themeStyles[item.theme];
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
            <motion.div
                layoutId={`card-${item.id}`}
                className={`relative w-full max-w-2xl p-10 rounded-[2.5rem] overflow-hidden ${styles.bg} ${styles.text} shadow-2xl`}
            >
                <div className="relative z-10">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">{item.label}</p>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{item.detailTitle}</h2>
                    
                    <div className={`w-20 h-1 mb-8 ${item.theme === 'lime' ? 'bg-black/20' : 'bg-[#B1DC40]'}`}></div>
                    
                    <p className="text-lg opacity-90 leading-relaxed mb-10 whitespace-pre-line font-light">
                        {item.detailText}
                    </p>
                    
                    <Link to={item.link}>
                        <motion.div
                            className={`group inline-flex items-center gap-3 px-8 py-4 font-bold rounded-full cursor-pointer transition-all ${styles.arrowBg} ${styles.arrowText}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {item.id === 'clients' ? 'View Clients' : item.id === 'delivery' ? 'View Workflow' : 'Explore Work'}
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.div>
                    </Link>
                </div>
                
                <motion.button
                    className={`absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${item.theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}
                    onClick={onClose}
                    whileHover={{ rotate: 90 }}
                >
                    <X className="w-5 h-5" />
                </motion.button>
            </motion.div>
        </div>
    );
};


// --- Main Section Component ---
const StatsCardSection = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedStat = selectedId ? statsData.find(s => s.id === selectedId) : null;

    return (
        <section className="bg-[#FCFFFC] py-24 relative overflow-hidden font-archivo">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    className="text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-6">
                        <SlideText className="text-4xl lg:text-5xl font-bold text-[#131508] text-center leading-tight">
                            Our Impact by the <span className="bg-[#B1DC40] px-2 text-[#131508]">Numbers</span>
                        </SlideText>
                    </div>

                    <p className="text-xl text-[#131508]/60">
                        Delivering speed, scale, and creativity to help your business stand out in a crowded market.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statsData.map(stat => (
                        <StatCard key={stat.id} item={stat} onSelect={() => setSelectedId(stat.id)} />
                    ))}
                </div>

                <AnimatePresence>
                    {selectedStat && (
                        <StatDetailCard item={selectedStat} onClose={() => setSelectedId(null)} />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default StatsCardSection;