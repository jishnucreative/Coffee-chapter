"use client";

import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    img: "https://copilot.microsoft.com/th/id/BCO.58331b93-b55e-4bc6-94a4-26d1fd6cc62c.png",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
];

export default function CoffeeStorySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-6 items-center">
        {/* LEFT TEXT */}
        <div className="max-w-lg">
          <span className="text-5xl text-[#1f3d2b] leading-none">“</span>
          <p className="text-[#1f3d2b] text-sm leading-relaxed mt-4">
            Trieste coffee remains a symbol of quality, tradition, and the
            enduring allure of the classic European coffeehouse experience. The
            brand continues to source the finest beans from around the world,
            meticulously roasted and blended to preserve the legacy of passion
            for exceptional coffee.
          </p>
        </div>

        {/* RIGHT PRODUCT CAROUSEL */}
        <div className="relative flex justify-center h-[320px]">
          {products.map((product, index) => (
            <img
              key={product.id}
              src={product.img}
              alt="Popular Coffee"
              className={`
                absolute
                transition-all duration-700 ease-in-out
                ${
                  index === activeIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95"
                }
                w-[170px] lg:w-[300px]
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
