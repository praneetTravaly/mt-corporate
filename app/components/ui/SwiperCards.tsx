"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const cards = [
  {
    id: 1,
    slug: "mt-india",
    title: "MT India",
    desc: "A global travel marketplace engineered for seamless discovery, secure payments, and intelligent booking experiences.",
    logo: "images/Logo.png", // Update with actual path
  },
  {
    id: 2,
    slug: "hbc",
    title: "HBC",
    desc: "AI-driven revenue intelligence and business optimization platform for modern hospitality operators.",
    logo: "images/Logo.png", // Update with actual path
  },
  {
    id: 3,
    slug: "stayconfirm",
    title: "Stayconfirm",
    desc: "Direct booking technology that transforms hotel websites into high-performance revenue channels.",
    logo: "images/Logo.png", // Update with actual path
  },
  {
    id: 4,
    slug: "swoovo",
    title: "Swoovo",
    desc: "An intelligent supply aggregation engine powering OTAs and travel enterprises with scalable, margin-optimized inventory.",
    logo: "images/SwoovoIcon.png", // Update with actual path
  },
  {
    id: 5,
    slug: "unified-pms",
    title: "Unified PMS",
    desc: "A cloud-native property management system built for operational precision and scalability.",
    logo: "images/Logo.png", // Update with actual path
  },
  {
    id: 6,
    slug: "mt-global",
    title: "MT Global",
    desc: "A monetization infrastructure empowering travel creators and agents to build independent revenue businesses.",
    logo: "images/Logo.png", // Update with actual path
  },
];

export default function InfiniteStack() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const router = useRouter();

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
      {/* Card Swiper Section - Increased height to match ecosystem.tsx */}
      <div className="relative w-[280px] h-[450px] md:w-[320px] md:h-[450px]">
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
                {/* Card content - Square logo container using aspect-square */}
                <div
                  onClick={() =>
                    window.open(`/products/${card.slug}`, "_blank")
                  }
                  className="w-full aspect-square rounded-xl bg-white flex items-center justify-center cursor-pointer active:scale-[0.98] transition border border-gray-100"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={card.logo}
                      alt={`${card.title} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 150px"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-normal">{card.title}</h3>
                  <p className="text-sm text-black/60 mt-2 line-clamp-5">{card.desc}</p>
                </div>

                <span
                  onClick={() =>
                    window.open(`/products/${card.slug}`, "_blank")
                  }
                  className="text-sm text-[#B08D57] font-medium cursor-pointer"
                >
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