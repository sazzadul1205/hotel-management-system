// src/Component/Home/BookingSearchForm/BookingSearchForm.jsx
"use client"

// React
import React, { useState } from 'react';

// Icons
import {
  FiCalendar,
  FiUsers,
  FiMapPin,
  FiSearch,
  FiUser,
  FiMail,
  FiPhone,
  FiClock,
  FiArrowRight,
  FiX,
  FiCheck
} from 'react-icons/fi';
import { MdOutlineMeetingRoom, MdOutlineChildCare } from 'react-icons/md';

const BookingSearchForm = () => {
  const [formData, setFormData] = useState({
    location: 'dhaka',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    rooms: 1
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const locations = [
    { value: 'dhaka', label: 'Dhaka - Main Branch' },
    { value: 'chittagong', label: 'Chittagong Branch' },
    { value: 'cox-bazar', label: 'Cox\'s Bazar Resort' },
    { value: 'sylhet', label: 'Sylhet Retreat' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (name, operation) => {
    setFormData(prev => ({
      ...prev,
      [name]: operation === 'increment' ? prev[name] + 1 : Math.max(0, prev[name] - 1)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      console.log('Booking Search:', formData);
    }, 1500);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMinCheckOut = () => {
    if (formData.checkIn) {
      return formData.checkIn;
    }
    return getTodayDate();
  };

  return (
    <section className="py-16 bg-linear-to-r from-[#2C4549] to-[#1a2f33]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-black">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-4">
            <FiCalendar className="text-[#FFD700]" size={18} />
            <span className="text-[#FFD700] font-semibold text-sm uppercase tracking-wide">
              Book Your Stay
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Your Perfect Room
          </h2>

          <p className="text-gray-300 text-lg">
            Best price guaranteed. Book directly for exclusive offers.
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {/* Location */}
            <div className="mb-6">
              <label className="block text-[#2C4549] font-semibold mb-2 items-center gap-2">
                <FiMapPin size={18} />
                Select Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition"
              >
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>{loc.label}</option>
                ))}
              </select>
            </div>

            {/* Dates Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#2C4549] font-semibold mb-2 items-center gap-2">
                  <FiCalendar size={18} />
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={getTodayDate()}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-[#2C4549] font-semibold mb-2 items-center gap-2">
                  <FiCalendar size={18} />
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={getMinCheckOut()}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Guests Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Adults */}
              <div>
                <label className="block text-[#2C4549] font-semibold mb-2 items-center gap-2">
                  <FiUsers size={18} />
                  Adults
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-2">
                  <button
                    type="button"
                    onClick={() => handleNumberChange('adults', 'decrement')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-[#2C4549] transition"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-semibold">{formData.adults}</span>
                  <button
                    type="button"
                    onClick={() => handleNumberChange('adults', 'increment')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-[#2C4549] transition"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Age 12+</p>
              </div>

              {/* Children */}
              <div>
                <label className="block text-[#2C4549] font-semibold mb-2 items-center gap-2">
                  <MdOutlineChildCare size={18} />
                  Children
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-2">
                  <button
                    type="button"
                    onClick={() => handleNumberChange('children', 'decrement')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-[#2C4549] transition"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-semibold">{formData.children}</span>
                  <button
                    type="button"
                    onClick={() => handleNumberChange('children', 'increment')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-[#2C4549] transition"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Age 3-11</p>
              </div>

              {/* Rooms */}
              <div>
                <label className="block text-[#2C4549] font-semibold mb-2 items-center gap-2">
                  <MdOutlineMeetingRoom size={18} />
                  Rooms
                </label>
                <div className="flex items-center gap-3 border border-gray-300 rounded-lg p-2">
                  <button
                    type="button"
                    onClick={() => handleNumberChange('rooms', 'decrement')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-[#2C4549] transition"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-semibold">{formData.rooms}</span>
                  <button
                    type="button"
                    onClick={() => handleNumberChange('rooms', 'increment')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-[#2C4549] transition"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Maximum 4 per room</p>
              </div>
            </div>

            {/* Special Request (Optional) */}
            <div className="mb-6">
              <label className="block text-[#2C4549] font-semibold mb-2 items-center gap-2">
                <FiClock size={18} />
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequest"
                rows="2"
                placeholder="e.g., Need extra pillows, late check-in, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* Promo Code */}
            <div className="mb-8">
              <label className="block text-[#2C4549] font-semibold mb-2 items-center gap-2">
                <FiMail size={18} />
                Promo Code
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition"
                />
                <button
                  type="button"
                  className="px-6 py-3 border border-[#FFD700] text-[#FFD700] rounded-lg font-semibold hover:bg-[#FFD700] hover:text-[#2C4549] transition"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FFD700] text-[#2C4549] py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#FFE44D] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#2C4549] border-t-transparent rounded-full animate-spin"></div>
                  Searching...
                </>
              ) : (
                <>
                  <FiSearch size={20} />
                  Check Availability
                  <FiArrowRight size={18} />
                </>
              )}
            </button>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
                <span className="flex items-center gap-1">✓ Best Price Guarantee</span>
                <span className="flex items-center gap-1">✓ Free Cancellation</span>
                <span className="flex items-center gap-1">✓ No Booking Fees</span>
                <span className="flex items-center gap-1">✓ Secure Payments</span>
              </div>
            </div>
          </form>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-up z-50">
            <FiCheck size={20} />
            <span>Checking availability... We&apos;ll contact you soon!</span>
          </div>
        )}
      </div>

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

export default BookingSearchForm;