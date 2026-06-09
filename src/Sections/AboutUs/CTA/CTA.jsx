// src/Sections/AboutUs/CTA/CTA.jsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import {
  FiArrowRight,
  FiHeart,
  FiCalendar,
  FiPhone,
  FiMail,
  FiStar,
  FiAward,
  FiUsers,
  FiCheck,
  FiGift,
  FiClock,
  FiMapPin,
} from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";

const CTA = ({ content = {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);

  // Destructure content with fallbacks
  const {
    title = "Ready to Experience Luxury?",
    subtitle = "Limited Time Offer",
    description = "Book your stay today and enjoy exclusive benefits. Create unforgettable memories at DA Hotel.",
    highlights = [
      {
        text: "Best Price Guarantee",
        icon: "award",
      },
      {
        text: "Free Cancellation",
        icon: "check",
      },
      {
        text: "No Booking Fees",
        icon: "gift",
      },
      {
        text: "24/7 Support",
        icon: "clock",
      },
    ],
    buttons = [
      {
        text: "Book Now",
        link: "/booking",
        type: "primary",
        icon: "calendar",
      },
      {
        text: "Contact Us",
        link: "/contact",
        type: "secondary",
        icon: "phone",
      },
    ],
    offers = [
      {
        title: "Early Bird Discount",
        description: "Save 20% when you book 30 days in advance",
        code: "EARLY20",
        validUntil: "Dec 31, 2024",
      },
      {
        title: "Weekend Getaway",
        description: "Stay 2 nights, get 3rd night free",
        code: "WEEKEND3",
        validUntil: "Dec 31, 2024",
      },
      {
        title: "Corporate Rate",
        description: "Special pricing for business travelers",
        code: "CORP15",
        validUntil: "Dec 31, 2024",
      },
    ],
    backgroundImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    stats = [
      { value: "500+", label: "Happy Guests", icon: "users" },
      { value: "4.9", label: "Guest Rating", icon: "star" },
      { value: "24/7", label: "Support", icon: "clock" },
    ],
    contactInfo = {
      phone: "+1 (555) 123-4567",
      email: "reservations@dahotel.com",
    },
  } = content;

  // Auto-rotate offers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offers.length]);

  // Helper to render icons
  const renderIcon = (iconName, className = "h-4 w-4 sm:h-5 sm:w-5") => {
    const iconClass = `text-current ${className}`;
    switch (iconName) {
      case "award":
        return <FiAward className={iconClass} />;
      case "check":
        return <FiCheck className={iconClass} />;
      case "gift":
        return <FiGift className={iconClass} />;
      case "clock":
        return <FiClock className={iconClass} />;
      case "calendar":
        return <FiCalendar className={iconClass} />;
      case "phone":
        return <FiPhone className={iconClass} />;
      case "mail":
        return <FiMail className={iconClass} />;
      case "star":
        return <FiStar className={iconClass} />;
      case "users":
        return <FiUsers className={iconClass} />;
      case "map":
        return <FiMapPin className={iconClass} />;
      default:
        return <FiHeart className={iconClass} />;
    }
  };

  const copyPromoCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);

      // SweetAlert2 Success Toast
      Swal.fire({
        title: "Code Copied!",
        text: `${code} has been copied to clipboard`,
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "#2C4549",
        color: "#fff",
        iconColor: "#FFD700",
        customClass: {
          popup: "rounded-xl",
        },
      });
    } catch (error) {
      // SweetAlert2 Error Toast
      Swal.fire({
        title: "Failed to Copy",
        text: "Please try again or copy manually",
        icon: "error",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "#2C4549",
        color: "#fff",
        iconColor: "#FFD700",
      });
    }
  };

  // Copy all promo codes at once
  const copyAllCodes = () => {
    const allCodes = offers.map(offer => offer.code).join(", ");
    navigator.clipboard.writeText(allCodes);

    Swal.fire({
      title: "All Codes Copied!",
      html: `<span class="text-sm">${allCodes}</span><br/><span class="text-xs text-gray-400">Use these codes at checkout</span>`,
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      background: "#2C4549",
      color: "#fff",
      iconColor: "#FFD700",
    });
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#2C4549]/95 to-[#1a2f33]/90"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FFD700]/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#FFD700]/5 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-8 text-center sm:mb-10 md:mb-12">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/20 px-3 py-1.5 backdrop-blur-sm sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
              <MdOutlineLocalOffer className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
              <span className="text-xs font-semibold tracking-wide text-[#FFD700] uppercase sm:text-sm">
                {subtitle}
              </span>
            </div>

            <h2 className="mb-3 text-3xl font-bold text-white sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mx-auto max-w-2xl text-sm text-gray-200 sm:text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Highlights Bar */}
          <div className="mb-8 flex flex-wrap justify-center gap-3 sm:mb-10 sm:gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
              >
                {renderIcon(highlight.icon, "h-3 w-3 sm:h-4 sm:w-4")}
                <span>{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.link}
                onMouseEnter={() => button.type === "primary" && setIsHovered(true)}
                onMouseLeave={() => button.type === "primary" && setIsHovered(false)}
                className={`group flex transform items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:px-8 sm:py-3.5 sm:text-base ${button.type === "primary"
                    ? "bg-[#FFD700] text-[#2C4549] shadow-lg hover:bg-[#FFE44D] hover:shadow-xl"
                    : "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  }`}
              >
                {renderIcon(button.icon, "h-4 w-4 sm:h-5 sm:w-5")}
                {button.text}
                {button.type === "primary" && (
                  <FiArrowRight
                    className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""
                      }`}
                    size={16}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Offers Carousel */}
          <div className="mx-auto mb-10 max-w-2xl sm:mb-12">
            <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-md">
              <div className="relative p-5 sm:p-6">
                <div className="absolute right-3 top-3 rounded-full bg-[#FFD700]/20 px-2 py-0.5 text-xs text-[#FFD700] sm:right-4 sm:top-4">
                  {currentOffer + 1}/{offers.length}
                </div>
                <div className="text-center">
                  <div className="mb-2 flex justify-center">
                    <div className="rounded-full bg-[#FFD700]/20 p-2">
                      <MdOutlineLocalOffer className="h-5 w-5 text-[#FFD700] sm:h-6 sm:w-6" />
                    </div>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-white sm:mb-2 sm:text-xl">
                    {offers[currentOffer].title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-200">{offers[currentOffer].description}</p>
                  <div className="flex items-center justify-center gap-2">
                    <code className="rounded bg-[#2C4549] px-3 py-1 text-sm font-bold text-[#FFD700]">
                      {offers[currentOffer].code}
                    </code>
                    <button
                      onClick={() => copyPromoCode(offers[currentOffer].code)}
                      className="rounded bg-white/20 px-2 py-1 text-xs text-white transition hover:bg-white/30"
                    >
                      Copy
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-300">
                    Valid until {offers[currentOffer].validUntil}
                  </p>
                </div>

                {/* Carousel Dots */}
                <div className="mt-4 flex justify-center gap-1.5">
                  {offers.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentOffer(idx)}
                      className={`h-1.5 rounded-full transition-all ${currentOffer === idx ? "w-4 bg-[#FFD700]" : "w-1.5 bg-white/30"
                        }`}
                    />
                  ))}
                </div>

                {/* Copy All Codes Button */}
                <div className="mt-4 text-center">
                  <button
                    onClick={copyAllCodes}
                    className="text-xs text-gray-300 transition hover:text-[#FFD700]"
                  >
                    Copy all promo codes →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-8 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1 text-xl font-bold text-[#FFD700] sm:text-2xl">
                  {renderIcon(stat.icon, "h-4 w-4 sm:h-5 sm:w-5")}
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#FFD700]"
            >
              <FiPhone size={14} />
              {contactInfo.phone}
            </a>
            <span className="hidden text-gray-400 sm:block">|</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#FFD700]"
            >
              <FiMail size={14} />
              {contactInfo.email}
            </a>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <FiCheck size={12} className="text-[#FFD700]" />
              <span className="text-xs text-gray-300">Trusted by 5000+ guests worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;