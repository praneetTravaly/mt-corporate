"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const HealthCheck = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full bg-[#F7F5F0] py-4 md:py-10 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 md:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-semibold text-[#B08D57]"
          >
            HBC AI Business Health Check
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-sm md:text-lg text-[#B08D57]/80 p-2 md:p-4"
          >
            Use our proprietary AI engine to analyze your current metrics and
            receive a customized growth roadmap instantly.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-20 h-0.5 bg-[#B08D57] mx-auto origin-center"
          />
        </motion.div>

        {/* Form Container */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(176, 141, 87, 0.35)",
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-full max-w-xl bg-[#EDE6D8] rounded-3xl border border-[#B08D57] p-6 md:p-8"
          >

            {/* Form */}
            <form className="space-y-4">
              {/* Hotel Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
              >
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "#B08D57", boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)" }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  placeholder="HOTEL NAME"
                  className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                />
              </motion.div>

              {/* Two column row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                >
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#B08D57", boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)" }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="LOCATION"
                    className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                >
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#B08D57", boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)" }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="ROOMS"
                    className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                  />
                </motion.div>
              </div>

              {/* Two column row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}
                >
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#B08D57", boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)" }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="OCCUPANCY"
                    className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}
                >
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "#B08D57", boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)" }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="ADR"
                    className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                  />
                </motion.div>
              </div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
              >
                <motion.textarea
                  whileFocus={{ scale: 1.01, borderColor: "#B08D57", boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)" }}
                  transition={{ duration: 0.2 }}
                  placeholder="CHALLENGES"
                  rows={4}
                  className="w-full rounded-2xl border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 resize-none focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                />
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45, ease: "easeOut" }}
                className="flex justify-center pt-2"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(176, 141, 87, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  className="rounded-full bg-[#B08D57] px-6 py-2 text-sm font-medium text-white hover:bg-[#9e7d4e] transition-all duration-200"
                >
                  Analyze my business
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthCheck;