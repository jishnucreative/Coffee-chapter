"use client";

import React from "react";

export default function ChocolateSection() {
  return (
    <section className="bg-[url('https://copilot.microsoft.com/th/id/BCO.c632640c-f00e-435f-902e-1a5f4ef3cebd.png')] bg-center bg-no-repeat bg-cover min-h-[600px] flex items-center justify-center p-8 md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image/Visuals */}
        <div className="relative flex justify-center items-center">
          {/* Main Chocolate Image - Replace 'src' with your actual image path */}
          <img
            src="/images/shop1.webp"
            alt="Stacked dark chocolate pieces"
            className="w-full max-w-md object-contain"
          />
          {/* Decorative shavings effect can be added here with absolute positioned divs if needed */}
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
              About Our Company
            </span>
            <div className="h-[1px] w-12 bg-gray-300"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 leading-tight">
            WE CREATE <br />
            INCREDIBLY TASTY <br />
            CHOCOLATE
          </h1>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
            Our mission is to provide everyone with high-quality artisanal
            treats crafted from the finest cocoa beans. Every bite is a reward
            for your senses, balancing rich tradition with modern confectionery
            excellence.
          </p>

          <div className="pt-4">
            {/* Signature Font - You might need a font like 'Dancing Script' from Google Fonts */}
            <p
              className="text-3xl font-serif italic text-amber-700 mb-1"
              style={{ fontFamily: "cursive" }}
            >
              Gokul Chandran
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gray-900 font-bold">
              Founder of Company
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
