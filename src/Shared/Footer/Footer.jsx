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
  FiStar
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
    { name: "Contact", href: "/contact" }
  ];

  // Room type links
  const roomTypes = [
    { name: "Deluxe Room", href: "/rooms/deluxe" },
    { name: "Executive Suite", href: "/rooms/executive" },
    { name: "Family Suite", href: "/rooms/family" },
    { name: "Presidential Suite", href: "/rooms/presidential" }
  ];

  // Social media links
  const socialIcons = [
    { icon: FiFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiYoutube, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <footer className="bg-[#2C4549] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: About & Social */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <b>DA</b><i className="pl-1 font-light">Hotel</i>
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Experience luxury and comfort at its finest. We provide world-class hospitality with personalized service to make your stay unforgettable.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#2C4549] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-[#FFD700] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-2 text-sm"
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
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-[#FFD700] pl-3">
              Our Rooms
            </h3>
            <ul className="space-y-2">
              {roomTypes.map((room, index) => (
                <li key={index}>
                  <Link
                    href={room.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-300 flex items-center gap-2 text-sm"
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
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-[#FFD700] pl-3">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <FiMapPin className="text-[#FFD700] mt-0.5 shrink-0" size={16} />
                <span>123 Luxury Avenue, Downtown District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <FiPhone className="text-[#FFD700] shrink-0" size={16} />
                <a href="tel:+15551234567" className="hover:text-[#FFD700] transition">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <FiMail className="text-[#FFD700] shrink-0" size={16} />
                <a href="mailto:info@dahotel.com" className="hover:text-[#FFD700] transition">
                  info@dahotel.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <FiClock className="text-[#FFD700] shrink-0" size={16} />
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300 text-sm">
                Get exclusive offers, updates, and travel tips straight to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#FFD700] transition"
              />
              <button className="btn bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D] border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Legal */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} DA Hotel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-[#FFD700] transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#FFD700] transition">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-[#FFD700] transition">
              Sitemap
            </Link>
          </div>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FiHeart size={14} className="text-red-400" /> by Sazzadul Islam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;