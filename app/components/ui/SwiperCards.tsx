"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "MyTravaly",
    desc: "The core travel platform connecting travellers with stays, experiences, and services across markets.",
  },
  {
    title: "Partner Network",
    desc: "Tools and infrastructure for hotels and partners to manage distribution and growth.",
  },
  {
    title: "Payments",
    desc: "Seamless cross-border payments for travel transactions.",
  },
  {
    title: "Data & Insights",
    desc: "Analytics and intelligence for smarter travel decisions.",
  },
  {
    title: "Experiences",
    desc: "Curated local experiences across destinations.",
  },
];

export default function InfiniteStack() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const getCard = (offset: number) => {
    const i = (index + offset + cards.length) % cards.length;
    return cards[i];
  };

  const clampIndex = (i: number) => {
    const len = cards.length;
    return ((i % len) + len) % len;
  };

  return (
    <div className="w-full flex flex-col items-center py-6 bg-[#F7F5F0]">
      {/* Card Swiper Section (UNCHANGED) */}
      <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px]">
        <AnimatePresence initial={false} custom={direction}>
          {[-1, 0, 1].map((offset) => {
            const card = getCard(offset);
            const isMain = offset === 0;

            return (
              <motion.div
                key={`${card.title}-${index + offset}`}
                className="absolute inset-0 bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between"
                drag={isMain ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (offset !== 0) return;

                  if (info.offset.x < -80) {
                    setDirection(1);
                    setIndex((i) => clampIndex(i + 1));
                  }

                  if (info.offset.x > 80) {
                    setDirection(-1);
                    setIndex((i) => clampIndex(i - 1));
                  }
                }}
                animate={{
                  x: offset * 35,
                  scale: offset === 0 ? 1 : 0.95,
                  opacity: offset === 0 ? 1 : 0.5,
                  zIndex: offset === 0 ? 20 : 10,
                }}
                initial={false}
                custom={direction}
                exit={{
                  x: offset === 0 ? direction * -200 : 0,
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 30 }}
              >
                {/* Card content */}
                <div className="w-full h-[150px] rounded-xl bg-[#FF6B4A] flex items-center justify-center text-white text-4xl font-bold">
                  MT
                </div>

                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm text-black/60 mt-2">{card.desc}</p>
                </div>

                <span className="text-sm text-[#B08D57] font-medium">
                  Learn more →
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dots Indicator (now in normal layout flow, below cards) */}
      <div className="mt-6 flex gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(clampIndex(i));
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#B08D57]" : "bg-[#B08D57]/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
