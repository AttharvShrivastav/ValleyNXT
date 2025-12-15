import React, { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider";

import PageHero from '../components/PageHero';
import AcceleratorInfo from '../components/AcceleratorInfo';
import GrowthSection from '../components/GrowthSection';
import PartnersSection from '../components/PartnersSection';
import InvestmentPhilosophy from '../components/InvestmentPhilosophy';
import GlobalNetwork from '../components/GlobalNetwork';
import MentorsSection from '../components/MentorsSection';
import Footer from '../components/Footer';
import AccelerationEdge from '../components/AccelerationEdge';

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const AcceleratorPage = () => {
  const { theme } = useTheme();

  // --- AGGRESSIVE SCROLL RESET ---
  useLayoutEffect(() => {
    // 1. Tell browser: "Do not restore scroll position"
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Scroll to top immediately before paint
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome/Firefox

    // 3. Scroll to top AGAIN after a tiny delay to catch any layout shifts
    // This is often needed if fonts or CSS take a few ms to load
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
        ScrollTrigger.refresh(); // Ensure animations know we are at the top
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // --- RECALCULATE ANIMATIONS ON THEME CHANGE ---
  useGSAP(() => {
    // Wait for the theme transition to finish before recalculating start/end points
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <>
      <main className="w-full min-h-screen pt-24 px-6 sm:px-12 bg-background text-text-main transition-colors duration-300">
        <PageHero 
            titleLine1="Empowering Innovation"
            titleLine2="Accelerating Growth"
            titleLine2Serif={true}
            buttonText="Get Accelerated"
            buttonLink="https://vclub.valleynxtventures.com/entrepreneur/signup/NA=="
        />
        
        <AcceleratorInfo />
      
        <GrowthSection />

        <PartnersSection />

        <GlobalNetwork />

        <InvestmentPhilosophy />

        <AccelerationEdge />
        
        <MentorsSection />

      </main>
      <Footer />
    </>
  );
};

export default AcceleratorPage;