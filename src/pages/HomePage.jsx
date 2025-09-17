import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/all';
import WebFont from 'webfontloader';

// Import all your homepage sections
// import NavMenu from '../components/NavMenu'; // <-- Add this import
import BackgroundBars from '../components/BackgroundBars';
import StagesSection from '../components/StagesSection';
import MibSection from '../components/MibSection';
import Dashboard from '../components/Dashboard';
import TeamSection from '../components/TeamSection'; // This is the preview on the homepage
import VnvpediaSection from '../components/VnVPedia';

gsap.registerPlugin(SplitText)

const Hero = () => { 
  const heroRef = useRef();
  const heroTextRef = useRef();
  const buttonRef = useRef();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    WebFont.load({ custom: { families: ['Axiforma'] }, active: () => setFontsLoaded(true) });
  }, []);

  useGSAP(() => {
    if (!fontsLoaded) return; 
    const split = SplitText.create(heroTextRef.current, { type: "lines,words,chars" });
    const words = split.words;
    gsap.set(words, { y: '110%', rotate: '5deg', opacity: 0});
    let tl = gsap.timeline();
    tl.to(words, { y: '0%', rotate: '0deg', opacity: 1, duration: 0.7, stagger: 0.05, ease: 'power2.out', delay: 0.5 })
      .from(buttonRef.current, { y: '100%', opacity: 0, ease: 'Power2.easeOut', }, "-=0.5");
  }, { scope: heroRef, dependencies: [fontsLoaded] });
  
  return (
    <div ref={heroRef} className="flex w-full flex-col items-center justify-center bg-black h-screen">
      <h1 ref={heroTextRef} className='text-4xl md:text-6xl text-[#FFC7A8] font-light z-10 tracking-normal text-center font-primary'>
        <div className="overflow-hidden"><div>EMPOWERING</div></div>
        <div className="overflow-hidden"><div><span className='font-extrabold text-[#F47A36]'>INNOVATION</span></div></div>
        <div className="overflow-hidden"><div>ACCELEARATING</div></div>
        <div className="overflow-hidden"><div><span className="font-extrabold text-[#F47A36]">GROWTH</span></div></div>
      </h1>
      <div ref={buttonRef} className="mt-8 bg-[#F47A36] flex items-center justify-center h-8 w-42 md:h-12 md:w-52 md:rounded-2xl rounded-xl">
        <h2 className='font-primary text-[#FFC7A8] text-[12px] md:text-base'>FIND FUNDING</h2>
      </div>
    </div>
  );
};


// --- The HomePage Component ---
const HomePage = () => {
    return (
        <main>
            <div className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
              {/* <NavMenu /> */}
                <Hero />
                <BackgroundBars />
            </div>
            <StagesSection />
            <MibSection />
            <Dashboard />
            <TeamSection />
            <VnvpediaSection />
        </main>
    );
};

export default HomePage;