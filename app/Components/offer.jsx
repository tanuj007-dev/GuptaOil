"use client";

export default function Offer() {
  return (
    <div className="relative w-full h-[40px] bg-[#D36327] overflow-hidden flex items-center">

      {/* Marquee Wrapper */}
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">

        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">

            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>100% natural ingredients</span>
            </div>

            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Wide Product Range</span>
            </div>

            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Pure, Natural Ingredients</span>
            </div>

            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Handcrafted Quality</span>
            </div>

            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Eco-Friendly Practices</span>
            </div>

            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Trusted and Safe</span>
            </div>

          </div>
        ))}

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}