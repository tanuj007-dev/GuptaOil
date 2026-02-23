"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[602px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/bannerherosection.webp"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Content Container */}
      <div className="relative z-20 min-h-[602px] flex items-center px-6 lg:px-[91px] py-16">

        <div className="max-w-[714px]">

          {/* Heading */}
          <h1 className="text-white text-[42px] md:text-[56px] lg:text-[72px] leading-[50px] md:leading-[64px] lg:leading-[84px] tracking-[-1px] font-semibold drop-shadow-[0_4px_74px_rgba(0,0,0,1)]">
            Pure. Wood-Pressed.
            <br />
            Traditionally Crafted.
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-white text-[16px] md:text-[18px] leading-[28px] md:leading-[32px] max-w-[560px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
            Experience 100% natural cold-pressed oils made using traditional{" "}
            <span className="font-bold">Kolhu methods</span> — unrefined,
            chemical-free, and rich in nutrition.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">

            <button className="flex items-center gap-3 px-6 h-[56px] rounded-full bg-white text-[#D36327] border border-[#D36327] text-[16px] font-medium hover:bg-[#D36327] hover:text-white transition">
              Shop Oils
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D36327] text-white">
                <ArrowUpRight size={18} />
              </span>
            </button>

            <button className="flex items-center gap-3 px-6 h-[56px] rounded-full bg-white/20 backdrop-blur-md text-white text-[16px] font-medium border border-white/30 hover:bg-white hover:text-black transition">
              Explore More
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white">
                <ArrowDown size={18} />
              </span>
            </button>

          </div>
        </div>
      </div>

      {/* Right Vertical Gallery */}
      <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-6">

        <div className="w-[70px] h-[70px] md:w-[84px] md:h-[84px] rounded-full border-4 border-white overflow-hidden cursor-pointer hover:scale-105 transition">
          <img
            src="/images/bannerherosection.webp"
            alt="Gallery 1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[70px] h-[70px] md:w-[84px] md:h-[84px] rounded-full border-4 border-white overflow-hidden cursor-pointer hover:scale-105 transition">
          <img
            src="/images/gallery2.webp"
            alt="Gallery 2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[70px] h-[70px] md:w-[84px] md:h-[84px] rounded-full border-4 border-white overflow-hidden cursor-pointer hover:scale-105 transition">
          <img
            src="/images/gallery3.webp"
            alt="Gallery 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Right Arrow (Image ke niche) */}
      <div className="absolute bottom-6 right-6 z-30">
        <div className="w-[56px] h-[56px] rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition">
          <ArrowDown size={20} />
        </div>
      </div>

    </section>
  );
}