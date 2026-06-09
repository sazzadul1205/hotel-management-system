// src/Sections/AboutUs/MissionVision/MissionVision.jsx

import React from "react";
import { FiHeart, FiStar, FiTarget, FiEye, FiAward, FiUsers, FiGlobe, FiTrendingUp } from "react-icons/fi";

const MissionVision = ({ content = {} }) => {
  // Destructure content with fallbacks
  const {
    title = "Mission & Vision",
    subtitle = "Our Guiding Principles",
    description = "At DA Hotel, our mission and vision shape everything we do. We're committed to creating exceptional experiences while continuously raising the bar in hospitality.",
    mission = {
      title: "Our Mission",
      description: "To provide unparalleled luxury and comfort through personalized service, attention to detail, and genuine care for every guest who walks through our doors.",
      icon: "target",
      points: [
        "Deliver exceptional guest experiences daily",
        "Create a warm and welcoming environment",
        "Exceed expectations through personalized service",
        "Maintain the highest standards of quality"
      ]
    },
    vision = {
      title: "Our Vision",
      description: "To become the world's most beloved hotel brand, recognized for innovation in hospitality while preserving the authentic charm that makes every stay unforgettable.",
      icon: "eye",
      points: [
        "Expand to 10+ locations by 2030",
        "Achieve 5-star rating across all properties",
        "Lead in sustainable luxury hospitality",
        "Create lasting memories for millions of guests"
      ]
    },
    corePurpose = {
      title: "Our Core Purpose",
      description: "To transform ordinary stays into extraordinary memories, one guest at a time.",
      icon: "heart"
    },
    values = [
      {
        title: "Excellence",
        description: "We pursue perfection in every detail",
        icon: "award"
      },
      {
        title: "Integrity",
        description: "We act with honesty and transparency",
        icon: "heart"
      },
      {
        title: "Innovation",
        description: "We embrace change and improvement",
        icon: "trending"
      },
      {
        title: "Warmth",
        description: "We treat guests like family",
        icon: "users"
      }
    ]
  } = content;

  // Helper to render icons
  const renderIcon = (iconName, className = "h-5 w-5 sm:h-6 sm:w-6") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "target":
        return <FiTarget className={iconClass} />;
      case "eye":
        return <FiEye className={iconClass} />;
      case "heart":
        return <FiHeart className={iconClass} />;
      case "award":
        return <FiAward className={iconClass} />;
      case "users":
        return <FiUsers className={iconClass} />;
      case "globe":
        return <FiGlobe className={iconClass} />;
      case "trending":
        return <FiTrendingUp className={iconClass} />;
      case "star":
        return <FiStar className={iconClass} />;
      default:
        return <FiHeart className={iconClass} />;
    }
  };

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiTarget className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              {subtitle}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="mx-auto mb-12 grid max-w-6xl gap-6 sm:mb-16 sm:grid-cols-2 sm:gap-8">
          {/* Mission Card */}
          <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/10 transition-colors duration-300 group-hover:bg-[#FFD700] sm:h-16 sm:w-16">
                {renderIcon(mission.icon, "h-6 w-6 sm:h-7 sm:w-7 transition-colors group-hover:text-[#2C4549]")}
              </div>
              <h3 className="text-xl font-bold text-[#2C4549] sm:text-2xl">{mission.title}</h3>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-5 sm:text-base">
              {mission.description}
            </p>

            <div className="space-y-2 sm:space-y-2.5">
              {mission.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FFD700] sm:h-2 sm:w-2"></div>
                  <span className="text-xs text-gray-600 sm:text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFD700]/10 transition-colors duration-300 group-hover:bg-[#FFD700] sm:h-16 sm:w-16">
                {renderIcon(vision.icon, "h-6 w-6 sm:h-7 sm:w-7 transition-colors group-hover:text-[#2C4549]")}
              </div>
              <h3 className="text-xl font-bold text-[#2C4549] sm:text-2xl">{vision.title}</h3>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-5 sm:text-base">
              {vision.description}
            </p>

            <div className="space-y-2 sm:space-y-2.5">
              {vision.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FFD700] sm:h-2 sm:w-2"></div>
                  <span className="text-xs text-gray-600 sm:text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Purpose Banner */}
        <div className="mx-auto mb-12 max-w-5xl sm:mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-6 text-center sm:p-8 md:p-10">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FFD700]"></div>
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#FFD700]"></div>
            </div>

            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]/20 sm:mb-5 sm:h-20 sm:w-20">
                {renderIcon(corePurpose.icon, "h-7 w-7 sm:h-8 sm:w-8 text-[#FFD700]")}
              </div>
              <h3 className="mb-2 text-xl font-bold text-white sm:mb-3 sm:text-2xl md:text-3xl">
                {corePurpose.title}
              </h3>
              <p className="text-sm text-gray-200 sm:text-base md:text-lg">
                {corePurpose.description}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#2C4549] sm:mb-10 sm:text-3xl">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFD700] sm:mb-4 sm:h-14 sm:w-14">
                  {renderIcon(value.icon, "h-5 w-5 sm:h-6 sm:w-6 transition-colors group-hover:text-[#2C4549]")}
                </div>
                <h4 className="mb-1.5 text-base font-bold text-[#2C4549] sm:mb-2 sm:text-lg">
                  {value.title}
                </h4>
                <p className="text-xs text-gray-500 sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <div className="rounded-xl border border-[#FFD700]/20 bg-white p-5 shadow-sm sm:rounded-2xl sm:p-6">
            <p className="text-sm font-medium text-gray-700 sm:text-base">
              <span className="font-bold text-[#FFD700]">Our Commitment:</span> Every day, we wake up with one goal - to make your stay extraordinary.
              From the moment you arrive until you depart, we're dedicated to exceeding your expectations
              and creating memories that will last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;