import BookingSearchForm from "@/Component/Home/BookingSearchForm/BookingSearchForm";
import Hero from "@/Component/Home/Hero/Hero";
import HotelFeatures from "@/Component/Home/HotelFeatures/HotelFeatures";
import MiniGallery from "@/Component/Home/MiniGallery/MiniGallery";
import PricingPlans from "@/Component/Home/PricingPlans/PricingPlans";
import RoomTypes from "@/Component/Home/RoomTypes/RoomTypes";
import WhyChooseUs from "@/Component/Home/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />

      <BookingSearchForm />

      <WhyChooseUs />

      <RoomTypes />

      <HotelFeatures />

      <MiniGallery />

      <PricingPlans />
    </>
  );
}
