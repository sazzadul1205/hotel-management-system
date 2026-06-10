// src/Sections/Services/PremiumServices/PremiumServices.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiArrowRight,
  FiShare2,
  FiCheck,
  FiAward,
} from "react-icons/fi";
import {
  MdOutlineSpa,
  MdOutlineLocalParking,
} from "react-icons/md";
import { GiChampagneCork } from "react-icons/gi";
import { FaUtensils, FaGem, FaCrown } from "react-icons/fa";

const PremiumServices = ({ content = {} }) => {

  // State
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const {
    title = "Premium Services",
    subtitle = "Luxury at Your Fingertips",
    description = "Elevate your stay with our exclusive premium services designed for the discerning traveler seeking the extraordinary.",
    premiumServices = [
      {
        id: 1,
        name: "VIP Concierge",
        tagline: "Your Personal Lifestyle Manager",
        description: "Experience the ultimate in personalized service with our dedicated VIP concierge team, available 24/7 to handle every aspect of your stay.",
        longDescription: "Our VIP Concierge service provides you with a dedicated lifestyle manager who anticipates your needs before you even express them. From securing sold-out show tickets to arranging private jet charters, no request is too complex.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        features: [
          "24/7 Dedicated Butler",
          "Private Event Planning",
          "Exclusive Access & Bookings",
          "Personal Shopping Service",
          "Travel Arrangements",
        ],
        price: "Complimentary for Suites",
        duration: "24/7",
        badge: "Most Requested",
        icon: "concierge",
        popular: true,
      },
      {
        id: 2,
        name: "Private Spa Suite",
        tagline: "Your Personal Wellness Sanctuary",
        description: "Indulge in complete privacy with our exclusive spa suite, featuring a private therapist and customized treatment programs.",
        longDescription: "Escape to your own private wellness retreat. Our spa suite includes a steam room, jacuzzi, and treatment area. Enjoy personalized wellness programs designed by our master therapists.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: [
          "Private Steam Room",
          "Personal Therapist",
          "Customized Treatments",
          "Champagne Service",
          "Aromatherapy Selection",
        ],
        price: "$350+/session",
        duration: "2-4 hours",
        badge: "Ultimate Relaxation",
        icon: "spa",
        popular: true,
      },
      {
        id: 3,
        name: "Chef's Table Experience",
        tagline: "A Culinary Masterpiece",
        description: "Enjoy an exclusive 10-course tasting menu prepared live by our Executive Chef at the chef's table in our private dining room.",
        longDescription: "Join our award-winning Executive Chef for an intimate culinary journey. Watch as each dish is crafted before your eyes while learning about the techniques and inspiration behind our signature creations.",
        image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
        features: [
          "10-Course Tasting Menu",
          "Sommelier Wine Pairing",
          "Private Dining Room",
          "Meet the Chef",
          "Signed Menu Keepsake",
        ],
        price: "$250/person",
        duration: "3 hours",
        badge: "Gourmet Experience",
        icon: "dining",
        popular: false,
      },
      {
        id: 4,
        name: "Helicopter Transfer",
        tagline: "Arrive in Style",
        description: "Experience the ultimate arrival with our private helicopter transfer service from the airport directly to our rooftop helipad.",
        longDescription: "Skip the traffic and arrive in spectacular fashion. Our helicopter transfer service offers breathtaking aerial views of the city and swift, comfortable transportation to and from the airport.",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: [
          "Private Helicopter",
          "Champagne Service",
          "Fast-track Check-in",
          "Luggage Assistance",
          "Panoramic City Views",
        ],
        price: "$1,200/way",
        duration: "15-20 min",
        badge: "Exclusive",
        icon: "helicopter",
        popular: false,
      },
      {
        id: 5,
        name: "Penthouse Terrace",
        tagline: "Exclusive Rooftop Dining",
        description: "Reserve our stunning penthouse terrace for a private dining experience under the stars with panoramic city views.",
        longDescription: "Create unforgettable memories on our penthouse terrace. Perfect for romantic proposals, anniversary celebrations, or intimate gatherings. Includes private chef service and dedicated staff.",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: [
          "Private Terrace",
          "Personal Chef",
          "Flower Arrangements",
          "Live Music Option",
          "Custom Menu",
        ],
        price: "$750/couple",
        duration: "3 hours",
        badge: "Romantic",
        icon: "terrace",
        popular: true,
      },
      {
        id: 6,
        name: "Luxury Car Service",
        tagline: "Travel in Elegance",
        description: "Chauffeur-driven luxury vehicles for all your transportation needs during your stay.",
        longDescription: "Arrive in style with our fleet of premium vehicles including Mercedes S-Class, BMW 7 Series, and Rolls Royce Phantom. Available for airport transfers, city tours, and special occasions.",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: [
          "Chauffeur Service",
          "Premium Vehicles",
          "Complimentary WiFi",
          "Bottled Water",
          "City Knowledge Guide",
        ],
        price: "From $150/hour",
        duration: "Hourly/Daily",
        badge: "Luxury Travel",
        icon: "car",
        popular: false,
      },
    ],
    cta = {
      text: "Inquire About Premium Services",
      link: "/contact",
    },
  } = content;

  // Render Icon
  const renderIcon = (iconName, className = "h-6 w-6") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "spa":
        return <MdOutlineSpa className={iconClass} />;
      case "concierge":
        return <FaCrown className={iconClass} />;
      case "dining":
        return <FaUtensils className={iconClass} />;
      case "helicopter":
        return <FaGem className={iconClass} />;
      case "terrace":
        return <GiChampagneCork className={iconClass} />;
      case "car":
        return <MdOutlineLocalParking className={iconClass} />;
      default:
        return <FaCrown className={iconClass} />;
    }
  };

  // Show Toast Message
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Share Service
  const shareService = async (service) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: service.name,
          text: service.tagline,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(`${service.name}: ${service.tagline}`);
        showToastMessage("Service details copied!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FaCrown className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Premium Services Grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {premiumServices.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute left-3 top-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                    {service.badge}
                  </div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute right-3 top-3 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                      Popular
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute right-3 bottom-3 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
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
                        setSelectedPackage(service);
                      }}
                      className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70"
                    >
                      <FiArrowRight className="h-3.5 w-3.5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]/10">
                      {renderIcon(service.icon, "h-5 w-5")}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C4549]">{service.name}</h3>
                      <p className="text-xs text-[#FFD700]">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="mb-3 text-sm text-gray-600 line-clamp-2">{service.description}</p>

                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        +{service.features.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div>
                      <p className="text-xs text-gray-400">{service.duration}</p>
                      <p className="text-sm font-bold text-[#FFD700]">{service.price}</p>
                    </div>
                    <button
                      onClick={() => setSelectedPackage(service)}
                      className="flex items-center gap-1 text-xs font-semibold text-[#FFD700] transition hover:gap-2"
                    >
                      Learn More <FiArrowRight size={10} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Promise */}
        <div className="mx-auto mt-12 max-w-6xl">
          <div className="rounded-2xl bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-6 text-white sm:p-8">
            <div className="flex flex-col items-center text-center">
              <FiAward className="mb-3 h-10 w-10 text-[#FFD700]" />
              <h3 className="mb-2 text-xl font-bold">The DA Hotel Promise</h3>
              <p className="mb-4 max-w-2xl text-sm text-gray-200">
                Every premium service is backed by our commitment to excellence. If it's not perfect, we'll make it right.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <FiCheck className="text-[#FFD700]" /> 100% Satisfaction Guarantee
                </span>
                <span className="flex items-center gap-1">
                  <FiCheck className="text-[#FFD700]" /> 24/7 Dedicated Support
                </span>
                <span className="flex items-center gap-1">
                  <FiCheck className="text-[#FFD700]" /> Best Price Promise
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <FaCrown size={16} />
            {cta.text}
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedPackage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex justify-end bg-white p-3">
              <button
                onClick={() => setSelectedPackage(null)}
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
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-3 top-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                  {selectedPackage.badge}
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-[#2C4549]">{selectedPackage.name}</h3>
                <p className="text-sm text-[#FFD700]">{selectedPackage.tagline}</p>
              </div>
              <p className="mb-4 text-gray-600">{selectedPackage.longDescription}</p>
              <div className="mb-4">
                <h4 className="mb-2 font-semibold text-[#2C4549]">Features & Inclusions</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedPackage.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <FiCheck className="text-green-500" size={14} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs text-gray-400">{selectedPackage.duration}</p>
                  <p className="text-xl font-bold text-[#FFD700]">{selectedPackage.price}</p>
                </div>
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#FFD700] px-6 py-2 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                >
                  Inquire Now
                </Link>
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

export default PremiumServices;