"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 1. Data Restructured exactly as requested into the 3 Pillars
const ecosystemPillars = [
  {
    id: "demand",
    number: 1,
    title: "Demand Infrastructure",
    cards: [
      {
        id: 1,
        slug: "mt-india",
        title: "MyTravaly",
        desc: "A global travel marketplace engineered for seamless discovery, secure payments, and intelligent booking experiences.",
        logo: "/images/Logo.png", 
      },
      {
        id: 4,
        slug: "swoovo",
        title: "Swoovo",
        desc: "An intelligent supply aggregation engine powering OTAs and travel enterprises with scalable, margin-optimized inventory.",
        logo: "/images/SwoovoIcon.png", 
      },
    ],
  },
  {
    id: "operational",
    number: 2,
    title: "Operational Intelligence",
    cards: [
      {
        id: 2,
        slug: "hbc",
        title: "HBC",
        desc: "AI-driven revenue intelligence and business optimization platform for modern hospitality operators.",
        logo: "/images/Logo.png", 
      },
      {
        id: 5,
        slug: "unified-pms",
        title: "Unified PMS",
        desc: "A cloud-native property management system built for operational precision and scalability.",
        logo: "/images/Logo.png", 
      },
    ],
  },
  {
    id: "distribution",
    number: 3,
    title: "Distribution & Revenue Infrastructure",
    cards: [
      {
        id: 3,
        slug: "stayconfirm",
        title: "Stayconfirm",
        desc: "Direct booking technology that transforms hotel websites into high-performance revenue channels.",
        logo: "/images/Logo.png", 
      },
      {
        id: 6,
        slug: "mt-global",
        title: "MT Global",
        desc: "A monetization infrastructure empowering travel creators and agents to build independent revenue businesses.",
        logo: "/images/Logo.png", 
      },
    ],
  },
];

export default function Ecosystem() {
  const router = useRouter();

  return (
    <section className="py-8 w-full bg-[#F7F5F0] px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= GENERAL INTRO HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20 max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-gray-900 leading-tight mb-6">
            One Platform. Multiple Growth Engines.
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed md:leading-loose">
            MyTravaly is not a booking company. It is a vertically integrated travel technology ecosystem — connecting demand, operations, distribution, and revenue intelligence into one unified global infrastructure. One architecture. Multiple growth engines. Compounding network effects.
          </p>
        </motion.div>

        {/* ================= MOBILE LAYOUT (Vertical Flow, Side-by-Side Cards) ================= */}
        <div className="md:hidden flex flex-col gap-10">
          {ecosystemPillars.map((pillar, pIdx) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: pIdx * 0.1 }}
              className="flex flex-col gap-4"
            >
              {/* Pillar Title */}
              <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                {pillar.title}
              </h3>

              {/* Mobile Cards (Side by side Logo & Content) */}
              <div className="flex flex-col gap-4">
                {pillar.cards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => window.open(`/products/${card.slug}`, "_blank")}
                    className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 flex gap-4 items-center cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    {/* Left: Large Expanded Logo */}
                    <div className={`w-24 h-24 rounded-2xl flex-shrink-0 flex items-center justify-center p-4 ${card.slug === 'mt-india' || card.slug === 'hbc' || card.slug === 'unified-pms' || card.slug === 'stayconfirm' || card.slug === 'mt-global' ? 'bg-[#FF6B5B]' : 'bg-gray-50 border border-gray-100'}`}>
                      <div className="relative w-full h-full">
                        {card.slug !== 'swoovo' ? (
                           <span className="text-white font-bold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">MT</span>
                        ) : (
                          <Image
                            src={card.logo}
                            alt={`${card.title} logo`}
                            fill
                            className="object-contain"
                          />
                        )}
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col flex-grow">
                      <h4 className="text-base font-bold text-gray-900 mb-1">{card.title}</h4>
                      <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed mb-2">
                        {card.desc}
                      </p>
                      <span className="text-xs font-semibold text-[#B08D57]">
                        Learn more &gt;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= DESKTOP LAYOUT (Numbered Pillars, Grid Cards) ================= */}
        <div className="hidden md:flex flex-col relative z-10">
          {ecosystemPillars.map((pillar, index) => (
            <motion.div 
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // mb-12 creates a 3rem (48px) gap between the rows
              className="flex items-stretch mb-12 last:mb-0 relative"
            >
              {/* Left Side: Number & Pillar Title */}
              {/* REMOVED pl-4 lg:pl-12 */}
              <div className="w-1/2 lg:w-1/3 flex items-center justify-start pr-6 relative z-10">
                
                {/* 🌟 ADJUSTED CONNECTING LINE 🌟 */}
                {/* MATH: 0 padding + Circle Radius (36px) = 36px. left-[36px]. */}
                {index !== ecosystemPillars.length - 1 && (
                  <div 
                    className="absolute top-1/2 w-4 bg-[#EBE2D2] -z-10 -translate-x-1/2 left-[36px]" 
                    style={{ height: 'calc(100% + 3rem)' }}
                  />
                )}

                {/* Number Circle */}
                <div className="w-[72px] h-[72px] rounded-full bg-[#B08D57] flex items-center justify-center text-white text-2xl font-semibold shrink-0 z-10 shadow-md">
                  {pillar.number}
                </div>
                
                {/* Pillar Title */}
                <h3 className="text-2xl lg:text-[26px] font-semibold text-gray-900 leading-tight ml-5 lg:ml-6">
                  {pillar.title}
                </h3>
              </div>

              {/* Right Side: 2 Cards Side-by-Side */}
              <div className="w-1/2 lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                {pillar.cards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => window.open(`/products/${card.slug}`, "_blank")}
                    className="bg-[#F6EFE5] rounded-[32px] p-8 flex flex-col h-full cursor-pointer hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl border border-[#EBE2D2]"
                  >
                    {/* Top: Logo & Title Row */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${card.slug !== 'swoovo' ? 'bg-[#FF6B5B]' : 'bg-white'}`}>
                        {card.slug !== 'swoovo' ? (
                          <span className="text-white font-bold text-2xl">MT</span>
                        ) : (
                          <div className="relative w-12 h-12">
                            <Image src={card.logo} alt="Logo" fill className="object-contain" />
                          </div>
                        )}
                      </div>
                      <h4 className="text-[22px] font-medium text-gray-900">
                        {card.title}
                      </h4>
                    </div>

                    {/* Middle: Description */}
                    <p className="text-[15px] text-gray-700 leading-relaxed mb-8 flex-grow">
                      {card.desc}
                    </p>

                    {/* Bottom: Link */}
                    <div className="text-sm font-semibold text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-colors mt-auto">
                      Learn more &gt;
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}