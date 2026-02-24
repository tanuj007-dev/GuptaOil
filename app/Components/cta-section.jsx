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

      {/* Soft Bottom Blend (extra smooth fade) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      {/* Ultra Subtle Radial Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[1400px] h-[1400px] rounded-full border border-white/5 top-[-900px] left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[1800px] h-[1800px] rounded-full border border-white/3 top-[-1100px] left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto h-[378px] px-[76px] py-[40px] flex items-center justify-center text-center">

        <div className="max-w-[600px]">

          <h2 className="text-white font-semibold text-[36px] leading-[42px]">
            From Our Kolhu to Your Kitchen
          </h2>

          <p className="mt-4 text-[18px] font-medium text-white/90">
            Cold-pressed oils crafted with care, purity, and tradition.
          </p>

          <div className="mt-10 flex justify-center">
            <button className="w-[48px] h-[48px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#D36327] transition-all duration-300">
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}