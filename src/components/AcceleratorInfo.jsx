import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from '../context/ThemeProvider'; 

const pageContent = {
    header: {
        // UPDATED: Reduced font sizes (text-2xl sm:text-4xl md:text-5xl)
        title: <>Empowering Innovation<br /> <span className='font-serifa leading-[-10] text-2xl sm:text-4xl md:text-5xl font-normal text-accent'>Accelerating Growth</span></>,
        buttonText: "APPLY FOR ACCELERATION",
        buttonLink: "https://vclub.valleynxtventures.com/entrepreneur/signup/NA==",
        description: "Where early momentum is captured, sharpened, and amplified into sustained market leadership. A 9-month accelerator that strengthens fundamentals, accelerates growth, and builds investor-ready enterprises across deeptech, consumer, and sustainability sectors."
    },
    cards: [
        {
            id: 1,
            title: "Building Category Leaders",
            text: "Through rigorous founder mentorship, market alignment, and investor readiness frameworks, startups emerge as dominant players in their sectors. The program transforms high-potential ventures into resilient, IP-driven enterprises capable of sustained competitive advantage and long-term market leadership.",
            widthClass: "lg:w-1/2", 
            theme: "light" 
        },
        {
            id: 2,
            title: "Investor Readiness & Capital Access",
            text: "Structured pathway to institutional funding confidence, financial discipline, and strategic positioning for IPO, secondary sale, or strategic acquisition within 3-5 years.",
            widthClass: "lg:w-1/4",
            theme: "dark"
        },
        {
            id: 3,
            title: "Global Ecosystem Access",
            text: "International immersion across Singapore, London, and Silicon Valley. Direct access to mentors, investors, and cross-border partnership opportunities (S2S, S2G, S2B).",
            widthClass: "lg:w-1/4",
            theme: "dark"
        }
    ]
};

const AcceleratorInfo = () => {
    const containerRef = useRef(null);
    const { theme } = useTheme();

    useGSAP(() => {
        // Force refresh on load
        ScrollTrigger.refresh();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.from(".info-header-element", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        tl.from(".info-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        }, "-=0.4");

    }, { 
        scope: containerRef, 
        dependencies: [theme], 
        revertOnUpdate: true 
    });

    return (
        <section ref={containerRef} className="w-full py-20 px-6 sm:px-12 bg-background transition-colors duration-300">
            <div className="max-w-[1400px] mx-auto">
                
                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
                    <div className="lg:w-1/2">
                        {/* UPDATED: Reduced main H2 sizes (text-3xl md:text-4xl) */}
                        <h2 className="info-header-element text-3xl md:text-4xl text-text-main font-bold font-primary text-pri leading-tight mb-8">
                            {pageContent.header.title}
                        </h2>
                        <a href={pageContent.header.buttonLink} className="inline-block px-8 py-3 bg-button text-button-text font-semibold rounded-full">
                            {pageContent.header.buttonText}
                        </a>
                    </div>
                    <div className="lg:w-1/3 pt-2">
                        <p className="info-header-element text-lg text-subtext font-secondary font-light">
                            {pageContent.header.description}
                        </p>
                    </div>
                </div>

                {/* --- CARDS SECTION --- */}
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    {pageContent.cards.map((card) => (
                        <div 
                            key={card.id}
                            className={`info-card w-full ${card.widthClass} rounded-2xl p-8 flex flex-col justify-between min-h-[320px] transition-colors duration-300
                                ${card.theme === 'light' 
                                    ? 'bg-card-bg-light border border-accent text-lightcard-text' 
                                    : 'bg-card-bg-dark text-darkcard-text'
                                }`}
                        >
                            {/* UPDATED: Reduced card title size (text-lg) */}
                            <h3 className="text-lg font-primary font-bold mb-6">
                                {card.title}
                            </h3>
                            <p className={`text-sm md:text-base font-secondary leading-relaxed ${card.theme === 'light' ? 'opacity-90 max-w-2xl' : 'opacity-90'}`}>
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AcceleratorInfo;