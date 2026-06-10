// src/app/services/room-service/page.jsx
import React from 'react';

// Sections
import ServicesHero from '@/Sections/Services/ServicesHero/ServicesHero';
import ServicesGrid from '@/Sections/Services/ServicesGrid/ServicesGrid';
import ServicesOverview from '@/Sections/Services/ServicesOverview/ServicesOverview';
import PremiumServices from '@/Sections/Services/PremiumServices/PremiumServices';

const page = () => {
  return (
    <>
      <ServicesHero />

      <ServicesOverview />

      <ServicesGrid />

      <PremiumServices />
    </>
  );
};

export default page;