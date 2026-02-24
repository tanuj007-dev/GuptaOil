"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Singh",
    text: "The aroma and taste are just like traditional village oil. Pure, strong, and completely natural.",
    product: "Wood Pressed Mustard Oil",
    image: "/images/testimage.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "I use it for cooking and hair care both. The quality feels authentic and unrefined. It's the best I've tried.",
    product: "Cold Pressed Coconut Oil",
    image: "/images/testimage.jpg",
  },
  {
    id: 3,
    name: "Ravi Mehra",
    text: "Food tastes richer and lighter at the same time. My family immediately noticed the difference.",
    product: "Cold Pressed Groundnut Oil",
    image: "/images/testimage.jpg",
  },
  {
    id: 4,
    name: "Sunita Verma",
    text: "Perfect for daily cooking. Easy to digest. You can feel the purity in every drop.",
    product: "Cold Pressed Sesame Oil",
    image: "/images/testimage.jpg",
  },
  {
    id: 5,
    name: "Vikram Rathore",
    text: "Authentic wood pressed oil is hard to find. This brand delivers exactly what it promises.",
    product: "Wood Pressed Mustard Oil",
    image: "/images/testimage.jpg",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(2); // Starting at the middle item

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="w-full bg-[#FBFBFB] py-16 md:py-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center px-4 mb-12 md:mb-20">
        <h2 className="text-4xl md:text-[54px] font-bold text-[#D36327] tracking-tight">
          Pure Oil. Honest Feedback.
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          From our Kolhu to their kitchen — experiences that speak for themselves.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center w-full h-[450px] relative">
          <AnimatePresence mode="popLayout">
            <div className="flex gap-4 md:gap-8 items-center transition-all duration-500 ease-in-out">
              {/* We calculate 5 items to show a peek of the ones on the far edges */}
              {[-2, -1, 0, 1, 2].map((offset) => {
                const itemIndex = (index + offset + testimonials.length) % testimonials.length;
                const item = testimonials[itemIndex];
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={`${item.id}-${offset}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1.05 : 0.9,
                      x: 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`shrink-0 ${isActive ? "z-20" : "z-10 hidden md:block"}`}
                  >
                    <Card item={item} active={isActive} />
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-8 mt-10">
          <button
            onClick={prev}
            className="text-gray-400 hover:text-black transition-colors"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="text-gray-400 hover:text-black transition-colors"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({ item, active }) {
  return (
    <div
      className={`w-[320px] md:w-[380px] h-[380px] rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 shadow-sm
      ${
        active
          ? "bg-[#E46A11] text-white shadow-[0_20px_50px_rgba(228,106,17,0.3)]"
          : "bg-white text-gray-800 border border-gray-100"
      }`}
    >
      <div>
        <Quote
          size={48}
          fill="currentColor"
          className={`opacity-20 mb-4 ${active ? "text-white" : "text-[#E46A11]"}`}
        />
        <p className="text-[17px] leading-[28px] font-medium italic">
          {item.text}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover grayscale-[50%]"
        />
        <div>
          <h4 className="font-bold text-[16px] leading-tight">
            {item.name}
          </h4>
          <p className={`text-[13px] mt-1 ${active ? "text-white/80" : "text-gray-500"}`}>
            Purchased: <span className="font-medium">{item.product}</span>
          </p>
        </div>
      </div>
    </div>
  );
}