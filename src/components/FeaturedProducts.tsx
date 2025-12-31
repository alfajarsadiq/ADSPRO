import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Printer, Globe, Layers, Megaphone } from 'lucide-react';
import SlideText from './SlideText';

// --- Data: Services List ---
// Adapted to match the clean structure (Title + Description + Icon)
const services = [
  {
    id: 1,
    title: 'Creative Graphic Design',
    description: 'Logos, social media creatives, and complete visual identities designed to elevate your brand.',
    icon: Palette,
    theme: 'dark' // Matches the contrast style
  },
  {
    id: 2,
    title: 'Professional Printing',
    description: 'High-quality offset & digital printing for business cards, banners, and signage.',
    icon: Printer,
    theme: 'lime' // Highlighted card
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Responsive, SEO-optimized websites and custom web applications tailored to your needs.',
    icon: Globe,
    theme: 'dark'
  },
  {
    id: 4,
    title: 'Flyer & Brochure Design',
    description: 'Eye-catching layouts designed to convert readers into customers with compelling visuals.',
    icon: Layers,
    theme: 'light'
  },
  {
    id: 5,
    title: 'Branding Strategy',
    description: 'Strategic positioning and market analysis to make your brand stand out effectively.',
    icon: Megaphone,
    theme: 'light'
  }
];

// --- WhatsApp Handler ---
const handleWhatsAppEnquiry = (serviceName: string) => {
  const phoneNumber = '971585639040';
  const message = `Hello! I am interested in your "${serviceName}" service. Can we discuss?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};

const FeaturedProducts = () => {
  return (
    <section className="bg-[#FCFFFC] py-24 px-4 sm:px-6 lg:px-8 font-archivo">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-[#B1DC40] font-semibold uppercase tracking-widest text-sm mb-4">
            Our Expertise
          </p>
          
          <SlideText className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#131508] leading-tight">
            Our Featured <br />
            <span className="bg-[#B1DC40] px-2 text-[#131508]">Services</span> & Solutions
          </SlideText>
          
          <p className="mt-6 text-lg text-[#131508]/70 max-w-2xl mx-auto">
             Explore our premium range of digital and print solutions, each designed to elevate your brand identity.
          </p>
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
              onClick={() => handleWhatsAppEnquiry(service.title)}
              className={`
                relative p-10 rounded-[2rem] flex flex-col justify-between min-h-[320px] group transition-all duration-300 hover:-translate-y-2 cursor-pointer
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

export default FeaturedProducts;