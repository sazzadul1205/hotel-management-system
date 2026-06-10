// src/Sections/Services/HowItWorks/HowItWorks.jsx
"use client";

// State
import React, { useState } from "react";

// Next
import Link from "next/link";

// Icons
import {
  FiSearch,
  FiCalendar,
  FiCreditCard,
  FiCheck,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";
import { FaCrown, } from "react-icons/fa";

const HowItWorks = ({ content = {} }) => {

  // State
  const [activeStep, setActiveStep] = useState(1);

  const {
    title = "How It Works",
    subtitle = "Simple & Easy Process",
    description = "Booking our premium services is quick and hassle-free. Follow these simple steps to elevate your stay.",
    steps = [
      {
        id: 1,
        number: "01",
        title: "Browse & Select",
        description: "Explore our premium services and choose what suits your needs.",
        longDescription: "Browse through our comprehensive list of premium services. From spa treatments to private dining experiences, find exactly what you're looking for.",
        icon: "search",
        color: "from-blue-500 to-blue-600",
        tips: ["Read service descriptions carefully", "Check availability", "Compare packages"],
      },
      {
        id: 2,
        number: "02",
        title: "Choose Date & Time",
        description: "Select your preferred date and time for the service.",
        longDescription: "Use our calendar to pick the perfect time for your chosen service. We offer flexible scheduling to accommodate your itinerary.",
        icon: "calendar",
        color: "from-purple-500 to-purple-600",
        tips: ["Book in advance for popular services", "Consider early morning slots", "Check special event dates"],
      },
      {
        id: 3,
        number: "03",
        title: "Make Payment",
        description: "Secure payment with multiple options available.",
        longDescription: "Complete your booking with our secure payment system. We accept all major credit cards, digital wallets, and hotel charges.",
        icon: "payment",
        color: "from-green-500 to-green-600",
        tips: ["Use promo codes for discounts", "Save payment method for faster booking", "Check for package deals"],
      },
      {
        id: 4,
        number: "04",
        title: "Enjoy Your Experience",
        description: "Relax and let us take care of everything.",
        longDescription: "Our team will handle all the details. Just show up and enjoy your premium experience.",
        icon: "enjoy",
        color: "from-[#FFD700] to-[#FFA500]",
        tips: ["Arrive 10 minutes early", "Bring your confirmation", "Let us know special requests"],
      },
    ],
    faqs = [
      {
        question: "How do I book a service?",
        answer: "You can book any service through our website, mobile app, or by contacting our concierge desk directly.",
      },
      {
        question: "Can I cancel or reschedule?",
        answer: "Yes, free cancellation is available up to 24 hours before your scheduled service.",
      },
      {
        question: "Are there any hidden fees?",
        answer: "No, all prices are transparent and include all applicable taxes and service charges.",
      },
      {
        question: "Do I need to be a hotel guest?",
        answer: "Most services are exclusive to hotel guests. Some premium services may be available to outside guests.",
      },
    ],
    cta = {
      text: "Start Booking Now",
      link: "/booking",
    },
    contact = {
      phone: "+1 (555) 123-4567",
      email: "concierge@dahotel.com",
    },
  } = content;

  // Function to render icons
  const renderIcon = (iconName, className = "h-6 w-6") => {
    const iconClass = `text-white ${className}`;
    switch (iconName) {
      case "search":
        return <FiSearch className={iconClass} />;
      case "calendar":
        return <FiCalendar className={iconClass} />;
      case "payment":
        return <FiCreditCard className={iconClass} />;
      case "enjoy":
        return <FaCrown className={iconClass} />;
      default:
        return <FiSearch className={iconClass} />;
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FiSearch className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mb-12 max-w-6xl">
          {/* Desktop Steps */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-0 right-0 top-20 h-0.5 bg-gray-200"></div>
              <div className="relative grid grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className="group relative cursor-pointer text-center"
                    onClick={() => setActiveStep(step.id)}
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:scale-110">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r ${step.color}`}>
                        {renderIcon(step.icon, "h-8 w-8")}
                      </div>
                    </div>

                    {/* Step Content */}
                    <h3 className="mb-2 text-lg font-bold text-[#2C4549]">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.description}</p>

                    {/* Active Indicator */}
                    {activeStep === step.id && (
                      <div className="mt-3 animate-pulse text-xs font-semibold text-[#FFD700]">
                        Selected
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Steps Carousel */}
          <div className="block md:hidden">
            <div className="relative">
              <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="w-full shrink-0 snap-center px-4"
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r ${step.color}`}>
                          {renderIcon(step.icon, "h-8 w-8")}
                        </div>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-[#2C4549]">{step.title}</h3>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    className={`h-2 rounded-full transition-all ${idx === 0 ? "w-6 bg-[#FFD700]" : "w-2 bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Active Step Details */}
          <div className="mt-8 rounded-2xl bg-gray-50 p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r ${steps[activeStep - 1]?.color}`}>
                    {renderIcon(steps[activeStep - 1]?.icon, "h-5 w-5")}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C4549]">
                    Step {activeStep}: {steps[activeStep - 1]?.title}
                  </h3>
                </div>
                <p className="mb-4 text-gray-600">
                  {steps[activeStep - 1]?.longDescription}
                </p>
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-[#2C4549]">Tips:</h4>
                  <ul className="space-y-1">
                    {steps[activeStep - 1]?.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <FiCheck className="text-green-500" size={14} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="shrink-0 md:w-64">
                <div className="rounded-xl bg-[#FFD700]/10 p-4 text-center">
                  <p className="text-sm text-gray-600">Need help?</p>
                  <a href={`tel:${contact.phone}`} className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[#FFD700]">
                    <FiPhone size={14} />
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mx-auto mb-12 max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FFD700]">24/7</div>
              <p className="text-xs text-gray-500">Booking Available</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FFD700]">100%</div>
              <p className="text-xs text-gray-500">Secure Payment</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FFD700]">24h</div>
              <p className="text-xs text-gray-500">Free Cancellation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FFD700]">5★</div>
              <p className="text-xs text-gray-500">Service Guarantee</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mb-12 max-w-4xl">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:text-2xl">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl bg-gray-50 p-4 transition hover:shadow-md">
                <h4 className="mb-2 font-semibold text-[#2C4549]">{faq.question}</h4>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-2xl text-center">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <FiCalendar size={16} />
            {cta.text}
            <FiArrowRight size={14} />
          </Link>
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <FiCheck size={12} className="text-green-500" />
              Instant Confirmation
            </span>
            <span className="flex items-center gap-1">
              <FiCheck size={12} className="text-green-500" />
              No Hidden Fees
            </span>
            <span className="flex items-center gap-1">
              <FiCheck size={12} className="text-green-500" />
              Secure Booking
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;