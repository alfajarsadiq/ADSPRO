import React from 'react';
import { motion, Variants } from 'framer-motion';
import SlideText from './SlideText';
import { 
  Palette, 
  Terminal, 
  Printer, 
  Layout, 
  Megaphone, 
  ArrowRight,
  PenTool,   
  Film,      
  Target     
} from 'lucide-react';

// --- Import Images from src/assets ---
import afsalImg from '../assets/afsal.webp';
import anandhuImg from '../assets/anandhu.webp';
import ashikAbuImg from '../assets/ashikabu.webp';
import ameghImg from '../assets/amegh.webp';
import athulImg from '../assets/athul.webp';
import jainathImg from '../assets/jainath.webp';
import adwaithImg from '../assets/adwaith.webp';
import ashikImg from '../assets/ashik.webp';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

// --- Updated Team Data with Imported Images ---
const teamData = [
  {
    role: 'Creative Director',
    name: 'Afsal',
    description: 'Leads branding, design concepts, and visual direction.',
    icon: Palette,
    image: afsalImg 
  },
  {
    role: 'Lead Developer',
    name: 'Anandhu V S',
    description: 'Builds modern web systems, backend logic, and automation tools.',
    icon: Terminal,
    image: anandhuImg
  },
  {
    role: 'Printing & Production Head',
    name: 'Ashik Abu',
    description: 'Ensures precision, quality, and flawless printing output.',
    icon: Printer,
    image: ashikAbuImg
  },
  {
    role: 'UI/UX Designer',
    name: 'Amegh Aruz',
    description: 'Designs clean, user-friendly interfaces for web and mobile.',
    icon: Layout,
    image: ameghImg
  },
  {
    role: 'Marketing Strategist',
    name: 'Athul Krishna',
    description: 'Drives social media, campaigns, and brand communication.',
    icon: Megaphone,
    image: athulImg
  },
  {
    role: 'Senior Graphic Designer',
    name: 'Jainath K B',
    description: 'Crafts compelling visual identities and marketing assets.',
    icon: PenTool,
    image: jainathImg
  },
  {
    role: 'Motion Graphics Artist',
    name: 'Adwaith V',
    description: 'Creates engaging animations and dynamic visual effects.',
    icon: Film,
    image: adwaithImg
  },
  {
    role: 'Brand Strategist',
    name: 'Ashik P K',
    description: 'Develops comprehensive brand positioning and growth roadmaps.',
    icon: Target,
    image: ashikImg
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-24 bg-[#FCFFFC] relative overflow-hidden font-archivo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Section */}
            <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B1DC40]/10 border border-[#B1DC40]/20 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#B1DC40] animate-pulse"></span>
                    <span className="text-xs font-bold text-[#131508] uppercase tracking-widest">Our Creative Force</span>
                </div>
                
                <SlideText className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#131508] mb-6 tracking-tight">
                    Meet the Team Behind <span className="bg-[#B1DC40] px-2 text-[#131508]">AdsPro</span>
                </SlideText>
            </motion.div>

            {/* Team Grid */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Intro Card */}
                <motion.div 
                    variants={itemVariants}
                    className="p-10 rounded-[2.5rem] bg-[#B1DC40] flex flex-col justify-between text-[#131508] min-h-[450px] relative overflow-hidden group"
                >
                    <div className="relative z-10">
                        <h3 className="text-5xl font-bold mb-4 leading-tight">Our Team<br/>Members</h3>
                        <p className="text-[#131508]/70 text-lg font-medium">A dedicated team shaping AdsPro’s creativity and growth.</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-[#131508] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-8 h-8 text-[#B1DC40]" />
                    </div>
                </motion.div>

                {/* Member Cards */}
                {teamData.map((member, index) => (
                    <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="group relative rounded-[2.5rem] overflow-hidden bg-[#131508] min-h-[450px]"
                    >
                        {/* 1. Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* 2. Dark Bottom Shade (Gradient) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#131508] via-[#131508]/40 to-transparent" />
                        </div>

                        {/* 3. Text Overlay Content */}
                        <div className="relative h-full p-10 flex flex-col justify-between z-10">
                            {/* Top Content: Role and Icon */}
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-xl bg-[#B1DC40] flex items-center justify-center">
                                    <member.icon className="w-6 h-6 text-[#131508]" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FCFFFC] bg-[#131508]/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                                    {member.role}
                                </span>
                            </div>

                            {/* Bottom Content: Name and Description */}
                            <div className="mt-auto">
                                <h4 className="text-3xl font-bold text-[#FCFFFC] mb-2 group-hover:text-[#B1DC40] transition-colors duration-300">
                                    {member.name}
                                </h4>
                                <p className="text-sm text-[#FCFFFC]/70 leading-relaxed line-clamp-2">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default LeadershipSection;