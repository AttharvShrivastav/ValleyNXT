import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="currentColor" className="text-white opacity-80 group-hover:opacity-100">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const ProfileCard = ({ person, className }) => {
    const card = useRef(null);

    useGSAP(() => {
        const overlay = card.current.querySelector('.card-overlay');
        const handleMouseEnter = () => gsap.to(overlay, { height: '100%', duration: 0.6, ease: 'power3.inOut' });
        const handleMouseLeave = () => gsap.to(overlay, { height: 0, duration: 0.6, ease: 'power3.inOut' });
        
        const currentCard = card.current;
        currentCard.addEventListener('mouseenter', handleMouseEnter);
        currentCard.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            currentCard.removeEventListener('mouseenter', handleMouseEnter);
            currentCard.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, { scope: card });
    
    const handleImageError = (e) => { e.target.style.display = 'none'; };

    return (
        <div ref={card} className={`relative flex-shrink-0 w-[280px] h-[360px] bg-profilecard-bg rounded-[35px] overflow-hidden cursor-pointer ${className}`}>
            <div className="card-overlay absolute bottom-0 left-0 z-20 w-full h-0 bg-container-bg text-[#f1d6c4] flex flex-col justify-start text-left overflow-hidden">
                <div className="p-6">
                    <h4 className="text-lg font-bold text-text-main mb-1">{person.name}</h4>
                    <span className="block text-xs text-accent mb-4">{person.title}</span>
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
                {/* ✅ FIX: Increased right-padding to pr-14 to create space for the icon */}
                <div className="absolute text-left bottom-6 left-6 right-6 pr-14">
                    <h3 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
                        {person.name}
                    </h3>
                    <span className="mt-1 block text-base text-white leading-tight break-words [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">
                        {person.title}
                    </span>
                </div>
            </div>
            
            <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group absolute bottom-6 right-6 z-30 transition-transform duration-300 hover:scale-110"
                aria-label={`${person.name}'s LinkedIn Profile`}
            >
                <LinkedInIcon />
            </a>
        </div>
    );
};

export default ProfileCard;