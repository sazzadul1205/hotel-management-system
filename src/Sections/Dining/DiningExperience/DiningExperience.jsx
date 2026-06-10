// src/Sections/Dining/DiningExperience/DiningExperience.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons - Using only verified icons that exist
import {
  FiArrowRight,
  FiClock,
  FiUsers,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  MdOutlineDining,
  MdOutlineRestaurant,
} from "react-icons/md";
import { FaTrophy, FaUtensils, FaWineGlassAlt } from "react-icons/fa";
import { BiRestaurant, BiCoffee } from "react-icons/bi";
import { GiGlassCelebration } from "react-icons/gi";

const DiningExperience = ({ content = {} }) => {
  const [activeExperience, setActiveExperience] = useState(0);

  const {
    title = "Unique Dining Experiences",
    subtitle = "Create Unforgettable Memories",
    description = "Elevate your dining experience with our exclusive offerings, from private chef's tables to romantic rooftop dinners under the stars.",
    experiences = [
      {
        id: 1,
        name: "Chef's Table Experience",
        tagline: "An Intimate Culinary Journey",
        description: "Join our Executive Chef for an exclusive 10-course tasting menu prepared live at our chef's table.",
        longDescription: "The Chef's Table offers an unparalleled dining experience for up to 6 guests. You'll be seated in our open kitchen, witnessing the artistry and precision that goes into every dish.",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
        price: "$250 per person",
        duration: "3 hours",
        capacity: "6 guests",
        availability: "Tuesday - Saturday",
        features: [
          "10-Course Tasting Menu",
          "Wine Pairing Included",
          "Kitchen Tour",
          "Signed Menu Keepsake",
          "Meet the Chef",
        ],
        icon: "chef",
        popular: true,
      },
      {
        id: 2,
        name: "Private Wine Dinner",
        tagline: "Sommelier-Led Experience",
        description: "Enjoy a curated 5-course dinner paired with rare vintages from our award-winning wine cellar.",
        longDescription: "Our Private Wine Dinner is perfect for wine enthusiasts and special celebrations. You'll be guided through 5 exquisite courses, each perfectly paired with wines.",
        image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: "$180 per person",
        duration: "2.5 hours",
        capacity: "4-12 guests",
        availability: "Thursday - Saturday",
        features: [
          "5-Course Dinner",
          "Premium Wine Pairing",
          "Sommelier Presentation",
          "Tasting Notes",
          "Wine Cellar Tour",
        ],
        icon: "wine",
        popular: false,
      },
      {
        id: 3,
        name: "Romantic Rooftop Dinner",
        tagline: "Dine Under the Stars",
        description: "A private candlelit dinner on our rooftop terrace with panoramic city views.",
        longDescription: "Create magical memories with our Romantic Rooftop Dinner experience. You'll have exclusive access to our rooftop terrace, decorated with candles and flowers.",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: "$350 per couple",
        duration: "2.5 hours",
        capacity: "2 guests",
        availability: "Daily (weather permitting)",
        features: [
          "Private Rooftop",
          "Personal Butler",
          "Champagne Toast",
          "Live Acoustic Music",
          "Custom Menu",
          "Flower Arrangement",
        ],
        icon: "romantic",
        popular: true,
      },
      {
        id: 4,
        name: "Cooking Class",
        tagline: "Learn from the Masters",
        description: "Join our chefs for a hands-on cooking class followed by a meal.",
        longDescription: "Our interactive cooking classes are perfect for food lovers of all skill levels. Choose from various themes including pasta-making, sushi rolling, or pastry arts.",
        image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: "$95 per person",
        duration: "3 hours",
        capacity: "8-12 guests",
        availability: "Weekends, 10 AM - 1 PM",
        features: [
          "Hands-On Instruction",
          "All Ingredients Included",
          "Recipe Booklet",
          "Complimentary Wine",
          "Apron Gift",
        ],
        icon: "cooking",
        popular: false,
      },
      {
        id: 5,
        name: "Sunday Brunch Buffet",
        tagline: "The Ultimate Weekend Feast",
        description: "Indulge in our famous Sunday brunch featuring live cooking stations.",
        longDescription: "Our Sunday Brunch is a weekly celebration of food and family. With over 50 items including seafood towers, carving stations, and an extensive dessert room.",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: "$65 per adult | $32 per child",
        duration: "4 hours",
        capacity: "200 guests",
        availability: "Sunday, 11 AM - 3 PM",
        features: [
          "Free-Flowing Champagne",
          "Live Cooking Stations",
          "Seafood Bar",
          "Kids Activity Area",
          "Live Music",
          "Dessert Room",
        ],
        icon: "brunch",
        popular: true,
      },
    ],
    cta = {
      text: "Book an Experience",
      link: "/booking",
    },
  } = content;

  // Render icons - Using only verified icons that exist
  const renderIcon = (iconName, className = "h-6 w-6") => {
    const iconClass = `text-[#FFD700} ${className}`;
    switch (iconName) {
      case "chef":
        return <MdOutlineRestaurant className={iconClass} />;
      case "wine":
        return <FaWineGlassAlt className={iconClass} />;
      case "romantic":
        return <GiGlassCelebration className={iconClass} />;
      case "cooking":
        return <FaUtensils className={iconClass} />;
      case "brunch":
        return <BiCoffee className={iconClass} />;
      default:
        return <MdOutlineDining className={iconClass} />;
    }
  };

  const nextExperience = () => {
    setActiveExperience((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setActiveExperience((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <MdOutlineRestaurant className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Featured Experience Carousel */}
        <div className="mx-auto mb-12 max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="relative h-80 lg:h-auto lg:w-2/5">
                <Image
                  src={experiences[activeExperience].image}
                  alt={experiences[activeExperience].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent lg:bg-linear-to-r"></div>

                {experiences[activeExperience].popular && (
                  <div className="absolute left-3 top-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 lg:w-3/5 lg:p-8">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]/10">
                    {renderIcon(experiences[activeExperience].icon, "h-5 w-5")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C4549] lg:text-2xl">
                      {experiences[activeExperience].name}
                    </h3>
                    <p className="text-sm font-semibold text-[#FFD700]">
                      {experiences[activeExperience].tagline}
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-sm text-gray-600 lg:text-base">
                  {experiences[activeExperience].description}
                </p>

                <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUtensils className="text-[#FFD700]" size={14} />
                    <span className="text-xs">{experiences[activeExperience].price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiClock className="text-[#FFD700]" size={14} />
                    <span className="text-xs">{experiences[activeExperience].duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiUsers className="text-[#FFD700]" size={14} />
                    <span className="text-xs">Up to {experiences[activeExperience].capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiCalendar className="text-[#FFD700]" size={14} />
                    <span className="text-xs">{experiences[activeExperience].availability}</span>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {experiences[activeExperience].features.slice(0, 4).map((feature, idx) => (
                    <span key={idx} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      {feature}
                    </span>
                  ))}
                  {experiences[activeExperience].features.length > 4 && (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      +{experiences[activeExperience].features.length - 4} more
                    </span>
                  )}
                </div>

                <Link
                  href={`${cta.link}?experience=${experiences[activeExperience].id}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FFD700] px-5 py-2 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                >
                  Book This Experience
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevExperience}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-[#FFD700] lg:left-4"
              aria-label="Previous"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextExperience}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-[#FFD700] lg:right-4"
              aria-label="Next"
            >
              <FiChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {experiences.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveExperience(idx)}
                  className={`h-1.5 rounded-full transition-all ${activeExperience === idx ? "w-4 bg-[#FFD700]" : "w-1.5 bg-gray-300"
                    }`}
                  aria-label={`Go to experience ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Experiences Grid */}
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:text-2xl">
            All Dining Experiences
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                  {exp.popular && (
                    <div className="absolute left-2 top-2 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/10">
                      {renderIcon(exp.icon, "h-4 w-4")}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2C4549]">{exp.name}</h4>
                      <p className="text-xs text-[#FFD700]">{exp.tagline}</p>
                    </div>
                  </div>
                  <p className="mb-2 text-xs text-gray-500 line-clamp-2">{exp.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-[#FFD700]">{exp.price}</span>
                      <span className="text-xs text-gray-400"> /person</span>
                    </div>
                    <Link
                      href={`${cta.link}?experience=${exp.id}`}
                      className="flex items-center gap-1 text-xs font-semibold text-[#FFD700] transition hover:gap-2"
                    >
                      Book Now <FiArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mx-auto mt-12 max-w-6xl">
          <div className="rounded-2xl bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-6 text-white sm:p-8 md:p-10">
            <div className="text-center">
              <FaTrophy className="mx-auto mb-3 h-8 w-8 text-[#FFD700]" />
              <h3 className="mb-2 text-xl font-bold sm:text-2xl">Award-Winning Experiences</h3>
              <p className="mb-4 text-sm text-gray-200">
                Our dining experiences have been recognized by prestigious organizations worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-xs">
                <span className="rounded-full bg-white/20 px-3 py-1">Best Fine Dining 2024</span>
                <span className="rounded-full bg-white/20 px-3 py-1">Wine Spectator Award</span>
                <span className="rounded-full bg-white/20 px-3 py-1">Top 10 Romantic Dining</span>
                <span className="rounded-full bg-white/20 px-3 py-1">Chef of the Year</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <BiRestaurant size={16} />
            {cta.text}
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiningExperience;