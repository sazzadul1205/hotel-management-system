// src/Sections/Facilities/FacilityHours/FacilityHours.jsx
"use client";

import React from "react";
import { FiClock, FiCheck, FiPhone, FiMail } from "react-icons/fi";

const FacilityHours = ({ content = {} }) => {
  const {
    title = "Opening Hours",
    subtitle = "Plan Your Visit",
    description = "We look forward to serving you throughout the week.",
    hours = [
      { day: "Monday - Friday", breakfast: "6:30 - 10:30", lunch: "12:00 - 15:00", dinner: "18:00 - 23:00" },
      { day: "Saturday", breakfast: "7:00 - 11:00", lunch: "12:30 - 16:00", dinner: "18:00 - 23:30" },
      { day: "Sunday", breakfast: "7:00 - 11:30", lunch: "13:00 - 16:00", dinner: "18:00 - 22:30" },
    ],
    specialHours = [
      { event: "Holiday Specials", hours: "Extended hours", note: "Call for details" },
    ],
    contact = {
      phone: "+1 (555) 123-4567",
      email: "restaurant@dahotel.com",
    },
  } = content;

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FiClock className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600">{description}</p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#2C4549] text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Day</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Breakfast</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Lunch</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Dinner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {hours.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[#2C4549]">{item.day}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.breakfast}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.lunch}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-100 bg-gray-50 p-4">
            <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FiCheck className="text-green-500" /> Reservations Recommended
                </span>
                <span className="flex items-center gap-1">
                  <FiCheck className="text-green-500" /> Dress Code: Smart Casual
                </span>
              </div>
              <div className="flex justify-center gap-3 text-sm">
                <a href={`tel:${contact.phone}`} className="flex items-center gap-1 text-[#FFD700] hover:underline">
                  <FiPhone size={14} /> {contact.phone}
                </a>
                <span className="text-gray-300">|</span>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-1 text-[#FFD700] hover:underline">
                  <FiMail size={14} /> {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityHours;