"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SwiperCards from "../ui/SwiperCards";

const ecosystemCards = [
  { id: 1, title: "MT India", desc: "The core travel platform connecting travellers with stays, experiences, and services across markets." },
  { id: 2, title: "HBC", desc: "The core travel platform connecting travellers with stays, experiences, and services across markets." },
  { id: 3, title: "Stayconfirm", desc: "The core travel platform connecting travellers with stays, experiences, and services across markets." },
  { id: 4, title: "Swoovo", desc: "The core travel platform connecting travellers with stays, experiences, and services across markets." },
  { id: 5, title: "Unified PMS", desc: "The core travel platform connecting travellers with stays, experiences, and services across markets." },
  { id: 6, title: "MT Global", desc: "The core travel platform connecting travellers with stays, experiences, and services across markets." },
];

export default function Ecosystem() {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [screenSize, setScreenSize] = useState<'md' | 'lg' | 'xl'>('xl');
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = ecosystemCards.length;

  const visibleMd = 4;
  const visibleLg = 5;
  const visibleXl = 6;

  const maxStartMd = Math.max(0, total - visibleMd);
  const maxStartLg = Math.max(0, total - visibleLg);
  const maxStartXl = Math.max(0, total - visibleXl);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setScreenSize('xl');
      } else if (window.innerWidth >= 1024) {
        setScreenSize('lg');
      } else {
        setScreenSize('md');
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisible = (count: number) => {
    if (total <= count) return ecosystemCards;
    return ecosystemCards.slice(start, start + count);
  };

  const getMaxStart = () => {
    switch (screenSize) {
      case 'md':
        return maxStartMd;
      case 'lg':
        return maxStartLg;
      case 'xl':
        return maxStartXl;
      default:
        return maxStartXl;
    }
  };

  const next = () => {
    if (start < getMaxStart() && !isTransitioning) {
      setIsTransitioning(true);
      setDirection(1);
      setStart((s) => Math.min(s + 1, getMaxStart()));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prev = () => {
    if (start > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setDirection(-1);
      setStart((s) => Math.max(s - 1, 0));
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  // Fixed Hotstar-style animations with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { 
          type: "spring", 
          stiffness: 500, 
          damping: 40,
          duration: 0.25
        },
        opacity: { 
          duration: 0.2,
          ease: "easeOut"
        },
        scale: { 
          duration: 0.2,
          ease: "easeOut"
        },
        filter: { 
          duration: 0.2,
          ease: "easeOut"
        },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
      transition: {
        x: { 
          type: "spring", 
          stiffness: 500, 
          damping: 40,
          duration: 0.2
        },
        opacity: { 
          duration: 0.15,
          ease: "easeOut"
        },
        scale: { 
          duration: 0.15,
          ease: "easeOut"
        },
        filter: { 
          duration: 0.15,
          ease: "easeOut"
        },
      },
    }),
  };

  return (
    <section className="py-16 w-full bg-[#F7F5F0] px-4 md:px-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex items-start justify-between gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            All of Travel, Covered
          </h2>
          <p className="text-sm md:text-base text-black/60">
            Our ecosystem. One unified dashboard. Infinite growth potential.
          </p>
        </motion.div>

        {/* Desktop arrows with Hotstar-style hover effects */}
        <motion.div 
          className="hidden md:flex items-center gap-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={prev}
            disabled={start === 0 || isTransitioning}
            whileHover={start !== 0 && !isTransitioning ? { scale: 1.1, backgroundColor: "#B08D57", color: "#ffffff" } : {}}
            whileTap={start !== 0 && !isTransitioning ? { scale: 0.95 } : {}}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
              start === 0 || isTransitioning
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-[#B08D57] text-[#B08D57] hover:shadow-lg"
            }`}
          >
            <FaChevronLeft className="text-sm" />
          </motion.button>

          <motion.button
            onClick={next}
            disabled={start >= getMaxStart() || isTransitioning}
            whileHover={start < getMaxStart() && !isTransitioning ? { scale: 1.1, backgroundColor: "#B08D57", color: "#ffffff" } : {}}
            whileTap={start < getMaxStart() && !isTransitioning ? { scale: 0.95 } : {}}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
              start >= getMaxStart() || isTransitioning
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-[#B08D57] text-[#B08D57] hover:shadow-lg"
            }`}
          >
            <FaChevronRight className="text-sm" />
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <SwiperCards />
      </div>

      {/* Desktop Grid with Hotstar-style animations */}
      <div 
        className="hidden md:block relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >

        {/* md */}
        <div className="hidden md:block lg:hidden overflow-visible">
          <motion.div 
            className="grid grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisible(visibleMd).map((item, index) => (
                <motion.div
                  key={`${item.id}-${start}-${index}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                  className="relative"
                >
                  <Card item={item} index={index} isHovering={isHovering} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* lg */}
        <div className="hidden lg:block xl:hidden overflow-visible">
          <motion.div 
            className="grid grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisible(visibleLg).map((item, index) => (
                <motion.div
                  key={`${item.id}-${start}-${index}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                  className="relative"
                >
                  <Card item={item} index={index} isHovering={isHovering} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* xl */}
        <div className="hidden xl:block overflow-visible">
          <motion.div 
            className="grid grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisible(visibleXl).map((item, index) => (
                <motion.div
                  key={`${item.id}-${start}-${index}`}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                  className="relative"
                >
                  <Card item={item} index={index} isHovering={isHovering} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ item, index, isHovering }: { item: { id: number; title: string; desc: string }; index: number; isHovering: boolean }) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsCardHovered(true)}
      onHoverEnd={() => setIsCardHovered(false)}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.15 }
      }}
      className="bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between h-[340px] relative overflow-hidden group cursor-pointer"
    >
      {/* Hotstar-style hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#B08D57]/20 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isCardHovered ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      {/* Icon with animation */}
      <motion.div
        className="w-full h-[120px] rounded-xl bg-gradient-to-br from-[#FF6B4A] to-[#FF8A6A] flex items-center justify-center text-white text-3xl font-bold relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.span
          animate={{ 
            scale: isCardHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          MT
        </motion.span>
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isCardHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="mt-4 text-center min-h-[96px]"
        animate={{ y: isCardHovered ? -2 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <h3 className="text-base font-semibold text-black">{item.title}</h3>
        <motion.p 
          className="text-sm text-black/60 mt-2 line-clamp-5"
          animate={{ scale: isCardHovered ? 1.01 : 1 }}
          transition={{ duration: 0.15 }}
        >
          {item.desc}
        </motion.p>
      </motion.div>

      {/* Learn more with animation */}
      <motion.span 
        className="mt-4 text-sm text-[#B08D57] font-medium text-center relative inline-block"
        animate={{ 
          x: isCardHovered ? 3 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        Learn more 
        <motion.span
          animate={{ x: isCardHovered ? 2 : 0 }}
          transition={{ duration: 0.15 }}
          className="inline-block ml-1"
        >
          →
        </motion.span>
      </motion.span>

      {/* Index number (Hotstar style) */}
      <motion.div
        className="absolute top-2 left-2 text-4xl font-bold text-[#B08D57]/10"
        animate={{ 
          scale: isCardHovered ? 1.1 : 1,
          opacity: isCardHovered ? 0.15 : 0.1
        }}
        transition={{ duration: 0.15 }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>
    </motion.div>
  );
}