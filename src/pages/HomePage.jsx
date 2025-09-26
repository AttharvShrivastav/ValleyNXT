import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import WebFont from 'webfontloader';

import BackgroundBars from '../components/BackgroundBars';
import StagesSection from '../components/StagesSection';
import MibSection from '../components/MibSection';
import Dashboard from '../components/Dashboard';
import TeamSection from '../components/TeamSection';
import VnvpediaSection from '../components/VnVPedia';

gsap.registerPlugin(SplitText);

// ✅ CHANGE: Hero now accepts the startAnimations prop
const Hero = ({ startAnimations }) => {
  const heroRef = useRef();
  const heroTextRef = useRef();
  const buttonRef = useRef();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    WebFont.load({ custom: { families: ['Axiforma'] }, active: () => setFontsLoaded(true) });
  }, []);

  useGSAP(() => {
    // ✅ CHANGE: Animation now waits for fonts AND the preloader to finish
    if (!fontsLoaded || !startAnimations) return;

    const split = SplitText.create(heroTextRef.current, { type: "lines,words,chars" });
    const words = split.words;
    gsap.set(words, { y: '110%', rotate: '5deg', opacity: 0 });
    let tl = gsap.timeline();
    tl.to(words, { y: '0%', rotate: '0deg', opacity: 1, duration: 0.7, stagger: 0.05, ease: 'power2.out', delay: 0.5 })
      .from(buttonRef.current, { y: '100%', opacity: 0, ease: 'Power2.easeOut', }, "-=0.5");

    const button = buttonRef.current;
    if (button) {
      const background = button.querySelector('.button-background');
      const text = button.querySelector('h2');
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(background, { scaleX: 1, duration: 0.4, ease: 'power2.inOut' })
        .to(text, { color: 'var(--color-button-text)', duration: 0.4, ease: 'power2.inOut' }, 0)
        .to(button, { borderColor: 'transparent', duration: 0.4, ease: 'power2.inOut' }, 0);
      const enterHandler = () => hoverTl.play();
      const leaveHandler = () => hoverTl.reverse();
      button.addEventListener('mouseenter', enterHandler);
      button.addEventListener('mouseleave', leaveHandler);
      return () => {
        button.removeEventListener('mouseenter', enterHandler);
        button.removeEventListener('mouseleave', leaveHandler);
      }
    }
  }, { scope: heroRef, dependencies: [fontsLoaded, startAnimations] }); // ✅ CHANGE: Add startAnimations to dependency array

  return (
    <div ref={heroRef} className="flex w-full flex-col items-center justify-center bg-background h-screen">
      <h1 ref={heroTextRef} className='text-4xl md:text-6xl text-text-main font-light z-10 tracking-normal text-center font-primary'>
        <div className="overflow-hidden"><div>EMPOWERING</div></div>
        <div className="overflow-hidden"><div><span className='font-extrabold text-accent'>INNOVATION</span></div></div>
        <div className="overflow-hidden"><div>ACCELERATING</div></div>
        <div className="overflow-hidden"><div><span className="font-extrabold text-accent">GROWTH</span></div></div>
      </h1>
      <a href='https://vclub.valleynxtventures.com/entrepreneur/signup/NA==' ref={buttonRef} className="relative mt-8 bg-transparent text-button border-2 border-button flex items-center justify-center h-8 w-42 z-10 md:h-12 md:w-52 md:rounded-2xl rounded-xl overflow-hidden cursor-pointer">
        <span className="button-background absolute inset-0 bg-button scale-x-0 origin-left z-0"></span>
        <h2 className='relative z-10 font-primary text-[12px] md:text-base'>FIND FUNDING</h2>
      </a>
    </div>
  );
};

// ✅ CHANGE: HomePage now accepts and passes down the startAnimations prop
const HomePage = ({ startAnimations }) => {
    return (
        <main>
            <div className="relative min-h-screen flex flex-col bg-background text-white overflow-x-hidden">
                <Hero startAnimations={startAnimations} />
                <BackgroundBars startAnimations={startAnimations} />
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