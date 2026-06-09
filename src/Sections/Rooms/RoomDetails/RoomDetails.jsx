// src/Sections/Rooms/RoomDetails/RoomDetails.jsx
"use client";

// React
import React, { useState, useCallback } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiWifi,
  FiTv,
  FiWind,
  FiCoffee,
  FiMaximize,
  FiUsers,
  FiCheck,
  FiCalendar,
  FiHeart,
  FiShare2,
  FiArrowRight,
  FiMapPin,
  FiStar,
} from "react-icons/fi";
import {
  MdOutlineKingBed,
  MdOutlineBathtub,
  MdOutlineBalcony,
  MdOutlineRoomService,
  MdOutlineLocalParking,
  MdOutlineBreakfastDining,
  MdOutlineSecurity,
} from "react-icons/md";

const RoomDetails = ({ content = {} }) => {
  
  // State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  // Lazy initialization for localStorage - No Effect needed!
  const [likedRooms, setLikedRooms] = useState(() => {
    try {
      const savedLikes = localStorage.getItem("likedRooms");
      return savedLikes ? JSON.parse(savedLikes) : [];
    } catch (error) {
      console.error("Failed to load liked rooms:", error);
      return [];
    }
  });

  // Destructure content with fallbacks
  const {
    title = "Our Premium Rooms",
    subtitle = "Luxury Accommodations",
    description = "Discover our collection of thoughtfully designed rooms and suites, each offering unique amenities and unparalleled comfort.",
    rooms = [
      {
        id: 1,
        name: "Deluxe King Room",
        slug: "deluxe-king",
        price: 129,
        priceNote: "per night",
        size: "350 sq ft",
        capacity: 2,
        bedType: "King Size Bed",
        view: "City View",
        rating: 4.9,
        reviews: 128,
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        ],
        description: "Experience modern comfort in our Deluxe King Room, featuring contemporary design, plush bedding, and premium amenities for a relaxing stay.",
        longDescription: "The Deluxe King Room offers the perfect blend of style and comfort. With modern furnishings, plush bedding, and thoughtful amenities, these rooms provide an ideal retreat for both business and leisure travelers. Large windows flood the room with natural light, creating a warm and inviting atmosphere. The room includes a spacious work desk, ergonomic chair, and high-speed WiFi, making it perfect for business travelers. After a long day, unwind in the luxurious bathroom with premium toiletries and a rain shower.",
        amenities: [
          { name: "Free High-Speed WiFi", icon: "wifi", included: true },
          { name: "55-inch Smart TV", icon: "tv", included: true },
          { name: "Premium Air Conditioning", icon: "wind", included: true },
          { name: "Coffee Maker", icon: "coffee", included: true },
          { name: "Luxury Bathroom", icon: "bathtub", included: true },
          { name: "Work Desk", icon: "maximize", included: true },
          { name: "Mini Bar", icon: "coffee", included: false },
          { name: "Room Service", icon: "service", included: true },
        ],
        features: [
          "Complimentary Bottled Water",
          "In-room Safe",
          "Ironing Board",
          "Premium Bedding",
        ],
        policies: {
          checkIn: "2:00 PM",
          checkOut: "12:00 PM",
          cancellation: "Free cancellation up to 48 hours before check-in",
          deposit: "No deposit required",
        },
        popular: true,
      },
      {
        id: 2,
        name: "Executive Suite",
        slug: "executive-suite",
        price: 199,
        priceNote: "per night",
        size: "550 sq ft",
        capacity: 2,
        bedType: "King Size Bed + Sofa",
        view: "Panoramic City View",
        rating: 4.8,
        reviews: 95,
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1949&q=80",
        ],
        description: "Designed for business travelers, our Executive Suite offers a separate living area and premium workspace for maximum productivity.",
        longDescription: "The Executive Suite is thoughtfully designed for the discerning business traveler. Featuring a separate living area with comfortable seating, a dedicated workspace with ergonomic chair, and premium amenities to ensure productivity and relaxation during your stay. Enjoy complimentary breakfast and express check-in/out services. The suite includes a luxurious bathroom with a soaking tub and separate rain shower, plus a private balcony with stunning city views.",
        amenities: [
          { name: "Ultra High-Speed WiFi", icon: "wifi", included: true },
          { name: "65-inch 4K Smart TV", icon: "tv", included: true },
          { name: "Premium Climate Control", icon: "wind", included: true },
          { name: "Espresso Machine", icon: "coffee", included: true },
          { name: "Spa-inspired Bathroom", icon: "bathtub", included: true },
          { name: "Executive Work Station", icon: "maximize", included: true },
          { name: "24/7 Room Service", icon: "service", included: true },
          { name: "Private Balcony", icon: "balcony", included: true },
        ],
        features: [
          "Complimentary Breakfast",
          "Express Check-in/out",
          "Late Check-out",
          "Airport Transfer Available",
        ],
        policies: {
          checkIn: "2:00 PM",
          checkOut: "12:00 PM",
          cancellation: "Free cancellation up to 48 hours before check-in",
          deposit: "20% deposit required",
        },
        popular: false,
      },
      {
        id: 3,
        name: "Family Suite",
        slug: "family-suite",
        price: 249,
        priceNote: "per night",
        size: "750 sq ft",
        capacity: 4,
        bedType: "2 Queen Beds + Sofa",
        view: "Pool or City View",
        rating: 4.9,
        reviews: 156,
        images: [
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
          "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        ],
        description: "Spacious suite perfect for families, featuring separate living area and kitchenette for home-like comfort.",
        longDescription: "Our Family Suite provides ample space for the whole family. With two separate bedrooms, a comfortable living area, and a kitchenette, it's designed to make family vacations memorable. Kids will love the extra space, and parents will appreciate the thoughtful amenities. The suite includes a dining area, perfect for family meals, and access to our kids' club and pool area.",
        amenities: [
          { name: "High-Speed WiFi", icon: "wifi", included: true },
          { name: "65-inch Smart TV", icon: "tv", included: true },
          { name: "Multi-zone AC", icon: "wind", included: true },
          { name: "Full Kitchenette", icon: "coffee", included: true },
          { name: "Family Bathroom", icon: "bathtub", included: true },
          { name: "Living Area", icon: "maximize", included: true },
          { name: "Kids Amenities", icon: "users", included: true },
          { name: "Private Balcony", icon: "balcony", included: true },
        ],
        features: [
          "Complimentary Breakfast (4)",
          "Kids Stay Free (under 12)",
          "Rollaway Bed Available",
          "Pool Access",
        ],
        policies: {
          checkIn: "2:00 PM",
          checkOut: "12:00 PM",
          cancellation: "Free cancellation up to 48 hours before check-in",
          deposit: "20% deposit required",
        },
        popular: true,
      },
    ],
    cta = {
      text: "Book This Room",
      link: "/booking",
    },
  } = content;

  // Helper to render icons
  const renderIcon = useCallback((iconName, className = "h-5 w-5") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "wifi":
        return <FiWifi className={iconClass} />;
      case "tv":
        return <FiTv className={iconClass} />;
      case "wind":
        return <FiWind className={iconClass} />;
      case "coffee":
        return <FiCoffee className={iconClass} />;
      case "bathtub":
        return <MdOutlineBathtub className={iconClass} />;
      case "maximize":
        return <FiMaximize className={iconClass} />;
      case "service":
        return <MdOutlineRoomService className={iconClass} />;
      case "balcony":
        return <MdOutlineBalcony className={iconClass} />;
      case "parking":
        return <MdOutlineLocalParking className={iconClass} />;
      case "breakfast":
        return <MdOutlineBreakfastDining className={iconClass} />;
      case "security":
        return <MdOutlineSecurity className={iconClass} />;
      case "users":
        return <FiUsers className={iconClass} />;
      default:
        return <FiCheck className={iconClass} />;
    }
  }, []);

  // Show toast message
  const showToastMessage = useCallback((message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, []);

  // Toggle like - saves to localStorage directly in event handler
  const toggleLike = useCallback((roomId, roomName) => {
    setLikedRooms((prev) => {
      let newLikedRooms;
      if (prev.includes(roomId)) {
        showToastMessage(`Removed ${roomName} from favorites`);
        newLikedRooms = prev.filter((id) => id !== roomId);
      } else {
        showToastMessage(`Added ${roomName} to favorites`);
        newLikedRooms = [...prev, roomId];
      }

      // Save to localStorage immediately (synchronous, during the event)
      try {
        localStorage.setItem("likedRooms", JSON.stringify(newLikedRooms));
      } catch (error) {
        console.error("Failed to save liked rooms:", error);
      }

      return newLikedRooms;
    });
  }, [showToastMessage]);

  // Share room
  const shareRoom = useCallback(async (room) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: room.name,
          text: room.description,
          url: `${window.location.origin}/rooms/${room.slug}`,
        });
      } else {
        await navigator.clipboard.writeText(`${room.name}: ${room.description}`);
        showToastMessage("Room details copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  }, [showToastMessage]);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">

      {/* Container */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <MdOutlineKingBed className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              {subtitle}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Rooms List */}
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10 md:space-y-12">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } lg:flex`}
            >
              {/* Image Section */}
              <div className="relative lg:w-2/5">
                <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-full lg:min-h-100">
                  <Image
                    src={room.images[selectedImage]}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                {/* Thumbnail Navigation */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                  {room.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`h-1.5 flex-1 rounded-full transition-all ${selectedImage === idx ? "bg-[#FFD700]" : "bg-white/50 hover:bg-white/80"
                        }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Popular Badge */}
                {room.popular && (
                  <div className="absolute left-3 top-3 rounded-full bg-[#FFD700] px-3 py-1 text-xs font-bold text-[#2C4549] shadow-md">
                    🌟 Most Popular
                  </div>
                )}

                {/* Rating */}
                <div className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
                  <FiStar className="inline text-[#FFD700]" size={12} />
                  <span className="ml-1 font-semibold">{room.rating}</span>
                  <span className="ml-0.5 text-gray-300">({room.reviews})</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-6 md:p-8 lg:w-3/5">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#2C4549] sm:text-2xl md:text-3xl">
                      {room.name}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 sm:gap-4 sm:text-sm">
                      <span className="flex items-center gap-1">
                        <FiMaximize size={14} /> {room.size}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiUsers size={14} /> Max {room.capacity} guests
                      </span>
                      <span className="flex items-center gap-1">
                        <MdOutlineKingBed size={14} /> {room.bedType}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin size={14} /> {room.view}
                      </span>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-[#FFD700] sm:text-3xl">
                      ${room.price}
                    </div>
                    <div className="text-xs text-gray-400">{room.priceNote}</div>
                  </div>
                </div>

                <p className="mb-4 text-sm text-gray-600 sm:text-base">
                  {room.description}
                </p>

                {/* Tabs */}
                <div className="mb-4 border-b border-gray-200">
                  <div className="flex gap-4 overflow-x-auto">
                    {["overview", "amenities", "policies"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 text-sm font-semibold capitalize transition-colors whitespace-nowrap ${activeTab === tab
                          ? "border-b-2 border-[#FFD700] text-[#FFD700]"
                          : "text-gray-500 hover:text-[#2C4549]"
                          }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="mb-5 min-h-45">
                  {activeTab === "overview" && (
                    <div>
                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {room.longDescription}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {room.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-600"
                          >
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "amenities" && (
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {renderIcon(amenity.icon, "h-4 w-4")}
                          <span className={`text-sm ${amenity.included ? "text-gray-700" : "text-gray-400 line-through"}`}>
                            {amenity.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "policies" && (
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">Check-in:</span> {room.policies.checkIn}
                      </p>
                      <p>
                        <span className="font-semibold">Check-out:</span> {room.policies.checkOut}
                      </p>
                      <p>
                        <span className="font-semibold">Cancellation:</span> {room.policies.cancellation}
                      </p>
                      <p>
                        <span className="font-semibold">Deposit:</span> {room.policies.deposit}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`${cta.link}?room=${room.slug}`}
                    className="flex flex-1 transform items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-4 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-6 sm:py-3 sm:text-base"
                  >
                    <FiCalendar size={16} />
                    {cta.text}
                    <FiArrowRight size={14} />
                  </Link>
                  <button
                    onClick={() => toggleLike(room.id, room.name)}
                    className="rounded-lg border border-gray-300 px-4 py-2.5 transition hover:border-[#FFD700] sm:px-5"
                    aria-label="Toggle favorite"
                  >
                    <FiHeart
                      className={`h-5 w-5 ${likedRooms.includes(room.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400 hover:text-red-500"
                        }`}
                    />
                  </button>
                  <button
                    onClick={() => shareRoom(room)}
                    className="rounded-lg border border-gray-300 px-4 py-2.5 transition hover:border-[#FFD700] sm:px-5"
                    aria-label="Share room"
                  >
                    <FiShare2 className="h-5 w-5 text-gray-400 hover:text-[#FFD700]" />
                  </button>
                </div>

                {/* Availability Note */}
                <p className="mt-3 text-center text-xs text-gray-400">
                  * Prices vary by season. Contact us for group rates.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform animate-slide-up">
          <div className="flex items-center gap-2 rounded-lg bg-[#2C4549] px-4 py-2 text-white shadow-lg">
            <FiCheck size={14} className="text-[#FFD700]" />
            <span className="text-sm">{toastMessage}</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100px) translateX(-50%);
            opacity: 0;
          }
          to {
            transform: translateY(0) translateX(-50%);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default RoomDetails;