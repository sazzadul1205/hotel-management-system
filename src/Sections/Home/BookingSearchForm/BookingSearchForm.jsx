// src/Component/Home/BookingSearchForm/BookingSearchForm.jsx
"use client";

// React
import React, { useState } from "react";

// Icons
import {
  FiCalendar,
  FiUsers,
  FiMapPin,
  FiSearch,
  FiMail,
  FiClock,
  FiArrowRight,
  FiCheck,
  FiPercent,
} from "react-icons/fi";
import { MdOutlineMeetingRoom, MdOutlineChildCare } from "react-icons/md";

const BookingSearchForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    location: "dhaka",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    rooms: 1,
    promoCode: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);

  // Hotel branch locations
  const locations = [
    { value: "dhaka", label: "Dhaka - Main Branch" },
    { value: "chittagong", label: "Chittagong Branch" },
    { value: "cox-bazar", label: "Cox's Bazar Resort" },
    { value: "sylhet", label: "Sylhet Retreat" },
  ];

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
    if (formData.promoCode.trim()) {
      setPromoApplied(true);
      setTimeout(() => setPromoApplied(false), 3000);
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
      console.log("Booking Search:", formData);
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

  return (
    <section className="bg-linear-to-r from-[#2C4549] to-[#1a2f33] py-8 text-black sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8 md:mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:px-4 sm:py-2">
            <FiCalendar className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#FFD700] uppercase sm:text-sm">
              Book Your Stay
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Find Your Perfect Room
          </h2>
          <p className="text-sm text-gray-300 sm:text-base md:text-lg">
            Best price guaranteed. Book directly for exclusive offers.
          </p>
        </div>

        {/* Booking Form */}
        <div className="mx-auto max-w-5xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl bg-white p-4 shadow-2xl sm:rounded-2xl sm:p-6 md:p-8"
          >
            {/* Location Selection */}
            <div className="mb-4 sm:mb-6">
              <label className="mb-1.5 block text-sm font-semibold text-[#2C4549] sm:mb-2 sm:text-base">
                <FiMapPin className="mr-1.5 inline sm:mr-2" size={16} />
                Select Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              >
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Check-in & Check-out Dates */}
            <div className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:grid-cols-2 sm:gap-6">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#2C4549] sm:mb-2 sm:text-base">
                  <FiCalendar className="mr-1.5 inline sm:mr-2" size={16} />
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={getTodayDate()}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#2C4549] sm:mb-2 sm:text-base">
                  <FiCalendar className="mr-1.5 inline sm:mr-2" size={16} />
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={getMinCheckOut()}
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                />
              </div>
            </div>

            {/* Guests Selection - Adults, Children, Rooms */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:grid-cols-3 sm:gap-6">
              {/* Adults */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#2C4549] sm:mb-2 sm:text-base">
                  <FiUsers className="mr-1.5 inline sm:mr-2" size={16} />
                  Adults
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-gray-300 p-1.5 sm:gap-3 sm:p-2">
                  <button
                    type="button"
                    onClick={() => handleNumberChange("adults", "decrement")}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold transition hover:bg-gray-200 sm:h-8 sm:w-8 sm:text-base"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-sm font-semibold sm:text-base">
                    {formData.adults}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNumberChange("adults", "increment")}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold transition hover:bg-gray-200 sm:h-8 sm:w-8 sm:text-base"
                  >
                    +
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">Age 12+</p>
              </div>

              {/* Children */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#2C4549] sm:mb-2 sm:text-base">
                  <MdOutlineChildCare className="mr-1.5 inline sm:mr-2" size={16} />
                  Children
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-gray-300 p-1.5 sm:gap-3 sm:p-2">
                  <button
                    type="button"
                    onClick={() => handleNumberChange("children", "decrement")}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold transition hover:bg-gray-200 sm:h-8 sm:w-8 sm:text-base"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-sm font-semibold sm:text-base">
                    {formData.children}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNumberChange("children", "increment")}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold transition hover:bg-gray-200 sm:h-8 sm:w-8 sm:text-base"
                  >
                    +
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">Age 3-11</p>
              </div>

              {/* Rooms */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#2C4549] sm:mb-2 sm:text-base">
                  <MdOutlineMeetingRoom className="mr-1.5 inline sm:mr-2" size={16} />
                  Rooms
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-gray-300 p-1.5 sm:gap-3 sm:p-2">
                  <button
                    type="button"
                    onClick={() => handleNumberChange("rooms", "decrement")}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold transition hover:bg-gray-200 sm:h-8 sm:w-8 sm:text-base"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center text-sm font-semibold sm:text-base">
                    {formData.rooms}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNumberChange("rooms", "increment")}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold transition hover:bg-gray-200 sm:h-8 sm:w-8 sm:text-base"
                  >
                    +
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">Max 4 per room</p>
              </div>
            </div>

            {/* Special Requests - Optional */}
            <div className="mb-4 sm:mb-6">
              <label className="mb-1.5 block text-sm font-semibold text-[#2C4549] sm:mb-2 sm:text-base">
                <FiClock className="mr-1.5 inline sm:mr-2" size={16} />
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequest"
                rows="2"
                placeholder="e.g., Need extra pillows, late check-in, etc."
                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              ></textarea>
            </div>

            {/* Promo Code */}
            <div className="mb-6 sm:mb-8">
              <label className="mb-1.5 block text-sm font-semibold text-[#2C4549] sm:mb-2 sm:text-base">
                <FiPercent className="mr-1.5 inline sm:mr-2" size={16} />
                Promo Code
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleChange}
                    placeholder="Enter promo code"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                  />
                  {promoApplied && (
                    <span className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 text-xs text-green-500">
                      <FiCheck size={14} />
                      Applied!
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="w-full rounded-lg border border-[#FFD700] px-4 py-2.5 text-sm font-semibold text-[#FFD700] transition hover:bg-[#FFD700] hover:text-[#2C4549] sm:w-auto sm:px-6 sm:py-3 sm:text-base"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full transform items-center justify-center gap-2 rounded-lg bg-[#FFD700] py-3 text-base font-bold text-[#2C4549] shadow-lg shadow-[#FFD700]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[#FFE44D] disabled:cursor-not-allowed disabled:opacity-50 sm:gap-3 sm:py-4 sm:text-lg sm:hover:scale-105"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#2C4549] border-t-transparent sm:h-5 sm:w-5"></div>
                  Searching...
                </>
              ) : (
                <>
                  <FiSearch size={18} className="sm:h-5 sm:w-5" />
                  Check Availability
                  <FiArrowRight size={16} className="sm:h-4.5 sm:w-4.5" />
                </>
              )}
            </button>

            {/* Trust Badges */}
            <div className="mt-4 border-t border-gray-200 pt-4 sm:mt-6 sm:pt-6">
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 sm:grid-cols-4 sm:gap-4">
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <FiCheck className="h-3 w-3 text-green-500" />
                  <span className="hidden sm:inline">Best Price Guarantee</span>
                  <span className="sm:hidden">Best Price</span>
                </span>
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <FiCheck className="h-3 w-3 text-green-500" />
                  <span className="hidden sm:inline">Free Cancellation</span>
                  <span className="sm:hidden">Free Cancel</span>
                </span>
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <FiCheck className="h-3 w-3 text-green-500" />
                  <span className="hidden sm:inline">No Booking Fees</span>
                  <span className="sm:hidden">No Fees</span>
                </span>
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <FiCheck className="h-3 w-3 text-green-500" />
                  <span className="hidden sm:inline">Secure Payments</span>
                  <span className="sm:hidden">Secure</span>
                </span>
              </div>
            </div>
          </form>
        </div>

        {/* Success Toast Notification */}
        {showSuccess && (
          <div className="animate-slide-up fixed right-4 bottom-4 left-4 z-50 flex items-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm text-white shadow-lg sm:right-4 sm:left-auto sm:px-6 sm:text-base">
            <FiCheck size={20} />
            <span>Checking availability... We&apos;ll contact you soon!</span>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slideUp 0.3s ease-out; }
      `}</style>
    </section>
  );
};

export default BookingSearchForm;
