"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const members = [
  {
    name: "team member 1",
    role: "Ceo",
    email: "Ceo@mytravaly.com",
    img: "/images/Ceo.png",
  },
  {
    name: "team member 1",
    role: "Ceo",
    email: "Ceo@mytravaly.com",
    img: "/images/Ceo.png",
  },
  {
    name: "team member 1",
    role: "Ceo",
    email: "Ceo@mytravaly.com",
    img: "/images/Ceo.png",
  },
  {
    name: "team member 1",
    role: "Ceo",
    email: "Ceo@mytravaly.com",
    img: "/images/Ceo.png",
  },
  {
    name: "team member 1",
    role: "Ceo",
    email: "Ceo@mytravaly.com",
    img: "/images/Ceo.png",
  },
  {
    name: "team member 1",
    role: "Ceo",
    email: "Ceo@mytravaly.com",
    img: "/images/Ceo.png",
  },
];

const Members = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F7F5F0] pt-12 overflow-hidden">
      {/* Rounded top container */}
      <div className="max-w-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#EDE6D8] rounded-t-[48px] pt-10 pb-16 px-6 md:px-20"
        >
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="mb-10"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-semibold text-black"
            >
              Who Made This Possible
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-lg text-black/60"
            >
              Our team
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="w-20 h-0.5 bg-[#B08D57] mt-3 origin-left"
            />
          </motion.div>

          {/* Members Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {members.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="flex flex-col items-center text-center group"
              >
                {/* Card with image */}
                <motion.div 
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white rounded-4xl shadow-sm w-full relative overflow-hidden cursor-pointer"
                >
                  {/* Image container */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full aspect-[1/1] rounded-4xl overflow-hidden"
                  >
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Overlay on hover */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-[#B08D57]"
                    />
                  </motion.div>

                  {/* Decorative corner elements */}
                  <motion.div 
                    animate={hoveredIndex === i ? { scale: 1.2, opacity: 0.8 } : { scale: 1, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#B08D57] rounded-tl-2xl"
                  />
                  <motion.div 
                    animate={hoveredIndex === i ? { scale: 1.2, opacity: 0.8 } : { scale: 1, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#B08D57] rounded-tr-2xl"
                  />
                  <motion.div 
                    animate={hoveredIndex === i ? { scale: 1.2, opacity: 0.8 } : { scale: 1, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#B08D57] rounded-bl-2xl"
                  />
                  <motion.div 
                    animate={hoveredIndex === i ? { scale: 1.2, opacity: 0.8 } : { scale: 1, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#B08D57] rounded-br-2xl"
                  />
                </motion.div>

                {/* Info with hover animations */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.3 }}
                  className="mt-3"
                >
                  <motion.p 
                    whileHover={{ 
                      color: "#B08D57",
                      x: 2,
                      transition: { duration: 0.2 }
                    }}
                    className="lg:text-2xl font-medium text-black cursor-pointer transition-colors duration-200"
                  >
                    {m.name}
                  </motion.p>
                  
                  <motion.p 
                    whileHover={{ 
                      color: "#B08D57",
                      x: 2,
                      transition: { duration: 0.2 }
                    }}
                    className="text-sm md:text-lg text-black/60 cursor-pointer transition-colors duration-200"
                  >
                    {m.role}
                  </motion.p>
                  
                  <motion.p 
                    whileHover={{ 
                      color: "#B08D57",
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className="text-sm md:text-lg text-black/60 underline cursor-pointer transition-colors duration-200"
                  >
                    {m.email}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Subtle background pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #B08D57 2px, transparent 2px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Members;