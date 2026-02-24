"use client";

import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Main Smooth Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #E56514 0%,
              #C6541E 35%,
              #9A3E1A 60%,
              #5A1F12 80%,
              #000000 100%
            )
          `,
        }}
      />

      {/* Soft Bottom Blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      {/* Ultra Subtle Radial Rings - Hidden on small screens or scaled down */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] md:w-[1400px] md:h-[1400px] rounded-full border border-white/5 top-[-300px] md:top-[-900px] left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[800px] h-[800px] md:w-[1800px] md:h-[1800px] rounded-full border border-white/3 top-[-400px] md:top-[-1100px] left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 py-16 md:px-[76px] md:py-[40px] min-h-[320px] md:h-[378px] flex items-center justify-center text-center">
        <div className="max-w-[600px] w-full">
          
          <h2 className="text-white font-semibold text-2xl md:text-[36px] leading-tight md:leading-[42px]">
            From Our Kolhu to Your Kitchen
          </h2>

          <p className="mt-4 text-base md:text-[18px] font-medium text-white/90">
            Cold-pressed oils crafted with care, purity, and tradition.
          </p>

          <div className="mt-8 md:mt-10 flex justify-center">
            <button 
              aria-label="Shop Now"
              className="group w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#D36327] transition-all duration-300"
            >
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}