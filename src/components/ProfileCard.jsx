import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

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
        // --- CHANGE HERE: Replaced 'w-full' with a fixed width 'w-[280px]' ---
        <div ref={card} className={`relative flex-shrink-0 w-[280px] h-[360px] bg-[radial-gradient(circle_at_top,_#8f3d24,_#1a0a06)] rounded-[35px] overflow-hidden cursor-pointer ${className}`}>
            <div className="card-overlay absolute bottom-0 left-0 z-20 w-full h-0 bg-[#f4783667] text-[#f1d6c4] flex flex-col justify-start text-left overflow-hidden">
                <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-1">{person.name}</h4>
                    <span className="block text-xs text-[#f1d6c4] mb-4">{person.title}</span>
                    <p className="text-sm leading-relaxed">{person.bio}</p>
                </div>
            </div>
            <div className="relative z-10 h-full">
                {person.image && (
                    <img 
                        src={person.image} 
                        alt={person.name} 
                        onError={handleImageError} 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full w-full"
                    />
                )}
                <div className="absolute z-10 text-left bottom-6 left-6">
                    <h3 className="text-xl font-bold text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">{person.name}</h3>
                    <span className="text-base text-gray-200 [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]">{person.title}</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;