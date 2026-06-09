// src/Sections/Facilities/FacilityGallery/FacilityGallery.jsx
"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight, FiCamera,} from "react-icons/fi";

const FacilityGallery = ({ content = {} }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    title = "Restaurant Gallery",
    subtitle = "A Visual Feast",
    description = "Take a visual tour through our elegant dining spaces and culinary creations.",
    galleryImages = [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Main Dining Room",
        title: "Elegant Main Dining Room",
        category: "dining",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Chef at Work",
        title: "Chef's Table Experience",
        category: "kitchen",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
        alt: "Signature Dish",
        title: "Signature Dishes",
        category: "food",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Private Dining",
        title: "Private Dining Room",
        category: "dining",
      },
      {
        id: 5,
        src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Chef Plating",
        title: "Art of Plating",
        category: "kitchen",
      },
      {
        id: 6,
        src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        alt: "Wine Cellar",
        title: "Premium Wine Selection",
        category: "wine",
      },
    ],
  } = content;

  // Helper function to prevent body scroll
  const preventBodyScroll = useCallback((shouldPrevent) => {
    if (typeof document !== 'undefined') {
      if (shouldPrevent) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, []);

  // Open lightbox
  const openLightbox = useCallback((index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    preventBodyScroll(true);
  }, [galleryImages, preventBodyScroll]);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    preventBodyScroll(false);
  }, [preventBodyScroll]);

  // Next image
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
      return nextIndex;
    });
  }, [galleryImages]);

  // Previous image
  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = (prevIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndexValue]);
      return prevIndexValue;
    });
  }, [galleryImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, nextImage, prevImage, closeLightbox]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      preventBodyScroll(false);
    };
  }, [preventBodyScroll]);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FiCamera className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">{description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 hover:text-[#FFD700]"
            aria-label="Close lightbox"
          >
            <FiX size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 hover:text-[#FFD700]"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 hover:text-[#FFD700]"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Image Container */}
          <div
            className="relative mx-4 h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              priority
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="text-lg font-bold">{selectedImage.title}</h3>
              <p className="text-sm text-gray-300 capitalize">{selectedImage.category}</p>
            </div>

            {/* Counter */}
            <div className="absolute left-4 top-4 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
              {currentIndex + 1} / {galleryImages.length}
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-1.5">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                    setSelectedImage(galleryImages[idx]);
                  }}
                  className={`h-1.5 rounded-full transition-all ${currentIndex === idx
                      ? "w-4 bg-[#FFD700]"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilityGallery;