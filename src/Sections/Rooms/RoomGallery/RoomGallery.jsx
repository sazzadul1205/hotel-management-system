// src/Sections/Rooms/RoomGallery/RoomGallery.jsx
"use client";

// React
import React, { useState, useCallback, useEffect } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiCamera,
  FiHeart,
  FiShare2,
  FiDownload,
  FiInfo,
  FiMaximize2,
} from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";

const RoomGallery = ({ content = {} }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  // Liked images
  const [likedImages, setLikedImages] = useState(() => {
    try {
      const saved = typeof window !== "undefined" && localStorage.getItem("likedRoomImages");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });


  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Destructure content with fallbacks
  const {
    title = "Room Gallery",
    subtitle = "A Visual Journey",
    description = "Explore our beautifully appointed rooms and suites through our curated gallery. Each space tells a unique story of comfort and luxury.",
    galleryImages = [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Deluxe King Room",
        category: "deluxe",
        title: "Deluxe King Room",
        description: "Spacious room with king-size bed, work desk, and city views",
        size: "350 sq ft",
        bedType: "King Size Bed",
        view: "City View",
        capacity: "2 Adults",
        featured: true,
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        alt: "Executive Suite Living Area",
        category: "suite",
        title: "Executive Suite",
        description: "Separate living area with premium amenities and workspace",
        size: "550 sq ft",
        bedType: "King Bed + Sofa",
        view: "Panoramic City",
        capacity: "2 Adults",
        featured: true,
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Family Suite",
        category: "family",
        title: "Family Suite",
        description: "Perfect for families with separate bedrooms and living area",
        size: "750 sq ft",
        bedType: "2 Queen Beds",
        view: "Pool View",
        capacity: "4 Adults",
        featured: false,
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Premium Bathroom",
        category: "bathroom",
        title: "Luxury Bathroom",
        description: "Spa-inspired bathroom with rainfall shower and tub",
        size: "120 sq ft",
        bedType: "N/A",
        view: "N/A",
        capacity: "N/A",
        featured: false,
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Presidential Suite",
        category: "suite",
        title: "Presidential Suite",
        description: "Ultimate luxury with private terrace and butler service",
        size: "1200 sq ft",
        bedType: "King Master Bed",
        view: "Full City View",
        capacity: "6 Adults",
        featured: true,
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        alt: "Deluxe Twin Room",
        category: "deluxe",
        title: "Deluxe Twin Room",
        description: "Two comfortable twin beds with modern amenities",
        size: "350 sq ft",
        bedType: "2 Twin Beds",
        view: "Garden View",
        capacity: "2 Adults",
        featured: false,
      },
      {
        id: 7,
        src: "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Room Terrace",
        category: "view",
        title: "Private Terrace",
        description: "Outdoor space with comfortable seating and city views",
        size: "200 sq ft",
        bedType: "N/A",
        view: "City Skyline",
        capacity: "N/A",
        featured: false,
      },
      {
        id: 8,
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1949&q=80",
        alt: "Dining Area",
        category: "dining",
        title: "In-Room Dining",
        description: "Elegant dining setup for special occasions",
        size: "100 sq ft",
        bedType: "N/A",
        view: "N/A",
        capacity: "4 Persons",
        featured: false,
      },
    ],
    categories = [
      { id: "all", label: "All Rooms", icon: "grid" },
      { id: "deluxe", label: "Deluxe", icon: "camera" },
      { id: "suite", label: "Suites", icon: "camera" },
      { id: "family", label: "Family", icon: "camera" },
      { id: "bathroom", label: "Bathrooms", icon: "camera" },
      { id: "view", label: "Views", icon: "camera" },
    ],
    cta = {
      text: "Book Your Stay",
      link: "/booking",
    },
  } = content;

  // Filter images based on category
  const filteredImages = galleryImages.filter(
    (img) => filter === "all" || img.category === filter
  );

  // Save liked images to localStorage
  useEffect(() => {
    localStorage.setItem("likedRoomImages", JSON.stringify(likedImages));
  }, [likedImages]);

  // Open lightbox
  const openLightbox = useCallback(
    (index) => {
      const actualIndex = galleryImages.findIndex(
        (img) => img.id === filteredImages[index].id
      );
      setCurrentIndex(actualIndex);
      setSelectedImage(galleryImages[actualIndex]);
      document.body.style.overflow = "hidden";
    },
    [filteredImages, galleryImages]
  );

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  // Navigate next
  const nextImage = useCallback(() => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  }, [currentIndex, galleryImages]);

  // Navigate previous
  const prevImage = useCallback(() => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  }, [currentIndex, galleryImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeLightbox]);

  // Toggle like
  const toggleLike = (imageId) => {
    setLikedImages((prev) => {
      if (prev.includes(imageId)) {
        return prev.filter((id) => id !== imageId);
      } else {
        return [...prev, imageId];
      }
    });
    showToastMessage(
      likedImages.includes(imageId) ? "Removed from favorites" : "Added to favorites"
    );
  };

  // Share image
  const shareImage = async (image) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: image.title,
          text: image.description,
          url: image.src,
        });
      } else {
        await navigator.clipboard.writeText(`${image.title}: ${image.description}`);
        showToastMessage("Description copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  // Show toast message
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Download image
  const downloadImage = async (image) => {
    try {
      const response = await fetch(image.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${image.title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      showToastMessage("Image downloaded!");
    } catch (error) {
      console.error("Error downloading:", error);
    }
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiCamera className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
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

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm ${filter === cat.id
                ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 w-full overflow-hidden sm:h-56 md:h-64 lg:h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                    <p className="text-xs text-gray-200">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute left-2 top-2 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-semibold text-[#2C4549] shadow-md sm:left-3 sm:top-3">
                  {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                </div>

                {/* Action Buttons */}
                <div className="absolute right-2 top-2 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-3 sm:top-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(image.id);
                    }}
                    className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70 sm:p-2"
                    aria-label="Like"
                  >
                    <FiHeart
                      className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${likedImages.includes(image.id)
                        ? "fill-red-500 text-red-500"
                        : "text-white"
                        }`}
                    />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      shareImage(image);
                    }}
                    className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70 sm:p-2"
                    aria-label="Share"
                  >
                    <FiShare2 className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(index);
                    }}
                    className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70 sm:p-2"
                    aria-label="Zoom"
                  >
                    <FiMaximize2 className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" />
                  </button>
                </div>

                {/* Featured Badge */}
                {image.featured && (
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-[#FFD700]/90 px-2 py-0.5 text-xs font-semibold text-[#2C4549]">
                    <MdOutlineVerified size={10} />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="mb-0.5 text-sm font-bold text-[#2C4549] sm:text-base">
                  {image.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  {image.size && <span>📐 {image.size}</span>}
                  {image.bedType && image.bedType !== "N/A" && <span>🛏️ {image.bedType}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredImages.length === 0 && (
          <div className="py-12 text-center">
            <FiCamera size={48} className="mx-auto mb-3 text-gray-300" />
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <FiGrid size={16} />
            {cta.text}
            <FiCamera size={16} />
          </Link>
        </div>
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
            className="absolute right-3 top-3 z-10 rounded-full bg-black/30 p-1.5 text-white transition hover:bg-black/50 hover:text-[#FFD700] sm:right-4 sm:top-4 sm:p-2"
            aria-label="Close"
          >
            <FiX size={20} className="sm:h-6 sm:w-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 z-10 rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/70 hover:text-[#FFD700] sm:left-4 sm:p-2"
            aria-label="Previous"
          >
            <FiChevronLeft size={20} className="sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 z-10 rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/70 hover:text-[#FFD700] sm:right-4 sm:p-2"
            aria-label="Next"
          >
            <FiChevronRight size={20} className="sm:h-6 sm:w-6" />
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
                className="object-contain"
                priority
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 text-white sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">{selectedImage.title}</h3>
                  <p className="text-xs text-gray-200 sm:text-sm">{selectedImage.description}</p>
                  <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-300">
                    {selectedImage.size && <span>📐 {selectedImage.size}</span>}
                    {selectedImage.bedType && selectedImage.bedType !== "N/A" && (
                      <span>🛏️ {selectedImage.bedType}</span>
                    )}
                    {selectedImage.view && selectedImage.view !== "N/A" && (
                      <span>👁️ {selectedImage.view}</span>
                    )}
                    {selectedImage.capacity && selectedImage.capacity !== "N/A" && (
                      <span>👥 {selectedImage.capacity}</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleLike(selectedImage.id)}
                    className="rounded-full bg-white/20 p-1.5 transition hover:bg-white/30"
                  >
                    <FiHeart
                      className={`h-4 w-4 ${likedImages.includes(selectedImage.id)
                        ? "fill-red-500 text-red-500"
                        : "text-white"
                        }`}
                    />
                  </button>
                  <button
                    onClick={() => shareImage(selectedImage)}
                    className="rounded-full bg-white/20 p-1.5 transition hover:bg-white/30"
                  >
                    <FiShare2 className="h-4 w-4 text-white" />
                  </button>
                  <button
                    onClick={() => downloadImage(selectedImage)}
                    className="rounded-full bg-white/20 p-1.5 transition hover:bg-white/30"
                  >
                    <FiDownload className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white sm:left-4 sm:top-4">
              {currentIndex + 1} / {galleryImages.length}
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-24">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                    setSelectedImage(galleryImages[idx]);
                  }}
                  className={`h-1.5 rounded-full transition-all ${currentIndex === idx
                    ? "w-3 bg-[#FFD700] sm:w-4"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform animate-slide-up">
          <div className="flex items-center gap-2 rounded-lg bg-[#2C4549] px-4 py-2 text-white shadow-lg">
            <FiInfo size={14} />
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

export default RoomGallery;