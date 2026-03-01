// components/layout/ProductHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/app/constants/products";
import Image from "next/image";

interface ProductHeroProps {
  product: Product;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  return (
    <div className="bg-[#F7F5F0] relative px-4 md:px-8 lg:px-12 h-screen pt-12">
      <div className="max-w-8xl mx-auto relative h-full">
        {/* Main Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-4xl md:rounded-[48px] overflow-hidden border-2 border-[#B08D57] mt-2 h-[calc(100vh-80px)]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Hero.jpg"
              alt="Hotel interior"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Hero Content - Centered horizontally */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16 h-full flex flex-col">
            {/* Centered Title and Description */}
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-4xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-3 md:mb-4">
                  {product.heroTitle}
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto px-2">
                  {product.heroDescription}
                </p>
              </motion.div>
            </div>

            {/* Download App Section - iPhone half visible at bottom */}
            <div className="relative mb-2 bg-white/30 backdrop-blur-xs rounded-3xl md:rounded-4xl overflow-hidden">
              {/* Main Content */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4">
                  {/* Left Content - Text and Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex-1 text-center lg:text-left md:px-10"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-5xl font-normal text-white mb-1">
                      Download The App Now
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/90 mb-2 sm:mb-3">
                      Book your dream vacation in minutes.
                    </p>

                    {/* Buttons - Always in row on all devices */}
                    <div className="flex flex-row gap-2 justify-center lg:justify-start">
                      {/* Google Play Button */}
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg md:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-gray-900 transition-colors min-w-[130px] sm:min-w-[150px] md:min-w-[160px]"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div>
                          <div className="text-[10px] sm:text-xs">Get it on</div>
                          <div className="text-[10px] sm:text-xs font-semibold">Google Play</div>
                        </div>
                      </motion.a>

                      {/* App Store Button */}
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg md:rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-gray-900 transition-colors min-w-[130px] sm:min-w-[150px] md:min-w-[160px]"
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.49.87 3.27.87.78 0 2.25-1.07 3.79-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <div>
                          <div className="text-[10px] sm:text-xs">Get it on</div>
                          <div className="text-[10px] sm:text-xs font-semibold">App Store</div>
                        </div>
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Right Content - iPhone with QR (Half visible at bottom) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex justify-center lg:justify-end relative px-10"
                  >
                    {/* iPhone Frame - Half visible from bottom */}
                    <div className="relative w-[160px] sm:w-[160px] md:w-[180px] lg:w-[200px] transform translate-y-8 sm:translate-y-10 md:translate-y-12">
                      {/* iPhone Body - Only top half visible */}
                      <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] bg-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[48px] border-t-4 border-l-4 border-r-4 border-gray-700 shadow-2xl overflow-hidden">
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-18 md:w-20 h-5 sm:h-6 bg-gray-800 rounded-b-xl z-20" />

                        {/* Screen */}
                        <div className="absolute inset-x-[4px] top-[4px] bottom-0 bg-white rounded-t-[32px] sm:rounded-t-[36px] md:rounded-t-[40px] overflow-hidden">
                          {/* Screen Content - QR Code */}
                          <div className="w-full h-full flex flex-col items-center justify-start pt-4 sm:pt-6 md:pt-8 bg-gradient-to-b from-gray-50 to-gray-100">
                            {/* QR Code Placeholder */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white border-2 border-dashed border-[#B08D57] rounded-lg sm:rounded-xl flex items-center justify-center shadow-inner mt-10">
                              <span className="text-[#B08D57] text-[10px] sm:text-xs font-medium">
                                QR Code
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductHero;