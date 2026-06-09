"use client";

import React from "react";
import Link from "next/link";
import {
  FiStar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiShield,
  FiThumbsUp,
  FiAward,
  FiWifi,
  FiHeart,
} from "react-icons/fi";
import { MdOutlineRoomService } from "react-icons/md";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FiStar,
      title: "Luxury Experience",
      description: "Experience world-class luxury with premium amenities and personalized service.",
      color: "#FFD700",
    },
    {
      icon: MdOutlineRoomService,
      title: "24/7 Room Service",
      description:
        "Round-the-clock room service to cater to your every need, anytime day or night.",
      color: "#2C4549",
    },
    {
      icon: FiShield,
      title: "Safe & Secure",
      description: "Your safety is our priority with 24/7 security and modern safety systems.",
      color: "#FFD700",
    },
    {
      icon: FiUsers,
      title: "Expert Staff",
      description: "Professional and friendly staff dedicated to making your stay unforgettable.",
      color: "#2C4549",
    },
    {
      icon: FiWifi,
      title: "Free High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet throughout the property.",
      color: "#FFD700",
    },
    {
      icon: FiMapPin,
      title: "Prime Location",
      description:
        "Conveniently located near major attractions, business districts, and transport hubs.",
      color: "#2C4549",
    },
  ];

  const highlights = [
    {
      number: "500+",
      label: "Happy Guests",
      icon: FiHeart,
    },
    {
      number: "50+",
      label: "Luxury Rooms",
      icon: FiAward,
    },
    {
      number: "4.8",
      label: "Guest Rating",
      icon: FiStar,
    },
    {
      number: "10+",
      label: "Years of Excellence",
      icon: FiClock,
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiStar className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              Why Choose Us
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            The Perfect Choice for Your Stay
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Discover why thousands of guests choose DA Hotel for their unforgettable experiences. We
            combine luxury, comfort, and exceptional service to create the perfect getaway.
          </p>
        </div>

        {/* Features Grid - Responsive 1-2-3 columns */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
            >
              <div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 sm:mb-4 sm:h-14 sm:w-14"
                style={{ backgroundColor: `${feature.color}10` }}
              >
                <feature.icon size={24} color={feature.color} className="sm:h-7 sm:w-7" />
              </div>

              <h3 className="mb-1.5 text-lg font-bold text-[#2C4549] sm:mb-2 sm:text-xl">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights Stats */}
        <div className="rounded-xl bg-[#2C4549] p-6 sm:rounded-2xl sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="mb-2 flex justify-center sm:mb-3">
                  <div className="rounded-full bg-white/10 p-2.5 transition-colors duration-300 group-hover:bg-[#FFD700] sm:p-3">
                    <item.icon
                      size={20}
                      className="text-[#FFD700] transition-colors group-hover:text-[#2C4549] sm:h-6 sm:w-6"
                    />
                  </div>
                </div>
                <div className="mb-0.5 text-xl font-bold text-white sm:mb-1 sm:text-2xl md:text-3xl">
                  {item.number}
                </div>
                <div className="text-xs text-gray-300 sm:text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center sm:mt-16">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/booking"
              className="btn w-full transform gap-2 border-none bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              Book Your Stay Now
              <FiThumbsUp size={16} className="sm:h-4.5 sm:w-4.5" />
            </Link>
            <Link
              href="/our-rooms"
              className="btn btn-outline w-full gap-2 border-[#2C4549] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:bg-[#2C4549] hover:text-white sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              View Our Rooms
              <FiStar size={16} className="sm:h-4.5 sm:w-4.5" />
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-500 sm:mt-6 sm:text-sm">
            * Limited time offers available. Contact us for special group rates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
