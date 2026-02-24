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
    <section className="w-full bg-[#F3F3F3] py-16 px-4 lg:px-12">

      {/* Heading */}
      <div className="text-center max-w-[900px] mx-auto">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#D36327] leading-tight">
          Preserving Purity. Honoring Tradition.
          <br className="hidden sm:block" />
          Nourishing Every Kitchen.
        </h2>

        <p className="mt-4 text-[14px] sm:text-[16px] md:text-[18px] text-black">
          Authentic traditional wood-pressed oils with uncompromised purity.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-[#E46A11] rounded-[24px] 
              w-full h-[260px] lg:h-[280px] 
              flex flex-col items-center justify-center 
              text-center px-6 transition hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="mb-6">
                <Icon size={60} strokeWidth={1.5} className="text-white" />
              </div>

              {/* Title */}
              <h3 className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-semibold leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-white text-[13px] md:text-[14px] leading-relaxed max-w-[280px]">
                {item.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}