import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';
import FallbackLogo from '../assets/FallbackLogo.svg';

gsap.registerPlugin(Flip, DrawSVGPlugin);

const CompanyCard = ({ company, onClick, isActive, ...props }) => {
    const cardRef = useRef(null);
    const timeline = useRef();
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        if (window.innerWidth < 768) {
            setIsFlipped(!isFlipped);
        } else {
            onClick?.();
        }
    };
    
    // DESKTOP: New timeline for fade-out / fade-in sequence
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const initialLogo = cardRef.current.querySelector('.logo-initial');
            const detailsPanel = cardRef.current.querySelector('.details-panel');
            const expandedLogo = cardRef.current.querySelector('.logo-expanded');
            const horizontalLine = cardRef.current.querySelector('.horizontal-line');
            const name = cardRef.current.querySelector('.company-name');
            const description = cardRef.current.querySelector('.company-description');
            
            // This timeline orchestrates the entire sequence
            timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } })
                // 1. Fade out the initial, centered logo.
                .to(initialLogo, { 
                    autoAlpha: 0, 
                    duration: 0.3 
                })
                // 2. Make the details panel visible to show its children.
                .set(detailsPanel, { 
                    autoAlpha: 1 
                })
                // 3. Fade in the three new elements sequentially.
                .from(expandedLogo, { 
                    autoAlpha: 0, 
                    scale: 0.9, 
                    duration: 0.4 
                }, ">0.1") // Starts 0.1s after the initial logo fades out
                .from(horizontalLine, { 
                    drawSVG: "50% 50%", // Animate from the center out
                    duration: 0.5 
                }, "<0.1") // Starts 0.1s after the expanded logo starts fading in
                .from([name, description], { 
                    autoAlpha: 0, 
                    y: 10, 
                    stagger: 0.15, 
                    duration: 0.4 
                }, ">-0.3"); // Overlaps with the end of the line draw
        });

        return () => mm.revert();

    }, { scope: cardRef });

    // Play or reverse the master timeline based on the `isActive` prop
    useGSAP(() => {
        if (timeline.current) {
            if (isActive) {
                timeline.current.play();
            } else {
                timeline.current.reverse();
            }
        }
    }, { dependencies: [isActive] });

    // MOBILE: Classic flip animation (remains unchanged)
    useGSAP(() => {
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
            className="company-card relative aspect-[4/3] bg-black rounded-2xl border border-[#F85C20] flex justify-center items-center cursor-pointer p-4 overflow-hidden"
            {...props}
        >
            {/* Desktop View */}
            <div className="hidden md:block w-full h-full">
                <div className="logo-initial absolute inset-0 flex justify-center items-center">
                    <img 
                        src={company.logo || FallbackLogo} 
                        alt={`${company.name} logo`} 
                        className="max-w-[80%] max-h-[50%] object-contain"
                    />
                </div>
                <div className="details-panel absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 pointer-events-none">
                    <div className="logo-expanded w-1/3 h-[30%] flex justify-center items-center">
                        <img 
                           src={company.logo || FallbackLogo} 
                           alt={`${company.name} logo`} 
                           className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <svg className="horizontal-line w-full max-w-[200px] my-4" height="2" viewBox="0 0 200 2">
                        <line x1="0" y1="1" x2="200" y2="1" stroke="#F47A36" strokeWidth="2" />
                    </svg>
                    <div className="details-content flex flex-col items-center">
                        <h3 className="company-name text-xl md:text-2xl font-bold text-[#F47A36] mb-2">{company.name}</h3>
                        <p className="company-description text-xs md:text-sm text-gray-200 leading-snug">{company.description}</p>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden relative w-full h-full flex justify-center items-center">
                <div className={`logo-panel-mobile w-full h-full flex flex-col justify-center items-center text-center transition-opacity duration-300 ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <img 
                        src={company.logo || FallbackLogo} 
                        alt={`${company.name} logo`} 
                        className="max-w-[80%] max-h-[50%] object-contain"
                    />
                </div>
                <div className={`details-panel-mobile absolute inset-0 w-full h-full p-6 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="w-1/3 mb-4">
                        <img src={company.logo || FallbackLogo} alt={`${company.name} logo`} className="max-w-full h-auto object-contain" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#F47A36] mb-2">{company.name}</h3>
                        <p className="text-xs md:text-sm text-gray-200 leading-snug">{company.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;