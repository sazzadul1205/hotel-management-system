// src/Sections/Dining/DiningHero/DiningHero.jsx
"use client";

// React
import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiArrowRight,
  FiAward,
  FiUsers,
  FiClock,
  FiStar,
} from "react-icons/fi";
import {
  GiMeal,
  GiKnifeFork,
  GiCoffeePot,
  GiChampagneCork,
} from "react-icons/gi";

const DiningHero = ({ content = {} }) => {
  const {
    title = "Exquisite Dining Experiences",
    subtitle = "Culinary Excellence at DA Hotel",
    description = "Embark on a gastronomic journey at our signature restaurants and bars. From authentic local cuisine to international delicacies, every dish is crafted with passion and precision by our award-winning chefs.",
    backgroundImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    diningOptions = [
      { name: "Fine Dining", icon: "champagne", description: "Elegant evenings" },
      { name: "Casual Dining", icon: "meal", description: "Relaxed atmosphere" },
      { name: "Café & Bar", icon: "coffee", description: "Light bites & drinks" },
      { name: "Room Service", icon: "fork", description: "24/7 in-room dining" },
    ],
    stats = [
      { value: "4.9", label: "Google Rating", icon: "star" },
      { value: "1000+", label: "Happy Diners", icon: "users" },
      { value: "8 AM", label: "Open Daily", icon: "clock" },
      { value: "Award", label: "Winning", icon: "award" },
    ],
    primaryCta = {
      text: "Explore Menus",
      link: "#menus",
    },
    secondaryCta = {
      text: "Make a Reservation",
      link: "/booking",
    },
  } = content;

  // Function to render icons
  const renderIcon = (iconName, className = "h-4 w-4 sm:h-5 sm:w-5") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "users":
        return <FiUsers className={iconClass} />;
      case "star":
        return <FiStar className={iconClass} />;
      case "clock":
        return <FiClock className={iconClass} />;
      case "award":
        return <FiAward className={iconClass} />;
      case "champagne":
        return <GiChampagneCork className={iconClass} />;
      case "meal":
        return <GiMeal className={iconClass} />;
      case "coffee":
        return <GiCoffeePot className={iconClass} />;
      case "fork":
        return <GiKnifeFork className={iconClass} />;
      default:
        return <GiKnifeFork className={iconClass} />;
    }
  };

  return (
    <div className="relative min-h-[60vh] w-full overflow-hidden md:min-h-[70vh] lg:min-h-[80vh]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="DA Hotel Dining - Exquisite Restaurant Experience"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/70">
        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      {/* Decorative Gold Accent */}
      <div className="absolute left-0 top-0 hidden h-full w-1.5 bg-linear-to-b from-[#FFD700] via-[#FFD700]/50 to-transparent opacity-40 md:block"></div>
      <div className="absolute right-0 top-0 hidden h-full w-1.5 bg-linear-to-b from-transparent via-[#FFD700]/50 to-[#FFD700] opacity-40 md:block"></div>

      {/* Main Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-5xl animate-fade-in-up">
          {/* Subtitle / Tagline */}
          <div className="mb-3 flex items-center justify-center gap-2 md:mb-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD700]/20">
              <GiKnifeFork className="h-3 w-3 text-[#FFD700] sm:h-3.5 sm:w-3.5" />
            </div>
            <span className="text-xs font-semibold tracking-wide text-[#FFD700] uppercase sm:text-sm">
              {subtitle}
            </span>
            <div className="hidden h-px w-12 bg-[#FFD700]/50 md:block"></div>
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
            {title.includes("Exquisite") ? (
              <>
                {title.replace("Exquisite", "")}
                <span className="block text-[#FFD700] md:inline-block md:ml-3">
                  Exquisite
                </span>
              </>
            ) : (
              title
            )}
          </h1>

          {/* Description */}
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-gray-100 sm:max-w-3xl sm:text-base md:mb-8 md:text-lg">
            {description}
          </p>

          {/* Dining Options Pills */}
          <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 sm:gap-3">
            {diningOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm transition hover:bg-[#FFD700] hover:text-[#2C4549] sm:gap-2 sm:px-4 sm:py-2"
              >
                {renderIcon(option.icon, "h-3 w-3 sm:h-3.5 sm:w-3.5")}
                <span className="text-xs font-medium sm:text-sm">
                  {option.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {/* Primary CTA */}
            <Link
              href={primaryCta.link}
              className="group flex w-full transform items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-xl sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              <GiKnifeFork size={18} />
              {primaryCta.text}
              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary CTA */}
            <Link
              href={secondaryCta.link}
              className="flex w-full transform items-center justify-center gap-2 rounded-lg border-2 border-[#FFD700] bg-transparent px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#FFD700] hover:text-[#2C4549] hover:shadow-xl sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              <FiClock size={18} />
              {secondaryCta.text}
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-white/20 pt-6 sm:mt-10 sm:gap-6 md:mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1 text-lg font-bold text-[#FFD700] sm:text-xl md:text-2xl">
                  {renderIcon(stat.icon, "h-4 w-4 sm:h-5 sm:w-5")}
                  {stat.value}
                </div>
                <p className="text-xs text-gray-200 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-3 w-3 text-[#FFD700] sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-300">Rated #1 for Dining Experiences</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform animate-bounce sm:bottom-6 md:block">
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-[#FFD700]/50 sm:h-10 sm:w-6">
          <div className="animate-scroll-down mt-1.5 h-1.5 w-1 rounded-full bg-[#FFD700] sm:mt-2 sm:h-2 sm:w-1"></div>
        </div>
        <p className="mt-2 hidden text-xs text-gray-300 sm:block">Explore Dining</p>
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

export default DiningHero;