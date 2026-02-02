"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CoffeeTestimonials() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const sliderRef = useRef(null);

  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Coffee Lover",
      text: "Coffee Chapter feels like a story in every sip. Rich, smooth and comforting.",
    },
    {
      name: "Sneha Kapoor",
      role: "Designer",
      text: "From aroma to taste, everything feels intentional and beautifully crafted.",
    },
    {
      name: "Rahul Verma",
      role: "Entrepreneur",
      text: "Hands down one of the smoothest coffees I’ve had in a long time.",
    },
    {
      name: "Neha Sharma",
      role: "Writer",
      text: "A calm space where creativity flows with every cup of coffee.",
    },
  ];

  /* ===============================
     LETTER WIND ANIMATION
  =============================== */
  useEffect(() => {
    const letters = titleRef.current.querySelectorAll(".char");

    gsap.fromTo(
      letters,
      { x: -26, opacity: 0, skewX: 8 },
      {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 0.9,
        stagger: 0.045,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  /* ===============================
     SLIDER MOVE (LOOP SAFE)
  =============================== */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[0];
    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    gsap.to(slider, {
      x: -(index * cardWidth),
      duration: 0.6,
      ease: "power3.out",
    });
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#ffffff] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#8B3A2E] font-semibold">
              Testimonials
            </p>

            <h2
              ref={titleRef}
              className="text-4xl sm:text-5xl font-extrabold text-[#6B1F2B] mt-2"
            >
              {splitText("Stories Brewed With Love")}
            </h2>
          </div>

          {/* DESKTOP ARROWS */}
          <div className="hidden sm:flex gap-3">
            <ArrowButton onClick={prev} />
            <ArrowButton onClick={next} right />
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div ref={sliderRef} className="flex gap-6 will-change-transform">
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[380px] bg-white rounded-3xl p-8 shadow-xl border border-[#EAD2A6]"
              >
                <Quote className="text-[#C89A5B] w-8 h-8 mb-5" />

                <p className="text-[#4B1A22] mb-6">“{item.text}”</p>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#C89A5B] flex items-center justify-center text-white font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#6B1F2B]">{item.name}</h4>
                    <p className="text-sm text-[#8B3A2E]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE ARROWS */}
        <div className="flex sm:hidden justify-center gap-4 mt-8">
          <ArrowButton onClick={prev} />
          <ArrowButton onClick={next} right />
        </div>
      </div>
    </section>
  );
}

/* ===============================
   ARROW BUTTON
=============================== */
function ArrowButton({ onClick, right }) {
  return (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-full border border-[#C89A5B]
                 flex items-center justify-center text-[#6B1F2B]
                 hover:bg-[#C89A5B]/20 transition active:scale-95"
    >
      {right ? <ChevronRight /> : <ChevronLeft />}
    </button>
  );
}
