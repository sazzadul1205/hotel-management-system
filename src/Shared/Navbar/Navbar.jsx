"use client";
// src/Shared/Navbar/Navbar.jsx

// React
import React, { useState, useEffect } from "react";

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
  FiSun,
  FiMoon
} from "react-icons/fi";
import {
  MdOutlineMeetingRoom,
  MdOutlineRestaurantMenu,
  MdOutlineSpa,
  MdOutlinePool,
  MdOutlineLocalParking,
  MdOutlineEventAvailable
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
    icon: FiHome
  },
  {
    label: "About Us",
    href: "/about",
    icon: FiInfo
  },
  {
    label: "Our Rooms",
    href: "/our-rooms",
    icon: MdOutlineMeetingRoom,
    children: [
      {
        label: "Deluxe Suite",
        href: "/rooms/deluxe-suite",
        icon: FiStar
      },
      {
        label: "Family Room",
        href: "/rooms/family-room",
        icon: FiUsers
      },
      {
        label: "Executive Suite",
        href: "/rooms/executive-suite",
        icon: FiAward
      }
    ]
  },
  {
    label: "Facilities",
    href: "/facilities",
    icon: FiGrid,
    children: [
      {
        label: "Restaurant & Bar",
        href: "/facilities/restaurant",
        icon: MdOutlineRestaurantMenu
      },
      {
        label: "Swimming Pool",
        href: "/facilities/pool",
        icon: MdOutlinePool
      },
      {
        label: "Spa & Wellness",
        href: "/facilities/spa",
        icon: MdOutlineSpa
      },
      {
        label: "Fitness Center",
        href: "/facilities/gym",
        icon: GiGymBag
      },
      {
        label: "Conference Hall",
        href: "/facilities/conference",
        icon: MdOutlineEventAvailable
      }
    ]
  },
  {
    label: "Dining",
    href: "/dining",
    icon: FiCoffee,
    children: [
      {
        label: "Main Restaurant",
        href: "/dining/main-restaurant",
        icon: MdOutlineRestaurantMenu
      },
      {
        label: "Rooftop Cafe",
        href: "/dining/rooftop-cafe",
        icon: FiCoffee
      },
      {
        label: "Poolside Bar",
        href: "/dining/poolside-bar",
        icon: FiCoffee
      }
    ]
  },
  {
    label: "Services",
    href: "/services",
    icon: FiBox,
    children: [
      {
        label: "Room Service",
        href: "/services/room-service",
        icon: FiShoppingBag
      },
      {
        label: "Free WiFi",
        href: "/services/wifi",
        icon: FiWifi
      },
      {
        label: "Parking",
        href: "/services/parking",
        icon: MdOutlineLocalParking
      },
      {
        label: "Airport Transfer",
        href: "/services/airport-transfer",
        icon: FiMapPin
      }
    ]
  },
  {
    label: "Contact",
    href: "/contact",
    icon: FiPhone
  }
];

const Navbar = () => {
  // Dropdown
  const [openDropdown, setOpenDropdown] = useState(null);

  // Theme - default to light mode with original colors
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      }
      return "light"; // Default to light mode
    }
    return "light";
  });

  // Theme menu
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  // Get current page
  const pathname = usePathname();

  // Available themes
  const themes = [
    { id: "light", name: "Light", icon: FiSun },
    { id: "dark", name: "Dark", icon: FiMoon },
  ];

  // Initialize theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Change theme function
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    setShowThemeMenu(false);
  };

  // Function to check if a link is active
  const isActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  // Function to check if any child is active
  const isChildActive = (children) => {
    return children?.some(child => pathname?.startsWith(child.href));
  };

  // Get current theme icon
  const CurrentThemeIcon = themes.find(t => t.id === theme)?.icon || FiSun;

  // Custom colors for light mode (original design)
  // In dark mode, DaisyUI handles it automatically
  const navbarBg = theme === "light" ? "#2C4549" : "bg-base-100";
  const textColor = theme === "light" ? "text-white" : "text-base-content";
  const hoverColor = theme === "light" ? "hover:text-[#FFD700]" : "hover:text-primary";
  const activeColor = theme === "light" ? "text-[#FFD700]" : "text-primary";
  const btnOutline = theme === "light"
    ? "border-white text-white hover:bg-[#FFD700] hover:text-[#2C4549] hover:border-[#FFD700]"
    : "border-base-content text-base-content hover:bg-primary hover:text-primary-content hover:border-primary";
  const btnSolid = theme === "light"
    ? "bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D]"
    : "bg-primary text-primary-content hover:bg-primary-focus";

  return (
    <nav className={`navbar ${theme === "light" ? "bg-[#2C4549]" : "bg-base-100"} shadow-sm px-4 md:px-10 ${theme === "light" ? "text-white" : "text-base-content"}`}>
      {/* Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className={`btn btn-ghost ${theme === "light" ? "text-white" : "text-base-content"} lg:hidden`}>
            <FiMenu className="h-5 w-5" />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-10 mt-3 w-64 p-2 shadow"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.children ? (
                  <>
                    <div className={`flex items-center gap-2 font-semibold ${isChildActive(item.children) ? 'text-primary bg-base-200' : ''}`}>
                      {item.icon && <item.icon size={18} />}
                      {item.label}
                    </div>
                    <ul className="p-2 ml-4">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            href={child.href}
                            className={`flex items-center gap-2 ${isActive(child.href) ? 'text-primary font-semibold' : ''}`}
                          >
                            {child.icon && <child.icon size={14} />}
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 font-semibold ${isActive(item.href) ? 'text-primary' : ''}`}
                  >
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Mobile Theme Menu Item */}
            <li className="border-t border-base-200 mt-2 pt-2">
              <details>
                <summary className="flex items-center gap-2">
                  <CurrentThemeIcon size={18} />
                  Theme: {themes.find(t => t.id === theme)?.name || "Light"}
                </summary>
                <ul className="p-2">
                  {themes.map((t) => (
                    <li key={t.id}>
                      <button
                        onClick={() => changeTheme(t.id)}
                        className={`flex items-center gap-2 w-full ${theme === t.id ? 'text-primary' : ''}`}
                      >
                        <t.icon size={14} />
                        {t.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="text-2xl md:text-4xl font-bold">
          <b>DA</b><i className="pl-1 font-light">Hotel</i>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <details open={openDropdown === item.label}>
                  <summary
                    className={`flex items-center gap-2 transition-colors cursor-pointer ${isChildActive(item.children)
                      ? activeColor
                      : `${theme === "light" ? "text-white" : "text-base-content"} ${hoverColor}`
                      }`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </summary>
                  <ul
                    className="p-2 bg-base-100 text-base-content w-56 z-10 shadow-lg rounded-lg"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link
                          href={child.href}
                          className={`flex items-center gap-2 transition-colors rounded-lg px-2 py-1 ${isActive(child.href)
                            ? 'bg-primary text-primary-content'
                            : 'hover:bg-base-200'
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
                  className={`flex items-center gap-2 transition-colors ${isActive(item.href)
                    ? `${activeColor} font-semibold`
                    : `${theme === "light" ? "text-white" : "text-base-content"} ${hoverColor}`
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

      <div className="navbar-end gap-3">


        <button className={`btn btn-outline gap-2 hidden sm:flex ${btnOutline}`}>
          <FiCalendar size={18} />
          Book Now
        </button>
        <button className={`btn gap-2 border-none ${btnSolid}`}>
          <FiLogIn size={18} />
          Login
        </button>

        {/* Desktop Theme Toggle Button - Simple toggle */}
        <button
          onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
          className={` px-2 hover-text-primary-focus ${theme === "light" ? "text-white" : "text-base-content"}`}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;