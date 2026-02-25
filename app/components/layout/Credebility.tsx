"use client";

import { motion } from "framer-motion";
import { FaTiktok, FaTumblr, FaDiscord, FaDribbble, FaRedditAlien } from "react-icons/fa";

const Credibility = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-4 md:py-6 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* Header with reveal animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-8 p-4 md:px-20"
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-normal text-black"
          >
            Credibility, On Record
          </motion.h2>
          
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm md:text-base text-black/60"
          >
            Awards & excellence
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

        {/* Icons Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between gap-6 px-4 md:px-32"
        >
          {/* TikTok Icon */}
          <motion.div
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -5, 0],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <FaTiktok className="text-4xl sm:text-7xl md:text-8xl text-black/90 hover:text-[#B08D57] transition-colors duration-300" />
          </motion.div>

          {/* Tumblr Icon */}
          <motion.div
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -5, 0],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <FaTumblr className="text-4xl sm:text-7xl md:text-8xl text-black/90 hover:text-[#B08D57] transition-colors duration-300" />
          </motion.div>

          {/* Discord Icon */}
          <motion.div
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -5, 0],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <FaDiscord className="text-4xl sm:text-7xl md:text-8xl text-black/90 hover:text-[#B08D57] transition-colors duration-300" />
          </motion.div>

          {/* Dribbble Icon */}
          <motion.div
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -5, 0],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <FaDribbble className="text-4xl sm:text-7xl md:text-8xl text-black/90 hover:text-[#B08D57] transition-colors duration-300" />
          </motion.div>

          {/* Reddit Icon */}
          <motion.div
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -5, 0],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <FaRedditAlien className="text-4xl sm:text-7xl md:text-8xl text-black/90 hover:text-[#B08D57] transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credibility;