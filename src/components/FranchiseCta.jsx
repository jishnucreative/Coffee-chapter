"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FranchiseCTA() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".char");

    gsap.fromTo(
      letters,
      {
        y: 20,
        x: (i) => (i % 2 === 0 ? -20 : 20),
        opacity: 0,
        filter: "blur(4px)",
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        ease: "power3.out",
        duration: 0.8,
        stagger: 0.04,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  const title = "START YOUR OWN COFFEE CHAPTER";

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#F6E3C2]">
      <div className="relative bg-[url('/images/top.webp')] bg-no-repeat bg-cover py-24">
        {/* Torn edges */}
        {/* <div className="absolute top-0 left-0 w-full h-8 bg-[#ffffff] rounded-b-[100%]" />
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[#ffffff] rounded-t-[100%]" /> */}

        <div className="relative max-w-6xl mx-auto px-6 text-center ">
          {/* WIND TEXT */}
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F6E3C2] leading-tight flex flex-wrap justify-center gap-x-2"
          >
            {title.split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#F6E3C2] text-base sm:text-lg">
            Partner with a growing coffee brand. Get full operational support,
            proven systems, and a community built on great coffee.
          </p>

          {/* CTA BUTTON */}
          <div className="mt-10 flex justify-center">
            <button className="group flex items-center gap-3 bg-[#F6E3C2] text-[#3B1F17] px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-[#2A150F] transition">
              Apply for Franchise
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FFC107] text-[#3B1F17] group-hover:rotate-45 transition">
                <ArrowUpRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
