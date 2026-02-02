"use client";

import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";

export default function CoffeeHero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll(".char");

    gsap.fromTo(
      letters,
      {
        x: -60,
        opacity: 0,
        skewX: 10,
      },
      {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.035,
        delay: 0.3,
      },
    );

    gsap.fromTo(
      subRef.current,
      {
        x: -40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      },
    );
  }, []);

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block will-change-transform">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="relative min-h-screen bg-[url('/images/bottom.webp')] overflow-hidden">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center ">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <p className="text-sm text-amber-200 tracking-wide">
            Cleveland-based Coffee Shop
          </p>

          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="text-[#F5B301] block">{splitText("BREWED")}</span>

            <span className="text-white block">{splitText("WITH")}</span>

            <span className="text-white block">{splitText("MEANING")}</span>
          </h1>

          <p ref={subRef} className="text-amber-100 max-w-md">
            Did you know that your next favorite coffee may be hiding in plain
            sight? Take our quiz to get matched with the perfect beans for you.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src="/images/hero2.webp"
            alt="Coffee Pour"
            className="max-w-sm sm:max-w-md lg:max-w-lg "
          />
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 w-full h-12 bg-white " /> */}
    </section>
  );
}
