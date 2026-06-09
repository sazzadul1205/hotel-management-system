// src/app/facilities/conference/page.jsx

// React
import React from "react";

// Sections
import FacilityCTA from "@/Sections/Facilities/FacilityCTA/FacilityCTA";
import FacilityHero from "@/Sections/Facilities/FacilityHero/FacilityHero";
import FacilityHours from "@/Sections/Facilities/FacilityHours/FacilityHours";
import FacilityGallery from "@/Sections/Facilities/FacilityGallery/FacilityGallery";
import FacilityPolicies from "@/Sections/Facilities/FacilityPolicies/FacilityPolicies";
import FacilityOverview from "@/Sections/Facilities/FacilityOverview/FacilityOverview";
import FacilityFeatures from "@/Sections/Facilities/FacilityFeatures/FacilityFeatures";

const page = () => {
  return (
    <>
      <FacilityHero />

      <FacilityOverview />

      <FacilityGallery />

      <FacilityFeatures />

      <FacilityHours />

      <FacilityPolicies />

      <FacilityCTA />
    </>
  );
};

export default page;