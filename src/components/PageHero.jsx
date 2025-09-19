import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText, useGSAP);

const PageHero = ({ subtitle, titleLine1, titleLine2, titleLine2Serif, buttonText, buttonLink = "#" }) => {
    const heroRef = useRef(null);
    
    useGSAP(() => {
        const heroHeading = heroRef.current.querySelector('.hero-heading');
        // No changes needed to the animation logic
        const split = new SplitText(heroHeading, { type: "words,chars", wordsClass: "word" });
        gsap.from(split.words, {
            duration: 0.8,
            yPercent: 110,
            ease: 'power3.out',
            stagger: 0.05,
        });
    }, { scope: heroRef });

    return (
        <div ref={heroRef} className="h-auto pt-32 pb-16 font-primary w-full flex flex-col justify-center items-center text-center px-4">
            
            <div className="relative w-[90%] md:w-[80%] max-w-6xl flex flex-col items-center">
                
                <div className="relative z-10">
                    {subtitle && <p className="text-base md:text-lg font-medium text-[#916B55] mb-4">{subtitle}</p>}
                    
                    {/* The parent div clips the "reveal from bottom" animation */}
                    <div className="overflow-hidden mb-8">
                        {/* ✅ CHANGE: Applied a very tight line-height to the parent h1 */}
                        <h1 className="hero-heading font-primary text-4xl md:text-6xl text-[#FFC7A8] leading-[0.9] md:leading-[0.95]">
                            {/* ✅ CHANGE: Made each line a block element for clean stacking */}
                            <span className='block font-normal'>{titleLine1}</span>
                            {/* ✅ CHANGE: Removed <br /> and the problematic leading-0 class */}
                            <span className={`block font-normal text-5xl md:text-7xl text-[#F47A36] ${titleLine2Serif ? 'font-serifa' : ''}`}>
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