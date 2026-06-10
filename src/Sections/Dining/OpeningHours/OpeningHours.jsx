// src/Sections/Dining/OpeningHours/OpeningHours.jsx
"use client";

// Icons
import {
  FiClock,
  FiMapPin,
  FiPhone,
  FiMail,
  FiAlertCircle
} from "react-icons/fi";
import {
  GiKnifeFork,
  GiCoffeePot,
  GiWineGlass,
  GiChampagneCork
} from "react-icons/gi";

const OpeningHours = ({ content = {} }) => {

  // Destructure content
  const {
    title = "Opening Hours",
    subtitle = "Plan Your Visit",
    description = "We're ready to serve you throughout the week. Check our operating hours for each dining venue.",
    venues = [
      {
        id: 1,
        name: "The Grand Restaurant",
        icon: "fine",
        description: "Fine Dining",
        hours: {
          monday: { open: "18:00", close: "23:00", closed: false },
          tuesday: { open: "18:00", close: "23:00", closed: false },
          wednesday: { open: "18:00", close: "23:00", closed: false },
          thursday: { open: "18:00", close: "23:00", closed: false },
          friday: { open: "18:00", close: "23:30", closed: false },
          saturday: { open: "18:00", close: "23:30", closed: false },
          sunday: { open: "18:00", close: "22:00", closed: false },
        },
        break: null,
        specialNote: "Reservations recommended",
      },
      {
        id: 2,
        name: "Spice Route",
        icon: "asian",
        description: "Asian Fusion",
        hours: {
          monday: { open: "12:00", close: "15:00", closed: false },
          tuesday: { open: "12:00", close: "15:00", closed: false },
          wednesday: { open: "12:00", close: "15:00", closed: false },
          thursday: { open: "12:00", close: "15:00", closed: false },
          friday: { open: "12:00", close: "15:30", closed: false },
          saturday: { open: "12:00", close: "16:00", closed: false },
          sunday: { open: "12:00", close: "16:00", closed: false },
        },
        break: { open: "18:00", close: "22:30" },
        specialNote: "Lunch & Dinner service",
      },
      {
        id: 3,
        name: "The Terrace Cafe",
        icon: "cafe",
        description: "Casual Dining",
        hours: {
          monday: { open: "07:00", close: "21:00", closed: false },
          tuesday: { open: "07:00", close: "21:00", closed: false },
          wednesday: { open: "07:00", close: "21:00", closed: false },
          thursday: { open: "07:00", close: "21:00", closed: false },
          friday: { open: "07:00", close: "22:00", closed: false },
          saturday: { open: "07:00", close: "22:00", closed: false },
          sunday: { open: "07:00", close: "21:00", closed: false },
        },
        break: null,
        specialNote: "All-day dining",
      },
      {
        id: 4,
        name: "Sky Bar",
        icon: "bar",
        description: "Rooftop Bar",
        hours: {
          monday: { open: "17:00", close: "00:00", closed: false },
          tuesday: { open: "17:00", close: "00:00", closed: false },
          wednesday: { open: "17:00", close: "00:00", closed: false },
          thursday: { open: "17:00", close: "01:00", closed: false },
          friday: { open: "17:00", close: "02:00", closed: false },
          saturday: { open: "17:00", close: "02:00", closed: false },
          sunday: { open: "17:00", close: "23:00", closed: false },
        },
        break: null,
        specialNote: "Happy Hour 5PM - 7PM",
      },
      {
        id: 5,
        name: "Lobby Lounge",
        icon: "lounge",
        description: "Café & Bar",
        hours: {
          monday: { open: "08:00", close: "23:00", closed: false },
          tuesday: { open: "08:00", close: "23:00", closed: false },
          wednesday: { open: "08:00", close: "23:00", closed: false },
          thursday: { open: "08:00", close: "23:00", closed: false },
          friday: { open: "08:00", close: "00:00", closed: false },
          saturday: { open: "08:00", close: "00:00", closed: false },
          sunday: { open: "08:00", close: "22:00", closed: false },
        },
        break: null,
        specialNote: "Afternoon Tea 2PM - 5PM",
      },
    ],
    specialHours = [
      {
        date: "December 24",
        event: "Christmas Eve",
        hours: "Special hours - Call for details",
      },
      {
        date: "December 25",
        event: "Christmas Day",
        hours: "Brunch 11AM - 3PM, Dinner 6PM - 10PM",
      },
      {
        date: "December 31",
        event: "New Year's Eve",
        hours: "Gala Dinner 7PM - 1AM",
      },
      {
        date: "January 1",
        event: "New Year's Day",
        hours: "Brunch 11AM - 4PM",
      },
    ],
    contact = {
      phone: "+1 (555) 123-4567",
      email: "reservations@dahotel.com",
      address: "123 Luxury Avenue, New York, NY 10001",
    },
  } = content;

  // Days of the week
  const days = [
    { key: "monday", label: "Monday", short: "Mon" },
    { key: "tuesday", label: "Tuesday", short: "Tue" },
    { key: "wednesday", label: "Wednesday", short: "Wed" },
    { key: "thursday", label: "Thursday", short: "Thu" },
    { key: "friday", label: "Friday", short: "Fri" },
    { key: "saturday", label: "Saturday", short: "Sat" },
    { key: "sunday", label: "Sunday", short: "Sun" },
  ];

  // Function to render icons
  const renderIcon = (iconName, className = "h-5 w-5") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "fine":
        return <GiKnifeFork className={iconClass} />;
      case "asian":
        return <GiKnifeFork className={iconClass} />;
      case "cafe":
        return <GiCoffeePot className={iconClass} />;
      case "bar":
        return <GiChampagneCork className={iconClass} />;
      case "lounge":
        return <GiWineGlass className={iconClass} />;
      default:
        return <GiKnifeFork className={iconClass} />;
    }
  };

  // Function to format time
  const formatTime = (time) => {
    if (!time) return "Closed";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const amp = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${amp}`;
  };

  // Function to get current status
  const getCurrentStatus = (venue) => {
    const now = new Date();
    const currentDay = days[now.getDay() === 0 ? 6 : now.getDay() - 1].key;
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour + currentMinute / 60;

    const dayHours = venue.hours[currentDay];
    if (dayHours.closed) return "Closed Today";

    const openTime = parseFloat(dayHours.open.replace(":", "."));
    const closeTime = parseFloat(dayHours.close.replace(":", "."));

    if (currentTime >= openTime && currentTime < closeTime) {
      return "Open Now";
    }

    if (venue.break) {
      const breakOpen = parseFloat(venue.break.open.replace(":", "."));
      const breakClose = parseFloat(venue.break.close.replace(":", "."));
      if (currentTime >= breakOpen && currentTime < breakClose) {
        return "Open Now";
      }
    }

    return "Closed Now";
  };

  // Function to get status color
  const getStatusColor = (status) => {
    if (status === "Open Now") return "text-green-500";
    if (status === "Closed Now") return "text-red-500";
    return "text-yellow-500";
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
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

        {/* Opening Hours Table */}
        <div className="mx-auto mb-12 max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#2C4549] text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Venue</th>
                  {days.map((day) => (
                    <th key={day.key} className="px-2 py-3 text-center text-sm font-semibold">
                      <span className="hidden sm:inline">{day.label}</span>
                      <span className="sm:hidden">{day.short}</span>
                    </th>
                  ))}
                  <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {venues.map((venue) => (
                  <tr key={venue.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]/10">
                          {renderIcon(venue.icon, "h-4 w-4")}
                        </div>
                        <div>
                          <p className="font-semibold text-[#2C4549] text-sm">{venue.name}</p>
                          <p className="text-xs text-gray-400">{venue.description}</p>
                        </div>
                      </div>
                    </td>
                    {days.map((day) => {
                      const hours = venue.hours[day.key];
                      return (
                        <td key={day.key} className="px-2 py-3 text-center text-xs text-gray-600">
                          {hours.closed ? (
                            <span className="text-red-400">Closed</span>
                          ) : (
                            <div>
                              <div>{formatTime(hours.open)}</div>
                              <div className="text-gray-400">-</div>
                              <div>{formatTime(hours.close)}</div>
                              {venue.break && day.key !== "sunday" && day.key !== "saturday" && (
                                <div className="text-xs text-gray-400 mt-1">
                                  <span className="text-[10px]">Also</span> {formatTime(venue.break.open)} - {formatTime(venue.break.close)}
                                </div>
                              )}
                            </div>
                          )}
                        </td>
                      );
                    })}
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold ${getStatusColor(getCurrentStatus(venue))}`}>
                        {getCurrentStatus(venue)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="border-t border-gray-100 bg-gray-50 p-4">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <FiAlertCircle size={14} className="text-[#FFD700]" />
              <span>Last seating 30 minutes before closing</span>
            </div>
          </div>
        </div>

        {/* Special Hours */}
        <div className="mx-auto mb-12 max-w-6xl">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:text-2xl">
            Holiday & Special Hours
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {specialHours.map((item, index) => (
              <div key={index} className="rounded-xl bg-gray-50 p-4 text-center transition hover:shadow-md">
                <div className="mb-2 inline-flex rounded-full bg-[#FFD700]/10 px-3 py-1 text-xs font-semibold text-[#FFD700]">
                  {item.date}
                </div>
                <h4 className="mb-1 font-semibold text-[#2C4549]">{item.event}</h4>
                <p className="text-xs text-gray-500">{item.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Info */}
        <div className="mx-auto max-w-6xl rounded-2xl bg-linear-to-r from-[#2C4549] to-[#1a2f33] p-6 text-white sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center md:text-left">
              <div className="mb-2 flex justify-center md:justify-start">
                <FiMapPin className="h-5 w-5 text-[#FFD700]" />
              </div>
              <h4 className="mb-1 font-semibold">Location</h4>
              <p className="text-sm text-gray-300">{contact.address}</p>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-2 flex justify-center md:justify-start">
                <FiPhone className="h-5 w-5 text-[#FFD700]" />
              </div>
              <h4 className="mb-1 font-semibold">Reservations</h4>
              <a href={`tel:${contact.phone}`} className="text-sm text-gray-300 hover:text-[#FFD700] transition">
                {contact.phone}
              </a>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-2 flex justify-center md:justify-start">
                <FiMail className="h-5 w-5 text-[#FFD700]" />
              </div>
              <h4 className="mb-1 font-semibold">Email Us</h4>
              <a href={`mailto:${contact.email}`} className="text-sm text-gray-300 hover:text-[#FFD700] transition">
                {contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 text-center text-sm">
            <div className="flex items-center gap-2">
              <FiClock className="text-[#FFD700]" />
              <span className="text-gray-600">Breakfast: 6:30 AM - 10:30 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <GiKnifeFork className="text-[#FFD700]" />
              <span className="text-gray-600">Lunch: 12:00 PM - 3:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <GiWineGlass className="text-[#FFD700]" />
              <span className="text-gray-600">Dinner: 6:00 PM - 11:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;