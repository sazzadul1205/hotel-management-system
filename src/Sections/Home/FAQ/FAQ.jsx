// src/Sections/Home/FAQ/FAQ.jsx
"use client";

// React
import React, { useState, useMemo } from "react";

// Next
import Link from "next/link";

// Icons
import {
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiCreditCard,
  FiWifi,
  FiShield,
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";
import { MdOutlineRoomService } from "react-icons/md";

const FAQ = ({ data }) => {
  // Extract data with fallbacks
  const {
    head = {},
    faqs = [],
    buttons = [],
    information = {},
  } = data || {};

  // Accordion
  const [openIndex, setOpenIndex] = useState(null);

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories from FAQs
  const faqCategories = useMemo(() => {
    const categories = new Set();
    categories.add("all");
    faqs.forEach(faq => {
      if (faq.category) categories.add(faq.category);
    });

    // Map category IDs to display names and icons
    const categoryMap = {
      all: { name: "All", icon: FiHelpCircle },
      booking: { name: "Booking", icon: FiCreditCard },
      policies: { name: "Policies", icon: FiShield },
      amenities: { name: "Amenities", icon: FiWifi },
      services: { name: "Services", icon: MdOutlineRoomService },
    };

    return Array.from(categories).map(cat => ({
      id: cat,
      name: categoryMap[cat]?.name || cat.charAt(0).toUpperCase() + cat.slice(1),
      icon: categoryMap[cat]?.icon || FiHelpCircle,
    }));
  }, [faqs]);

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        searchTerm === "" ||
        faq.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [faqs, searchTerm, activeCategory]);

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Get button styling based on button title
  const getButtonStyle = (title) => {
    if (title === "Live Chat") {
      return "bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D]";
    }
    return "bg-white/10 text-white hover:bg-white/20";
  };

  // Get button icon based on button title
  const getButtonIcon = (title) => {
    if (title === "Live Chat") return <FiMessageCircle size={16} className="sm:w-4.5 sm:h-4.5" />;
    if (title === "Call Us") return <FiPhone size={16} className="sm:w-4.5 sm:h-4.5" />;
    if (title === "Email Support") return <FiMail size={16} className="sm:w-4.5 sm:h-4.5" />;
    return null;
  };

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-3xl text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#FFD700]/10 px-3 sm:px-4 py-1.5 sm:py-2">
            <FiHelpCircle className="text-[#FFD700] w-4 h-4 sm:w-4.5 sm:h-4.5" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#2C4549] uppercase">
              {head.title || "FAQ"}
            </span>
          </div>

          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549]">
            {head.subtitle || "Frequently Asked Questions"}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {head.description || "Find answers to common questions about your stay at DA Hotel"}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-6 sm:mb-8 max-w-2xl">
          <div className="relative">
            <FiSearch
              className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 transform text-gray-400 w-4 h-4 sm:w-5 sm:h-5"
            />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg sm:rounded-xl border border-gray-200 py-2.5 sm:py-3 pr-4 pl-9 sm:pl-12 text-sm sm:text-base text-black transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        {faqCategories.length > 1 && (
          <div className="mb-6 sm:mb-8 md:mb-10 flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 text-xs sm:text-sm ${activeCategory === category.id
                    ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                    : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                <category.icon size={14} className="sm:w-4 sm:h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* FAQs List */}
        <div className="mx-auto max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="py-8 sm:py-12 text-center">
              <FiHelpCircle size={40} className="mx-auto mb-3 sm:mb-4 text-gray-300 sm:w-12 sm:h-12" />
              <p className="text-gray-500 text-sm sm:text-base">
                No questions found. Please try a different search term.
              </p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-lg sm:rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left transition-colors duration-200 hover:bg-gray-50"
                  >
                    <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                      <div className="mt-1 shrink-0">
                        <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#FFD700]/10">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></div>
                        </div>
                      </div>
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-[#2C4549] pr-2">
                        {faq.question}
                      </span>
                    </div>
                    <div className="ml-2 sm:ml-4 shrink-0">
                      {openIndex === faq.id ? (
                        <FiChevronUp className="text-[#FFD700] w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <FiChevronDown className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                  </button>

                  {openIndex === faq.id && (
                    <div className="border-t border-gray-100 px-4 sm:px-6 pt-0 pb-3 sm:pb-4">
                      <div className="flex gap-2 sm:gap-3">
                        <div className="w-4 sm:w-5 shrink-0"></div>
                        <div className="flex-1">
                          <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Still Have Questions */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="mx-auto max-w-5xl rounded-xl sm:rounded-2xl bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-6 sm:p-8">
            <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-white">
              Still Have Questions?
            </h3>
            <p className="mb-4 sm:mb-6 text-gray-300 text-sm sm:text-base">
              Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              {buttons.length > 0 ? (
                buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.link || "/contact"}
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-base transition shadow-md hover:shadow-lg ${getButtonStyle(button.title)}`}
                  >
                    {getButtonIcon(button.title)}
                    {button.title}
                  </Link>
                ))
              ) : (
                <>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-[#2C4549] text-sm sm:text-base transition hover:bg-[#FFE44D] shadow-md hover:shadow-lg"
                  >
                    <FiMessageCircle size={16} className="sm:w-4.5 sm:h-4.5" />
                    Live Chat
                  </Link>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-white text-sm sm:text-base transition hover:bg-white/20"
                  >
                    <FiPhone size={16} className="sm:w-4.5 sm:h-4.5" />
                    Call Us
                  </a>
                  <a
                    href="mailto:support@dahotel.com"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-white text-sm sm:text-base transition hover:bg-white/20"
                  >
                    <FiMail size={16} className="sm:w-4.5 sm:h-4.5" />
                    Email Support
                  </a>
                </>
              )}
            </div>
            {information && (information.phone || information.email) && (
              <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-3">
                {information.phone && (
                  <>
                    <span>📞 {information.phone}</span>
                    {information.email && <span className="hidden sm:inline">•</span>}
                  </>
                )}
                {information.email && <span>✉️ {information.email}</span>}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;