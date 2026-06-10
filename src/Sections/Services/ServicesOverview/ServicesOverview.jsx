// src/Sections/Services/ServicesOverview/ServicesOverview.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiCheck,
  FiArrowRight,
  FiClock,
  FiMapPin,
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
import { FaUtensils } from "react-icons/fa";

const ServicesOverview = ({ content = {} }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const {
    title = "Premium Services & Amenities",
    subtitle = "Everything You Need",
    description = "Discover our comprehensive range of services designed to make your stay comfortable, convenient, and unforgettable.",
    serviceCategories = [
      { id: "all", name: "All Services", icon: "all" },
      { id: "wellness", name: "Wellness", icon: "spa" },
      { id: "dining", name: "Dining", icon: "dining" },
      { id: "business", name: "Business", icon: "business" },
      { id: "convenience", name: "Convenience", icon: "convenience" },
    ],
    services = [
      {
        id: 1,
        name: "Luxury Spa",
        category: "wellness",
        description: "Rejuvenate with our signature treatments and traditional massages.",
        longDescription: "Our award-winning spa offers a sanctuary of peace and tranquility. Experience a range of treatments from deep tissue massages to revitalizing facials, all using premium organic products.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Massage Therapy", "Facial Treatments", "Sauna & Steam", "Hydrotherapy"],
        price: "$$$",
        duration: "60-120 min",
        icon: "spa",
        popular: true,
      },
      {
        id: 2,
        name: "Fitness Center",
        category: "wellness",
        description: "State-of-the-art equipment with personal training available.",
        longDescription: "Stay fit during your travels in our 24/7 fitness center featuring the latest cardio and strength training equipment. Personal trainers are available upon request.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["24/7 Access", "Personal Training", "Yoga Studio", "Cardio Equipment"],
        price: "Free for guests",
        duration: "24/7",
        icon: "fitness",
        popular: false,
      },
      {
        id: 3,
        name: "Infinity Pool",
        category: "wellness",
        description: "Temperature-controlled pool with stunning city views.",
        longDescription: "Relax and unwind in our stunning infinity pool overlooking the city skyline. Enjoy poolside service with refreshing drinks and light snacks.",
        image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Poolside Bar", "Sun Loungers", "Towels Provided", "Lifeguard on Duty"],
        price: "Free for guests",
        duration: "7:00 AM - 8:00 PM",
        icon: "pool",
        popular: true,
      },
      {
        id: 4,
        name: "Fine Dining",
        category: "dining",
        description: "Exquisite culinary experiences with international cuisine.",
        longDescription: "Indulge in a gastronomic journey at our signature restaurant. Our award-winning chefs create memorable dishes using the finest local and imported ingredients.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Breakfast Buffet", "A La Carte Lunch", "Tasting Menu Dinner", "Wine Pairing"],
        price: "$$$",
        duration: "6:00 AM - 11:00 PM",
        icon: "dining",
        popular: true,
      },
      {
        id: 5,
        name: "24/7 Room Service",
        category: "dining",
        description: "Delicious meals delivered directly to your room anytime.",
        longDescription: "Enjoy restaurant-quality dining in the comfort of your room. Our extensive room service menu offers international favorites, local specialties, and healthy options.",
        image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Breakfast in Bed", "Late Night Menu", "Kids Menu", "Special Dietary Options"],
        price: "$$",
        duration: "24/7",
        icon: "service",
        popular: false,
      },
      {
        id: 6,
        name: "Business Center",
        category: "business",
        description: "Fully equipped workspace with printing and meeting rooms.",
        longDescription: "Stay productive with our modern business center. Featuring high-speed internet, printing services, and private meeting rooms for your business needs.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["High-Speed WiFi", "Printing Services", "Meeting Rooms", "Secretarial Services"],
        price: "Free for guests",
        duration: "24/7",
        icon: "business",
        popular: false,
      },
      {
        id: 7,
        name: "Concierge Service",
        category: "convenience",
        description: "Personalized assistance for bookings, recommendations, and more.",
        longDescription: "Our dedicated concierge team is here to make your stay extraordinary. From restaurant reservations to tour bookings, we handle all the details.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        features: ["Restaurant Bookings", "Tour Arrangements", "Transportation", "Special Requests"],
        price: "Complimentary",
        duration: "24/7",
        icon: "concierge",
        popular: true,
      },
      {
        id: 8,
        name: "Valet Parking",
        category: "convenience",
        description: "Secure and convenient parking with 24/7 valet service.",
        longDescription: "Enjoy hassle-free parking with our professional valet service. Your vehicle will be securely parked in our monitored garage.",
        image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["24/7 Service", "Electric Charging", "Luggage Assistance", "Car Wash Available"],
        price: "$25/day",
        duration: "24/7",
        icon: "parking",
        popular: false,
      },
      {
        id: 9,
        name: "Laundry Service",
        category: "convenience",
        description: "Same-day laundry and dry cleaning services.",
        longDescription: "Travel light with our convenient laundry and dry cleaning services. Same-day service available for requests received before 10 AM.",
        image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        features: ["Same-Day Service", "Dry Cleaning", "Ironing Service", "Eco-Friendly Detergents"],
        price: "$$",
        duration: "8:00 AM - 8:00 PM",
        icon: "laundry",
        popular: false,
      },
    ],
    cta = {
      text: "Book Your Stay",
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
        return <FaUtensils className={iconClass} />;
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

  const filteredServices = activeFilter === "all"
    ? services
    : services.filter(service => service.category === activeFilter);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <MdOutlineSpa className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-3">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${activeFilter === category.id
                ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mx-auto max-w-6xl">
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

                  {service.popular && (
                    <div className="absolute left-3 top-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                      Most Popular
                    </div>
                  )}

                  <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
                    {service.price}
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]/10">
                      {renderIcon(service.icon, "h-5 w-5")}
                    </div>
                    <h3 className="text-lg font-bold text-[#2C4549]">{service.name}</h3>
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

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiClock size={12} />
                      {service.duration}
                    </span>
                    <Link
                      href={`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-1 text-[#FFD700] transition hover:gap-2"
                    >
                      Learn More <FiArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Note */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="rounded-xl bg-[#FFD700]/5 p-5">
            <div className="flex items-center justify-center gap-2 text-[#FFD700]">
              <FiCheck size={20} />
              <span className="font-semibold">All services available to hotel guests</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              * Some services may require advance reservation. Please contact our concierge for availability.
            </p>
          </div>
        </div>

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
    </section>
  );
};

export default ServicesOverview;