import React from 'react';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';



export const AccessibilityGrievancePage = () => (
  <main className="min-h-screen flex flex-col bg-background text-text-main">
    <PageHero titleLine1="Accessibility" titleLine2="Grievance" subtitle="WE ARE HERE TO HELP" />
    <div className="flex-grow w-[90%] md:w-[80%] max-w-4xl mx-auto p-8">
      <p className="text-lg font-light">Accessibility form and contact details placeholder</p>
    </div>
    <Footer />
  </main>
);