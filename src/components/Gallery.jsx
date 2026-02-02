"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeGallery() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    rowsRef.current.forEach((row, i) => {
      gsap.fromTo(
        row.children,
        {
          y: 80,
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
          },
        },
      );
    });
  }, []);

  const images = [
    "/images/10.webp",
    "/images/11.webp",
    "/images/12.webp",
    "/images/13.webp",
    "/images/14.webp",
    "/images/15.webp",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#ffffff] overflow-hidden"
    >
      {/* subtle background grain */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/grain.png')]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F5D7A1]">
            Crafted Moments
          </h2>
          <p className="mt-4 text-[#CBB08A] text-sm tracking-wide uppercase">
            Inside Coffee Chapter
          </p>
        </div>

        {/* GALLERY */}
        <div className="space-y-8">
          {[0, 1].map((rowIndex) => (
            <div
              key={rowIndex}
              ref={(el) => (rowsRef.current[rowIndex] = el)}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {images.slice(rowIndex * 3, rowIndex * 3 + 3).map((src, i) => (
                <div
                  key={i}
                  className="group relative h-[240px] md:h-[320px] rounded-2xl overflow-hidden bg-[#1B120C]"
                >
                  {/* shutter overlay */}
                  <span className="absolute inset-0 bg-black z-10 group-hover:opacity-0 transition-opacity duration-500" />

                  <img
                    src={src}
                    alt="Coffee Chapter Gallery"
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
