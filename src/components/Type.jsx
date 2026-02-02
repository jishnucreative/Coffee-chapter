"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeStory() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = textRef.current;
      const letters = text.textContent.split("");

      // Split letters into spans
      text.innerHTML = letters
        .map((char) =>
          char === " "
            ? "&nbsp;"
            : `<span class="inline-block opacity-0 translate-y-[10px]">${char}</span>`,
        )
        .join("");

      const spans = text.querySelectorAll("span");

      gsap.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.03,
        ease: "power2.out",
        duration: 0.35,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-[#3B2314] py-10 md:py-16 lg:py-20 px-6 md:px-8 lg:px-14 flex justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Animated Statement */}
        <p
          ref={textRef}
          className="text-2xl md:text-4xl text-[#3B2314] lg:text-5xl font-extrabold leading-tight tracking-tight max-w-6xl"
        >
          We’re a creative coffee house where
          <span className="text-[#F5B301]">
            {" "}
            every cup is brewed with intention, passion, and soul.{" "}
          </span>
          From bean to brew, we craft moments worth slowing down for.
        </p>

        {/* Supporting Text */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-10 md:mt-16 lg:mt-20">
          <p className="text-sm md:text-base text-gray-500 max-w-md">
            At Coffee Chapter, we blend carefully sourced beans, thoughtful
            roasting, and skilled brewing to create a space where conversations
            flow and coffee tells its own story—one sip at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
