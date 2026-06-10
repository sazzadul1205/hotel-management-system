// src/app/contact/page.jsx

// React
import React from 'react';

// Sections
import ContactMap from '@/Sections/Contact/ContactMap/ContactMap';
import ContactFAQ from '@/Sections/Contact/ContactFAQ/ContactFAQ';
import ContactCTA from '@/Sections/Contact/ContactCTA/ContactCTA';
import ContactHero from '@/Sections/Contact/ContactHero/ContactHero';
import ContactInfo from '@/Sections/Contact/ContactInfo/ContactInfo';
import ContactForm from '@/Sections/Contact/ContactForm/ContactForm';
import BusinessHours from '@/Sections/Contact/BusinessHours/BusinessHours';

const page = () => {
  return (
    <>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactMap />

      <BusinessHours />

      <ContactFAQ />

      <ContactCTA />
    </>
  );
};

export default page;