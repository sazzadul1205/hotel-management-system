// src/Sections/Rooms/BookingCard/BookingCard.jsx
"use client";

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  FiCalendar,
  FiUsers,
  FiClock,
  FiCheck,
  FiCreditCard,
  FiShield,
  FiGift,
  FiHeart,
  FiShare2,
  FiInfo,
  FiArrowRight,
  FiPercent,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { MdOutlineMeetingRoom, MdOutlineChildCare } from "react-icons/md";

const BookingCard = ({ content = {}, room = null }) => {
  // Form state
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    rooms: 1,
    promoCode: "",
    specialRequest: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Destructure content with fallbacks
  const {
    title = "Book Your Stay",
    subtitle = "Best Price Guaranteed",
    description = "Secure your room with our easy booking process. Best rates available only on our website.",
    roomRates = {
      "Deluxe King Room": 129,
      "Executive Suite": 199,
      "Family Suite": 249,
    },
    taxRate = 0.12,
    amenities = [
      { name: "Free WiFi", icon: "wifi" },
      { name: "Breakfast Included", icon: "breakfast" },
      { name: "Free Cancellation", icon: "cancellation" },
      { name: "Best Price", icon: "price" },
    ],
    promoCode = {
      code: "WELCOME10",
      discount: 10,
      type: "percentage", // or "fixed"
    },
    cta = {
      text: "Confirm Booking",
    },
  } = content;

  // Get current room price
  const currentRoomPrice = room ? roomRates[room.name] || room.price || 129 : 129;

  // ✅ FIX: Calculate derived state during rendering (no Effect needed!)
  const priceDetails = useMemo(() => {
    // Calculate number of nights
    let nights = 0;
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const diffTime = Math.abs(checkOutDate - checkInDate);
      nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      nights = nights > 0 ? nights : 1;
    }

    const subtotal = currentRoomPrice * nights * formData.rooms;
    const tax = subtotal * taxRate;
    let discount = 0;

    if (promoApplied) {
      if (promoCode.type === "percentage") {
        discount = (subtotal * promoCode.discount) / 100;
      } else {
        discount = promoCode.discount;
      }
    }

    const total = subtotal + tax - discount;

    return {
      nightlyRate: currentRoomPrice,
      nights,
      subtotal,
      tax,
      discount,
      total: total > 0 ? total : 0,
    };
  }, [formData.checkIn, formData.checkOut, formData.rooms, currentRoomPrice, taxRate, promoApplied, promoCode]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle number increment/decrement
  const handleNumberChange = (name, operation) => {
    setFormData((prev) => ({
      ...prev,
      [name]:
        operation === "increment"
          ? prev[name] + 1
          : Math.max(name === "adults" ? 1 : 0, prev[name] - 1),
    }));
  };

  // Handle promo code application
  const handleApplyPromo = () => {
    if (formData.promoCode.trim().toUpperCase() === promoCode.code) {
      setPromoApplied(true);
      setTimeout(() => setPromoApplied(false), 3000);
    } else {
      alert("Invalid promo code. Please try WELCOME10");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      console.log("Booking Details:", { ...formData, priceDetails });
    }, 1500);
  };

  // Get today's date for min date attribute
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Check-out date must be after check-in
  const getMinCheckOut = () => {
    if (formData.checkIn) return formData.checkIn;
    return getTodayDate();
  };

  // Helper to render icons
  const renderIcon = (iconName, className = "h-4 w-4") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "wifi":
        return <FiCheck className={iconClass} />;
      case "breakfast":
        return <FiCheck className={iconClass} />;
      case "cancellation":
        return <FiCheck className={iconClass} />;
      case "price":
        return <FiCheck className={iconClass} />;
      default:
        return <FiCheck className={iconClass} />;
    }
  };

  return (
    <div className="sticky top-8">
      {/* Booking Card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
        {/* Card Header */}
        <div className="bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-5 text-white sm:p-6">
          <h3 className="mb-1 text-xl font-bold sm:text-2xl">{title}</h3>
          <p className="text-sm text-gray-300">{subtitle}</p>
          {room && (
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#FFD700]">${currentRoomPrice}</span>
              <span className="text-sm text-gray-300">/night</span>
            </div>
          )}
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6">
          {/* Check-in & Check-out Dates */}
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#2C4549] sm:text-sm">
                <FiCalendar className="mr-1 inline" size={14} />
                Check-in
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={getTodayDate()}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[#2C4549] sm:text-sm">
                <FiCalendar className="mr-1 inline" size={14} />
                Check-out
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={getMinCheckOut()}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
              />
            </div>
          </div>

          {/* Guests Selection */}
          <div className="mb-4 grid grid-cols-3 gap-2">
            {/* Adults */}
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                <FiUsers className="mr-1 inline" size={12} />
                Adults
              </label>
              <div className="flex items-center rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={() => handleNumberChange("adults", "decrement")}
                  className="px-2 py-1 text-sm font-bold transition hover:bg-gray-100"
                >
                  -
                </button>
                <span className="flex-1 text-center text-sm">{formData.adults}</span>
                <button
                  type="button"
                  onClick={() => handleNumberChange("adults", "increment")}
                  className="px-2 py-1 text-sm font-bold transition hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                <MdOutlineChildCare className="mr-1 inline" size={12} />
                Children
              </label>
              <div className="flex items-center rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={() => handleNumberChange("children", "decrement")}
                  className="px-2 py-1 text-sm font-bold transition hover:bg-gray-100"
                >
                  -
                </button>
                <span className="flex-1 text-center text-sm">{formData.children}</span>
                <button
                  type="button"
                  onClick={() => handleNumberChange("children", "increment")}
                  className="px-2 py-1 text-sm font-bold transition hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Rooms */}
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#2C4549]">
                <MdOutlineMeetingRoom className="mr-1 inline" size={12} />
                Rooms
              </label>
              <div className="flex items-center rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={() => handleNumberChange("rooms", "decrement")}
                  className="px-2 py-1 text-sm font-bold transition hover:bg-gray-100"
                >
                  -
                </button>
                <span className="flex-1 text-center text-sm">{formData.rooms}</span>
                <button
                  type="button"
                  onClick={() => handleNumberChange("rooms", "increment")}
                  className="px-2 py-1 text-sm font-bold transition hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Promo Code */}
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-semibold text-[#2C4549] sm:text-sm">
              <FiPercent className="mr-1 inline" size={14} />
              Promo Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="promoCode"
                value={formData.promoCode}
                onChange={handleChange}
                placeholder="Enter promo code"
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
              />
              <button
                type="button"
                onClick={handleApplyPromo}
                className="rounded-lg border border-[#FFD700] px-4 py-2 text-sm font-semibold text-[#FFD700] transition hover:bg-[#FFD700] hover:text-[#2C4549]"
              >
                Apply
              </button>
            </div>
            {promoApplied && (
              <p className="mt-1 text-xs text-green-500">
                <FiCheck className="mr-1 inline" size={12} />
                Promo code applied! {promoCode.discount}% off
              </p>
            )}
          </div>

          {/* Price Breakdown - Now derived from useMemo, no Effect! */}
          {priceDetails.nights > 0 && (
            <div className="mb-4 rounded-lg bg-gray-50 p-3">
              <h4 className="mb-2 text-sm font-bold text-[#2C4549]">Price Details</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    ${priceDetails.nightlyRate} x {priceDetails.nights} nights x {formData.rooms} room(s)
                  </span>
                  <span className="font-semibold">${priceDetails.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & fees</span>
                  <span className="font-semibold">${priceDetails.tax.toFixed(2)}</span>
                </div>
                {priceDetails.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${priceDetails.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t pt-1 font-bold text-[#2C4549]">
                  <span>Total</span>
                  <span className="text-[#FFD700]">${priceDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !formData.checkIn || !formData.checkOut}
            className="flex w-full transform items-center justify-center gap-2 rounded-lg bg-[#FFD700] py-3 text-sm font-bold text-[#2C4549] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#2C4549] border-t-transparent"></div>
                Processing...
              </>
            ) : (
              <>
                <FiCreditCard size={16} />
                {cta.text}
                <FiArrowRight size={14} />
              </>
            )}
          </button>

          {/* Amenities */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {amenities.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5 text-xs text-gray-500">
                <FiCheck className="text-green-500" size={12} />
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-4 border-t border-gray-100 pt-4 text-center">
            <p className="text-xs text-gray-400">
              <FiShield className="mr-1 inline" size={12} />
              Secure booking. No hidden fees.
            </p>
          </div>
        </form>
      </div>

      {/* Need Help Card */}
      <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-center">
        <h4 className="mb-2 text-sm font-semibold text-[#2C4549]">Need Help?</h4>
        <p className="mb-2 text-xs text-gray-500">Our team is available 24/7</p>
        <div className="flex justify-center gap-3 text-xs">
          <a href="tel:+15551234567" className="flex items-center gap-1 text-[#FFD700] hover:underline">
            <FiPhone size={12} />
            Call Us
          </a>
          <span className="text-gray-300">|</span>
          <a href="mailto:reservations@dahotel.com" className="flex items-center gap-1 text-[#FFD700] hover:underline">
            <FiMail size={12} />
            Email
          </a>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform animate-slide-up">
          <div className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg">
            <FiCheck size={16} />
            <span className="text-sm">Booking confirmed! Check your email.</span>
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
    </div>
  );
};

export default BookingCard;