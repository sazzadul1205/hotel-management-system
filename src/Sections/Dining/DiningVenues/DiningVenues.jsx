// src/Sections/Dining/DiningVenues/DiningVenues.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiMapPin,
  FiClock,
  FiUsers,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import {
  GiKnifeFork,
  GiWineGlass,
  GiCoffeePot,
  GiChampagneCork
} from "react-icons/gi";

const DiningVenues = ({ content = {} }) => {
  // state
  const [activeVenue, setActiveVenue] = useState(0);
  const [showDetails, setShowDetails] = useState(null);

  const {
    title = "Our Dining Venues",
    subtitle = "Explore Our Restaurants & Bars",
    description = "From elegant fine dining to casual cafes and vibrant bars, discover our diverse collection of culinary destinations.",
    venues = [
      {
        id: 1,
        name: "The Grand Restaurant",
        type: "Fine Dining",
        cuisine: "International / French",
        description: "Experience the pinnacle of culinary artistry in our signature fine dining restaurant. Each dish is a masterpiece crafted by our Michelin-starred chef using the finest seasonal ingredients.",
        longDescription: "The Grand Restaurant offers an unparalleled fine dining experience with a sophisticated ambiance, white tablecloth service, and an extensive wine cellar featuring over 500 labels. Our tasting menus take you on a journey through classic French techniques with modern international influences.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        ],
        features: ["Michelin Starred", "Private Dining Room", "Wine Cellar", "Tasting Menus"],
        hours: "6:00 PM - 11:00 PM (Tue-Sat)",
        capacity: 80,
        dressCode: "Smart Elegant",
        rating: 4.9,
        priceRange: "$$$$",
        icon: "fine",
      },
      {
        id: 2,
        name: "Spice Route",
        type: "Asian Fusion",
        cuisine: "Pan-Asian / Japanese",
        description: "Embark on a culinary journey through Asia with our modern interpretation of classic dishes from Japan, Thailand, Vietnam, and China.",
        longDescription: "Spice Route brings the vibrant flavors of Asia to your plate. Our open kitchen features robata grill, sushi counter, and wok station where you can watch our chefs at work. The menu celebrates the diversity of Asian cuisine with signature dishes like our miso-glazed black cod and Thai green curry.",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
          "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
        ],
        features: ["Sushi Bar", "Robata Grill", "Tea House", "Live Cooking Stations"],
        hours: "12:00 PM - 3:00 PM, 6:00 PM - 10:30 PM",
        capacity: 120,
        dressCode: "Casual Elegant",
        rating: 4.8,
        priceRange: "$$$",
        icon: "asian",
      },
      {
        id: 3,
        name: "The Terrace Cafe",
        type: "Casual Dining",
        cuisine: "International / All-Day Dining",
        description: "Enjoy al fresco dining with stunning city views. Perfect for breakfast, brunch, or a relaxed lunch with friends and family.",
        longDescription: "The Terrace Cafe offers a bright and airy dining experience with indoor and outdoor seating overlooking the city skyline. Our all-day menu features international comfort food, healthy options, and indulgent treats. Don't miss our famous Sunday brunch buffet!",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        ],
        features: ["Outdoor Seating", "Breakfast Buffet", "Sunday Brunch", "Coffee Bar"],
        hours: "7:00 AM - 9:00 PM",
        capacity: 150,
        dressCode: "Casual",
        rating: 4.7,
        priceRange: "$$",
        icon: "cafe",
      },
      {
        id: 4,
        name: "Sky Bar",
        type: "Rooftop Bar",
        cuisine: "Cocktails & Tapas",
        description: "Experience the best views of the city from our rooftop bar. Signature cocktails, premium spirits, and delicious small plates.",
        longDescription: "Perched on the 20th floor, Sky Bar offers panoramic views of the city skyline. Our mixologists craft innovative cocktails using fresh ingredients and premium spirits. Enjoy our selection of Spanish-inspired tapas while watching the sunset.",
        image: "https://images.unsplash.com/photo-1566411520896-01e0c6ef3adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1566411520896-01e0c6ef3adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        ],
        features: ["Rooftop Views", "Live DJ", "Happy Hour", "Signature Cocktails"],
        hours: "5:00 PM - 1:00 AM",
        capacity: 200,
        dressCode: "Smart Casual",
        rating: 4.8,
        priceRange: "$$$",
        icon: "bar",
      },
      {
        id: 5,
        name: "Lobby Lounge",
        type: "Café & Bar",
        cuisine: "Light Bites & Afternoon Tea",
        description: "The perfect spot for afternoon tea, light meals, or evening cocktails in an elegant setting.",
        longDescription: "Our Lobby Lounge is the heart of the hotel, offering a sophisticated yet relaxed atmosphere. Enjoy our famous afternoon tea with homemade scones and pastries, or unwind with a classic cocktail accompanied by live piano music in the evening.",
        image: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        gallery: [
          "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        ],
        features: ["Afternoon Tea", "Live Piano", "Coffee Service", "Light Meals"],
        hours: "8:00 AM - 12:00 AM",
        capacity: 60,
        dressCode: "Casual Elegant",
        rating: 4.6,
        priceRange: "$$",
        icon: "lounge",
      },
    ],
    cta = {
      text: "Make a Reservation",
      link: "/booking",
    },
  } = content;

  // Next function - Next
  const nextVenue = () => {
    setActiveVenue((prev) => (prev + 1) % venues.length);
  };

  // Venue functions - Prev
  const prevVenue = () => {
    setActiveVenue((prev) => (prev - 1 + venues.length) % venues.length);
  };

  // Function to render icons
  const renderIcon = (iconName, className = "h-5 w-5") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "fine":
      case "asian":
        return <GiKnifeFork className={iconClass} />;
      case "cafe":
        return <GiCoffeePot className={iconClass} />;
      case "bar":
        return <GiChampagneCork className={iconClass} />;
      case "lounge":
        return <GiWineGlass className={iconClass} />;
      default:
        return <GiKnifeFork className={iconClass} />;
    }
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <GiKnifeFork className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Featured Venue Carousel */}
        <div className="mx-auto mb-12 max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="relative h-80 lg:h-auto lg:w-2/5">
                <Image
                  src={venues[activeVenue].image}
                  alt={venues[activeVenue].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent lg:bg-linear-to-r"></div>

                {/* Price Badge */}
                <div className="absolute left-3 top-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                  {venues[activeVenue].priceRange}
                </div>

                {/* Rating Badge */}
                <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
                  <FiStar className="inline text-[#FFD700]" size={12} />
                  <span className="ml-1">{venues[activeVenue].rating}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:w-3/5 lg:p-8">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]/10">
                    {renderIcon(venues[activeVenue].icon, "h-5 w-5")}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#FFD700] uppercase">
                      {venues[activeVenue].type}
                    </p>
                    <h3 className="text-2xl font-bold text-[#2C4549]">
                      {venues[activeVenue].name}
                    </h3>
                  </div>
                </div>

                <p className="mb-3 text-sm text-gray-600">{venues[activeVenue].description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {venues[activeVenue].features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiClock className="text-[#FFD700]" size={14} />
                    <span className="text-xs">{venues[activeVenue].hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiUsers className="text-[#FFD700]" size={14} />
                    <span className="text-xs">Seats {venues[activeVenue].capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GiKnifeFork className="text-[#FFD700]" size={14} />
                    <span className="text-xs">{venues[activeVenue].cuisine}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMapPin className="text-[#FFD700]" size={14} />
                    <span className="text-xs">{venues[activeVenue].dressCode}</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowDetails(venues[activeVenue].id)}
                  className="flex items-center gap-2 text-sm font-semibold text-[#FFD700] transition hover:gap-3"
                >
                  View Details <FiArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevVenue}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-[#FFD700] lg:left-4"
              aria-label="Previous venue"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={nextVenue}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-[#FFD700] lg:right-4"
              aria-label="Next venue"
            >
              <FiChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {venues.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVenue(idx)}
                  className={`h-1.5 rounded-full transition-all ${activeVenue === idx ? "w-4 bg-[#FFD700]" : "w-1.5 bg-gray-300"
                    }`}
                  aria-label={`Go to venue ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Venues Grid */}
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:text-2xl">
            All Dining Venues
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onClick={() => setShowDetails(venue.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-2 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                    {venue.priceRange}
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-bold text-[#2C4549]">{venue.name}</h4>
                    <div className="flex items-center gap-0.5">
                      <FiStar className="text-[#FFD700]" size={12} />
                      <span className="text-xs font-semibold">{venue.rating}</span>
                    </div>
                  </div>
                  <p className="mb-2 text-xs text-[#FFD700]">{venue.type}</p>
                  <p className="mb-2 text-xs text-gray-500 line-clamp-2">{venue.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiClock size={10} />
                      {venue.hours.split(",")[0]}
                    </span>
                    <span className="flex items-center gap-1 text-[#FFD700]">
                      Learn More <FiArrowRight size={10} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <GiKnifeFork size={16} />
            {cta.text}
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Venue Details Modal */}
      {showDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowDetails(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex justify-end bg-white p-3">
              <button
                onClick={() => setShowDetails(null)}
                className="rounded-full p-1 transition hover:bg-gray-100"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 pt-0">
              {venues.filter(v => v.id === showDetails).map((venue) => (
                <div key={venue.id}>
                  <div className="relative mb-4 h-64 overflow-hidden rounded-xl">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-2xl font-bold text-[#2C4549]">{venue.name}</h3>
                  <p className="mb-3 text-lg font-semibold text-[#FFD700]">{venue.type}</p>
                  <p className="mb-4 text-gray-600">{venue.longDescription}</p>
                  <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                    <div><span className="font-semibold">Hours:</span> {venue.hours}</div>
                    <div><span className="font-semibold">Capacity:</span> {venue.capacity} seats</div>
                    <div><span className="font-semibold">Dress Code:</span> {venue.dressCode}</div>
                    <div><span className="font-semibold">Cuisine:</span> {venue.cuisine}</div>
                  </div>
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {venue.features.map((feature, idx) => (
                        <span key={idx} className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                          <FiCheck className="mr-1 inline text-green-500" size={12} />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={cta.link}
                    className="mt-4 flex w-full transform items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                  >
                    Make a Reservation at {venue.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DiningVenues;