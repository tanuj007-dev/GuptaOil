"use client";

import { useState } from "react";
import { ShoppingCart, Heart, Share2 } from "lucide-react";

export default function ProductHero() {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState("/images/product1.png");

  const thumbs = [
    "/images/product1.png",
    "/images/product1.png",
    "/images/product1.png",
    "/images/product1.png",
    "/images/product1.png",
  ];

  return (
    <section className="w-full bg-[#F3F3F3] text-black">
      <div className="max-w-[1200px] mx-auto pt-[150px] pb-[120px]">
        <div className="flex items-start gap-[135px]">

          {/* LEFT COLUMN */}
          <div className="w-[545px]">

            {/* OUTER GREY WRAPPER (IMPORTANT FIX) */}
            <div className="bg-[#ECECEC] rounded-[24px] p-6">

              {/* INNER WHITE CARD */}
              <div className="relative bg-white rounded-[16px] p-6">
                <img
                  src={activeImg}
                  alt="Product"
                  className="w-full h-[620px] object-contain"
                />

                <div className="absolute top-4 right-4 flex flex-col gap-4">
                  <button className="w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#E5E7EB] rounded-[10px]">
                    <Share2 size={18} className="text-gray-500" />
                  </button>
                  <button className="w-[40px] h-[40px] flex items-center justify-center bg-white border border-[#E5E7EB] rounded-[10px]">
                    <Heart size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* THUMBNAILS WITH GREY WRAPPER */}
            <div className="flex gap-6 mt-8">
              {thumbs.map((img, index) => (
                <div
                  key={index}
                  className="bg-[#ECECEC] rounded-[16px] p-3"
                >
                  <img
                    src={img}
                    alt="thumb"
                    onClick={() => setActiveImg(img)}
                    className="w-[72px] h-[72px] bg-white rounded-[12px] object-contain cursor-pointer"
                  />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-[520px]">

            <p className="text-[14px] text-[#6B7280] mb-2">
              SKU: PTCH0
            </p>

            <h1 className="text-[32px] leading-[42px] font-semibold text-[#111111] mb-3">
              Black Premium Pure Cold Pressed Mustard Oil
            </h1>

            <div className="flex items-center gap-4 mb-3">
              <span className="text-[26px] font-bold text-[#111111]">
                ₹3299
              </span>

              <span className="text-[15px] text-[#EF4444] line-through">
                ₹3699
              </span>

              <span className="text-[14px] text-[#6B7280]">
                1,238 Sold ⭐ 4.5
              </span>
            </div>

            <div className="w-full border-t border-dashed border-[#E5E7EB] mb-5"></div>

            <div className="mb-6">
              <p className="text-[15px] font-medium text-[#111111] mb-2">
                Description
              </p>
              <p className="text-[14px] text-[#6B7280] leading-[24px]">
                Leak-proof, easy-pour design for clean and controlled cooking.
                Durable, ergonomic, and simple to maintain for daily use.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-[15px] font-medium mb-2">
                Size
              </p>
              <button className="w-[170px] h-[48px] bg-[#E46A11] text-white rounded-[12px] font-medium">
                Pack of 1 Ltr
              </button>
            </div>

            <div className="mb-8">
              <p className="text-[15px] font-medium mb-2">
                Quantity
              </p>

              <div className="flex items-center justify-between w-[120px] h-[40px] border border-[#E5E7EB] rounded-[10px] px-4 bg-white">
                <button onClick={() => qty > 1 && setQty(qty - 1)}>
                  -
                </button>

                <span className="font-medium">
                  {qty}
                </span>

                <button onClick={() => setQty(qty + 1)}>
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <button className="flex items-center gap-2 bg-black text-white px-6 h-[48px] rounded-[12px]">
                <ShoppingCart size={18} />
                Add To Cart
              </button>

              <button className="px-6 h-[48px] rounded-[12px] border border-[#D1D5DB] bg-white">
                Checkout Now
              </button>
            </div>

            <div className="bg-[#F4C430] text-black rounded-[12px] px-6 py-4 text-[14px] mb-6">
              Enjoy FREE Delivery, Free Returns and Cash on Delivery
              <br />
              Buy 3 Products and get 1 Free.
            </div>

            <div>
              <p className="text-sm text-[#6B7280] mb-3">
                Payment method
              </p>

              <div className="flex items-center gap-[7px] w-[475px] h-[31px]">
                {/* payment logos */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}