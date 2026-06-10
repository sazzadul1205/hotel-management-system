// src/Sections/Contact/ContactForm/ContactForm.jsx
"use client";

// React
import React, { useState } from "react";

// Icons
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiCalendar,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiUsers,
  FiHome,
} from "react-icons/fi";

const ContactForm = ({ content = {} }) => {

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    stayDates: { checkIn: "", checkOut: "" },
    roomType: "",
    guests: 1,
  });

  // Form state
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    title = "Send Us a Message",
    subtitle = "We'd Love to Hear From You",
    description = "Have questions about your stay, need assistance with booking, or want to learn more about our services? Fill out the form below and our team will get back to you shortly.",
    subjects = [
      "General Inquiry",
      "Reservation",
      "Group Booking",
      "Special Event",
      "Feedback",
      "Complaint",
      "Partnership",
      "Other",
    ],
    roomTypes = [
      "Deluxe King Room",
      "Executive Suite",
      "Family Suite",
      "Presidential Suite",
    ],
    contactMethods = [
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
    cta = {
      text: "Send Message",
    },
  } = content;

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (formData.preferredContact === "phone" && !formData.phone) {
      newErrors.phone = "Phone number is required for phone contact";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle date input changes
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      stayDates: { ...prev.stayDates, [name]: value },
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredContact: "email",
        stayDates: { checkIn: "", checkOut: "" },
        roomType: "",
        guests: 1,
      });
    }, 3000);
  };

  // Render form - submitted
  if (isSubmitted) {
    return (
      <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <FiCheck className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[#2C4549]">Message Sent!</h2>
            <p className="mb-4 text-gray-600">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="rounded-lg bg-[#FFD700] px-6 py-2 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white text-black py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
              <FiMessageSquare className="h-4 w-4 text-[#FFD700]" />
              <span className="text-xs font-semibold uppercase text-[#2C4549]">
                {subtitle}
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="text-sm text-gray-600 sm:text-base">{description}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name Field */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-10 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-transparent focus:ring-[#FFD700]"
                      }`}
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <FiAlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-10 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-transparent focus:ring-[#FFD700]"
                      }`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <FiAlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Phone Field */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                  Phone Number
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-10 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-transparent focus:ring-[#FFD700]"
                      }`}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <FiAlertCircle size={12} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${errors.subject
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-transparent focus:ring-[#FFD700]"
                    }`}
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <FiAlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>
            </div>

            {/* Stay Dates (Optional) */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                  Check-in Date
                </label>
                <div className="relative">
                  <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.stayDates.checkIn}
                    onChange={handleDateChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                  Check-out Date
                </label>
                <div className="relative">
                  <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.stayDates.checkOut}
                    onChange={handleDateChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  />
                </div>
              </div>
            </div>

            {/* Room Type & Guests */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                  Preferred Room Type
                </label>
                <div className="relative">
                  <FiHome className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  >
                    <option value="">Select room type</option>
                    {roomTypes.map((room) => (
                      <option key={room} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                  Number of Guests
                </label>
                <div className="relative">
                  <FiUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                Preferred Contact Method
              </label>
              <div className="flex flex-wrap gap-4">
                {contactMethods.map((method) => (
                  <label key={method.value} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method.value}
                      checked={formData.preferredContact === method.value}
                      onChange={handleChange}
                      className="h-4 w-4 text-[#FFD700] focus:ring-[#FFD700]"
                    />
                    <span className="text-sm text-gray-600">{method.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="mb-1 block text-sm font-semibold text-[#2C4549]">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full rounded-lg border px-4 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-transparent focus:ring-[#FFD700]"
                  }`}
                placeholder="Please provide details about your inquiry..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <FiAlertCircle size={12} /> {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-8 py-3 text-base font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#2C4549] border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    {cta.text}
                  </>
                )}
              </button>
            </div>

            {/* Privacy Note */}
            <p className="text-center text-xs text-gray-400">
              By submitting this form, you agree to our privacy policy. We'll never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;