// src/Shared/Component/Home/Hero/Hero.jsx

// React
import React from "react";

// Next
import Image from "next/image";

// Icons
import { FiArrowRight, FiInfo, FiEye, FiPhone } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative w-full h-screen min-h-150 max-h-220 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/images/Home/home-banner.webp"
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay (for readability) */}
      <div className="absolute inset-0 bg-linear-to-r from-black/20 to-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Welcome to <span className="text-[#FFD700]">DA Hotel</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-100">
            Experience luxury, comfort, and unforgettable moments.
            Your perfect getaway starts here.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D] border-none gap-2 px-6 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105">
              <FiEye size={20} />
              View Our Rooms
              <FiArrowRight size={18} />
            </button>

            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#2C4549] gap-2 px-6 py-3 text-base font-semibold transition-all duration-300">
              <FiInfo size={20} />
              About Us
            </button>

            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#2C4549] gap-2 px-6 py-3 text-base font-semibold transition-all duration-300 hidden md:inline-flex">
              <FiPhone size={20} />
              Contact Us
            </button>
          </div>

          {/* Quick Stats or Trust Badges */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#FFD700]">500+</p>
              <p className="text-sm text-gray-200">Happy Guests</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#FFD700]">50+</p>
              <p className="text-sm text-gray-200">Luxury Rooms</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#FFD700]">24/7</p>
              <p className="text-sm text-gray-200">Guest Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes scrollDown {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        
        .animate-scroll-down {
          animation: scrollDown 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;