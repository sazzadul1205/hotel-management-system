// src/Sections/Dining/DiningIntro/DiningIntro.jsx
"use client";

// React
import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiCheck,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";
import {
  MdOutlineRoomService,
  MdOutlineRestaurant,
} from "react-icons/md";
import {
  FaUtensils,
  FaWineGlassAlt,
} from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { GiMeal, GiChampagneCork } from "react-icons/gi";

const DiningIntro = ({ content = {} }) => {
  const {
    title = "A Culinary Destination Like No Other",
    subtitle = "Welcome to Our Dining Collection",
    description = "At DA Hotel, we believe that dining is more than just eating—it's an experience. Our diverse collection of restaurants, bars, and cafes offers something for every palate, from authentic local flavors to international cuisine crafted by world-renowned chefs.",
    restaurants = [
      {
        name: "The Grand Restaurant",
        cuisine: "International Fine Dining",
        description: "Experience elegance and sophistication with our signature tasting menus.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Michelin Starred", "Wine Cellar", "Private Rooms"],
        openHours: "6:00 PM - 11:00 PM",
        priceRange: "$$$$",
      },
      {
        name: "Spice Route",
        cuisine: "Asian Fusion",
        description: "A culinary journey through Asia with modern interpretations of classic dishes.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Sushi Bar", "Tea House", "Live Stations"],
        openHours: "12:00 PM - 3:00 PM, 6:00 PM - 10:30 PM",
        priceRange: "$$$",
      },
      {
        name: "The Terrace Cafe",
        cuisine: "Casual Dining & Brunch",
        description: "Al fresco dining with stunning city views and all-day breakfast.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Outdoor Seating", "Brunch Buffet", "Coffee Bar"],
        openHours: "7:00 AM - 9:00 PM",
        priceRange: "$$",
      },
    ],
    highlights = [
      {
        icon: "chef",
        title: "Award-Winning Chefs",
        description: "Led by Michelin-starred culinary directors",
      },
      {
        icon: "local",
        title: "Farm to Table",
        description: "Fresh, locally-sourced ingredients daily",
      },
      {
        icon: "wine",
        title: "Extensive Wine List",
        description: "Over 500 selections from around the world",
      },
      {
        icon: "service",
        title: "Exceptional Service",
        description: "Personalized attention from our expert staff",
      },
    ],
    cta = {
      text: "Explore All Restaurants",
      link: "/dining/restaurants",
    },
  } = content;

  // Function to render icons - Using only verified icons
  const renderIcon = (iconName, className = "h-5 w-5") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "chef":
        return <FaUtensils className={iconClass} />;
      case "local":
        return <GiMeal className={iconClass} />;
      case "wine":
        return <FaWineGlassAlt className={iconClass} />;
      case "service":
        return <MdOutlineRoomService className={iconClass} />;
      default:
        return <MdOutlineRestaurant className={iconClass} />;
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <MdOutlineRestaurant className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">
              {subtitle}
            </span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Restaurant Highlights Grid */}
        <div className="mx-auto mb-12 grid max-w-6xl gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                  {restaurant.priceRange}
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-xl font-bold text-[#2C4549]">{restaurant.name}</h3>
                <p className="mb-2 text-sm font-semibold text-[#FFD700]">{restaurant.cuisine}</p>
                <p className="mb-3 text-sm text-gray-600">{restaurant.description}</p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {restaurant.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <FiClock size={12} />
                    {restaurant.openHours}
                  </span>
                  <Link
                    href={`/dining/${restaurant.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-1 text-[#FFD700] transition hover:gap-2"
                  >
                    Learn More <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Features */}
        <div className="mx-auto mb-12 max-w-6xl">
          <h3 className="mb-8 text-center text-xl font-bold text-[#2C4549] sm:text-2xl">
            Why Choose Our Dining
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group rounded-xl bg-gray-50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD700]/10 transition-colors duration-300 group-hover:bg-[#FFD700]">
                  {renderIcon(highlight.icon, "h-7 w-7 transition-colors group-hover:text-[#2C4549]")}
                </div>
                <h4 className="mb-1.5 text-base font-bold text-[#2C4549]">{highlight.title}</h4>
                <p className="text-xs text-gray-500 sm:text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Dining Experiences */}
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-6 text-white sm:p-8 md:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <GiChampagneCork className="h-6 w-6 text-[#FFD700]" />
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#FFD700]">
                    Exclusive Experience
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold sm:text-2xl md:text-3xl">
                  Chef's Table Experience
                </h3>
                <p className="mb-4 text-sm text-gray-200 sm:text-base">
                  Join our Executive Chef for an intimate 8-course tasting menu with wine pairing.
                  Available for parties of 2-6 guests, Tuesday through Saturday.
                </p>
                <div className="mb-4 flex flex-wrap gap-3">
                  <div className="flex items-center gap-1 text-xs text-gray-300">
                    <FiCheck size={14} className="text-[#FFD700]" />
                    Private Dining Room
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-300">
                    <FiCheck size={14} className="text-[#FFD700]" />
                    Sommelier Service
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-300">
                    <FiCheck size={14} className="text-[#FFD700]" />
                    Custom Menus
                  </div>
                </div>
                <Link
                  href="/dining/chefs-table"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FFD700] px-5 py-2 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D] sm:px-6 sm:py-2.5"
                >
                  Book Chef's Table
                  <FiArrowRight size={14} />
                </Link>
              </div>
              <div className="relative h-64 overflow-hidden rounded-xl lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
                  alt="Chef's Table Experience"
                  fill
                  className="object-cover"
                />
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

export default DiningIntro;