// src/Sections/Services/GuestBenefits/GuestBenefits.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";

// Icons  
import {
  FiCheck,
  FiArrowRight,
  FiStar,
  FiAward,
  FiClock,
  FiUsers,
  FiGift,
  FiPercent,
  FiWifi,
} from "react-icons/fi";
import {
  MdOutlineSpa,
  MdOutlineLocalParking,
  MdOutlinePool,
  MdOutlineFitnessCenter,
} from "react-icons/md";
import { FaCrown, FaGem } from "react-icons/fa";
import { GiKnifeFork, GiChampagneCork } from "react-icons/gi";

const GuestBenefits = ({ content = {} }) => {

  // State
  const [selectedTier, setSelectedTier] = useState("all");

  const {
    title = "Guest Benefits",
    subtitle = "Exclusive Perks & Privileges",
    description = "Enjoy a range of exclusive benefits designed to make your stay more comfortable, convenient, and memorable.",
    benefits = [
      {
        id: 1,
        title: "Complimentary Breakfast",
        description: "Start your day with our delicious breakfast buffet featuring international cuisine.",
        icon: "breakfast",
        category: "dining",
        included: true,
        popular: true,
      },
      {
        id: 2,
        title: "Free High-Speed WiFi",
        description: "Stay connected with complimentary high-speed internet throughout the property.",
        icon: "wifi",
        category: "technology",
        included: true,
        popular: true,
      },
      {
        id: 3,
        title: "Airport Transfer",
        description: "Complimentary shuttle service to and from the airport.",
        icon: "transfer",
        category: "transport",
        included: true,
        popular: false,
      },
      {
        id: 4,
        title: "Spa Access",
        description: "Complimentary access to our world-class spa facilities including sauna and steam room.",
        icon: "spa",
        category: "wellness",
        included: true,
        popular: true,
      },
      {
        id: 5,
        title: "Fitness Center",
        description: "24/7 access to our state-of-the-art fitness center.",
        icon: "fitness",
        category: "wellness",
        included: true,
        popular: false,
      },
      {
        id: 6,
        title: "Pool Access",
        description: "Enjoy our temperature-controlled indoor and outdoor swimming pools.",
        icon: "pool",
        category: "wellness",
        included: true,
        popular: true,
      },
      {
        id: 7,
        title: "Late Check-out",
        description: "Enjoy a relaxed departure with complimentary late check-out until 2 PM.",
        icon: "clock",
        category: "convenience",
        included: false,
        popular: false,
      },
      {
        id: 8,
        title: "Room Upgrade",
        description: "Complimentary room upgrade based on availability.",
        icon: "upgrade",
        category: "convenience",
        included: false,
        popular: true,
      },
      {
        id: 9,
        title: "Welcome Drink",
        description: "Complimentary welcome drink upon arrival.",
        icon: "drink",
        category: "dining",
        included: true,
        popular: false,
      },
      {
        id: 10,
        title: "Parking",
        description: "Free valet parking for the duration of your stay.",
        icon: "parking",
        category: "transport",
        included: true,
        popular: false,
      },
      {
        id: 11,
        title: "Kids Stay Free",
        description: "Children under 12 stay free when sharing with parents.",
        icon: "family",
        category: "family",
        included: true,
        popular: true,
      },
      {
        id: 12,
        title: "Welcome Amenity",
        description: "A special welcome amenity in your room upon arrival.",
        icon: "gift",
        category: "convenience",
        included: true,
        popular: false,
      },
    ],
    loyaltyTiers = [
      {
        id: "all",
        name: "All Benefits",
        icon: "star",
      },
      {
        id: "dining",
        name: "Dining",
        icon: "utensils",
      },
      {
        id: "wellness",
        name: "Wellness",
        icon: "spa",
      },
      {
        id: "transport",
        name: "Transport",
        icon: "car",
      },
      {
        id: "convenience",
        name: "Convenience",
        icon: "clock",
      },
      {
        id: "technology",
        name: "Technology",
        icon: "wifi",
      },
      {
        id: "family",
        name: "Family",
        icon: "users",
      },
    ],
    membership = {
      title: "Loyalty Program",
      description: "Join our exclusive loyalty program and unlock even more benefits.",
      tiers: [
        {
          name: "Silver",
          points: "0 - 4,999 points",
          benefits: ["Welcome Drink", "Free WiFi", "Late Check-out"],
          color: "from-gray-400 to-gray-500",
        },
        {
          name: "Gold",
          points: "5,000 - 14,999 points",
          benefits: ["Room Upgrade", "Spa Access", "Welcome Amenity"],
          color: "from-amber-500 to-amber-600",
          popular: true,
        },
        {
          name: "Platinum",
          points: "15,000+ points",
          benefits: ["Airport Transfer", "Executive Lounge", "Personal Concierge"],
          color: "from-[#FFD700] to-[#FFA500]",
        },
      ],
    },
    cta = {
      text: "Book Direct & Save",
      link: "/booking",
    },
  } = content;

  // Render Icon
  const renderIcon = (iconName, className = "h-5 w-5") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "breakfast":
        return <GiKnifeFork className={iconClass} />;
      case "wifi":
        return <FiWifi className={iconClass} />;
      case "transfer":
        return <FaGem className={iconClass} />;
      case "spa":
        return <MdOutlineSpa className={iconClass} />;
      case "fitness":
        return <MdOutlineFitnessCenter className={iconClass} />;
      case "pool":
        return <MdOutlinePool className={iconClass} />;
      case "clock":
        return <FiClock className={iconClass} />;
      case "upgrade":
        return <FaCrown className={iconClass} />;
      case "drink":
        return <GiChampagneCork className={iconClass} />;
      case "parking":
        return <MdOutlineLocalParking className={iconClass} />;
      case "family":
        return <FiUsers className={iconClass} />;
      case "gift":
        return <FiGift className={iconClass} />;
      default:
        return <FiStar className={iconClass} />;
    }
  };

  // Filter Benefits
  const filteredBenefits = selectedTier === "all"
    ? benefits
    : benefits.filter(benefit => benefit.category === selectedTier);

  // Split Benefits - Included
  const includedBenefits = filteredBenefits.filter(b => b.included);

  // Split Benefits - Premium
  const premiumBenefits = filteredBenefits.filter(b => !b.included);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FaCrown className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-3">
          {loyaltyTiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${selectedTier === tier.id
                ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {tier.name}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mx-auto mb-12 max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className={`group rounded-xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${benefit.popular ? "border-2 border-[#FFD700]" : ""
                  }`}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10 transition-colors group-hover:bg-[#FFD700]">
                    {renderIcon(benefit.icon, "h-6 w-6 transition-colors group-hover:text-[#2C4549]")}
                  </div>
                  {benefit.popular && (
                    <span className="rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#2C4549]">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs">
                  <FiCheck className="text-green-500" size={14} />
                  <span className="text-gray-500">
                    {benefit.included ? "Included for all guests" : "Premium benefit"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Included vs Premium Section */}
        <div className="mx-auto mb-12 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Included Benefits */}
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <FiCheck className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-[#2C4549]">Included for All Guests</h3>
              </div>
              <div className="space-y-2">
                {includedBenefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-2 text-sm">
                    <FiCheck className="text-green-500" size={14} />
                    <span className="text-gray-600">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Benefits */}
            <div className="rounded-2xl bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-6 text-white shadow-md">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]/20">
                  <FaCrown className="h-5 w-5 text-[#FFD700]" />
                </div>
                <h3 className="text-lg font-bold">Premium Benefits</h3>
              </div>
              <div className="space-y-2">
                {premiumBenefits.map((benefit) => (
                  <div key={benefit.id} className="flex items-center gap-2 text-sm">
                    <FiStar className="text-[#FFD700]" size={14} />
                    <span className="text-gray-200">{benefit.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-white/10 p-3 text-center">
                <p className="text-xs text-gray-200">Upgrade your stay to access premium benefits</p>
                <Link href="/booking" className="mt-2 inline-block text-xs font-semibold text-[#FFD700] hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Loyalty Program Section */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <div className="text-center">
              <div className="mb-3 inline-flex rounded-full bg-[#FFD700]/10 px-4 py-2">
                <FiAward className="h-4 w-4 text-[#FFD700]" />
                <span className="ml-2 text-xs font-semibold uppercase text-[#2C4549]">Loyalty Program</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#2C4549] sm:text-2xl">
                {membership.title}
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-sm text-gray-600">
                {membership.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {membership.tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${tier.popular ? "bg-linear-to-r from-amber-50 to-yellow-50 border-2 border-[#FFD700]" : "bg-gray-50"
                    }`}
                >
                  <div className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r ${tier.color}`}>
                    <FaCrown className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="mb-1 text-lg font-bold text-[#2C4549]">{tier.name}</h4>
                  <p className="mb-3 text-xs text-gray-500">{tier.points}</p>
                  <div className="space-y-1 text-left">
                    {tier.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs">
                        <FiCheck className="text-green-500" size={12} />
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  {tier.popular && (
                    <div className="mt-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                      Most Popular
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <FiPercent size={16} />
            {cta.text}
            <FiArrowRight size={14} />
          </Link>
          <p className="mt-3 text-xs text-gray-400">*Terms and conditions apply. Benefits subject to availability.</p>
        </div>
      </div>
    </section>
  );
};

export default GuestBenefits;