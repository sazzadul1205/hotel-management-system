// Component/Home/LocationMap/LocationMap.jsx
"use client";
import React, { useState } from "react";
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
  FiCheck
} from "react-icons/fi";
import { MdDirectionsCar, MdDirectionsTransit, MdDirectionsWalk } from "react-icons/md";

const LocationMap = () => {
  const [selectedTransport, setSelectedTransport] = useState("driving");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("map");

  // Hotel coordinates - Update these with your actual hotel location
  const hotelLocation = {
    name: "DA Hotel",
    address: "123 Luxury Avenue, Downtown District, New York, NY 10001",
    lat: 40.7128,
    lng: -74.0060,
    phone: "+1 (555) 123-4567",
    email: "reservations@dahotel.com",
    website: "www.dahotel.com",
    nearby: [
      { name: "Central Park", distance: "0.8 miles", time: "5 min drive" },
      { name: "Times Square", distance: "1.2 miles", time: "8 min drive" },
      { name: "Empire State Building", distance: "0.5 miles", time: "3 min drive" },
      { name: "Broadway Theater", distance: "1.0 miles", time: "6 min drive" },
      { name: "Rockefeller Center", distance: "0.9 miles", time: "5 min drive" },
      { name: "Museum of Modern Art", distance: "0.7 miles", time: "4 min drive" }
    ]
  };

  // Directions from popular landmarks
  const directions = {
    airport: {
      name: "JFK International Airport",
      driving: "25 min",
      transit: "45 min",
      taxi: "$45-60"
    },
    train: {
      name: "Grand Central Station",
      driving: "10 min",
      transit: "15 min",
      taxi: "$15-20"
    }
  };

  const copyAddress = async () => {
    await navigator.clipboard.writeText(hotelLocation.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openMaps = (service) => {
    const encodedAddress = encodeURIComponent(hotelLocation.address);
    const urls = {
      google: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      waze: `https://www.waze.com/ul?q=${encodedAddress}`,
      apple: `https://maps.apple.com/?q=${encodedAddress}`
    };
    window.open(urls[service], "_blank");
  };

  const getDirections = (mode) => {
    const encodedAddress = encodeURIComponent(hotelLocation.address);
    const modeParam = {
      driving: "d",
      transit: "r",
      walking: "w"
    };
    window.open(`https://www.google.com/maps/dir//${encodedAddress}/data=!4m2!4m1!3e${modeParam[mode]}`, "_blank");
  };

  // Google Maps Embed URL (No API key required for basic embed)
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(hotelLocation.address)}&zoom=15`;

  // Alternative: Using iframe src without API key (more reliable)
  const simpleMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(hotelLocation.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-4">
            <FiMapPin className="text-[#FFD700]" size={18} />
            <span className="text-[#2C4549] font-semibold text-sm uppercase tracking-wide">
              Find Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549] mb-4">
            Location & Directions
          </h2>

          <p className="text-gray-600 text-lg">
            Conveniently located in the heart of the city, close to major attractions and transport hubs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <div className="bg-[#2C4549] rounded-2xl p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-xl flex items-center justify-center">
                    <FiMapPin size={24} className="text-[#FFD700]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">DA Hotel</h3>
                    <p className="text-gray-300 text-sm">Luxury Hotel</p>
                  </div>
                </div>
                <button
                  onClick={copyAddress}
                  className="text-gray-300 hover:text-[#FFD700] transition-colors"
                >
                  {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
                </button>
              </div>

              <p className="text-gray-200 mb-4 leading-relaxed">
                {hotelLocation.address}
              </p>

              <div className="space-y-2 border-t border-white/20 pt-4">
                <div className="flex items-center gap-3 text-sm">
                  <FiPhone className="text-[#FFD700]" />
                  <a href={`tel:${hotelLocation.phone}`} className="hover:text-[#FFD700] transition">
                    {hotelLocation.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FiMail className="text-[#FFD700]" />
                  <a href={`mailto:${hotelLocation.email}`} className="hover:text-[#FFD700] transition">
                    {hotelLocation.email}
                  </a>
                </div>
              </div>

              {/* Map Apps Buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => openMaps("google")}
                  className="flex-1 bg-white/10 hover:bg-white/20 rounded-lg py-2 text-sm font-semibold transition"
                >
                  Google Maps
                </button>
                <button
                  onClick={() => openMaps("waze")}
                  className="flex-1 bg-white/10 hover:bg-white/20 rounded-lg py-2 text-sm font-semibold transition"
                >
                  Waze
                </button>
              </div>
            </div>

            {/* Directions Card */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-[#2C4549] mb-4 flex items-center gap-2">
                <FiNavigation />
                Get Directions
              </h3>

              <div className="flex gap-2 mb-4">
                {[
                  { id: "driving", label: "Drive", icon: MdDirectionsCar },
                  { id: "transit", label: "Transit", icon: MdDirectionsTransit },
                  { id: "walking", label: "Walk", icon: MdDirectionsWalk }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setSelectedTransport(mode.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all ${selectedTransport === mode.id
                        ? "bg-[#FFD700] text-[#2C4549]"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    <mode.icon size={16} />
                    <span className="text-sm">{mode.label}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => getDirections(selectedTransport)}
                className="w-full bg-[#FFD700] text-[#2C4549] py-2 rounded-lg font-semibold hover:bg-[#FFE44D] transition flex items-center justify-center gap-2"
              >
                <FiExternalLink size={16} />
                Open {selectedTransport === "driving" ? "Driving" : selectedTransport === "transit" ? "Transit" : "Walking"} Directions
              </button>
            </div>

            {/* Transport Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-[#2C4549] mb-3 flex items-center gap-2">
                <FiClock />
                Transportation
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">✈️ {directions.airport.name}</span>
                  <span className="text-[#2C4549] font-semibold">{directions.airport.driving}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-600">🚂 {directions.train.name}</span>
                  <span className="text-[#2C4549] font-semibold">{directions.train.driving}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">🚕 Taxi from Airport</span>
                  <span className="text-[#2C4549] font-semibold">{directions.airport.taxi}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                *Shuttle service available on request. Additional charges may apply.
              </p>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:col-span-2">
            {/* Tab Buttons */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setActiveTab("map")}
                className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === "map"
                    ? "bg-[#FFD700] text-[#2C4549]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <FiMap className="inline mr-2" />
                Map View
              </button>
              <button
                onClick={() => setActiveTab("nearby")}
                className={`px-6 py-2 rounded-lg font-semibold transition ${activeTab === "nearby"
                    ? "bg-[#FFD700] text-[#2C4549]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                <FiStar className="inline mr-2" />
                Nearby Attractions
              </button>
            </div>

            {/* Map Container */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              {activeTab === "map" ? (
                <div className="relative">
                  {/* Live Google Maps Embed - Free and no API key issues */}
                  <div className="relative h-96 md:h-125 w-full">
                    <iframe
                      src={simpleMapUrl}
                      className="w-full h-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="DA Hotel Location Map"
                    />

                    {/* Optional: Custom Marker Overlay */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="relative">
                        <div className="animate-bounce">
                          <FiMapPin size={36} className="text-[#FFD700] drop-shadow-lg" />
                        </div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#2C4549] text-white px-2 py-1 rounded text-xs font-semibold shadow-lg">
                          📍 DA Hotel
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map Legend */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs shadow-md">
                    <div className="flex items-center gap-2">
                      <FiMapPin size={14} className="text-[#FFD700]" />
                      <span className="text-[#2C4549] font-medium">Hotel Location</span>
                    </div>
                  </div>
                </div>
              ) : (
                // Nearby Attractions Tab
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#2C4549] mb-4">Nearby Attractions</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {hotelLocation.nearby.map((place, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition group cursor-pointer"
                      >
                        <div>
                          <h4 className="font-semibold text-[#2C4549] group-hover:text-[#FFD700] transition">
                            {place.name}
                          </h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <FiMapPin size={10} /> {place.distance}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <FiClock size={10} /> {place.time}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            const encodedPlace = encodeURIComponent(place.name);
                            window.open(`https://www.google.com/maps/search/?api=1&query=${encodedPlace}`, "_blank");
                          }}
                          className="text-[#2C4549] opacity-0 group-hover:opacity-100 transition"
                        >
                          <FiExternalLink size={16} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Area Info */}
                  <div className="mt-6 p-4 bg-[#2C4549]/5 rounded-xl">
                    <div className="flex items-start gap-3">
                      <FiInfo className="text-[#FFD700] mt-0.5" size={18} />
                      <div>
                        <p className="text-sm text-[#2C4549] font-semibold">Prime Location Benefits</p>
                        <p className="text-xs text-gray-500 mt-1">
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
            <div className="mt-4 flex flex-wrap gap-4 justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FiMapPin size={14} /> Central Location
                </span>
                <span className="flex items-center gap-1">
                  <FiClock size={14} /> 24/7 Reception
                </span>
              </div>
              <button
                onClick={() => window.open(`https://www.google.com/maps/place/${encodeURIComponent(hotelLocation.address)}`, "_blank")}
                className="text-[#FFD700] hover:text-[#FFE44D] text-sm font-semibold flex items-center gap-1"
              >
                View Full Screen Map
                <FiExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => getDirections("driving")}
              className="btn bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D] border-none gap-2 px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <MdDirectionsCar size={18} />
              Get Driving Directions
            </button>
            <button
              onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotelLocation.address)}`, "_blank")}
              className="btn btn-outline border-[#2C4549] text-[#2C4549] hover:bg-[#2C4549] hover:text-white gap-2 px-8 py-3 text-base font-semibold transition-all duration-300"
            >
              <FiMap size={18} />
              Explore Area
            </button>
          </div>
        </div>
      </div>

      {/* Add bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
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