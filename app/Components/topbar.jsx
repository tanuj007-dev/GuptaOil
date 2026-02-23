"use client";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

export default function TopBar() {
  return (
    <div
      className={`${inter.className} relative w-full h-[40px] bg-[#D36327] overflow-hidden flex items-center`}
    >
      {/* Marquee Wrapper */}
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">

            {/* Item 1 */}
            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Limited Time Offer: Get 15% off on your first purchase!</span>
            </div>

            {/* Item 2 */}
            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Free shipping on orders above ₹999</span>
            </div>

            {/* Item 3 */}
            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Festive Sale: Up to 25% off on bestsellers</span>
            </div>

            {/* Item 4 */}
            <div className="mx-10 flex items-center gap-3 text-white text-[14px] font-semibold">
              <span className="w-2 h-2 bg-yellow-400 rotate-45 inline-block"></span>
              <span>Special discounts for repeat customers</span>
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