// src/Sections/Contact/ContactCTA/ContactCTA.jsx
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
  FiGift,
  FiStar,
  FiSend,
} from "react-icons/fi";
import { MdOutlineSpa } from "react-icons/md";
import { FaCrown, FaWhatsapp, FaTripadvisor } from "react-icons/fa";

const ContactCTA = ({ content = {} }) => {

  // State
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", });

  const {
    title = "Ready to Experience DA Hotel?",
    subtitle = "Let's Make It Happen",
    description = "Whether you're planning a stay, have questions about our services, or want to discuss a special event, our team is ready to assist you.",
    highlights = [
      { icon: "crown", text: "Luxury Experience" },
      { icon: "clock", text: "24/7 Support" },
      { icon: "users", text: "Personalized Service" },
      { icon: "award", text: "Award-Winning" },
    ],
    buttons = [
      {
        text: "Book Your Stay",
        link: "/booking",
        type: "primary",
        icon: "calendar",
      },
      {
        text: "Contact Us",
        link: "/contact",
        type: "secondary",
        icon: "phone",
      },
    ],
    contactInfo = {
      phone: "+1 (555) 123-4567",
      email: "info@dahotel.com",
      whatsapp: "+1 (555) 123-4567",
    },
    stats = [
      { value: "5000+", label: "Happy Guests", icon: "users" },
      { value: "98%", label: "Satisfaction Rate", icon: "star" },
      { value: "24/7", label: "Support Available", icon: "clock" },
    ],
    offer = {
      title: "Direct Booking Offer",
      description: "Book directly on our website and save 15% on your stay",
      code: "DIRECT15",
      validUntil: "December 31, 2024",
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
      case "star":
        return <FiStar className={iconClass} />;
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
    alert(`Thank you ${formData.name}! We'll get back to you shortly.`);
    setShowQuickForm(false);
    setFormData({ name: "", email: "", message: "" });
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
        <FaCrown size={60} className="text-[#FFD700]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <MdOutlineSpa size={60} className="text-[#FFD700]" />
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

          {/* Quick Contact Form Toggle */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={() => setShowQuickForm(!showQuickForm)}
              className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <FiSend size={16} />
              {showQuickForm ? "Hide Quick Message" : "Send Quick Message"}
              <FiArrowRight size={14} className={`transition-transform ${showQuickForm ? "rotate-90" : ""}`} />
            </button>
          </div>

          {/* Quick Message Form */}
          {showQuickForm && (
            <div className="mx-auto mb-10 max-w-2xl animate-fade-in-up">
              <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">
                <h3 className="mb-4 text-center text-lg font-bold text-[#2C4549]">
                  Send Us a Quick Message
                </h3>
                <form onSubmit={handleQuickSubmit} className="space-y-4">
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
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
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
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-[#FFD700]"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#FFD700] py-2.5 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                  >
                    Send Message
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    We'll respond within 30 minutes
                  </p>
                </form>
              </div>
            </div>
          )}

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

          {/* Highlights Grid */}
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

          {/* Stats */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1 text-xl font-bold text-[#FFD700] sm:text-2xl">
                  {renderIcon(stat.icon, "h-4 w-4 sm:h-5 sm:w-5")}
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact Options */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-6">
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
              <FaWhatsapp size={14} />
              WhatsApp
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <FiCheck size={12} className="text-[#FFD700]" />
              <span className="text-xs text-gray-300">Best Price Guarantee</span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <FiCheck size={12} className="text-[#FFD700]" />
              <span className="text-xs text-gray-300">Free Cancellation</span>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
              <FiCheck size={12} className="text-[#FFD700]" />
              <span className="text-xs text-gray-300">Secure Booking</span>
            </div>
          </div>

          {/* Review Badge */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaTripadvisor key={i} className="h-4 w-4 text-[#FFD700]" />
              ))}
            </div>
            <span className="text-xs text-gray-300">Rated 4.9/5 on TripAdvisor</span>
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

export default ContactCTA;