// src/Shared/Component/Home/Hero/Hero.jsx

// React
import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Icons
import { FiArrowRight, FiEye, FiInfo, FiPhone } from "react-icons/fi";

const Hero = ({ data }) => {
  const { title, subtitle, buttons, stats } = data;

  // Helper function to render icon
  const renderIcon = (IconComponent, size = 18, className = "") => {
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
  };

  return (
    <div className="relative h-screen max-h-250 min-h-150 w-full overflow-hidden md:min-h-175 lg:min-h-200">
      {/* Background Image */}
      <Image
        src="/assets/images/Home/home-banner.webp"
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/20 to-black/40 md:from-black/20 md:to-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6 md:px-8 lg:px-12">
        <div className="animate-fade-in-up mx-auto w-full max-w-5xl">
          {/* Main Heading */}
          <h1 className="mb-3 text-3xl leading-tight font-bold sm:text-4xl md:mb-4 md:text-5xl lg:text-6xl xl:text-7xl">
            {title.split(" ").map((word, i) =>
              word === "DA" ? (
                <span key={i} className="text-[#FFD700]">{word} </span>
              ) : i === title.split(" ").length - 1 ? (
                <span key={i} className="block sm:inline">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-6 max-w-xs text-sm leading-relaxed text-gray-100 sm:max-w-lg sm:text-base md:mb-8 md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl xl:text-2xl">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0">
            {/* Primary CTA - View Rooms */}
            <Link
              href={buttons.viewRooms.link}
              className="btn w-full transform items-center gap-2 border-none bg-[#FFD700] px-4 py-2.5 text-sm font-semibold text-[#2C4549] shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] sm:w-auto sm:px-6 sm:py-3 sm:text-base inline-flex justify-center"
            >
              <FiEye size={18} className="sm:h-5 sm:w-5" />
              {buttons.viewRooms.text}
              <FiArrowRight size={16} className="sm:h-4.5 sm:w-4.5" />
            </Link>

            {/* Secondary CTA - About Us */}
            <Link
              href={buttons.aboutUs.link}
              className="btn btn-outline w-full items-center gap-2 border-white px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#2C4549] sm:w-auto sm:px-6 sm:py-3 sm:text-base inline-flex justify-center"
            >
              <FiInfo size={18} className="sm:h-5 sm:w-5" />
              {buttons.aboutUs.text}
            </Link>

            {/* Tertiary CTA - Contact */}
            <Link
              href={buttons.contactUs.link}
              className="btn btn-outline hidden w-full items-center gap-2 border-white px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#2C4549] sm:w-auto sm:px-6 sm:py-3 sm:text-base md:inline-flex justify-center"
            >
              <FiPhone size={18} className="sm:h-5 sm:w-5" />
              {buttons.contactUs.text}
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 border-t border-white/20 pt-6 sm:mt-10 sm:pt-8 md:mt-12">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <React.Fragment key={stat.label}>
                  <div className="px-3 text-center sm:px-4">
                    <p className="text-xl font-bold text-[#FFD700] sm:text-2xl md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-200 sm:text-sm">{stat.label}</p>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden w-px self-stretch bg-white/20 sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform animate-bounce sm:bottom-6 sm:block md:bottom-8">
        <div className="flex h-8 w-5 justify-center rounded-full border-2 border-white sm:h-10 sm:w-6">
          <div className="animate-scroll-down mt-1.5 h-1.5 w-1 rounded-full bg-white sm:mt-2 sm:h-2 sm:w-1"></div>
        </div>
      </div>

      {/* Inline Styles */}
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