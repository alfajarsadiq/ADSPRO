import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// --- DATA ---
const imageBasedData = [
    {
        title: 'Innovation',
        description: 'We explore new technologies and tools. To provide new unique and cutting edge solutions that set our clients apart in the digital landscape.'
    },
    {
        title: 'Human-Centered Design',
        description: 'We are focusing on understanding and meeting user needs at every stage. By creating intuitive and engaging experiences, we ensure results are not only aesthetically pleasing but also highly functional and user-friendly.'
    },
    {
        title: 'Quality',
        description: 'We are committed to excellence, adhering to the highest standards of quality and performance. Using advanced technologies and approaches, we ensure every project exceeds our clients\' expectations.'
    },
    {
        title: 'Collaboration',
        description: 'As a small, close-knit team, we have worked together for years, developing a deep understanding of each other\'s strengths and fostering strong teamwork.'
    },
];

// --- Animation Variants ---
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const TimelineSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Create refs for each timeline item
    const refs = imageBasedData.map(() => useRef<HTMLDivElement>(null));

    // Track which item is in view using useInView hook (similar to StickyProductShowcase)
    useEffect(() => {
        const observers = refs.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                {
                    rootMargin: '-50% 0px -50% 0px', // Center trigger like ProductShowcase
                    threshold: 0.5
                }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    return (
        <section className="relative bg-[#1A1A1A] py-20 overflow-hidden">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex items-center">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <div className="relative">
                        {/* --- CENTRAL VERTICAL LINE --- */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#4A4A4A] -translate-x-1/2 z-0" />
                        
                        {/* --- CONTENT CONTAINER --- */}
                        <div className="relative space-y-32 py-20">
                            {imageBasedData.map((item, index) => (
                                <TimelineRow 
                                    key={index} 
                                    item={item} 
                                    index={index} 
                                    isActive={activeIndex === index}
                                    ref={refs[index]}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Spacer div to create natural scroll height */}
            <div className="h-[calc(100vh*3)]"></div>
        </section>
    );
};

// --- Row Component ---
interface TimelineRowProps {
    item: { title: string; description: string };
    index: number;
    isActive: boolean;
}

const TimelineRow = React.forwardRef<HTMLDivElement, TimelineRowProps>(({ 
    item, 
    index, 
    isActive 
}, ref) => {
    
    // Logic: If active, Full Opacity & White Color. If inactive, Low Opacity & Grey Color.
    const titleColor = isActive ? "text-white" : "text-[#525252]";
    const descColor = isActive ? "text-[#A0A0A0]" : "text-[#404040]";
    const dotColor = isActive ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "bg-[#4A4A4A]";
    
    return (
        <div ref={ref} className="relative w-full">
            {/* --- THE DOT --- */}
            <div className="absolute left-1/2 top-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 z-10">
                <div 
                    className={`w-4 h-4 rounded-full ${dotColor} transition-all duration-500 ease-in-out`}
                />
            </div>

            {/* --- CONTENT GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* --- LEFT SIDE (Title) - Left Aligned --- */}
                <div className={`text-left pr-12 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                    <motion.h3 
                        className={`text-4xl md:text-5xl font-bold ${titleColor} transition-colors duration-500`}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: isActive ? 1 : 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        {item.title}
                    </motion.h3>
                </div>

                {/* --- RIGHT SIDE (Description) --- */}
                <div className={`pl-12 text-left transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                    <motion.p 
                        className={`text-base md:text-lg ${descColor} leading-relaxed max-w-xl transition-colors duration-500`}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: isActive ? 1 : 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        {item.description}
                    </motion.p>
                </div>
            </div>
        </div>
    );
});

TimelineRow.displayName = 'TimelineRow';

export default TimelineSection;