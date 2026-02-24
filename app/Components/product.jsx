"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductSection() {
  const [active, setActive] = useState("Mustard");

  const filters = [
    { name: "Mustard", img: "/images/Mustard - Selected.png" },
    { name: "Coconut Oil", img: "/images/Coconut Oil.png" },
    { name: "Vitamins", img: "/images/Vitamins.png" },
    { name: "Almond Oil", img: "/images/Almond Oil.png" },
    { name: "Sesame Oil", img: "/images/Sesame Oil.png" },
    { name: "Peanut Oil", img: "/images/Peanut Oil.png" },
  ];

  const products = Array(8).fill("/images/product1.png");

  return (
    <section className="w-full bg-white py-8 lg:py-16 px-3 lg:px-12">
      
      {/* Heading */}
      <div className="text-center max-w-[900px] mx-auto mb-12">
        <h2 className="text-[24px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-semibold text-[#D36327] leading-tight">
          Our Cold-Pressed Collection
        </h2>
        <p className="mt-2 text-[14px] md:text-[18px] text-black opacity-80">
          Authentic, nutrient-rich oils for your wellness.
        </p>
      </div>

      {/* FILTERS - Desktop size decreased slightly */}
      <div className="overflow-x-auto no-scrollbar -mx-3 px-3 mb-12">
        <div className="flex md:flex-wrap justify-start md:justify-center gap-4 md:gap-8 min-w-max md:min-w-0">
          {filters.map((item, index) => {
            const isActive = active === item.name;

            return (
              <div
                key={index}
                onClick={() => setActive(item.name)}
                className="flex flex-col items-center cursor-pointer shrink-0 transition-all"
              >
                {/* Desktop size reduced from md:w-[120px] to md:w-[100px] */}
                <div
                  className={`w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center transition-all p-1
                  ${isActive ? "border-[2.5px] border-[#D36327] shadow-sm" : "border-none"}`}
                >
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-contain p-2.5" 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {products.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl md:rounded-2xl p-2 md:p-4 border border-gray-100 shadow-sm flex flex-col"
          >
            <div className="relative bg-[#F8F8F8] rounded-lg md:rounded-xl h-[220px] sm:h-[280px] md:h-[380px] flex items-center justify-center overflow-hidden">
              <span className="absolute top-2 left-2 text-[9px] md:text-[12px] bg-white/90 px-2 py-0.5 rounded-full text-[#D36327] font-bold z-10">
                {active}
              </span>

              <button className="absolute top-2 right-2 text-[#D36327] z-10">
                <Heart className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </button>

              <img
                src={img}
                alt="Product"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <button className="absolute bottom-2 right-2 bg-[#D36327] text-white p-2 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-[#b94f1c] transition">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden md:inline text-[13px]">Buy Now</span>
              </button>
            </div>

            <div className="mt-3 flex flex-col flex-grow">
              <h3 className="text-[13px] md:text-[16px] font-semibold leading-tight text-[#333] line-clamp-2">
                Premium Cold Pressed {active} Oil
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-1 md:gap-2">
                <span className="text-black font-bold text-[14px] md:text-[16px]">₹3,299</span>
                <span className="text-gray-400 line-through text-[10px] md:text-[12px]">₹3,599</span>
                <span className="text-[9px] md:text-[10px] bg-green-600 text-white px-1.5 py-0.5 rounded font-bold">50% OFF</span>
              </div>

              <div className="mt-auto pt-2">
                <div className="bg-[#FFE08A] text-[#1F7A1F] text-[9px] md:text-[11px] text-center py-1.5 rounded-full font-bold border border-[#F4C542]">
                  Save Rs 200 - No Other Discount
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}