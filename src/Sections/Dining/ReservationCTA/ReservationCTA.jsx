// src/Sections/Dining/ReservationCTA/ReservationCTA.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiCalendar,
  FiClock,
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowRight,
  FiUsers,
  FiCheck,
  FiHeart,
  FiMessageCircle,
  FiGift,
} from "react-icons/fi";
import { GiKnifeFork, GiChampagneCork, GiWineGlass } from "react-icons/gi";

const ReservationCTA = ({ content = {} }) => {
  // State
  const [isHovered, setIsHovered] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [selectedPartySize, setSelectedPartySize] = useState(2);

  const {
    title = "Ready to Dine With Us?",
    subtitle = "Make a Reservation",
    description = "Book your table today and experience exceptional cuisine in an unforgettable setting. Walk-ins welcome based on availability.",
    features = [
      { icon: "calendar", text: "Instant Confirmation" },
      { icon: "users", text: "Private Dining Available" },
      { icon: "gift", text: "Special Occasion? Let us know" },
      { icon: "clock", text: "24/7 Online Booking" },
    ],
    partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"],
    timeSlots = [
      "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
      "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM",
    ],
    buttons = [
      {
        text: "Book a Table",
        link: "/booking",
        type: "primary",
        icon: "calendar",
      },
      {
        text: "View Menus",
        link: "/dining/menus",
        type: "secondary",
        icon: "menu",
      },
      {
        text: "Private Events",
        link: "/dining/private-events",
        type: "secondary",
        icon: "users",
      },
    ],
    contactInfo = {
      phone: "+1 (555) 123-4567",
      email: "reservations@dahotel.com",
      whatsapp: "+1 (555) 123-4567",
    },
    offer = {
      title: "Early Bird Special",
      description: "Book before 7 PM and receive a complimentary glass of champagne",
      validUntil: "Limited time offer",
    },
  } = content;

  // Function to render icons
  const renderIcon = (iconName, className = "h-4 w-4") => {
    switch (iconName) {
      case "calendar":
        return <FiCalendar className={className} />;
      case "users":
        return <FiUsers className={className} />;
      case "gift":
        return <FiGift className={className} />;
      case "clock":
        return <FiClock className={className} />;
      case "menu":
        return <GiKnifeFork className={className} />;
      default:
        return <FiHeart className={className} />;
    }
  };

  // Functions Get Min Date
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Functions Get Max Date
  const getMaxDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toISOString().split("T")[0];
  };

  // Handle Quick Reservation
  const handleQuickReservation = (e) => {
    e.preventDefault();
    alert(`Reservation requested for ${selectedPartySize} guests on ${selectedDate} at ${selectedTime}`);
    // In production, send to API
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#2C4549] to-[#1a2f33]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FFD700]"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#FFD700]"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <GiKnifeFork size={60} className="text-[#FFD700]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <GiWineGlass size={60} className="text-[#FFD700]" />
      </div>

      {/* Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-8 text-center sm:mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/20 px-4 py-2 backdrop-blur-sm">
              <GiKnifeFork className="h-4 w-4 text-[#FFD700]" />
              <span className="text-xs font-semibold uppercase text-[#FFD700]">{subtitle}</span>
            </div>

            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mx-auto max-w-2xl text-sm text-gray-200 sm:text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Quick Reservation Form Toggle */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => setShowQuickForm(!showQuickForm)}
              className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <FiCalendar size={16} />
              {showQuickForm ? "Hide Quick Reservation" : "Quick Reservation"}
              <FiArrowRight size={14} className={`transition-transform ${showQuickForm ? "rotate-90" : ""}`} />
            </button>
          </div>

          {/* Quick Reservation Form */}
          {showQuickForm && (
            <div className="mx-auto mb-10 max-w-2xl animate-fade-in-up">
              <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">
                <h3 className="mb-4 text-center text-lg font-bold text-[#2C4549]">
                  Quick Reservation
                </h3>
                <form onSubmit={handleQuickReservation} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                        Party Size
                      </label>
                      <select
                        value={selectedPartySize}
                        onChange={(e) => setSelectedPartySize(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                      >
                        {partySizes.map((size) => (
                          <option key={size} value={size}>
                            {size} {size === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                        Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={getMinDate()}
                        max={getMaxDate()}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime}
                    className="w-full rounded-lg bg-[#FFD700] py-2.5 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D] disabled:opacity-50"
                  >
                    Request Reservation
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    We'll contact you within 30 minutes to confirm
                  </p>
                </form>
              </div>
            </div>
          )}

          {/* Main CTA Buttons */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
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

          {/* Features Grid */}
          <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
              >
                {renderIcon(feature.icon, "h-3 w-3 sm:h-4 sm:w-4")}
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Special Offer Banner */}
          {offer && (
            <div className="mx-auto mb-10 max-w-2xl">
              <div className="overflow-hidden rounded-xl bg-linear-to-r from-[#FFD700]/20 to-[#FFD700]/5 p-4 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
                  <div>
                    <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
                      <GiChampagneCork className="h-5 w-5 text-[#FFD700]" />
                      <h4 className="font-bold text-white">{offer.title}</h4>
                    </div>
                    <p className="text-sm text-gray-200">{offer.description}</p>
                    <p className="mt-1 text-xs text-gray-300">{offer.validUntil}</p>
                  </div>
                  <button
                    onClick={() => window.location.href = "/booking"}
                    className="rounded-lg bg-[#FFD700] px-4 py-1.5 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Contact Options */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#FFD700]"
            >
              <FiPhone size={14} />
              Call: {contactInfo.phone}
            </a>
            <span className="hidden text-gray-400 sm:block">|</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#FFD700]"
            >
              <FiMail size={14} />
              {contactInfo.email}
            </a>
            <span className="hidden text-gray-400 sm:block">|</span>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#FFD700]"
            >
              <FiMessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Trust Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <FiCheck size={12} className="text-[#FFD700]" />
              <span className="text-xs text-gray-300">
                Over 10,000+ happy diners served monthly
              </span>
            </div>
          </div>

          {/* Map Link */}
          <div className="mt-6 text-center">
            <Link
              href="/location"
              className="inline-flex items-center gap-1 text-xs text-gray-300 transition hover:text-[#FFD700]"
            >
              <FiMapPin size={12} />
              Find us on the map
              <FiArrowRight size={10} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ReservationCTA;