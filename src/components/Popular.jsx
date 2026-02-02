"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PopularFlavors() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    /* =========================
       TITLE WIND ANIMATION
    ========================== */
    const letters = titleRef.current.querySelectorAll(".char");

    gsap.fromTo(
      letters,
      { x: -40, opacity: 0, skewX: 6 },
      {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 0.9,
        stagger: 0.04,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      },
    );

    /* =========================
       PREMIUM PRODUCT ANIMATION
    ========================== */
    gsap.fromTo(
      cardsRef.current,
      {
        y: 120,
        opacity: 0,
        scale: 0.92,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      },
    );
  }, []);

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  /* =========================
     MENU ITEMS (9 PRODUCTS)
  ========================== */
  const products = [
    {
      title: "Hazelnut Latte",
      price: "$18.99",
      img: "/images/1.webp",
    },
    {
      title: "Cold Brew",
      price: "$16.99",
      img: "/images/2.webp",
    },
    {
      title: "Mocha Fusion",
      price: "$12.99",
      img: "/images/3.webp",
    },
    {
      title: "Vanilla Cappuccino",
      price: "$14.99",
      img: "/images/4.webp",
    },
    {
      title: "Caramel Macchiato",
      price: "$15.99",
      img: "/images/5.webp",
    },
    {
      title: "Espresso Shot",
      price: "$8.99",
      img: "/images/6.webp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[url('/images/top.webp')] bg-no-repeat bg-cover py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between mb-14">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-5xl font-extrabold text-[#FFF6ED]"
          >
            {splitText("POPULAR FLAVORS")}
          </h2>

          <button className="hidden sm:flex items-center gap-2 bg-[#FFF6ED] text-[#2A170C] px-5 py-2 rounded-full font-semibold hover:bg-amber-100 transition">
            View Menu
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* ================= MENU GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {products.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative bg-[#3e2d2700] rounded-[8px] px-4 pt-3 pb-2 text-center
                         shadow-2xl hover:-translate-y-3 transition-transform duration-300"
            >
              {/* PRODUCT IMAGE */}
              <div className="relative h-48 sm:h-64 mb-1 flex items-end justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* PRODUCT INFO */}
              <h3 className="text-[#FFF6ED] font-bold text-sm sm:text-base">
                {item.title}
              </h3>

              <p className="text-xs text-[#E0C7AA] mt-1">
                Handcrafted specialty coffee
              </p>

              <p className="text-[#F6E3C2] font-extrabold text-lg mt-3">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        {/* <div className="sm:hidden flex justify-center mt-12">
          <button className="flex items-center gap-2 bg-[#FFF6ED] text-[#2A170C] px-6 py-2 rounded-full font-semibold">
            View Full Menu
            <ArrowUpRight size={18} />
          </button>
        </div> */}
      </div>
    </section>
  );
}
