// src/Sections/Home/MiniGallery/MiniGallery.jsx
"use client";

// React
import React, { useState, useEffect, useCallback, useMemo } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import { FiX, FiChevronLeft, FiChevronRight, FiGrid, FiCamera } from "react-icons/fi";

const MiniGallery = () => {
  // Selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images
  const galleryImages = useMemo(
    () => [
      {
        id: 1,
        src: "/assets/images/Home/lobby.webp",
        alt: "Hotel Lobby",
        category: "Lobby",
        title: "Elegant Grand Lobby",
        width: 800,
        height: 600,
      },
      {
        id: 2,
        src: "/assets/images/Home/rooms.webp",
        alt: "Deluxe Room",
        category: "Rooms",
        title: "Luxury Deluxe Suite",
        width: 800,
        height: 600,
      },
      {
        id: 3,
        src: "/assets/images/Home/pool.webp",
        alt: "Swimming Pool",
        category: "Facilities",
        title: "Infinity Swimming Pool",
        width: 800,
        height: 600,
      },
      {
        id: 4,
        src: "/assets/images/Home/restaurant.webp",
        alt: "Restaurant",
        category: "Dining",
        title: "Fine Dining Restaurant",
        width: 800,
        height: 600,
      },
      {
        id: 5,
        src: "/assets/images/Home/spa.webp",
        alt: "Spa",
        category: "Wellness",
        title: "Luxury Spa & Wellness",
        width: 800,
        height: 600,
      },
      {
        id: 6,
        src: "/assets/images/Home/conference.webp",
        alt: "Conference Hall",
        category: "Business",
        title: "Modern Conference Hall",
        width: 800,
        height: 600,
      },
    ],
    [],
  );

  // Lightbox - Open
  const openLightbox = useCallback(
    (index) => {
      setCurrentIndex(index);
      setSelectedImage(galleryImages[index]);
    },
    [galleryImages],
  );

  // Lightbox - Close
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Navigation - Next
  const nextImage = useCallback(() => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  }, [currentIndex, galleryImages]);

  // Navigation - Previous
  const prevImage = useCallback(() => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  }, [currentIndex, galleryImages]);

  // Keyboard navigation
  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12 lg:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiCamera className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              Our Gallery
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            A Glimpse of Paradise
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            Explore our luxurious spaces through these captivating moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl sm:rounded-2xl"
              onClick={() => openLightbox(index)}
            >
              <div className="xs:h-56 relative h-48 w-full overflow-hidden sm:h-60 md:h-72 lg:h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 bottom-0 left-0 translate-y-full transform p-4 text-white transition-transform duration-300 group-hover:translate-y-0 sm:p-6">
                    <p className="text-xs font-semibold text-[#FFD700] sm:text-sm">
                      {image.category}
                    </p>
                    <h3 className="mt-0.5 text-base font-bold sm:mt-1 sm:text-lg md:text-xl">
                      {image.title}
                    </h3>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-2 left-2 rounded-full bg-[#FFD700] px-2 py-1 text-xs font-semibold text-[#2C4549] shadow-md sm:top-4 sm:left-4 sm:px-3">
                  {image.category}
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-2 right-2 scale-0 transform rounded-full bg-white/90 p-1.5 opacity-0 shadow-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:top-4 sm:right-4 sm:p-2">
                  <FiGrid size={14} className="text-[#2C4549] sm:h-4 sm:w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <Link
            href="/gallery"
            className="btn inline-flex transform items-center gap-2 border-none bg-[#2C4549] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1a2f33] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            View Full Gallery
            <FiChevronRight size={16} className="sm:h-4.5 sm:w-4.5" />
          </Link>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/30 p-1.5 text-white transition-colors hover:bg-black/50 hover:text-[#FFD700] sm:top-4 sm:right-4 sm:p-2"
              aria-label="Close lightbox"
            >
              <FiX size={24} className="sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 z-10 rounded-full bg-black/50 p-1.5 text-white transition-colors hover:bg-black/70 hover:text-[#FFD700] sm:left-4 sm:p-2"
              aria-label="Previous image"
            >
              <FiChevronLeft size={24} className="sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 z-10 rounded-full bg-black/50 p-1.5 text-white transition-colors hover:bg-black/70 hover:text-[#FFD700] sm:right-4 sm:p-2"
              aria-label="Next image"
            >
              <FiChevronRight size={24} className="sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </button>

            {/* Image Container */}
            <div
              className="relative mx-2 max-h-[90vh] w-full max-w-5xl sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[50vh] w-full sm:h-[60vh] md:h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image Info */}
              <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-4 text-white sm:p-6">
                <p className="text-xs font-semibold text-[#FFD700] sm:text-sm">
                  {selectedImage.category}
                </p>
                <h3 className="mt-0.5 text-lg font-bold sm:mt-1 sm:text-xl md:text-2xl">
                  {selectedImage.title}
                </h3>
              </div>

              {/* Counter */}
              <div className="absolute top-4 left-4 rounded-full bg-black/50 px-2 py-1 text-xs text-white sm:px-3 sm:text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>

              {/* Dot Navigation */}
              <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 transform gap-1.5 sm:bottom-24 sm:gap-2">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                      setSelectedImage(galleryImages[idx]);
                    }}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 sm:h-2 sm:w-2 ${
                      currentIndex === idx
                        ? "w-3 bg-[#FFD700] sm:w-4"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .fixed {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default MiniGallery;
