"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight, FiGrid, FiCamera } from 'react-icons/fi';

const MiniGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = useMemo(() => [
    {
      id: 1,
      src: "/assets/images/Home/lobby.webp",
      alt: "Hotel Lobby",
      category: "Lobby",
      title: "Elegant Grand Lobby",
      width: 800,
      height: 600
    },
    {
      id: 2,
      src: "/assets/images/Home/rooms.webp",
      alt: "Deluxe Room",
      category: "Rooms",
      title: "Luxury Deluxe Suite",
      width: 800,
      height: 600
    },
    {
      id: 3,
      src: "/assets/images/Home/pool.webp",
      alt: "Swimming Pool",
      category: "Facilities",
      title: "Infinity Swimming Pool",
      width: 800,
      height: 600
    },
    {
      id: 4,
      src: "/assets/images/Home/restaurant.webp",
      alt: "Restaurant",
      category: "Dining",
      title: "Fine Dining Restaurant",
      width: 800,
      height: 600
    },
    {
      id: 5,
      src: "/assets/images/Home/spa.webp",
      alt: "Spa",
      category: "Wellness",
      title: "Luxury Spa & Wellness",
      width: 800,
      height: 600
    },
    {
      id: 6,
      src: "/assets/images/Home/conference.webp",
      alt: "Conference Hall",
      category: "Business",
      title: "Modern Conference Hall",
      width: 800,
      height: 600
    }
  ], []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = useCallback(() => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  }, [currentIndex, galleryImages]);

  const prevImage = useCallback(() => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  }, [currentIndex, galleryImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage]);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-4">
            <FiCamera className="text-[#FFD700]" size={18} />
            <span className="text-[#2C4549] font-semibold text-sm uppercase tracking-wide">
              Our Gallery
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549] mb-4">
            A Glimpse of Paradise
          </h2>

          <p className="text-gray-600 text-lg">
            Explore our luxurious spaces through these captivating moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm text-[#FFD700] font-semibold">{image.category}</p>
                    <h3 className="text-xl font-bold mt-1">{image.title}</h3>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#FFD700] text-[#2C4549] px-3 py-1 rounded-full text-xs font-semibold">
                  {image.category}
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <FiGrid size={16} className="text-[#2C4549]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn bg-[#2C4549] text-white hover:bg-[#1a2f33] border-none gap-2 px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105">
            View Full Gallery
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-[#FFD700] transition-colors z-10"
            >
              <FiX size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-[#FFD700] transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              <FiChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-[#FFD700] transition-colors bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              <FiChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full max-w-5xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[70vh] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-[#FFD700] font-semibold">{selectedImage.category}</p>
                <h3 className="text-2xl font-bold mt-1">{selectedImage.title}</h3>
              </div>

              {/* Counter */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
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