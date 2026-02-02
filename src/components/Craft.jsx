"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeCraftSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // WIND LETTER ANIMATION
    const letters = titleRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { y: 40, opacity: 0, rotate: -6 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );

    // FLOATING CARDS ANIMATION
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  const title = "OUR COFFEE CRAFT";

  const features = [
    {
      title: "Handcrafted Brews",
      text: "Every cup is crafted with precision, passion, and premium beans.",
    },
    {
      title: "Signature Flavors",
      text: "From classic espresso to indulgent milk blends.",
    },
    {
      title: "Stories in Every Sip",
      text: "Coffee Chapter is more than coffee — it’s an experience.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-[#140B07] overflow-hidden"
    >
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3a1f14,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* WIND TEXT TITLE */}
        <h2
          ref={titleRef}
          className="text-center text-4xl md:text-5xl font-extrabold text-[#F5D7A1] mb-20 tracking-wide"
        >
          {title.split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        {/* FEATURE CARDS */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-[#1D120D] border border-[#3A2418] rounded-3xl p-8 text-center
                         hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-[#E6B873] mb-4">
                {item.title}
              </h3>
              <p className="text-[#D6C3A3] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
