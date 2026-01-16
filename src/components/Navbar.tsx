import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// UPDATED: Added 'BLOG' to the navigation links
const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT', path: '/contact' },
];

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const location = useLocation();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const difference = latest - lastYRef.current;
    
    if (latest < 50) {
      setIsAtTop(true);
      setIsHidden(false);
    } else {
      setIsAtTop(false);
      if (difference > 5) {
        setIsHidden(true);
      } else if (difference < -5) {
        setIsHidden(false);
      }
    }
    lastYRef.current = latest;
  });

  // Base styles for neumorphic buttons
  const baseNeuStyle = "relative flex items-center justify-center transition-all duration-300 ease-in-out rounded-2xl text-neu-text font-bold tracking-wide bg-neu-bg font-poppins";

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        initial="visible"
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300 ${
            isAtTop 
            ? 'py-6 bg-transparent' 
            : 'py-4 bg-neu-bg rounded-b-[50px]' 
        }`}
      >
        {/* --- Logo --- */}
        <Link to="/" className="relative z-10 flex items-center gap-0 group">
          <span 
            className={`text-3xl font-blackpast tracking-wide transition-colors duration-300 ${
              isAtTop ? 'text-white' : 'text-neu-text'
            }`}
          >
            adspro
          </span>
        </Link>

        {/* --- Desktop Links --- */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            const shadowClass = isActive 
                ? 'shadow-neu-inset text-brand-lime' 
                : isAtTop 
                    ? 'shadow-none text-neu-text hover:text-brand-lime'
                    : 'shadow-neu-outset hover:shadow-neu-inset hover:text-brand-lime';

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`${baseNeuStyle} px-6 py-3 text-sm ${shadowClass}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* --- Right Side: Phone Button --- */}
        <div className="hidden md:flex items-center">
            <a 
                href="tel:+971509285454"
                className={`${baseNeuStyle} gap-2 px-6 py-3 group ${
                    isAtTop 
                    ? 'shadow-none text-neu-text hover:text-brand-lime' 
                    : 'shadow-neu-outset hover:shadow-neu-inset text-neu-text hover:text-brand-lime'
                }`}
            >
                <Phone className="w-4 h-4 transition-colors" />
                <span>+971 50 928 5454</span>
            </a>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button 
            className={`md:hidden p-3 rounded-xl bg-neu-bg transition-all duration-300 ${
                isMobileMenuOpen 
                    ? 'shadow-neu-inset text-brand-lime' 
                    : isAtTop 
                        ? 'shadow-none text-neu-text'
                        : 'shadow-neu-outset text-neu-text'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="fixed top-[88px] left-0 right-0 bg-neu-bg z-40 overflow-hidden md:hidden shadow-lg border-t border-gray-100"
            >
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => {
                         const isActive = location.pathname === link.path;
                         return (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                className={`${baseNeuStyle} py-4 text-lg ${
                                    isActive ? 'shadow-neu-inset text-brand-lime' : 'shadow-neu-outset text-neu-text'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                    <div className="h-px bg-gray-200 w-full my-4" />
                    <a 
                        href="tel:+971509285454" 
                        className={`${baseNeuStyle} gap-3 py-4 shadow-neu-outset active:shadow-neu-inset text-neu-text hover:text-brand-lime`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Phone className="w-5 h-5" />
                        +971 50 928 5454
                    </a>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
