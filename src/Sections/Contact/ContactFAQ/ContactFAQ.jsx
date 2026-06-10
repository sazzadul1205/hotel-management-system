// src/Sections/Contact/ContactFAQ/ContactFAQ.jsx
"use client";

// React
import React, { useState } from "react";

// Icons
import {
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiCreditCard,
  FiShield,
  FiWifi,
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiSearch,
  FiStar,
} from "react-icons/fi";
import { MdOutlineRoomService } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";

const ContactFAQ = ({ content = {} }) => {

  // Open index
  const [openIndex, setOpenIndex] = useState(null);

  // Search term
  const [searchTerm, setSearchTerm] = useState("");

  // Active category
  const [activeCategory, setActiveCategory] = useState("all");

  const {
    title = "Frequently Asked Questions",
    subtitle = "Got Questions? We've Got Answers",
    description = "Find quick answers to common questions about our hotel, services, and policies. Can't find what you're looking for? Contact us directly.",
    categories = [
      { id: "all", name: "All Questions", icon: FiHelpCircle },
      { id: "booking", name: "Booking", icon: FiCreditCard },
      { id: "policies", name: "Policies", icon: FiShield },
      { id: "amenities", name: "Amenities", icon: FiWifi },
      { id: "services", name: "Services", icon: MdOutlineRoomService },
      { id: "dining", name: "Dining", icon: GiKnifeFork },
    ],
    faqs = [
      // Booking FAQs
      {
        id: 1,
        category: "booking",
        question: "How do I make a reservation?",
        answer: "You can make a reservation through our website by clicking the 'Book Now' button, calling our reservation hotline at +1 (555) 123-4567, or sending an email to reservations@dahotel.com. Online booking is available 24/7 and offers the best rates guaranteed.",
        helpful: true,
      },
      {
        id: 2,
        category: "booking",
        question: "Do I need to pay a deposit when booking?",
        answer: "Yes, we require a 20% deposit at the time of booking to secure your reservation. The remaining balance is due upon check-in. For special packages and peak seasons, full prepayment may be required.",
        helpful: true,
      },
      {
        id: 3,
        category: "booking",
        question: "Can I modify or cancel my reservation?",
        answer: "Yes, you can modify or cancel your reservation online through your booking confirmation email, by calling our reservations department, or by email. Free cancellation is available up to 48 hours before check-in.",
        helpful: true,
      },
      {
        id: 4,
        category: "booking",
        question: "Do you offer group booking discounts?",
        answer: "Yes, we offer special rates for group bookings of 5 rooms or more. Please contact our group sales department at groups@dahotel.com or call +1 (555) 123-4568 for customized quotes and packages.",
        helpful: false,
      },
      // Policies FAQs
      {
        id: 5,
        category: "policies",
        question: "What are the check-in and check-out times?",
        answer: "Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges. We offer complimentary luggage storage for early arrivals or late departures.",
        helpful: true,
      },
      {
        id: 6,
        category: "policies",
        question: "What is your cancellation policy?",
        answer: "Free cancellation up to 48 hours before check-in. Cancellations within 48 hours will incur a charge equal to the first night's stay. For non-refundable rates, no refunds are provided for cancellations or modifications.",
        helpful: true,
      },
      {
        id: 7,
        category: "policies",
        question: "Are pets allowed?",
        answer: "Pets are welcome at our hotel! We charge a $50 cleaning fee per stay. Maximum 2 pets per room. Please inform us when booking so we can prepare a pet-friendly room with amenities for your furry friend.",
        helpful: true,
      },
      {
        id: 8,
        category: "policies",
        question: "What is the minimum age to check-in?",
        answer: "Guests must be at least 18 years old to check-in. Guests under 18 must be accompanied by an adult. Valid government-issued photo ID and credit card are required at check-in.",
        helpful: false,
      },
      // Amenities FAQs
      {
        id: 9,
        category: "amenities",
        question: "Is WiFi free in the hotel?",
        answer: "Yes, we offer complimentary high-speed WiFi throughout the hotel, including all guest rooms, public areas, and the poolside. Premium high-speed internet is also available for business travelers at no additional cost.",
        helpful: true,
      },
      {
        id: 10,
        category: "amenities",
        question: "Does the hotel have a swimming pool?",
        answer: "Yes, we have both indoor and outdoor temperature-controlled swimming pools. The outdoor pool is open from 7 AM to 8 PM, and the indoor pool is open 24/7. Pool towels are provided free of charge.",
        helpful: true,
      },
      {
        id: 11,
        category: "amenities",
        question: "Is parking available?",
        answer: "Yes, we offer complimentary on-site parking for all guests. The parking area is secured with 24/7 CCTV surveillance. Valet parking is available for $10 per day.",
        helpful: true,
      },
      {
        id: 12,
        category: "amenities",
        question: "Does the hotel have a fitness center?",
        answer: "Yes, our fitness center is open 24/7 and features state-of-the-art equipment including treadmills, ellipticals, stationary bikes, weight machines, and free weights. Personal trainers can be arranged upon request.",
        helpful: false,
      },
      // Services FAQs
      {
        id: 13,
        category: "services",
        question: "Is room service available?",
        answer: "Yes, we offer 24/7 room service with a diverse menu featuring local and international cuisine. Breakfast, lunch, dinner, and snacks are available. A service charge may apply for orders between 11 PM and 6 AM.",
        helpful: true,
      },
      {
        id: 14,
        category: "services",
        question: "Does the hotel offer airport transportation?",
        answer: "Yes, we provide airport shuttle service for a nominal fee. Please inform us of your flight details at least 24 hours in advance to arrange pickup. Luxury car transfer can also be arranged upon request.",
        helpful: true,
      },
      {
        id: 15,
        category: "services",
        question: "Do you have a spa?",
        answer: "Yes, our luxury spa offers a range of treatments including massages, facials, body scrubs, and more. The spa is open daily from 9 AM to 9 PM. Advance reservations are recommended.",
        helpful: true,
      },
      {
        id: 16,
        category: "services",
        question: "Is there a business center?",
        answer: "Yes, our business center is open 24/7 and offers computers, printing services, and private meeting rooms. Printing and copying services are available for a nominal fee.",
        helpful: false,
      },
      // Dining FAQs
      {
        id: 17,
        category: "dining",
        question: "Is breakfast included in the room price?",
        answer: "Breakfast inclusion depends on the rate plan you choose. Some packages include complimentary breakfast, while others do not. You can add breakfast for $18 per person per day. Children under 12 eat free when accompanied by a paying adult.",
        helpful: true,
      },
      {
        id: 18,
        category: "dining",
        question: "Do you have vegetarian/vegan options?",
        answer: "Yes, our restaurants offer a variety of vegetarian and vegan options. Please inform your server of any dietary restrictions, and our chefs will be happy to accommodate your needs.",
        helpful: true,
      },
      {
        id: 19,
        category: "dining",
        question: "Can I request special dietary meals?",
        answer: "Absolutely! We cater to all dietary requirements including gluten-free, dairy-free, nut allergies, and more. Please notify us at least 24 hours in advance so we can prepare accordingly.",
        helpful: true,
      },
      {
        id: 20,
        category: "dining",
        question: "Do you offer private dining?",
        answer: "Yes, we have private dining rooms available for special occasions, business meetings, and family gatherings. Contact our events team for more information and reservations.",
        helpful: false,
      },
    ],
    contact = {
      phone: "+1 (555) 123-4567",
      email: "info@dahotel.com",
      liveChat: "/chat",
    },
  } = content;

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Toggle FAQ
  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Get top 4 helpful FAQs
  const helpfulFAQs = faqs.filter((faq) => faq.helpful).slice(0, 4);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FiHelpCircle className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-black transition focus:border-transparent focus:ring-2 focus:ring-[#FFD700] focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${activeCategory === category.id
                ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              <category.icon size={14} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Helpful FAQs Section */}
        <div className="mx-auto mb-10 max-w-6xl">
          <div className="mb-4 flex items-center justify-center gap-2">
            <FiStar className="text-[#FFD700]" />
            <h3 className="text-lg font-bold text-[#2C4549]">Most Helpful FAQs</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {helpfulFAQs.map((faq) => (
              <div
                key={faq.id}
                className="cursor-pointer rounded-xl bg-gray-50 p-4 transition hover:shadow-md"
                onClick={() => {
                  setActiveCategory(faq.category);
                  toggleFAQ(faq.id);
                  document.getElementById(`faq-${faq.id}`)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/10">
                    <FiHelpCircle className="h-4 w-4 text-[#FFD700]" />
                  </div>
                  <p className="text-sm font-semibold text-[#2C4549] line-clamp-2">{faq.question}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        <div className="mx-auto max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center">
              <FiHelpCircle size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">No questions found. Please try a different search term.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  id={`faq-${faq.id}`}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors duration-200 hover:bg-gray-50 sm:px-6"
                  >
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <div className="mt-1 shrink-0">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD700]/10">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#FFD700]"></div>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-[#2C4549] sm:text-base">
                        {faq.question}
                      </span>
                    </div>
                    <div className="ml-3 shrink-0">
                      {openIndex === faq.id ? (
                        <FiChevronUp className="h-5 w-5 text-[#FFD700]" />
                      ) : (
                        <FiChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {openIndex === faq.id && (
                    <div className="border-t border-gray-100 px-5 py-4 sm:px-6">
                      <div className="flex gap-3">
                        <div className="w-5 shrink-0"></div>
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                            {faq.answer}
                          </p>
                          {faq.helpful && (
                            <div className="mt-2 flex items-center gap-1">
                              <FiStar className="h-3 w-3 text-[#FFD700]" />
                              <span className="text-xs text-gray-400">Helpful answer</span>
                            </div>
                          )}
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
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <div className="rounded-2xl bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-8 text-white">
            <h3 className="mb-2 text-xl font-bold">Still Have Questions?</h3>
            <p className="mb-6 text-gray-200">
              Can't find the answer you're looking for? Our friendly team is here to help.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
              >
                <FiPhone size={16} />
                Call Us
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-2.5 font-semibold text-white transition hover:bg-white/20"
              >
                <FiMail size={16} />
                Email Us
              </a>
              <a
                href={contact.liveChat}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-2.5 font-semibold text-white transition hover:bg-white/20"
              >
                <FiMessageCircle size={16} />
                Live Chat
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Or call us directly at{" "}
              <a href={`tel:${contact.phone}`} className="font-semibold text-[#FFD700]">
                {contact.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;