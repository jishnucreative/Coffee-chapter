"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Coffee, Leaf, Smile, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeFeatures() {
  const sectionRef = useRef(null);
  const centerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Center cup animation
    gsap.fromTo(
      centerRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );

    // Feature items animation
    gsap.fromTo(
      itemsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  const features = [
    {
      title: "Convenient",
      desc: "Perfectly brewed coffee for your everyday moments.",
      icon: Coffee,
    },
    {
      title: "Better For You",
      desc: "Made with quality beans and thoughtful ingredients.",
      icon: Smile,
    },
    {
      title: "Compostable",
      desc: "Eco-friendly cups and sustainable practices.",
      icon: Leaf,
    },
    {
      title: "Premium Taste",
      desc: "Rich aroma, smooth flavor, unforgettable taste.",
      icon: Star,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-[#fffaf5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* LEFT FEATURES */}
          <div className="space-y-10">
            {features.slice(0, 2).map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className="flex gap-4"
              >
                <item.icon className="w-7 h-7 text-[#8B3A2E]" />
                <div>
                  <h4 className="font-bold text-[#4B1A22]">{item.title}</h4>
                  <p className="text-sm text-[#6B3E2E]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER CUP */}
          <div className="relative flex justify-center">
            {/* Dotted Circle */}
            <div className="absolute w-[340px] h-[340px]  border-[#D6B48C]" />

            <img
              ref={centerRef}
              src="/images/coffee.webp" // replace with your product image
              alt="Coffee Cup"
              className="relative z-10 w-80"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-10">
            {features.slice(2).map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i + 2] = el)}
                className="flex gap-4"
              >
                <item.icon className="w-7 h-7 text-[#8B3A2E]" />
                <div>
                  <h4 className="font-bold text-[#4B1A22]">{item.title}</h4>
                  <p className="text-sm text-[#6B3E2E]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
