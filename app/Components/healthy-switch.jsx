"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

export default function HealthySwitch() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const cardWidth = sliderRef.current.offsetWidth / 4; // 4 cards exact
    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
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

      {/* Slider */}
      <div className="mt-12 relative">

        {/* Cards Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-hidden scroll-smooth"
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 shrink-0 bg-white rounded-xl border border-gray-200 p-4"
            >
              {/* Image Box */}
              <div className="relative bg-[#ECECEC] rounded-lg h-[280px] flex items-center justify-center overflow-hidden">

                <span className="absolute top-3 left-3 bg-white text-[#D36327] text-xs px-3 py-1 rounded-full">
                  Mustard
                </span>

                <span className="absolute top-3 right-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                  Sale 70% off
                </span>

                {/* IMAGE FULL FIX */}
                <img
                  src={item.image}
                  alt="Product"
                  className="h-full w-auto object-contain"
                />

                <button className="absolute bottom-4 right-4 bg-[#D36327] text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#b94f1c] transition">
                  <ShoppingCart size={14} />
                  Buy Now
                </button>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-[14px] font-medium text-[#2E2E2E] leading-[20px]">
                  {item.title}
                  <span className="text-[#D36327] text-xs ml-2">
                    2k+ Unit Sold
                  </span>
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-black font-semibold">
                    {item.price}
                  </span>
                  <span className="text-red-500 line-through text-sm">
                    {item.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controllers */}
        <div className="flex justify-center gap-6 mt-10">

          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border-2 border-[#D36327] text-[#D36327] flex items-center justify-center hover:bg-[#D36327] hover:text-white transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border-2 border-[#D36327] text-[#D36327] flex items-center justify-center hover:bg-[#D36327] hover:text-white transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}