import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';
import FallbackLogo from '../assets/FallbackLogo.svg';

gsap.registerPlugin(Flip, DrawSVGPlugin);

const CloseIcon = ({ onClick }) => (
    <button 
        onClick={onClick} 
        className="close-button absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-background/50 hover:bg-background/80 transition-colors"
        aria-label="Close"
    >
        <svg className="w-4 h-4 text-text-main" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </button>
);

const LogoDisplay = ({ company, className }) => {
    if (company.logoComponent) {
        return React.cloneElement(company.logoComponent, { className });
    }
    if (company.logoUrl) {
        return <img src={company.logoUrl} alt={`${company.name} logo`} className={className} />;
    }
    return <img src={FallbackLogo} alt="Fallback logo" className={className} />;
};

const CompanyCard = ({ company, onClick, isActive, ...props }) => {
    const cardRef = useRef(null);
    const timeline = useRef();
    const [isFlipped, setIsFlipped] = useState(false);
    const isInitialMount = useRef(true);

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setIsFlipped(!isFlipped);
        } else {
            onClick?.();
        }
    };

    const handleCloseClick = (e) => {
        e.stopPropagation();
        if (window.innerWidth < 768) {
            setIsFlipped(false);
        } else {
            onClick?.();
        }
    };

    useGSAP(() => {
        const mm = gsap.matchMedia();
        let timeout; 

        mm.add("(min-width: 768px)", () => {
            timeout = setTimeout(() => {
                const initialLogo = cardRef.current.querySelector('.logo-initial');
                const detailsPanel = cardRef.current.querySelector('.details-panel');
                const expandedLogo = cardRef.current.querySelector('.logo-expanded');
                const horizontalLine = cardRef.current.querySelector('.horizontal-line');
                const name = cardRef.current.querySelector('.company-name');
                const description = cardRef.current.querySelector('.company-description');
                const closeButton = cardRef.current.querySelector('.close-button');
                
                gsap.set(detailsPanel, { autoAlpha: 0 });

                timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } })
                    .to(initialLogo, { autoAlpha: 0, duration: 0.3 })
                    .set(detailsPanel, { autoAlpha: 1 })
                    .from(expandedLogo, { autoAlpha: 0, scale: 0.9, duration: 0.4 }, ">0.1")
                    .from(horizontalLine, { drawSVG: "50% 50%", duration: 0.5 }, "<0.1")
                    .from([name, description], { autoAlpha: 0, y: 10, stagger: 0.15, duration: 0.4 }, ">-0.3")
                    .from(closeButton, { autoAlpha: 0, scale: 0.5, duration: 0.3 }, "<");
            }, 0);
        });

        return () => {
            clearTimeout(timeout);
            mm.revert();
        };

    }, { scope: cardRef });

    useGSAP(() => {
        if (timeline.current) {
            if (isActive) {
                timeline.current.play();
            } else {
                timeline.current.reverse();
            }
        }
    }, { dependencies: [isActive] });

    useGSAP(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const mm = gsap.matchMedia();
        mm.add("(max-width: 767px)", () => {
             const state = Flip.getState(cardRef.current.querySelectorAll(".logo-panel-mobile, .details-panel-mobile"));
            Flip.from(state, {
                duration: 0.7,
                ease: "power3.inOut",
                absolute: true,
            });
        });
        return () => mm.revert();
    }, { dependencies: [isFlipped], scope: cardRef });

    return (
        <div 
            ref={cardRef}
            onClick={handleClick}
            className="company-card relative aspect-[4/3] bg-background rounded-2xl border border-accent flex justify-center items-center cursor-pointer p-4 overflow-hidden"
            {...props}
        >
            {/* --- DESKTOP VIEW --- */}
            <div className="hidden md:block w-full h-full">
                <div className="logo-initial absolute inset-0 flex justify-center items-center">
                    <LogoDisplay 
                        company={company}
                        className="max-w-[80%] max-h-[50%] object-contain"
                    />
                </div>
                <div className="details-panel absolute inset-0 p-6 flex flex-col justify-center items-center text-center">
                    <CloseIcon onClick={handleCloseClick} />
                    <div className="logo-expanded w-1/3 h-[30%] flex justify-center items-center">
                        <LogoDisplay 
                           company={company}
                           className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <svg className="horizontal-line w-full max-w-[200px] my-4" height="2" viewBox="0 0 200 2">
                        <line x1="0" y1="1" x2="200" y2="1" stroke="var(--color-accent)" strokeWidth="2" />
                    </svg>
                    <div className="details-content flex flex-col items-center">
                        {/* ✅ CHANGE: Reduced font size for the company name from `text-xl` to `text-lg`. */}
                        <h3 className="company-name text-lg font-medium font-primary text-accent mb-2">{company.name}</h3>
                        {/* ✅ CHANGE: Reduced font size for description from `text-base` to `text-sm` and adjusted line-height. */}
                        <p className="company-description font-primary font-light text-sm text-text-main leading-relaxed">{company.description}</p>
                    </div>
                </div>
            </div>

            {/* --- MOBILE VIEW --- */}
            <div className="md:hidden relative w-full h-full flex justify-center items-center">
                <div className={`logo-panel-mobile w-full h-full flex flex-col justify-center items-center text-center transition-opacity duration-300 ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <LogoDisplay 
                        company={company}
                        className="max-w-[80%] max-h-[50%] object-contain"
                    />
                </div>
                <div className={`details-panel-mobile absolute inset-0 w-full h-full p-6 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <CloseIcon onClick={handleCloseClick} />
                    <div className="w-1/3 mb-4">
                        <LogoDisplay company={company} className="max-w-full h-auto object-contain" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#F47A36] mb-2">{company.name}</h3>
                        <p className="text-xs md:text-sm text-text-main leading-snug">{company.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;