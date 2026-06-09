// src/Sections/Facilities/FacilityOverview/FacilityOverview.jsx
"use client";

import Image from "next/image";
import { FiClock, FiUsers, FiAward } from "react-icons/fi";
import { GiKnifeFork, GiChampagneCork } from "react-icons/gi"; 

const FacilityOverview = ({ content = {} }) => {
  const {
    title = "A Culinary Journey",
    subtitle = "Experience the Art of Fine Dining",
    description = "Our restaurant offers an exquisite dining experience that combines exceptional cuisine, elegant ambiance, and impeccable service. Each dish is a masterpiece crafted by our award-winning chefs using the finest local and imported ingredients.",
    highlights = [
      {
        title: "Executive Chef",
        name: "Chef Michael Chen",
        description: "15+ years of culinary excellence",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=580&q=80",
      },
      {
        title: "Signature Dishes",
        items: ["Grilled Lobster", "Wagyu Steak", "Truffle Pasta"],
      },
      {
        title: "Awards",
        items: ["Best Fine Dining 2024", "Wine Spectator Award"],
      },
    ],
    diningExperiences = [
      {
        name: "Breakfast Buffet",
        time: "6:30 AM - 10:30 AM",
        price: "$25 per person",
        description: "Start your day with our extensive breakfast buffet featuring international and local favorites.",
      },
      {
        name: "Lunch A La Carte",
        time: "12:00 PM - 3:00 PM",
        price: "A la carte pricing",
        description: "Choose from our diverse lunch menu featuring fresh, seasonal ingredients.",
      },
      {
        name: "Dinner Service",
        time: "6:00 PM - 11:00 PM",
        price: "A la carte / Tasting Menu",
        description: "Experience our signature dinner menu with wine pairing options.",
      },
      {
        name: "Sunday Brunch",
        time: "11:00 AM - 3:00 PM",
        price: "$45 per person",
        description: "Indulge in our famous Sunday brunch with live cooking stations.",
      },
    ],
  } = content;

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#FFD700]/10 px-4 py-2">
            <GiKnifeFork className="h-4 w-4 text-[#FFD700]" />
            <span className="text-xs font-semibold uppercase text-[#2C4549]">{subtitle}</span>
          </div>
          <h2 className="mb-3 text-2xl font-bold text-[#2C4549] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            {description}
          </p>
        </div>

        {/* Chef Highlight */}
        <div className="mx-auto mb-12 grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-96">
            <Image
              src={highlights[0].image}
              alt={highlights[0].name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]/10">
                <GiKnifeFork className="h-6 w-6 text-[#FFD700]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2C4549]">{highlights[0].title}</h3>
                <p className="text-xl font-semibold text-[#FFD700]">{highlights[0].name}</p>
              </div>
            </div>
            <p className="mb-4 text-gray-600">{highlights[0].description}</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm">
                <FiAward className="text-[#FFD700]" /> Michelin Star Chef
              </p>
              <p className="flex items-center gap-2 text-sm">
                <FiUsers className="text-[#FFD700]" /> Trained in Paris & Tokyo
              </p>
            </div>
          </div>
        </div>

        {/* Dining Experiences Grid */}
        <div className="mx-auto max-w-6xl">
          <h3 className="mb-6 text-center text-xl font-bold text-[#2C4549] sm:text-2xl">
            Dining Experiences
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {diningExperiences.map((exp, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-50 p-5 transition-all duration-300 hover:shadow-md sm:p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-lg font-bold text-[#2C4549]">{exp.name}</h4>
                  <GiChampagneCork className="text-2xl text-[#FFD700]" />
                </div>
                <div className="mb-2 flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FiClock size={14} /> {exp.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <GiKnifeFork size={14} /> {exp.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityOverview;