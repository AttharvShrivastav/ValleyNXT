import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import PageHero from '../components/PageHero';
import CompanyCard from '../components/CompanyCard';

import CloudworxStudioLogo from '../assets/logos/CloudWorx.png';
import KyariLogo from '../assets/logos/Kyari.png';
import TheatreProjectLogo from '../assets/logos/TheatreProject.png';
import Kelvin6kLogo from '../assets/logos/Kelvin.png';
import YiraAiLogo from '../assets/logos/yira-ai.png';
import AstromedaLogo from '../assets/logos/Astromeda.png';
import NavarsLogo from '../assets/logos/Navars.png';
import SocialHardwareLogo from '../assets/logos/SocialHardware.png';
import AstrophelAerospaceLogo from '../assets/logos/AstrophelAerospace.png';
import AutWelkinLogo from '../assets/logos/AutWelkin.png';
import SwaahaLogo from '../assets/logos/Swaaha.png';

const valleyVenturesCompanies = [
  {
    id: 'v1',
    name: 'Cloudworx Studio',
    logo: CloudworxStudioLogo,
    description: 'Provides a web-based environment for building 3D applications and workflows without coding. Focused on enterprise metaverse digital twins powered by real-time data.'
  },
  {
    id: 'v2',
    name: 'Kyari',
    logo: KyariLogo,
    description: 'Premium indoor plants and planters provider. Transforms spaces into lush green environments with high-quality plants.'
  },
  {
    id: 'v3',
    name: 'The Theatre Project',
    logo: TheatreProjectLogo,
    description: 'Delivers a comprehensive cinema theatre experience at home. Specializes in gourmet snacks to enhance movie watching.'
  },
  {
    id: 'v4',
    name: 'Kelvin6k',
    logo: Kelvin6kLogo,
    description: 'Builds sustainable houses using 3D concrete printing technology. Reduces materials and labor costs with eco-friendly methods.'
  },
  {
    id: 'v5',
    name: 'Yira.ai',
    logo: YiraAiLogo,
    description: 'Health and wellness platform designed for organizations and providers. Promotes holistic well-being with innovative solutions.'
  },
  {
    id: 'v6',
    name: 'Astromeda',
    logo: AstromedaLogo,
    description: 'Develops smart fabric-based medical wearables. Focuses on occupational health and deep technology integration.'
  },
  {
    id: 'v7',
    name: 'NAVARS',
    logo: NavarsLogo,
    description: 'Offers astronomy and space education through outreach programs and portable planetariums. Provides DIY kits for students.'
  },
  {
    id: 'v8',
    name: 'Social Hardware',
    logo: SocialHardwareLogo,
    description: 'Designs tele-operated bionic robots for high-risk environments. Features immersive VR control and real-time feedback.'
  },
  {
    id: 'v9',
    name: 'Astrophel Aerospace',
    logo: AstrophelAerospaceLogo,
    description: 'Develops advanced propulsion and modular spacecraft. Enables cost-effective space launches and operations.'
  },
  {
    id: 'v10',
    name: 'AutWelkin',
    logo: AutWelkinLogo,
    description: 'Comprehensive B2B platform organizing auto junkyards. Offers premium used car spares and vehicle scraps.'
  },
  {
    id: 'v11',
    name: 'Swaaha',
    logo: SwaahaLogo,
    description: 'Provides tech-enabled sustainable waste management. Aims to build zero-waste communities and events across India.'
  }
];

const bharatBreakthroughCompanies = [];

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('valley');
    const [activeCardId, setActiveCardId] = useState(null);
    const [preExpandingCardId, setPreExpandingCardId] = useState(null); // New state for pre-animation
    const pageRef = useRef(null);
    const sliderRef = useRef(null);
    const gridRef = useRef(null);
    const clickTimeoutRef = useRef(null);
    
    const hasBharatBreakthrough = bharatBreakthroughCompanies.length > 0;
    const companiesToShow = activeCategory === 'valley' ? valleyVenturesCompanies : bharatBreakthroughCompanies;

    const handleCardClick = (cardId) => {
        clearTimeout(clickTimeoutRef.current);
        setPreExpandingCardId(null); // Reset any previous pre-expansion

        if (activeCardId === cardId) {
            setActiveCardId(null);
            return;
        }
        
        // Trigger the pre-expansion fade-out animation on the child card
        setPreExpandingCardId(cardId);
        
        // Set a 0.5-second timeout to trigger the actual expansion
        clickTimeoutRef.current = setTimeout(() => {
            setActiveCardId(cardId);
            setPreExpandingCardId(null); // Clear pre-expansion state after it's done
        }, 500); // 0.5-second delay
    };

    const handleToggle = (category) => {
        if (category === activeCategory) return;
        
        const direction = category === 'valley' ? -1 : 1;

        gsap.to(gridRef.current, {
            autoAlpha: 0,
            x: -50 * direction,
            duration: 0.3,
            onComplete: () => {
                setActiveCardId(null);
                setActiveCategory(category);
            }
        });
    };

    useEffect(() => {
        return () => {
            clearTimeout(clickTimeoutRef.current);
        };
    }, []);

    useGSAP(() => {
        const toggleButtons = gsap.utils.toArray('.toggle-button');
        let activeBtn = hasBharatBreakthrough 
            ? toggleButtons[activeCategory === 'valley' ? 0 : 1] 
            : toggleButtons[0];

        if (activeBtn) {
            gsap.to(sliderRef.current, {
                width: activeBtn.offsetWidth,
                x: activeBtn.offsetLeft,
                duration: 0.5,
                ease: 'power3.inOut'
            });
        }
        
        const direction = activeCategory === 'valley' ? -1 : 1;
        gsap.fromTo(gridRef.current, 
            { autoAlpha: 0, x: 50 * direction }, 
            { autoAlpha: 1, x: 0, duration: 0.4, delay: 0.1, ease: 'power2.out' }
        );

        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const cards = gsap.utils.toArray('.company-card');
            
            cards.forEach((card, index) => {
                const isActive = card.dataset.id === activeCardId;
                
                const numCols = 3;
                const col = index % numCols;
                const isLastRow = Math.floor(index / numCols) === Math.floor((cards.length - 1) / numCols);
                const originY = isLastRow ? 'bottom' : 'top';
                const originX = col === 0 ? 'left' : col === numCols - 1 ? 'right' : 'center';

                gsap.to(card, {
                    transformOrigin: `${originY} ${originX}`,
                    scale: isActive ? 2 : 1,
                    zIndex: isActive ? 100 : 1,
                    duration: 0.7,
                    ease: 'power4.inOut',
                });
            });

            if (activeCardId) {
                const activeCard = gridRef.current.querySelector(`[data-id="${activeCardId}"]`);
                const siblings = cards.filter(c => c !== activeCard);
                gsap.to(siblings, { autoAlpha: 0.3, duration: 0.5, ease: 'power2.out' });
            } else {
                gsap.to(cards, { autoAlpha: 1, duration: 0.5, ease: 'power2.out' });
            }
        });
        
        return () => mm.revert();

    }, { dependencies: [activeCategory, activeCardId], scope: pageRef });


    return (
        <div ref={pageRef} className="bg-black flex flex-col items-center w-full overflow-x-hidden">
            <PageHero 
                subtitle="Our Portfolio Companies"
                titleLine1="VENTURES IN MOTION"
                titleLine2="a collective growth"
                titleLine2Serif={true}
                buttonText="Looking for Funding and mentorship?"
            />
            
            <div className="w-full flex justify-center mt-12 mb-12 px-4">
                <div className="relative w-[90%] flex items-center bg-black rounded-full border border-[#F47A36]">
                    <div ref={sliderRef} className="absolute h-[88%] w-[95%] bg-[#F47A36] rounded-full z-0"></div>
                    
                    <button onClick={() => handleToggle('valley')} className={`toggle-button relative z-10 px-4 md:px-8 py-2 md:py-3 text-xs sm:text-sm font-semibold text-[#FFC7A8] text-center transition-colors duration-300 flex justify-center items-center ${hasBharatBreakthrough ? 'w-1/2' : 'w-full'}`}>
                        VALLEY NXT VENTURES
                    </button>
                    
                    {hasBharatBreakthrough && (
                        <button onClick={() => handleToggle('bharat')} className="toggle-button relative z-10 w-1/2 px-4 md:px-8 py-2 md:py-3 text-xs sm:text-sm font-semibold text-[#FFC7A8] text-center transition-colors duration-300 flex justify-center items-center">
                            BHARAT BREAKTHROUGH
                        </button>
                    )}
                </div>
            </div>
            
            <div ref={gridRef} className="w-[90%] md:w-[80%] max-w-6xl min-h-screen py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 content-start">
                {companiesToShow.length > 0 ? (
                    companiesToShow.map((company) => (
                        <CompanyCard 
                            key={company.id} 
                            company={company}
                            onClick={() => handleCardClick(company.id)}
                            isActive={activeCardId === company.id}
                            isPreExpanding={preExpandingCardId === company.id} // Pass new prop
                            data-id={company.id}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 py-16">
                        <p>More portfolio companies coming soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioPage;