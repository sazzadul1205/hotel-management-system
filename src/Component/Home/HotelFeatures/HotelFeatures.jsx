import React from 'react';
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
  FiBox,
  FiGift,
  FiHeart
} from 'react-icons/fi';
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
  MdOutlineFireplace,
  MdOutlineShoppingBag
} from 'react-icons/md';

const HotelFeatures = () => {
  const premiumFeatures = [
    {
      icon: MdOutlinePool,
      title: "Swimming Pool",
      description: "Temperature-controlled indoor & outdoor pools",
      category: "premium"
    },
    {
      icon: MdOutlineFitnessCenter,
      title: "Fitness Center",
      description: "State-of-the-art gym with personal trainers",
      category: "premium"
    },
    {
      icon: MdOutlineSpa,
      title: "Luxury Spa",
      description: "Massage, sauna, and wellness treatments",
      category: "premium"
    },
    {
      icon: MdOutlineRestaurantMenu,
      title: "Fine Dining",
      description: "Multi-cuisine restaurant & rooftop bar",
      category: "premium"
    }
  ];

  const roomFeatures = [
    {
      icon: FiWifi,
      title: "Free High-Speed WiFi",
      description: "Up to 100 Mbps throughout the property"
    },
    {
      icon: FiTv,
      title: "Smart LED TV",
      description: "55-inch 4K with streaming services"
    },
    {
      icon: FiWind,
      title: "Air Conditioning",
      description: "Individually controlled AC/Heating"
    },
    {
      icon: FiThermometer,
      title: "Mini Bar",
      description: "Fully stocked with premium beverages"
    },
    {
      icon: FiCoffee,
      title: "Coffee Maker",
      description: "Premium coffee & tea selection"
    },
    {
      icon: FiVolume2,
      title: "Soundproof Rooms",
      description: "Peaceful environment for quality sleep"
    }
  ];

  const amenities = [
    {
      icon: MdOutlineRoomService,
      title: "24/7 Room Service",
      description: "In-dining available anytime"
    },
    {
      icon: MdOutlineLocalParking,
      title: "Free Parking",
      description: "Secure parking with CCTV surveillance"
    },
    {
      icon: MdOutlineStore,
      title: "Convenience Store",
      description: "Open 24/7 for essentials"
    },
    {
      icon: MdOutlineLocalLaundryService,
      title: "Laundry Service",
      description: "Same-day dry cleaning available"
    },
    {
      icon: FiShield,
      title: "24/7 Security",
      description: "Professional security personnel"
    },
    {
      icon: MdOutlineElevator,
      title: "Elevator Access",
      description: "Wheelchair accessible"
    },
    {
      icon: FiClock,
      title: "Express Check-in/out",
      description: "Save time with digital check-in"
    },
    {
      icon: FiCalendar,
      title: "Tour Desk",
      description: "Local tours & activities booking"
    }
  ];

  const businessFeatures = [
    {
      icon: MdOutlineMeetingRoom,
      title: "Conference Halls",
      description: "State-of-the-art meeting rooms"
    },
    {
      icon: MdOutlineAirportShuttle,
      title: "Airport Transfer",
      description: "Luxury car pickup & drop-off"
    },
    {
      icon: FiMapPin,
      title: "Central Location",
      description: "Close to business district"
    },
    {
      icon: MdOutlineBreakfastDining,
      title: "Business Breakfast",
      description: "Early breakfast for professionals"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-4">
            <FiHeart className="text-[#FFD700]" size={18} />
            <span className="text-[#2C4549] font-semibold text-sm uppercase tracking-wide">
              Hotel Amenities
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549] mb-4">
            Premium Features & Services
          </h2>

          <p className="text-gray-600 text-lg">
            Experience unparalleled comfort with our world-class amenities designed for your ultimate satisfaction
          </p>
        </div>

        {/* Premium Features - Large Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2C4549] mb-6 text-center md:text-left">
            🌟 Premium Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-[#2C4549] to-[#1a2f33] rounded-2xl p-6 text-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#FFD700]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FFD700] transition-colors duration-300">
                    <feature.icon size={32} className="text-[#FFD700] group-hover:text-[#2C4549] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2C4549] mb-6 text-center md:text-left">
            🛏️ In-Room Amenities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {roomFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#FFD700] transition-colors duration-300">
                  <feature.icon size={22} className="text-[#2C4549] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#2C4549] mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Amenities Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2C4549] mb-6 text-center md:text-left">
            🏨 Hotel Amenities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {amenities.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-[#FFD700] rounded-lg flex items-center justify-center mb-3">
                  <feature.icon size={20} className="text-[#2C4549]" />
                </div>
                <h3 className="font-semibold text-[#2C4549] mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Features */}
        <div className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-[#2C4549] mb-6 text-center">
            💼 Business & Travel Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#2C4549] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFD700] transition-all duration-300 transform group-hover:scale-110">
                  <feature.icon size={28} className="text-white group-hover:text-[#2C4549]" />
                </div>
                <h3 className="font-semibold text-[#2C4549] mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D] border-none gap-2 px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105">
              Book Your Stay
              <FiCalendar size={18} />
            </button>
            <button className="btn btn-outline border-[#2C4549] text-[#2C4549] hover:bg-[#2C4549] hover:text-white gap-2 px-8 py-3 text-base font-semibold transition-all duration-300">
              View All Amenities
              <FiGift size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelFeatures;