"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amit Singh",
      text: "The aroma and taste are just like traditional village oil. Pure, strong, and completely natural.like traditional village oil. Pure, strong, and completely natural.like traditional village oil. Pure, strong, and completely natural.",
      product: "Wood Pressed Mustard Oil",
      image: "/images/testimage.jpg",
    },
    {
      name: "Priya Sharma",
      text: "I use it for cooking and hair care both. The quality feels authentic and unrefined.like traditional village oil. Pure, strong, and completely natural.like traditional village oil. Pure, strong, and completely natural.",
      product: "Cold Pressed Coconut Oil",
      image: "/images/testimage.jpg",
    },
    {
      name: "Ravi Mehra",
      text: "Food tastes richer and lighter at the same time. My family immediately noticed the difference.like traditional village oil. Pure, strong, and completely natural.like traditional village oil. Pure, strong, and completely natural.",
      product: "Cold Pressed Groundnut Oil",
      image: "/images/testimage.jpg",
    },
    {
      name: "Sunita Verma",
      text: "Perfect for daily cooking. Easy to digest. You can feel the purity in every drop.like traditional village oil. Pure, strong, and completely natural.like traditional village oil. Pure, strong, and completely natural.",
      product: "Cold Pressed Sesame Oil",
    image: "/images/testimage.jpg",
    },
  ];

  const [index, setIndex] = useState(1);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const left =
    testimonials[(index - 1 + testimonials.length) % testimonials.length];
  const center = testimonials[index];
  const right =
    testimonials[(index + 1) % testimonials.length];

  return (
    <section className="w-full bg-[#F3F3F3] py-24 px-4">
      {/* Heading */}
      <div className="text-center max-w-[900px] mx-auto">
        <h2 className="text-[48px] font-semibold text-[#D36327]">
          Pure Oil. Honest Feedback.
        </h2>
        <p className="mt-4 text-[18px] text-[#1F1F1F]">
          From our Kolhu to their kitchen — experiences that speak for themselves.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-20 flex justify-center items-center gap-10 transition-all duration-500">

        {/* Left Card */}
        <Card item={left} faded />

        {/* Center Card */}
        <Card item={center} active />

        {/* Right Card */}
        <Card item={right} faded />

      </div>

      {/* Controls */}
      <div className="flex justify-center gap-14 mt-14">
        <button
          onClick={prev}
          className="text-gray-500 hover:text-[#E46A11] transition"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={next}
          className="text-gray-500 hover:text-[#E46A11] transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}

function Card({ item, active, faded }) {
  return (
    <div
      className={`w-[360px] h-[390px] rounded-[12px] p-8 flex flex-col justify-between transition-all duration-500
      ${
        active
          ? "bg-[#E46A11] text-white shadow-2xl scale-105"
          : "bg-[#E9E9E9] text-[#333] scale-95"
      }`}
    >
      <div>
        <Quote
          size={34}
          className={active ? "text-white" : "text-[#E46A11]"}
        />

        <p className="mt-6 text-[16px] leading-[26px] font-medium">
          {item.text}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <img
          src={item.image}
          alt={item.name}
          className={`w-[48px] h-[48px] rounded-full object-cover ${
            active ? "border-2 border-white" : ""
          }`}
        />
        <div>
          <h4 className="font-semibold text-[16px]">
            {item.name}
          </h4>
          <p
            className={`text-[14px] mt-1 ${
              active ? "opacity-90" : "text-[#666]"
            }`}
          >
            Purchased: {item.product}
          </p>
        </div>
      </div>
    </div>
  );
}