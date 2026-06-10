// src/Sections/Services/ServicesGrid/ServicesGrid.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiArrowRight,
  FiClock,
  FiMapPin,
  FiStar,
  FiHeart,
  FiShare2,
  FiInfo,
  FiCheck,
} from "react-icons/fi";
import {
  MdOutlineSpa,
  MdOutlineFitnessCenter,
  MdOutlinePool,
  MdOutlineBusinessCenter,
  MdOutlineRoomService,
  MdOutlineLocalLaundryService,
  MdOutlineLocalParking,
} from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";

const ServicesGrid = ({ content = {} }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedService, setSelectedService] = useState(null);
  const [likedServices, setLikedServices] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const {
    title = "Our Services",
    subtitle = "Explore What We Offer",
    description = "Discover our full range of premium services designed to make your stay extraordinary.",
    services = [
      {
        id: 1,
        name: "Luxury Spa & Wellness",
        category: "Wellness",
        shortDescription: "Rejuvenate your mind and body with our signature treatments.",
        description: "Experience ultimate relaxation at our world-class spa. Our expert therapists use premium organic products to provide rejuvenating treatments that will leave you feeling refreshed and revitalized.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Massage Therapy", "Facial Treatments", "Body Scrubs", "Aromatherapy"],
        price: "$$$",
        duration: "60-120 min",
        rating: 4.9,
        reviews: 128,
        icon: "spa",
        available: true,
      },
      {
        id: 2,
        name: "Fitness Center",
        category: "Wellness",
        shortDescription: "State-of-the-art equipment for your workout routine.",
        description: "Stay fit during your travels in our 24/7 fitness center featuring the latest cardio and strength training equipment. Personal trainers are available upon request.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["24/7 Access", "Personal Training", "Yoga Studio", "Cardio Equipment"],
        price: "Free",
        duration: "24/7",
        rating: 4.8,
        reviews: 95,
        icon: "fitness",
        available: true,
      },
      {
        id: 3,
        name: "Infinity Pool",
        category: "Wellness",
        shortDescription: "Stunning views and refreshing waters.",
        description: "Relax and unwind in our stunning infinity pool overlooking the city skyline. Enjoy poolside service with refreshing drinks and light snacks.",
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Poolside Bar", "Sun Loungers", "Towels Provided", "Lifeguard on Duty"],
        price: "Free",
        duration: "7:00 AM - 8:00 PM",
        rating: 4.9,
        reviews: 156,
        icon: "pool",
        available: true,
      },
      {
        id: 4,
        name: "Fine Dining Restaurant",
        category: "Dining",
        shortDescription: "Exquisite culinary experiences.",
        description: "Indulge in a gastronomic journey at our signature restaurant. Our award-winning chefs create memorable dishes using the finest local and imported ingredients.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Breakfast Buffet", "A La Carte Lunch", "Tasting Menu Dinner", "Wine Pairing"],
        price: "$$$",
        duration: "6:00 AM - 11:00 PM",
        rating: 4.9,
        reviews: 203,
        icon: "dining",
        available: true,
      },
      {
        id: 5,
        name: "24/7 Room Service",
        category: "Dining",
        shortDescription: "Delicious meals delivered to your room.",
        description: "Enjoy restaurant-quality dining in the comfort of your room. Our extensive room service menu offers international favorites, local specialties, and healthy options.",
        image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Breakfast in Bed", "Late Night Menu", "Kids Menu", "Special Dietary Options"],
        price: "$$",
        duration: "24/7",
        rating: 4.7,
        reviews: 89,
        icon: "service",
        available: true,
      },
      {
        id: 6,
        name: "Business Center",
        category: "Business",
        shortDescription: "Fully equipped workspace.",
        description: "Stay productive with our modern business center. Featuring high-speed internet, printing services, and private meeting rooms for your business needs.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["High-Speed WiFi", "Printing Services", "Meeting Rooms", "Secretarial Services"],
        price: "Free",
        duration: "24/7",
        rating: 4.6,
        reviews: 67,
        icon: "business",
        available: true,
      },
      {
        id: 7,
        name: "Concierge Service",
        category: "Services",
        shortDescription: "Personalized assistance for everything.",
        description: "Our dedicated concierge team is here to make your stay extraordinary. From restaurant reservations to tour bookings, we handle all the details.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        features: ["Restaurant Bookings", "Tour Arrangements", "Transportation", "Special Requests"],
        price: "Complimentary",
        duration: "24/7",
        rating: 4.9,
        reviews: 178,
        icon: "concierge",
        available: true,
      },
      {
        id: 8,
        name: "Valet Parking",
        category: "Services",
        shortDescription: "Secure and convenient parking.",
        description: "Enjoy hassle-free parking with our professional valet service. Your vehicle will be securely parked in our monitored garage.",
        image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["24/7 Service", "Electric Charging", "Luggage Assistance", "Car Wash Available"],
        price: "$25/day",
        duration: "24/7",
        rating: 4.5,
        reviews: 45,
        icon: "parking",
        available: true,
      },
      {
        id: 9,
        name: "Laundry Service",
        category: "Services",
        shortDescription: "Same-day laundry and dry cleaning.",
        description: "Travel light with our convenient laundry and dry cleaning services. Same-day service available for requests received before 10 AM.",
        image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Same-Day Service", "Dry Cleaning", "Ironing Service", "Eco-Friendly Detergents"],
        price: "$$",
        duration: "8:00 AM - 8:00 PM",
        rating: 4.7,
        reviews: 56,
        icon: "laundry",
        available: true,
      },
    ],
    cta = {
      text: "Book Now",
      link: "/booking",
    },
  } = content;

  const renderIcon = (iconName, className = "h-6 w-6") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "spa":
        return <MdOutlineSpa className={iconClass} />;
      case "fitness":
        return <MdOutlineFitnessCenter className={iconClass} />;
      case "pool":
        return <MdOutlinePool className={iconClass} />;
      case "business":
        return <MdOutlineBusinessCenter className={iconClass} />;
      case "service":
        return <MdOutlineRoomService className={iconClass} />;
      case "dining":
        return <GiKnifeFork className={iconClass} />;
      case "concierge":
        return <FiMapPin className={iconClass} />;
      case "parking":
        return <MdOutlineLocalParking className={iconClass} />;
      case "laundry":
        return <MdOutlineLocalLaundryService className={iconClass} />;
      default:
        return <MdOutlineSpa className={iconClass} />;
    }
  };

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const toggleLike = (serviceId, serviceName) => {
    setLikedServices((prev) => {
      if (prev.includes(serviceId)) {
        showToastMessage(`Removed ${serviceName} from favorites`);
        return prev.filter((id) => id !== serviceId);
      } else {
        showToastMessage(`Added ${serviceName} to favorites`);
        return [...prev, serviceId];
      }
    });
  };

  const shareService = async (service) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: service.name,
          text: service.shortDescription,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(`${service.name}: ${service.shortDescription}`);
        showToastMessage("Service details copied!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  // Get unique categories
  const categories = ["All", ...new Set(services.map(s => s.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = activeCategory === "All"
    ? services
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <MdOutlineSpa className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            {description}
          </p>
        </div>

        {/* View Toggle & Category Filters */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300 ${activeCategory === category
                  ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Toggle Buttons */}
          <div className="flex gap-2 rounded-lg bg-white p-1 shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-md px-3 py-1.5 text-sm transition ${viewMode === "grid" ? "bg-[#FFD700] text-[#2C4549]" : "text-gray-500 hover:bg-gray-100"
                }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md px-3 py-1.5 text-sm transition ${viewMode === "list" ? "bg-[#FFD700] text-[#2C4549]" : "text-gray-500 hover:bg-gray-100"
                }`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Services Grid/List View */}
        {viewMode === "grid" ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Action Buttons */}
                  <div className="absolute right-2 top-2 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(service.id, service.name);
                      }}
                      className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70"
                    >
                      <FiHeart
                        className={`h-3.5 w-3.5 ${likedServices.includes(service.id) ? "fill-red-500 text-red-500" : "text-white"
                          }`}
                      />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        shareService(service);
                      }}
                      className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70"
                    >
                      <FiShare2 className="h-3.5 w-3.5 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70"
                    >
                      <FiInfo className="h-3.5 w-3.5 text-white" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute left-3 top-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                    {service.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]/10">
                        {renderIcon(service.icon, "h-5 w-5")}
                      </div>
                      <h3 className="font-bold text-[#2C4549]">{service.name}</h3>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <FiStar className="text-[#FFD700]" size={12} />
                      <span className="text-xs font-semibold">{service.rating}</span>
                    </div>
                  </div>

                  <p className="mb-3 text-sm text-gray-600 line-clamp-2">{service.shortDescription}</p>

                  <div className="mb-3 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiClock size={12} />
                      {service.duration}
                    </span>
                    <span className="font-semibold text-[#FFD700]">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group flex overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-32 w-32 shrink-0 overflow-hidden sm:h-40 sm:w-40">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/10">
                          {renderIcon(service.icon, "h-4 w-4")}
                        </div>
                        <h3 className="font-bold text-[#2C4549]">{service.name}</h3>
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                          {service.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <FiStar className="text-[#FFD700]" size={12} />
                          <span className="text-xs font-semibold">{service.rating}</span>
                        </div>
                        <button
                          onClick={() => toggleLike(service.id, service.name)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <FiHeart
                            className={`h-4 w-4 ${likedServices.includes(service.id) ? "fill-red-500 text-red-500" : ""
                              }`}
                          />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{service.shortDescription}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiClock size={12} />
                        {service.duration}
                      </span>
                      <span className="font-semibold text-[#FFD700]">{service.price}</span>
                    </div>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="flex items-center gap-1 text-xs font-semibold text-[#FFD700] transition hover:gap-2"
                    >
                      View Details <FiArrowRight size={10} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Link */}
        {filteredServices.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-500">No services found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <MdOutlineSpa size={16} />
            {cta.text}
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex justify-end bg-white p-3">
              <button
                onClick={() => setSelectedService(null)}
                className="rounded-full p-1 transition hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 pt-0">
              <div className="relative mb-4 h-64 overflow-hidden rounded-xl">
                <Image
                  src={selectedService.image}
                  alt={selectedService.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#2C4549]">{selectedService.name}</h3>
                  <p className="text-sm text-[#FFD700]">{selectedService.category}</p>
                </div>
                <div className="flex items-center gap-1">
                  <FiStar className="text-[#FFD700]" />
                  <span className="font-semibold">{selectedService.rating}</span>
                  <span className="text-sm text-gray-400">({selectedService.reviews} reviews)</span>
                </div>
              </div>
              <p className="mb-4 text-gray-600">{selectedService.description}</p>
              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-[#2C4549]">Features & Amenities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <FiCheck className="text-green-500" size={14} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <FiClock size={14} /> {selectedService.duration}
                  </span>
                  <span className="font-bold text-[#FFD700]">{selectedService.price}</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    window.location.href = "/booking";
                  }}
                  className="rounded-lg bg-[#FFD700] px-6 py-2 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default ServicesGrid;