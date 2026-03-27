"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Ceo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-black py-16 md:py-24 px-4 md:px-20 relative overflow-hidden">
      {/* Subtle animated background pattern (kept for depth, but made very dark) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div
            className="absolute inset-0 bg-[#B08D57]/5 rounded-full animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Quote container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative px-6 md:px-12 text-center"
        >
          {/* Quote text wrapper */}
          <div className="relative inline-block">
            {/* Opening quote */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-4 -left-6 md:-left-12 text-5xl md:text-7xl font-serif text-[#B08D57]"
            >
              “
            </motion.span>

            <h3 className="text-2xl md:text-4xl lg:text-[42px] font-medium leading-snug md:leading-tight text-[#B08D57]">
              We didn’t set out to build a product. We built the infrastructure travel could depend on.
            </h3>

            {/* Closing quote */}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 md:-bottom-12 -right-4 md:-right-10 text-5xl md:text-7xl font-serif text-[#B08D57]"
            >
              ”
            </motion.span>
          </div>
        </motion.div>

        {/* CEO Profile - Row Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-row items-center justify-center gap-4 md:gap-5"
        >
          {/* Avatar (Removed the white ring to match the image) */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-300 shrink-0">
            <Image
              src="/images/Ceo.png"
              alt="Hamlet Roy, Founder & CEO"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Name and title stacked side-by-side with avatar */}
          <div className="flex flex-col text-left">
            <h3 className="text-xl md:text-[22px] font-medium text-white tracking-wide">
              Hamlet Roy
            </h3>
            <p className="text-sm md:text-base text-gray-400 mt-0.5">
              Founder & CEO
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}