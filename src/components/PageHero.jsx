import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText, useGSAP);

const PageHero = ({ subtitle, titleLine1, titleLine2, titleLine2Serif, buttonText, buttonLink = "#" }) => {
    const heroRef = useRef(null);
    
    useGSAP(() => {
        const heroHeading = heroRef.current.querySelector('.hero-heading');
        const split = new SplitText(heroHeading, { type: "words,chars", wordsClass: "word" });
        gsap.from(split.words, {
            duration: 0.8,
            yPercent: 110,
            ease: 'power3.out',
            stagger: 0.05,
        });
    }, { scope: heroRef });

    return (
        <div ref={heroRef} className="h-auto pt-32 font-primary w-full flex flex-col justify-center items-center text-center px-4">
            
            <div className="relative w-[90%] md:w-[80%] max-w-6xl flex flex-col items-center">
                
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full hidden md:block px-16">
                    <svg width="100%" height="auto" viewBox="0 0 988 124" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                        <path d="M104.667 3C104.667 1.52724 103.473 0.333333 102 0.333333C100.527 0.333333 99.3333 1.52724 99.3333 3C99.3333 4.47276 100.527 5.66667 102 5.66667C103.473 5.66667 104.667 4.47276 104.667 3ZM102 3V2.5L-7.62939e-06 2.5V3V3.5L102 3.5V3Z" fill="#F47A36"/>
                        <path d="M896.667 48C896.667 46.5272 895.473 45.3333 894 45.3333C892.527 45.3333 891.333 46.5272 891.333 48C891.333 49.4728 892.527 50.6667 894 50.6667C895.473 50.6667 896.667 49.4728 896.667 48ZM988 48L988 47.5L894 47.5L894 48L894 48.5L988 48.5L988 48Z" fill="#F47A36"/>
                        <line x1="988" y1="123.5" x2="0" y2="123.5" stroke="#F47A36"/>
                        <line x1="0.5" y1="3" x2="0.499995" y2="123" stroke="#F47A36"/>
                    </svg>
                </div> */}

                <div className="relative z-10">
                    {subtitle && <p className="text-base md:text-lg font-semibold text-[#916B55] mb-2">{subtitle}</p>}
                    <div className="overflow-hidden mb-8">
                        <h1 className="hero-heading font-primary font-normal text-4xl md:text-6xl text-[#FFC7A8] leading-tight">
                            <span className='font-bold'>{titleLine1}</span>
                            <br />
                             {/* ✅ CHANGE: Reduced base font size for mobile */}
                            <span className={`font-normal text-5xl md:text-7xl text-[#F47A36] ${titleLine2Serif ? 'font-serifa' : ''}`}>
                                {titleLine2}
                            </span>
                        </h1>
                    </div>
                    {buttonText && (
                        <a href={buttonLink} className="px-6 py-3 md:px-8 md:py-3 bg-[#F47A36] text-[#FFC7A8] font-semibold rounded-full hover:bg-opacity-80 transition-colors">
                            {buttonText}
                        </a>
                    )}
                </div>

            </div>

        </div>
    );
};

export default PageHero;