// Component/Home/FAQ/FAQ.jsx
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

const FAQ = () => {
  // Accordion
  const [openIndex, setOpenIndex] = useState(null);

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  // Active category
  const [activeCategory, setActiveCategory] = useState("all");

  // FAQ categories
  const faqCategories = [
    { id: "all", name: "All", icon: FiHelpCircle },
    { id: "booking", name: "Booking", icon: FiCreditCard },
    { id: "policies", name: "Policies", icon: FiShield },
    { id: "amenities", name: "Amenities", icon: FiWifi },
    { id: "services", name: "Services", icon: MdOutlineRoomService },
  ];

  // FAQs
  const faqs = useMemo(() => [
    {
      id: 1,
      category: "booking",
      question: "How do I make a reservation?",
      answer:
        "You can make a reservation through our website by clicking the 'Book Now' button, calling our reservation hotline at +1 (555) 123-4567, or sending an email to reservations@dahotel.com. Online booking is available 24/7 and offers the best rates guaranteed.",
    },
    {
      id: 2,
      category: "booking",
      question: "Do I need to pay a deposit when booking?",
      answer:
        "Yes, we require a 20% deposit at the time of booking to secure your reservation. The remaining balance is due upon check-in. For special packages and peak seasons, full prepayment may be required.",
    },
    {
      id: 3,
      category: "policies",
      question: "What is your cancellation policy?",
      answer:
        "Free cancellation up to 48 hours before check-in. Cancellations within 48 hours will incur a charge equal to the first night's stay. For non-refundable rates, no refunds are provided for cancellations or modifications.",
    },
    {
      id: 4,
      category: "policies",
      question: "What are the check-in and check-out times?",
      answer:
        "Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges. We offer complimentary luggage storage for early arrivals or late departures.",
    },
    {
      id: 5,
      category: "amenities",
      question: "Is WiFi free in the hotel?",
      answer:
        "Yes, we offer complimentary high-speed WiFi throughout the hotel, including all guest rooms, public areas, and the poolside. Premium high-speed internet is also available for business travelers at no additional cost.",
    },
    {
      id: 6,
      category: "amenities",
      question: "Does the hotel have a swimming pool?",
      answer:
        "Yes, we have both indoor and outdoor temperature-controlled swimming pools. The outdoor pool is open from 7 AM to 8 PM, and the indoor pool is open 24/7. Pool towels are provided free of charge.",
    },
    {
      id: 7,
      category: "services",
      question: "Is room service available?",
      answer:
        "Yes, we offer 24/7 room service with a diverse menu featuring local and international cuisine. Breakfast, lunch, dinner, and snacks are available. A service charge may apply for orders between 11 PM and 6 AM.",
    },
    {
      id: 8,
      category: "services",
      question: "Does the hotel offer airport transportation?",
      answer:
        "Yes, we provide airport shuttle service for a nominal fee. Please inform us of your flight details at least 24 hours in advance to arrange pickup. Luxury car transfer can also be arranged upon request.",
    },
    {
      id: 9,
      category: "policies",
      question: "Are pets allowed?",
      answer:
        "Pets are welcome at our hotel! We charge a $50 cleaning fee per stay. Maximum 2 pets per room. Please inform us when booking so we can prepare a pet-friendly room with amenities for your furry friend.",
    },
    {
      id: 10,
      category: "booking",
      question: "Do you offer group booking discounts?",
      answer:
        "Yes, we offer special rates for group bookings of 5 rooms or more. Please contact our group sales department at groups@dahotel.com or call +1 (555) 123-4568 for customized quotes and packages.",
    },
    {
      id: 11,
      category: "amenities",
      question: "Is breakfast included in the room price?",
      answer:
        "Breakfast inclusion depends on the rate plan you choose. Some packages include complimentary breakfast, while others do not. You can add breakfast for $18 per person per day. Children under 12 eat free when accompanied by a paying adult.",
    },
    {
      id: 12,
      category: "services",
      question: "Does the hotel have a fitness center?",
      answer:
        "Yes, our fitness center is open 24/7 and features state-of-the-art equipment including treadmills, ellipticals, stationary bikes, weight machines, and free weights. Personal trainers can be arranged upon request.",
    },
    {
      id: 13,
      category: "policies",
      question: "What is the minimum age to check-in?",
      answer:
        "Guests must be at least 18 years old to check-in. Guests under 18 must be accompanied by an adult. Valid government-issued photo ID and credit card are required at check-in.",
    },
    {
      id: 14,
      category: "booking",
      question: "Can I modify or change my reservation?",
      answer:
        "Yes, you can modify your reservation online through your booking confirmation email, by calling our reservations department, or by email. Modifications are subject to availability and rate changes.",
    },
    {
      id: 15,
      category: "amenities",
      question: "Is parking available?",
      answer:
        "Yes, we offer complimentary on-site parking for all guests. The parking area is secured with 24/7 CCTV surveillance. Valet parking is available for $10 per day.",
    },
  ], []);

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        searchTerm === "" ||
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [faqs, searchTerm, activeCategory]);

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const newLocal = "sm:w-4.5 sm:h-4.5";
  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-3xl text-center">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#FFD700]/10 px-3 sm:px-4 py-1.5 sm:py-2">
            <FiHelpCircle className="text-[#FFD700] w-4 h-4 sm:w-4.5 sm:h-4.5" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#2C4549] uppercase">
              FAQ
            </span>
          </div>

          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549]">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about your stay at DA Hotel
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
              <span className="font-medium">
                {category.name}
              </span>
            </button>
          ))}
        </div>

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
                <FiPhone size={16} className={newLocal} />
                Call Us
              </a>
              <a
                href="mailto:support@dahotel.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-white text-sm sm:text-base transition hover:bg-white/20"
              >
                <FiMail size={16} className="sm:w-4.5 sm:h-4.5" />
                Email Support
              </a>
            </div>
            <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-3">
              <span>📞 +1 (555) 123-4567</span>
              <span className="hidden sm:inline">•</span>
              <span>✉️ support@dahotel.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;