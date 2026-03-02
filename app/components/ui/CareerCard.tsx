"use client";

import React from "react";

interface CareerCardProps {
  title: string;
  description: string;
  remote: string;
  type: string;
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  description,
  remote,
  type,
}) => {
  return (
    <div className="w-full bg-[#F4F1EA] border border-[#B08D57]/40 shadow-md rounded-3xl p-6 sm:p-8 transition-all hover:shadow-lg">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#9C7A47]">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-xl">
            {description}
          </p>
        </div>

        <a
          href="https://mytravaly.com/career"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B08D57] text-sm font-medium underline whitespace-nowrap"
        >
          Apply ↗
        </a>
      </div>

      {/* Bottom Tags */}
      <div className="flex flex-wrap gap-3 mt-6">
        <div className="border border-[#B08D57] text-[#9C7A47] text-sm px-4 py-2 rounded-full">
          {remote}
        </div>
        <div className="border border-[#B08D57] text-[#9C7A47] text-sm px-4 py-2 rounded-full">
          {type}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
