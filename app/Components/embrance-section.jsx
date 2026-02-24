"use client";

import { Check } from "lucide-react";

export default function EmbraceSection() {
  const points = [
    "100% Wood-Pressed Extraction",
    "Chemical-Free & Unrefined Oils",
    "Authentic Aroma & Natural Taste",
    "Transparent & Honest Process",
    "Oils Trusted by Families",
  ];

  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/gallery2.webp"  // <-- apni background image yaha lagao
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-[48px] py-16">
        <div className="max-w-[760px]">

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] 
          font-semibold text-[#D36327] leading-tight">
            Where Tradition Meets True Purity
          </h2>

          {/* Paragraph */}
          <p className="mt-6 text-[14px] sm:text-[16px] md:text-[18px] 
          leading-[22px] md:leading-[24px] text-[#212121] max-w-[740px]">
            In a world full of refined, chemically processed oils, we stay committed to the slow,
            traditional wood-pressed Kolhu method. Every batch is extracted at low temperature
            to retain natural nutrients, strong aroma, and authentic taste — just the way our
            grandparents trusted it.
          </p>

          {/* Bullet Pills */}
          <div className="mt-8 flex flex-col gap-4 max-w-[360px]">

            {points.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#E46A11] 
                text-white px-5 py-3 rounded-full text-[14px] md:text-[16px] font-medium"
              >
                <Check size={18} />
                {item}
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}