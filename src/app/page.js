// src/app/page.js

// Sections
import FAQ from "@/Sections/Home/FAQ/FAQ";
import Hero from "@/Sections/Home/Hero/Hero";
import RoomTypes from "@/Sections/Home/RoomTypes/RoomTypes";
import MiniGallery from "@/Sections/Home/MiniGallery/MiniGallery";
import WhyChooseUs from "@/Sections/Home/WhyChooseUs/WhyChooseUs";
import LocationMap from "@/Sections/Home/LocationMap/LocationMap";
import PricingPlans from "@/Sections/Home/PricingPlans/PricingPlans";
import GuestReviews from "@/Sections/Home/GuestReviews/GuestReviews";
import HotelFeatures from "@/Sections/Home/HotelFeatures/HotelFeatures";
import BookingSearchForm from "@/Sections/Home/BookingSearchForm/BookingSearchForm";

export default function Home() {
  // Hero content
  const heroContent = {
    title: "Welcome to DA Hotel",
    subtitle:
      "Experience luxury, comfort, and unforgettable moments. Your perfect getaway starts here.",
    buttons: {
      viewRooms: { text: "View Our Rooms", link: "/our-rooms" },
      aboutUs: { text: "About Us", link: "/about" },
      contactUs: { text: "Contact Us", link: "/contact" },
    },
    stats: [
      { value: "500+", label: "Happy Guests" },
      { value: "50+", label: "Luxury Rooms" },
      { value: "24/7", label: "Guest Support" },
    ],
  };

  const hotelLocations = [
    { value: "dhaka", label: "Dhaka - Main Branch" },
    { value: "chittagong", label: "Chittagong Branch" },
    { value: "cox-bazar", label: "Cox's Bazar Resort" },
    { value: "sylhet", label: "Sylhet Retreat" },
  ];

  const whyChooseUsContent = {
    features: [
      {
        icon: "star",
        title: "Luxury Experience",
        description:
          "Experience world-class luxury with premium amenities and personalized service.",
        color: "#FFD700",
      },
      {
        icon: "roomService",
        title: "24/7 Room Service",
        description:
          "Round-the-clock room service to cater to your every need, anytime day or night.",
        color: "#2C4549",
      },
      {
        icon: "shield",
        title: "Safe & Secure",
        description:
          "Your safety is our priority with 24/7 security and modern safety systems.",
        color: "#FFD700",
      },
      {
        icon: "users",
        title: "Expert Staff",
        description:
          "Professional and friendly staff dedicated to making your stay unforgettable.",
        color: "#2C4549",
      },
      {
        icon: "wifi",
        title: "Free High-Speed WiFi",
        description:
          "Stay connected with complimentary high-speed internet throughout the property.",
        color: "#FFD700",
      },
      {
        icon: "mapPin",
        title: "Prime Location",
        description:
          "Conveniently located near major attractions, business districts, and transport hubs.",
        color: "#2C4549",
      },
    ],
    highlights: [
      {
        number: "500+",
        label: "Happy Guests",
        icon: "heart",
      },
      {
        number: "50+",
        label: "Luxury Rooms",
        icon: "award",
      },
      {
        number: "4.8",
        label: "Guest Rating",
        icon: "star",
      },
      {
        number: "10+",
        label: "Years of Excellence",
        icon: "clock",
      },
    ],
    head: {
      title: "Why Choose Us?",
      subtitle: "The Perfect Choice for Your Stay",
      description:
        "Discover why thousands of guests choose DA Hotel for their unforgettable experiences. We combine luxury, comfort, and exceptional service to create the perfect getaway.",
      buttons: {
        bookNow: { text: "Book Your Stay Now", link: "/booking" },
        viewRooms: { text: "View Our Rooms", link: "/our-rooms" },
      },
    },
  };

  const roomTypesContent = {
    sectionHeader: {
      badge: "Accommodations",
      title: "Luxurious Room Types",
      description:
        "Discover our carefully designed rooms and suites, each offering unique comfort and style",
      ctaButton: {
        text: "View All Accommodations",
        link: "/our-rooms",
      },
    },
    rooms: [
      {
        id: 1,
        name: "Deluxe Room",
        slug: "deluxe-room",
        shortName: "Deluxe",
        price: "$129",
        priceNote: "per night",
        size: "350 sq ft",
        capacity: 2,
        bedType: "King Size Bed",
        view: "City View",
        images: [
          "/assets/images/Home/deluxe-room-1.webp",
          "/assets/images/Home/deluxe-room-2.webp",
          "/assets/images/Home/deluxe-room-3.webp",
        ],
        description:
          "Experience modern comfort in our Deluxe Room, featuring contemporary design and premium amenities for a relaxing stay.",
        longDescription:
          "Our Deluxe Rooms offer the perfect blend of style and comfort. With modern furnishings, plush bedding, and thoughtful amenities, these rooms provide an ideal retreat for both business and leisure travelers. Large windows flood the room with natural light, creating a warm and inviting atmosphere.",
        amenities: ["wifi", "tv", "wind", "coffee", "bathtub", "maximize"],
        features: [
          "Complimentary Water",
          "Mini Bar",
          "In-room Safe",
          "Ironing Board",
        ],
        popular: true,
        color: "from-[#FFD700] to-[#FFA500]",
      },
      {
        id: 2,
        name: "Executive Suite",
        slug: "executive-suite",
        shortName: "Executive",
        price: "$199",
        priceNote: "per night",
        size: "550 sq ft",
        capacity: 2,
        bedType: "King Size Bed + Sofa",
        view: "Panoramic City View",
        images: [
          "/assets/images/Home/executive-1.webp",
          "/assets/images/Home/executive-2.webp",
          "/assets/images/Home/executive-3.webp",
        ],
        description:
          "Designed for business travelers, our Executive Suite offers separate living area and premium workspace.",
        longDescription:
          "The Executive Suite is thoughtfully designed for the discerning business traveler. Featuring a separate living area with comfortable seating, a dedicated workspace with ergonomic chair, and premium amenities to ensure productivity and relaxation during your stay.",
        amenities: [
          "wifi",
          "tv",
          "wind",
          "coffee",
          "bathtub",
          "maximize",
          "roomService",
          "balcony",
        ],
        features: [
          "Complimentary Breakfast",
          "Express Check-in",
          "Late Check-out",
          "Airport Transfer",
        ],
        popular: false,
        color: "from-blue-500 to-blue-600",
      },
      {
        id: 3,
        name: "Family Suite",
        slug: "family-suite",
        shortName: "Family",
        price: "$249",
        priceNote: "per night",
        size: "750 sq ft",
        capacity: 4,
        bedType: "2 Queen Beds + Sofa",
        view: "Pool or City View",
        images: [
          "/assets/images/Home/family-1.webp",
          "/assets/images/Home/family-2.webp",
          "/assets/images/Home/family-3.webp",
        ],
        description:
          "Spacious suite perfect for families, featuring separate living area and kitchenette.",
        longDescription:
          "Our Family Suite provides ample space for the whole family. With two separate bedrooms, a comfortable living area, and a kitchenette, it's designed to make family vacations memorable. Kids will love the extra space, and parents will appreciate the thoughtful amenities.",
        amenities: [
          "wifi",
          "tv",
          "wind",
          "coffee",
          "bathtub",
          "maximize",
          "users",
          "balcony",
        ],
        features: [
          "Complimentary Breakfast (4)",
          "Kids Stay Free",
          "Rollaway Bed",
          "Pool Access",
        ],
        popular: false,
        color: "from-green-500 to-green-600",
      },
    ],
  };

  return (
    <>
      <Hero data={heroContent} />
      <BookingSearchForm hotelLocations={hotelLocations} />
      <WhyChooseUs data={whyChooseUsContent} />
      <RoomTypes data={roomTypesContent} />
      <HotelFeatures />
      <GuestReviews />
      <MiniGallery />
      <LocationMap />
      <PricingPlans />
      <FAQ />
    </>
  );
}
