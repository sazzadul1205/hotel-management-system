// src/Sections/Dining/SignatureDishes/SignatureDishes.jsx
"use client";

// React
import React, { useState, useCallback } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import {
  FiStar,
  FiHeart,
  FiShare2,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiCheck,
  FiClock,
} from "react-icons/fi";
import { GiKnifeFork, GiMeal } from "react-icons/gi";

const SignatureDishes = ({ content = {} }) => {

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [likedDishes, setLikedDishes] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  const {
    title = "Signature Dishes",
    subtitle = "Chef's Culinary Masterpieces",
    description = "Experience our most celebrated creations, crafted with passion and precision by our award-winning culinary team.",
    dishes = [
      {
        id: 1,
        name: "Truffle & Foie Gras Tortellini",
        chef: "Chef Michael Chen",
        description: "Handmade pasta filled with duck foie gras, finished with black truffle butter sauce and shaved Alba truffles.",
        longDescription: "This signature dish represents the pinnacle of our culinary artistry. The delicate tortellini is hand-rolled daily, filled with the finest duck foie gras, and served in a rich black truffle butter sauce. Topped with freshly shaved Alba white truffles, this dish is a celebration of luxury and technique.",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 48,
        dietary: ["Contains Gluten", "Contains Eggs"],
        spiceLevel: "Mild",
        preparationTime: "20-25 min",
        rating: 4.9,
        reviews: 156,
        featured: true,
      },
      {
        id: 2,
        name: "Wagyu Beef Wellington",
        chef: "Chef Michael Chen",
        description: "Japanese A5 Wagyu beef wrapped in golden puff pastry with mushroom duxelles and prosciutto.",
        longDescription: "Our signature take on the classic Beef Wellington features luxurious Japanese A5 Wagyu beef, perfectly seared and wrapped in a delicate crepe with mushroom duxelles and prosciutto, then encased in golden, flaky puff pastry. Served with red wine reduction and seasonal vegetables.",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 89,
        dietary: ["Contains Gluten", "Contains Dairy"],
        spiceLevel: "Mild",
        preparationTime: "35-40 min",
        rating: 4.8,
        reviews: 98,
        featured: false,
      },
      {
        id: 3,
        name: "Miso Black Cod",
        chef: "Chef Hiroshi Tanaka",
        description: "Butter-soft black cod marinated in sweet miso, grilled to perfection, served with ginger broth.",
        longDescription: "This signature dish from our Spice Route restaurant showcases the delicate flavors of Japanese cuisine. The black cod is marinated for 48 hours in a sweet sake-miso blend, then broiled until caramelized and buttery-soft. Served in a light ginger broth with seasonal vegetables and sticky rice.",
        image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80",
        price: 42,
        dietary: ["Contains Soy", "Contains Fish"],
        spiceLevel: "Medium",
        preparationTime: "25-30 min",
        rating: 4.9,
        reviews: 203,
        featured: true,
      },
      {
        id: 4,
        name: "Saffron Risotto",
        chef: "Chef Michael Chen",
        description: "Creamy Arborio rice infused with saffron, finished with Parmigiano-Reggiano and white truffle oil.",
        longDescription: "A vegetarian masterpiece that celebrates the simple elegance of Italian cuisine. Our saffron risotto is slowly cooked to creamy perfection, each grain of Arborio rice absorbing the fragrant saffron-infused broth. Finished with aged Parmigiano-Reggiano and a drizzle of white truffle oil.",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 32,
        dietary: ["Vegetarian", "Contains Dairy"],
        spiceLevel: "Mild",
        preparationTime: "25-30 min",
        rating: 4.7,
        reviews: 87,
        featured: false,
      },
      {
        id: 5,
        name: "Chocolate Dome",
        chef: "Chef Pierre Dubois",
        description: "Dark chocolate mousse with raspberry coulis, hazelnut praline, and gold leaf.",
        longDescription: "A show-stopping dessert that delights all the senses. Our signature chocolate dome features an outer shell of dark chocolate encasing a light chocolate mousse, fresh raspberry coulis, and crunchy hazelnut praline. Served with vanilla bean ice cream and edible gold leaf.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1989&q=80",
        price: 18,
        dietary: ["Contains Nuts", "Contains Dairy", "Contains Eggs"],
        spiceLevel: "Sweet",
        preparationTime: "15-20 min",
        rating: 4.9,
        reviews: 245,
        featured: true,
      },
    ],
    cta = {
      text: "View Full Menu",
      link: "/dining/menu",
    },
  } = content;

  // Show Toast Message
  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Toggle like
  const toggleLike = (dishId, dishName) => {
    setLikedDishes((prev) => {
      if (prev.includes(dishId)) {
        showToastMessage(`Removed ${dishName} from favorites`);
        return prev.filter((id) => id !== dishId);
      } else {
        showToastMessage(`Added ${dishName} to favorites`);
        return [...prev, dishId];
      }
    });
  };

  // Share dish
  const shareDish = async (dish) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: dish.name,
          text: dish.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(`${dish.name}: ${dish.description}`);
        showToastMessage("Dish details copied!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  // Next Dish
  const nextDish = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % dishes.length);
  }, [dishes.length]);

  // Previous Dish
  const prevDish = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  }, [dishes.length]);

  // Filter featured dishes
  const featuredDishes = dishes.filter((dish) => dish.featured);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <GiMeal className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Featured Dish Carousel */}
        {featuredDishes.length > 0 && (
          <div className="mx-auto mb-16 max-w-6xl">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-50 to-white shadow-xl">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="relative h-80 lg:h-auto lg:w-2/5">
                  <Image
                    src={featuredDishes[activeIndex].image}
                    alt={featuredDishes[activeIndex].name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent lg:bg-linear-to-r"></div>

                  {/* Chef's Special Badge */}
                  <div className="absolute left-3 top-3 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                    Chef's Special
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:w-3/5 lg:p-8">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2C4549] lg:text-3xl">
                        {featuredDishes[activeIndex].name}
                      </h3>
                      <p className="text-sm font-semibold text-[#FFD700]">
                        {featuredDishes[activeIndex].chef}
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <FiStar className="text-[#FFD700]" size={16} />
                      <span className="font-semibold">{featuredDishes[activeIndex].rating}</span>
                      <span className="text-xs text-gray-400">
                        ({featuredDishes[activeIndex].reviews})
                      </span>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600">{featuredDishes[activeIndex].description}</p>

                  <div className="mb-4 flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <FiClock className="text-[#FFD700]" size={14} />
                      <span className="text-xs text-gray-500">{featuredDishes[activeIndex].preparationTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GiKnifeFork className="text-[#FFD700]" size={14} />
                      <span className="text-xs text-gray-500">Spice: {featuredDishes[activeIndex].spiceLevel}</span>
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {featuredDishes[activeIndex].dietary.map((item, idx) => (
                      <span key={idx} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#FFD700]">
                      ${featuredDishes[activeIndex].price}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleLike(featuredDishes[activeIndex].id, featuredDishes[activeIndex].name)}
                        className="rounded-full border border-gray-300 p-2 transition hover:border-[#FFD700]"
                      >
                        <FiHeart
                          className={`h-4 w-4 ${likedDishes.includes(featuredDishes[activeIndex].id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400 hover:text-red-500"
                            }`}
                        />
                      </button>
                      <button
                        onClick={() => shareDish(featuredDishes[activeIndex])}
                        className="rounded-full border border-gray-300 p-2 transition hover:border-[#FFD700]"
                      >
                        <FiShare2 className="h-4 w-4 text-gray-400 hover:text-[#FFD700]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevDish}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-[#FFD700] lg:left-4"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={nextDish}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:bg-[#FFD700] lg:right-4"
              >
                <FiChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {featuredDishes.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${activeIndex === idx ? "w-4 bg-[#FFD700]" : "w-1.5 bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* All Dishes Grid */}
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:text-2xl">
            Explore Our Menu
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                  {dish.featured && (
                    <div className="absolute left-2 top-2 rounded-full bg-[#FFD700] px-2 py-0.5 text-xs font-bold text-[#2C4549]">
                      Featured
                    </div>
                  )}

                  <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(dish.id, dish.name);
                      }}
                      className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70"
                    >
                      <FiHeart
                        className={`h-3 w-3 ${likedDishes.includes(dish.id) ? "fill-red-500 text-red-500" : "text-white"
                          }`}
                      />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        shareDish(dish);
                      }}
                      className="rounded-full bg-black/50 p-1.5 transition hover:bg-black/70"
                    >
                      <FiShare2 className="h-3 w-3 text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h4 className="font-bold text-[#2C4549]">{dish.name}</h4>
                    <div className="flex items-center gap-0.5">
                      <FiStar className="text-[#FFD700]" size={12} />
                      <span className="text-xs font-semibold">{dish.rating}</span>
                    </div>
                  </div>
                  <p className="mb-2 text-xs text-[#FFD700]">{dish.chef}</p>
                  <p className="mb-2 text-xs text-gray-500 line-clamp-2">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#FFD700]">${dish.price}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <FiClock size={10} />
                      {dish.preparationTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={cta.link}
            className="inline-flex transform items-center gap-2 rounded-lg bg-[#FFD700] px-6 py-2.5 text-sm font-semibold text-[#2C4549] transition-all duration-300 hover:scale-105 hover:bg-[#FFE44D] hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
          >
            <GiMeal size={16} />
            {cta.text}
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform animate-slide-up">
          <div className="flex items-center gap-2 rounded-lg bg-[#2C4549] px-4 py-2 text-white shadow-lg">
            <FiCheck size={14} className="text-[#FFD700]" />
            <span className="text-sm">{toastMessage}</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100px) translateX(-50%);
            opacity: 0;
          }
          to {
            transform: translateY(0) translateX(-50%);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SignatureDishes;