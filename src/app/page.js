import BookingSearchForm from "@/Component/Home/BookingSearchForm/BookingSearchForm";
import Hero from "@/Component/Home/Hero/Hero";
import HotelFeatures from "@/Component/Home/HotelFeatures/HotelFeatures";
import MiniGallery from "@/Component/Home/MiniGallery/MiniGallery";
import PricingPlans from "@/Component/Home/PricingPlans/PricingPlans";
import RoomTypes from "@/Component/Home/RoomTypes/RoomTypes";
import WhyChooseUs from "@/Component/Home/WhyChooseUs/WhyChooseUs";
import GuestReviews from "@/Component/Home/GuestReviews/GuestReviews";

import Head from "next/head";
import LocationMap from "@/Component/Home/LocationMap/LocationMap";
import FAQ from "@/Component/Home/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Hotel Booking - Luxury Rooms & Best Price Guarantee</title>
        <meta
          name="description"
          content="Book luxury hotel rooms at best prices. Free cancellation, 24/7 support, and exclusive deals. Save up to 30% on your stay!"
        />
        <meta
          name="keywords"
          content="hotel booking, luxury hotel, cheap hotels, hotel deals, room booking"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

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
