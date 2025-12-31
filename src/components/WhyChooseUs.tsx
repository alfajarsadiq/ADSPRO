import React from 'react';
import { motion } from 'framer-motion';
import SlideText from './SlideText'; // Import SlideText (adjust path if needed)

const features = [
  {
    id: "01",
    title: "Creative & Professional Design Solutions",
    description: "High-quality flyers, packaging, branding, and digital creatives tailored for UAE businesses."
  },
  {
    id: "02",
    title: "Fast Delivery & Automation-Powered Workflow",
    description: "Quick printing, reliable weekly output, and automation tools that save time and boost efficiency."
  },
  {
    id: "03",
    title: "Complete Branding, Printing & IT Support in One Place",
    description: "Design, printing, social media, websites, and cloud solutions everything managed in one place."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row font-archivo overflow-hidden">
      
      {/* --- LEFT SIDE (Dark) --- */}
      <div className="w-full lg:w-5/12 bg-[#131508] text-[#FCFFFC] p-10 lg:p-20 flex flex-col justify-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* UPDATED: Wrapped Heading in SlideText */}
          <SlideText className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Why <br />
            <span className="text-[#B1DC40]">Choose</span> <br />
            Us?
          </SlideText>

          <p className="text-xl md:text-2xl text-[#FCFFFC]/80 font-light max-w-sm border-l-4 border-[#B1DC40] pl-6 mt-8">
            The numbers and quality speak for themselves.
          </p>
        </motion.div>
      </div>

      {/* --- RIGHT SIDE (Light) --- */}
      <div className="w-full lg:w-7/12 bg-[#FCFFFC] text-[#131508] py-20 pr-10 lg:pr-20 pl-4 lg:pl-0 flex flex-col justify-center relative z-10">
        
        {/* =============================================
            THE VERTICAL LINE (Separate Component)
            =============================================
        */}
        <div 
            className="hidden lg:block absolute top-0 bottom-0 w-[2px] bg-[#131508]/10"
            style={{ left: '0px' }} 
        />

        <div className="space-y-16 lg:space-y-24 relative">
          {features.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative flex flex-col lg:flex-row items-start group pl-16 lg:pl-24"
            >
              {/* =============================================
                  THE NUMBER CIRCLE (Separate Element)
                  =============================================
              */}
              <div 
                className="absolute top-0 w-20 h-20 rounded-full bg-[#131508] border-[6px] border-[#FCFFFC] flex items-center justify-center shadow-2xl group-hover:bg-[#B1DC40] transition-colors duration-500 z-30"
                style={{ left: '50px', transform: 'translateX(-50%)' }}
              >
                <span className="text-2xl font-bold text-[#FCFFFC] group-hover:text-[#131508] transition-colors duration-500">
                  {item.id}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#131508]">
                  {item.title}
                </h3>
                <p className="text-lg text-[#131508]/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;