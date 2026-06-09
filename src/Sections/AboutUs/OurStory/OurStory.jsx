// src/Sections/AboutUs/OurStory/OurStory.jsx
"use client";

import React, { useState, useEffect } from "react";

// Icons
import { FiHeart, FiAward, FiUsers, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OurStory = ({ content = {} }) => {
  // State for mobile timeline view
  const [isMobile, setIsMobile] = useState(false);
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);

  // Check screen size for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Destructure content with fallbacks
  const {
    title = "Our Story",
    description = "DA Hotel was founded in 2015 with a simple yet powerful vision: to create a sanctuary where luxury meets genuine hospitality. What started as a dream to redefine the hotel experience has now become one of the most beloved destinations for travelers from around the world.",
    storyDetails = [
      {
        year: "2015",
        title: "The Beginning",
        description:
          "DA Hotel opened its doors with just 20 rooms, a passionate team, and a commitment to exceptional service.",
      },
      {
        year: "2018",
        title: "Expansion",
        description:
          "Added 50 new luxury suites, a world-class spa, and our signature rooftop restaurant.",
      },
      {
        year: "2021",
        title: "Recognition",
        description:
          "Awarded 'Best Luxury Hotel' by Travel Weekly and achieved 4.8-star guest rating.",
      },
      {
        year: "2024",
        title: "Today",
        description:
          "Now featuring 150+ rooms, 3 restaurants, and serving thousands of happy guests annually.",
      },
    ],
    mission = {
      title: "Our Mission",
      description:
        "To create unforgettable experiences through personalized service, luxurious comfort, and genuine warmth that makes every guest feel like family.",
      icon: "heart",
    },
    vision = {
      title: "Our Vision",
      description:
        "To be the most loved hotel brand, setting new standards in hospitality while preserving the authentic charm that makes every stay special.",
      icon: "star",
    },
    values = [
      {
        title: "Excellence",
        description: "We strive for perfection in every detail",
        icon: "award",
      },
      {
        title: "Integrity",
        description: "Honest and transparent in all we do",
        icon: "heart",
      },
      {
        title: "Innovation",
        description: "Continuously improving guest experience",
        icon: "star",
      },
      {
        title: "Community",
        description: "Building lasting relationships with guests",
        icon: "users",
      },
    ],
  } = content;

  // Helper to render icons
  const renderIcon = (iconName, className = "h-5 w-5 sm:h-6 sm:w-6") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "heart":
        return <FiHeart className={iconClass} />;
      case "award":
        return <FiAward className={iconClass} />;
      case "star":
        return <FiStar className={iconClass} />;
      case "users":
        return <FiUsers className={iconClass} />;
      default:
        return <FiHeart className={iconClass} />;
    }
  };

  // Mobile timeline navigation
  const nextTimeline = () => {
    setCurrentTimelineIndex((prev) => (prev + 1) % storyDetails.length);
  };

  const prevTimeline = () => {
    setCurrentTimelineIndex((prev) => (prev - 1 + storyDetails.length) % storyDetails.length);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header - Fully Responsive */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiHeart className="h-3 w-3 text-[#FFD700] sm:h-4 sm:w-4" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              Our Story
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Story Timeline - Responsive with mobile carousel */}
        <div className="mx-auto mb-12 max-w-5xl sm:mb-16 md:mb-20">
          {/* Desktop Timeline */}
          <div className="hidden sm:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#FFD700]/30"></div>

              {/* Timeline Items */}
              {storyDetails.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-8 flex flex-col ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } items-start sm:mb-12`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#FFD700] shadow-md">
                    <div className="h-2 w-2 rounded-full bg-[#2C4549]"></div>
                  </div>

                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:shadow-md sm:p-6">
                      <span className="mb-1 inline-block text-sm font-bold text-[#FFD700] sm:mb-2 sm:text-base">
                        {item.year}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-[#2C4549] sm:mb-3 sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 sm:text-base">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline Carousel */}
          <div className="block sm:hidden">
            <div className="relative">
              {/* Mobile Carousel Content */}
              <div className="overflow-hidden rounded-xl">
                <div className="p-1">
                  <div className="rounded-xl bg-gray-50 p-5">
                    <div className="mb-2 text-center">
                      <span className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-xs font-bold text-[#2C4549]">
                        {storyDetails[currentTimelineIndex].year}
                      </span>
                    </div>
                    <h3 className="mb-3 text-center text-lg font-bold text-[#2C4549]">
                      {storyDetails[currentTimelineIndex].title}
                    </h3>
                    <p className="text-center text-sm text-gray-600">
                      {storyDetails[currentTimelineIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Arrows */}
              <button
                onClick={prevTimeline}
                className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-[#FFD700]"
                aria-label="Previous"
              >
                <FiChevronLeft className="h-4 w-4 text-[#2C4549]" />
              </button>
              <button
                onClick={nextTimeline}
                className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition hover:bg-[#FFD700]"
                aria-label="Next"
              >
                <FiChevronRight className="h-4 w-4 text-[#2C4549]" />
              </button>

              {/* Mobile Dots Indicator */}
              <div className="mt-4 flex justify-center gap-2">
                {storyDetails.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTimelineIndex(idx)}
                    className={`h-2 rounded-full transition-all ${currentTimelineIndex === idx
                        ? "w-6 bg-[#FFD700]"
                        : "w-2 bg-gray-300"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Responsive Grid */}
        <div className="mx-auto mb-12 grid max-w-5xl gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-6 md:gap-8">
          {/* Mission Card */}
          <div className="group rounded-xl bg-linear-to-br from-[#2C4549] to-[#1a2f33] p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6 md:p-8">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/20 transition-colors group-hover:bg-[#FFD700] sm:mb-4 sm:h-14 sm:w-14 md:h-16 md:w-16">
              {renderIcon(mission.icon, "h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 transition-colors group-hover:text-[#2C4549]")}
            </div>
            <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl md:text-2xl">
              {mission.title}
            </h3>
            <p className="text-xs leading-relaxed text-gray-200 sm:text-sm md:text-base">
              {mission.description}
            </p>
          </div>

          {/* Vision Card */}
          <div className="group rounded-xl bg-linear-to-br from-gray-50 to-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6 md:p-8">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10 transition-colors group-hover:bg-[#FFD700] sm:mb-4 sm:h-14 sm:w-14 md:h-16 md:w-16">
              {renderIcon(vision.icon, "h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 transition-colors group-hover:text-[#2C4549]")}
            </div>
            <h3 className="mb-2 text-lg font-bold text-[#2C4549] sm:mb-3 sm:text-xl md:text-2xl">
              {vision.title}
            </h3>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm md:text-base">
              {vision.description}
            </p>
          </div>
        </div>

        {/* Our Values - Responsive Grid */}
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:mb-8 sm:text-2xl md:mb-10 md:text-3xl">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 md:p-6"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFD700] sm:mb-3 sm:h-12 sm:w-12 md:mb-4 md:h-14 md:w-14">
                  {renderIcon(value.icon, "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-colors group-hover:text-[#2C4549]")}
                </div>
                <h4 className="mb-1 text-sm font-bold text-[#2C4549] sm:mb-1.5 sm:text-base md:mb-2 md:text-lg">
                  {value.title}
                </h4>
                <p className="text-xs text-gray-500 sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Quote - Responsive */}
        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12 md:mt-16">
          <div className="rounded-xl bg-[#FFD700]/5 p-4 sm:rounded-2xl sm:p-6 md:p-8">
            <FiHeart className="mx-auto mb-2 h-6 w-6 text-[#FFD700] opacity-50 sm:mb-3 sm:h-8 sm:w-8 md:mb-4 md:h-10 md:w-10" />
            <p className="text-sm italic text-gray-600 sm:text-base md:text-lg lg:text-xl">
              &quot;We don&apos;t just host guests; we create memories that last a lifetime. Every stay is a
              story, and we&apos;re honored to be part of yours.&quot;
            </p>
            <p className="mt-2 text-xs font-semibold text-[#2C4549] sm:mt-3 sm:text-sm md:mt-4 md:text-base">
              — Founder, DA Hotel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;