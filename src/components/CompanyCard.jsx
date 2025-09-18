import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';
import FallbackLogo from '../assets/FallbackLogo.svg';

gsap.registerPlugin(Flip);

const CompanyCard = ({ company, onClick, ...props }) => {
    const cardRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);

    // ✅ This single handler now manages both mobile and desktop clicks
    const handleClick = () => {
        if (window.innerWidth < 768) {
            // On mobile, perform the flip
            const state = Flip.getState(cardRef.current.querySelectorAll(".logo-panel, .details-panel"));
            setIsFlipped(!isFlipped);
        } else {
            // On desktop, call the expand function from the parent
            if (onClick) {
                onClick();
            }
        }
    };
    
    useGSAP(() => {
        // This effect is only for the mobile flip animation
        if (!isFlipped && isFlipped === false) return; 
        
        const mm = gsap.matchMedia();
        mm.add("(max-width: 767px)", () => {
            Flip.from(Flip.getState(cardRef.current.querySelectorAll(".logo-panel, .details-panel")), {
                duration: 0.6,
                ease: "power3.inOut",
                absolute: true,
            });
        });
        return () => mm.revert();

    }, { dependencies: [isFlipped], scope: cardRef });

    return (
        <div 
            ref={cardRef}
            {...props}
            onClick={handleClick}
            className="company-card relative aspect-[4/3] bg-black rounded-2xl border border-[#F85C20] flex justify-center items-center cursor-pointer p-4 overflow-hidden"
        >
            <div className="relative w-full h-full flex justify-center items-center">
                
                {/* --- FRONT OF CARD --- */}
                <div className={`logo-panel w-full h-full flex flex-col justify-center items-center text-center transition-opacity duration-300 ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <img 
                        src={company.logo || FallbackLogo} 
                        alt={`${company.name} logo`} 
                        className="max-w-[80%] max-h-[50%] object-contain"
                    />
                    <h3 className="text-xl font-bold text-white mt-4">{company.name}</h3>
                </div>

                {/* --- BACK OF CARD --- */}
                <div className={`details-panel absolute inset-0 w-full h-full p-6 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="w-1/3 mb-4">
                        <img src={company.logo || FallbackLogo} alt={`${company.name} logo`} className="max-w-full h-auto object-contain" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#F47A36] mb-2">{company.name}</h3>
                        <p className="text-sm text-gray-200 leading-snug">{company.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;