"use client";

import {
  Droplet,
  Leaf,
  Sparkles,
  BookOpen,
  Package,
  Handshake,
} from "lucide-react";

export default function DetailSection() {
  const features = [
    {
      icon: Droplet,
      title: "100% Wood Pressed Oils",
      desc: "Slow-extracted using the traditional Kolhu method for maximum nutrition and authentic aroma.",
    },
    {
      icon: Leaf,
      title: "Multiple Pure Oil Varieties",
      desc: "A complete range of naturally extracted oils for cooking, wellness, and everyday health.",
    },
    {
      icon: Sparkles,
      title: "No Chemicals. No Refining.",
      desc: "Pure, unprocessed oils without additives, bleaching, or artificial treatment.",
    },
    {
      icon: BookOpen,
      title: "Rooted in Tradition Backed by Science",
      desc: "Time-tested wooden pressing techniques trusted by generations of Indian families.",
    },
    {
      icon: Package,
      title: "Eco-Friendly Packaging",
      desc: "Freshly packed in clean, controlled conditions to maintain purity and quality.",
    },
    {
      icon: Handshake,
      title: "Commitment to Integrity",
      desc: "Dedicated to honest sourcing, transparent processes, and uncompromised quality.",
    },
  ];

  return (
    <section className="w-full bg-[#F3F3F3] py-12 md:py-20 px-6">
      {/* Heading Container - Max width restricted for better readability */}
      <div className="text-center max-w-[800px] mx-auto">
        <h2 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#D36327] leading-tight">
          Preserving Purity. Honoring Tradition.
          <br className="hidden sm:block" />
          {" "}Nourishing Every Kitchen.
        </h2>

        <p className="mt-3 text-[14px] md:text-[16px] text-gray-700">
          Authentic traditional wood-pressed oils with uncompromised purity.
        </p>
      </div>

      {/* Feature Grid - Restricted max-width on desktop to prevent cards from being too wide */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-[#E46A11] rounded-[20px] 
              w-full 
              /* Mobile: Auto height with padding */
              min-h-[220px] py-8
              /* Desktop: Decreased from 280px to 240px */
              lg:h-[240px] lg:py-0
              flex flex-col items-center justify-center 
              text-center px-8 transition hover:scale-[1.02] shadow-md"
            >
              {/* Icon - Scaled down slightly */}
              <div className="mb-4">
                <Icon 
                  className="text-white w-[40px] h-[40px] lg:w-[48px] lg:h-[48px]" 
                  strokeWidth={1.5} 
                />
              </div>

              {/* Title - Decreased font size */}
              <h3 className="text-white text-[17px] md:text-[18px] lg:text-[19px] font-bold leading-tight">
                {item.title}
              </h3>

              {/* Description - Compacted text */}
              <p className="mt-2 text-white text-[13px] lg:text-[13.5px] leading-relaxed max-w-[240px] opacity-95">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}