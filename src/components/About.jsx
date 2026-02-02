"use client";

import React from "react";
import Image from "next/image";

export default function FoodPromotionBanner() {
  return (
    <section className="relative min-h-screen bg-[#eeb012] overflow-hidden flex flex-col items-center justify-center py-20 px-4">
      {/* Dynamic Slanted Text Container */}
      <div className="relative z-10 space-y-4 md:space-y-6 transform -rotate-12 scale-110">
        {/* Top Banner */}
        <div className="bg-white px-6 py-2 md:px-12 md:py-4 shadow-xl inline-block transform translate-x-[-10%]">
          <h2 className="text-[#eeb012] text-4xl md:text-7xl font-black uppercase italic tracking-tighter">
            This Easter,
          </h2>
        </div>

        {/* Middle Banner */}
        <div className="bg-white px-6 py-2 md:px-12 md:py-4 shadow-xl inline-block transform translate-x-[5%]">
          <h2 className="text-[#eeb012] text-4xl md:text-7xl font-black uppercase italic tracking-tighter">
            Feast on the
          </h2>
        </div>

        {/* Bottom Banner */}
        <div className="bg-white px-6 py-2 md:px-12 md:py-4 shadow-xl inline-block transform translate-x-[-5%]">
          <h2 className="text-[#eeb012] text-4xl md:text-7xl font-black uppercase italic tracking-tighter">
            Delights from
          </h2>
        </div>

        {/* Brand Name (Bottom Slant) */}
        <div className="pt-4 transform translate-x-[20%]">
          <h1 className="text-white text-6xl md:text-9xl font-black uppercase italic tracking-widest drop-shadow-lg">
            Rezoy!
          </h1>
        </div>
      </div>

      {/* Floating Food Elements (Absolute Positioned) */}
      {/* Top Left Bowl */}
      <div className="absolute top-[10%] left-[5%] md:left-[15%] w-32 h-32 md:w-56 md:h-56 z-20 hover:scale-110 transition-transform duration-300">
        <img
          src="/food1.png"
          alt="Curry bowl"
          className="drop-shadow-2xl object-contain"
        />
      </div>

      {/* Top Right Plate */}
      <div className="absolute top-[15%] right-[2%] md:right-[10%] w-40 h-40 md:w-72 md:h-72 z-20">
        <img
          src="/food2.png"
          alt="Crab dish"
          className="drop-shadow-2xl object-contain"
        />
      </div>

      {/* Middle Center (Rolls) */}
      <div className="absolute top-[45%] left-[45%] w-24 h-24 md:w-44 md:h-44 z-20">
        <img
          src="/food3.png"
          alt="Appetizers"
          className="drop-shadow-2xl object-contain"
        />
      </div>

      {/* Bottom Right (Appam) */}
      <div className="absolute bottom-[5%] right-[5%] md:right-[15%] w-48 h-48 md:w-80 md:h-80 z-20">
        <img
          src="/food4.png"
          alt="Main dish"
          className="drop-shadow-2xl object-contain"
        />
      </div>
    </section>
  );
}
