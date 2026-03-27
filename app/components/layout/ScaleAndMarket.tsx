"use client";

import { useMemo } from "react";
import { FaRegBuilding } from "react-icons/fa6";

type ScaleBlockProps = {
  isDarkTheme?: boolean;
  number: string;
  label: string;
};

const ScaleBlock = ({ isDarkTheme = false, number, label }: ScaleBlockProps) => {
  // Theme-specific classes to perfectly match the reference image
  const cardClasses = isDarkTheme
    ? "bg-[#1C1C1C] border border-[#B08D57]" // Dark theme: black bg, gold border
    : "bg-white border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.05)]"; // Light theme: white bg, soft shadow

  const iconCircleClasses = isDarkTheme
    ? "bg-white border-2 border-[#1C1C1C] text-[#1C1C1C]" // Dark theme card: white circle, black border, black icon
    : "bg-white border-2 border-[#B08D57] text-[#B08D57]"; // Light theme card: white circle, gold border, gold icon

  const numberColor = isDarkTheme
    ? "text-white"
    : "text-[#1C1C1C]";

  return (
    <div className={`rounded-2xl relative mt-6 transition-transform duration-300 hover:-translate-y-1 cursor-default ${cardClasses}`}>
      
      {/* 🌟 ICON CIRCLE - Positioned on the top edge, indented from the left 🌟 */}
      <div 
        className={`absolute top-0 left-6 -translate-y-1/2 rounded-full flex items-center justify-center w-14 h-14 ${iconCircleClasses}`}
      >
        <FaRegBuilding className="w-6 h-6" />
      </div>

      {/* Main Content Area */}
      <div className="pt-10 pb-5 md:pb-6 px-4 md:px-6 flex flex-col items-center lg:flex-row md:items-baseline gap-0.5 md:gap-2">
        <span className={`text-2xl font-bold tracking-tight ${numberColor}`}>
          {number}
        </span>
        <span className="text-xs md:text-base text-[#B08D57] font-medium leading-tight">
          {label}
        </span>
      </div>
      
    </div>
  );
};

export default function ScaleAndMarket() {
  // Data array mapped exactly to the alternating pattern from the design
  const cardData = useMemo(() => [
    { isDarkTheme: false, number: "10,000+", label: "Partner Hotels" },
    { isDarkTheme: true, number: "10,000+", label: "Partner Hotels" },
    { isDarkTheme: false, number: "10,000+", label: "Partner Hotels" },
    { isDarkTheme: true, number: "10,000+", label: "Partner Hotels" },
    { isDarkTheme: false, number: "10,000+", label: "Partner Hotels" },
    { isDarkTheme: true, number: "10,000+", label: "Partner Hotels" },
  ], []);

  return (
    <section className="py-8 bg-[#F7F5F0] px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= GENERAL INTRO HEADER ================= */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-[#1C1C1C] leading-tight mb-4">
            Scale & Market Position
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
            Technology that performs. Infrastructure that scales.
          </p>
        </div>

        {/* ================= SCALE BLOCKS GRID ================= */}
        {/* 2 columns on mobile, 3 columns on md/desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-6 md:gap-y-10">
          {cardData.map((card, index) => (
            <ScaleBlock 
              key={index}
              isDarkTheme={card.isDarkTheme}
              number={card.number}
              label={card.label}
            />
          ))}
        </div>

      </div>
    </section>
  );
}