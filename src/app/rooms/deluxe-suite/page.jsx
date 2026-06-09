// src/app/rooms/page.jsx


// Sections
import RoomHero from "@/Sections/Rooms/RoomHero/RoomHero";
import RoomDetails from "@/Sections/Rooms/RoomDetails/RoomDetails";
import RoomGallery from "@/Sections/Rooms/RoomGallery/RoomGallery";
import BookingCard from "@/Sections/Rooms/BookingCard/BookingCard";

export default function RoomsPage() {
  return (
    <>
      <RoomHero />

      {/* Two column layout for room details + booking */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RoomDetails />
          </div>
          <div>
            <BookingCard />
          </div>
        </div>
      </section>

      <RoomGallery />
    </>
  );
}