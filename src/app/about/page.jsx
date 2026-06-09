// src/app/about/page.jsx

// React
import React from 'react';

// Sections
import CTA from '@/Sections/AboutUs/CTA/CTA';
import Team from '@/Sections/AboutUs/Team/Team';
import OurStory from '@/Sections/AboutUs/OurStory/OurStory';
import HeroAbout from '@/Sections/AboutUs/HeroAbout/HeroAbout';
import HotelStats from '@/Sections/AboutUs/HotelStats/HotelStats';
import Facilities from '@/Sections/AboutUs/Facilities/Facilities';
import LocationMap from '@/Sections/Home/LocationMap/LocationMap';
import GuestReviews from '@/Sections/Home/GuestReviews/GuestReviews';
import MissionVision from '@/Sections/AboutUs/MissionVision/MissionVision';

const page = () => {
  return (
    <>
      <HeroAbout />

      <OurStory />

      <MissionVision />

      <HotelStats />

      <Facilities />

      <Team />

      <GuestReviews />

      <LocationMap />

      <CTA />
    </>
  );
};

export default page;