import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

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
        <div ref={heroRef} className="h-[60vh] font-primary w-full flex flex-col justify-center items-center text-center px-4">
            {subtitle && <p className="text-lg font-semibold text-[#916B55] mb-2">{subtitle}</p>}
            <div className="overflow-hidden mb-8">
                <h1 className="hero-heading font-primary font-normal text-5xl md:text-6xl text-[#FFC7A8] leading-tight">
                    <span className='font-bold'>{titleLine1}</span>
                    <br />
                    <span className={`font-normal text-7xl md:text-7xl text-[#F47A36] ${titleLine2Serif ? 'font-serifa' : ''}`}>
                        {titleLine2}
                    </span>
                </h1>
            </div>
            {buttonText && (
                <a href={buttonLink} className="px-8 py-3 bg-[#F47A36] text-white font-semibold rounded-full hover:bg-opacity-80 transition-colors">
                    {buttonText}
                </a>
            )}
        </div>
    );
};

export default PageHero;