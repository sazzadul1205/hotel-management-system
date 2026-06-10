// src/Sections/Contact/BusinessHours/BusinessHours.jsx
"use client";

// React
import React, { useState } from "react";

// Icons
import {
  FiClock,
  FiCheck,
  FiAlertCircle,
  FiCalendar,
  FiSun,
  FiMoon,
  FiSunrise,
} from "react-icons/fi";
import {
  MdOutlineSpa,
  MdOutlineFitnessCenter,
  MdOutlineRoomService
} from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";

const BusinessHours = ({ content = {} }) => {
  // State
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const {
    title = "Business Hours",
    subtitle = "We're Here When You Need Us",
    description = "Our doors are always open. Check our operating hours for various departments and services.",
    departments = [
      {
        id: "reception",
        name: "Front Desk / Reception",
        icon: "reception",
        hours: {
          monday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          tuesday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          wednesday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          thursday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          friday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          saturday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          sunday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
        },
        note: "24/7 check-in and check-out available",
      },
      {
        id: "restaurant",
        name: "Main Restaurant",
        icon: "restaurant",
        hours: {
          monday: { open: "06:30", close: "22:00", closed: false },
          tuesday: { open: "06:30", close: "22:00", closed: false },
          wednesday: { open: "06:30", close: "22:00", closed: false },
          thursday: { open: "06:30", close: "22:00", closed: false },
          friday: { open: "06:30", close: "23:00", closed: false },
          saturday: { open: "07:00", close: "23:00", closed: false },
          sunday: { open: "07:00", close: "22:00", closed: false },
        },
        breaks: [
          { meal: "Breakfast", open: "06:30", close: "10:30" },
          { meal: "Lunch", open: "12:00", close: "15:00" },
          { meal: "Dinner", open: "18:00", close: "22:00" },
        ],
        note: "Last seating 30 minutes before closing",
      },
      {
        id: "spa",
        name: "Spa & Wellness",
        icon: "spa",
        hours: {
          monday: { open: "09:00", close: "21:00", closed: false },
          tuesday: { open: "09:00", close: "21:00", closed: false },
          wednesday: { open: "09:00", close: "21:00", closed: false },
          thursday: { open: "09:00", close: "21:00", closed: false },
          friday: { open: "09:00", close: "22:00", closed: false },
          saturday: { open: "09:00", close: "22:00", closed: false },
          sunday: { open: "10:00", close: "20:00", closed: false },
        },
        note: "Appointments recommended. Walk-ins welcome based on availability.",
      },
      {
        id: "fitness",
        name: "Fitness Center",
        icon: "fitness",
        hours: {
          monday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          tuesday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          wednesday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          thursday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          friday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          saturday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          sunday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
        },
        note: "Key card access required after hours",
      },
      {
        id: "roomService",
        name: "Room Service",
        icon: "roomService",
        hours: {
          monday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          tuesday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          wednesday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          thursday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          friday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          saturday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
          sunday: { open: "00:00", close: "23:59", closed: false, label: "24 Hours" },
        },
        note: "Limited menu available after midnight",
      },
      {
        id: "pool",
        name: "Swimming Pool",
        icon: "pool",
        hours: {
          monday: { open: "07:00", close: "20:00", closed: false },
          tuesday: { open: "07:00", close: "20:00", closed: false },
          wednesday: { open: "07:00", close: "20:00", closed: false },
          thursday: { open: "07:00", close: "20:00", closed: false },
          friday: { open: "07:00", close: "21:00", closed: false },
          saturday: { open: "08:00", close: "21:00", closed: false },
          sunday: { open: "08:00", close: "19:00", closed: false },
        },
        note: "Pool closed during maintenance (1st Monday of each month)",
      },
      {
        id: "business",
        name: "Business Center",
        icon: "business",
        hours: {
          monday: { open: "08:00", close: "20:00", closed: false },
          tuesday: { open: "08:00", close: "20:00", closed: false },
          wednesday: { open: "08:00", close: "20:00", closed: false },
          thursday: { open: "08:00", close: "20:00", closed: false },
          friday: { open: "08:00", close: "20:00", closed: false },
          saturday: { open: "09:00", close: "18:00", closed: false },
          sunday: { open: "09:00", close: "18:00", closed: false },
        },
        note: "Printing and computer access available",
      },
      {
        id: "concierge",
        name: "Concierge Desk",
        icon: "concierge",
        hours: {
          monday: { open: "08:00", close: "22:00", closed: false },
          tuesday: { open: "08:00", close: "22:00", closed: false },
          wednesday: { open: "08:00", close: "22:00", closed: false },
          thursday: { open: "08:00", close: "22:00", closed: false },
          friday: { open: "08:00", close: "23:00", closed: false },
          saturday: { open: "08:00", close: "23:00", closed: false },
          sunday: { open: "08:00", close: "21:00", closed: false },
        },
        note: "Emergency assistance available 24/7 via front desk",
      },
    ],
    specialHours = [
      { date: "Christmas Eve", hours: "Reduced hours - Call for details" },
      { date: "Christmas Day", hours: "Limited service - Call ahead" },
      { date: "New Year's Eve", hours: "Special event hours - 6 PM to 2 AM" },
      { date: "New Year's Day", hours: "Brunch only 10 AM - 3 PM" },
      { date: "Thanksgiving", hours: "Special dinner menu 12 PM - 8 PM" },
    ],
  } = content;

  // Days
  const days = [
    { key: "monday", label: "Monday", short: "Mon" },
    { key: "tuesday", label: "Tuesday", short: "Tue" },
    { key: "wednesday", label: "Wednesday", short: "Wed" },
    { key: "thursday", label: "Thursday", short: "Thu" },
    { key: "friday", label: "Friday", short: "Fri" },
    { key: "saturday", label: "Saturday", short: "Sat" },
    { key: "sunday", label: "Sunday", short: "Sun" },
  ];

  // Department buttons
  const departmentButtons = [
    { id: "all", name: "All Departments", icon: "all" },
    ...departments.map((dept) => ({ id: dept.id, name: dept.name, icon: dept.icon })),
  ];

  // Function to render icons
  const renderIcon = (iconName, className = "h-5 w-5") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "reception":
        return <FiClock className={iconClass} />;
      case "restaurant":
        return <GiKnifeFork className={iconClass} />;
      case "spa":
        return <MdOutlineSpa className={iconClass} />;
      case "fitness":
        return <MdOutlineFitnessCenter className={iconClass} />;
      case "roomService":
        return <MdOutlineRoomService className={iconClass} />;
      case "pool":
        return <FiSun className={iconClass} />;
      case "business":
        return <FiClock className={iconClass} />;
      case "concierge":
        return <FiCheck className={iconClass} />;
      default:
        return <FiClock className={iconClass} />;
    }
  };

  // Function to format time
  const formatTime = (time) => {
    if (!time) return "Closed";
    if (time === "00:00") return "12:00 AM";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const amp = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${amp}`;
  };

  // Function to get current status
  const getCurrentStatus = (department) => {
    const now = new Date();
    const currentDay = days[now.getDay() === 0 ? 6 : now.getDay() - 1].key;
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour + currentMinute / 60;

    const dayHours = department.hours[currentDay];
    if (dayHours.closed) return "Closed Today";

    const openTime = parseFloat(dayHours.open.replace(":", "."));
    const closeTime = parseFloat(dayHours.close.replace(":", "."));

    if (currentTime >= openTime && currentTime < closeTime) {
      return "Open Now";
    }
    return "Closed Now";
  };

  // Function to get status color
  const getStatusColor = (status) => {
    if (status === "Open Now") return "text-green-500";
    return "text-red-500";
  };

  // Filter departments
  const filteredDepartments = selectedDepartment === "all"
    ? departments
    : departments.filter((dept) => dept.id === selectedDepartment);

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FiClock className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Department Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {departmentButtons.slice(0, 6).map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${selectedDepartment === dept.id
                ? "bg-[#FFD700] text-[#2C4549] shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Hours Table */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#2C4549] text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Department</th>
                  {days.map((day) => (
                    <th key={day.key} className="px-3 py-3 text-center text-sm font-semibold">
                      <span className="hidden sm:inline">{day.label}</span>
                      <span className="sm:hidden">{day.short}</span>
                    </th>
                  ))}
                  <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredDepartments.map((dept) => (
                  <tr key={dept.id} className="transition hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/10">
                          {renderIcon(dept.icon, "h-4 w-4")}
                        </div>
                        <div>
                          <p className="font-semibold text-[#2C4549] text-sm">{dept.name}</p>
                          {dept.note && (
                            <p className="text-xs text-gray-400 hidden sm:block">{dept.note}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    {days.map((day) => {
                      const hours = dept.hours[day.key];
                      return (
                        <td key={day.key} className="px-3 py-3 text-center text-xs text-gray-600">
                          {hours.closed ? (
                            <span className="text-red-400">Closed</span>
                          ) : hours.label === "24 Hours" ? (
                            <span className="font-semibold text-green-600">24 Hours</span>
                          ) : (
                            <div>
                              {formatTime(hours.open)} - {formatTime(hours.close)}
                              {dept.breaks && (
                                <div className="mt-1 text-[10px] text-gray-400">
                                  {dept.breaks.map((meal, idx) => (
                                    <div key={idx}>
                                      {meal.meal}: {formatTime(meal.open)} - {formatTime(meal.close)}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                      );
                    })}
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold ${getStatusColor(getCurrentStatus(dept))}`}>
                        {getCurrentStatus(dept)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes Section */}
          <div className="border-t border-gray-100 bg-gray-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <FiAlertCircle size={14} className="text-[#FFD700]" />
                <span>Hours subject to change during holidays and special events</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock size={14} className="text-[#FFD700]" />
                <span>All times in local time (EST)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Special Hours Section */}
        <div className="mx-auto mt-10 max-w-6xl">
          <h3 className="mb-5 text-center text-lg font-bold text-[#2C4549]">
            Holiday & Special Hours
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {specialHours.map((item, index) => (
              <div key={index} className="rounded-xl bg-white p-3 text-center shadow-sm">
                <div className="mb-1 inline-block rounded-full bg-[#FFD700]/10 px-2 py-0.5 text-xs font-semibold text-[#FFD700]">
                  {item.date}
                </div>
                <p className="text-xs text-gray-600">{item.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="mx-auto mt-10 max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <FiCheck className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">24/7 Services</p>
                <p className="text-sm font-semibold text-[#2C4549]">Front Desk, Fitness, Room Service</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <FiCalendar className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Best Time to Call</p>
                <p className="text-sm font-semibold text-[#2C4549]">9 AM - 11 AM, 2 PM - 4 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <FiSunrise className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Breakfast Hours</p>
                <p className="text-sm font-semibold text-[#2C4549]">6:30 AM - 10:30 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <FiMoon className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Late Night Dining</p>
                <p className="text-sm font-semibold text-[#2C4549]">Room Service 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;