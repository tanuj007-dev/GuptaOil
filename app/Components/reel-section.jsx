"use client";

import { ArrowRight, Play } from "lucide-react";

export default function ReelSection() {
  const reels = [
    {
      title: "Pure Kolhu Oil",
      desc: "Traditional Wood Pressed Goodness",
      type: "image",
      src: "/images/reel1.png",
    },
    {
      title: "From Seed",
      desc: "From Seed To Bottle",
      type: "image",
      src: "/images/reel1.png",
    },
    {
      title: "No Chemicals",
      desc: "100% Natural Extraction Process",
      type: "image",
      src: "/images/reel1.png",
    },
    {
      title: "Kitchen Upgrade",
      desc: "Switch To Healthier Oils",
      type: "image",
      src: "/images/reel1.png",
    },
    {
      title: "Taste Difference",
      desc: "Experience Rich Aroma",
      type: "image",
      src: "/images/reel1.png",
    },
  ];

  return (
    <section className="w-full bg-[#F3F3F3] py-15">

      {/* Heading */}
      <div className="text-center max-w-[900px] mx-auto px-4">
        <h2 className="text-[34px] md:text-[48px] font-semibold text-[#D36327]">
          The Kolhu Chronicles
        </h2>
        <p className="mt-4 text-[16px] md:text-[18px] text-black">
          A glimpse into our sourcing, extraction, and packaging process — pure at every step.
        </p>
      </div>

      {/* Reel Cards */}
      <div className="mt-16 px-6">
        <div className="flex gap-9 overflow-x-auto scroll-smooth no-scrollbar">

          {reels.map((item, index) => (
            <div
              key={index}
              className="relative w-[260px] md:w-[288px] h-[400px] md:h-[450px] rounded-[12px] overflow-hidden flex-shrink-0 group cursor-pointer"
            >

              {/* Media */}
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}

              {/* Soft Bottom Gradient (Only 30%) */}
              <div className="absolute bottom-0 left-0 w-full h-[35%] bg-gradient-to-t from-[#E46A11]/90 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-16 text-white">
                <h4 className="text-[18px] font-semibold leading-[24px]">
                  {item.title}
                </h4>
                <p className="text-[14px] mt-1 opacity-90">
                  {item.desc}
                </p>
              </div>

              {/* Play Icon */}
              <div className="absolute bottom-6 right-6 w-[36px] h-[36px] rounded-full border border-white/70 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <Play size={14} className="text-white" />
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Show More (Right aligned like design) */}
      <div className="flex justify-end px-10 mt-12">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white text-black text-[15px] font-medium hover:border-[#D36327] hover:text-[#D36327] transition-all duration-300">
          Show More
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}