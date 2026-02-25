"use client";

import { motion } from "framer-motion";

const ForTheHosts = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 md:px-20 text-center">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10 text-left"
        >
          <h2 className="text-2xl md:text-3xl font-normal text-black">
            For The hosts
          </h2>
          <p className="text-sm md:text-base text-black/60">
            For Hoteliers
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-20 h-0.5 bg-[#B08D57] mt-3 origin-left"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-5xl font-normal text-black mb-4"
        >
          Get <span className="text-[#B08D57] italic font-semibold">Found</span>.{" "}
          Get{" "}
          <span className="text-[#B08D57] italic font-semibold">Booked</span>.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-black/70 leading-relaxed mb-8"
        >
          Millions of travelers are searching for hotels. Stand out from the
          crowd with a free host account. Join MyTravaly and start accepting
          direct reservations today.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="inline-flex items-center justify-center rounded-full border border-[#B08D57] px-8 py-2 text-sm md:text-base font-medium text-[#B08D57] hover:bg-[#B08D57]/10 transition"
        >
          Visit MyTravaly HSBC
        </motion.a>
      </div>
    </section>
  );
};

export default ForTheHosts;