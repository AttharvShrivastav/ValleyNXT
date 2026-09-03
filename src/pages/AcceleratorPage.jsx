import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider";

import PageHero from "../components/PageHero";
import AcceleratorInfo from "../components/AcceleratorInfo";
import GrowthSection from "../components/GrowthSection";
import PartnersSection from "../components/PartnersSection";
import InvestmentPhilosophy from "../components/InvestmentPhilosophy";
import GlobalNetwork from "../components/GlobalNetwork";
import MentorsSection from "../components/MentorsSection";
import Footer from "../components/Footer";
import AccelerationEdge from "../components/AccelerationEdge";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AcceleratorPage = () => {
  const { theme } = useTheme();

  /*
   * ---------------------------------------------------------
   * SAFE SCROLLTRIGGER REFRESH AFTER THEME CHANGE
   * ---------------------------------------------------------
   *
   * The theme itself has a CSS transition:
   *
   * transition-colors duration-300
   *
   * So we wait until that transition has essentially
   * completed and then perform a SAFE refresh.
   *
   * Passing true to ScrollTrigger.refresh(true) tells GSAP
   * to avoid disrupting an active/momentum scroll.
   */
  useGSAP(
    () => {
      const refreshTimer = window.setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 350);

      return () => {
        window.clearTimeout(refreshTimer);
      };
    },
    {
      dependencies: [theme],
    }
  );

  return (
    <>
      <div className="w-full min-h-screen pt-24 px-6 sm:px-12 bg-background text-text-main transition-colors duration-300">
        <PageHero
          titleLine1="Startups That Matter"
          titleLine2="Solutions That Scale"
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
      </div>

      <Footer />
    </>
  );
};

export default AcceleratorPage;