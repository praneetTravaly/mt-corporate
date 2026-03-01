// components/layout/OtherBusinesses.tsx
'use client';

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { PRODUCTS, Product } from "@/app/constants/products"

interface OtherBusinessesProps {
  currentProductSlug: string;
}

export default function OtherBusinesses({ currentProductSlug }: OtherBusinessesProps) {
  // Filter out current product
  const otherProducts = PRODUCTS.filter(p => p.slug !== currentProductSlug);
  
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [screenSize, setScreenSize] = useState<"md" | "lg" | "xl">("xl");
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = otherProducts.length;

  const visibleMd = 3; // Show 3 cards on tablet
  const visibleLg = 4; // Show 4 on desktop
  const visibleXl = 5; // Show 5 on large desktop

  const maxStartMd = Math.max(0, total - visibleMd);
  const maxStartLg = Math.max(0, total - visibleLg);
  const maxStartXl = Math.max(0, total - visibleXl);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setScreenSize("xl");
      } else if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      } else {
        setScreenSize("md");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisible = (count: number) => {
    if (total <= count) return otherProducts;
    return otherProducts.slice(start, start + count);
  };

  const getMaxStart = () => {
    switch (screenSize) {
      case "md": return maxStartMd;
      case "lg": return maxStartLg;
      case "xl": return maxStartXl;
      default: return maxStartXl;
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

  // Animation variants
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
        x: { type: "spring", stiffness: 500, damping: 40, duration: 0.25 },
        opacity: { duration: 0.2, ease: "easeOut" },
        scale: { duration: 0.2, ease: "easeOut" },
        filter: { duration: 0.2, ease: "easeOut" },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring", stiffness: 500, damping: 40, duration: 0.2 },
        opacity: { duration: 0.15, ease: "easeOut" },
        scale: { duration: 0.15, ease: "easeOut" },
        filter: { duration: 0.15, ease: "easeOut" },
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
          <h2 className="text-2xl md:text-3xl font-normal text-black">
            Our other businesses
          </h2>
          <p className="text-sm md:text-base text-black/60">
            Explore more from our ecosystem
          </p>
        </motion.div>

        {/* Desktop arrows (only show if enough cards) */}
        {total > (screenSize === "md" ? visibleMd : screenSize === "lg" ? visibleLg : visibleXl) && (
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
        )}
      </div>

      {/* Mobile View - Swiper Cards Style */}
      <div className="md:hidden">
        <MobileOtherBusinesses products={otherProducts} />
      </div>

      {/* Desktop View - Carousel */}
      <div
        className="hidden md:block relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* md */}
        <div className="hidden md:block lg:hidden overflow-visible">
          <motion.div
            className="grid grid-cols-3 gap-6"
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
                  <Card product={item} index={index} isHovering={isHovering} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* lg */}
        <div className="hidden lg:block xl:hidden overflow-visible">
          <motion.div
            className="grid grid-cols-4 gap-6"
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
                  <Card product={item} index={index} isHovering={isHovering} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* xl */}
        <div className="hidden xl:block overflow-visible">
          <motion.div
            className="grid grid-cols-5 gap-6"
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
                  <Card product={item} index={index} isHovering={isHovering} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Mobile Version - Swiper Style
// Mobile Version - Swiper Style
function MobileOtherBusinesses({ products }: { products: Product[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const router = useRouter();

  const getCard = (offset: number) => {
    const i = (index + offset + products.length) % products.length;
    return products[i];
  };

  const clampIndex = (i: number) => {
    const len = products.length;
    return ((i % len) + len) % len;
  };

  if (products.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-[300px] h-[450px]">
        <AnimatePresence initial={false} custom={direction}>
          {[-1, 0, 1].map((offset) => {
            const product = getCard(offset);
            const isMain = offset === 0;
            // Calculate the actual index for each card
            const cardIndex = (index + offset + products.length) % products.length;

            return (
              <motion.div
                key={`${product.slug}-${index + offset}`}
                className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col justify-between"
                drag={isMain ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (offset !== 0) return;
                  if (info.offset.x < -80) {
                    setDirection(1);
                    setIndex((i) => clampIndex(i + 1));
                  }
                  if (info.offset.x > 80) {
                    setDirection(-1);
                    setIndex((i) => clampIndex(i - 1));
                  }
                }}
                animate={{
                  x: offset * 35,
                  scale: offset === 0 ? 1 : 0.95,
                  opacity: offset === 0 ? 1 : 0.5,
                  zIndex: offset === 0 ? 20 : 10,
                }}
                initial={false}
                custom={direction}
                exit={{
                  x: offset === 0 ? direction * -200 : 0,
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 30 }}
              >
                {/* Pass both product and index to CardContent */}
                <CardContent 
                  product={product} 
                  index={cardIndex} 
                  router={router}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(clampIndex(i));
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#B08D57]" : "bg-[#B08D57]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Reusable Card Component
function Card({ product, index, isHovering }: { product: Product; index: number; isHovering: boolean }) {
  const router = useRouter();
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <CardContent 
      product={product} 
      index={index} 
      isHovering={isHovering}
      isCardHovered={isCardHovered}
      setIsCardHovered={setIsCardHovered}
      router={router}
    />
  );
}

function CardContent({ 
  product, 
  index, 
  isHovering,
  isCardHovered,
  setIsCardHovered 
}: { 
  product: Product; 
  index: number; 
  isHovering?: boolean;
  isCardHovered?: boolean;
  setIsCardHovered?: (value: boolean) => void;
  router?: any;
}) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/products/${product.slug}`);
  };

  return (
    <motion.div
      onHoverStart={() => setIsCardHovered?.(true)}
      onHoverEnd={() => setIsCardHovered?.(false)}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.15 },
      }}
      className="bg-white rounded-2xl flex flex-col justify-between relative overflow-hidden group cursor-pointer p-5 border-2 border-[#B08D57]"
      onClick={handleClick} 
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
        className="w-full rounded-xl flex items-center justify-center text-white text-3xl font-bold relative overflow-hidden aspect-square"
        style={{ backgroundColor: product.logoBgColor }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.span
          className=""
          animate={{ scale: isCardHovered ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          {product.logoText}
        </motion.span>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isCardHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="mt-8 text-start min-h-[96px]"
        animate={{ y: isCardHovered ? -2 : 0 }}
        transition={{ duration: 0.15 }}
      >
        <h3 className="text-xl font-medium text-black">{product.title}</h3>
        <motion.p
          className="text-sm text-black/60 mt-2 line-clamp-5"
          animate={{ scale: isCardHovered ? 1.01 : 1 }}
          transition={{ duration: 0.15 }}
        >
          {product.heroDescription.substring(0, 100)}...
        </motion.p>
      </motion.div>

      {/* Learn more with animation */}
      <motion.span
        className="mt-4 text-sm text-[#B08D57] font-medium text-start relative inline-block"
        animate={{ x: isCardHovered ? 3 : 0 }}
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
          opacity: isCardHovered ? 0.15 : 0.1,
        }}
        transition={{ duration: 0.15 }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.div>
    </motion.div>
  );
}