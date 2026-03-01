'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  // Map nav items to section IDs based on your page.tsx structure
  const navItems = [
    { label: 'Brands', sectionId: 'brands' },
    { label: 'For Investors', sectionId: 'investors' },
    { label: 'For hoteliers', sectionId: 'hoteliers' },
    { label: 'For Travellers', sectionId: 'travellers' },
    { label: 'Newsroom', sectionId: 'newsroom' },
    { label: 'Contact Us', sectionId: 'contact' },
    { label: 'Careers', sectionId: 'careers' }
  ];

  // Smooth scroll function with 100px offset
  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Set active nav item
    setActiveNav(sectionId);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Stop 100px above the section
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: sectionTop - offset,
        behavior: 'smooth'
      });
      
      // Remove highlight after scrolling completes (approximate duration)
      setTimeout(() => {
        setActiveNav(null);
      }, 1000); // Match this with your scroll duration
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#F7F5F0] relative px-4 md:px-8 lg:px-12 pt-10 md:pt-14 lg:min-h-screen">
      <div className="max-w-8xl mx-auto relative h-full">
        {/* Floating Navigation - Half inside, half outside */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`bg-white shadow-md px-6 md:px-8 py-4 md:py-5 fixed left-1/2 -translate-x-1/2 top-4 md:top-6 w-[85%] z-50 ${
            isMenuOpen ? 'rounded-4xl' : 'rounded-full'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo - scrolls to top when clicked */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveNav(null);
                setIsMenuOpen(false);
              }}
            >
              <div className="bg-[#FF6B5B] w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg md:text-xl lg:text-2xl">MT</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.sectionId}`}
                  onClick={(e) => scrollToSection(item.sectionId, e)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className={`transition-all duration-150 text-xs md:text-sm xl:text-lg font-medium whitespace-nowrap relative ${
                    activeNav === item.sectionId 
                      ? 'text-[#FF6B5B]' 
                      : 'text-[#B08D57] hover:text-[#FF6B5B]'
                  }`}
                >
                  {item.label}
                  {/* Active indicator - underline */}
                  {activeNav === item.sectionId && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B5B]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button - Hamburger Icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-[#B08D57] transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#B08D57] transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#B08D57] transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="lg:hidden mt-4 pt-4 border-t border-gray-200"
            >
              <div className="flex flex-col gap-3 pb-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.sectionId}`}
                    onClick={(e) => scrollToSection(item.sectionId, e)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.02, ease: "easeOut" }}
                    className={`transition-all duration-150 text-sm font-medium py-1.5 relative ${
                      activeNav === item.sectionId
                        ? 'text-[#FF6B5B]'
                        : 'text-[#B08D57] hover:text-[#FF6B5B]'
                    }`}
                    whileHover={{ x: 5, transition: { duration: 0.15 } }}
                  >
                    {item.label}
                    {activeNav === item.sectionId && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#FF6B5B] rounded-full" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Main Content Section with rounded corners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#F1E9DB] h-full rounded-4xl md:rounded-[48px] relative overflow-hidden border-2 border-[#B08D57] mt-2"
        >
          {/* Hero Content Container */}
          <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 xl:py-28 lg:h-[85vh]">
            <div className="flex flex-col items-center justify-center text-center h-full">
              {/* Text Content */}
              <div className="max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-medium text-[#1A1A1A] leading-[1.1] mb-6 md:mb-8"
                >
                  MyTravaly is where travel becomes infrastructure.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  className="text-sm md:text-lg lg:text-xl text-[#5C5449] leading-relaxed max-w-3xl mx-auto"
                >
                  A connected platform enabling travellers, hospitality partners, and
                  businesses to operate, scale, and grow across markets.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;