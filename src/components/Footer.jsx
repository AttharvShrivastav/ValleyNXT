import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import bridgeSVG from '../assets/Bridge.svg';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Footer = () => {
    const footerRef = useRef(null);
    const bridgeRef = useRef(null);
    const textElementsRef = useRef([]);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // ✅ DESKTOP ANIMATION
        mm.add("(min-width: 768px)", () => {
            const split = new SplitText(textElementsRef.current, { type: "lines", linesClass: "split-line" });
            
            // This logic is for creating the line-by-line reveal effect
            split.lines.forEach((line) => {
                const wrapper = document.createElement("div");
                wrapper.style.overflow = "hidden";
                line.appendChild(wrapper).appendChild(line.firstChild);
            });
            const linesContent = split.lines.map(line => line.querySelector('div'));

            gsap.set(bridgeRef.current, { yPercent: 100, autoAlpha: 0 });
            gsap.set(linesContent, { yPercent: 100 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            tl.to(bridgeRef.current, { yPercent: 0, autoAlpha: 1, duration: 1.2, ease: 'power3.out' })
              .to(linesContent, { yPercent: 0, stagger: 0.05, duration: 1, ease: "power3.out" }, "-=1.1");

            return () => {
                if (split) split.revert();
            };
        });

        // ✅ MOBILE ANIMATION
        mm.add("(max-width: 767px)", () => {
            const split = new SplitText(textElementsRef.current, { type: "lines", linesClass: "split-line" });
            
            split.lines.forEach((line) => {
                const wrapper = document.createElement("div");
                wrapper.style.overflow = "hidden";
                line.appendChild(wrapper).appendChild(line.firstChild);
            });
            const linesContent = split.lines.map(line => line.querySelector('div'));

            gsap.set(linesContent, { yPercent: 100 });

            gsap.to(linesContent, {
                yPercent: 0,
                stagger: 0.05,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%", // Start a bit later on mobile
                    toggleActions: "play none none none",
                }
            });

            return () => {
                if (split) split.revert();
            };
        });

        return () => mm.revert();
    }, { scope: footerRef });

    return (
        // ✅ CHANGE: Footer height is now responsive
        <footer ref={footerRef} className="relative h-auto md:h-[50vh] bg-[#4D1600] rounded-t-[50px] mt-24 md:mt-48">
            {/* ✅ CHANGE: Bridge is now hidden on mobile */}
            <div ref={bridgeRef} className="absolute -bottom-2 right-40 z-20 pointer-events-none hidden md:block">
                <img 
                    src={bridgeSVG} 
                    alt="Bridge Illustration" 
                    className="w-auto h-[450px] lg:h-[480px] translate-x-[28%]" 
                />
            </div>
            {/* ✅ CHANGE: Padding adjusted for responsive height */}
            <div className="relative z-10 h-full p-8 py-16 md:p-12 lg:p-16 flex flex-col justify-between">
                
                <div ref={el => textElementsRef.current[0] = el}>
                    <h3 className="text-2xl text-[#BA5B26] md:text-3xl font-primary tracking-wider">
                        ValleyNXT Ventures ©
                    </h3>
                </div>

                {/* The layout of this section is already responsive, no changes needed */}
                <div className="w-full flex flex-col text-[#BA5B26] md:flex-row md:items-end md:space-x-16 mt-12 md:mt-0">
                    <nav className="flex flex-col space-y-2 text-lg mb-8 md:mb-0" ref={el => textElementsRef.current[1] = el}>
                        <a href="#home" className="hover:text-orange-400 transition-colors w-max">Home</a>
                        <a href="#portfolio" className="hover:text-orange-400 transition-colors w-max">Portfolio</a>
                        <a href="#team" className="hover:text-orange-400 transition-colors w-max">Team</a>
                        <a href="https://vclub.valleynxtventures.com/entrepreneur/signup/NA==" className="hover:text-orange-400 transition-colors w-max">VN Club</a>
                    </nav>

                    <div className="flex flex-col space-y-2 text-base text-[#BA5B26]" ref={el => textElementsRef.current[2] = el}>
                        <p><span className='text-[#8B4017]'>AIF Name:</span> ValleyNXT Ventures Trust</p>
                        <p><span className='text-[#8B4017]'>AIF Category:</span> Category 1</p>
                        <p><span className='text-[#8B4017]'>SEBI Registration Number:</span> IN/AIF1/25-26/1892</p>
                        <p><span className='text-[#8B4017]'>Fund Manager:</span> Valley NXT Ventures LLP</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;