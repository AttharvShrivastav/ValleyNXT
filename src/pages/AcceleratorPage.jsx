import React from 'react';
// import { useTheme } from '../context/ThemeProvider';
import PageHero from '../components/PageHero';
import AcceleratorInfo from '../components/AcceleratorInfo';
import GrowthSection from '../components/GrowthSection';
import PartnersSection from '../components/PartnersSection';
import InvestmentPhilosophy from '../components/InvestmentPhilosophy';
import GlobalNetwork from '../components/GlobalNetwork';
import MentorsSection from '../components/MentorsSection';
import Footer from '../components/Footer';
import AccelerationEdge from '../components/AccelerationEdge';
import { useTheme } from '../context/ThemeProvider';




const AcceleratorPage = () => {
  const { theme } = useTheme();

  return (
    <>
    <main className="w-full min-h-screen pt-24 px-6 sm:px-12 bg-background text-text-main transition-colors duration-300">
        {/* <AcceleratorHero /> */}
        <PageHero 
                    subtitle="ACCELERATOR PROGRAMME"
                    titleLine1="STARTUPS THAT MATTER"
                    titleLine2="Solutions that Scale"
                    titleLine2Serif={true}
                    buttonText="Get Accelerated"
                    buttonLink="#"
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