"use client";

import { useState } from "react";
import {
    Droplet,
    Leaf,
    Heart,
    Flower2,
    Nut,
    ShoppingCart,
} from "lucide-react";

export default function ProductSection() {
    const [active, setActive] = useState("Mustard");

    const filters = [
        { name: "Mustard", icon: Droplet },
        { name: "Coconut Oil", icon: Nut },
        { name: "Vitamins", icon: Heart },
        { name: "Almond Oil", icon: Leaf },
        { name: "Sesame Oil", icon: Flower2 },
        { name: "Peanut Oil", icon: Nut },
    ];

    // ✅ Product Images Defined Properly
    const products = [
        "/images/product1.png",
        "/images/product1.png",
        "/images/product1.png",
        "/images/product1.png",
        "/images/product1.png",
        "/images/product1.png",
        "/images/product1.png",
        "/images/product1.png",

    ];

    return (
        <section className="w-full bg-[#F3F3F3] py-12 md:py-14 lg:py-16 px-4 lg:px-12">

            {/* Heading */}
            <div className="text-center max-w-[900px] mx-auto">
                <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#D36327]">
                    Our Cold-Pressed Collection
                </h2>
                <p className="mt-3 md:mt-4 text-[14px] sm:text-[16px] md:text-[18px] text-black px-2">
                    Authentic, nutrient-rich oils crafted in small batches for your everyday cooking and wellness.
                </p>
            </div>

            {/* FILTERS */}
            <div className="mt-8 md:mt-10 overflow-x-auto scrollbar-hide">
                <div className="flex md:flex-wrap justify-start md:justify-center gap-6 md:gap-10 min-w-max md:min-w-0 px-2">
                    {filters.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = active === item.name;

                        return (
                            <div
                                key={index}
                                onClick={() => setActive(item.name)}
                                className="flex flex-col items-center cursor-pointer shrink-0"
                            >
                                <div
                                    className={`w-[70px] h-[70px] md:w-[85px] md:h-[85px] lg:w-[100px] lg:h-[100px]
                  rounded-full flex items-center justify-center transition
                  ${isActive
                                            ? "border-2 border-[#D36327] text-[#D36327]"
                                            : "border border-gray-300 text-gray-600"
                                        }`}
                                >
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>

                                <span
                                    className={`mt-2 md:mt-3 text-[12px] md:text-[14px] font-medium text-center whitespace-nowrap
                  ${isActive ? "text-[#D36327]" : "text-black"}`}
                                >
                                    {item.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-14">

                {products.map((img, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-3 md:p-4 border border-gray-200 hover:shadow-lg transition"
                    >
                        {/* IMAGE BOX */}
                        {/* IMAGE BOX */}
                        {/* IMAGE BOX */}
                        <div className="relative bg-[#F3F3F3] rounded-[8px] 
h-[341px] flex items-center justify-center overflow-hidden">

                            {/* Badge */}
                            <span className="absolute top-5 left-5 text-[14px] bg-white px-5 py-2 rounded-full shadow-sm text-[#D36327] font-medium z-10">
                                Mustard
                            </span>

                            {/* Wishlist */}
                            <button className="absolute top-5 right-5 text-[#D36327] z-10">
                                <Heart size={22} strokeWidth={1.5} />
                            </button>

                            {/* Image */}
                            <img
                                src={img}
                                alt="Product"
                                className="h-[105%] w-auto object-contain"
                            />

                            {/* Button */}
                            <button className="absolute bottom-5 right-5 bg-[#D36327] text-white 
  text-[15px] px-6 py-3 rounded-full flex items-center gap-2 
  hover:bg-[#b94f1c] transition z-10">
                                <ShoppingCart size={18} />
                                Buy Now
                            </button>

                        </div>

                        {/* CONTENT */}
                        <div className="mt-3 md:mt-4">
                            <h3 className="text-[13px] md:text-[14px] font-semibold leading-[18px] md:leading-[20px] text-[#4A4A4A]">
                                Black Premium Pure Cold Pressed Mustard Oil
                            </h3>

                            <div className="mt-2 flex items-center gap-2 flex-wrap">
                                <span className="text-black font-semibold text-[13px] md:text-[14px]">
                                    INR 3,299
                                </span>
                                <span className="text-red-500 line-through text-sm">
                                    INR 3,599
                                </span>
                                <span className="ml-auto text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                                    50% Off
                                </span>
                            </div>

                            <div className="mt-3 bg-[#FFE08A] text-[#1F7A1F] text-xs text-center py-2 rounded-full font-semibold border border-[#F4C542]">
                                Save Rs 200 - No Other Discount
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}