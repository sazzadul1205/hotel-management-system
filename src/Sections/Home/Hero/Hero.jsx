// src/Shared/Component/Home/Hero/Hero.jsx

// React
import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Icons
import { FiArrowRight, FiInfo, FiEye, FiPhone } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative h-screen max-h-250 min-h-150 w-full overflow-hidden md:min-h-175 lg:min-h-200">
      {/* Background Image */}
      <Image
        src="/assets/images/Home/home-banner.webp"
        alt="Hero Image"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay (for readability) - Enhanced for mobile */}
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/20 to-black/40 md:from-black/20 md:to-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6 md:px-8 lg:px-12">
        <div className="animate-fade-in-up mx-auto w-full max-w-5xl">
          {/* Main Heading */}
          <h1 className="mb-3 text-3xl leading-tight font-bold sm:text-4xl md:mb-4 md:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to <span className="block text-[#FFD700] sm:inline">DA Hotel</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-6 max-w-xs text-sm leading-relaxed text-gray-100 sm:max-w-lg sm:text-base md:mb-8 md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl xl:text-2xl">
            Experience luxury, comfort, and unforgettable moments. Your perfect getaway starts here.
          </p>

          {/* CTA Buttons - Responsive Grid */}
          <div className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0">
            {/* Primary CTA - View Rooms */}
            <Link
              href="/our-rooms"
              className="btn w-full transform gap-2 border-none bg-[#FFD700] px-4 py-2.5 text-sm font-semibold text-[#2C4549] shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] sm:w-auto sm:px-6 sm:py-3 sm:text-base"
            >
              <FiEye size={18} className="sm:h-5 sm:w-5" />
              View Our Rooms
              <FiArrowRight size={16} className="sm:h-4.5 sm:w-4.5" />
            </Link>

            {/* Secondary CTA - About Us */}
            <Link
              href="/about"
              className="btn btn-outline w-full gap-2 border-white px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#2C4549] sm:w-auto sm:px-6 sm:py-3 sm:text-base"
            >
              <FiInfo size={18} className="sm:h-5 sm:w-5" />
              About Us
            </Link>

            {/* Tertiary CTA - Contact (Hidden on mobile, visible on md+) */}
            <Link
              href="/contact"
              className="btn btn-outline hidden w-full gap-2 border-white px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#2C4549] sm:w-auto sm:px-6 sm:py-3 sm:text-base md:inline-flex"
            >
              <FiPhone size={18} className="sm:h-5 sm:w-5" />
              Contact Us
            </Link>
          </div>

          {/* Quick Stats or Trust Badges */}
          <div className="mt-8 border-t border-white/20 pt-6 sm:mt-10 sm:pt-8 md:mt-12">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {/* Stat 1 - Happy Guests */}
              <div className="px-3 text-center sm:px-4">
                <p className="text-xl font-bold text-[#FFD700] sm:text-2xl md:text-3xl">500+</p>
                <p className="text-xs text-gray-200 sm:text-sm">Happy Guests</p>
              </div>

              {/* Divider - Hidden on smallest screens */}
              <div className="hidden w-px self-stretch bg-white/20 sm:block" />

              {/* Stat 2 - Luxury Rooms */}
              <div className="px-3 text-center sm:px-4">
                <p className="text-xl font-bold text-[#FFD700] sm:text-2xl md:text-3xl">50+</p>
                <p className="text-xs text-gray-200 sm:text-sm">Luxury Rooms</p>
              </div>

              {/* Divider - Hidden on smallest screens */}
              <div className="hidden w-px self-stretch bg-white/20 sm:block" />

              {/* Stat 3 - Guest Support */}
              <div className="px-3 text-center sm:px-4">
                <p className="text-xl font-bold text-[#FFD700] sm:text-2xl md:text-3xl">24/7</p>
                <p className="text-xs text-gray-200 sm:text-sm">Guest Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Hidden on mobile */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform animate-bounce sm:bottom-6 sm:block md:bottom-8">
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white sm:h-10 sm:w-6">
          <div className="animate-scroll-down mt-1.5 h-1.5 w-1 rounded-full bg-white sm:mt-2 sm:h-2 sm:w-1"></div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
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
