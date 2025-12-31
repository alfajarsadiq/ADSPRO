import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Monitor, Cloud, Code, LineChart } from 'lucide-react';
import SlideText from './SlideText'; // Ensure this path matches your file structure

const services = [
  {
    id: 1,
    title: "Creative Design",
    description: "We craft high-impact flyers, branding, packaging, and digital visuals that elevate your business and attract customers with standout creativity.",
    icon: ShieldCheck,
    theme: "dark"
  },
  {
    id: 2,
    title: "Automation & Workflow Mgmt",
    description: "Smart tools, custom dashboards, and automated systems streamline your operations and speed up your design-to-print process effortlessly.",
    icon: Server,
    theme: "lime"
  },
  {
    id: 3,
    title: "Digital Solutions",
    description: "From websites to cloud systems, we build modern, scalable digital platforms tailored to support and grow your brand effectively.",
    icon: Monitor,
    theme: "dark"
  },
  {
    id: 4,
    title: "Social Media Management",
    description: "End-to-end content creation, posting, and campaign management to help your brand stay active, engaging, and visible across all platforms.",
    icon: Cloud,
    theme: "light"
  },
  {
    id: 5,
    title: "Custom Branding",
    description: "Tailored design solutions to shape your identity logos, menus, packaging, and visuals that reflect your brand's vision with precision.",
    icon: Code,
    theme: "light"
  },
  {
    id: 6,
    title: "Market Strategy",
    description: "Data-backed insights and creative direction to position your brand strongly and reach the right audience with maximum impact.",
    icon: LineChart,
    theme: "light"
  }
];

const OurServices = () => {
  return (
    <section className="bg-[#FCFFFC] py-24 px-4 sm:px-6 lg:px-8 font-archivo">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-[#B1DC40] font-semibold uppercase tracking-widest text-sm mb-4">
            Our Expertise
          </p>
          
          {/* UPDATED: Heading wrapped in SlideText */}
          <SlideText className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#131508] leading-tight">
            Our Mission Is To Make Your <br />
            <span className="bg-[#B1DC40] px-2 text-[#131508]">Brand</span> Better Through <br />
            Creativity & Innovation
          </SlideText>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`
                relative p-10 rounded-[2rem] flex flex-col justify-between min-h-[320px] group transition-all duration-300 hover:-translate-y-2
                ${service.theme === 'dark' ? 'bg-[#131508] text-[#FCFFFC]' : ''}
                ${service.theme === 'lime' ? 'bg-[#B1DC40] text-[#131508]' : ''}
                ${service.theme === 'light' ? 'bg-[#F2F4F2] text-[#131508]' : ''} 
              `}
            >
              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-full flex items-center justify-center mb-6 text-xl
                ${service.theme === 'dark' ? 'bg-[#B1DC40] text-[#131508]' : ''}
                ${service.theme === 'lime' ? 'bg-[#131508] text-[#B1DC40]' : ''}
                ${service.theme === 'light' ? 'bg-[#131508] text-[#FCFFFC]' : ''}
              `}>
                <service.icon size={28} />
              </div>

              {/* Content */}
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${service.theme === 'light' ? 'text-[#131508]' : 'inherit'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  service.theme === 'dark' ? 'text-[#FCFFFC]/70' : 
                  service.theme === 'lime' ? 'text-[#131508]/80' : 
                  'text-[#131508]/70'
                }`}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;