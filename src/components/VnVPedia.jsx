import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AnimatedCtaButton from './AnimatedCTAButton';

const vnvpediaArticles = [
    {
        id: 1,
        title: "Angel Investors vs. Venture Capitalists",
        content: "Launching a startup is an exciting but challenging endeavor. Securing funding is crucial, and understanding the two main sources of early-stage capital is vital for your business."
    },
    {
        id: 2,
        title: "The Power of a Strong Network",
        content: "Networking is not just about exchanging business cards; it's about building meaningful relationships that can provide mentorship, strategic partnerships, and future funding opportunities."
    },
    {
        id: 3,
        title: "Decoding the Term Sheet",
        content: "Navigating the complexities of a term sheet can be daunting for first-time founders. Knowing key clauses like valuation and liquidation preferences is essential before you sign."
    }
];

const VnvpediaSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeSlot, setActiveSlot] = useState(0);
    
    const contentRefs = useRef([]);
    const isAnimating = useRef(false);
    const sectionContainerRef = useRef(null);
    const headingRef = useRef(null);


    gsap.registerPlugin(ScrollTrigger, useGSAP);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionContainerRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });

        tl.from(".heading-frame, .heading-text, .back-plate, .main-card, .nav-button, .cta-container", {
            autoAlpha: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });
        
        gsap.set(contentRefs.current[1], { autoAlpha: 0 });
        tl.from(contentRefs.current[0], {
            autoAlpha: 0,
            y: 30,
            duration: 0.5
        }, "-=0.5");

    }, { scope: sectionContainerRef });

    const handleNavigation = (direction) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const currentSlot = activeSlot;
        const nextSlot = 1 - activeSlot;
        const currentEl = contentRefs.current[currentSlot];
        const nextEl = contentRefs.current[nextSlot];

        const newIndex = direction === 'next'
            ? (currentIndex + 1) % vnvpediaArticles.length
            : (currentIndex - 1 + vnvpediaArticles.length) % vnvpediaArticles.length;
        
        const newArticle = vnvpediaArticles[newIndex];

        nextEl.querySelector('h3').textContent = newArticle.title;
        nextEl.querySelector('p').textContent = newArticle.content;
        
        const entryY = direction === 'next' ? 50 : -50;
        gsap.set(nextEl, { y: entryY, autoAlpha: 0 });

        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentIndex(newIndex);
                setActiveSlot(nextSlot);
                gsap.set(currentEl, { y: 0, autoAlpha: 0 });
                isAnimating.current = false;
            }
        });
        
        const exitY = direction === 'next' ? -50 : 50;
        
        tl.to(currentEl, {
            autoAlpha: 0,
            y: exitY,
            duration: 0.5,
            ease: 'power2.inOut'
        })
        .to(nextEl, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        }, "<");
    };

    return (
        <div ref={sectionContainerRef} className="relative bg-background min-h-screen flex flex-col items-center justify-center py-24 px-4 font-primary">

            <div className="relative w-full max-w-5xl flex flex-col items-center mb-16 md:mb-24">
                <div className="relative z-20 flex items-center justify-center w-full">
                    <div className="absolute hidden md:top-0 md:-translate-y-4 md:block">
                         <svg ref={headingRef} width="998" height="67" viewBox="0 0 998 67" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path d="M165.667 50C165.667 48.5272 164.473 47.3333 163 47.3333C161.527 47.3333 160.333 48.5272 160.333 50C160.333 51.4728 161.527 52.6667 163 52.6667C164.473 52.6667 165.667 51.4728 165.667 50ZM163 50V49.5L1 49.5V50V50.5L163 50.5V50Z" fill="#F47A36"/>
                            <path d="M837.667 50C837.667 48.5272 836.473 47.3333 835 47.3333C833.527 47.3333 832.333 48.5272 832.333 50C832.333 51.4728 833.527 52.6667 835 52.6667C836.473 52.6667 837.667 51.4728 837.667 50ZM997 50V49.5L835 49.5V50V50.5L997 50.5V50Z" fill="#F47A36"/>
                            <line x1="995.938" y1="0.5" x2="0.000244141" y2="0.5" stroke="#F47A36"/>
                            <line x1="0.500008" y1="2.18557e-08" x2="0.500005" y2="50" stroke="#F47A36"/>
                            <line x1="997.5" y1="2.05842e-08" x2="997.5" y2="50" stroke="#F47A36"/>

                         </svg>




                    </div>
                    <h2 className="heading-text text-text-main text-4xl md:text-4xl font-primary tracking-wider text-center">
                        EXPLORE <span className="text-accent text-6xl md:text-6xl font-serifa">vnvpedia</span>
                    </h2>
                </div>
            </div>

            <div className="relative w-full max-w-[76rem] h-auto md:h-[30rem]">
                <div className="back-plate absolute inset-0 w-full h-full md:h-[26rem] top-1/2 -translate-y-1/2 border-2 border-[#F47A36] rounded-[35px] z-10 hidden md:block"></div>
                
                {/* DESKTOP: Buttons restored to their original state, hidden on mobile */}
                <button
                    onClick={() => handleNavigation('prev')}
                    className="nav-button absolute left-1 top-1/2 -translate-y-10 -translate-x-1/2 z-30 p-4 rounded-full bg-accent text-black hover:scale-110 transition-transform duration-300 focus:outline-none hidden md:block"
                    aria-label="Previous article"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                
                {/* ✅ FIX: Removed `top-1/2 -translate-y-1/2` from mobile, added `mt-16 md:mt-0` */}
                <div className="main-card relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-full md:max-w-[68rem] h-auto md:h-[30rem] border-2 border-[#f47a36] bg-[#FAD9C5] rounded-[35px] text-center shadow-lg flex items-center justify-center p-8 md:p-12 z-20 overflow-hidden mt-16 md:mt-0">
                    <div className="relative z-10 w-full max-w-2xl min-h-[250px] md:min-h-full h-full flex items-center justify-center">
                        <div ref={el => contentRefs.current[0] = el} className="absolute w-full">
                            <h3 className="text-2xl md:text-4xl font-primary font-normal mb-6 text-accent">{vnvpediaArticles[0].title}</h3>
                            <p className="text-base md:text-xl font-secondary leading-relaxed text-text-dark">{vnvpediaArticles[0].content}</p>
                        </div>
                        <div ref={el => contentRefs.current[1] = el} className="absolute w-full">
                             <h3 className="text-2xl md:text-4xl font-secondary font-normal mb-6 text-accent"></h3>
                             <p className="text-base md:text-xl font-secondary leading-relaxed text-text-dark"></p>
                        </div>
                    </div>
                </div>

                {/* DESKTOP: Buttons restored to their original state, hidden on mobile */}
                <button
                    onClick={() => handleNavigation('next')}
                    className="nav-button absolute right-1 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 p-4 rounded-full bg-accent text-black hover:scale-110 transition-transform duration-300 focus:outline-none hidden md:block"
                    aria-label="Next article"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
            
            {/* MOBILE: New container for mobile-only navigation buttons with added `mt-8` */}
            <div className="w-full flex md:hidden items-center justify-center gap-8 mt-8">
                <button
                    onClick={() => handleNavigation('prev')}
                    className="p-3 rounded-full bg-[#f47a36] text-black hover:scale-110 transition-transform duration-300 focus:outline-none"
                    aria-label="Previous article"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button
                    onClick={() => handleNavigation('next')}
                    className="p-3 rounded-full bg-[#f47a36] text-black hover:scale-110 transition-transform duration-300 focus:outline-none"
                    aria-label="Next article"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
            
            <div className="cta-container mt-16">
                <div className="hidden md:block">
                    <AnimatedCtaButton text="Explore Vnvpedia" />
                </div>
                <div className="block md:hidden">
                    <a href="https://www.linkedin.com/company/valleynxtventures/about/" className="inline-block w-[50] bg-dashboard-bg text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#d98d62] transition-colors duration-300">
                        Explore Vnvpedia
                    </a>
                </div>
            </div>

        </div>
    );
};

export default VnvpediaSection;