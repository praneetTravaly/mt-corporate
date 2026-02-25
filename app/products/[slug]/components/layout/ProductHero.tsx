// components/layout/ProductHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/app/constants/products";

interface ProductHeroProps {
  product: Product;
}

const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
  return (
    <div className="bg-[#F7F5F0] relative px-4 md:px-8 lg:px-12 pt-10 md:pt-14">
      <div className="max-w-8xl mx-auto relative h-full">
        {/* Floating Navigation - Visit Website Button Only */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-md px-6 md:px-8 py-4 md:py-5 absolute left-1/2 -translate-x-1/2 -top-6 md:-top-8 w-[85%] z-10 rounded-full"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div
                className="rounded-lg w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: product.logoBgColor }}
              >
                <span className="text-white font-bold text-lg md:text-xl lg:text-2xl">
                  {product.logoText}
                </span>
              </div>
            </motion.div>

            {/* Visit Website Button */}
            <motion.a
              href={product.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#B08D57] text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors"
            >
              Visit Website
            </motion.a>
          </div>
        </motion.nav>

        {/* Main Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#F1E9DB] rounded-4xl md:rounded-[48px] relative overflow-hidden border-2 border-[#B08D57] mt-2"
        >
          {/* Hero Content */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-24 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1A1A1A] mb-4">
                  {product.heroTitle}
                </h1>
                <h2 className="text-xl md:text-2xl text-[#B08D57] mb-4">
                  {product.heroSubtitle}
                </h2>
                <p className="text-sm md:text-base text-[#5C5449] leading-relaxed">
                  {product.heroDescription}
                </p>

                {/* Features - Optional */}
                {product.features && (
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B5B]" />
                        <span className="text-sm text-[#5C5449]">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Right Content - Logo/Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-center lg:justify-end"
              >
                <div
                  className="w-48 h-48 md:w-64 md:h-64 rounded-3xl flex items-center justify-center shadow-2xl"
                  style={{ backgroundColor: product.logoBgColor }}
                >
                  <span className="text-white font-bold text-6xl md:text-7xl lg:text-8xl">
                    {product.logoText}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Download App Section - FIXED DESIGN */}
          <div className="relative m-5 bg-black/5 backdrop-blur-xl rounded-4xl overflow-hidden">
            {/* Main Content - With iPhone half visible */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left Content - Text and Buttons */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex-1 text-center lg:text-left pt-4"
                >
                  <h3 className="text-2xl md:text-5xl font-normal text-[#1A1A1A] mb-3">
                    Download The App Now
                  </h3>
                  <p className="text-lg md:text-xl text-[#5C5449] mb-8">
                    Book your dream vacation in minutes.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    {/* Google Play Button */}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors min-w-[200px]"
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <div>
                        <div className="text-xs">Get it on</div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                    </motion.a>

                    {/* App Store Button */}
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors min-w-[200px]"
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.49.87 3.27.87.78 0 2.25-1.07 3.79-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div>
                        <div className="text-xs">Download on the</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Right Content - iPhone with QR (Half Visible) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="flex-1 flex justify-center lg:justify-end relative"
                >
                  {/* iPhone Frame - Half visible from bottom */}
                  <div className="relative w-[280px] transform translate-y-20">
                    
                    {/* iPhone Body */}
                    <div className="relative w-[280px] h-[410px] bg-[#1A1A1A] rounded-[48px] border-[6px] border-gray-700 shadow-2xl overflow-hidden">
                      {/* Dynamic Island / Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-gray-800 rounded-b-xl z-20" />

                      {/* Screen */}
                      <div className="absolute inset-[6px] bg-white rounded-[40px] overflow-hidden">
                        {/* Screen Content - QR Code */}
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
                          {/* QR Code Placeholder */}
                          <div className="w-40 h-40 bg-white border-2 border-dashed border-[#B08D57] rounded-xl mb-4 flex items-center justify-center shadow-inner">
                            <span className="text-[#B08D57] text-sm font-medium">
                              QR Code
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Home Indicator (for older iPhones - decorative) */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gray-600 rounded-full" />
                    </div>
                    {/* Side Button (Volume - decorative) */}
                    <div className="absolute left-[-4px] top-24 w-[4px] h-10 bg-gray-700 rounded-l-lg" />
                    <div className="absolute left-[-4px] top-36 w-[4px] h-10 bg-gray-700 rounded-l-lg" />
                    {/* Side Button (Power - decorative) */}
                    <div className="absolute right-[-4px] top-32 w-[4px] h-12 bg-gray-700 rounded-r-lg" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductHero;
