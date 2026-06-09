// src/Sections/Home/GuestReviews/GuestReviews.jsx
"use client";

// React
import React, { useState, useEffect, useCallback } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

// StarRating component defined outside of render
const StarRating = ({ rating, size = "sm" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const sizeClasses = size === "lg" ? "text-lg sm:text-xl" : "text-xs sm:text-sm";

  return (
    <div className="flex items-center gap-0.5 sm:gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className={`text-[#FFD700] ${sizeClasses}`} />
      ))}
      {hasHalfStar && <FaStar className={`text-[#FFD700] opacity-50 ${sizeClasses}`} />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <FaStar key={`empty-${i}`} className={`text-gray-300 ${sizeClasses}`} />
      ))}
    </div>
  );
};

const GuestReviews = () => {
  // Current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto play
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Guest reviews
  const reviews = [
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

  // Average rating and total reviews Calculations
  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);
  const totalReviews = reviews.length;
  const ratingCounts = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => Math.floor(r.rating) === 4).length,
    3: reviews.filter((r) => Math.floor(r.rating) === 3).length,
    2: reviews.filter((r) => Math.floor(r.rating) === 2).length,
    1: reviews.filter((r) => Math.floor(r.rating) === 1).length,
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  // Review navigation - Next
  const nextReview = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [reviews.length]);

  // Review navigation - Prev
  const prevReview = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [reviews.length]);

  // Review navigation - Go to
  const goToReview = useCallback((index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  return (
    <section className="bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:mb-4 sm:text-3xl md:text-4xl">
            Guest Reviews
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-[#FFD700] sm:mb-6 sm:w-20"></div>
          <p className="mx-auto max-w-2xl px-4 text-sm text-gray-600 sm:text-base">
            Don&apos;t just take our word for it - hear what our guests have to say about their stay
          </p>
        </div>

        {/* Rating Summary */}
        <div className="mx-auto mb-8 rounded-xl bg-white p-4 shadow-lg sm:mb-10 sm:rounded-2xl sm:p-6 md:mb-12 md:p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 md:flex-row">
            {/* Average Rating */}
            <div className="text-center md:text-left">
              <div className="mb-1 text-3xl font-bold text-[#2C4549] sm:mb-2 sm:text-4xl md:text-5xl">
                {averageRating}
              </div>
              <div className="mb-1 flex justify-center sm:mb-2 md:justify-start">
                <StarRating rating={parseFloat(averageRating)} size="lg" />
              </div>
              <div className="text-xs text-gray-500 sm:text-sm">
                {totalReviews} verified reviews
              </div>
            </div>

            {/* Rating Bars */}
            <div className="w-full max-w-md flex-1">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="mb-1.5 flex items-center gap-2 sm:mb-2 sm:gap-3">
                  <div className="w-8 text-right text-xs text-gray-600 sm:w-12 sm:text-sm">
                    {star} ★
                  </div>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200 sm:h-2">
                    <div
                      className="h-full rounded-full bg-[#FFD700] transition-all duration-1000"
                      style={{ width: `${(ratingCounts[star] / totalReviews) * 100}%` }}
                    ></div>
                  </div>
                  <div className="w-10 text-xs text-gray-600 sm:w-12 sm:text-sm">
                    {((ratingCounts[star] / totalReviews) * 100).toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendation */}
            <div className="text-center">
              <div className="mb-0.5 text-xl font-bold text-[#2C4549] sm:mb-1 sm:text-2xl">98%</div>
              <div className="text-xs text-gray-500 sm:text-sm">Would recommend</div>
              <div className="mt-1 text-xs text-gray-400 sm:mt-2">Based on 500+ reviews</div>
            </div>
          </div>
        </div>

        {/* Featured Reviews Carousel */}
        <div className="relative mx-auto max-w-4xl px-8 sm:px-12 md:px-16">
          <div className="min-h-75 rounded-xl bg-white p-5 shadow-xl transition-all duration-300 sm:min-h-87.5 sm:rounded-2xl sm:p-6 md:p-8 lg:p-10">
            <FaQuoteLeft className="mb-4 text-2xl text-[#FFD700] opacity-50 sm:mb-6 sm:text-3xl md:text-4xl" />

            <div className="mb-4 sm:mb-6">
              <StarRating rating={reviews[currentIndex].rating} />
            </div>

            <p className="mb-6 line-clamp-4 text-sm leading-relaxed text-gray-700 italic sm:mb-8 sm:line-clamp-none sm:text-base md:text-lg">
              &ldquo;{reviews[currentIndex].review}&rdquo;
            </p>

            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                {reviews[currentIndex].image ? (
                  <Image
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                  />
                ) : (
                  <FaUserCircle className="h-10 w-10 shrink-0 text-gray-400 sm:h-12 sm:w-12" />
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <h4 className="text-sm font-semibold text-[#2C4549] sm:text-base">
                      {reviews[currentIndex].name}
                    </h4>
                    {reviews[currentIndex].verified && (
                      <MdVerified className="shrink-0 text-xs text-blue-500 sm:text-sm" />
                    )}
                  </div>
                  <div className="text-xs text-gray-500 sm:text-sm">
                    {reviews[currentIndex].location}
                  </div>
                  <div className="mt-0.5 text-xs text-gray-400 sm:mt-1">
                    {reviews[currentIndex].roomType} • {reviews[currentIndex].stayedFor}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400 sm:text-right sm:text-sm">
                {reviews[currentIndex].date}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute top-1/2 left-0 z-10 -translate-x-2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-lg transition-all duration-300 hover:bg-[#FFD700] sm:left-1 sm:-translate-x-4 sm:p-2 md:-translate-x-6"
            aria-label="Previous review"
          >
            <FaChevronLeft className="text-sm text-[#2C4549] hover:text-white sm:text-base" />
          </button>

          <button
            onClick={nextReview}
            className="absolute top-1/2 right-0 z-10 translate-x-2 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-lg transition-all duration-300 hover:bg-[#FFD700] sm:right-1 sm:translate-x-4 sm:p-2 md:translate-x-6"
            aria-label="Next review"
          >
            <FaChevronRight className="text-sm text-[#2C4549] hover:text-white sm:text-base" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-1.5 sm:mt-8 sm:gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToReview(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                currentIndex === idx
                  ? "w-6 bg-[#FFD700] sm:w-8"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400 sm:w-2"
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="mt-8 text-center sm:mt-10 md:mt-12">
          <Link
            href="/reviews"
            className="btn inline-flex transform items-center rounded-lg border-none bg-[#2C4549] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#1a2f33] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            Read All Reviews
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-4 text-center sm:mt-10 sm:gap-6 md:mt-12 md:gap-8">
          <div className="text-xs text-gray-500 sm:text-sm">
            <div className="text-sm font-semibold text-[#2C4549] sm:text-base">★★★★★</div>
            <div>Trustpilot 4.8</div>
          </div>
          <div className="text-xs text-gray-500 sm:text-sm">
            <div className="text-sm font-semibold text-[#2C4549] sm:text-base">500+</div>
            <div>Happy Guests</div>
          </div>
          <div className="text-xs text-gray-500 sm:text-sm">
            <div className="text-sm font-semibold text-[#2C4549] sm:text-base">98%</div>
            <div>Would Return</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;
