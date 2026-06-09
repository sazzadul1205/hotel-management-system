// src/Shared/ToTopButton/ToTopButton.jsx
"use client";

// React
import React, { useState, useEffect } from "react";

// Icons
import { FiChevronUp } from "react-icons/fi";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after 300px scroll
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700] text-[#2C4549] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#FFE44D] focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FiChevronUp size={24} className="transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
};

export default ToTopButton;
