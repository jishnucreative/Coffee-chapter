"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeChapterSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // IMAGE PARALLAX + SCALE
    gsap.fromTo(
      imageRef.current,
      { scale: 1.2, y: 120 },
      {
        scale: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      },
    );

    // CONTENT REVEAL
    gsap.fromTo(
      contentRef.current.children,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative  bg-[#2a160c] overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/images/shop1.webp" // 👈 put your image in public folder
          alt="Coffee Chapter Shop"
          className="w-full h-full object-contain opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a160c] via-[#2a160c]/70 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div ref={contentRef} className="max-w-2xl space-y-6">
          <span className="inline-block text-amber-400 tracking-widest text-sm uppercase">
            Since 2023
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Coffee Chapter
          </h2>

          <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed">
            Where every cup tells a story. From handcrafted brews to indulgent
            flavors, Coffee Chapter is your daily escape into rich aromas and
            bold taste.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="flex items-center gap-2 bg-amber-400 text-[#2a160c] px-6 py-3 rounded-full font-semibold hover:bg-amber-300 transition">
              Explore Menu
              <ArrowUpRight size={18} />
            </button>

            <button className="text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white/10 transition">
              Visit Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
