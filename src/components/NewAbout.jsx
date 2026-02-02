"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeShopAbout() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // IMAGE REVEAL
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );

    // TEXT SLIDE
    gsap.fromTo(
      contentRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-[white] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* IMAGE */}
        <div
          ref={imageRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/shop1.webp" // 👉 replace with your shop image
            alt="Coffee Chapter Shop"
            className="w-full h-full object-cover"
          />

          {/* soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* CONTENT */}
        <div ref={contentRef}>
          <p className="text-sm uppercase tracking-widest text-[#C89A5B] mb-3">
            About Coffee Chapter
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5D7A1] leading-tight mb-6">
            Where Every Cup <br /> Tells a Story
          </h2>

          <p className="text-[#D6C3A3] text-base leading-relaxed mb-6">
            Coffee Chapter is more than just a coffee shop. It’s a space where
            rich aromas, warm conversations, and carefully crafted brews come
            together.
          </p>

          <p className="text-[#D6C3A3] text-base leading-relaxed">
            From signature iced coffees to indulgent milk blends, every drink is
            prepared with passion and premium ingredients.
          </p>
        </div>
      </div>
    </section>
  );
}
