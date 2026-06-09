"use client";
// src/Shared/Navbar/Navbar.jsx

// React
import React, { useState } from "react";

// Icons
import {
  FiMenu,
  FiHome,
  FiInfo,
  FiGrid,
  FiBox,
  FiPhone,
  FiLogIn,
  FiCalendar,
  FiUsers,
  FiCoffee,
  FiWifi,
  FiMapPin,
  FiStar,
  FiAward,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";
import {
  MdOutlineMeetingRoom,
  MdOutlineRestaurantMenu,
  MdOutlineSpa,
  MdOutlinePool,
  MdOutlineLocalParking,
  MdOutlineEventAvailable,
} from "react-icons/md";
import { GiGymBag } from "react-icons/gi";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Page Links
const menuItems = [
  {
    label: "Home",
    href: "/",
    icon: FiHome,
  },
  {
    label: "About Us",
    href: "/about",
    icon: FiInfo,
  },
  {
    label: "Our Rooms",
    href: "/our-rooms",
    icon: MdOutlineMeetingRoom,
    children: [
      {
        label: "Deluxe Suite",
        href: "/rooms/deluxe-suite",
        icon: FiStar,
      },
      {
        label: "Family Room",
        href: "/rooms/family-room",
        icon: FiUsers,
      },
      {
        label: "Executive Suite",
        href: "/rooms/executive-suite",
        icon: FiAward,
      },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    icon: FiGrid,
    children: [
      {
        label: "Restaurant & Bar",
        href: "/facilities/restaurant",
        icon: MdOutlineRestaurantMenu,
      },
      {
        label: "Swimming Pool",
        href: "/facilities/pool",
        icon: MdOutlinePool,
      },
      {
        label: "Spa & Wellness",
        href: "/facilities/spa",
        icon: MdOutlineSpa,
      },
      {
        label: "Fitness Center",
        href: "/facilities/gym",
        icon: GiGymBag,
      },
      {
        label: "Conference Hall",
        href: "/facilities/conference",
        icon: MdOutlineEventAvailable,
      },
    ],
  },
  {
    label: "Dining",
    href: "/dining",
    icon: FiCoffee,
    children: [
      {
        label: "Main Restaurant",
        href: "/dining/main-restaurant",
        icon: MdOutlineRestaurantMenu,
      },
      {
        label: "Rooftop Cafe",
        href: "/dining/rooftop-cafe",
        icon: FiCoffee,
      },
      {
        label: "Poolside Bar",
        href: "/dining/poolside-bar",
        icon: FiCoffee,
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    icon: FiBox,
    children: [
      {
        label: "Room Service",
        href: "/services/room-service",
        icon: FiShoppingBag,
      },
      {
        label: "Free WiFi",
        href: "/services/wifi",
        icon: FiWifi,
      },
      {
        label: "Parking",
        href: "/services/parking",
        icon: MdOutlineLocalParking,
      },
      {
        label: "Airport Transfer",
        href: "/services/airport-transfer",
        icon: FiMapPin,
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    icon: FiPhone,
  },
];

const Navbar = () => {
  // Dropdown
  const [openDropdown, setOpenDropdown] = useState(null);

  // Mobile drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Get current page
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  // Function to check if any child is active
  const isChildActive = (children) => {
    return children?.some((child) => pathname?.startsWith(child.href));
  };

  // Close drawer when navigating
  const handleMobileNavClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="navbar bg-[#2C4549] px-4 text-white shadow-sm md:px-10">
        {/* Mobile Menu Button */}
        <div className="navbar-start">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="btn btn-ghost text-white lg:hidden"
          >
            <FiMenu className="h-5 w-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold md:text-4xl">
            <b>DA</b>
            <i className="pl-1 font-light">Hotel</i>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.children ? (
                  <details open={openDropdown === item.label}>
                    <summary
                      className={`flex cursor-pointer items-center gap-2 transition-colors ${
                        isChildActive(item.children)
                          ? "text-[#FFD700]"
                          : "text-white hover:text-[#FFD700]"
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.icon && <item.icon size={18} />}
                      {item.label}
                    </summary>
                    <ul
                      className="z-10 w-56 rounded-lg bg-white p-2 text-gray-800 shadow-lg"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            href={child.href}
                            className={`flex items-center gap-2 rounded-lg px-2 py-1 transition-colors ${
                              isActive(child.href)
                                ? "bg-[#FFD700] text-[#2C4549]"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            {child.icon && <child.icon size={16} />}
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive(item.href)
                        ? "font-semibold text-[#FFD700]"
                        : "text-white hover:text-[#FFD700]"
                    }`}
                  >
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="navbar-end gap-3">
          <button className="btn btn-outline hidden gap-2 border-white text-white hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-[#2C4549] sm:flex">
            <FiCalendar size={18} />
            Book Now
          </button>
          <button className="btn gap-2 border-none bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D]">
            <FiLogIn size={18} />
            Login
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[70%] max-w-sm transform bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b bg-[#2C4549] p-4 text-white">
          <Link href="/" className="text-2xl font-bold" onClick={handleMobileNavClick}>
            <b>DA</b>
            <i className="pl-1 font-light">Hotel</i>
          </Link>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="rounded-lg p-2 hover:bg-white/10"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="h-full overflow-y-auto pb-20">
          <ul className="menu gap-1 p-4 text-black">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.children ? (
                  <details>
                    <summary
                      className={`flex items-center gap-2 font-semibold ${
                        isChildActive(item.children) ? "bg-gray-100 text-[#2C4549]" : ""
                      }`}
                    >
                      {item.icon && <item.icon size={18} />}
                      {item.label}
                    </summary>
                    <ul className="ml-4 p-2">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            href={child.href}
                            onClick={handleMobileNavClick}
                            className={`flex items-center gap-2 ${
                              isActive(child.href) ? "bg-gray-100 font-semibold text-[#2C4549]" : ""
                            }`}
                          >
                            {child.icon && <child.icon size={14} />}
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleMobileNavClick}
                    className={`flex items-center gap-2 font-semibold ${
                      isActive(item.href) ? "bg-gray-100 text-[#2C4549]" : ""
                    }`}
                  >
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Action Buttons */}
          <div className="mt-4 space-y-3 border-t p-4">
            <button className="btn btn-outline w-full gap-2 border-[#2C4549] text-[#2C4549] hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-[#2C4549]">
              <FiCalendar size={18} />
              Book Now
            </button>
            <button className="btn w-full gap-2 border-none bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D]">
              <FiLogIn size={18} />
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
