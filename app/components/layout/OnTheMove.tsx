"use client";

import { motion } from "framer-motion";
import { FaTag, FaFileContract, FaBolt, FaExchangeAlt } from "react-icons/fa";

const features = [
  {
    title: "Pricing",
    desc: "No hidden costs. what you see is what you pay, with competitive rates globally.",
    icon: FaTag,
  },
  {
    title: "Policies",
    desc: "Plans change, Our flexible calculation and modification policies keep you agile.",
    icon: FaFileContract,
  },
  {
    title: "Power",
    desc: "A robust self service portal to manage every aspect of your travel inventory.",
    icon: FaBolt,
  },
  {
    title: "Payment",
    desc: "Pay in your preferred local currency to avoid exchange rate math.",
    icon: FaExchangeAlt,
  },
];

const OnTheMove = () => {
  return (
    <section className="w-full bg-[#F7F5F0] md:py-2 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 md:mb-12 p-4 md:px-20"
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-semibold text-black"
          >
            For Those On The Move
          </motion.h2>
          
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm md:text-base text-black/60"
          >
            For Travellers
          </motion.p>

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

        {/* Desktop Cards */}
        <div className="hidden md:grid grid-cols-4 gap-6 px-4 md:px-20">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.4, ease: "easeOut" }}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.2 },
                  boxShadow: "0 20px 25px -5px rgba(176, 141, 87, 0.1), 0 10px 10px -5px rgba(176, 141, 87, 0.04)"
                }}
                className="bg-white border border-[#B08D57] rounded-2xl shadow-sm p-6 flex flex-col gap-4 items-center cursor-pointer transition-shadow duration-200"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 rounded-full bg-[#B08D57] flex items-center justify-center text-white"
                >
                  <Icon className="text-lg" />
                </motion.div>

                <motion.h3 
                  whileHover={{ color: "#B08D57" }}
                  className="text-lg font-semibold text-black transition-colors duration-200"
                >
                  {item.title}
                </motion.h3>

                <motion.p 
                  whileHover={{ scale: 1.02 }}
                  className="text-sm text-black/70 leading-relaxed line-clamp-5 text-center"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile List */}
        <div className="md:hidden px-4 space-y-3">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3, ease: "easeOut" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-white/60 p-4 rounded-lg cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 20 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-full bg-[#B08D57] flex items-center justify-center text-white shrink-0"
                >
                  <Icon className="text-sm" />
                </motion.div>

                <div>
                  <h3 className="font-semibold text-black">{item.title}</h3>
                  <p className="text-sm text-black/70 leading-snug line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Built to Empower Today’s Traveller */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 px-4 md:px-20"
        >
          <div className="max-w-8xl mx-auto">
            <motion.div
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(176, 141, 87, 0.25)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12
                    md:border md:border-[#B08D57] md:rounded-3xl md:p-10"
            >
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col flex-1 items-center justify-center text-center"
              >
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="text-xl md:text-5xl font-semibold text-black mb-6"
                >
                  “Built to Empower Today’s Traveller”
                </motion.h3>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-sm md:text-base text-black/70 leading-relaxed"
                >
                  MyTravaly is a global travel technology platform designed to
                  deliver transparent pricing, flexible booking policies, and
                  end-to-end traveller control.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="text-sm md:text-base text-black/70 leading-relaxed"
                >
                  Travellers benefit from local-currency payments, verified
                  hotel inventory, free cancellation on eligible properties, and
                  a robust self-service portal for booking modifications,
                  cancellations, and refund tracking.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="text-sm md:text-base text-black/70 leading-relaxed mb-6"
                >
                  This is supported by dedicated human assistance to ensure
                  reliability at every stage of travel. MyTravaly combines
                  technology, trust, and operational support to create a
                  seamless booking experience.
                </motion.p>

                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#B08D57", color: "#FFFFFF" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center rounded-full border border-[#B08D57] px-6 py-2 text-sm font-medium text-[#B08D57] hover:bg-[#B08D57] hover:text-white transition-all duration-200"
                >
                  Visit MyTravaly
                </motion.button>
              </motion.div>

              {/* Brand Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  boxShadow: "0 20px 25px -5px rgba(176, 141, 87, 0.3)"
                }}
                className="hidden md:flex w-full md:w-[260px] h-[220px] md:h-[260px] rounded-2xl bg-[#FF7A66] items-center justify-center border md:border-[6px] md:border-[#B08D57] cursor-pointer transition-shadow duration-200"
              >
                <motion.span 
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-white text-5xl md:text-9xl font-bold"
                >
                  MT
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnTheMove;