"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
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
  FiCheckCircle
} from 'react-icons/fi';
import {
  MdOutlineKingBed,
  MdOutlineBathtub,
  MdOutlineBalcony,
  MdOutlineRoomService,
} from 'react-icons/md';

const RoomTypes = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [likedRooms, setLikedRooms] = useState([]);
  const [showShareToast, setShowShareToast] = useState(false);
  const [shareMessage, setShareMessage] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  const roomCategories = [
    {
      id: 1,
      name: "Deluxe Room",
      slug: "deluxe-room",
      shortName: "Deluxe",
      price: "$129",
      priceNote: "per night",
      size: "350 sq ft",
      capacity: 2,
      bedType: "King Size Bed",
      view: "City View",
      images: [
        "/assets/images/Home/deluxe-room-1.webp",
        "/assets/images/Home/deluxe-room-2.webp",
        "/assets/images/Home/deluxe-room-3.webp"
      ],
      description: "Experience modern comfort in our Deluxe Room, featuring contemporary design and premium amenities for a relaxing stay.",
      longDescription: "Our Deluxe Rooms offer the perfect blend of style and comfort. With modern furnishings, plush bedding, and thoughtful amenities, these rooms provide an ideal retreat for both business and leisure travelers. Large windows flood the room with natural light, creating a warm and inviting atmosphere.",
      amenities: [
        { name: "Free High-Speed WiFi", icon: FiWifi },
        { name: "55-inch Smart TV", icon: FiTv },
        { name: "Premium Air Conditioning", icon: FiWind },
        { name: "Coffee Maker", icon: FiCoffee },
        { name: "Luxury Bathroom", icon: MdOutlineBathtub },
        { name: "Work Desk", icon: FiMaximize }
      ],
      features: ["Complimentary Water", "Mini Bar", "In-room Safe", "Ironing Board"],
      popular: true,
      color: "from-[#FFD700] to-[#FFA500]"
    },
    {
      id: 2,
      name: "Executive Suite",
      slug: "executive-suite",
      shortName: "Executive",
      price: "$199",
      priceNote: "per night",
      size: "550 sq ft",
      capacity: 2,
      bedType: "King Size Bed + Sofa",
      view: "Panoramic City View",
      images: [
        "/assets/images/Home/executive-1.webp",
        "/assets/images/Home/executive-2.webp",
        "/assets/images/Home/executive-3.webp"
      ],
      description: "Designed for business travelers, our Executive Suite offers separate living area and premium workspace.",
      longDescription: "The Executive Suite is thoughtfully designed for the discerning business traveler. Featuring a separate living area with comfortable seating, a dedicated workspace with ergonomic chair, and premium amenities to ensure productivity and relaxation during your stay.",
      amenities: [
        { name: "Ultra High-Speed WiFi", icon: FiWifi },
        { name: "65-inch 4K Smart TV", icon: FiTv },
        { name: "Premium Climate Control", icon: FiWind },
        { name: "Espresso Machine", icon: FiCoffee },
        { name: "Spa-inspired Bathroom", icon: MdOutlineBathtub },
        { name: "Executive Work Station", icon: FiMaximize },
        { name: "24/7 Room Service", icon: MdOutlineRoomService },
        { name: "Private Balcony", icon: MdOutlineBalcony }
      ],
      features: ["Complimentary Breakfast", "Express Check-in", "Late Check-out", "Airport Transfer"],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      name: "Family Suite",
      slug: "family-suite",
      shortName: "Family",
      price: "$249",
      priceNote: "per night",
      size: "750 sq ft",
      capacity: 4,
      bedType: "2 Queen Beds + Sofa",
      view: "Pool or City View",
      images: [
        "/assets/images/Home/family-1.webp",
        "/assets/images/Home/family-2.webp",
        "/assets/images/Home/family-3.webp"
      ],
      description: "Spacious suite perfect for families, featuring separate living area and kitchenette.",
      longDescription: "Our Family Suite provides ample space for the whole family. With two separate bedrooms, a comfortable living area, and a kitchenette, it's designed to make family vacations memorable. Kids will love the extra space, and parents will appreciate the thoughtful amenities.",
      amenities: [
        { name: "High-Speed WiFi", icon: FiWifi },
        { name: "65-inch Smart TV", icon: FiTv },
        { name: "Multi-zone AC", icon: FiWind },
        { name: "Full Kitchenette", icon: FiCoffee },
        { name: "Family Bathroom", icon: MdOutlineBathtub },
        { name: "Living Area", icon: FiMaximize },
        { name: "Kids Amenities", icon: FiUsers },
        { name: "Private Balcony", icon: MdOutlineBalcony }
      ],
      features: ["Complimentary Breakfast (4)", "Kids Stay Free", "Rollaway Bed", "Pool Access"],
      popular: false,
      color: "from-green-500 to-green-600"
    }
  ];

  // Load favorites from localStorage on mount - Fixed to avoid cascade
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteRooms');
    if (savedFavorites && !isInitialized) {
      const parsedFavorites = JSON.parse(savedFavorites);
      setLikedRooms(parsedFavorites);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Save favorites to localStorage whenever it changes (but not on initial load)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('favoriteRooms', JSON.stringify(likedRooms));
    }
  }, [likedRooms, isInitialized]);

  const toggleLike = (roomId) => {
    setLikedRooms(prev => {
      const newLiked = prev.includes(roomId)
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId];

      // Show toast message
      const room = roomCategories.find(r => r.id === roomId);
      setShareMessage(prev.includes(roomId) ? `Removed ${room.name} from favorites` : `Added ${room.name} to favorites`);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);

      return newLiked;
    });
  };

  const handleShare = async (room) => {
    const shareData = {
      title: `${room.name} at DA Hotel`,
      text: `Check out the ${room.name} at DA Hotel! ${room.description}`,
      url: `${window.location.origin}/rooms/${room.slug}`,
    };

    try {
      if (navigator.share && window.innerWidth <= 768) {
        // Mobile share with native API
        await navigator.share(shareData);
        setShareMessage(`Shared ${room.name} successfully!`);
      } else {
        // Desktop fallback - copy to clipboard
        await navigator.clipboard.writeText(`${shareData.text}\n\n${shareData.url}`);
        setShareMessage(`Link copied to clipboard! Share ${room.name} with friends.`);
      }
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    } catch (error) {
      console.error('Error sharing:', error);
      setShareMessage('Failed to share. Please try again.');
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    }
  };

  const handleBookNow = (room) => {
    // Store selected room in localStorage for booking page
    localStorage.setItem('selectedRoom', JSON.stringify({
      id: room.id,
      name: room.name,
      price: room.price
    }));
    window.location.href = '/booking';
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-4">
            <MdOutlineKingBed className="text-[#FFD700]" size={18} />
            <span className="text-[#2C4549] font-semibold text-sm uppercase tracking-wide">
              Accommodations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549] mb-4">
            Luxurious Room Types
          </h2>

          <p className="text-gray-600 text-lg">
            Discover our carefully designed rooms and suites, each offering unique comfort and style
          </p>
        </div>

        {/* Room Cards */}
        <div className="space-y-12">
          {roomCategories.map((room, index) => (
            <div
              key={room.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } lg:flex`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative group overflow-hidden">
                <div className="relative h-64 md:h-80 lg:h-full min-h-[300px]">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Image Gallery Indicator */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <FiEye size={12} />
                  {room.images.length} photos
                </div>

                {/* Popular Badge */}
                {room.popular && (
                  <div className="absolute top-4 left-4 bg-[#FFD700] text-[#2C4549] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FiStar size={12} />
                    Most Popular
                  </div>
                )}

                {/* Favorite Badge on Image */}
                {likedRooms.includes(room.id) && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FiHeart size={10} fill="white" />
                    Favorite
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2C4549] mb-2">
                      {room.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FiMaximize size={14} />
                        {room.size}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiUsers size={14} />
                        Max {room.capacity} guests
                      </span>
                      <span className="flex items-center gap-1">
                        <MdOutlineKingBed size={14} />
                        {room.bedType}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold text-[#FFD700]">
                      {room.price}
                    </div>
                    <div className="text-xs text-gray-400">{room.priceNote}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {room.description}
                </p>

                {/* Amenities Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {room.amenities.slice(0, 4).map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <amenity.icon size={14} className="text-[#FFD700]" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>

                {/* Features Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="flex-1 bg-[#2C4549] text-white py-2.5 rounded-lg font-semibold hover:bg-[#1a2f33] transition flex items-center justify-center gap-2 group"
                  >
                    View Details
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </button>
                  <button
                    onClick={() => toggleLike(room.id)}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg hover:border-[#FFD700] transition group"
                  >
                    <FiHeart
                      className={`transition ${likedRooms.includes(room.id) ? 'fill-red-500 text-red-500' : 'text-gray-400 group-hover:text-red-500'
                        }`}
                      size={20}
                    />
                  </button>
                  <button
                    onClick={() => handleShare(room)}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg hover:border-[#FFD700] transition group"
                  >
                    <FiShare2 size={20} className="text-gray-400 group-hover:text-[#FFD700]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Rooms Button */}
        <div className="text-center mt-12">
          <button className="btn bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D] border-none gap-2 px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105">
            View All Accommodations
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Room Details Modal - Fixed Text Colors */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold text-[#2C4549]">{selectedRoom.name}</h3>
              <button
                onClick={() => setSelectedRoom(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FiX size={24} className="text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              {/* Modal Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedRoom.images.map((img, idx) => (
                  <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                    <Image src={img} alt={`${selectedRoom.name} ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Modal Details - Fixed Text Colors */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg text-[#2C4549] mb-3">Description</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{selectedRoom.longDescription}</p>

                  <h4 className="font-bold text-lg text-[#2C4549] mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {selectedRoom.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FiCheck className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#2C4549] mb-3">All Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedRoom.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <amenity.icon size={16} className="text-[#FFD700] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{amenity.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-[#FFD700] mb-2">
                      {selectedRoom.price}
                      <span className="text-sm text-gray-500 font-normal">/{selectedRoom.priceNote.split(' ')[0]}</span>
                    </div>
                    <button
                      onClick={() => handleBookNow(selectedRoom)}
                      className="w-full bg-[#FFD700] text-[#2C4549] py-3 rounded-lg font-semibold hover:bg-[#FFE44D] transition"
                    >
                      Book This Room
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Taxes and fees not included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification for Favorites & Share */}
      {showShareToast && (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
          <div className="bg-[#2C4549] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <FiCheckCircle size={18} className="text-[#FFD700]" />
            <span className="text-sm">{shareMessage}</span>
          </div>
        </div>
      )}

      <style jsx>{`
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