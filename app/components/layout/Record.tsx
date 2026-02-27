"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const news = [
  { 
    id: 1, 
    title: "RAVELE", 
    subtitle: "the eternal appeal of the amalfi coast",
    time: "3 minutes read", 
    img: "/images/HotelExterior.jpg" 
  },
  { 
    id: 2, 
    title: "AMALHCOAST", 
    subtitle: "the eternal appeal of the amalfi coast",
    time: "3 minutes read", 
    img: "/images/HotelInterior.jpg" 
  },
  { 
    id: 3, 
    title: "CRISE", 
    subtitle: "find your next CRUISE",
    time: "3 minutes read", 
    img: "/images/HotelInterior.jpg" 
  },
  { 
    id: 4, 
    title: "NEWS1", 
    subtitle: "INDONESIA • SOUTH DAKOTA • JAPAN",
    time: "3 minutes read", 
    img: "/images/HotelInterior.jpg" 
  },
  { 
    id: 5, 
    title: "NEWS1", 
    subtitle: "Traveler",
    time: "3 minutes read", 
    img: "/images/HotelInterior.jpg" 
  },
];

const Record = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#F7F5F0] py-8 overflow-hidden">
      <div className="max-w-8xl mx-auto md:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 px-4 md:px-0"
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-semibold text-black"
          >
            On The Record
          </motion.h2>
          
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm md:text-base text-black/60"
          >
            Newsroom
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-0.5 bg-[#B08D57] mt-3 origin-left"
          />
        </motion.div>

        {/* Desktop (lg+) Layout: 50% + 2x2 Grid (50%) */}
        <div className="hidden lg:block px-4 md:px-0">
          <div className="flex gap-6">
            {/* Main Card (50%) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="w-1/2"
            >
              <RecordCard item={news[0]} large={true} />
            </motion.div>

            {/* Right 2x2 Grid (50%) */}
            <div className="w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {news.slice(1, 5).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className="h-full"
                  >
                    <RecordCard item={item} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile + Tablet: Swiper with proper settings */}
        <div className="lg:hidden px-0">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 16,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="!overflow-visible px-4"
          >
            {news.map((item, index) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="h-full pl-4"
                >
                  <RecordCard item={item} mobile={true} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const RecordCard = ({
  item,
  large = false,
  mobile = false,
}: {
  item: { title: string; subtitle?: string; time: string; img: string };
  large?: boolean;
  mobile?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(176, 141, 87, 0.25)",
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#B08D57] cursor-pointer group flex flex-col h-full"
    >
      {/* Image container - with zoom animation */}
      <div className={`relative w-full ${large ? 'h-[620px]' : mobile ? 'h-[200px] sm:h-[250px]' : 'h-[290px]'} overflow-hidden rounded-t-2xl`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image 
            src={item.img} 
            alt={item.title} 
            fill 
            className="object-cover transition-transform duration-300" 
          />
        </motion.div>
        
        {/* Decorative corner elements on hover */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-white rounded-tl-2xl z-10"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-white rounded-tr-2xl z-10"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-white rounded-bl-2xl z-10"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-white rounded-br-2xl z-10"
        />
      </div>

      {/* Meta - text below image */}
      <motion.div 
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="p-3 text-left flex-shrink-0"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <motion.p 
              whileHover={{ color: "#B08D57" }}
              className="font-bold text-black uppercase tracking-wide text-xs sm:text-sm"
            >
              {item.title}
            </motion.p>
            
            <motion.p 
              whileHover={{ x: 3 }}
              className="text-[8px] sm:text-[10px] text-black/60 flex items-center gap-1"
            >
              <span className="w-1 h-1 rounded-full bg-[#B08D57]" />
              {item.time}
            </motion.p>
          </div>
          
          {/* Subtitle - always visible below title and time */}
          {item.subtitle && (
            <motion.p 
              whileHover={{ color: "#B08D57", x: 2 }}
              className="text-[10px] sm:text-xs text-black/80 line-clamp-2"
            >
              {item.subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Record;