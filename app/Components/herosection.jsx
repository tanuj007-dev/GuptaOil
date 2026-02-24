"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function HeroSection() {

  const [showGallery, setShowGallery] = useState(true);

  return (
    <section className="relative w-full min-h-[602px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/bannerherosection.webp"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Mobile Overlay Only */}
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:hidden"></div>

      {/* Content Container */}
      <div className="relative z-20 min-h-[602px] flex items-center px-5 md:px-6 lg:px-[91px] py-14 md:py-16">

        <div className="max-w-[714px] w-full">

          {/* Mobile Glass Wrapper (desktop unaffected) */}
          <div className=" md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none">

            {/* Heading */}
            <h1 className="text-white text-[34px] sm:text-[38px] md:text-[56px] lg:text-[72px] leading-[42px] sm:leading-[46px] md:leading-[64px] lg:leading-[84px] tracking-[-1px] font-semibold drop-shadow-[0_4px_74px_rgba(0,0,0,1)]">
              Pure. Wood-Pressed.
              <br />
              Traditionally Crafted.
            </h1>

            {/* Paragraph */}
            <p className="mt-5 md:mt-6 text-white text-[15px] sm:text-[16px] md:text-[18px] leading-[26px] sm:leading-[28px] md:leading-[32px] max-w-[560px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">
              Experience 100% natural cold-pressed oils made using traditional{" "}
              <span className="font-bold">Kolhu methods</span> — unrefined,
              chemical-free, and rich in nutrition.
            </p>

            {/* Buttons */}
            <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-4 w-full">

              <button className="w-full sm:w-auto justify-center flex items-center gap-3 px-6 h-[52px] md:h-[56px] rounded-full bg-white text-[#D36327] border border-[#D36327] text-[15px] md:text-[16px] font-medium hover:bg-[#D36327] hover:text-white transition">
                Shop Oils
                <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#D36327] text-white">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <button className="w-full sm:w-auto justify-center flex items-center gap-3 px-6 h-[52px] md:h-[56px] rounded-full bg-white/20 backdrop-blur-md text-white text-[15px] md:text-[16px] font-medium border border-white/30 hover:bg-white hover:text-black transition">
                Explore More
                <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-white">
                  <ArrowDown size={16} />
                </span>
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Right Vertical Gallery (Desktop Only - Untouched Layout) */}
      <div
        className={`absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-6 transition-all duration-500 ${
          showGallery
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-8 pointer-events-none"
        }`}
      >

        {[
          "/images/bannerherosection.webp",
          "/images/gallery2.webp",
          "/images/gallery3.webp",
        ].map((img, index) => (
          <div
            key={index}
            className="relative w-[70px] h-[70px] md:w-[84px] md:h-[84px] group"
          >
            <div className="absolute inset-[-8px] rounded-full backdrop-blur-md bg-white/15"></div>
            <div className="absolute inset-[-8px] rounded-full border-2 border-white/60"></div>
            <div className="absolute inset-[-3px] rounded-full border-[3px] border-white"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden cursor-pointer hover:scale-105 transition">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}

      </div>

      {/* Bottom Right Arrow (Same Desktop Position) */}
      <div className="absolute bottom-5 md:bottom-6 right-5 md:right-6 z-30">
        <div
          onClick={() => setShowGallery(!showGallery)}
          className="w-[50px] h-[50px] md:w-[56px] md:h-[56px] rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition"
        >
          <ArrowDown
            size={18}
            className={`transition-transform duration-300 ${
              showGallery ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>

    </section>
  );
}