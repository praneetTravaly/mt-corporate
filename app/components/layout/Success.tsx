"use client";

import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Free Signup", desc: "Create your account in minutes." },
  { id: 2, title: "Fill Details", desc: "Add photos and property info." },
  { id: 3, title: "Verification", desc: "Get verified by our team." },
  { id: 4, title: "Accept Bookings", desc: "Start earning immediately." },
];

const Success = () => {
  return (
    <section className="w-full bg-white py-4 md:py-10 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 md:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-2xl md:text-4xl font-semibold text-[#B08D57] mb-12 relative"
        >
          4 simple steps to success
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-[#B08D57] origin-center"
          />
        </motion.h2>

        {/* Desktop: Grid Diagonal */}
        <div className="hidden md:grid grid-cols-4 grid-rows-4 h-[400px] lg:h-[500px] xl:h-[600px]">
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="col-start-1 col-span-1 row-start-1 row-span-1 flex items-start justify-start"
          >
            <StepCard step={steps[0]} index={0} />
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="col-start-2 col-span-1 row-start-2 row-span-1 flex items-start justify-start"
          >
            <StepCard step={steps[1]} index={1} />
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="col-start-3 col-span-1 row-start-3 row-span-1 flex items-start justify-start"
          >
            <StepCard step={steps[2]} index={2} />
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="col-start-4 col-span-1 row-start-4 row-span-1 flex items-start justify-start"
          >
            <StepCard step={steps[3]} index={3} />
          </motion.div>
        </div>

        {/* Mobile: Vertical List */}
        <div className="md:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-start gap-4 cursor-pointer"
            >
              <motion.span 
                whileHover={{ scale: 1.2, color: "#B08D57" }}
                transition={{ duration: 0.2 }}
                className="text-4xl font-bold text-[#B08D57] leading-none"
              >
                {step.id}
              </motion.span>
              <div>
                <motion.h3 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-base font-semibold text-black"
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-black/70"
                >
                  {step.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({
  step,
  index,
}: {
  step: { id: number; title: string; desc: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(176, 141, 87, 0.2), 0 10px 10px -5px rgba(176, 141, 87, 0.1)",
        borderColor: "#B08D57",
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-2xl border border-[#B08D57] shadow-sm p-4 lg:p-5 xl:p-6 w-[200px] lg:w-[280px] xl:w-[320px] h-[100px] lg:h-[125px] xl:h-[150px] cursor-pointer transition-colors duration-200"
    >
      <div className="flex items-start gap-2 lg:gap-3 xl:gap-4">
        <motion.span 
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -5, 5, -2, 0],
            transition: { duration: 0.3 }
          }}
          className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#B08D57] leading-none"
        >
          {step.id}
        </motion.span>
        <div className="flex-1">
          <motion.h3 
            whileHover={{ color: "#B08D57" }}
            transition={{ duration: 0.2 }}
            className="text-sm lg:text-base xl:text-lg font-semibold text-black mb-0.5 lg:mb-1"
          >
            {step.title}
          </motion.h3>
          <motion.p 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="text-xs lg:text-sm xl:text-base text-black/70 leading-snug"
          >
            {step.desc}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Success;