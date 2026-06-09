// src/Sections/AboutUs/OurStory/OurStory.jsx

import React from "react";

// Icons
import { FiHeart, FiAward, FiUsers, FiStar } from "react-icons/fi";

const OurStory = ({ content = {} }) => {
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

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiHeart className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
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

        {/* Story Timeline */}
        <div className="mx-auto mb-12 max-w-5xl sm:mb-16 md:mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[#FFD700]/30 sm:left-1/2 sm:-translate-x-1/2"></div>

            {/* Timeline Items */}
            {storyDetails.map((item, index) => (
              <div
                key={index}
                className={`relative mb-8 flex flex-col ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } items-start sm:mb-12`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700] shadow-md sm:left-1/2 sm:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-[#2C4549]"></div>
                </div>

                {/* Content */}
                <div
                  className={`ml-12 w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                >
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

        {/* Mission & Vision */}
        <div className="mx-auto mb-12 grid max-w-5xl gap-6 sm:mb-16 sm:grid-cols-2 sm:gap-8">
          {/* Mission Card */}
          <div className="group rounded-xl bg-linear-to-br from-[#2C4549] to-[#1a2f33] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD700]/20 transition-colors group-hover:bg-[#FFD700] sm:h-16 sm:w-16">
              {renderIcon(mission.icon, "h-6 w-6 sm:h-7 sm:w-7 transition-colors group-hover:text-[#2C4549]")}
            </div>
            <h3 className="mb-3 text-xl font-bold sm:text-2xl">{mission.title}</h3>
            <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
              {mission.description}
            </p>
          </div>

          {/* Vision Card */}
          <div className="group rounded-xl bg-linear-to-br from-gray-50 to-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD700]/10 transition-colors group-hover:bg-[#FFD700] sm:h-16 sm:w-16">
              {renderIcon(vision.icon, "h-6 w-6 sm:h-7 sm:w-7 transition-colors group-hover:text-[#2C4549]")}
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#2C4549] sm:text-2xl">{vision.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              {vision.description}
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-8 text-center text-2xl font-bold text-[#2C4549] sm:mb-10 sm:text-3xl">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-xl bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10 transition-colors group-hover:bg-[#FFD700] sm:mb-4 sm:h-14 sm:w-14">
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

        {/* Decorative Quote */}
        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <div className="rounded-xl bg-[#FFD700]/5 p-6 sm:rounded-2xl sm:p-8">
            <FiHeart className="mx-auto mb-3 h-8 w-8 text-[#FFD700] opacity-50 sm:mb-4 sm:h-10 sm:w-10" />
            <p className="text-base italic text-gray-600 sm:text-lg md:text-xl">
              &quot;We don&apos;t just host guests; we create memories that last a lifetime. Every stay is a
              story, and we&apos;re honored to be part of yours.&quot;
            </p>
            <p className="mt-3 text-sm font-semibold text-[#2C4549] sm:mt-4 sm:text-base">
              — Founder, DA Hotel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;