// src/app/dining/main-restaurant/page.jsx

// React
import React from 'react';

// Sections
import DiningHero from '@/Sections/Dining/DiningHero/DiningHero';
import DiningIntro from '@/Sections/Dining/DiningIntro/DiningIntro';
import DiningVenues from '@/Sections/Dining/DiningVenues/DiningVenues';
import OpeningHours from '@/Sections/Dining/OpeningHours/OpeningHours';
import ReservationCTA from '@/Sections/Dining/ReservationCTA/ReservationCTA';
import SignatureDishes from '@/Sections/Dining/SignatureDishes/SignatureDishes';
import DiningExperience from '@/Sections/Dining/DiningExperience/DiningExperience';

const page = () => {
  return (
    <>
      <DiningHero />

      <DiningIntro />

      <DiningVenues />

      <SignatureDishes />

      <DiningExperience />

      <OpeningHours />

      <ReservationCTA />
    </>
  );
};

export default page;