// src/Sections/Facilities/FacilityHero/FacilityHero.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiHeart,
  FiAward,
  FiUsers,
  FiClock,
  FiStar,
} from "react-icons/fi";
import { GiKnifeFork, GiChopsticks, GiCoffeePot } from "react-icons/gi";

const FacilityHero = ({ content = {} }) => {
  const {
    title = "Fine Dining Restaurant",
    subtitle = "Culinary Excellence",
    description = "Experience an unforgettable culinary journey at our signature restaurant. From local delicacies to international cuisine, every dish is crafted with passion and precision.",
    backgroundImage = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cuisineTypes = [
      { name: "International", icon: "fork", count: "50+ Dishes" },
      { name: "Local Specialties", icon: "chopsticks", count: "30+ Dishes" },
      { name: "Chef's Menu", icon: "coffee", count: "Seasonal" },
    ],
    stats = [
      { value: "100+", label: "Daily Guests", icon: "users" },
      { value: "4.9", label: "Rating", icon: "star" },
      { value: "8 AM", label: "Open Daily", icon: "clock" },
      { value: "Award", label: "Winning", icon: "award" },
    ],
    primaryCta = {
      text: "View Menu",
      link: "#menu",
    },
    secondaryCta = {
      text: "Make Reservation",
      link: "/booking",
    },
  } = content;

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
      case "fork":
        return <GiKnifeFork className={iconClass} />;
      case "chopsticks":
        return <GiChopsticks className={iconClass} />;
      case "coffee":
        return <GiCoffeePot className={iconClass} />;
      default:
        return <FiHeart className={iconClass} />;
    }
  };

  return (
    <div className="relative min-h-[60vh] w-full overflow-hidden md:min-h-[70vh]">
      <Image
        src={backgroundImage}
        alt="DA Hotel Restaurant - Fine Dining Experience"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/70">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6 md:px-8">
        <div className="w-full max-w-5xl animate-fade-in-up">
          <div className="mb-3 flex items-center justify-center gap-2 md:mb-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD700]/20">
              <GiKnifeFork className="h-3 w-3 text-[#FFD700] sm:h-3.5 sm:w-3.5" />
            </div>
            <span className="text-xs font-semibold tracking-wide text-[#FFD700] uppercase sm:text-sm">
              {subtitle}
            </span>
            <div className="hidden h-px w-12 bg-[#FFD700]/50 md:block"></div>
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-gray-100 sm:max-w-3xl sm:text-base md:mb-8 md:text-lg">
            {description}
          </p>

          {/* Cuisine Types */}
          <div className="mb-6 flex flex-wrap justify-center gap-3 sm:mb-8">
            {cuisineTypes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
              >
                {renderIcon(item.icon, "h-4 w-4")}
                <span className="text-sm font-medium">
                  {item.name} <span className="text-[#FFD700]">({item.count})</span>
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href={primaryCta.link}
              className="group flex w-full transform items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-xl sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              <GiKnifeFork size={18} />
              {primaryCta.text}
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryCta.link}
              className="flex w-full transform items-center justify-center gap-2 rounded-lg border-2 border-[#FFD700] bg-transparent px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[#FFD700] hover:text-[#2C4549] sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              <FiClock size={18} />
              {secondaryCta.text}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-white/20 pt-6 sm:mt-10 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1 text-xl font-bold text-[#FFD700] sm:text-2xl">
                  {renderIcon(stat.icon, "h-5 w-5")}
                  {stat.value}
                </div>
                <p className="text-xs text-gray-200 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default FacilityHero;