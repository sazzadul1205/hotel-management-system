// src/Sections/AboutUs/Facilities/Facilities.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiWifi,
  FiShield,
  FiCalendar,
  FiGift,
  FiCheck,
} from "react-icons/fi";
import {
  MdOutlinePool,
  MdOutlineRestaurantMenu,
  MdOutlineFitnessCenter,
  MdOutlineRoomService,
  MdOutlineLocalLaundryService,
  MdOutlineElevator,
  MdOutlineMeetingRoom,
  MdOutlineSpa,
  MdOutlineBreakfastDining,
  MdOutlineLocalParking,
  MdOutlineAirportShuttle,
  MdOutlineStore,
  MdOutlineBusinessCenter,
  MdOutlineChildCare,
} from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";

const Facilities = ({ content = {} }) => {
  const [activeTab, setActiveTab] = useState("all");

  // Destructure content with fallbacks - Using Unsplash Images
  const {
    title = "World-Class Facilities",
    subtitle = "Luxury Amenities & Services",
    description = "Experience unparalleled comfort with our premium facilities designed to make your stay extraordinary.",
    facilities = {
      premium: [
        {
          id: 1,
          name: "Swimming Pool",
          icon: "pool",
          description: "Temperature-controlled infinity pool with panoramic views",
          image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          category: "premium",
          features: ["Indoor & Outdoor Pools", "Poolside Bar", "Sun Loungers", "Pool Towels"],
        },
        {
          id: 2,
          name: "Fitness Center",
          icon: "fitness",
          description: "State-of-the-art gym with professional trainers",
          image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          category: "premium",
          features: ["24/7 Access", "Personal Trainers", "Modern Equipment", "Yoga Studio"],
        },
        {
          id: 3,
          name: "Luxury Spa",
          icon: "spa",
          description: "Rejuvenating treatments and wellness experiences",
          image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          category: "premium",
          features: ["Massage Therapy", "Sauna & Steam", "Beauty Treatments", "Relaxation Room"],
        },
        {
          id: 4,
          name: "Fine Dining",
          icon: "restaurant",
          description: "Multi-cuisine restaurants and rooftop bar",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          category: "premium",
          features: ["International Buffet", "A La Carte", "Rooftop Bar", "Private Dining"],
        },
      ],
      amenities: [
        {
          id: 5,
          name: "Free WiFi",
          icon: "wifi",
          description: "High-speed internet throughout the property",
          category: "essential",
        },
        {
          id: 6,
          name: "24/7 Room Service",
          icon: "roomService",
          description: "In-dining available anytime",
          category: "essential",
        },
        {
          id: 7,
          name: "Free Parking",
          icon: "parking",
          description: "Secure parking with CCTV surveillance",
          category: "essential",
        },
        {
          id: 8,
          name: "Concierge Service",
          icon: "concierge",
          description: "Personalized assistance for all needs",
          category: "service",
        },
        {
          id: 9,
          name: "Business Center",
          icon: "business",
          description: "Fully equipped workspace",
          category: "business",
        },
        {
          id: 10,
          name: "Conference Halls",
          icon: "meeting",
          description: "Modern meeting rooms with AV equipment",
          category: "business",
        },
        {
          id: 11,
          name: "Airport Shuttle",
          icon: "shuttle",
          description: "Luxury car pickup & drop-off",
          category: "service",
        },
        {
          id: 12,
          name: "Convenience Store",
          icon: "store",
          description: "Open 24/7 for essentials",
          category: "essential",
        },
        {
          id: 13,
          name: "Laundry Service",
          icon: "laundry",
          description: "Same-day dry cleaning available",
          category: "service",
        },
        {
          id: 14,
          name: "Kids Play Area",
          icon: "kids",
          description: "Safe and fun environment for children",
          category: "family",
        },
        {
          id: 15,
          name: "Breakfast Buffet",
          icon: "breakfast",
          description: "Complimentary breakfast for guests",
          category: "dining",
        },
        {
          id: 16,
          name: "Elevator Access",
          icon: "elevator",
          description: "Wheelchair accessible",
          category: "essential",
        },
      ],
    },
    cta = {
      text: "Book Your Stay",
      link: "/booking",
    },
  } = content;

  // Filter facilities based on active tab
  const filteredFacilities = () => {
    if (activeTab === "all") {
      return [...facilities.premium, ...facilities.amenities];
    }
    if (activeTab === "premium") {
      return facilities.premium;
    }
    return facilities.amenities.filter((item) => item.category === activeTab);
  };

  // Helper to render icons
  const renderIcon = (iconName, className = "h-5 w-5 sm:h-6 sm:w-6") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "pool":
        return <MdOutlinePool className={iconClass} />;
      case "fitness":
        return <MdOutlineFitnessCenter className={iconClass} />;
      case "spa":
        return <MdOutlineSpa className={iconClass} />;
      case "restaurant":
        return <MdOutlineRestaurantMenu className={iconClass} />;
      case "wifi":
        return <FiWifi className={iconClass} />;
      case "roomService":
        return <MdOutlineRoomService className={iconClass} />;
      case "parking":
        return <MdOutlineLocalParking className={iconClass} />;
      case "business":
        return <MdOutlineBusinessCenter className={iconClass} />;
      case "meeting":
        return <MdOutlineMeetingRoom className={iconClass} />;
      case "shuttle":
        return <MdOutlineAirportShuttle className={iconClass} />;
      case "store":
        return <MdOutlineStore className={iconClass} />;
      case "laundry":
        return <MdOutlineLocalLaundryService className={iconClass} />;
      case "kids":
        return <MdOutlineChildCare className={iconClass} />;
      case "breakfast":
        return <MdOutlineBreakfastDining className={iconClass} />;
      case "elevator":
        return <MdOutlineElevator className={iconClass} />;
      case "concierge":
        return <FiCalendar className={iconClass} />;
      default:
        return <FiGift className={iconClass} />;
    }
  };

  const tabs = [
    { id: "all", label: "All Facilities", icon: FiGift },
    { id: "premium", label: "Premium", icon: MdOutlineSpa },
    { id: "essential", label: "Essentials", icon: FiShield },
    { id: "business", label: "Business", icon: MdOutlineBusinessCenter },
    { id: "service", label: "Services", icon: MdOutlineRoomService },
    { id: "dining", label: "Dining", icon: GiKnifeFork },
    { id: "family", label: "Family", icon: MdOutlineChildCare },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <MdOutlinePool className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              {subtitle}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm ${activeTab === tab.id
                ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {renderIcon(tab.icon === "spa" ? "spa" : tab.id, "h-3.5 w-3.5 sm:h-4 sm:w-4")}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Premium Facilities Cards */}
        {(activeTab === "all" || activeTab === "premium") && (
          <div className="mb-10">
            {activeTab === "premium" && (
              <h3 className="mb-4 text-xl font-bold text-[#2C4549] sm:mb-6 sm:text-2xl">
                🌟 Premium Facilities
              </h3>
            )}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {facilities.premium.map((facility) => (
                <div
                  key={facility.id}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-48 w-full overflow-hidden sm:h-52">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD700]/10">
                        {renderIcon(facility.icon, "h-5 w-5")}
                      </div>
                      <h3 className="text-lg font-bold text-[#2C4549]">{facility.name}</h3>
                    </div>
                    <p className="mb-3 text-sm text-gray-600">{facility.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {facility.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                      {facility.features.length > 2 && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                          +{facility.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Amenities Grid */}
        {(activeTab === "all" || activeTab !== "premium") && (
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {filteredFacilities().map((facility) => (
                <div
                  key={facility.id}
                  className="group flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-gray-50 sm:gap-4 sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFD700]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFD700] sm:h-11 sm:w-11">
                    {renderIcon(facility.icon, "h-5 w-5 transition-colors group-hover:text-[#2C4549]")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="mb-0.5 text-base font-semibold text-[#2C4549] sm:text-lg">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-gray-500 sm:text-sm">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Special Note */}
        <div className="mt-10 rounded-xl bg-[#FFD700]/5 p-4 text-center sm:mt-12 sm:p-6">
          <div className="flex items-center justify-center gap-2 text-[#FFD700]">
            <FiCheck size={20} />
            <span className="text-sm font-semibold">All facilities included with your stay</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            * Some premium services may require advance booking. Contact our concierge for details.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <FiCalendar size={16} />
            {cta.text}
            <FiGift size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Facilities;