// src/Component/Home/PricingPlans/PricingPlans.jsx
"use client"

// React
import React, { useState } from 'react';

// Icons
import { MdOutlineFamilyRestroom } from 'react-icons/md';
import { FiCheck, FiCalendar, FiStar, FiBriefcase } from 'react-icons/fi';
import Link from 'next/link';

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

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
        "Luxury Bath Amenities"
      ],
      priceNote: "Starting from",
      basePrice: 129,
      color: "from-[#FFD700] to-[#FFA500]",
      badge: "Most Popular",
      url: "/rooms/deluxe"
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
        "Meeting Room Access"
      ],
      priceNote: "Starting from",
      basePrice: 199,
      color: "from-blue-500 to-blue-600",
      badge: "Business Choice",
      url: "/rooms/executive-suite"
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
        "Extra Rollaway Bed Available"
      ],
      priceNote: "Starting from",
      basePrice: 249,
      color: "from-green-500 to-green-600",
      badge: "Family Favorite",
      url: "/rooms/family-suite"
    }
  ];

  // You can easily add more rooms like this:
  // {
  //   id: 4,
  //   name: "Presidential Suite",
  //   icon: FiAward,
  //   description: "Ultimate luxury experience",
  //   features: ["Butler Service", "Private Pool", "Personal Chef", ...],
  //   priceNote: "Starting from",
  //   basePrice: 499,
  //   popular: false,
  //   color: "from-purple-500 to-purple-700",
  //   badge: "Luxury Choice"
  // }

  const getPriceMessage = (planName) => {
    const messages = {
      "Deluxe Room": "* Price varies by season and availability",
      "Executive Suite": "* Corporate rates available for long stays",
      "Family Suite": "* Child under 12 stays free (sharing bed)"
    };
    return messages[planName] || "* Prices subject to change based on season";
  };

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-4">
            <FiCalendar className="text-[#FFD700]" size={18} />
            <span className="text-[#2C4549] font-semibold text-sm uppercase tracking-wide">
              Room Rates
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549] mb-4">
            Our Pricing Plans
          </h2>

          <p className="text-gray-600 text-lg">
            Choose the perfect accommodation for your needs. Rates vary by season.
          </p>
        </div>

        {/* Pricing Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-[#FFD700] p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <FiCalendar className="text-[#FFD700] mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-[#2C4549] font-semibold">Flexible Pricing</p>
              <p className="text-xs text-gray-600">
                Room rates are not fixed and may vary based on season, availability, and special promotions.
                Contact us for corporate and group discounts.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.popular ? 'ring-2 ring-[#FFD700] md:scale-105' : ''
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute top-0 right-0 z-10 ${plan.popular ? 'bg-[#FFD700] text-[#2C4549]' : 'bg-[#2C4549] text-white'
                  } px-4 py-1 rounded-bl-2xl text-sm font-bold`}>
                  {plan.badge}
                </div>
              )}

              {/* Card Header */}
              <div className={`bg-linear-to-r ${plan.color} p-6 text-white`}>
                <div className="flex justify-between items-start mb-4">
                  <plan.icon size={32} className="opacity-90" />
                  <div className="text-right">
                    <p className="text-xs opacity-80">{plan.priceNote}</p>
                    <div>
                      <span className="text-3xl font-bold">${plan.basePrice}</span>
                      <span className="text-sm opacity-90">/night</span>
                    </div>
                    <p className="text-xs opacity-80 mt-1">* plus taxes</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-90">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="p-6">
                <div className="space-y-2.5 mb-6 max-h-64 overflow-y-auto custom-scrollbar">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <FiCheck className="text-green-500" size={12} />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price Variation Note */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 italic">
                    {getPriceMessage(plan.name)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Weekend & holiday surcharges may apply
                  </p>
                </div>

                <Link
                  href={plan.url}
                  className="block w-fit mx-auto font-semibold text-center text-[#2C4549] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </Link>

                {/* Additional Note */}
                <p className="text-center text-gray-400 text-xs mt-3">
                  {plan.name === "Family Suite" ? "Children under 5 stay free" : "Rates exclude service charges"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Rooms Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-full shadow-md px-6 py-3">
            <p className="text-gray-600 text-sm">
              🏨 Looking for more options?
              <button
                onClick={() => setSelectedPlan('more')}
                className="ml-2 text-[#2C4549] font-semibold hover:underline"
              >
                View our Presidential Suite & Penthouses →
              </button>
            </p>
          </div>
        </div>

        {/* Special Notes Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">
              💼 <span className="font-semibold">Corporate Discounts</span><br />
              Available for business bookings
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">
              👨‍👩‍👧‍👦 <span className="font-semibold">Group Rates</span><br />
              Special pricing for 5+ rooms
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">
              📅 <span className="font-semibold">Long Stay Offers</span><br />
              Weekly & monthly rates available
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FFD700;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default PricingPlans;