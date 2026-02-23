"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Ceo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 px-4 md:px-20 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-[#B08D57]/5 rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0 bg-[#B08D57]/5 rounded-full animate-pulse delay-1000" style={{ animationDuration: '12s' }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Quote container with elegant styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#B08D57]/20 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#B08D57]/20 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#B08D57]/20 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#B08D57]/20 rounded-br-3xl" />

          {/* Quote content */}
          <div className="relative">
            {/* Opening quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-8 -left-4 text-8xl text-[#B08D57]/20 font-serif"
            >
              "
            </motion.div>

            {/* Quote text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed text-gray-800 text-center px-8 md:px-12"
            >
              <span className="relative">
                We didn't set out to build a product.
                <br />
                <span className="text-[#B08D57] font-medium">
                  We set out to build a system
                </span>
                <br />
                that travel could rely on
              </span>
            </motion.p>

            {/* Closing quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-16 -right-4 text-8xl text-[#B08D57]/20 font-serif"
            >
              "
            </motion.div>
          </div>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#B08D57] to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* CEO Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex flex-col items-center"
        >
          {/* Avatar with ring animation */}
          <div className="relative mb-4">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[#B08D57] rounded-full blur-lg"
            />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-[#B08D57] to-[#8B6F45] flex items-center justify-center">
                <span className="text-white text-2xl font-light">HR</span>
              </div>
            </div>
          </div>

          {/* Name and title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">
              Hamlet Roy
            </h3>
            <p className="text-sm md:text-base text-gray-500 flex items-center gap-2">
              <span className="w-8 h-px bg-gray-300" />
              Founder & CEO
              <span className="w-8 h-px bg-gray-300" />
            </p>
          </motion.div>

          {/* Signature line (optional) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-6 text-xs text-gray-400 italic"
          >
            — Building the future of travel —
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}