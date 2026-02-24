"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

export default function HealthySwitch() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    // Adjusted for a more fluid scroll
    const scrollAmount = sliderRef.current.offsetWidth / 2;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const products = Array(8).fill({
    title: "Black Premium Pure Cold Pressed Mustard Oil",
    price: "INR 3,299",
    oldPrice: "INR 3,599",
    image: "/images/product1.png",
  });

  return (
    <section className="w-full bg-[#F3F3F3] py-16 px-4 lg:px-12">

      {/* Heading */}
      <div className="text-center max-w-[900px] mx-auto">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#D36327]">
          Make the Healthy Switch
        </h2>
        <p className="mt-4 text-[14px] sm:text-[16px] md:text-[18px] text-black">
          Shop 100% wood-pressed oils crafted for purity, taste, and everyday nutrition.
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="mt-12 relative group">

        {/* MODERN CONTROLLERS (Floating) */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-[#D36327] hover:bg-[#D36327] hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center text-[#D36327] hover:bg-[#D36327] hover:text-white transition-all opacity-0 group-hover:opacity-100 hidden lg:flex"
        >
          <ChevronRight size={24} />
        </button>

        {/* Cards Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-xl border border-gray-200 p-4"
            >
              {/* Image Box - HEIGHT INCREASED & OBJECT-COVER APPLIED */}
              <div className="relative bg-[#ECECEC] rounded-lg h-[340px] flex items-center justify-center overflow-hidden">

                <span className="absolute top-3 left-3 bg-white text-[#D36327] text-xs px-3 py-1 rounded-full z-10 shadow-sm">
                  Mustard
                </span>

                <span className="absolute top-0 right-0 bg-[#16A34A] text-white text-[11px] font-bold px-4 py-2 rounded-bl-2xl z-10">
                  Sale 70% off
                </span>

                {/* THE FIX: object-cover fills the space, h-full/w-full ensures no cutting */}
                <img
                  src={item.image}
                  alt="Product"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                <button className="absolute bottom-4 right-4 bg-[#D36327] text-white text-xs px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#b94f1c] transition z-10 shadow-lg">
                  <ShoppingCart size={14} />
                  Buy Now
                </button>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-[14px] font-medium text-[#2E2E2E] leading-[20px]">
                  {item.title}
                  <span className="text-[#D36327] text-[11px] ml-2 font-semibold">
                    2k+ Unit Sold
                  </span>
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-black font-bold text-[18px]">
                    {item.price}
                  </span>
                  <span className="text-red-500 line-through text-[13px] opacity-70">
                    {item.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Controllers (Keep centered for thumb reach) */}
        <div className="flex lg:hidden justify-center gap-6 mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full border border-[#D36327] text-[#D36327] flex items-center justify-center active:bg-[#D36327] active:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full border border-[#D36327] text-[#D36327] flex items-center justify-center active:bg-[#D36327] active:text-white transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}