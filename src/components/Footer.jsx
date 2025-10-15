import React, { useRef } from 'react';
// ✅ CHANGE: Removed useLocation as it's no longer needed.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

import bridgeSVG from '../assets/Bridge.svg';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Footer = () => {
    const sectionRef = useRef(null);
    const footerRef = useRef(null);
    const bridgeRef = useRef(null);
    const textElementsRef = useRef([]);
    textElementsRef.current = [];

    const addToRefs = (el) => {
        if (el && !textElementsRef.current.includes(el)) {
            textElementsRef.current.push(el);
        }
    };

    useGSAP(() => {
        const mm = gsap.matchMedia();
        const textElements = textElementsRef.current;

        if (textElements.length === 0) return;

        const split = new SplitText(textElements, { type: "lines", linesClass: "split-line" });

        split.lines.forEach((line) => {
            const innerContent = line.innerHTML;
            line.innerHTML = '';
            line.style.overflow = 'hidden';
            const wrapper = document.createElement('div');
            wrapper.innerHTML = innerContent;
            line.appendChild(wrapper);
        });
        
        const linesContent = split.lines.map(line => line.querySelector('div')).filter(Boolean);

        mm.add("(min-width: 768px)", () => {
            gsap.set(bridgeRef.current, { yPercent: 100, autoAlpha: 0 });
            gsap.set(linesContent, { yPercent: 100, opacity: 0 });
             
            gsap.set([bridgeRef.current, ...linesContent], { willChange: 'transform, opacity' });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: footerRef.current,
                    start: "top 50%",
                    end: "+=100%", 
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(bridgeRef.current, { 
                yPercent: 0, 
                autoAlpha: 1,
                ease: 'none'
            }, 0);

            tl.to(linesContent, { 
                yPercent: 0, 
                opacity: 1,
                ease: 'none'
            }, 0.1);
        });

        mm.add("(max-width: 767px)", () => {
            gsap.set(linesContent, { yPercent: 100 });
            gsap.set(linesContent, { willChange: 'transform, opacity' });

            gsap.to(linesContent, {
                yPercent: 0,
                stagger: 0.05,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            });
        });

        return () => {
            if (split) split.revert();
            mm.revert();
        };

    // ✅ CHANGE: Removed the dependency array. The hook will now run once when the component mounts.
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative mt-24 md:mt-48">
            <footer ref={footerRef} className="relative h-auto md:h-[50vh] bg-footer-bg rounded-t-[50px]">
                <div ref={bridgeRef} className="absolute -bottom-2 right-40 z-20 pointer-events-none hidden md:block">
                    <img 
                        src={bridgeSVG} 
                        alt="Bridge Illustration" 
                        className="w-auto h-[450px] lg:h-[480px] translate-x-[28%]" 
                    />
                </div>
                <div className="relative z-10 h-full p-8 py-16 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden">
                    <div>
                        <h3 ref={addToRefs} className="text-2xl text-footer-text-accent md:text-3xl font-primary tracking-wider">
                            ValleyNXT Ventures ©
                        </h3>
                    </div>
                    <div className="w-full flex flex-col text-footer-text lg:flex-row lg:items-end lg:space-x-16 mt-12 md:mt-0">
                        <nav className="flex flex-col space-y-2 text-lg mb-8 md:mb-0">
                            <a ref={addToRefs} href="#home" className="hover:text-orange-400 transition-colors w-max">Home</a>
                            <a ref={addToRefs} href="/portfolio" className="hover:text-orange-400 transition-colors w-max">Portfolio</a>
                            <a ref={addToRefs} href="/team" className="hover:text-orange-400 transition-colors w-max">Team</a>
                            <a ref={addToRefs} href="https://vclub.valleynxtventures.com/entrepreneur/signup/NA==" className="hover:text-orange-400 transition-colors w-max">VN Club</a>
                        </nav>
                        <div className="flex flex-col space-y-2 text-base text-footer-text">
                            <p ref={addToRefs}><span className='text-footer-text-accent'>AIF Name:</span> Bharat Breakthrough Fund I</p>
                            <p ref={addToRefs}><span className='text-footer-text-accent'>AIF Category:</span> Category 1</p>
                            <p ref={addToRefs}><span className='text-footer-text-accent'>SEBI Registration Number:</span> IN/AIF1/25-26/1892</p>
                            <p ref={addToRefs}><span className='text-footer-text-accent'>Fund Manager:</span> ValleyNXT Management LLP </p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;