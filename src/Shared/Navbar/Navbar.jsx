import React from "react";
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
  FiShoppingBag
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
  return (
    <nav className="navbar bg-[#2C4549] shadow-sm px-4 md:px-10 text-white">
      {/* Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <FiMenu className="h-5 w-5" />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-10 mt-3 w-64 p-2 shadow"
          >
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.children ? (
                  <>
                    <a className="flex items-center gap-2 font-semibold">
                      {item.icon && <item.icon size={18} />}
                      {item.label}
                    </a>
                    <ul className="p-2 ml-4">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <a href={child.href} className="flex items-center gap-2">
                            {child.icon && <child.icon size={14} />}
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={item.href} className="flex items-center gap-2 font-semibold">
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <a className="text-2xl md:text-4xl font-bold text-white">
          <b>DA</b><i className="pl-1 font-light">Hotel</i>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <details>
                  <summary className="flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors cursor-pointer">
                    {item.icon && <item.icon size={18} />}
                    {item.label}
                  </summary>
                  <ul className="p-2 bg-white text-gray-800 w-56 z-10 shadow-lg rounded-lg">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <a
                          href={child.href}
                          className="flex items-center gap-2 hover:bg-[#2C4549] hover:text-white transition-colors rounded-lg px-2 py-1"
                        >
                          {child.icon && <child.icon size={16} />}
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors"
                >
                  {item.icon && <item.icon size={18} />}
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <button className="btn btn-outline border-white text-white hover:bg-[#FFD700] hover:text-[#2C4549] hover:border-[#FFD700] gap-2 hidden sm:flex">
          <FiCalendar size={18} />
          Book Now
        </button>
        <button className="btn bg-[#FFD700] text-[#2C4549] hover:bg-[#FFE44D] border-none gap-2">
          <FiLogIn size={18} />
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;