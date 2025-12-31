import React from 'react';
import { Star, Quote } from 'lucide-react';
import SlideText from './SlideText';

// Removed placeholder images as they are no longer needed

const testimonials = [
  {
    id: 1,
    content: "AdsPro transformed our supermarket's weekly promotions. The flyer designs are stunning, and the printing quality is consistently top-notch. Our footfall has increased significantly since working with them.",
    // Removed author and image
    role: "Leading Supermarket, UAE", // Updated to generic designation
    rating: 5,
  },
  {
    id: 2,
    content: "They built a custom e-commerce website and admin dashboard for our electronics store. The system is fast, secure, and very easy to manage. Their technical expertise and support are outstanding.",
    role: "Major Electronics Retailer",
    rating: 5,
  },
  {
    id: 3,
    content: "Our restaurant's branding needed a complete overhaul. AdsPro created a beautiful new logo, menu designs, and social media assets that perfectly capture our vision. Highly recommended!",
    role: "Popular Restaurant Group",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#131508] relative overflow-hidden font-archivo">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B1DC40]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B1DC40]/10 text-[#B1DC40] text-sm font-bold uppercase tracking-widest mb-6 border border-[#B1DC40]/20">
            <Star className="w-4 h-4 fill-current" />
            <span>Client Success Stories</span>
          </div>
          
          <SlideText className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCFFFC] tracking-tight leading-tight">
            Trusted by <span className="text-[#B1DC40]">Growing Brands</span>
          </SlideText>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              // Removed min-h-[550px] to avoid stretching. Kept h-full for alignment.
              // Removed justify-between so content sits naturally at top.
              className="relative bg-[#1C1E14] rounded-[2.5rem] p-10 flex flex-col h-full border border-[#FCFFFC]/5 shadow-2xl shadow-black/50 overflow-hidden group hover:-translate-y-2 transition-all duration-500"
            >
                {/* Giant background quote icon for style */}
                <Quote className="absolute top-6 right-8 w-40 h-40 text-[#B1DC40]/[0.03] pointer-events-none transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700" />

                <div className="relative z-10 flex-grow">
                    {/* Functional Quote Icon */}
                    <Quote className="w-12 h-12 text-[#B1DC40] mb-8" fill="currentColor" />

                    {/* Main Quote Typography */}
                    <p className="text-2xl font-semibold text-[#FCFFFC] leading-snug mb-12 tracking-tight">
                        "{testimonial.content}"
                    </p>
                </div>

                {/* Designation & Rating Section (Footer) */}
                {/* Added mt-auto to push to bottom, removed image and author name */}
                <div className="flex items-center justify-between relative z-10 mt-auto pt-4">
                    <div>
                        {/* Displaying only the role/designation now */}
                        <p className="text-[#B1DC40] font-bold tracking-wide text-lg">
                            {testimonial.role}
                        </p>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-1 bg-[#131508]/50 p-2 rounded-full backdrop-blur-sm border border-[#FCFFFC]/5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#B1DC40] text-[#B1DC40]" />
                        ))}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;