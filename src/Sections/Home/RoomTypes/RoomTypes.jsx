// src/Sections/Home/RoomTypes/RoomTypes.jsx
"use client";

// React
import React, { useState, useEffect, useCallback } from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// SweetAlert2
import Swal from "sweetalert2";

// Icons
import {
  FiUsers,
  FiWifi,
  FiTv,
  FiWind,
  FiCoffee,
  FiMaximize,
  FiEye,
  FiArrowRight,
  FiHeart,
  FiShare2,
  FiCheck,
  FiStar,
  FiX,
  FiCheckCircle,
  FiLoader,
} from "react-icons/fi";
import {
  MdOutlineKingBed,
  MdOutlineBathtub,
  MdOutlineBalcony,
  MdOutlineRoomService,
} from "react-icons/md";

// Amenity icon mapping
const amenityIcons = {
  wifi: FiWifi,
  tv: FiTv,
  wind: FiWind,
  coffee: FiCoffee,
  bathtub: MdOutlineBathtub,
  maximize: FiMaximize,
  roomService: MdOutlineRoomService,
  balcony: MdOutlineBalcony,
  users: FiUsers,
};

// Amenity labels
const amenityLabels = {
  wifi: "High-Speed WiFi",
  tv: "Smart TV",
  wind: "Air Conditioning",
  coffee: "Coffee Maker",
  bathtub: "Luxury Bathroom",
  maximize: "Work Desk",
  roomService: "24/7 Room Service",
  balcony: "Private Balcony",
  users: "Kids Amenities",
};

const RoomTypes = ({ data }) => {
  const { sectionHeader = {}, rooms = [] } = data || {};

  // Modal state
  const [selectedRoom, setSelectedRoom] = useState(null);

  // State
  const [shareMessage, setShareMessage] = useState("");
  const [showShareToast, setShowShareToast] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Image loading states per image
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedRoom]);

  // Handle image load
  const handleImageLoad = useCallback((src) => {
    setImagesLoaded((prev) => ({ ...prev, [src]: true }));
  }, []);

  // Map amenity strings to objects with icons and labels
  const enrichAmenities = useCallback((room) => {
    return room.amenities.map((amenityKey) => ({
      key: amenityKey,
      name: amenityLabels[amenityKey] || amenityKey,
      icon: amenityIcons[amenityKey] || FiCheck,
    }));
  }, []);

  // Toggle like - requires login
  const toggleLike = useCallback(
    (roomId) => {
      const room = rooms.find((r) => r.id === roomId);
      const roomName = room?.name || "this room";

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        title: "Please Login First",
        text: `You need to login to add ${roomName} to your favorites!`,
        showConfirmButton: true,
        confirmButtonText: "Login Now",
        confirmButtonColor: "#FFD700",
        denyButtonText: "Maybe Later",
        showDenyButton: true,
        denyButtonColor: "#2C4549",
        customClass: {
          popup: "rounded-xl",
          title: "text-[#2C4549] font-bold",
          confirmButton: "px-4 py-2 rounded-lg font-semibold",
          denyButton: "px-4 py-2 rounded-lg font-semibold",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    },
    [rooms],
  );

  // Copy text to clipboard with fallback
  const copyToClipboard = async (text) => {
    try {
      // Modern approach - Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
      // Fallback for older browsers or non-HTTPS
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (error) {
      console.error("Failed to copy:", error);
      return false;
    }
  };

  // Handle share - works without login
  const handleShare = async (room) => {
    const shareData = {
      title: `${room.name} at DA Hotel`,
      text: `Check out the ${room.name} at DA Hotel! ${room.description}`,
      url: `${window.location.origin}/rooms/${room.slug}`,
    };

    try {
      // Try native share first (mobile devices)
      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage(`Shared ${room.name} successfully!`);
      } else {
        // Fallback to clipboard copy
        const copySuccess = await copyToClipboard(
          `${shareData.text}\n\n${shareData.url}`
        );
        if (copySuccess) {
          setShareMessage(`Link copied to clipboard! Share ${room.name} with friends.`);
        } else {
          setShareMessage("Could not copy to clipboard. Please try again.");
        }
      }
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 3000);
    } catch (error) {
      console.error("Error sharing:", error);
      // Only show error if it's not a user cancellation
      if (error.name !== "AbortError") {
        setShareMessage("Failed to share. Please try again.");
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);
      }
    }
  };

  // Handle book now
  const handleBookNow = (room) => {
    window.location.href = "/booking";
  };

  // Handle image navigation - next
  const nextImage = useCallback((roomId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] ?? 0) + 1) % totalImages,
    }));
  }, []);

  // Handle image navigation - previous
  const prevImage = useCallback((roomId, totalImages) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] ?? 0) - 1 + totalImages) % totalImages,
    }));
  }, []);

  // Check if there's data to render
  if (!rooms.length) {
    return null;
  }

  // Check if a specific image is loaded
  const isImageLoaded = (src) => {
    return imagesLoaded[src] === true;
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <MdOutlineKingBed className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              {sectionHeader.badge || "Accommodations"}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {sectionHeader.title || "Luxurious Room Types"}
          </h2>

          <p className="text-sm text-gray-600 sm:text-base md:text-lg">
            {sectionHeader.description || ""}
          </p>
        </div>

        {/* Room Cards */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {rooms.map((room, index) => {
            const enrichedAmenities = enrichAmenities(room);
            const currentImageSrc = room.images[currentImageIndex[room.id] ?? 0];
            return (
              <div
                key={room.id}
                className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl sm:rounded-2xl ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  } lg:flex`}
              >
                {/* Image Section */}
                <div className="group relative overflow-hidden lg:w-1/2">
                  <div className="xs:h-64 relative h-56 min-h-62.5 sm:h-72 sm:min-h-75 md:h-80 lg:h-full">
                    {/* Loading skeleton */}
                    {!isImageLoaded(currentImageSrc) && (
                      <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200">
                        <div className="flex flex-col items-center gap-2">
                          <FiLoader className="h-8 w-8 animate-spin text-[#FFD700] sm:h-10 sm:w-10" />
                          <span className="text-xs text-gray-500">Loading image...</span>
                        </div>
                      </div>
                    )}
                    <Image
                      src={currentImageSrc}
                      alt={room.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      className={`object-cover transition-all duration-500 group-hover:scale-110 ${isImageLoaded(currentImageSrc) ? "opacity-100" : "opacity-0"
                        }`}
                      priority={index === 0}
                      onLoad={() => handleImageLoad(currentImageSrc)}
                    />

                    {/* Mobile Image Navigation Arrows */}
                    <div className="absolute inset-0 flex items-center justify-between p-2 lg:hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(room.id, room.images.length);
                        }}
                        className="rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                        aria-label="Previous image"
                      >
                        <FiArrowRight className="h-4 w-4 rotate-180" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(room.id, room.images.length);
                        }}
                        className="rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
                        aria-label="Next image"
                      >
                        <FiArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Image Gallery Indicator */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white sm:bottom-4 sm:left-4 sm:px-3">
                    <FiEye size={10} className="sm:h-3 sm:w-3" />
                    <span>
                      {(currentImageIndex[room.id] ?? 0) + 1}/{room.images.length} photos
                    </span>
                  </div>

                  {/* Image Dots Indicator */}
                  <div className="absolute right-2 bottom-2 flex gap-1.5 sm:right-4 sm:bottom-4">
                    {room.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => ({
                            ...prev,
                            [room.id]: idx,
                          }));
                        }}
                        className={`h-1.5 w-1.5 rounded-full transition-all sm:h-2 sm:w-2 ${(currentImageIndex[room.id] ?? 0) === idx
                          ? "w-3 bg-[#FFD700] sm:w-4"
                          : "bg-white/70 hover:bg-white"
                          }`}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Popular Badge */}
                  {room.popular && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-[#FFD700] px-2 py-1 text-xs font-semibold text-[#2C4549] sm:top-4 sm:left-4 sm:px-3">
                      <FiStar size={10} className="sm:h-3 sm:w-3" />
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 md:p-8 lg:w-1/2">
                  <div className="mb-3 flex flex-col items-start justify-between gap-3 sm:mb-4 sm:flex-row sm:gap-4">
                    <div className="flex-1">
                      <h3 className="mb-1.5 text-xl font-bold text-[#2C4549] sm:mb-2 sm:text-2xl md:text-3xl">
                        {room.name}
                      </h3>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 sm:gap-4 sm:text-sm">
                        <span className="flex items-center gap-1">
                          <FiMaximize size={12} className="sm:h-3.5 sm:w-3.5" />
                          {room.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiUsers size={12} className="sm:h-3.5 sm:w-3.5" />
                          Max {room.capacity} guests
                        </span>
                        <span className="flex items-center gap-1">
                          <MdOutlineKingBed size={12} className="sm:h-3.5 sm:w-3.5" />
                          {room.bedType}
                        </span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xl font-bold text-[#FFD700] sm:text-2xl md:text-3xl">
                        {room.price}
                      </div>
                      <div className="text-xs text-gray-400">{room.priceNote}</div>
                    </div>
                  </div>

                  <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base">
                    {room.description}
                  </p>

                  {/* Amenities Grid */}
                  <div className="mb-3 grid grid-cols-2 gap-2 sm:mb-4 sm:gap-3">
                    {enrichedAmenities.slice(0, 4).map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs text-gray-600 sm:gap-2 sm:text-sm"
                      >
                        <amenity.icon
                          size={12}
                          className="shrink-0 text-[#FFD700] sm:h-3.5 sm:w-3.5"
                        />
                        <span className="truncate">{amenity.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features Tags */}
                  <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs whitespace-nowrap text-gray-600"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="group flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#2C4549] py-2 text-sm font-semibold text-white transition hover:bg-[#1a2f33] sm:gap-2 sm:py-2.5 sm:text-base"
                    >
                      View Details
                      <FiArrowRight
                        size={14}
                        className="transition group-hover:translate-x-1 sm:h-4 sm:w-4"
                      />
                    </button>
                    <button
                      onClick={() => toggleLike(room.id)}
                      className="group rounded-lg border border-gray-300 px-3 py-2 transition hover:border-[#FFD700] sm:px-4 sm:py-2.5"
                      aria-label="Add to favorites"
                    >
                      <FiHeart
                        className="text-gray-400 transition group-hover:text-red-500"
                        size={18}
                      />
                    </button>
                    <button
                      onClick={() => handleShare(room)}
                      className="group rounded-lg border border-gray-300 px-3 py-2 transition hover:border-[#FFD700] sm:px-4 sm:py-2.5"
                      aria-label="Share room"
                    >
                      <FiShare2 size={18} className="text-gray-400 transition group-hover:text-[#FFD700]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Rooms Button */}
        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <Link
            href={sectionHeader.ctaButton?.link || "/our-rooms"}
            className="btn inline-flex transform items-center gap-2 border-none bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            {sectionHeader.ctaButton?.text || "View All Accommodations"}
            <FiArrowRight size={16} className="sm:h-4.5 sm:w-4.5" />
          </Link>
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/95 p-2 sm:p-4"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="relative my-4 max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white sm:max-h-[90vh] sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-3 sm:p-4">
              <h3 className="text-lg font-bold text-[#2C4549] sm:text-xl md:text-2xl">
                {selectedRoom.name}
              </h3>
              <button
                onClick={() => setSelectedRoom(null)}
                className="rounded-full p-1.5 transition hover:bg-gray-100 sm:p-2"
                aria-label="Close modal"
              >
                <FiX size={20} className="text-gray-600 sm:h-6 sm:w-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              {/* Modal Images */}
              <div className="mb-4 grid grid-cols-1 gap-3 sm:mb-6 sm:grid-cols-2 sm:gap-4">
                {selectedRoom.images.map((img, idx) => (
                  <div key={idx} className="relative h-40 overflow-hidden rounded-lg sm:h-48">
                    {!isImageLoaded(img) && (
                      <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200">
                        <FiLoader className="h-8 w-8 animate-spin text-[#FFD700]" />
                      </div>
                    )}
                    <Image
                      src={img}
                      alt={`${selectedRoom.name} ${idx + 1}`}
                      fill
                      className={`object-cover transition-opacity duration-300 ${isImageLoaded(img) ? "opacity-100" : "opacity-0"
                        }`}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      onLoad={() => handleImageLoad(img)}
                    />
                  </div>
                ))}
              </div>

              {/* Modal Details */}
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-base font-bold text-[#2C4549] sm:mb-3 sm:text-lg">
                    Description
                  </h4>
                  <p className="mb-3 text-sm leading-relaxed text-gray-700 sm:mb-4 sm:text-base">
                    {selectedRoom.longDescription}
                  </p>

                  <h4 className="mb-2 text-base font-bold text-[#2C4549] sm:mb-3 sm:text-lg">
                    Key Features
                  </h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    {selectedRoom.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FiCheck className="shrink-0 text-green-500" size={14} />
                        <span className="text-sm text-gray-700 sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-base font-bold text-[#2C4549] sm:mb-3 sm:text-lg">
                    All Amenities
                  </h4>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {enrichAmenities(selectedRoom).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 sm:gap-2">
                        <amenity.icon size={14} className="shrink-0 text-[#FFD700]" />
                        <span className="text-xs text-gray-700 sm:text-sm">{amenity.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg bg-gray-50 p-3 sm:mt-6 sm:p-4">
                    <div className="mb-1 text-2xl font-bold text-[#FFD700] sm:mb-2 sm:text-3xl">
                      {selectedRoom.price}
                      <span className="text-sm font-normal text-gray-500">
                        /{selectedRoom.priceNote.split(" ")[0]}
                      </span>
                    </div>
                    <button
                      onClick={() => handleBookNow(selectedRoom)}
                      className="w-full rounded-lg bg-[#FFD700] py-2.5 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D] sm:py-3 sm:text-base"
                    >
                      Book This Room
                    </button>
                    <p className="mt-1.5 text-center text-xs text-gray-500 sm:mt-2">
                      Taxes and fees not included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showShareToast && (
        <div className="animate-slide-up fixed right-4 bottom-4 left-4 z-50 sm:right-4 sm:left-auto">
          <div className="flex items-center gap-2 rounded-lg bg-[#2C4549] px-4 py-3 text-white shadow-lg sm:px-6">
            <FiCheckCircle size={16} className="shrink-0 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs sm:text-sm">{shareMessage}</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
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

export default RoomTypes;