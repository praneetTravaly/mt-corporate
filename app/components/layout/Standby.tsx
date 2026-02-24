"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Standby() {
  const leftImageRef = useRef(null);
  const centerRef = useRef(null);
  const rightImageRef = useRef(null);
  
  const leftInView = useInView(leftImageRef, { once: true, amount: 0.3 });
  const centerInView = useInView(centerRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightImageRef, { once: true, amount: 0.3 });

  return (
    <section className="w-full bg-[#F7F5F0] py-4 md:py-8 overflow-hidden">
      <div className="">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 md:mb-12 p-4 md:px-20"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            The Stays We Stand By
          </h2>
          <p className="text-sm md:text-base text-black/60">Featured hotels</p>
          
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-0.5 bg-[#B08D57] mt-3 origin-left"
          />
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-[1fr_1.2fr_1fr] gap-8 items-stretch">
          {/* Left image - now matches height of center content */}
          <motion.div
            ref={leftImageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-tr-[40px] h-full min-h-[400px] group"
          >
            <Image
              src="/images/HotelInterior.jpg"
              alt="Hotel interior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            {/* Overlay on hover */}
            <motion.div 
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>

          {/* Center content - height determines row height */}
          <motion.div
            ref={centerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={centerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#F7F5F0] border border-[#B08D57]/40 rounded-3xl p-6 md:p-8 space-y-6 h-full flex flex-col justify-center"
          >
            <ContentBlock title="Premium Partners" index={0} />
            <ContentBlock title="Verified Stays" index={1} />
            <ContentBlock title="Partner stories" index={2} />
          </motion.div>

          {/* Right image - now matches height of center content */}
          <motion.div
            ref={rightImageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-bl-[40px] h-full min-h-[400px] group"
          >
            <Image
              src="/images/HotelExterior.jpg"
              alt="Hotel exterior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <motion.div 
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden space-y-8">
          <MobileBlock
            imageFirst
            rounded="tr"
            title="Premium Partners"
            imageSrc="/images/HotelInterior.jpg"
            index={0}
          />

          <MobileBlock
            rounded="bl"
            title="Verified Stays"
            imageSrc="/images/HotelExterior.jpg"
            index={1}
          />

          <MobileBlock
            imageFirst
            rounded="tr"
            title="Partner stories"
            imageSrc="/images/HotelInterior.jpg"
            index={2}
          />
        </div>
      </div>
    </section>
  );
}

function ContentBlock({ title, index }: { title: string; index: number }) {
  const blockRef = useRef(null);
  const inView = useInView(blockRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={blockRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ x: 5 }}
      className="group cursor-pointer"
    >
      <h3 className="text-base md:text-lg font-semibold text-black flex items-center">
        {title}
        {/* Small indicator dot */}
        <motion.span 
          className="ml-2 w-1.5 h-1.5 bg-[#B08D57] rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        />
      </h3>
      
      <p className="text-sm text-black/60 mt-2">
        Our premium partners represent a carefully selected group of hotels
        recognised for strong operational practices, consistent service
        standards, and aligned brand values.
      </p>
      
      <motion.span 
        className="mt-2 inline-flex items-center text-sm text-[#B08D57] font-medium group-hover:gap-2 transition-all duration-300"
        whileHover={{ x: 5 }}
      >
        Learn more
        <motion.span 
          className="ml-1"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: index * 0.3 }}
        >
          {">"}
        </motion.span>
      </motion.span>
      
      {/* Underline animation on hover */}
      <motion.div 
        className="h-0.5 bg-[#B08D57] mt-1"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function MobileBlock({
  imageFirst = false,
  rounded,
  title,
  imageSrc,
  index,
}: {
  imageFirst?: boolean;
  rounded: "tr" | "bl";
  title: string;
  imageSrc: string;
  index: number;
}) {
  const blockRef = useRef(null);
  const inView = useInView(blockRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={blockRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex gap-4 bg-[#F7F5F0] items-stretch min-h-[180px]"
    >
      {imageFirst && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`relative w-1/3 overflow-hidden ${
            rounded === "tr" ? "rounded-tr-[24px]" : "rounded-bl-[24px]"
          }`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div 
            className="absolute inset-0 bg-[#B08D57]/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}

      <motion.div 
        className="flex-1 border border-[#B08D57]/40 rounded-3xl p-4 mx-4"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <h3 className="text-base font-semibold text-black">{title}</h3>
        <p className="text-sm text-black/60 mt-2 line-clamp-4">
          Our premium partners represent a carefully selected group of hotels
          recognised for strong operational practices, consistent service
          standards, and aligned brand values.
        </p>
        <motion.span 
          className="mt-2 inline-flex items-center text-sm text-[#B08D57] font-medium"
          whileHover={{ x: 5 }}
        >
          Learn more →
        </motion.span>
      </motion.div>

      {!imageFirst && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`relative w-1/3 overflow-hidden ${
            rounded === "tr" ? "rounded-tr-[24px]" : "rounded-bl-[24px]"
          }`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div 
            className="absolute inset-0 bg-[#B08D57]/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}