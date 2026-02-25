"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-4 md:px-16 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Logo */}
        <div className="mb-8 md:hidden">
          <div className="w-10 h-10 rounded-lg bg-[#FF7A5A] flex items-center justify-center text-white font-bold">
            MT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="text-[#B08D57] text-lg md:text-xl font-medium mb-4">
              Our Businesses
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>My Travaly</li>
              <li>My Travaly</li>
              <li>My Travaly</li>
              <li>My Travaly</li>
              <li>My Travaly</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#B08D57] text-lg md:text-xl font-medium mb-4">
              About
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Investors</li>
              <li>Employees</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#B08D57] text-lg md:text-xl font-medium mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>+91 2345234522</li>
              <li>MyTravaly@gmail.com</li>
              <li>1, rd bangalore - 234556</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}