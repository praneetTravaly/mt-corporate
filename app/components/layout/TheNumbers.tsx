"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const sliderData = [
  {
    name: "Swoovo",
    logo: "/images/HotelInterior.jpg",
    revenue: "120 Crores",
    users: "50 K",
  },
  {
    name: "MyTravaly",
    logo: "/mytravaly-logo.svg",
    revenue: "80 Crores",
    users: "35 K",
  },
  {
    name: "Swoovo",
    logo: "/zopu-logo.svg",
    revenue: "40 Crores",
    users: "12 K",
  },
];

const TheNumbers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % sliderData.length);
  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));

  return (
    <section className="w-full bg-[#F7F5F0] py-8 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 md:px-20"
        >
          <motion.h6
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-normal text-black"
          >
            The Numbers
          </motion.h6>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm md:text-base text-black/60"
          >
            Finance
          </motion.p>

          {/* Animated underline with pulse effect */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-0.5 bg-[#B08D57] mt-3 origin-left relative overflow-hidden"
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* FY25 Card (exactly like Figma) */}
        <div className="px-4 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-8xl mx-auto w-full bg-white rounded-2xl sm:rounded-3xl border border-[#B08D57] shadow-sm p-4 sm:p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-0">
              {/* Left Text Section */}
              <div className="w-full sm:w-[35%] md:w-[40%]">
                <motion.p
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  className="text-3xl sm:text-4xl md:text-4xl font-medium text-black leading-tight"
                >
                  FY25
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
                  className="text-2xl sm:text-3xl md:text-4xl text-black/70 leading-tight"
                >
                  Annual report
                </motion.p>
              </div>

              {/* Right Stats Section */}
              <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-[65%] md:w-[60%]">
                {/* Revenue - Longest width */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                  className="relative bg-[#F7F5F0] rounded-r-full h-12 sm:h-14 md:h-16 lg:h-20 w-full shadow-md md:shadow-lg cursor-pointer transition-shadow duration-300"
                >
                  <div className="absolute left-0 top-0 h-full w-8 sm:w-9 md:w-10 bg-black/10 flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-medium md:font-semibold whitespace-nowrap rotate-270">
                      Revenue
                    </span>
                  </div>
                  <div className="font-medium text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl w-full h-full flex items-center justify-start pl-10 sm:pl-12 md:pl-16 lg:pl-20">
                    120 Crores
                  </div>
                </motion.div>

                {/* GBV - Medium width */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                  className="relative bg-[#F7F5F0] rounded-r-full h-12 sm:h-14 md:h-16 lg:h-20 w-[85%] sm:w-[88%] md:w-[84%] lg:w-[80%] shadow-md md:shadow-lg cursor-pointer transition-shadow duration-300"
                >
                  <div className="absolute left-0 top-0 h-full w-8 sm:w-9 md:w-10 bg-black/10 flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-medium md:font-semibold whitespace-nowrap rotate-270">
                      Gbv
                    </span>
                  </div>
                  <div className="font-medium text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl w-full h-full flex items-center justify-start pl-10 sm:pl-12 md:pl-16 lg:pl-20">
                    120 Crores
                  </div>
                </motion.div>

                {/* EBITDA - Shortest width */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                  className="relative bg-[#F7F5F0] rounded-r-full h-12 sm:h-14 md:h-16 lg:h-20 w-[70%] sm:w-[72%] md:w-[66%] lg:w-[60%] shadow-md md:shadow-lg cursor-pointer transition-shadow duration-300"
                >
                  <div className="absolute left-0 top-0 h-full w-8 sm:w-9 md:w-10 bg-black/10 flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-medium md:font-semibold whitespace-nowrap rotate-270">
                      EBITDA
                    </span>
                  </div>
                  <div className="font-medium text-sm sm:text-base md:text-xl lg:text-2xl xl:text-4xl w-full h-full flex items-center justify-start pl-10 sm:pl-12 md:pl-16 lg:pl-20">
                    120 Crores
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Slider */}
        <div className="hidden md:block px-4 md:px-20">
          <div className="relative max-w-8xl mx-auto w-full flex items-center justify-between">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1, backgroundColor: "#F7F5F0" }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white shadow items-center justify-center flex transition-colors duration-300"
            >
              ←
            </motion.button>

            <div className="overflow-hidden w-full max-w-5xl mx-6">
              <motion.div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {sliderData.map((item, i) => (
                  <div key={i} className="min-w-full flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="w-full bg-white rounded-3xl shadow-sm p-6 md:p-8 flex items-center gap-8 cursor-pointer transition-shadow duration-300 hover:shadow-lg"
                    >
                      <div className="flex flex-col items-center gap-2 min-w-[120px]">
                        <motion.div className="w-20 h-20 rounded-full border flex items-center justify-center overflow-hidden">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="object-cover"
                          />
                        </motion.div>
                        <motion.p
                          whileHover={{ color: "#B08D57" }}
                          className="font-medium text-3xl transition-colors duration-300"
                        >
                          {item.name}
                        </motion.p>
                      </div>

                      <div className="flex flex-col gap-3 w-full">
                        {/* Revenue pill - Same hover as FY25 cards */}
                        <motion.div
                          whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                          className="bg-[#F7F5F0] rounded-full shadow px-6 py-3 text-center cursor-pointer transition-shadow duration-300"
                        >
                          <p className="font-medium text-3xl">{item.revenue}</p>
                          <p className="text-lg text-black/60">Revenue</p>
                        </motion.div>

                        {/* Avg Users pill - Same hover as FY25 cards */}
                        <motion.div
                          whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                          className="bg-[#F7F5F0] rounded-full shadow px-6 py-3 text-center cursor-pointer transition-shadow duration-300"
                        >
                          <p className="font-medium text-3xl">{item.users}</p>
                          <p className="text-lg text-black/60">Avg Users</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1, backgroundColor: "#F7F5F0" }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white shadow items-center justify-center flex transition-colors duration-300"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden px-4">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {sliderData.map((item, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-sm p-6 flex items-center gap-6"
                >
                  <div className="flex flex-col items-center gap-2 min-w-[120px]">
                    <div className="w-14 h-14 rounded-full border flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <p className="font-medium">{item.name}</p>
                  </div>

                  <div className="flex flex-col gap-3 w-full">
                    {/* Revenue pill - Same hover as desktop */}
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                      className="bg-[#F7F5F0] rounded-full shadow px-6 py-3 text-center cursor-pointer transition-shadow duration-300"
                    >
                      <p className="font-medium">{item.revenue}</p>
                      <p className="text-xs text-black/60">Revenue</p>
                    </motion.div>

                    {/* Avg Users pill - Same hover as desktop */}
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                      className="bg-[#F7F5F0] rounded-full shadow px-6 py-3 text-center cursor-pointer transition-shadow duration-300"
                    >
                      <p className="font-medium">{item.users}</p>
                      <p className="text-xs text-black/60">Avg Users</p>
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Dots with animation */}
          <div className="flex justify-center gap-2 mt-6">
            {sliderData.map((_, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.8 }}
                animate={{
                  scale: activeIndex === i ? 1.2 : 0.8,
                  width: activeIndex === i ? 32 : 8,
                }}
                transition={{ duration: 0.3 }}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i ? "bg-[#B08D57]" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheNumbers;