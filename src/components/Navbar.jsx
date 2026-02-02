"use client";

import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "HOME", href: "#home" },
    { name: "MENU", href: "#menu" },
    { name: "ABOUT", href: "#about" },
    { name: "FRANCHISE", href: "#franchise" },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
  ${isScrolled ? "bg-white/10 backdrop-blur-sm shadow-sm" : "bg-transparent"}
`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo / Brand */}
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.webp"
                alt="coffee-chapter-logo"
                className="h-20"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-sm font-bold tracking-widest hover:text-amber-300 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            {/* <button className="hidden md:block bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2 rounded-full transition-colors duration-300 text-sm tracking-widest">
              ORDER NOW
            </button> */}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-amber-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className={`md:hidden absolute top-16 left-0 right-0 transition-all duration-300 origin-top ${
                isScrolled
                  ? "bg-amber-900/50 backdrop-blur-lg"
                  : "bg-amber-900/80 backdrop-blur-md"
              }`}
            >
              <div className="flex flex-col gap-4 px-4 py-6">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white text-sm font-bold tracking-widest hover:text-amber-300 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </a>
                ))}
                {/* <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-full transition-colors duration-300 text-sm tracking-widest w-full">
                  ORDER NOW
                </button> */}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
