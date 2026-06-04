import React from 'react';
import {
  FiStar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiShield,
  FiThumbsUp,
  FiAward,
  FiWifi,
  FiCoffee,
  FiHeart
} from 'react-icons/fi';
import { MdOutlineRoomService, MdOutlineSpa } from 'react-icons/md';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FiStar,
      title: "Luxury Experience",
      description: "Experience world-class luxury with premium amenities and personalized service.",
      color: "#FFD700"
    },
    {
      icon: MdOutlineRoomService,
      title: "24/7 Room Service",
      description: "Round-the-clock room service to cater to your every need, anytime day or night.",
      color: "#2C4549"
    },
    {
      icon: FiShield,
      title: "Safe & Secure",
      description: "Your safety is our priority with 24/7 security and modern safety systems.",
      color: "#FFD700"
    },
    {
      icon: FiUsers,
      title: "Expert Staff",
      description: "Professional and friendly staff dedicated to making your stay unforgettable.",
      color: "#2C4549"
    },
    {
      icon: FiWifi,
      title: "Free High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet throughout the property.",
      color: "#FFD700"
    },
    {
      icon: FiMapPin,
      title: "Prime Location",
      description: "Conveniently located near major attractions, business districts, and transport hubs.",
      color: "#2C4549"
    }
  ];

  const highlights = [
    {
      number: "500+",
      label: "Happy Guests",
      icon: FiHeart
    },
    {
      number: "50+",
      label: "Luxury Rooms",
      icon: FiAward
    },
    {
      number: "4.8",
      label: "Guest Rating",
      icon: FiStar
    },
    {
      number: "10+",
      label: "Years of Excellence",
      icon: FiClock
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-4">
            <FiStar className="text-[#FFD700]" size={18} />
            <span className="text-[#2C4549] font-semibold text-sm uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549] mb-4">
            The Perfect Choice for Your Stay
          </h2>

          <p className="text-gray-600 text-lg">
            Discover why thousands of guests choose DA Hotel for their unforgettable experiences.
            We combine luxury, comfort, and exceptional service to create the perfect getaway.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}10` }}
              >
                <feature.icon size={28} color={feature.color} />
              </div>

              <h3 className="text-xl font-bold text-[#2C4549] mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights Stats */}
        <div className="bg-[#2C4549] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-[#FFD700] transition-colors duration-300">
                    <item.icon size={24} className="text-[#FFD700] group-hover:text-[#2C4549] transition-colors" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {item.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="btn bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D] border-none gap-2 px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105">
              Book Your Stay Now
              <FiThumbsUp size={18} />
            </button>
            <button className="btn btn-outline border-[#2C4549] text-[#2C4549] hover:bg-[#2C4549] hover:text-white gap-2 px-8 py-3 text-base font-semibold transition-all duration-300">
              View Our Rooms
              <FiStar size={18} />
            </button>
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            * Limited time offers available. Contact us for special group rates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;