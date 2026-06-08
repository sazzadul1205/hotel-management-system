// Component/Home/GuestReviews/GuestReviews.jsx
"use client";
import React, { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const GuestReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      date: "March 2026",
      review: "Absolutely stunning hotel! The rooms were immaculate, the staff went above and beyond, and the breakfast buffet was incredible. The pool area is perfect for relaxation. Will definitely be coming back!",
      image: null,
      verified: true,
      stayedFor: "Family Vacation",
      roomType: "Deluxe Suite"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      date: "February 2026",
      review: "One of the best hotel experiences I've ever had. The attention to detail is remarkable. The spa treatment was world-class, and the rooftop restaurant offers breathtaking views. Highly recommend!",
      image: null,
      verified: true,
      stayedFor: "Business Trip",
      roomType: "Executive Suite"
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "London, UK",
      rating: 4,
      date: "February 2026",
      review: "Beautiful hotel with excellent service. The location is perfect - close to all major attractions. The only minor issue was slow WiFi in the room, but everything else was perfect. Would stay again!",
      image: null,
      verified: true,
      stayedFor: "Couple Getaway",
      roomType: "Deluxe Room"
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      date: "January 2026",
      review: "Exceptional service from check-in to check-out. The concierge helped us plan our entire itinerary. The rooms are spacious and beautifully designed. The complimentary afternoon tea was a lovely touch!",
      image: null,
      verified: true,
      stayedFor: "Honeymoon",
      roomType: "Premium Suite"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Sydney, Australia",
      rating: 5,
      date: "January 2026",
      review: "This hotel exceeded all expectations. The staff remembered our names and preferences. The fitness center is well-equipped, and the pool area is pristine. Best hotel in the city by far!",
      image: null,
      verified: true,
      stayedFor: "Leisure",
      roomType: "Family Room"
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Toronto, Canada",
      rating: 4.5,
      date: "December 2025",
      review: "Great value for money. The location is superb, and the rooms are very comfortable. The staff was friendly and helpful. Would definitely recommend to friends and family.",
      image: null,
      verified: true,
      stayedFor: "Business",
      roomType: "Standard Room"
    }
  ];

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;
  const ratingCounts = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => Math.floor(r.rating) === 4).length,
    3: reviews.filter(r => Math.floor(r.rating) === 3).length,
    2: reviews.filter(r => Math.floor(r.rating) === 2).length,
    1: reviews.filter(r => Math.floor(r.rating) === 1).length,
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-[#FFD700] text-sm" />
        ))}
        {hasHalfStar && (
          <FaStar className="text-[#FFD700] text-sm opacity-50" />
        )}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <FaStar key={i} className="text-gray-300 text-sm" />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-linear-to-b  from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C4549] mb-4">
            Guest Reviews
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our guests have to say about their stay
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#2C4549] mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                <StarRating rating={parseFloat(averageRating)} />
              </div>
              <div className="text-gray-500 text-sm">{totalReviews} verified reviews</div>
            </div>

            <div className="flex-1 w-full">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3 mb-2">
                  <div className="w-12 text-sm text-gray-600">{star} star</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FFD700] rounded-full"
                      style={{ width: `${(ratingCounts[star] / totalReviews) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-sm text-gray-600">
                    {((ratingCounts[star] / totalReviews) * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-[#2C4549] mb-1">98%</div>
              <div className="text-sm text-gray-500">Would recommend</div>
              <div className="text-xs text-gray-400 mt-2">Based on 500+ reviews</div>
            </div>
          </div>
        </div>

        {/* Featured Reviews Carousel */}
        <div className="relative mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 transition-all duration-300">
            <FaQuoteLeft className="text-[#FFD700] text-4xl mb-6 opacity-50" />

            <div className="mb-6">
              <StarRating rating={reviews[currentIndex].rating} />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
              "{reviews[currentIndex].review}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {reviews[currentIndex].image ? (
                  <img
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <FaUserCircle className="w-12 h-12 text-gray-400" />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-[#2C4549]">
                      {reviews[currentIndex].name}
                    </h4>
                    {reviews[currentIndex].verified && (
                      <MdVerified className="text-blue-500 text-sm" />
                    )}
                  </div>
                  <div className="text-sm text-gray-500">
                    {reviews[currentIndex].location}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {reviews[currentIndex].roomType} • {reviews[currentIndex].stayedFor}
                  </div>
                </div>
              </div>
              <div className="text-right text-sm text-gray-400">
                {reviews[currentIndex].date}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-[#FFD700] hover:text-white transition-all duration-300"
          >
            <FaChevronLeft className="text-[#2C4549] hover:text-white" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-lg hover:bg-[#FFD700] hover:text-white transition-all duration-300"
          >
            <FaChevronRight className="text-[#2C4549] hover:text-white" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                ? "w-8 bg-[#FFD700]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center mt-12">
          <button className="btn bg-[#2C4549] text-white hover:bg-[#1a2f33] border-none px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Read All Reviews
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          <div className="text-sm text-gray-500">
            <div className="font-semibold text-[#2C4549]">★★★★★</div>
            <div>Trustpilot Rating 4.8</div>
          </div>
          <div className="text-sm text-gray-500">
            <div className="font-semibold text-[#2C4549]">500+</div>
            <div>Happy Guests</div>
          </div>
          <div className="text-sm text-gray-500">
            <div className="font-semibold text-[#2C4549]">98%</div>
            <div>Would Return</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;