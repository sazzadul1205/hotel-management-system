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
  return (
    <>
      <Hero />

      <BookingSearchForm />

      <WhyChooseUs />

      <RoomTypes />

      <HotelFeatures />

      <GuestReviews />

      <MiniGallery />

      <LocationMap />

      <PricingPlans />

      <FAQ />
    </>
  );
}
