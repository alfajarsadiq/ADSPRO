import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SlideText from './SlideText'; // Ensure this matches the import in OurServices.tsx

const faqs = [
  {
    question: "How long does it take to deliver a design project?",
    answer:
      "Flyers and social media designs are delivered within 24–48 hours. Branding, packaging, and larger creative projects may take 3–7 days depending on scope and revisions."
  },
  {
    question: "Do you offer website development and maintenance?",
    answer:
      "Yes. We build custom websites, admin dashboards, and automation systems. We also provide ongoing maintenance, updates, security monitoring, and feature enhancements."
  },
  {
    question: "Can you manage weekly flyers and printing for supermarkets?",
    answer:
      "Absolutely. We handle the full process—from design to print-ready files—and offer fast turnaround for weekly promotions, A4 flyers, shelf talkers, and in-store branding materials."
  },
  {
    question: "Do you create brand identity and packaging designs?",
    answer:
      "Yes. We design complete brand identity systems including logos, packaging artwork, stationery sets, label designs, and brand guidelines tailored for your business."
  },
  {
    question: "Do you provide automation tools or custom digital solutions?",
    answer:
      "Yes. We develop automation tools such as WhatsApp order systems, cloud dashboards, custom workflow tools, and digital solutions to streamline your business operations."
  },
  {
    question: "Can I request revisions on my design?",
    answer:
      "Of course. All design services include revision rounds to ensure the final output perfectly matches your brand vision and project requirements."
  },
  {
    question: "What file formats will I receive after the project?",
    answer:
      "You will receive high-resolution files in formats such as PNG, JPG, PDF, and vector/print-ready formats like AI, EPS, or SVG depending on the project type."
  },
  {
    question: "Do you offer social media content creation?",
    answer:
      "Yes. We design engaging reels, posters, advertisements, and content packages optimized for platforms like Instagram, TikTok, Facebook, and YouTube."
  }
];

const Commitment = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); 

  return (
    <section className="relative py-24 bg-[#131508] overflow-hidden font-archivo">
      
      {/* --- BACKGROUND DECORATIONS (Updated Colors) --- */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-20 z-0">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M50 50 C 200 0, 400 0, 500 100 S 600 300, 400 400 S 100 500, 200 600" stroke="#B1DC40" strokeWidth="2" fill="none" strokeDasharray="10 10"/>
           <path d="M450 150 C 550 150, 600 250, 500 350" stroke="#B1DC40" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Lime Glow (Bottom Left) */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#B1DC40]/20 z-0 mix-blend-screen filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-10 w-80 h-80 rounded-full bg-[#B1DC40]/10 z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING with SlideText Animation */}
        <div className="text-center mb-16">
          <SlideText className="text-5xl md:text-6xl font-bold text-[#FCFFFC] tracking-tight">
             FAQ's
          </SlideText>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              // TRIGGER ON HOVER (Mouse Enter/Leave)
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              className={`rounded-xl transition-all duration-300 cursor-pointer border ${
                openIndex === index 
                ? 'bg-[#1a1c10] border-[#B1DC40]/50 shadow-[0_4px_20px_-5px_rgba(177,220,64,0.15)]' 
                : 'bg-[#131508] border-[#FCFFFC]/10 hover:border-[#FCFFFC]/30'
              }`}
            >
              {/* HEADER */}
              <div className="w-full text-left px-8 py-6 flex items-start gap-6 select-none">
                {/* Icon Column */}
                <div className="flex-shrink-0 mt-1">
                  <div className={`transition-all duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-70'}`}>
                    {openIndex === index ? (
                      // Lime Dash for Active
                      <div className="w-4 h-0.5 bg-[#B1DC40] rounded-full mt-3 shadow-[0_0_10px_#B1DC40]"></div>
                    ) : (
                      // Plus Icon for Inactive
                      <Plus className="w-5 h-5 text-[#FCFFFC]/60" />
                    )}
                  </div>
                </div>

                {/* Content Column - Question Only */}
                <div className="flex-grow">
                  <h3 className={`text-lg font-medium transition-colors duration-200 ${
                    openIndex === index ? 'text-[#FCFFFC]' : 'text-[#FCFFFC]/70'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
              </div>

              {/* ANSWER PANEL: Pure CSS Grid Animation */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-8 pb-6 pl-[4.75rem] text-[#FCFFFC]/60 leading-relaxed text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;