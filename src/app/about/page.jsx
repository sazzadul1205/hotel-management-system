// src/app/about/page.jsx

// React
import React from 'react';

// Sections
import HeroAbout from '@/Sections/AboutUs/HeroAbout/HeroAbout';
import OurStory from '@/Sections/AboutUs/OurStory/OurStory';
import MissionVision from '@/Sections/AboutUs/MissionVision/MissionVision';
import HotelStats from '@/Sections/AboutUs/HotelStats/HotelStats';

const page = () => {
  return (
    <>
      <HeroAbout />

      <OurStory />

      <MissionVision />

      <HotelStats />
    </>
  );
};

export default page;