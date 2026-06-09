// src/Sections/AboutUs/Team/Team.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiStar,
  FiUsers,
  FiAward,
  FiClock,
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";

const Team = ({ content = {} }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Destructure content with fallbacks
  const {
    title = "Meet Our Leadership Team",
    subtitle = "The Faces Behind DA Hotel",
    description = "Meet the dedicated professionals who work tirelessly to make your stay exceptional. Our team brings passion, expertise, and genuine care to everything we do.",
    teamMembers = [
      {
        id: 1,
        name: "Sarah Johnson",
        position: "General Manager",
        bio: "With over 15 years of experience in luxury hospitality, Sarah leads our team with passion and dedication. She ensures every guest receives the highest standard of service.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        email: "sarah.johnson@dahotel.com",
        phone: "+1 (555) 123-4567",
        social: {
          linkedin: "#",
          twitter: "#",
          instagram: "#",
        },
        experience: "15+ years",
        expertise: ["Luxury Management", "Guest Relations", "Team Leadership"],
        quote: "Every guest deserves to feel like royalty.",
        featured: true,
      },
      {
        id: 2,
        name: "Michael Chen",
        position: "Executive Chef",
        bio: "Award-winning chef bringing culinary excellence from around the world. Michael creates unforgettable dining experiences using fresh, local ingredients.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        email: "michael.chen@dahotel.com",
        phone: "+1 (555) 123-4568",
        social: {
          linkedin: "#",
          instagram: "#",
        },
        experience: "12+ years",
        expertise: ["International Cuisine", "Menu Design", "Kitchen Management"],
        quote: "Food is love made visible.",
        featured: true,
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        position: "Head of Guest Relations",
        bio: "Emily ensures every guest's needs are met with warmth and efficiency. Her attention to detail creates memorable experiences for all visitors.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
        email: "emily.rodriguez@dahotel.com",
        phone: "+1 (555) 123-4569",
        social: {
          linkedin: "#",
          twitter: "#",
        },
        experience: "8+ years",
        expertise: ["Customer Service", "Conflict Resolution", "Event Planning"],
        quote: "A smile is the same in every language.",
        featured: false,
      },
      {
        id: 4,
        name: "David Thompson",
        position: "Facilities Director",
        bio: "David maintains our world-class facilities, ensuring everything runs smoothly behind the scenes. His team keeps the hotel in pristine condition.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        email: "david.thompson@dahotel.com",
        phone: "+1 (555) 123-4570",
        social: {
          linkedin: "#",
        },
        experience: "10+ years",
        expertise: ["Maintenance", "Safety Compliance", "Vendor Management"],
        quote: "Excellence is in the details.",
        featured: false,
      },
      {
        id: 5,
        name: "Lisa Wong",
        position: "Spa & Wellness Director",
        bio: "Lisa brings tranquility and rejuvenation to our guests through our award-winning spa services. Her holistic approach promotes complete wellness.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80",
        email: "lisa.wong@dahotel.com",
        phone: "+1 (555) 123-4571",
        social: {
          linkedin: "#",
          instagram: "#",
        },
        experience: "9+ years",
        expertise: ["Spa Management", "Wellness Programs", "Staff Training"],
        quote: "Wellness is the key to happiness.",
        featured: false,
      },
      {
        id: 6,
        name: "James Wilson",
        position: "Sales & Marketing Director",
        bio: "James drives our brand presence and business growth. His innovative strategies have positioned DA Hotel as a market leader.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        email: "james.wilson@dahotel.com",
        phone: "+1 (555) 123-4572",
        social: {
          linkedin: "#",
          twitter: "#",
        },
        experience: "11+ years",
        expertise: ["Digital Marketing", "Brand Strategy", "Partnerships"],
        quote: "Storytelling creates connections.",
        featured: false,
      },
    ],
    stats = [
      { value: "50+", label: "Team Members", icon: "users" },
      { value: "15+", label: "Years Combined Experience", icon: "clock" },
      { value: "98%", label: "Guest Satisfaction", icon: "star" },
      { value: "20+", label: "Industry Awards", icon: "award" },
    ],
    values = [
      {
        title: "Passion",
        description: "We love what we do",
        icon: "heart",
      },
      {
        title: "Excellence",
        description: "We strive for perfection",
        icon: "award",
      },
      {
        title: "Integrity",
        description: "We do the right thing",
        icon: "star",
      },
      {
        title: "Teamwork",
        description: "Together we achieve more",
        icon: "users",
      },
    ],
    cta = {
      text: "Join Our Team",
      link: "/careers",
    },
  } = content;

  // Helper to render icons
  const renderIcon = (iconName, className = "h-5 w-5 sm:h-6 sm:w-6") => {
    const iconClass = `text-[#FFD700] ${className}`;
    switch (iconName) {
      case "users":
        return <FiUsers className={iconClass} />;
      case "award":
        return <FiAward className={iconClass} />;
      case "clock":
        return <FiClock className={iconClass} />;
      case "star":
        return <FiStar className={iconClass} />;
      case "heart":
        return <FiHeart className={iconClass} />;
      default:
        return <FiUsers className={iconClass} />;
    }
  };

  // Filter featured members for carousel
  const featuredMembers = teamMembers.filter((member) => member.featured);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMembers.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredMembers.length) % featuredMembers.length);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFD700]/10 px-3 py-1.5 sm:mb-4 sm:gap-2 sm:px-4 sm:py-2">
            <FiUsers className="h-4 w-4 text-[#FFD700] sm:h-4.5 sm:w-4.5" />
            <span className="text-xs font-semibold tracking-wide text-[#2C4549] uppercase sm:text-sm">
              {subtitle}
            </span>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Featured Team Carousel */}
        {featuredMembers.length > 0 && (
          <div className="mx-auto mb-12 max-w-5xl sm:mb-16">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="relative h-80 md:h-auto md:w-1/2">
                    <Image
                      src={featuredMembers[currentSlide].image}
                      alt={featuredMembers[currentSlide].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:bg-linear-to-r"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:w-1/2 md:p-8">
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-[#2C4549]">
                        {featuredMembers[currentSlide].name}
                      </h3>
                      <MdOutlineVerified className="text-blue-500" size={20} />
                    </div>
                    <p className="mb-3 text-lg font-semibold text-[#FFD700]">
                      {featuredMembers[currentSlide].position}
                    </p>
                    <p className="mb-4 text-sm text-gray-600">{featuredMembers[currentSlide].bio}</p>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-[#2C4549]">Expertise:</p>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {featuredMembers[currentSlide].expertise.map((exp, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-[#FFD700]/10 px-2 py-0.5 text-xs text-[#2C4549]"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 flex items-center gap-4 text-sm">
                      <div>
                        <span className="text-xs text-gray-400">Experience</span>
                        <p className="font-semibold text-[#2C4549]">
                          {featuredMembers[currentSlide].experience}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400">Contact</span>
                        <p className="text-xs text-gray-600">{featuredMembers[currentSlide].email}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {featuredMembers[currentSlide].social.linkedin && (
                        <a
                          href={featuredMembers[currentSlide].social.linkedin}
                          className="text-gray-400 transition hover:text-[#0077b5]"
                        >
                          <FiLinkedin size={18} />
                        </a>
                      )}
                      {featuredMembers[currentSlide].social.twitter && (
                        <a
                          href={featuredMembers[currentSlide].social.twitter}
                          className="text-gray-400 transition hover:text-[#1DA1F2]"
                        >
                          <FiTwitter size={18} />
                        </a>
                      )}
                      {featuredMembers[currentSlide].social.instagram && (
                        <a
                          href={featuredMembers[currentSlide].social.instagram}
                          className="text-gray-400 transition hover:text-[#E4405F]"
                        >
                          <FiInstagram size={18} />
                        </a>
                      )}
                    </div>

                    <div className="mt-4 rounded-lg bg-gray-50 p-3">
                      <p className="text-sm italic text-gray-600">
                        "{featuredMembers[currentSlide].quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              {featuredMembers.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-[#FFD700] md:left-4"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-[#FFD700] md:right-4"
                  >
                    <FiChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Dots */}
              <div className="mt-4 flex justify-center gap-2">
                {featuredMembers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${currentSlide === idx ? "w-6 bg-[#FFD700]" : "w-2 bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Team Grid */}
        <div className="mx-auto mb-12 max-w-6xl sm:mb-16">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:mb-8 sm:text-2xl">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="mb-1 text-lg font-bold text-[#2C4549]">{member.name}</h3>
                  <p className="mb-2 text-sm font-semibold text-[#FFD700]">{member.position}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mx-auto mb-12 max-w-5xl sm:mb-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-xl bg-white p-4 text-center shadow-md sm:p-5">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD700]/10 sm:h-12 sm:w-12">
                  {renderIcon(stat.icon, "h-5 w-5")}
                </div>
                <div className="text-xl font-bold text-[#FFD700] sm:text-2xl">{stat.value}</div>
                <div className="text-xs text-gray-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:mb-8 sm:text-2xl">
            Our Team Values
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10 transition-transform hover:scale-110 sm:h-14 sm:w-14">
                  {renderIcon(value.icon, "h-6 w-6")}
                </div>
                <h4 className="mb-0.5 text-sm font-bold text-[#2C4549] sm:text-base">
                  {value.title}
                </h4>
                <p className="text-xs text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center sm:mt-16">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <FiHeart size={16} />
            {cta.text}
            <FiUsers size={16} />
          </Link>
          <p className="mt-3 text-xs text-gray-400">Join our growing family of hospitality professionals</p>
        </div>
      </div>

      {/* Modal for Team Member Details */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center text-black bg-black/80 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex justify-end bg-white p-3">
              <button
                onClick={() => setSelectedMember(null)}
                className="rounded-full p-1 transition hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="relative h-64 w-full md:h-auto md:w-1/2">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-[#2C4549]">{selectedMember.name}</h3>
                  <p className="mb-3 text-lg font-semibold text-[#FFD700]">{selectedMember.position}</p>
                  <p className="mb-4 text-sm text-gray-600">{selectedMember.bio}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-[#2C4549]">Areas of Expertise:</p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {selectedMember.expertise.map((exp, idx) => (
                        <span key={idx} className="rounded-full bg-[#FFD700]/10 px-2 py-0.5 text-xs">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="font-semibold">Experience:</span> {selectedMember.experience}
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      <a href={`mailto:${selectedMember.email}`} className="text-blue-600">
                        {selectedMember.email}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span>{" "}
                      <a href={`tel:${selectedMember.phone}`}>{selectedMember.phone}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;