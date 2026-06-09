// src/Sections/Home/LocationMap/LocationMap.jsx
"use client";

// React
import React, { useState, useCallback } from "react";

// Icons
import {
  FiMapPin,
  FiNavigation,
  FiMap,
  FiClock,
  FiPhone,
  FiMail,
  FiStar,
  FiInfo,
  FiExternalLink,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { MdDirectionsCar, MdDirectionsTransit, MdDirectionsWalk } from "react-icons/md";

const LocationMap = () => {
  // Selected transport
  const [selectedTransport, setSelectedTransport] = useState("driving");

  // Copy to clipboard
  const [copied, setCopied] = useState(false);

  // Active tab
  const [activeTab, setActiveTab] = useState("map");

  // Hotel coordinates (New York City example)
  const hotelLocation = {
    name: "DA Hotel",
    address: "123 Luxury Avenue, Downtown District, New York, NY 10001",
    lat: 40.7128,
    lng: -74.006,
    phone: "+1 (555) 123-4567",
    email: "reservations@dahotel.com",
    website: "www.dahotel.com",
    nearby: [
      { name: "Central Park", distance: "0.8 miles", time: "5 min drive" },
      { name: "Times Square", distance: "1.2 miles", time: "8 min drive" },
      { name: "Empire State Building", distance: "0.5 miles", time: "3 min drive" },
      { name: "Broadway Theater", distance: "1.0 miles", time: "6 min drive" },
      { name: "Rockefeller Center", distance: "0.9 miles", time: "5 min drive" },
      { name: "Museum of Modern Art", distance: "0.7 miles", time: "4 min drive" },
    ],
  };

  // Directions from popular landmarks
  const directions = {
    airport: {
      name: "JFK International Airport",
      driving: "25 min",
      transit: "45 min",
      taxi: "$45-60",
    },
    train: {
      name: "Grand Central Station",
      driving: "10 min",
      transit: "15 min",
      taxi: "$15-20",
    },
  };

  // Copy address to clipboard
  const copyAddress = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(hotelLocation.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy address:", error);
    }
  }, [hotelLocation.address]);

  // Open maps
  const openMaps = useCallback(
    (service) => {
      const encodedAddress = encodeURIComponent(hotelLocation.address);
      const urls = {
        google: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
        waze: `https://www.waze.com/ul?q=${encodedAddress}`,
        apple: `https://maps.apple.com/?q=${encodedAddress}`,
        osm: `https://www.openstreetmap.org/search?query=${encodedAddress}`,
      };
      window.open(urls[service], "_blank");
    },
    [hotelLocation.address],
  );

  // Get directions
  const getDirections = useCallback(
    (mode) => {
      const encodedAddress = encodeURIComponent(hotelLocation.address);
      const modeParam = {
        driving: "d",
        transit: "r",
        walking: "w",
      };
      window.open(
        `https://www.google.com/maps/dir//${encodedAddress}/data=!4m2!4m1!3e${modeParam[mode]}`,
        "_blank",
      );
    },
    [hotelLocation.address],
  );

  // OpenStreetMap static image URL (no API key needed, never blocked)
  const staticMapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${hotelLocation.lat},${hotelLocation.lng}&zoom=14&size=800x400&markers=${hotelLocation.lat},${hotelLocation.lng},lightred1`;

  // OpenStreetMap embed URL (no API key needed)
  const embedMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${hotelLocation.lng - 0.05},${hotelLocation.lat - 0.05},${hotelLocation.lng + 0.05},${hotelLocation.lat + 0.05}&layer=mapnik&marker=${hotelLocation.lat},${hotelLocation.lng}`;

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12 lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiMapPin className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              Find Us
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Location & Directions
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Conveniently located in the heart of the city, close to major attractions and transport
            hubs
          </p>
        </div>

        {/* Location Map */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {/* Left Column - Info */}
          <div className="space-y-4 sm:space-y-6 lg:col-span-1">
            {/* Address Card */}
            <div className="rounded-xl bg-[#2C4549] p-4 text-white sm:rounded-2xl sm:p-6">
              <div className="mb-3 flex items-start justify-between sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFD700]/20 sm:h-12 sm:w-12 sm:rounded-xl">
                    <FiMapPin size={20} className="text-[#FFD700] sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold sm:text-lg">DA Hotel</h3>
                    <p className="text-xs text-gray-300 sm:text-sm">Luxury Hotel</p>
                  </div>
                </div>
                <button
                  onClick={copyAddress}
                  className="p-1 text-gray-300 transition-colors hover:text-[#FFD700]"
                  aria-label="Copy address"
                >
                  {copied ? (
                    <FiCheck size={16} className="sm:h-4.5 sm:w-4.5" />
                  ) : (
                    <FiCopy size={16} className="sm:h-4.5 sm:w-4.5" />
                  )}
                </button>
              </div>

              <p className="mb-3 text-sm leading-relaxed text-gray-200 sm:mb-4 sm:text-base">
                {hotelLocation.address}
              </p>

              <div className="space-y-1.5 border-t border-white/20 pt-3 sm:space-y-2 sm:pt-4">
                <div className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">
                  <FiPhone className="text-[#FFD700] shrink-0" size={14} />
                  <a
                    href={`tel:${hotelLocation.phone}`}
                    className="truncate transition hover:text-[#FFD700]"
                  >
                    {hotelLocation.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">
                  <FiMail className="shrink-0 text-[#FFD700]" size={14} />
                  <a
                    href={`mailto:${hotelLocation.email}`}
                    className="truncate transition hover:text-[#FFD700]"
                  >
                    {hotelLocation.email}
                  </a>
                </div>
              </div>

              {/* Map Apps Buttons */}
              <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4">
                <button
                  onClick={() => openMaps("google")}
                  className="rounded-lg bg-white/10 py-2 text-xs font-semibold transition hover:bg-white/20 sm:text-sm"
                >
                  Google
                </button>
                <button
                  onClick={() => openMaps("apple")}
                  className="rounded-lg bg-white/10 py-2 text-xs font-semibold transition hover:bg-white/20 sm:text-sm"
                >
                  Apple
                </button>
                <button
                  onClick={() => openMaps("waze")}
                  className="rounded-lg bg-white/10 py-2 text-xs font-semibold transition hover:bg-white/20 sm:text-sm"
                >
                  Waze
                </button>
              </div>
            </div>

            {/* Directions Card */}
            <div className="rounded-xl bg-gray-50 p-4 sm:rounded-2xl sm:p-6">
              <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-[#2C4549] sm:mb-4 sm:text-lg">
                <FiNavigation size={18} className="sm:h-5 sm:w-5" />
                Get Directions
              </h3>

              <div className="mb-3 flex gap-1.5 sm:mb-4 sm:gap-2">
                {[
                  { id: "driving", label: "Drive", icon: MdDirectionsCar },
                  { id: "transit", label: "Transit", icon: MdDirectionsTransit },
                  { id: "walking", label: "Walk", icon: MdDirectionsWalk },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedTransport(mode.id)}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs transition-all sm:gap-2 sm:text-sm ${selectedTransport === mode.id
                        ? "bg-[#FFD700] text-[#2C4549]"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    <mode.icon size={14} className="sm:h-4 sm:w-4" />
                    <span className="hidden xs:inline">{mode.label}</span>
                    <span className="xs:hidden">{mode.label.charAt(0)}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => getDirections(selectedTransport)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFD700] py-2 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D] sm:text-base"
              >
                <FiExternalLink size={14} className="sm:h-4 sm:w-4" />
                Open Directions
              </button>
            </div>

            {/* Transport Info */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:rounded-2xl sm:p-6">
              <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-[#2C4549] sm:mb-3 sm:text-lg">
                <FiClock size={18} className="sm:h-5 sm:w-5" />
                Transportation
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-xs text-gray-600 sm:text-sm">
                    ✈️ {directions.airport.name}
                  </span>
                  <span className="text-xs font-semibold text-[#2C4549] sm:text-sm">
                    {directions.airport.driving}
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-xs text-gray-600 sm:text-sm">
                    🚂 {directions.train.name}
                  </span>
                  <span className="text-xs font-semibold text-[#2C4549] sm:text-sm">
                    {directions.train.driving}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600 sm:text-sm">🚕 Taxi from Airport</span>
                  <span className="text-xs font-semibold text-[#2C4549] sm:text-sm">
                    {directions.airport.taxi}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-400 sm:mt-3">
                *Shuttle service available on request. Additional charges may apply.
              </p>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-2">
            {/* Tab Buttons */}
            <div className="mb-3 flex gap-1.5 sm:mb-4 sm:gap-2">
              <button
                onClick={() => setActiveTab("map")}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-6 sm:text-sm ${activeTab === "map"
                    ? "bg-[#FFD700] text-[#2C4549]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <FiMap className="mr-1 inline h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                Map View
              </button>
              <button
                onClick={() => setActiveTab("nearby")}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition sm:px-6 sm:text-sm ${activeTab === "nearby"
                    ? "bg-[#FFD700] text-[#2C4549]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <FiStar className="mr-1 inline h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                Nearby Attractions
              </button>
            </div>

            {/* Map Container */}
            <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg sm:rounded-2xl">
              {activeTab === "map" ? (
                <div className="relative">
                  <div className="xs:h-80 relative h-64 w-full sm:h-96 md:h-112.5 lg:h-125">
                    {/* OpenStreetMap Embed - Never blocked! */}
                    <iframe
                      src={embedMapUrl}
                      className="h-full w-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      title="DA Hotel Location Map - OpenStreetMap"
                    />

                    {/* Custom Marker Overlay */}
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                      <div className="relative">
                        <div className="animate-bounce">
                          <FiMapPin
                            size={32}
                            className="text-[#FFD700] drop-shadow-lg sm:h-9 sm:w-9"
                          />
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform rounded bg-[#2C4549] px-2 py-1 text-xs font-semibold whitespace-nowrap text-white shadow-lg">
                          📍 DA Hotel
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Legend */}
                  <div className="absolute right-2 bottom-2 rounded-lg bg-white/90 p-1.5 text-xs shadow-md backdrop-blur-sm sm:right-4 sm:bottom-4 sm:p-2">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <FiMapPin size={12} className="text-[#FFD700] sm:h-3.5 sm:w-3.5" />
                      <span className="font-medium text-[#2C4549]">Hotel Location</span>
                    </div>
                  </div>

                  {/* Map Attribution */}
                  <div className="absolute left-2 bottom-2 rounded bg-black/50 px-1.5 py-0.5 text-[8px] text-white/70 sm:left-4 sm:bottom-4 sm:text-[10px]">
                    © OpenStreetMap contributors
                  </div>
                </div>
              ) : (
                // Nearby Attractions Tab
                <div className="p-4 sm:p-6">
                  <h3 className="mb-3 text-lg font-bold text-[#2C4549] sm:mb-4 sm:text-xl">
                    Nearby Attractions
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    {hotelLocation.nearby.map((place, index) => (
                      <div
                        key={index}
                        className="group flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-3 transition hover:bg-gray-100 sm:rounded-xl sm:p-4"
                      >
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-semibold text-[#2C4549] transition group-hover:text-[#FFD700] sm:text-base">
                            {place.name}
                          </h4>
                          <div className="mt-1 flex items-center gap-2 sm:gap-3">
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <FiMapPin size={10} /> {place.distance}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-500">
                              <FiClock size={10} /> {place.time}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            const encodedPlace = encodeURIComponent(place.name);
                            window.open(
                              `https://www.google.com/maps/search/?api=1&query=${encodedPlace}`,
                              "_blank",
                            );
                          }}
                          className="ml-2 shrink-0 text-[#2C4549] opacity-0 transition group-hover:opacity-100"
                          aria-label={`View ${place.name} on map`}
                        >
                          <FiExternalLink size={14} className="sm:h-4 sm:w-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Area Info */}
                  <div className="mt-4 rounded-lg bg-[#2C4549]/5 p-3 sm:mt-6 sm:rounded-xl sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <FiInfo
                        className="mt-0.5 shrink-0 text-[#FFD700] sm:h-4.5 sm:w-4.5"
                        size={16}
                      />
                      <div>
                        <p className="text-xs font-semibold text-[#2C4549] sm:text-sm">
                          Prime Location Benefits
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Located in the vibrant downtown area, our hotel puts you steps away from
                          world-class shopping, dining, entertainment, and cultural attractions.
                          Perfect for both business and leisure travelers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-3 flex flex-col items-start justify-between gap-3 sm:mt-4 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-3 text-xs text-gray-500 sm:gap-4 sm:text-sm">
                <span className="flex items-center gap-1">
                  <FiMapPin size={12} className="sm:h-3.5 sm:w-3.5" /> Central Location
                </span>
                <span className="flex items-center gap-1">
                  <FiClock size={12} className="sm:h-3.5 sm:w-3.5" /> 24/7 Reception
                </span>
              </div>
              <button
                onClick={() =>
                  window.open(
                    `https://www.openstreetmap.org/search?query=${encodeURIComponent(hotelLocation.address)}`,
                    "_blank",
                  )
                }
                className="flex items-center gap-1 text-xs font-semibold text-[#FFD700] hover:text-[#FFE44D] sm:text-sm"
              >
                View Full Screen Map
                <FiExternalLink size={12} className="sm:h-3.5 sm:w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => getDirections("driving")}
              className="btn w-full transform gap-2 border-none bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              <MdDirectionsCar size={16} className="sm:h-4.5 sm:w-4.5" />
              Get Driving Directions
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://www.openstreetmap.org/search?query=${encodeURIComponent(hotelLocation.address)}`,
                  "_blank",
                )
              }
              className="btn btn-outline w-full gap-2 border-[#2C4549] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:bg-[#2C4549] hover:text-white sm:w-auto sm:px-8 sm:py-3 sm:text-base"
            >
              <FiMap size={16} className="sm:h-4.5 sm:w-4.5" />
              Explore Area
            </button>
          </div>
        </div>
      </div>

      {/* Bounce animation */}
      <style>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LocationMap;