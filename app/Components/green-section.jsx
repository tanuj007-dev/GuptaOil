"use client";

import { ArrowUpRight } from "lucide-react";

export default function GreenSection() {
  return (
    <section className="w-full bg-[#F3F3F3] px-4 lg:px-12 py-10">
      <div className="relative w-full rounded-[24px] overflow-hidden min-h-[400px] md:min-h-0">
        
        {/* Background Image - Increased height on mobile to fit stacked content */}
        <img
          src="/images/green2.png"
          alt="Green Field"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay for readability (Added opacity to ensure text pops) */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Wrapper */}
        <div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row md:items-center justify-between min-h-[400px] md:h-[280px]">
          
          {/* Left Section: Icon + Heading */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 max-w-[1000px]">
            
            {/* ICON - Slightly smaller on mobile */}
            <div className="w-[70px] h-[70px] md:w-[110px] md:h-[110px] bg-[#E46A11] rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-8 h-8 md:w-[52px] md:h-[52px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 15c3 0 5 2 9 2s6-2 9-2" />
                <path d="M12 10v5" />
                <path d="M9 8c0-2 3-3 3-5 0 2 3 3 3 5 0 2-3 3-3 5 0-2-3-3-3-5z" />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-white font-semibold 
              text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] 
              leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-[55px] 
              tracking-[-0.5px] md:tracking-[-1px]">
              Pure wood-pressed oils crafted with tradition, honesty, and uncompromised quality.
            </h2>
          </div>

          {/* Button: Stays bottom-right on desktop, aligns naturally or stays bottom on mobile */}
          <div className="mt-auto md:mt-0 flex justify-end">
            <button className="bg-white text-[#E46A11] px-6 py-3 rounded-[30px] flex items-center gap-2 font-medium hover:bg-[#E46A11] hover:text-white transition whitespace-nowrap">
              All Products
              <ArrowUpRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}