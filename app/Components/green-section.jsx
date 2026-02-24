"use client";

import { ArrowUpRight } from "lucide-react";

export default function GreenSection() {
  return (
    <section className="w-full bg-[#F3F3F3] px-4 lg:px-12 py-10">

      <div className="relative w-full rounded-[24px] overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/green2.png"
          alt="Green Field"
          className="w-full h-[260px] md:h-[280px] object-cover"
        />

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 " />

        {/* Content Wrapper */}
        <div className="absolute inset-0 px-6 md:px-12 flex items-center">

          {/* Left Section */}
          <div className="flex items-center gap-6 max-w-[1000px]">

            {/* ICON EXACT SIZE */}
            <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] bg-[#E46A11] rounded-full flex items-center justify-center shrink-0">

              {/* Custom SVG (Hand + Plant like Figma) */}
              <svg
                width="52"
                height="52"
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
              text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px]
              leading-[30px] sm:leading-[36px] md:leading-[44px] lg:leading-[55px]
              tracking-[-1px]">
              Pure wood-pressed oils crafted with tradition, honesty, and uncompromised quality.
            </h2>

          </div>

          {/* Button EXACT POSITION (Right Bottom) */}
          <div className="absolute right-8 md:right-12 bottom-8">

            <button className="bg-white text-[#E46A11] px-6 py-3 rounded-[30px] flex items-center gap-2 font-medium hover:bg-[#E46A11] hover:text-white transition">
              All Products
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}