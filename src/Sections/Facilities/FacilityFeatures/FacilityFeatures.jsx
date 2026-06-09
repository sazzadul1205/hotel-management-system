// src/Sections/Facilities/FacilityFeatures/FacilityFeatures.jsx
"use client";

import React from "react";

// Icons
import {
  GiKnifeFork,
  GiWineGlass,
  GiMeal,
  GiChampagneCork,
} from "react-icons/gi";
import { FiCheck } from "react-icons/fi";
import { MdOutlineRoomService, MdOutlineOutdoorGrill } from "react-icons/md";

const FacilityFeatures = ({ content = {} }) => {

  // Destructure content
  const {
    title = "Why Dine With Us",
    subtitle = "Exceptional Features",
    description = "Discover what makes our restaurant a premier dining destination.",
    features = [
      {
        icon: "chef",
        title: "Award-Winning Chefs",
        description: "Our culinary team brings years of international experience.",
      },
      {
        icon: "wine",
        title: "Extensive Wine List",
        description: "Over 300 selections from world-renowned vineyards.",
      },
      {
        icon: "private",
        title: "Private Dining",
        description: "Exclusive rooms for special occasions and business meetings.",
      },
      {
        icon: "outdoor",
        title: "Outdoor Terrace",
        description: "Al fresco dining with stunning city views.",
      },
      {
        icon: "seasonal",
        title: "Seasonal Menu",
        description: "Fresh, locally-sourced ingredients changing with seasons.",
      },
      {
        icon: "service",
        title: "24/7 Room Service",
        description: "Enjoy restaurant quality in the comfort of your room.",
      },
    ],
  } = content;

  // Function to render icons
  const renderIcon = (iconName, className = "h-6 w-6") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "chef":
        return <GiKnifeFork className={iconClass} />;
      case "wine":
        return <GiWineGlass className={iconClass} />;
      case "private":
        return <GiChampagneCork className={iconClass} />;
      case "outdoor":
        return <MdOutlineOutdoorGrill className={iconClass} />;
      case "seasonal":
        return <GiMeal className={iconClass} />;
      case "service":
        return <MdOutlineRoomService className={iconClass} />;
      default:
        return <FiCheck className={iconClass} />;
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <GiKnifeFork className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">{description}</p>
        </div>

        {/* Features */}
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl bg-gray-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]/10 transition-colors duration-300 group-hover:bg-[#FFD700]">
                {renderIcon(feature.icon, "h-8 w-8 transition-colors duration-300 group-hover:text-[#2C4549]")}
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#2C4549]">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityFeatures;