// src/Sections/AboutUs/HotelStats/HotelStats.jsx
"use client";

// React
import React from "react";

// CountUp Package
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Icons
import {
  FiUsers,
  FiAward,
  FiClock,
  FiMapPin,
  FiStar,
  FiHeart,
  FiBriefcase,
  FiCoffee,
  FiSmile,
  FiThumbsUp,
} from "react-icons/fi";
import { MdOutlineRoomService, MdOutlinePool, MdOutlineRestaurantMenu } from "react-icons/md";

const HotelStats = ({ content = {} }) => {
  // Use react-intersection-observer for scroll detection
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Destructure content with fallbacks
  const {
    title = "DA Hotel By The Numbers",
    subtitle = "Our Impact in Statistics",
    description = "Numbers that speak louder than words - showcasing our commitment to excellence and guest satisfaction.",
    stats = [
      {
        id: 1,
        value: 5280,
        suffix: "+",
        label: "Happy Guests",
        icon: "users",
        duration: 2.5,
      },
      {
        id: 2,
        value: 15,
        suffix: "K",
        label: "Nights Booked",
        icon: "clock",
        duration: 2.5,
      },
      {
        id: 3,
        value: 98,
        suffix: "%",
        label: "Satisfaction Rate",
        icon: "smile",
        duration: 2.5,
      },
      {
        id: 4,
        value: 4.9,
        suffix: "",
        label: "Guest Rating",
        icon: "star",
        duration: 2.5,
        decimals: 1,
      },
      {
        id: 5,
        value: 150,
        suffix: "+",
        label: "Luxury Rooms",
        icon: "room",
        duration: 2.5,
      },
      {
        id: 6,
        value: 3,
        suffix: "",
        label: "World-Class Restaurants",
        icon: "restaurant",
        duration: 2.5,
      },
      {
        id: 7,
        value: 24,
        suffix: "/7",
        label: "Room Service",
        icon: "service",
        duration: 2.5,
      },
      {
        id: 8,
        value: 5000,
        suffix: "+",
        label: "Coffees Served",
        icon: "coffee",
        duration: 2.5,
      },
    ],
    achievements = [
      {
        title: "Best Luxury Hotel 2024",
        organization: "Travel Weekly Awards",
        year: "2024",
        icon: "award",
      },
      {
        title: "Excellence in Service",
        organization: "Hospitality Association",
        year: "2023",
        icon: "thumbsUp",
      },
      {
        title: "Top 10 Hotels in the City",
        organization: "TripAdvisor",
        year: "2024",
        icon: "star",
      },
    ],
    cta = {
      text: "Experience Excellence",
      link: "/booking",
    },
  } = content;

  // Helper to render icons
  const renderIcon = (iconName, className = "h-5 w-5 sm:h-6 sm:w-6") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "users":
        return <FiUsers className={iconClass} />;
      case "award":
        return <FiAward className={iconClass} />;
      case "clock":
        return <FiClock className={iconClass} />;
      case "pin":
        return <FiMapPin className={iconClass} />;
      case "star":
        return <FiStar className={iconClass} />;
      case "heart":
        return <FiHeart className={iconClass} />;
      case "briefcase":
        return <FiBriefcase className={iconClass} />;
      case "coffee":
        return <FiCoffee className={iconClass} />;
      case "smile":
        return <FiSmile className={iconClass} />;
      case "thumbsUp":
        return <FiThumbsUp className={iconClass} />;
      case "room":
        return <FiUsers className={iconClass} />;
      case "restaurant":
        return <MdOutlineRestaurantMenu className={iconClass} />;
      case "service":
        return <MdOutlineRoomService className={iconClass} />;
      case "pool":
        return <MdOutlinePool className={iconClass} />;
      default:
        return <FiHeart className={iconClass} />;
    }
  };

  return (
    <section
      ref={ref}
      className="bg-linear-to-b from-[#2C4549] to-[#1a2f33] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiStar className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#FFD700] uppercase sm:text-sm">
              {subtitle}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-300 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mx-auto mb-12 grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group rounded-xl bg-white/10 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:p-6"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFD700] sm:mb-4 sm:h-14 sm:w-14">
                {renderIcon(stat.icon, "h-5 w-5 sm:h-6 sm:w-6 transition-colors group-hover:text-[#2C4549]")}
              </div>
              <div className="mb-1 text-2xl font-bold text-[#FFD700] sm:mb-2 sm:text-3xl md:text-4xl">
                {inView ? (
                  <>
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={stat.duration || 2.5}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                      enableScrollSpy={false}
                      redrawOnParentScroll
                    />
                  </>
                ) : (
                  <>
                    0{stat.suffix}
                  </>
                )}
              </div>
              <p className="text-xs font-medium text-gray-200 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        {achievements && achievements.length > 0 && (
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-6 text-center text-xl font-bold text-white sm:mb-8 sm:text-2xl">
              🏆 Recent Achievements
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-5"
                >
                  <div className="mb-2 flex items-center gap-2 sm:mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/20 transition-all group-hover:scale-110 sm:h-10 sm:w-10">
                      {renderIcon(achievement.icon, "h-4 w-4 sm:h-5 sm:w-5")}
                    </div>
                    <span className="text-xs font-semibold text-[#FFD700] sm:text-sm">
                      {achievement.year}
                    </span>
                  </div>
                  <h4 className="mb-1 text-sm font-bold text-white sm:mb-1.5 sm:text-base">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-gray-300 sm:text-sm">{achievement.organization}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-10 text-center sm:mt-12">
          <a
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <FiHeart size={16} className="sm:h-4.5 sm:w-4.5" />
            {cta.text}
            <FiThumbsUp size={16} className="sm:h-4.5 sm:w-4.5" />
          </a>
          <p className="mt-3 text-xs text-gray-400 sm:mt-4 sm:text-sm">
            * Numbers updated quarterly. Based on guest feedback and operational data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HotelStats;