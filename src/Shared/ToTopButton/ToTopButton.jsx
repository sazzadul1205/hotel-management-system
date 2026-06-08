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
          className="fixed bottom-6 right-6 z-50 bg-[#FFD700] text-[#2C4549] w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#FFE44D] hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <FiChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
};

export default ToTopButton;