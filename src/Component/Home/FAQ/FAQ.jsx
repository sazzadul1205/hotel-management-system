// Component/Home/FAQ/FAQ.jsx
"use client";

// React
import React, { useState } from "react";

// Icons
import {
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiClock,
  FiCreditCard,
  FiUsers,
  FiWifi,
  FiShield,
  FiStar,
  FiMapPin,
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiSearch
} from "react-icons/fi";
import { MdOutlineRoomService } from "react-icons/md";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const faqCategories = [
    { id: "all", name: "All Questions", icon: FiHelpCircle },
    { id: "booking", name: "Booking", icon: FiCreditCard },
    { id: "policies", name: "Policies", icon: FiShield },
    { id: "amenities", name: "Amenities", icon: FiWifi },
    { id: "services", name: "Services", icon: MdOutlineRoomService }
  ];

  const faqs = [
    {
      id: 1,
      category: "booking",
      question: "How do I make a reservation?",
      answer: "You can make a reservation through our website by clicking the 'Book Now' button, calling our reservation hotline at +1 (555) 123-4567, or sending an email to reservations@dahotel.com. Online booking is available 24/7 and offers the best rates guaranteed."
    },
    {
      id: 2,
      category: "booking",
      question: "Do I need to pay a deposit when booking?",
      answer: "Yes, we require a 20% deposit at the time of booking to secure your reservation. The remaining balance is due upon check-in. For special packages and peak seasons, full prepayment may be required."
    },
    {
      id: 3,
      category: "policies",
      question: "What is your cancellation policy?",
      answer: "Free cancellation up to 48 hours before check-in. Cancellations within 48 hours will incur a charge equal to the first night's stay. For non-refundable rates, no refunds are provided for cancellations or modifications."
    },
    {
      id: 4,
      category: "policies",
      question: "What are the check-in and check-out times?",
      answer: "Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges. We offer complimentary luggage storage for early arrivals or late departures."
    },
    {
      id: 5,
      category: "amenities",
      question: "Is WiFi free in the hotel?",
      answer: "Yes, we offer complimentary high-speed WiFi throughout the hotel, including all guest rooms, public areas, and the poolside. Premium high-speed internet is also available for business travelers at no additional cost."
    },
    {
      id: 6,
      category: "amenities",
      question: "Does the hotel have a swimming pool?",
      answer: "Yes, we have both indoor and outdoor temperature-controlled swimming pools. The outdoor pool is open from 7 AM to 8 PM, and the indoor pool is open 24/7. Pool towels are provided free of charge."
    },
    {
      id: 7,
      category: "services",
      question: "Is room service available?",
      answer: "Yes, we offer 24/7 room service with a diverse menu featuring local and international cuisine. Breakfast, lunch, dinner, and snacks are available. A service charge may apply for orders between 11 PM and 6 AM."
    },
    {
      id: 8,
      category: "services",
      question: "Does the hotel offer airport transportation?",
      answer: "Yes, we provide airport shuttle service for a nominal fee. Please inform us of your flight details at least 24 hours in advance to arrange pickup. Luxury car transfer can also be arranged upon request."
    },
    {
      id: 9,
      category: "policies",
      question: "Are pets allowed?",
      answer: "Pets are welcome at our hotel! We charge a $50 cleaning fee per stay. Maximum 2 pets per room. Please inform us when booking so we can prepare a pet-friendly room with amenities for your furry friend."
    },
    {
      id: 10,
      category: "booking",
      question: "Do you offer group booking discounts?",
      answer: "Yes, we offer special rates for group bookings of 5 rooms or more. Please contact our group sales department at groups@dahotel.com or call +1 (555) 123-4568 for customized quotes and packages."
    },
    {
      id: 11,
      category: "amenities",
      question: "Is breakfast included in the room price?",
      answer: "Breakfast inclusion depends on the rate plan you choose. Some packages include complimentary breakfast, while others do not. You can add breakfast for $18 per person per day. Children under 12 eat free when accompanied by a paying adult."
    },
    {
      id: 12,
      category: "services",
      question: "Does the hotel have a fitness center?",
      answer: "Yes, our fitness center is open 24/7 and features state-of-the-art equipment including treadmills, ellipticals, stationary bikes, weight machines, and free weights. Personal trainers can be arranged upon request."
    },
    {
      id: 13,
      category: "policies",
      question: "What is the minimum age to check-in?",
      answer: "Guests must be at least 18 years old to check-in. Guests under 18 must be accompanied by an adult. Valid government-issued photo ID and credit card are required at check-in."
    },
    {
      id: 14,
      category: "booking",
      question: "Can I modify or change my reservation?",
      answer: "Yes, you can modify your reservation online through your booking confirmation email, by calling our reservations department, or by email. Modifications are subject to availability and rate changes."
    },
    {
      id: 15,
      category: "amenities",
      question: "Is parking available?",
      answer: "Yes, we offer complimentary on-site parking for all guests. The parking area is secured with 24/7 CCTV surveillance. Valet parking is available for $10 per day."
    }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchTerm === "" ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 px-4 py-2 rounded-full mb-4">
            <FiHelpCircle className="text-[#FFD700]" size={18} />
            <span className="text-[#2C4549] font-semibold text-sm uppercase tracking-wide">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4549] mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 text-lg">
            Find answers to common questions about your stay at DA Hotel
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === category.id
                  ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
            >
              <category.icon size={16} />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* FAQs Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <FiHelpCircle size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No questions found. Please try a different search term.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-5 h-5 bg-[#FFD700]/10 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></div>
                        </div>
                      </div>
                      <span className="font-semibold text-[#2C4549] text-lg">
                        {faq.question}
                      </span>
                    </div>
                    <div className="ml-4">
                      {openIndex === faq.id ? (
                        <FiChevronUp className="text-[#FFD700]" size={20} />
                      ) : (
                        <FiChevronDown className="text-gray-400" size={20} />
                      )}
                    </div>
                  </button>

                  {openIndex === faq.id && (
                    <div className="px-6 pb-4 pt-0 border-t border-gray-100">
                      <div className="flex gap-3">
                        <div className="w-5"></div>
                        <div className="flex-1">
                          <p className="text-gray-600 leading-relaxed">
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
        <div className="mt-12 text-center">
          <div className="bg-linear-to-r from-[#2C4549] to-[#1a2f33] rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-[#FFD700] text-[#2C4549] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFE44D] transition">
                <FiMessageCircle size={18} />
                Live Chat
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/20 transition">
                <FiPhone size={18} />
                Call Us
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/20 transition">
                <FiMail size={18} />
                Email Support
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <span>📞 +1 (555) 123-4567</span>
              <span className="mx-3">•</span>
              <span>✉️ support@dahotel.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;