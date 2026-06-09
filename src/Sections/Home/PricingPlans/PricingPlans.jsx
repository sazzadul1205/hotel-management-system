// src/Sections/Home/PricingPlans/PricingPlans.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";

// Icons
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FiCheck, FiCalendar, FiStar, FiBriefcase, FiArrowRight } from "react-icons/fi";

const PricingPlans = () => {
  // Selected pricing plan
  const [selectedPlan, setSelectedPlan] = useState(null);

  // List of pricing plans
  const plans = [
    {
      id: 1,
      name: "Deluxe Room",
      icon: FiStar,
      description: "Perfect for couples and solo travelers seeking comfort and style",
      features: [
        "King Size Bed",
        "Free High-Speed WiFi",
        "55-inch Smart TV",
        "Premium Air Conditioning",
        "Luxury Work Desk",
        "Mini Bar",
        "Coffee Maker",
        "Luxury Bath Amenities",
      ],
      priceNote: "Starting from",
      basePrice: 129,
      color: "from-[#FFD700] to-[#FFA500]",
      badge: "Most Popular",
      popular: true,
      url: "/rooms/deluxe",
    },
    {
      id: 2,
      name: "Executive Suite",
      icon: FiBriefcase,
      description: "Designed for business travelers with premium amenities",
      features: [
        "Executive King Bed",
        "Ultra High-Speed WiFi",
        "65-inch 4K Smart TV",
        "Premium Climate Control",
        "Executive Work Station",
        "Complimentary Breakfast",
        "Express Check-in/out",
        "Airport Transfer Available",
        "Meeting Room Access",
      ],
      priceNote: "Starting from",
      basePrice: 199,
      color: "from-blue-500 to-blue-600",
      badge: "Business Choice",
      popular: false,
      url: "/rooms/executive-suite",
    },
    {
      id: 3,
      name: "Family Suite",
      icon: MdOutlineFamilyRestroom,
      description: "Spacious accommodations for families and groups",
      features: [
        "2 Queen Beds + Sofa Bed",
        "High-Speed WiFi",
        "65-inch Smart TV",
        "Separate Living Area",
        "Full Kitchenette",
        "Complimentary Breakfast (4 ppl)",
        "Swimming Pool Access",
        "Kids Play Area Access",
        "Extra Rollaway Bed Available",
      ],
      priceNote: "Starting from",
      basePrice: 249,
      color: "from-green-500 to-green-600",
      badge: "Family Favorite",
      popular: false,
      url: "/rooms/family-suite",
    },
  ];

  // Get price message
  const getPriceMessage = (planName) => {
    const messages = {
      "Deluxe Room": "* Price varies by season and availability",
      "Executive Suite": "* Corporate rates available for long stays",
      "Family Suite": "* Child under 12 stays free (sharing bed)",
    };
    return messages[planName] || "* Prices subject to change based on season";
  };

  const newLocal = "sm:h-3.5 sm:w-3.5";
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiCalendar className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              Room Rates
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Our Pricing Plans
          </h2>

          <p className="text-sm text-gray-600 sm:text-base md:text-lg">
            Choose the perfect accommodation for your needs. Rates vary by season.
          </p>
        </div>

        {/* Pricing Disclaimer */}
        <div className="mx-auto mb-6 max-w-4xl rounded-r-lg border-l-4 border-[#FFD700] bg-yellow-50 p-3 sm:mb-8 sm:p-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <FiCalendar className="mt-0.5 h-4 w-4 shrink-0 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <div>
              <p className="text-xs font-semibold text-[#2C4549] sm:text-sm">Flexible Pricing</p>
              <p className="mt-0.5 text-xs text-gray-600">
                Room rates are not fixed and may vary based on season, availability, and special
                promotions. Contact us for corporate and group discounts.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-2xl ${plan.popular ? "ring-2 ring-[#FFD700] lg:scale-105" : ""
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute top-0 right-0 z-10 ${plan.popular ? "bg-[#FFD700] text-[#2C4549]" : "bg-[#2C4549] text-white"
                    } rounded-bl-xl px-3 py-1 text-xs font-bold sm:rounded-bl-2xl sm:px-4 sm:text-sm`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Card Header */}
              <div className={`bg-linear-to-r ${plan.color} p-4 text-white sm:p-6`}>
                <div className="mb-3 flex items-start justify-between sm:mb-4">
                  <plan.icon
                    size={24}
                    className="shrink-0 opacity-90 sm:h-7 sm:w-7 md:h-8 md:w-8"
                  />
                  <div className="text-right">
                    <p className="text-xs opacity-80">{plan.priceNote}</p>
                    <div>
                      <span className="text-2xl font-bold sm:text-3xl">${plan.basePrice}</span>
                      <span className="text-xs opacity-90 sm:text-sm">/night</span>
                    </div>
                    <p className="mt-0.5 text-xs opacity-80 sm:mt-1">* plus taxes</p>
                  </div>
                </div>
                <h3 className="mb-1.5 text-xl font-bold sm:mb-2 sm:text-2xl">{plan.name}</h3>
                <p className="text-xs leading-relaxed opacity-90 sm:text-sm">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="p-4 sm:p-6">
                <div className="custom-scrollbar mb-4 max-h-48 space-y-2 overflow-y-auto sm:mb-6 sm:max-h-56 sm:space-y-2.5 md:max-h-64">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 sm:h-5 sm:w-5">
                        <FiCheck className="text-green-500" size={10} />
                      </div>
                      <span className="text-xs text-gray-700 sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price Variation Note */}
                <div className="mb-4 rounded-lg bg-gray-50 p-2.5 sm:mb-5 sm:p-3">
                  <p className="text-xs text-gray-500 italic">{getPriceMessage(plan.name)}</p>
                  <p className="mt-0.5 text-xs text-gray-400 sm:mt-1">
                    Weekend & holiday surcharges may apply
                  </p>
                </div>

                <Link
                  href={plan.url}
                  className="block w-full transform rounded-lg bg-[#FFD700] px-6 py-2.5 text-center text-sm font-semibold text-[#2C4549] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
                >
                  Book Now
                </Link>

                {/* Additional Note */}
                <p className="mt-2 text-center text-xs text-gray-400 sm:mt-3">
                  {plan.name === "Family Suite"
                    ? "Children under 5 stay free"
                    : "Rates exclude service charges"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Rooms Note */}
        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <div className="inline-block rounded-full bg-white px-4 py-2.5 shadow-md sm:px-6 sm:py-3">
            <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-gray-600 sm:gap-2 sm:text-sm">
              🏨 Looking for more options?
              <button
                onClick={() => setSelectedPlan("more")}
                className="inline-flex items-center gap-1 font-semibold text-[#2C4549] hover:underline"
              >
                View our Presidential Suite & Penthouses
                <FiArrowRight size={12} className={newLocal} />
              </button>
            </p>
          </div>
        </div>

        {/* Special Notes Section */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 text-center sm:mt-10 sm:grid-cols-3 sm:gap-4">
          <div className="rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:rounded-xl sm:p-4">
            <p className="text-xs text-gray-500">
              💼 <span className="font-semibold">Corporate Discounts</span>
              <br />
              Available for business bookings
            </p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:rounded-xl sm:p-4">
            <p className="text-xs text-gray-500">
              👨‍👩‍👧‍👦 <span className="font-semibold">Group Rates</span>
              <br />
              Special pricing for 5+ rooms
            </p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:rounded-xl sm:p-4">
            <p className="text-xs text-gray-500">
              📅 <span className="font-semibold">Long Stay Offers</span>
              <br />
              Weekly & monthly rates available
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ffd700;
          border-radius: 10px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ffd700 #f1f1f1;
        }
      `}</style>
    </section>
  );
};

export default PricingPlans;
