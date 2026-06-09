// src/Shared/Footer/Footer.jsx
"use client";

// React
import React from "react";

// Next
import Link from "next/link";

// Icons
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiHeart,
  FiChevronRight,
  FiStar,
} from "react-icons/fi";

const Footer = () => {
  // Current year
  const currentYear = new Date().getFullYear();

  // Navigation links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Rooms", href: "/our-rooms" },
    { name: "Facilities", href: "/facilities" },
    { name: "Dining", href: "/dining" },
    { name: "Contact", href: "/contact" },
  ];

  // Room type links
  const roomTypes = [
    { name: "Deluxe Room", href: "/rooms/deluxe" },
    { name: "Executive Suite", href: "/rooms/executive" },
    { name: "Family Suite", href: "/rooms/family" },
    { name: "Presidential Suite", href: "/rooms/presidential" },
  ];

  // Social media links
  const socialIcons = [
    { icon: FiFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#2C4549] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About & Social */}
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              <b>DA</b>
              <i className="pl-1 font-light">Hotel</i>
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-300">
              Experience luxury and comfort at its finest. We provide world-class hospitality with
              personalized service to make your stay unforgettable.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-[#FFD700] hover:text-[#2C4549]"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 border-l-4 border-[#FFD700] pl-3 text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-300 transition-colors duration-300 hover:text-[#FFD700]"
                  >
                    <FiChevronRight size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Room Types */}
          <div>
            <h3 className="mb-4 border-l-4 border-[#FFD700] pl-3 text-lg font-semibold">
              Our Rooms
            </h3>
            <ul className="space-y-2">
              {roomTypes.map((room, index) => (
                <li key={index}>
                  <Link
                    href={room.href}
                    className="flex items-center gap-2 text-sm text-gray-300 transition-colors duration-300 hover:text-[#FFD700]"
                  >
                    <FiStar size={14} />
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-4 border-l-4 border-[#FFD700] pl-3 text-lg font-semibold">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <FiMapPin className="mt-0.5 shrink-0 text-[#FFD700]" size={16} />
                <span>123 Luxury Avenue, Downtown District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <FiPhone className="shrink-0 text-[#FFD700]" size={16} />
                <a href="tel:+15551234567" className="transition hover:text-[#FFD700]">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <FiMail className="shrink-0 text-[#FFD700]" size={16} />
                <a href="mailto:info@dahotel.com" className="transition hover:text-[#FFD700]">
                  info@dahotel.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <FiClock className="shrink-0 text-[#FFD700]" size={16} />
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 border-t border-white/20 pt-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-300">
                Get exclusive offers, updates, and travel tips straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white transition placeholder:text-gray-400 focus:border-[#FFD700] focus:outline-none"
              />
              <button className="btn border-none bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 md:flex-row">
          <p className="text-sm text-gray-400">© {currentYear} DA Hotel. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 transition hover:text-[#FFD700]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 transition hover:text-[#FFD700]">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 transition hover:text-[#FFD700]">
              Sitemap
            </Link>
          </div>
          <p className="flex items-center gap-1 text-sm text-gray-400">
            Made with <FiHeart size={14} className="text-red-400" /> by Sazzadul Islam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
