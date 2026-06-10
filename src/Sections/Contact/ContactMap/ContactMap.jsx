// src/Sections/Contact/ContactMap/ContactMap.jsx
"use client";

// React
import React, { useState } from "react";

// Icons
import {
  FiMapPin,
  FiNavigation,
  FiClock,
  FiPhone,
  FiMail,
  FiInfo,
  FiExternalLink,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import {
  MdDirectionsCar,
  MdDirectionsTransit,
  MdDirectionsWalk
} from "react-icons/md";

const ContactMap = ({ content = {} }) => {

  // Copy address
  const [copied, setCopied] = useState(false);

  // Selected transport
  const [selectedTransport, setSelectedTransport] = useState("driving");

  const {
    title = "Find Us Here",
    subtitle = "Our Location",
    description = "Conveniently located in the heart of the city. We look forward to welcoming you.",
    hotelLocation = {
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
    },
    directions = {
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
    },
    cta = {
      text: "Get Directions",
    },
  } = content;

  // Copy address to clipboard
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(hotelLocation.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy address:", error);
    }
  };

  // Open maps
  const openMaps = (service) => {
    const encodedAddress = encodeURIComponent(hotelLocation.address);
    const urls = {
      google: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      waze: `https://www.waze.com/ul?q=${encodedAddress}`,
      apple: `https://maps.apple.com/?q=${encodedAddress}`,
      osm: `https://www.openstreetmap.org/search?query=${encodedAddress}`,
    };
    window.open(urls[service], "_blank");
  };

  // Get directions
  const getDirections = (mode) => {
    const encodedAddress = encodeURIComponent(hotelLocation.address);
    const modeParam = {
      driving: "d",
      transit: "r",
      walking: "w",
    };
    window.open(
      `https://www.google.com/maps/dir//${encodedAddress}/data=!4m2!4m1!3e${modeParam[mode]}`,
      "_blank"
    );
  };

  // OpenStreetMap embed URL (no API key needed, never blocked)
  const embedMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${hotelLocation.lng - 0.05},${hotelLocation.lat - 0.05},${hotelLocation.lng + 0.05},${hotelLocation.lat + 0.05}&layer=mapnik&marker=${hotelLocation.lat},${hotelLocation.lng}`;

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FiMapPin className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            {description}
          </p>
        </div>

        {/* Section Content */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Info */}
            <div className="space-y-5">
              {/* Address Card */}
              <div className="rounded-2xl bg-[#2C4549] p-5 text-white">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD700]/20">
                      <FiMapPin className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3 className="font-bold">DA Hotel</h3>
                      <p className="text-xs text-gray-300">Luxury Hotel</p>
                    </div>
                  </div>
                  <button
                    onClick={copyAddress}
                    className="rounded p-1 text-gray-300 transition hover:text-[#FFD700]"
                  >
                    {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                  </button>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-gray-200">
                  {hotelLocation.address}
                </p>
                <div className="space-y-1.5 border-t border-white/20 pt-3">
                  <div className="flex items-center gap-2 text-xs">
                    <FiPhone className="text-[#FFD700]" size={14} />
                    <a href={`tel:${hotelLocation.phone}`} className="hover:text-[#FFD700]">
                      {hotelLocation.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <FiMail className="text-[#FFD700]" size={14} />
                    <a href={`mailto:${hotelLocation.email}`} className="hover:text-[#FFD700]">
                      {hotelLocation.email}
                    </a>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <button
                    onClick={() => openMaps("google")}
                    className="rounded-lg bg-white/10 py-1.5 text-xs font-semibold transition hover:bg-white/20"
                  >
                    Google
                  </button>
                  <button
                    onClick={() => openMaps("apple")}
                    className="rounded-lg bg-white/10 py-1.5 text-xs font-semibold transition hover:bg-white/20"
                  >
                    Apple
                  </button>
                  <button
                    onClick={() => openMaps("waze")}
                    className="rounded-lg bg-white/10 py-1.5 text-xs font-semibold transition hover:bg-white/20"
                  >
                    Waze
                  </button>
                </div>
              </div>

              {/* Directions Card */}
              <div className="rounded-2xl bg-gray-50 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-[#2C4549]">
                  <FiNavigation size={18} />
                  Get Directions
                </h3>
                <div className="mb-3 flex gap-1.5">
                  {[
                    { id: "driving", label: "Drive", icon: MdDirectionsCar },
                    { id: "transit", label: "Transit", icon: MdDirectionsTransit },
                    { id: "walking", label: "Walk", icon: MdDirectionsWalk },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setSelectedTransport(mode.id)}
                      className={`flex flex-1 items-center justify-center gap-1 rounded-lg py-1.5 text-xs transition ${selectedTransport === mode.id
                        ? "bg-[#FFD700] text-[#2C4549]"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                      <mode.icon size={14} />
                      <span>{mode.label}</span>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => getDirections(selectedTransport)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFD700] py-2 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                >
                  <FiExternalLink size={14} />
                  Open Directions
                </button>
              </div>

              {/* Transport Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-[#2C4549]">
                  <FiClock size={18} />
                  Transportation
                </h3>
                <div className="space-y-2 text-black">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 text-sm">
                    <span>✈️ {directions.airport.name}</span>
                    <span className="font-semibold text-[#FFD700]">{directions.airport.driving}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 text-sm">
                    <span>🚂 {directions.train.name}</span>
                    <span className="font-semibold text-[#FFD700]">{directions.train.driving}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>🚕 Taxi from Airport</span>
                    <span className="font-semibold text-[#FFD700]">{directions.airport.taxi}</span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-400">*Shuttle service available on request</p>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="lg:col-span-2">
              {/* Map Container */}
              <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <div className="relative">
                  <div className="h-80 w-full sm:h-96 md:h-112.5">
                    <iframe
                      src={embedMapUrl}
                      className="h-full w-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      title="DA Hotel Location Map"
                    />

                    {/* Custom Marker Overlay */}
                    <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="animate-bounce">
                          <FiMapPin size={32} className="text-[#FFD700] drop-shadow-lg" />
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#2C4549] px-2 py-1 text-xs font-semibold text-white shadow-lg">
                          📍 DA Hotel
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 p-1.5 text-xs shadow-md backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                      <FiMapPin size={12} className="text-[#FFD700]" />
                      <span className="font-medium text-[#2C4549]">Hotel Location</span>
                    </div>
                  </div>

                  {/* Attribution */}
                  <div className="absolute left-3 bottom-3 rounded bg-black/50 px-1.5 py-0.5 text-[8px] text-white/70">
                    © OpenStreetMap contributors
                  </div>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="mt-4">
                <h3 className="mb-3 text-base font-bold text-[#2C4549]">
                  Nearby Attractions
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {hotelLocation.nearby.slice(0, 6).map((place, index) => (
                    <div
                      key={index}
                      className="group flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-2 transition hover:bg-gray-100"
                      onClick={() => {
                        const encodedPlace = encodeURIComponent(place.name);
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${encodedPlace}`,
                          "_blank"
                        );
                      }}
                    >
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-xs font-semibold text-[#2C4549] transition group-hover:text-[#FFD700]">
                          {place.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <FiMapPin size={8} /> {place.distance}
                        </div>
                      </div>
                      <FiExternalLink size={10} className="ml-1 shrink-0 text-gray-400 opacity-0 transition group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Area Info */}
              <div className="mt-4 rounded-lg bg-[#2C4549]/5 p-3">
                <div className="flex items-start gap-2">
                  <FiInfo className="mt-0.5 shrink-0 text-[#FFD700]" size={14} />
                  <div>
                    <p className="text-xs font-semibold text-[#2C4549]">Prime Location Benefits</p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      Located in the vibrant downtown area, our hotel puts you steps away from
                      world-class shopping, dining, and entertainment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 text-center">
            <button
              onClick={() => getDirections("driving")}
              className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg"
            >
              <MdDirectionsCar size={16} />
              {cta.text}
              <FiNavigation size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bounce Animation */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactMap;