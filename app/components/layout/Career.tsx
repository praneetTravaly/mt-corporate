"use client";

import React from "react";
import CareerCard from "../ui/CareerCard";

const Career = () => {
  return (
    <section className="w-full bg-[#EAE4D8] py-8">
      <div className="max-w-8xl mx-auto px-6 md:px-20">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Be Part Of Our Team
          </h2>
          <p className="text-gray-500 mt-2">Careers</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          <CareerCard
            title="Product Designer"
            description="We’re looking to hire a mid level product designer to join our team."
            remote="100 % remote"
            type="Full time"
          />

          <CareerCard
            title="Frontend Developer"
            description="We’re looking to hire a mid level frontend developer to join our team."
            remote="100 % remote"
            type="Full time"
          />

          <CareerCard
            title="Backend Engineer"
            description="We’re looking to hire a backend engineer to join our growing team."
            remote="Hybrid"
            type="Full time"
          />
        </div>
      </div>
    </section>
  );
};

export default Career;