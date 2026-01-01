import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, ArrowRight, Send, Phone, Globe, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SlideText from './SlideText'; 

// Custom TikTok Icon Component (since it's not always available in standard libraries)
const TikTokIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#131508] text-[#FCFFFC] font-archivo pt-20 pb-10 overflow-hidden">
      
      {/* --- TOP SECTION: Header & CTA --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* Animated Headline */}
          <div className="max-w-2xl">
            <SlideText className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-[#FCFFFC]">
              Let’s <span className="text-[#B1DC40]">Connect</span> there
            </SlideText>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact" 
              className="group flex items-center bg-[#B1DC40] rounded-full pl-8 pr-2 py-2 transition-all duration-300 hover:bg-[#a3cc35]"
            >
              <span className="text-[#131508] font-bold text-lg mr-6">Contact Us Now</span>
              <div className="w-12 h-12 bg-[#131508] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
                <ArrowRight className="text-[#FCFFFC] w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* --- SEPARATOR LINE --- */}
      <div className="w-full h-[1px] bg-[#FCFFFC]/10 mb-16" />

      {/* --- MAIN GRID SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              {/* Optional: 'A' Icon - can remove if you only want the text logo */}
              <div className="w-10 h-10 bg-[#B1DC40] rounded-full flex items-center justify-center text-[#131508] font-bold text-xl">
                A
              </div>
              {/* UPDATED: Custom Font Blackpast */}
              <h3 className="text-2xl font-blackpast tracking-wide">Ads Pro.</h3>
            </div>
            {/* UPDATED: Description */}
            <p className="text-[#FCFFFC]/60 leading-relaxed text-sm pr-4">
              We provide high-quality design, printing, branding, automation, and digital services for supermarkets, restaurants, retail businesses, and growing brands across the UAE.
            </p>
            {/* UPDATED: Social Icons (Insta, FB, TikTok, YT) */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[#B1DC40] flex items-center justify-center text-[#131508] hover:bg-[#FCFFFC] transition-colors duration-300"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#B1DC40] flex items-center justify-center text-[#131508] hover:bg-[#FCFFFC] transition-colors duration-300"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#B1DC40] flex items-center justify-center text-[#131508] hover:bg-[#FCFFFC] transition-colors duration-300"><TikTokIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#B1DC40] flex items-center justify-center text-[#131508] hover:bg-[#FCFFFC] transition-colors duration-300"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-[#B1DC40] font-bold text-lg mb-8">Navigation</h4>
            <ul className="space-y-4">
              {/* UPDATED: Links list */}
              {['Home', 'Services', 'About Us', 'Projects', 'Contact', 'FAQs'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[#FCFFFC]/70 hover:text-[#B1DC40] transition-colors text-sm font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact (UAE Details) */}
          <div>
            <h4 className="text-[#B1DC40] font-bold text-lg mb-8">Contact</h4>
            <ul className="space-y-4 text-[#FCFFFC]/70 text-sm font-medium">
              <li>
                <a href="tel:+97150509285454" className="flex items-center gap-3 hover:text-[#B1DC40] transition-colors">
                  <Phone size={16} className="text-[#B1DC40]" />
                  +971 50 928 5454
                </a>
              </li>
              <li>
                <a href="https://www.adspro.ae" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-[#B1DC40] transition-colors">
                   <Globe size={16} className="text-[#B1DC40]" />
                   www.adsprodxb.com
                </a>
              </li>
              <li>
                <a href="mailto:info@adspro.ae" className="flex items-center gap-3 hover:text-[#B1DC40] transition-colors">
                   <Mail size={16} className="text-[#B1DC40]" />
                   info@adsprodxb.com
                </a>
              </li>
              <li className="flex items-start gap-3 leading-relaxed pt-2">
                <MapPin size={16} className="text-[#B1DC40] mt-1 flex-shrink-0" />
                <span>
                  AdsPro Creative Hub<br />
                  Dubai,<br />
                  United Arab Emirates
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            {/* UPDATED: Header */}
            <h4 className="text-[#B1DC40] font-bold text-lg mb-4">Get the latest updates</h4>
            {/* UPDATED: Subtext */}
            <p className="text-[#FCFFFC]/60 text-sm mb-6 leading-relaxed">
              Stay connected with our latest projects, designs, and digital innovations. Join our mailing list for updates.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full h-14 bg-[#1C1E14] rounded-full pl-6 pr-14 text-sm text-[#FCFFFC] placeholder-[#FCFFFC]/30 border border-transparent focus:border-[#B1DC40]/50 focus:outline-none transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-[#B1DC40] rounded-full flex items-center justify-center text-[#131508] hover:scale-105 transition-transform"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 border-t border-[#FCFFFC]/10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-[#FCFFFC]/40 font-medium">
        <p className="mb-4 md:mb-0">
          Copyright © 2024 <span className="text-[#B1DC40]">Ads Pro.</span> All Rights Reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/terms" className="hover:text-[#FCFFFC] transition-colors">User Terms & Conditions</Link>
          <span>|</span>
          <Link to="/privacy" className="hover:text-[#FCFFFC] transition-colors">Privacy Policy</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
