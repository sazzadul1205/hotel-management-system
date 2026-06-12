// src/Sections/Home/HotelFeatures/HotelFeatures.jsx

// React
import React from "react";

// Next
import Link from "next/link";

// Icons
import {
  FiWifi,
  FiCoffee,
  FiWind,
  FiTv,
  FiThermometer,
  FiVolume2,
  FiShield,
  FiClock,
  FiCalendar,
  FiMapPin,
  FiGift,
  FiHeart,
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
} from "react-icons/md";

const HotelFeatures = () => {
  // Function to render icons
  const renderIcon = (iconName, className = "h-5 w-5") => {
    switch (iconName) {
      case "pool":
        return <MdOutlinePool className={className} />;
      case "fitness":
        return <MdOutlineFitnessCenter className={className} />;
      case "spa":
        return <MdOutlineSpa className={className} />;
      case "restaurant":
        return <MdOutlineRestaurantMenu className={className} />;
      case "wifi":
        return <FiWifi className={className} />;
      case "tv":
        return <FiTv className={className} />;
      case "wind":
        return <FiWind className={className} />;
      case "thermometer":
        return <FiThermometer className={className} />;
      case "coffee":
        return <FiCoffee className={className} />;
      case "volume":
        return <FiVolume2 className={className} />;
      case "roomService":
        return <MdOutlineRoomService className={className} />;
      case "parking":
        return <MdOutlineLocalParking className={className} />;
      case "store":
        return <MdOutlineStore className={className} />;
      case "laundry":
        return <MdOutlineLocalLaundryService className={className} />;
      case "shield":
        return <FiShield className={className} />;
      case "elevator":
        return <MdOutlineElevator className={className} />;
      case "clock":
        return <FiClock className={className} />;
      case "calendar":
        return <FiCalendar className={className} />;
      case "meeting":
        return <MdOutlineMeetingRoom className={className} />;
      case "airport":
        return <MdOutlineAirportShuttle className={className} />;
      case "mapPin":
        return <FiMapPin className={className} />;
      case "breakfast":
        return <MdOutlineBreakfastDining className={className} />;
      case "heart":
        return <FiHeart className={className} />;
      case "gift":
        return <FiGift className={className} />;
      default:
        return <FiHeart className={className} />;
    }
  };

  // Premium Features
  const premiumFeatures = [
    {
      icon: "pool",
      title: "Swimming Pool",
      description: "Temperature-controlled indoor & outdoor pools",
      category: "premium",
    },
    {
      icon: "fitness",
      title: "Fitness Center",
      description: "State-of-the-art gym with personal trainers",
      category: "premium",
    },
    {
      icon: "spa",
      title: "Luxury Spa",
      description: "Massage, sauna, and wellness treatments",
      category: "premium",
    },
    {
      icon: "restaurant",
      title: "Fine Dining",
      description: "Multi-cuisine restaurant & rooftop bar",
      category: "premium",
    },
  ];

  // Room Features
  const roomFeatures = [
    {
      icon: "wifi",
      title: "Free High-Speed WiFi",
      description: "Up to 100 Mbps throughout the property",
    },
    {
      icon: "tv",
      title: "Smart LED TV",
      description: "55-inch 4K with streaming services",
    },
    {
      icon: "wind",
      title: "Air Conditioning",
      description: "Individually controlled AC/Heating",
    },
    {
      icon: "thermometer",
      title: "Mini Bar",
      description: "Fully stocked with premium beverages",
    },
    {
      icon: "coffee",
      title: "Coffee Maker",
      description: "Premium coffee & tea selection",
    },
    {
      icon: "volume",
      title: "Soundproof Rooms",
      description: "Peaceful environment for quality sleep",
    },
  ];

  // Amenities
  const amenities = [
    {
      icon: "roomService",
      title: "24/7 Room Service",
      description: "In-dining available anytime",
    },
    {
      icon: "parking",
      title: "Free Parking",
      description: "Secure parking with CCTV surveillance",
    },
    {
      icon: "store",
      title: "Convenience Store",
      description: "Open 24/7 for essentials",
    },
    {
      icon: "laundry",
      title: "Laundry Service",
      description: "Same-day dry cleaning available",
    },
    {
      icon: "shield",
      title: "24/7 Security",
      description: "Professional security personnel",
    },
    {
      icon: "elevator",
      title: "Elevator Access",
      description: "Wheelchair accessible",
    },
    {
      icon: "clock",
      title: "Express Check-in/out",
      description: "Save time with digital check-in",
    },
    {
      icon: "calendar",
      title: "Tour Desk",
      description: "Local tours & activities booking",
    },
  ];

  // Business Features
  const businessFeatures = [
    {
      icon: "meeting",
      title: "Conference Halls",
      description: "State-of-the-art meeting rooms",
    },
    {
      icon: "airport",
      title: "Airport Transfer",
      description: "Luxury car pickup & drop-off",
    },
    {
      icon: "mapPin",
      title: "Central Location",
      description: "Close to business district",
    },
    {
      icon: "breakfast",
      title: "Business Breakfast",
      description: "Early breakfast for professionals",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            {renderIcon("heart", "h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5")}
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              Hotel Amenities
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Premium Features & Services
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Experience unparalleled comfort with our world-class amenities designed for your
            ultimate satisfaction
          </p>
        </div>

        {/* Premium Features - Large Cards */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="mb-4 text-center text-xl font-bold text-[#2C4549] sm:mb-6 sm:text-2xl md:text-left">
            🌟 Premium Facilities
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-4">
            {premiumFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-linear-to-br from-[#2C4549] to-[#1a2f33] p-5 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-2xl sm:p-6"
              >
                <div className="absolute top-0 right-0 -mt-12 -mr-12 h-24 w-24 rounded-full bg-[#FFD700]/10 transition-transform duration-500 group-hover:scale-150 sm:-mt-14 sm:-mr-14 sm:h-28 sm:w-28 md:-mt-16 md:-mr-16 md:h-32 md:w-32"></div>
                <div className="relative z-10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD700]/20 transition-colors duration-300 group-hover:bg-[#FFD700] sm:mb-4 sm:h-14 sm:w-14 md:h-16 md:w-16">
                    {renderIcon(feature.icon, "h-6 w-6 text-[#FFD700] transition-colors group-hover:text-[#2C4549] sm:h-7 sm:w-7 md:h-8 md:w-8")}
                  </div>
                  <h3 className="mb-1.5 text-lg font-bold sm:mb-2 sm:text-xl">{feature.title}</h3>
                  <p className="text-xs text-gray-300 sm:text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room Features */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="mb-4 text-center text-xl font-bold text-[#2C4549] sm:mb-6 sm:text-2xl md:text-left">
            🛏️ In-Room Amenities
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3">
            {roomFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex cursor-pointer items-start gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-gray-50 sm:gap-4 sm:p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFD700]/10 transition-colors duration-300 group-hover:bg-[#FFD700] sm:h-11 sm:w-11 md:h-12 md:w-12">
                  {renderIcon(feature.icon, "h-4 w-4 text-[#2C4549] transition-colors group-hover:text-white sm:h-5 sm:w-5 md:h-5.5 md:w-5.5")}
                </div>
                <div className="min-w-0">
                  <h3 className="mb-0.5 text-base font-semibold text-[#2C4549] sm:mb-1 sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 sm:text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Amenities Grid */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="mb-4 text-center text-xl font-bold text-[#2C4549] sm:mb-6 sm:text-2xl md:text-left">
            🏨 Hotel Amenities
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-4">
            {amenities.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFD700] sm:mb-3 sm:h-9 sm:w-9 md:h-10 md:w-10">
                  {renderIcon(feature.icon, "h-4 w-4 text-[#2C4549] sm:h-4.5 sm:w-4.5 md:h-5 md:w-5")}
                </div>
                <h3 className="mb-0.5 text-sm font-semibold text-[#2C4549] sm:mb-1 sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Features */}
        <div className="rounded-xl bg-linear-to-r from-gray-50 to-white p-6 sm:rounded-2xl sm:p-8">
          <h3 className="mb-4 text-center text-xl font-bold text-[#2C4549] sm:mb-6 sm:text-2xl">
            💼 Business & Travel Services
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-4">
            {businessFeatures.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 transform items-center justify-center rounded-full bg-[#2C4549] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFD700] sm:mb-3 sm:h-14 sm:w-14 md:h-16 md:w-16">
                  {renderIcon(feature.icon, "h-5 w-5 text-white transition-colors group-hover:text-[#2C4549] sm:h-6 sm:w-6 md:h-7 md:w-7")}
                </div>
                <h3 className="mb-0.5 text-sm font-semibold text-[#2C4549] sm:mb-1 sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 sm:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/booking"
              className="btn w-full transform gap-2 border-none bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:w-auto sm:px-8 sm:py-3 sm:text-base inline-flex items-center justify-center"
            >
              Book Your Stay
              {renderIcon("calendar", "h-4 w-4 sm:h-4.5 sm:w-4.5")}
            </Link>
            <Link
              href="/facilities"
              className="btn btn-outline w-full gap-2 border-[#2C4549] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:bg-[#2C4549] hover:text-white sm:w-auto sm:px-8 sm:py-3 sm:text-base inline-flex items-center justify-center"
            >
              View All Amenities
              {renderIcon("gift", "h-4 w-4 sm:h-4.5 sm:w-4.5")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelFeatures;