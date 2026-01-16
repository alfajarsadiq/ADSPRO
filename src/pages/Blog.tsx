import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';

// --- UPDATED BLOG DATA (4 Posts) ---
const BLOG_POSTS = [
  {
    id: "digital-marketing-agency-dubai",
    title: "Why Every Business Needs a Digital Marketing & Design Agency in Dubai",
    excerpt: "In today’s competitive business environment, having a strong digital presence is no longer optional. Businesses in Dubai must adapt to modern branding to stay relevant.",
    date: "Jan 22, 2026",
    author: "AdsPro Team",
    image: "https://www.adsprodxb.com/adspro-branding-strategy.webp",
    category: "Digital Agency"
  },
  {
    id: "professional-branding-dubai",
    title: "How Professional Branding & Design Helps Businesses Grow in Dubai",
    excerpt: "Branding is more than just visuals. It is the foundation of how customers perceive, trust, and choose a business in a competitive market like Dubai.",
    date: "Jan 20, 2026",
    author: "AdsPro Team",
    image: "https://www.adsprodxb.com/How%20Professional%20Branding%20Design%20Helps%20Businesses%20Grow%20in%20Dubai.webp",
    category: "Branding"
  },
  {
    id: "high-performance-website-dubai",
    title: "Why Every Business Needs a High-Performance Website in Dubai",
    excerpt: "In a fast-growing business environment like Dubai, a website is more than just an online presence. It is a powerful business tool that builds credibility and generates leads.",
    date: "Jan 18, 2026",
    author: "AdsPro Team",
    image: "https://www.adsprodxb.com/Adspro-Website-Business%20Growth%20Agency.webp",
    category: "Web Development"
  },
  {
    id: "digital-marketing-dubai",
    title: "How Digital Marketing Helps Local Businesses in Dubai Get More Leads",
    excerpt: "Dubai is one of the most competitive business markets in the world. Discover how digital marketing has become the most effective way to generate leads, build trust, and grow consistently.",
    date: "Jan 16, 2026",
    author: "AdsPro Team",
    image: "https://www.adsprodxb.com/AdsPro%20Designing%20LLC%20Dubai%20Business%20Growth.webp",
    category: "Digital Marketing"
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#131508] min-h-screen font-archivo text-[#FCFFFC] selection:bg-[#B1DC40] selection:text-[#131508] pt-24 pb-20">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
        >
             <span className="px-4 py-1.5 rounded-full border border-[#B1DC40]/30 bg-[#B1DC40]/10 text-sm uppercase tracking-[3px] text-[#B1DC40]">
                Knowledge Hub
             </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 text-[#FCFFFC] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Insights & <span className="text-[#B1DC40]">News.</span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-[#FCFFFC]/60 font-light max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Updates on design trends, digital innovation, and business growth strategies from the AdsPro team.
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-md mx-auto relative group"
        >
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1C1E14] border border-[#FCFFFC]/10 rounded-full py-4 pl-12 pr-6 text-[#FCFFFC] focus:border-[#B1DC40]/50 focus:outline-none transition-all placeholder-[#FCFFFC]/30"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#FCFFFC]/40 w-5 h-5 group-focus-within:text-[#B1DC40] transition-colors" />
        </motion.div>
      </div>

      {/* --- BLOG GRID --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="group cursor-pointer flex flex-col h-full bg-[#1C1E14]/30 rounded-3xl border border-[#FCFFFC]/10 hover:border-[#B1DC40]/50 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="h-60 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#131508]/20 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <span className="absolute top-4 left-4 z-20 bg-[#131508]/80 backdrop-blur-md border border-[#B1DC40]/20 px-3 py-1 rounded-full text-xs font-bold text-[#B1DC40] uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-[#FCFFFC]/40 mb-4 font-mono uppercase tracking-wide">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} className="text-[#B1DC40]" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={12} className="text-[#B1DC40]" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#FCFFFC] mb-4 leading-tight group-hover:text-[#B1DC40] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[#FCFFFC]/60 text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-light">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-[#B1DC40] font-bold text-sm tracking-wide group/btn">
                  Read Article 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-[#FCFFFC]/40">
            <p className="text-xl">No articles found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default Blog;
