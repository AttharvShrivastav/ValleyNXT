import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';


const AcceleratorHero = () => {
    const heroRef = useRef(null);
    
    useGSAP(() => {
        const heroHeading = heroRef.current.querySelector('.hero-heading');
        const split = new SplitText(heroHeading, { type: "words,chars", wordsClass: "word" });
        
        // Animate text
        gsap.from(split.words, {
            duration: 0.8,
            yPercent: 110,
            ease: 'power3.out',
            stagger: 0.05,
        });

        // Animate bracket parts fade in
        gsap.from('.bracket-part', {
            opacity: 0,
            duration: 1,
            delay: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        });

    }, { scope: heroRef });

    return (
        <div ref={heroRef} className="h-auto pt-40 pb-32 font-primary w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            
            <div className="relative w-auto max-w-5xl flex flex-col items-center">
                
                {/* Subtitle */}
                <p className="text-sm md:text-base font-medium text-accent uppercase tracking-wide mb-8">
                    Accelerator Programme
                </p>
                
                {/* Container for Text and Asymmetrical Bracket */}
                {/* inline-block ensures it wraps tightly around text width, relative for positioning bracket */}
                <div className="relative z-10 inline-block">
                    
                    {/* --- The Asymmetrical Bracket Graphic --- */}
                    {/* Positioned absolutely. Negative margins make it wider than the text container */}
                    <div className="absolute inset-0 -mx-8 md:-mx-16 pointer-events-none text-accent">
                        
                        {/* 1. Bottom Horizontal Line (Spans full width of this container) */}
                        {/* Placed slightly below the text baseline */}
                        <div className="bracket-part absolute bottom-[-20px] left-0 right-0 h-px bg-current"></div>

                        {/* 2. Left Vertical Line (LONGER) */}
                        {/* Starts higher up (top negative), connects to bottom line */}
                        <div className="bracket-part absolute top-[-30px] md:top-[-50px] bottom-[-20px] left-0 w-px bg-current">
                            {/* Top Dot */}
                            <div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] rounded-full bg-current"></div>
                        </div>

                        {/* 3. Right Vertical Line (SHORTER) */}
                        {/* Starts lower down (top %), connects to bottom line */}
                        <div className="bracket-part absolute top-[40%] bottom-[-20px] right-0 w-px bg-current">
                            {/* Top Dot */}
                            <div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] rounded-full bg-current"></div>
                        </div>
                    </div>

                    {/* Heading Text */}
                    <div className="overflow-hidden relative z-20 px-2">
                        <h1 className="hero-heading font-primary text-4xl md:text-6xl lg:text-7xl leading-[0.9] md:leading-[0.95]">
                            <span className='block font-primary font-bold text-text-main uppercase tracking-tight'>
                                STARTUPS THAT MATTER
                            </span>
                            <span className='block font-serifa font-normal text-accent mt-2 md:mt-4 pb-2'>
                                solutions that scale
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcceleratorHero;