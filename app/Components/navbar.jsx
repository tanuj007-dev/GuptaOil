"use client";

import { Inter } from "next/font/google";
import { Search, ShoppingBag, User } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Navbar() {
  return (
    <nav
      className={`${inter.className} w-full h-[72px] bg-white flex items-center justify-between px-6 lg:px-16`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/images/logogok.png"   // <-- apna logo yaha replace karna
          alt="Logo"
          className="h-[48px] w-auto object-contain"
        />
      </div>

      {/* Center Menu */}
      <div className="hidden md:flex items-center gap-10 text-[18px] font-medium text-[#212121] tracking-[-0.01em]">
        <a href="#" className="hover:text-[#D36327] transition">
          Home
        </a>
        <a href="#" className="hover:text-[#D36327] transition">
          Shop
        </a>
        <a href="#" className="hover:text-[#D36327] transition">
          Categories
        </a>
        <a href="#" className="hover:text-[#D36327] transition">
          About
        </a>
        <a href="#" className="hover:text-[#D36327] transition">
          Blogs
        </a>
        <a href="#" className="hover:text-[#D36327] transition">
          Contact
        </a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-[#212121]">
        <Search size={22} className="cursor-pointer hover:text-[#D36327] transition" />
        <ShoppingBag size={22} className="cursor-pointer hover:text-[#D36327] transition" />
        <User size={22} className="cursor-pointer hover:text-[#D36327] transition" />
      </div>
    </nav>
  );
}