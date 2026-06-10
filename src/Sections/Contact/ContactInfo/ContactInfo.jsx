// src/Sections/Contact/ContactInfo/ContactInfo.jsx
"use client";

// React
import React, { useState } from "react";

// Icons
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiGlobe,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiCopy,
  FiCheck,
  FiMessageCircle,
  FiNavigation,
} from "react-icons/fi";
import { FaWhatsapp, FaTripadvisor } from "react-icons/fa";

const ContactInfo = ({ content = {} }) => {
  const [copiedField, setCopiedField] = useState(null);

  const {
    title = "Contact Information",
    subtitle = "Get in Touch",
    description = "We'd love to hear from you. Here's how you can reach us.",
    location = {
      name: "DA Hotel",
      address: "123 Luxury Avenue, Downtown District",
      city: "New York, NY 10001",
      country: "United States",
      mapLink: "https://maps.google.com/?q=123+Luxury+Avenue+New+York",
      coordinates: "40.7128° N, 74.0060° W",
    },
    phoneNumbers = [
      { label: "Reservations", number: "+1 (555) 123-4567", tollFree: true },
      { label: "Concierge", number: "+1 (555) 123-4568", tollFree: false },
      { label: "Group Bookings", number: "+1 (555) 123-4569", tollFree: false },
    ],
    emails = [
      { label: "General Inquiries", email: "info@dahotel.com" },
      { label: "Reservations", email: "reservations@dahotel.com" },
      { label: "Group Sales", email: "groups@dahotel.com" },
    ],
    hours = {
      reception: "24/7",
      concierge: "24/7",
      roomService: "24/7",
      restaurant: "6:00 AM - 11:00 PM",
      spa: "9:00 AM - 9:00 PM",
      fitness: "24/7",
    },
    social = {
      facebook: "https://facebook.com/dahotel",
      twitter: "https://twitter.com/dahotel",
      instagram: "https://instagram.com/dahotel",
      linkedin: "https://linkedin.com/company/dahotel",
      youtube: "https://youtube.com/dahotel",
      tripadvisor: "https://tripadvisor.com/hotel/dahotel",
      whatsapp: "https://wa.me/15551234567",
    },
    emergency = {
      phone: "+1 (555) 123-4500",
      email: "emergency@dahotel.com",
    },
  } = content;

  // Copy to clipboard
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <FiMapPin className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column - Location & Hours */}
            <div className="space-y-6">
              {/* Location Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10">
                    <FiMapPin className="h-6 w-6 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C4549]">Our Location</h3>
                </div>
                <div className="mb-3">
                  <p className="font-semibold text-[#2C4549]">{location.name}</p>
                  <p className="text-sm text-gray-600">{location.address}</p>
                  <p className="text-sm text-gray-600">{location.city}</p>
                  <p className="text-sm text-gray-600">{location.country}</p>
                  <p className="mt-1 text-xs text-gray-400">{location.coordinates}</p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#FFD700] px-4 py-2 text-sm font-semibold text-[#2C4549] transition hover:bg-[#FFE44D]"
                  >
                    <FiNavigation size={14} />
                    Get Directions
                  </a>
                  <button
                    onClick={() => copyToClipboard(location.address, "address")}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-600 transition hover:border-[#FFD700] hover:text-[#FFD700]"
                  >
                    {copiedField === "address" ? <FiCheck size={14} /> : <FiCopy size={14} />}
                    Copy Address
                  </button>
                </div>
              </div>

              {/* Hours Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10">
                    <FiClock className="h-6 w-6 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C4549]">Opening Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Reception</span>
                    <span className="font-semibold text-[#2C4549]">{hours.reception}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Concierge</span>
                    <span className="font-semibold text-[#2C4549]">{hours.concierge}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Room Service</span>
                    <span className="font-semibold text-[#2C4549]">{hours.roomService}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Restaurant</span>
                    <span className="font-semibold text-[#2C4549]">{hours.restaurant}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Spa</span>
                    <span className="font-semibold text-[#2C4549]">{hours.spa}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Fitness Center</span>
                    <span className="font-semibold text-[#2C4549]">{hours.fitness}</span>
                  </div>
                </div>
              </div>

              {/* Emergency Card */}
              <div className="rounded-2xl bg-linear-to-r from-red-50 to-orange-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <FiPhone className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-600">Emergency Contact</h3>
                    <p className="text-sm text-gray-600">24/7 Emergency Assistance</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-col gap-1 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Emergency Hotline</span>
                    <a href={`tel:${emergency.phone}`} className="font-semibold text-red-600">
                      {emergency.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Emergency Email</span>
                    <a href={`mailto:${emergency.email}`} className="font-semibold text-red-600">
                      {emergency.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Phone, Email, Social */}
            <div className="space-y-6">
              {/* Phone Numbers Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10">
                    <FiPhone className="h-6 w-6 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C4549]">Phone Numbers</h3>
                </div>
                <div className="space-y-3">
                  {phoneNumbers.map((phone, index) => (
                    <div key={index} className="flex items-center justify-between py-1">
                      <div>
                        <span className="text-gray-600">{phone.label}</span>
                        {phone.tollFree && (
                          <span className="ml-2 rounded-full bg-green-100 px-1.5 py-0.5 text-xs text-green-600">
                            Toll Free
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${phone.number.replace(/\s/g, '')}`}
                          className="font-semibold text-[#2C4549] hover:text-[#FFD700]"
                        >
                          {phone.number}
                        </a>
                        <button
                          onClick={() => copyToClipboard(phone.number, `phone-${index}`)}
                          className="text-gray-400 transition hover:text-[#FFD700]"
                        >
                          {copiedField === `phone-${index}` ? <FiCheck size={14} /> : <FiCopy size={14} />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Addresses Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10">
                    <FiMail className="h-6 w-6 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C4549]">Email Addresses</h3>
                </div>
                <div className="space-y-3">
                  {emails.map((email, index) => (
                    <div key={index} className="flex items-center justify-between py-1">
                      <span className="text-gray-600">{email.label}</span>
                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${email.email}`}
                          className="text-sm font-semibold text-[#2C4549] hover:text-[#FFD700]"
                        >
                          {email.email}
                        </a>
                        <button
                          onClick={() => copyToClipboard(email.email, `email-${index}`)}
                          className="text-gray-400 transition hover:text-[#FFD700]"
                        >
                          {copiedField === `email-${index}` ? <FiCheck size={14} /> : <FiCopy size={14} />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Card */}
              <div className="rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10">
                    <FiGlobe className="h-6 w-6 text-[#FFD700]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C4549]">Connect With Us</h3>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2]/10 text-[#1877F2] transition hover:scale-110 hover:bg-[#1877F2] hover:text-white"
                  >
                    <FiFacebook size={22} />
                  </a>
                  <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] transition hover:scale-110 hover:bg-[#1DA1F2] hover:text-white"
                  >
                    <FiTwitter size={22} />
                  </a>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-orange-500/10 text-pink-500 transition hover:scale-110 hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500 hover:text-white"
                  >
                    <FiInstagram size={22} />
                  </a>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5]/10 text-[#0077B5] transition hover:scale-110 hover:bg-[#0077B5] hover:text-white"
                  >
                    <FiLinkedin size={22} />
                  </a>
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000]/10 text-[#FF0000] transition hover:scale-110 hover:bg-[#FF0000] hover:text-white"
                  >
                    <FiYoutube size={22} />
                  </a>
                  <a
                    href={social.tripadvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00AF87]/10 text-[#00AF87] transition hover:scale-110 hover:bg-[#00AF87] hover:text-white"
                  >
                    <FaTripadvisor size={22} />
                  </a>
                  <a
                    href={social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition hover:scale-110 hover:bg-[#25D366] hover:text-white"
                  >
                    <FaWhatsapp size={22} />
                  </a>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <FiMessageCircle size={22} />
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-linear-to-r from-[#25D366] to-[#128C7E] p-5 text-white shadow-md transition hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <FaWhatsapp size={24} />
                    <h3 className="text-lg font-bold">Chat on WhatsApp</h3>
                  </div>
                  <p className="mt-1 text-sm opacity-90">Quick responses within minutes</p>
                </div>
                <FiMessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;