"use client";

import {
  Mail,
  Phone,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B0F] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr_1fr] gap-14">

          {/* Logo */}
          <div>
            <img
              src="/images/logogok.png"
              alt="Gupta Oil Kolhu"
              className="w-[160px] object-contain"
            />
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[#E46A11] text-[16px] font-semibold">
              Categories
            </h4>

            <ul className="mt-4 space-y-2 text-[16px] font-normal text-[#E0E0E0] leading-[24px]">
              <li>Mustard Oil</li>
              <li>Coconut Oil</li>
              <li>Almond Oil</li>
              <li>Sesame Oil</li>
              <li>Peanut Oil</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[#E46A11] text-[16px] font-semibold">
              Products
            </h4>

            <ul className="mt-4 space-y-2 text-[16px] font-normal text-[#E0E0E0] leading-[24px]">
              {[
                "Black Premium Pure Cold Pressed Mustard Oil",
                "Yellow Pure Premium Cold Pressed Mustard Oil",
                "White Premium Cold Pressed Coconut Oil",
                "Brown Premium Cold Pressed Sesame Oil",
                "White Premium Cold Pressed Groundnut (Peanut) Oil",
                "Yellow Premium Cold Pressed Almond Oil",
                "Yellow Premium Cold Pressed Flax Seed Oil",
                "Brown Premium Cold Pressed Flax Seed Oil",
              ].map((item, i) => (
                <li
                  key={i}
                  className="whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-[#E46A11] text-[16px] font-semibold">
              Policies
            </h4>

            <ul className="mt-4 space-y-2 text-[16px] font-normal text-[#E0E0E0] leading-[24px]">
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>

        </div>

        {/* Social Row */}
        <div className="mt-16 flex flex-wrap items-center gap-8 text-[16px] font-normal text-[#E0E0E0]">

          <div className="flex items-center gap-[9px]">
            <Mail size={18} />
            <span>Email</span>
          </div>

          <div className="flex items-center gap-[9px]">
            <Phone size={18} />
            <span>+91-9876543210</span>
          </div>

          <div className="flex items-center gap-[9px]">
            <Youtube size={18} />
            <span>YouTube</span>
          </div>

          <div className="flex items-center gap-[9px]">
            <Instagram size={18} />
            <span>Instagram</span>
          </div>

          <div className="flex items-center gap-[9px]">
            <Facebook size={18} />
            <span>Facebook</span>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-gray-400 font-normal">
          <p>
            Copyright © 2026 Gupta Oil Kolhu. All rights reserved.
          </p>

          <p className="mt-4 max-w-[1000px] leading-[22px]">
            All content, images, and materials on this website are the exclusive property of Gupta Oil Kolhu.
            Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>
        </div>

      </div>
    </footer>
  );
}