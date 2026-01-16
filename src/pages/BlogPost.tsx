import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';

// --- BLOG CONTENT DATABASE ---
const BLOG_CONTENT: any = {
  // 1. Digital Agency (New)
  "digital-marketing-agency-dubai": {
    title: "Why Every Business Needs a Digital Marketing & Design Agency in Dubai",
    date: "Jan 22, 2026",
    category: "Digital Agency",
    image: "https://www.adsprodxb.com/adspro-branding-strategy.webp",
    backlink: "https://adspro-dubai.blogspot.com/2026/01/digital-marketing-design-agency-dubai.html",
    content: (
      <>
        <p className="text-xl text-[#FCFFFC] font-normal mb-8 border-l-4 border-[#B1DC40] pl-6">
            In today’s competitive business environment, having a strong digital presence is no longer optional. Businesses in Dubai must adapt to modern branding, design, and online strategies to stay relevant and grow. This is where a professional <strong>digital marketing and design agency in Dubai</strong> becomes essential.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">Why Digital Presence Matters for Businesses</h2>
        <p>
            Customers today discover brands online before making decisions. A well-structured digital presence builds trust, improves visibility, and drives consistent business growth. Professional branding, high-quality design, and a performance-driven website work together to create real impact.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">The Role of a Digital Agency in Business Growth</h2>
        <p>
            A digital agency helps businesses define their brand identity, communicate clearly with their audience, and convert engagement into results. From visual branding to web development and marketing assets, every element contributes to long-term success.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">How AdsPro Helps Businesses Stand Out</h2>
        <p>
            <strong>AdsPro</strong> is a Dubai-based digital marketing and design agency focused on helping businesses grow through strategy, creativity, and technology. We work with startups, restaurants, supermarkets, and established companies to build strong and scalable digital brands.
        </p>

        <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-[#B1DC40]">
            <li>Branding & Visual Identity</li>
            <li>Graphic & Marketing Design</li>
            <li>Website Design & Web Development</li>
            <li>Digital Growth & Online Presence Optimization</li>
        </ul>

        <div className="bg-[#1C1E14] p-6 rounded-2xl border border-[#B1DC40]/30 mt-8 mb-8">
            <p className="font-bold text-[#B1DC40] mb-2">👉 Learn more about our services:</p>
            <a href="https://adsprodxb.com" target="_blank" rel="noopener noreferrer" className="text-[#FCFFFC] underline hover:text-[#B1DC40]">
                https://adsprodxb.com
            </a>
        </div>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-8 mb-4">Connect With AdsPro Online</h2>
        <p className="mb-4">Follow AdsPro across platforms for design inspiration, digital insights, and project updates:</p>
        <ul className="space-y-2 mb-8">
            <li>
                <strong className="text-[#B1DC40]">Instagram:</strong> <a href="https://www.instagram.com/adspro_gfx" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">@adspro_gfx</a>
            </li>
            <li>
                <strong className="text-[#B1DC40]">LinkedIn:</strong> <a href="https://www.linkedin.com/company/adsprodxb" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">AdsPro Dubai</a>
            </li>
            <li>
                <strong className="text-[#B1DC40]">TikTok:</strong> <a href="https://www.tiktok.com/@adspro_gfx" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">@adspro.ae</a>
            </li>
        </ul>
      </>
    )
  },

  // 2. Professional Branding (New)
  "professional-branding-dubai": {
    title: "How Professional Branding & Design Helps Businesses Grow in Dubai",
    date: "Jan 20, 2026",
    category: "Branding",
    image: "https://www.adsprodxb.com/How%20Professional%20Branding%20Design%20Helps%20Businesses%20Grow%20in%20Dubai.webp",
    backlink: "https://adspro-dubai.blogspot.com/2026/01/professional-branding-design-dubai.html",
    content: (
      <>
        <p className="text-xl text-[#FCFFFC] font-normal mb-8 border-l-4 border-[#B1DC40] pl-6">
            In a competitive business environment like Dubai, branding is more than just visuals. It is the foundation of how customers perceive, trust, and choose a business. Professional branding and design play a critical role in building credibility, increasing visibility, and driving long-term growth.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">Why Branding Is More Than Just a Logo</h2>
        <p>
            Branding goes beyond a logo or color palette. It includes brand identity, messaging, visual consistency, and customer experience. A strong brand communicates professionalism and builds trust before a customer even makes contact.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">How Design Influences Customer Trust</h2>
        <p>
            First impressions matter. Customers are more likely to trust businesses that present themselves professionally online and offline. High-quality graphic design, consistent branding, and a clean visual identity signal reliability and attention to detail.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">The Role of Graphic Design in Business Growth</h2>
        <p>
            Graphic design plays a vital role in marketing and communication. From social media creatives and flyers to websites and digital ads, effective design helps businesses attract attention, convey value, and convert prospects into customers.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">How AdsPro Builds Strong Brand Identities</h2>
        <p>
            <strong>AdsPro</strong> is a Dubai-based digital marketing and design agency helping businesses build strong and recognizable brands. Our approach focuses on strategy, creativity, and consistency to ensure that every brand stands out in the market.
        </p>

        <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-[#B1DC40]">
            <li>Brand Identity & Visual Systems</li>
            <li>Professional Graphic & Marketing Design</li>
            <li>Website Design & Digital Presence</li>
            <li>Brand Consistency Across Platforms</li>
        </ul>

        <div className="bg-[#1C1E14] p-6 rounded-2xl border border-[#B1DC40]/30 mt-8 mb-8">
            <p className="font-bold text-[#B1DC40] mb-2">👉 Explore our branding and design services:</p>
            <a href="https://adsprodxb.com" target="_blank" rel="noopener noreferrer" className="text-[#FCFFFC] underline hover:text-[#B1DC40]">
                https://adsprodxb.com
            </a>
        </div>
        
        <div className="mb-8">
            <p className="text-[#FCFFFC]/60">📖 Related read:</p>
            <Link to="/blog/digital-marketing-agency-dubai" className="text-[#B1DC40] underline hover:text-white transition-colors">
                Why Every Business Needs a Digital Marketing & Design Agency in Dubai
            </Link>
        </div>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-8 mb-4">Connect With AdsPro</h2>
        <p className="mb-4">Follow AdsPro for branding insights, design inspiration, and business growth tips:</p>
        <ul className="space-y-2 mb-8">
            <li>
                <strong className="text-[#B1DC40]">Instagram:</strong> <a href="https://www.instagram.com/adspro_gfx" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">@adspro_gfx</a>
            </li>
            <li>
                <strong className="text-[#B1DC40]">LinkedIn:</strong> <a href="https://www.linkedin.com/company/adsprodxb" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">AdsPro Dubai</a>
            </li>
        </ul>
      </>
    )
  },

  // 3. High Performance Website
  "high-performance-website-dubai": {
    title: "Why Every Business Needs a High-Performance Website in Dubai",
    date: "Jan 18, 2026",
    category: "Web Development",
    image: "https://www.adsprodxb.com/Adspro-Website-Business%20Growth%20Agency.webp",
    backlink: "https://adspro-dubai.blogspot.com/2026/01/high-performance-website-dubai.html",
    content: (
      <>
        <p className="text-xl text-[#FCFFFC] font-normal mb-8 border-l-4 border-[#B1DC40] pl-6">
            In a fast-growing business environment like Dubai, a website is more than just an online presence. It is a powerful business tool that builds credibility, generates leads, and supports long-term growth. A high-performance website helps businesses stand out, attract the right audience, and convert visitors into customers.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">Why Website Performance Matters</h2>
        <p>
            Today’s customers expect fast-loading, mobile-friendly, and easy-to-navigate websites. If a website loads slowly or looks outdated, visitors leave within seconds. A high-performance website improves user experience, increases engagement, and sends strong quality signals to search engines like Google.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">The Role of Web Design in Customer Trust</h2>
        <p>
            First impressions matter. Professional website design creates trust and communicates reliability. Clear layouts, strong visuals, and consistent branding help businesses present themselves as professional and established in competitive markets like Dubai.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">How a Strong Website Supports Business Growth</h2>
        <p>
            A well-built website works 24/7 for your business. It supports marketing campaigns, improves search visibility, and acts as a central point for customer enquiries and conversions. From startups to established brands, a website is a key growth asset.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">How AdsPro Builds High-Performance Websites</h2>
        <p>
            <strong>AdsPro</strong> is a Dubai-based digital agency specializing in website design and web development for modern businesses. Our websites are designed with performance, scalability, and business goals in mind.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-[#B1DC40]">
            <li>Custom website design</li>
            <li>Mobile-friendly and responsive layouts</li>
            <li>Fast loading and optimized performance</li>
            <li>SEO-ready website structure</li>
        </ul>
        <div className="bg-[#1C1E14] p-6 rounded-2xl border border-[#B1DC40]/30 mt-8 mb-8">
            <p className="font-bold text-[#B1DC40] mb-2">👉 Explore our web development services:</p>
            <a href="https://adsprodxb.com" target="_blank" rel="noopener noreferrer" className="text-[#FCFFFC] underline hover:text-[#B1DC40]">
                https://adsprodxb.com
            </a>
        </div>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-8 mb-4">Follow AdsPro for Digital & Website Insights</h2>
        <p className="mb-4">Stay connected with AdsPro for website design inspiration, digital growth strategies, and project updates:</p>
        <ul className="space-y-2 mb-8">
            <li>
                <strong className="text-[#B1DC40]">Instagram:</strong> <a href="https://www.instagram.com/adspro_gfx" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">@adspro_gfx</a>
            </li>
            <li>
                <strong className="text-[#B1DC40]">TikTok:</strong> <a href="https://www.tiktok.com/@adspro_gfx" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">@adspro.ae</a>
            </li>
        </ul>
      </>
    )
  },

  // 4. Digital Marketing
  "digital-marketing-dubai": {
    title: "How Digital Marketing Helps Local Businesses in Dubai Get More Leads",
    date: "Jan 16, 2026",
    category: "Digital Marketing",
    image: "https://www.adsprodxb.com/AdsPro%20Designing%20LLC%20Dubai%20Business%20Growth.webp",
    backlink: "https://adspro-dubai.blogspot.com/2026/01/digital-marketing-local-business-dubai.html",
    content: (
      <>
         <p className="text-xl text-[#FCFFFC] font-normal mb-8 border-l-4 border-[#B1DC40] pl-6">
            Dubai is one of the most competitive business markets in the world. For local businesses, standing out and attracting the right customers requires more than traditional advertising. Digital marketing has become the most effective way to generate leads, build trust, and grow consistently.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">Why Digital Marketing Is Essential for Local Businesses</h2>
        <p>
            Today’s customers search online before making decisions. Whether it’s a service provider, restaurant, or agency, people rely on Google search, maps, and social media to choose businesses. Digital marketing ensures your business appears at the right place, at the right time, to the right audience.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">Key Digital Marketing Channels That Drive Leads</h2>

        <h3 className="text-xl font-bold text-[#B1DC40] mt-6 mb-2">Search Engine Optimization (SEO)</h3>
        <p>
            SEO helps your business appear on Google when customers search for services in Dubai. A strong SEO strategy improves visibility, website traffic, and long-term lead generation without relying only on paid ads.
        </p>

        <h3 className="text-xl font-bold text-[#B1DC40] mt-6 mb-2">Google Business Profile Optimization</h3>
        <p>
            An optimized Google Business Profile allows local customers to find your business on Google Maps and local search results. Regular updates, services, and content help increase discovery and customer interactions.
        </p>

        <h3 className="text-xl font-bold text-[#B1DC40] mt-6 mb-2">Social Media Marketing</h3>
        <p>
            Platforms like Instagram and TikTok allow businesses to connect directly with their audience. Consistent posting, branding, and content build awareness and drive traffic back to your website.
        </p>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-10 mb-4">How AdsPro Supports Local Business Growth</h2>
        <p>
            <strong>AdsPro</strong> is a Dubai-based digital marketing agency helping local businesses attract quality leads through strategic digital solutions. Our approach focuses on visibility, performance, and real business results.
        </p>

        <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-[#B1DC40]">
            <li>Local SEO and search optimization</li>
            <li>Google Business Profile management</li>
            <li>Social media marketing and content strategy</li>
            <li>Website optimization for lead generation</li>
        </ul>

        <div className="bg-[#1C1E14] p-6 rounded-2xl border border-[#B1DC40]/30 mt-8 mb-8">
            <p className="font-bold text-[#B1DC40] mb-2">👉 Learn more about our services:</p>
            <a href="https://adsprodxb.com" target="_blank" rel="noopener noreferrer" className="text-[#FCFFFC] underline hover:text-[#B1DC40]">
                https://adsprodxb.com
            </a>
        </div>

        <h2 className="text-2xl font-bold text-[#FCFFFC] mt-8 mb-4">Connect With AdsPro on Social Media</h2>
        <p className="mb-4">Follow AdsPro for digital marketing tips, branding insights, and business growth strategies:</p>
        <ul className="space-y-2 mb-8">
            <li>
                <strong className="text-[#B1DC40]">Instagram:</strong> <a href="https://www.instagram.com/adspro_gfx" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">@adspro_gfx</a>
            </li>
            <li>
                <strong className="text-[#B1DC40]">TikTok:</strong> <a href="https://www.tiktok.com/@adspro_gfx" target="_blank" rel="noopener noreferrer" className="hover:text-[#B1DC40] transition-colors">@adspro.ae</a>
            </li>
        </ul>
      </>
    )
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Safe check if post exists
  const post = id && BLOG_CONTENT[id] ? BLOG_CONTENT[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
        <div className="min-h-screen bg-[#131508] flex items-center justify-center text-[#FCFFFC]">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
                <button onClick={() => navigate('/blog')} className="text-[#B1DC40] underline">Back to Blog</button>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-[#131508] min-h-screen font-archivo text-[#FCFFFC] selection:bg-[#B1DC40] selection:text-[#131508] pt-28 pb-20">
      
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-[#B1DC40] z-50"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "circOut" }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* --- BACK BUTTON --- */}
        <button 
          onClick={() => navigate('/blog')}
          className="group flex items-center text-[#FCFFFC]/60 hover:text-[#B1DC40] transition-colors mb-12 text-sm font-medium tracking-wide uppercase"
        >
          <div className="w-8 h-8 rounded-full border border-[#FCFFFC]/10 flex items-center justify-center mr-3 group-hover:border-[#B1DC40] transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to Insights
        </button>

        {/* --- ARTICLE HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 text-sm text-[#B1DC40] font-mono uppercase tracking-widest mb-6">
            <span className="bg-[#B1DC40]/10 border border-[#B1DC40]/20 px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-2 text-[#FCFFFC]/50 px-3 py-1">
               <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-2 text-[#FCFFFC]/50 px-3 py-1">
               <User size={14} /> AdsPro Team
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#FCFFFC] leading-tight mb-8">
            {post.title}
          </h1>

          <div className="w-full h-auto rounded-3xl overflow-hidden relative border border-[#FCFFFC]/10 bg-[#1C1E14]">
             <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto object-cover"
             />
          </div>
        </motion.div>

        {/* --- CONTENT AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Social Share Sidebar */}
            <div className="hidden lg:flex lg:col-span-1 flex-col gap-4 sticky top-32 h-fit">
                <span className="text-[#FCFFFC]/40 text-xs uppercase tracking-widest [writing-mode:vertical-rl] mb-4">Share</span>
                <button className="w-10 h-10 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/10 flex items-center justify-center text-[#FCFFFC] hover:bg-[#B1DC40] hover:text-[#131508] transition-all"><Facebook size={18} /></button>
                <button className="w-10 h-10 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/10 flex items-center justify-center text-[#FCFFFC] hover:bg-[#B1DC40] hover:text-[#131508] transition-all"><Twitter size={18} /></button>
                <button className="w-10 h-10 rounded-full bg-[#1C1E14] border border-[#FCFFFC]/10 flex items-center justify-center text-[#FCFFFC] hover:bg-[#B1DC40] hover:text-[#131508] transition-all"><Linkedin size={18} /></button>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-11">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-invert prose-lg max-w-none text-[#FCFFFC]/70 font-light leading-relaxed"
                >
                    {/* --- DYNAMIC CONTENT INJECTION --- */}
                    {post.content}

                    <div className="border-t border-[#FCFFFC]/10 pt-8 mt-12">
                         <h2 className="text-3xl font-bold text-[#FCFFFC] mb-4">Start Growing Your Business</h2>
                         <p className="mb-6">If you are a local business in Dubai looking to generate more leads and increase visibility, AdsPro can help you build a strong digital presence.</p>
                         
                         <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/971503265454" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-colors">
                                Chat on WhatsApp
                            </a>
                            <a href="https://adsprodxb.com/contact" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center bg-[#B1DC40] text-[#131508] px-8 py-3 rounded-full font-bold hover:bg-[#9cc430] transition-colors">
                                Contact Us
                            </a>
                         </div>
                    </div>
                </motion.div>

                {/* --- BACKLINK TO BLOGGER --- */}
                <div className="mt-16 pt-8 border-t border-[#FCFFFC]/10 flex flex-col items-center text-center">
                    <p className="text-[#FCFFFC]/40 text-sm mb-4">Originally published on our Blogspot</p>
                    <a 
                        href={post.backlink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#B1DC40] hover:text-white transition-colors text-sm font-medium border border-[#B1DC40]/30 px-4 py-2 rounded-lg hover:bg-[#B1DC40]/10"
                    >
                        Read on Blogger <ExternalLink size={14} />
                    </a>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};


export default BlogPost;
