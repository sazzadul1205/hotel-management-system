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

  const hotelFeaturesContent = {
    head: {
      title: "Hotel Amenities",
      subtitle: "Premium Features & Services",
      description:
        "Experience unparalleled comfort with our world-class amenities designed for your ultimate satisfaction.",
      buttons: {
        bookNow: { text: "Book Your Stay Now", link: "/booking" },
        viewRooms: { text: "View Our Rooms", link: "/our-rooms" },
      },
    },

    premiumFeatures: [
      {
        icon: "pool",
        title: "Swimming Pool",
        description: "Temperature-controlled indoor & outdoor pools",
        category: "premium",
      },
      {
        icon: "fitness",
        title: "Fitness Center",
        description: "State-of-the-art gym with personal trainers",
        category: "premium",
      },
      {
        icon: "spa",
        title: "Luxury Spa",
        description: "Massage, sauna, and wellness treatments",
        category: "premium",
      },
      {
        icon: "restaurant",
        title: "Fine Dining",
        description: "Multi-cuisine restaurant & rooftop bar",
        category: "premium",
      },
    ],

    roomFeatures: [
      {
        icon: "wifi",
        title: "Free High-Speed WiFi",
        description: "Up to 100 Mbps throughout the property",
      },
      {
        icon: "tv",
        title: "Smart LED TV",
        description: "55-inch 4K with streaming services",
      },
      {
        icon: "wind",
        title: "Air Conditioning",
        description: "Individually controlled AC/Heating",
      },
      {
        icon: "thermometer",
        title: "Mini Bar",
        description: "Fully stocked with premium beverages",
      },
      {
        icon: "coffee",
        title: "Coffee Maker",
        description: "Premium coffee & tea selection",
      },
      {
        icon: "volume",
        title: "Soundproof Rooms",
        description: "Peaceful environment for quality sleep",
      },
    ],

    amenities: [
      {
        icon: "roomService",
        title: "24/7 Room Service",
        description: "In-dining available anytime",
      },
      {
        icon: "parking",
        title: "Free Parking",
        description: "Secure parking with CCTV surveillance",
      },
      {
        icon: "store",
        title: "Convenience Store",
        description: "Open 24/7 for essentials",
      },
      {
        icon: "laundry",
        title: "Laundry Service",
        description: "Same-day dry cleaning available",
      },
      {
        icon: "shield",
        title: "24/7 Security",
        description: "Professional security personnel",
      },
      {
        icon: "elevator",
        title: "Elevator Access",
        description: "Wheelchair accessible",
      },
      {
        icon: "clock",
        title: "Express Check-in/out",
        description: "Save time with digital check-in",
      },
      {
        icon: "calendar",
        title: "Tour Desk",
        description: "Local tours & activities booking",
      },
    ],

    businessFeatures: [
      {
        icon: "meeting",
        title: "Conference Halls",
        description: "State-of-the-art meeting rooms",
      },
      {
        icon: "airport",
        title: "Airport Transfer",
        description: "Luxury car pickup & drop-off",
      },
      {
        icon: "mapPin",
        title: "Central Location",
        description: "Close to business district",
      },
      {
        icon: "breakfast",
        title: "Business Breakfast",
        description: "Early breakfast for professionals",
      },
    ],
  };

  const guestReviewsContent = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      date: "March 2026",
      review:
        "Absolutely stunning hotel! The rooms were immaculate, the staff went above and beyond, and the breakfast buffet was incredible. The pool area is perfect for relaxation. Will definitely be coming back!",
      image: null,
      verified: true,
      stayedFor: "Family Vacation",
      roomType: "Deluxe Suite",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      date: "February 2026",
      review:
        "One of the best hotel experiences I've ever had. The attention to detail is remarkable. The spa treatment was world-class, and the rooftop restaurant offers breathtaking views. Highly recommend!",
      image: null,
      verified: true,
      stayedFor: "Business Trip",
      roomType: "Executive Suite",
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "London, UK",
      rating: 4,
      date: "February 2026",
      review:
        "Beautiful hotel with excellent service. The location is perfect - close to all major attractions. The only minor issue was slow WiFi in the room, but everything else was perfect. Would stay again!",
      image: null,
      verified: true,
      stayedFor: "Couple Getaway",
      roomType: "Deluxe Room",
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      date: "January 2026",
      review:
        "Exceptional service from check-in to check-out. The concierge helped us plan our entire itinerary. The rooms are spacious and beautifully designed. The complimentary afternoon tea was a lovely touch!",
      image: null,
      verified: true,
      stayedFor: "Honeymoon",
      roomType: "Premium Suite",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Sydney, Australia",
      rating: 5,
      date: "January 2026",
      review:
        "This hotel exceeded all expectations. The staff remembered our names and preferences. The fitness center is well-equipped, and the pool area is pristine. Best hotel in the city by far!",
      image: null,
      verified: true,
      stayedFor: "Leisure",
      roomType: "Family Room",
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Toronto, Canada",
      rating: 4.5,
      date: "December 2025",
      review:
        "Great value for money. The location is superb, and the rooms are very comfortable. The staff was friendly and helpful. Would definitely recommend to friends and family.",
      image: null,
      verified: true,
      stayedFor: "Business",
      roomType: "Standard Room",
    },
  ];

  const galleryContent = {
    head: {
      title: "Our Gallery",
      subtitle: "A Glimpse of Paradise",
      description:
        "Explore our luxurious spaces through these captivating moments.",
    },
    gallery: [
      {
        id: 1,
        src: "/assets/images/Home/lobby.webp",
        alt: "Hotel Lobby",
        category: "Lobby",
        title: "Elegant Grand Lobby",
        width: 800,
        height: 600,
      },
      {
        id: 2,
        src: "/assets/images/Home/rooms.webp",
        alt: "Deluxe Room",
        category: "Rooms",
        title: "Luxury Deluxe Suite",
        width: 800,
        height: 600,
      },
      {
        id: 3,
        src: "/assets/images/Home/pool.webp",
        alt: "Swimming Pool",
        category: "Facilities",
        title: "Infinity Swimming Pool",
        width: 800,
        height: 600,
      },
      {
        id: 4,
        src: "/assets/images/Home/restaurant.webp",
        alt: "Restaurant",
        category: "Dining",
        title: "Fine Dining Restaurant",
        width: 800,
        height: 600,
      },
      {
        id: 5,
        src: "/assets/images/Home/spa.webp",
        alt: "Spa",
        category: "Wellness",
        title: "Luxury Spa & Wellness",
        width: 800,
        height: 600,
      },
      {
        id: 6,
        src: "/assets/images/Home/conference.webp",
        alt: "Conference Hall",
        category: "Business",
        title: "Modern Conference Hall",
        width: 800,
        height: 600,
      },
    ],
  };

  const hotelLocationContent = {
    head: {
      title: "Find Us",
      subtitle: "Location & Directions",
      description:
        "Conveniently located in the heart of the city, close to major attractions and transport hubs.",
    },

    hotelLocation: {
      name: "DA Hotel",
      address: "123 Luxury Avenue, Downtown District, New York, NY 10001",
      lat: 40.7128,
      lng: -74.006,
      phone: "+1 (555) 123-4567",
      email: "reservations@dahotel.com",
      website: "www.dahotel.com",
      nearby: [
        { name: "Central Park", distance: "0.8 miles", time: "5 min drive" },
        { name: "Times Square", distance: "1.2 miles", time: "8 min drive" },
        {
          name: "Empire State Building",
          distance: "0.5 miles",
          time: "3 min drive",
        },
        {
          name: "Broadway Theater",
          distance: "1.0 miles",
          time: "6 min drive",
        },
        {
          name: "Rockefeller Center",
          distance: "0.9 miles",
          time: "5 min drive",
        },
        {
          name: "Museum of Modern Art",
          distance: "0.7 miles",
          time: "4 min drive",
        },
      ],
    },

    directions: {
      airport: {
        name: "JFK International Airport",
        driving: "25 min",
        transit: "45 min",
        taxi: "$45-60",
      },
      train: {
        name: "Grand Central Station",
        driving: "10 min",
        transit: "15 min",
        taxi: "$15-20",
      },
    },
  };

  const pricingPlanContent = {
    head: {
      title: "Room Rates",
      subtitle: "Our Pricing Plans",
      description:
        "Choose the perfect accommodation for your needs. Rates vary by season.",
      flexiblePricingMessage:
        "Room rates are not fixed and may vary based on season, availability, and special promotions. Contact us for corporate and group discounts.",
      SpecialNotes: [
        {
          title: "Corporate Discounts",
          description: "Available for business bookings",
        },
        { title: "Group Rates", description: "Special pricing for 5+ rooms" },
        {
          title: "Long Stay Offers",
          description: "Weekly & monthly rates available",
        },
      ],
    },
    plans: [
      {
        id: 1,
        name: "Deluxe Room",
        icon: "star", // Changed from FiStar to string
        description:
          "Perfect for couples and solo travelers seeking comfort and style",
        features: [
          "King Size Bed",
          "Free High-Speed WiFi",
          "55-inch Smart TV",
          "Premium Air Conditioning",
          "Luxury Work Desk",
          "Mini Bar",
          "Coffee Maker",
          "Luxury Bath Amenities",
        ],
        priceNote: "Starting from",
        basePrice: 129,
        color: "from-[#FFD700] to-[#FFA500]",
        badge: "Most Popular",
        popular: true,
        url: "/rooms/deluxe",
      },
      {
        id: 2,
        name: "Executive Suite",
        icon: "briefcase", // Changed from FiBriefcase to string
        description: "Designed for business travelers with premium amenities",
        features: [
          "Executive King Bed",
          "Ultra High-Speed WiFi",
          "65-inch 4K Smart TV",
          "Premium Climate Control",
          "Executive Work Station",
          "Complimentary Breakfast",
          "Express Check-in/out",
          "Airport Transfer Available",
          "Meeting Room Access",
        ],
        priceNote: "Starting from",
        basePrice: 199,
        color: "from-blue-500 to-blue-600",
        badge: "Business Choice",
        popular: false,
        url: "/rooms/executive-suite",
      },
      {
        id: 3,
        name: "Family Suite",
        icon: "users", // Changed from MdOutlineFamilyRestroom to string
        description: "Spacious accommodations for families and groups",
        features: [
          "2 Queen Beds + Sofa Bed",
          "High-Speed WiFi",
          "65-inch Smart TV",
          "Separate Living Area",
          "Full Kitchenette",
          "Complimentary Breakfast (4 ppl)",
          "Swimming Pool Access",
          "Kids Play Area Access",
          "Extra Rollaway Bed Available",
        ],
        priceNote: "Starting from",
        basePrice: 249,
        color: "from-green-500 to-green-600",
        badge: "Family Favorite",
        popular: false,
        url: "/rooms/family-suite",
      },
    ],
    messages: {
      "Deluxe Room": "* Price varies by season and availability",
      "Executive Suite": "* Corporate rates available for long stays",
      "Family Suite": "* Child under 12 stays free (sharing bed)",
    },
  };

  const faqContent = {
    head: {
      title: "FAQ",
      subtitle: "Frequently Asked Questions",
      description:
        "Find answers to common questions about your stay at DA Hotel",
    },
    faqs: [
      {
        id: 1,
        category: "booking",
        question: "How do I make a reservation?",
        answer:
          "You can make a reservation through our website by clicking the 'Book Now' button, calling our reservation hotline at +1 (555) 123-4567, or sending an email to reservations@dahotel.com. Online booking is available 24/7 and offers the best rates guaranteed.",
      },
      {
        id: 2,
        category: "booking",
        question: "Do I need to pay a deposit when booking?",
        answer:
          "Yes, we require a 20% deposit at the time of booking to secure your reservation. The remaining balance is due upon check-in. For special packages and peak seasons, full prepayment may be required.",
      },
      {
        id: 3,
        category: "policies",
        question: "What is your cancellation policy?",
        answer:
          "Free cancellation up to 48 hours before check-in. Cancellations within 48 hours will incur a charge equal to the first night's stay. For non-refundable rates, no refunds are provided for cancellations or modifications.",
      },
      {
        id: 4,
        category: "policies",
        question: "What are the check-in and check-out times?",
        answer:
          "Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges. We offer complimentary luggage storage for early arrivals or late departures.",
      },
      {
        id: 5,
        category: "amenities",
        question: "Is WiFi free in the hotel?",
        answer:
          "Yes, we offer complimentary high-speed WiFi throughout the hotel, including all guest rooms, public areas, and the poolside. Premium high-speed internet is also available for business travelers at no additional cost.",
      },
      {
        id: 6,
        category: "amenities",
        question: "Does the hotel have a swimming pool?",
        answer:
          "Yes, we have both indoor and outdoor temperature-controlled swimming pools. The outdoor pool is open from 7 AM to 8 PM, and the indoor pool is open 24/7. Pool towels are provided free of charge.",
      },
      {
        id: 7,
        category: "services",
        question: "Is room service available?",
        answer:
          "Yes, we offer 24/7 room service with a diverse menu featuring local and international cuisine. Breakfast, lunch, dinner, and snacks are available. A service charge may apply for orders between 11 PM and 6 AM.",
      },
      {
        id: 8,
        category: "services",
        question: "Does the hotel offer airport transportation?",
        answer:
          "Yes, we provide airport shuttle service for a nominal fee. Please inform us of your flight details at least 24 hours in advance to arrange pickup. Luxury car transfer can also be arranged upon request.",
      },
      {
        id: 9,
        category: "policies",
        question: "Are pets allowed?",
        answer:
          "Pets are welcome at our hotel! We charge a $50 cleaning fee per stay. Maximum 2 pets per room. Please inform us when booking so we can prepare a pet-friendly room with amenities for your furry friend.",
      },
      {
        id: 10,
        category: "booking",
        question: "Do you offer group booking discounts?",
        answer:
          "Yes, we offer special rates for group bookings of 5 rooms or more. Please contact our group sales department at groups@dahotel.com or call +1 (555) 123-4568 for customized quotes and packages.",
      },
      {
        id: 11,
        category: "amenities",
        question: "Is breakfast included in the room price?",
        answer:
          "Breakfast inclusion depends on the rate plan you choose. Some packages include complimentary breakfast, while others do not. You can add breakfast for $18 per person per day. Children under 12 eat free when accompanied by a paying adult.",
      },
      {
        id: 12,
        category: "services",
        question: "Does the hotel have a fitness center?",
        answer:
          "Yes, our fitness center is open 24/7 and features state-of-the-art equipment including treadmills, ellipticals, stationary bikes, weight machines, and free weights. Personal trainers can be arranged upon request.",
      },
      {
        id: 13,
        category: "policies",
        question: "What is the minimum age to check-in?",
        answer:
          "Guests must be at least 18 years old to check-in. Guests under 18 must be accompanied by an adult. Valid government-issued photo ID and credit card are required at check-in.",
      },
      {
        id: 14,
        category: "booking",
        question: "Can I modify or change my reservation?",
        answer:
          "Yes, you can modify your reservation online through your booking confirmation email, by calling our reservations department, or by email. Modifications are subject to availability and rate changes.",
      },
      {
        id: 15,
        category: "amenities",
        question: "Is parking available?",
        answer:
          "Yes, we offer complimentary on-site parking for all guests. The parking area is secured with 24/7 CCTV surveillance. Valet parking is available for $10 per day.",
      },
    ],
    buttons: [
      { title: "Live Chat", link: "/contact" },
      { title: "Call Us", link: "tel:+15551234567" },
      { title: "Email Support", link: "mailto:support@dahotel.com" },
    ],
    information: {
      phone: "+1 (555) 123-4567",
      email: "support@dahotel.com",
    },
  };

  return (
    <>
      <Hero data={heroContent || {}} />
      <BookingSearchForm hotelLocations={hotelLocations || {}} />
      <WhyChooseUs data={whyChooseUsContent || {}} />
      <RoomTypes data={roomTypesContent || {}} />
      <HotelFeatures data={hotelFeaturesContent || {}} />
      <GuestReviews data={guestReviewsContent || {}} />
      <MiniGallery data={galleryContent || {}} />
      <LocationMap data={hotelLocationContent || {}} />
      <PricingPlans data={pricingPlanContent || {}} />
      <FAQ data={faqContent || {}} />
    </>
  );
}