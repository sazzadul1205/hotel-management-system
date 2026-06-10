// src/Sections/Services/ServicesCTA/ServicesCTA.jsx
"use client";

// React
import React, { useState } from "react";

// Next
import Link from "next/link";

// Icons
import {
  FiArrowRight,
  FiCalendar,
  FiPhone,
  FiMail,
  FiHeart,
  FiCheck,
  FiClock,
  FiUsers,
  FiAward,
  FiMessageCircle,
  FiGift,
} from "react-icons/fi";
import { FaCrown, FaSpa } from "react-icons/fa";
import { MdOutlineSpa, MdOutlineRoomService } from "react-icons/md";
import { GiChampagneCork } from "react-icons/gi";

const ServicesCTA = ({ content = {} }) => {

  // State
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", service: "", date: "", });

  const {
    title = "Ready to Elevate Your Stay?",
    subtitle = "Experience Premium Services",
    description = "From spa treatments to private dining, our premium services are designed to make your stay unforgettable. Book now and enjoy exclusive benefits.",
    highlights = [
      { icon: "crown", text: "Premium Service Guarantee" },
      { icon: "clock", text: "24/7 Concierge Support" },
      { icon: "users", text: "Dedicated Service Team" },
      { icon: "award", text: "Award-Winning Experience" },
    ],
    services = [
      { name: "Spa & Wellness", icon: "spa", popular: true },
      { name: "Private Dining", icon: "dining", popular: false },
      { name: "Concierge", icon: "concierge", popular: true },
      { name: "Room Service", icon: "service", popular: false },
      { name: "Fitness Center", icon: "fitness", popular: false },
      { name: "Airport Transfer", icon: "transfer", popular: false },
    ],
    buttons = [
      {
        text: "Book a Service",
        link: "/booking",
        type: "primary",
        icon: "calendar",
      },
      {
        text: "Contact Concierge",
        link: "/contact",
        type: "secondary",
        icon: "phone",
      },
    ],
    contactInfo = {
      phone: "+1 (555) 123-4567",
      email: "concierge@dahotel.com",
      whatsapp: "+1 (555) 123-4567",
    },
    offer = {
      title: "Summer Special",
      description: "Book any premium service and receive a complimentary champagne toast",
      code: "SUMMER24",
      validUntil: "August 31, 2024",
    },
  } = content;

  // Function to render icons
  const renderIcon = (iconName, className = "h-4 w-4") => {
    const iconClass = `text-current ${className}`;
    switch (iconName) {
      case "crown":
        return <FaCrown className={iconClass} />;
      case "clock":
        return <FiClock className={iconClass} />;
      case "users":
        return <FiUsers className={iconClass} />;
      case "award":
        return <FiAward className={iconClass} />;
      case "spa":
        return <MdOutlineSpa className={iconClass} />;
      case "dining":
        return <GiChampagneCork className={iconClass} />;
      case "concierge":
        return <FiMessageCircle className={iconClass} />;
      case "service":
        return <MdOutlineRoomService className={iconClass} />;
      case "fitness":
        return <FiHeart className={iconClass} />;
      case "transfer":
        return <FaCrown className={iconClass} />;
      case "calendar":
        return <FiCalendar className={iconClass} />;
      case "phone":
        return <FiPhone className={iconClass} />;
      default:
        return <FiHeart className={iconClass} />;
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle quick form submission
  const handleQuickSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll contact you shortly about your ${formData.service} inquiry.`);
    setShowQuickForm(false);
    setFormData({ name: "", email: "", service: "", date: "" });
  };

  // Function to copy promo code
  const copyPromoCode = () => {
    navigator.clipboard.writeText(offer.code);
    alert(`Promo code ${offer.code} copied to clipboard!`);
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#2C4549] to-[#1a2f33]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FFD700]"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#FFD700]"></div>
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD700]"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <FaSpa size={60} className="text-[#FFD700]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <FaCrown size={60} className="text-[#FFD700]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-8 text-center sm:mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/20 px-4 py-2 backdrop-blur-sm">
              <FaCrown className="h-4 w-4 text-[#FFD700]" />
              <span className="text-xs font-semibold uppercase text-[#FFD700]">{subtitle}</span>
            </div>

            <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mx-auto max-w-2xl text-sm text-gray-200 sm:text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Quick Inquiry Form Toggle */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => setShowQuickForm(!showQuickForm)}
              className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <FiMessageCircle size={16} />
              {showQuickForm ? "Hide Quick Inquiry" : "Quick Inquiry"}
              <FiArrowRight size={14} className={`transition-transform ${showQuickForm ? "rotate-90" : ""}`} />
            </button>
          </div>

          {/* Quick Inquiry Form */}
          {showQuickForm && (
            <div className="mx-auto mb-10 max-w-2xl animate-fade-in-up">
              <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">
                <h3 className="mb-4 text-center text-lg font-bold text-[#2C4549]">
                  Quick Service Inquiry
                </h3>
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                      >
                        <option value="">Select a service</option>
                        <option value="Spa">Spa & Wellness</option>
                        <option value="Dining">Private Dining</option>
                        <option value="Concierge">Concierge</option>
                        <option value="Room Service">Room Service</option>
                        <option value="Fitness">Fitness Center</option>
                        <option value="Transfer">Airport Transfer</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#FFD700] py-2.5 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    We'll respond within 30 minutes
                  </p>
                </form>
              </div>
            </div>
          )}

          {/* Service Pills */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm transition hover:bg-[#FFD700] hover:text-[#2C4549] sm:gap-2 sm:px-4 sm:py-2"
              >
                {renderIcon(service.icon, "h-3 w-3 sm:h-3.5 sm:w-3.5")}
                <span className="text-xs font-medium sm:text-sm">
                  {service.name}
                  {service.popular && <span className="ml-1 text-[#FFD700]">★</span>}
                </span>
              </div>
            ))}
          </div>

          {/* Main CTA Buttons */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.link}
                onMouseEnter={() => button.type === "primary" && setIsHovered(true)}
                onMouseLeave={() => button.type === "primary" && setIsHovered(false)}
                className={`group flex transform items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:px-8 sm:py-3.5 sm:text-base ${button.type === "primary"
                    ? "bg-[#FFD700] text-[#2C4549] shadow-lg hover:bg-[#FFE44D] hover:shadow-xl"
                    : "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  }`}
              >
                {renderIcon(button.icon, "h-4 w-4 sm:h-5 sm:w-5")}
                {button.text}
                {button.type === "primary" && (
                  <FiArrowRight
                    className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""
                      }`}
                    size={16}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
              >
                {renderIcon(highlight.icon, "h-3 w-3 sm:h-4 sm:w-4")}
                <span>{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Special Offer Banner */}
          {offer && (
            <div className="mx-auto mb-10 max-w-2xl">
              <div className="overflow-hidden rounded-xl bg-linear-to-r from-[#FFD700]/20 to-[#FFD700]/5 p-4 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
                  <div>
                    <div className="mb-1 flex items-center justify-center gap-2 sm:justify-start">
                      <FiGift className="h-5 w-5 text-[#FFD700]" />
                      <h4 className="font-bold text-white">{offer.title}</h4>
                    </div>
                    <p className="text-sm text-gray-200">{offer.description}</p>
                    <p className="mt-1 text-xs text-gray-300">Valid until {offer.validUntil}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-[#2C4549] px-2 py-1 text-sm font-bold text-[#FFD700]">
                      {offer.code}
                    </code>
                    <button
                      onClick={copyPromoCode}
                      className="rounded bg-white/20 px-2 py-1 text-xs text-white transition hover:bg-white/30"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Options */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#FFD700]"
            >
              <FiPhone size={14} />
              Call: {contactInfo.phone}
            </a>
            <span className="hidden text-gray-400 sm:block">|</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#FFD700]"
            >
              <FiMail size={14} />
              {contactInfo.email}
            </a>
            <span className="hidden text-gray-400 sm:block">|</span>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-200 transition hover:text-[#FFD700]"
            >
              <FiMessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          {/* Trust Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <FiCheck size={12} className="text-[#FFD700]" />
              <span className="text-xs text-gray-300">
                Trusted by 10,000+ satisfied guests
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesCTA;