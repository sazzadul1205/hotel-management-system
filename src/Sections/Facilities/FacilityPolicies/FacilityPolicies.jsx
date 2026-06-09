// src/Sections/Facilities/FacilityPolicies/FacilityPolicies.jsx
"use client";

import React from "react";
import { FiCheck, FiX, FiGift } from "react-icons/fi";

const FacilityPolicies = ({ content = {} }) => {
  const {
    title = "Dining Policies",
    subtitle = "Important Information",
    description = "Please review our policies to ensure a wonderful dining experience.",
    policies = [
      {
        category: "Reservations",
        items: [
          { text: "Online reservations available 24/7", allowed: true },
          { text: "Walk-ins welcome based on availability", allowed: true },
          { text: "Large parties (8+) require 48hr notice", allowed: true },
        ],
      },
      {
        category: "Dietary Restrictions",
        items: [
          { text: "Vegetarian & Vegan options available", allowed: true },
          { text: "Gluten-free menu upon request", allowed: true },
          { text: "Allergy information available", allowed: true },
        ],
      },
      {
        category: "Cancellation",
        items: [
          { text: "Free cancellation up to 2 hours before", allowed: true },
          { text: "Late cancellation fee: $25 per person", allowed: false },
          { text: "No-show fee: $50 per person", allowed: false },
        ],
      },
      {
        category: "Additional Info",
        items: [
          { text: "Valet parking available", allowed: true },
          { text: "Children's menu available", allowed: true },
          { text: "Private event bookings", allowed: true },
        ],
      },
    ],
  } = content;

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FiGift className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">{description}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {policies.map((category, index) => (
            <div key={index} className="rounded-xl bg-gray-50 p-5 sm:p-6">
              <h3 className="mb-4 text-lg font-bold text-[#2C4549]">{category.category}</h3>
              <div className="space-y-2.5">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    {item.allowed ? (
                      <FiCheck className="mt-0.5 shrink-0 text-green-500" size={16} />
                    ) : (
                      <FiX className="mt-0.5 shrink-0 text-red-500" size={16} />
                    )}
                    <span className={item.allowed ? "text-gray-600" : "text-gray-400 line-through"}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilityPolicies;