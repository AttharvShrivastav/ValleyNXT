import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const LinkedInIcon = () => (
    <svg aria-hidden="true" 
        focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor" className="text-icon opacity-80 group-hover:opacity-100">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const ProfileCard = ({ person, className }) => {
    const card = useRef(null);

    useGSAP(() => {
        const overlay = card.current.querySelector('.card-overlay');
        const handleMouseEnter = () => gsap.to(overlay, { height: '100%', duration: 0.6, ease: 'power3.inOut' });
        const handleMouseLeave = () => gsap.to(overlay, { height: 0, duration: 0.6, ease: 'power3.inOut' });
        
        const handleFocusOut = (e) => {
            if (!card.current.contains(e.relatedTarget)) {
                handleMouseLeave();
            }
        };
        
        const currentCard = card.current;
        
        currentCard.addEventListener('mouseenter', handleMouseEnter);
        currentCard.addEventListener('mouseleave', handleMouseLeave);
        currentCard.addEventListener('focusin', handleMouseEnter);
        currentCard.addEventListener('focusout', handleFocusOut);

        return () => {
            currentCard.removeEventListener('mouseenter', handleMouseEnter);
            currentCard.removeEventListener('mouseleave', handleMouseLeave);
            currentCard.removeEventListener('focusin', handleMouseEnter);
            currentCard.removeEventListener('focusout', handleFocusOut);
        };
    }, { scope: card });

    const handleImageError = (e) => { e.target.style.display = 'none'; };

    // ACCESSIBILITY FIX: Custom Keyboard Scroll Logic
    const handleScrollKey = (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault(); // Stop the main page from scrolling
            // Scroll the text box up or down by 40 pixels per keypress
            e.currentTarget.scrollTop += e.key === 'ArrowDown' ? 40 : -40;
        }
    };

    return (
        <div 
            tabIndex={0} 
            ref={card} 
            className={`relative flex-shrink-0 w-[240px] h-[340px] md:w-[280px] md:h-[360px] lg:w-[240px] lg:h-[340px] bg-profilecard-bg rounded-[35px] overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
        >
            <div className="card-overlay absolute bottom-0 left-0 z-20 w-full h-0 bg-container-bg text-[#f1d6c4] flex flex-col justify-start text-left overflow-hidden">
                
                {/* ACCESSIBILITY FIX: Added role, aria-label, and onKeyDown for scrolling */}
                <div 
                    tabIndex={0} 
                    role="region"
                    aria-label={`${person.name}'s biography`}
                    onKeyDown={handleScrollKey}
                    className="h-full overflow-y-auto custom-scrollbar pl-6 pr-4 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                >
                    <div className="pr-12">
                        <h4 className="text-lg font-bold text-text-main mb-1">{person.name}</h4>
                        <span className="block text-xs text-accent mb-4">{person.title}</span>
                    </div>
                    <p className="text-sm text-text-main leading-relaxed">{person.bio}</p>
                </div>
            </div>

            <div className="relative z-10 h-full">
                {person.image && (
                    <img 
                        src={person.image} 
                        alt={person.name} 
                        onError={handleImageError} 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full"
                    />
                )}
                <div className="absolute text-left bottom-5 left-5 right-5 pr-10 pt-12">
                    <h3 className="text-lg font-bold text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)]">
                        {person.name}
                    </h3>
                    <span className="mt-1 block text-sm text-white leading-tight break-words [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)]">
                        {person.title}
                    </span>
                </div>
            </div>
            
            <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group absolute top-6 right-6 z-30 transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                aria-label={`${person.name}'s LinkedIn Profile`}
            >
                <LinkedInIcon />
            </a>
        </div>
    );
};

export default ProfileCard;