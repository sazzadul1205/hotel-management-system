// src/Shared/Component/About/HeroAbout/HeroAbout.jsx

// React
import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Icons
import { FiArrowRight, FiHeart, FiInfo, FiAward } from "react-icons/fi";

const HeroAbout = ({ content = {} }) => {
  // Destructure content with fallbacks
  const {
    title = "More Than Just a Stay, An Experience",
    subtitle = "Our Story",
    description = "Since 2015, DA Hotel has been redefining hospitality by blending modern luxury with authentic warmth. We create spaces where guests feel truly at home, offering personalized service, world-class amenities, and unforgettable moments.",
    backgroundImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    primaryCta = {
      text: "Discover Our Story",
      link: "/about/mission",
    },
    secondaryCta = {
      text: "Contact Our Team",
      link: "/contact",
    },
    stats = [
      { value: "10+", label: "Years of Excellence", icon: "award" },
      { value: "500+", label: "Happy Guests Monthly", icon: null },
      { value: "4.8 ★", label: "Guest Rating", icon: null },
    ],
  } = content;

  // Helper to render stats
  const renderStatValue = (stat) => {
    if (stat.icon === "award") {
      return (
        <div className="flex items-center justify-center gap-1 text-lg font-bold text-[#FFD700] sm:text-xl md:justify-start md:text-2xl">
          <FiAward className="h-4 w-4 sm:h-5 sm:w-5" />
          {stat.value}
        </div>
      );
    }
    return (
      <div className="text-lg font-bold text-[#FFD700] sm:text-xl md:text-2xl">
        {stat.value}
      </div>
    );
  };

  return (
    <div className="relative h-[70vh] min-h-125 w-full overflow-hidden md:min-h-137.5 lg:min-h-150">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="DA Hotel Luxury Hotel - Welcome to Paradise"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Enhanced Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/60 md:from-black/60 md:to-black/50" />

      {/* Decorative Accent Lines (Desktop only) */}
      <div className="absolute left-0 top-0 hidden h-full w-1 bg-[#FFD700] opacity-30 md:block"></div>

      {/* Main Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6 md:items-start md:px-8 lg:px-12 md:text-left">
        <div className="w-full max-w-4xl animate-fade-in-up">
          {/* Subtitle / Tagline with Icon */}
          <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD700]/20">
              <FiHeart className="h-3 w-3 text-[#FFD700] sm:h-3.5 sm:w-3.5" />
            </div>
            <span className="text-xs font-semibold tracking-wide text-[#FFD700] uppercase sm:text-sm">
              {subtitle}
            </span>
          </div>

          {/* Main Heading - Split to handle highlighted part */}
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
            {title.includes("An Experience") ? (
              <>
                {title.replace("An Experience", "")}
                <span className="block text-[#FFD700] md:inline">An Experience</span>
              </>
            ) : (
              title
            )}
          </h1>

          {/* Description */}
          <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-gray-100 sm:max-w-xl sm:text-base md:mx-0 md:mb-8 md:max-w-2xl md:text-lg">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
            {/* Primary CTA */}
            <Link
              href={primaryCta.link}
              className="group flex w-full transform items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-5 py-2.5 text-sm font-semibold text-[#2C4549] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-xl sm:w-auto sm:px-6 sm:py-3 sm:text-base"
            >
              <FiInfo size={18} className="sm:h-5 sm:w-5" />
              {primaryCta.text}
              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href={secondaryCta.link}
              className="flex w-full transform items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg sm:w-auto sm:px-6 sm:py-3 sm:text-base"
            >
              <FiHeart size={18} className="sm:h-5 sm:w-5" />
              {secondaryCta.text}
            </Link>
          </div>

          {/* Trust Badges / Quick Stats */}
          {stats && stats.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-white/20 pt-6 sm:gap-8 md:justify-start md:gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  {renderStatValue(stat)}
                  <p className="text-xs text-gray-200 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform animate-bounce sm:bottom-6 md:block">
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white/50 sm:h-10 sm:w-6">
          <div className="animate-scroll-down mt-1.5 h-1.5 w-1 rounded-full bg-white sm:mt-2 sm:h-2 sm:w-1"></div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes scrollDown {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        
        .animate-scroll-down {
          animation: scrollDown 1.5s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroAbout;