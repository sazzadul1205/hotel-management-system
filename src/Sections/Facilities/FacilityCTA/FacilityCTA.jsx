// src/Sections/Facilities/FacilityCTA/FacilityCTA.jsx
"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiPhone, FiMail, FiHeart } from "react-icons/fi";
import { GiKnifeFork } from "react-icons/gi";

const FacilityCTA = ({ content = {} }) => {
  const {
    title = "Ready for an Unforgettable Dining Experience?",
    subtitle = "Book Your Table",
    description = "Reserve your table today and embark on a culinary journey you won't forget.",
    buttons = [
      { text: "Make a Reservation", link: "/booking", type: "primary", icon: "calendar" },
      { text: "View Menu", link: "/facilities/restaurant/menu", type: "secondary", icon: "fork" },
    ],
    contactInfo = {
      phone: "+1 (555) 123-4567",
      email: "restaurant@dahotel.com",
    },
  } = content;

  const renderIcon = (iconName, className = "h-4 w-4") => {
    switch (iconName) {
      case "calendar":
        return <FiCalendar className={className} />;
      case "fork":
        return <GiKnifeFork className={className} />;
      default:
        return <FiHeart className={className} />;
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-linear-to-r from-[#2C4549] to-[#1a2f33]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FFD700]"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#FFD700]"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/20 px-4 py-2">
            <GiKnifeFork className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#FFD700]">{subtitle}</span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-200 sm:text-base">
            {description}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.link}
                className={`group flex transform items-center justify-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:px-8 sm:py-3 sm:text-base ${button.type === "primary"
                    ? "bg-[#FFD700] text-[#2C4549] shadow-lg hover:bg-[#FFE44D]"
                    : "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  }`}
              >
                {renderIcon(button.icon, "h-4 w-4 sm:h-5 sm:w-5")}
                {button.text}
                <FiArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:gap-5">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-sm text-gray-200 hover:text-[#FFD700]">
              <FiPhone size={14} /> {contactInfo.phone}
            </a>
            <span className="hidden text-gray-400 sm:block">|</span>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-sm text-gray-200 hover:text-[#FFD700]">
              <FiMail size={14} /> {contactInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityCTA;