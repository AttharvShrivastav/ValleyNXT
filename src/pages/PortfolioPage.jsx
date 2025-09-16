// import React, { useState, useRef } from 'react';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
// import PageHero from '../components/PageHero';
// import CompanyCard from '../components/CompanyCard';

// // --- Mock Data ---
// const valleyVenturesCompanies = [
//     { id: 'v1', name: 'The Theatre Project', logo: 'https://i.ibb.co/VvZg3d2/theatre-project.png', description: 'A comprehensive solution for a complete cinema theatre experience at home.' },
//     { id: 'v2', name: 'Aut welkin', logo: 'https://i.ibb.co/F8C03Fq/aut-welkin.png', description: 'The No 1 online platform for used spare parts.' },
//     { id: 'v3', name: 'Social Hardware', logo: 'https://i.ibb.co/L6V2t2T/social-hardware.png', description: 'Innovating hardware for social impact and connectivity.' },
//     { id: 'v4', name: 'Astromeda', logo: 'https://i.ibb.co/L67CqVj/astromeda.png', description: 'Pioneering new frontiers in astronomical data analysis.' },
//     { id: 'v5', name: 'Astrophel Aerospace', logo: 'https://i.ibb.co/bF96b1g/astrophel-aerospace.png', description: 'Advanced aerospace technologies for the next generation.' },
//     { id: 'v6', name: 'Navars', logo: 'https://i.ibb.co/qD5jQx3/navars.png', description: 'Space lab developing cutting-edge satellite systems.' },
// ];

// const bharatBreakthroughCompanies = [
//     { id: 'b1', name: 'Kyari', logo: 'https://i.ibb.co/ZJvQfWk/kyari.png', description: 'Sustainable solutions for urban farming and agriculture.' },
//     { id: 'b2', name: 'Cloudworx', logo: 'https://i.ibb.co/N1pXJ5D/cloudworx.png', description: 'Enterprise-grade cloud infrastructure and management.' },
//     { id: 'b3', name: 'Kelvin', logo: 'https://i.ibb.co/JqjS01m/kelvin.png', description: 'Advanced thermal management solutions for electronics.' },
//     { id: 'b4', name: 'Swaaha', logo: 'https://i.ibb.co/bX1b3Xm/swaaha.png', description: 'A platform connecting local artisans to global markets.' },
// ];


// const PortfolioPage = () => {
//     const [activeCategory, setActiveCategory] = useState('valley');
//     const pageRef = useRef(null);
//     const sliderRef = useRef(null);
//     const gridRef = useRef(null);

//     const companiesToShow = activeCategory === 'valley' ? valleyVenturesCompanies : bharatBreakthroughCompanies;

//     useGSAP(() => {
//         // --- Animate the toggle slider to the active button ---
//         const toggleButtons = gsap.utils.toArray('.toggle-button');
//         const activeBtn = toggleButtons[activeCategory === 'valley' ? 0 : 1];
//         if (activeBtn) {
//             gsap.to(sliderRef.current, {
//                 width: activeBtn.offsetWidth,
//                 x: activeBtn.offsetLeft,
//                 duration: 0.5,
//                 ease: 'power3.inOut'
//             });
//         }
        
//         // --- Apply the hover animation to the visible cards ---
//         const cards = gsap.utils.toArray('.company-card', gridRef.current);
//         const numCols = 3;

//         cards.forEach((card, index) => {
//             const detailsPanel = card.querySelector('.details-panel');
//             const logoPanel = card.querySelector('.logo-panel');
//             const siblings = cards.filter(c => c !== card);
            
//             const originY = Math.floor(index / numCols) === Math.floor((cards.length - 1) / numCols) ? 'bottom' : 'top';
//             const originX = ((index % numCols) + 1) === numCols ? 'right' : 'left';
//             gsap.set(card, { transformOrigin: `${originY} ${originX}` });

//             const tl = gsap.timeline({ paused: true });
//             tl.to(card, { scale: 2, zIndex: 100, duration: 0.6, ease: 'power3.inOut' })
//               .to(siblings, { autoAlpha: 0.3, duration: 0.5, ease: 'power3.inOut' }, 0)
//               .to(detailsPanel, { autoAlpha: 1, duration: 0.4, delay: 0.15 }, 0)
//               .to(logoPanel, { autoAlpha: 0.1, duration: 0.4 }, 0);
            
//             card.animation = tl;
//             card.addEventListener('mouseenter', () => card.animation.play());
//             card.addEventListener('mouseleave', () => card.animation.reverse());
//         });

//     }, { dependencies: [activeCategory], scope: pageRef });


//     const handleToggle = (category) => {
//         if (category === activeCategory) return;
        
//         const direction = category === 'valley' ? 1 : -1;

//         gsap.to(gridRef.current, {
//             autoAlpha: 0,
//             x: 50 * direction,
//             duration: 0.3,
//             onComplete: () => {
//                 setActiveCategory(category);
//                 // Animate in from the opposite side
//                 gsap.fromTo(gridRef.current, 
//                     { autoAlpha: 0, x: -50 * direction }, 
//                     { autoAlpha: 1, x: 0, duration: 0.3, delay: 0.1 }
//                 );
//             }
//         });
//     };

//     return (
//         <div ref={pageRef} className="bg-black">
//             <PageHero 
//                 subtitle="Our Portfolio Companies"
//                 titleLine1="CONNECTED TO THE VISIONARIES"
//                 titleLine2="shaping tomorrow's market"
//                 titleLine2Serif={true}
//                 buttonText="Looking for Funding and mentorship?"
//             />
            
//             {/* --- TOGGLE UI --- */}
//             <div className="w-full flex justify-center mb-12">
//                 <div className="relative flex items-center p-1 bg-[#1C1C1C] rounded-full border border-gray-700">
//                     <div ref={sliderRef} className="absolute h-[85%] bg-[#F47A36] rounded-full z-0"></div>
//                     <button onClick={() => handleToggle('valley')} className="toggle-button relative z-10 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300">
//                         VALLEY NXT VENTURES
//                     </button>
//                     <button onClick={() => handleToggle('bharat')} className="toggle-button relative z-10 px-8 py-3 text-sm font-semibold text-white transition-colors duration-300">
//                         BHARAT BREAKTHROUGH
//                     </button>
//                 </div>
//             </div>

//             <div ref={gridRef} className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {companiesToShow.map((company, index) => (
//                     <CompanyCard key={company.id} company={company} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PortfolioPage;


// import React, { useRef } from 'react';
// import { gsap } from 'gsap';
// import { Flip } from 'gsap/Flip';
// import { useGSAP } from '@gsap/react';
// import PageHero from '../components/PageHero';
// import CompanyCard from '../components/CompanyCard';

// gsap.registerPlugin(Flip);

// // --- Mock Data ---
// const valleyVenturesCompanies = [
//     { id: 'v1', name: 'The Theatre Project', logo: 'https://i.ibb.co/VvZg3d2/theatre-project.png', description: 'A comprehensive solution for a complete cinema theatre experience at home.' },
//     { id: 'v2', name: 'Aut welkin', logo: 'https://i.ibb.co/F8C03Fq/aut-welkin.png', description: 'The No 1 online platform for used spare parts.' },
//     { id: 'v3', name: 'Social Hardware', logo: 'https://i.ibb.co/L6V2t2T/social-hardware.png', description: 'Innovating hardware for social impact and connectivity.' },
//     { id: 'v4', name: 'Astromeda', logo: 'https://i.ibb.co/L67CqVj/astromeda.png', description: 'Pioneering new frontiers in astronomical data analysis.' },
//     { id: 'v5', name: 'Astrophel Aerospace', logo: 'https://i.ibb.co/bF96b1g/astrophel-aerospace.png', description: 'Advanced aerospace technologies for the next generation.' },
//     { id: 'v6', name: 'Navars', logo: 'https://i.ibb.co/qD5jQx3/navars.png', description: 'Space lab developing cutting-edge satellite systems.' },
// ];

// const PortfolioPage = () => {
//     const gridRef = useRef(null);

//     useGSAP(() => {
//         const cards = gsap.utils.toArray('.company-card');
//         const numCols = 3;

//         cards.forEach((card, index) => {
//             const detailsPanel = card.querySelector('.details-panel');
//             const logoPanel = card.querySelector('.logo-panel');
//             const siblings = cards.filter(c => c !== card);

//             const column = (index % numCols) + 1;
//             const isLastRow = Math.floor(index / numCols) === Math.floor((cards.length - 1) / numCols);

//             const originY = isLastRow ? 'bottom' : 'top';
//             const originX = column === numCols ? 'right' : 'left';
//             gsap.set(card, { transformOrigin: `${originY} ${originX}` });

//             const tl = gsap.timeline({ paused: true });

//             tl.to(card, {
//                 scale: 2,
//                 zIndex: 100,
//                 duration: 0.6,
//                 ease: 'power3.inOut',
//             })
//             .to(siblings, { autoAlpha: 0.3, duration: 0.5, ease: 'power3.inOut' }, 0)
//             .to(detailsPanel, { autoAlpha: 1, duration: 0.4, delay: 0.15 }, 0)
//             .to(logoPanel, { autoAlpha: 0.1, duration: 0.4 }, 0);
            
//             card.animation = tl;
//         });

//         cards.forEach(card => {
//             card.addEventListener('mouseenter', () => card.animation.play());
//             card.addEventListener('mouseleave', () => card.animation.reverse());
//         });

//     }, { scope: gridRef });

//     return (
//         // 1. ADD 'items-center' HERE to center all direct children (like your grid container)
//         <div className="bg-black flex flex-col items-center w-full">
//             <PageHero 
//                 subtitle="Our Portfolio Companies"
//                 titleLine1="CONNECTED TO THE VISIONARIES"
//                 titleLine2="shaping tomorrow's market"
//                 titleLine2Serif={true}
//                 buttonText="Looking for Funding and mentorship?"
//             />
            
//             {/* 2. REMOVED the extra wrapper div. This div is now centered by its parent. */}
//             <div ref={gridRef} className="relative w-[80%] min-h-screen py-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 content-start">
//                 {valleyVenturesCompanies.map((company) => (
//                     <CompanyCard key={company.id} company={company} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PortfolioPage;
import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import PageHero from '../components/PageHero';
import CompanyCard from '../components/CompanyCard';

// --- Mock Data ---
const valleyVenturesCompanies = [
    { id: 'v1', name: 'The Theatre Project', logo: 'https://i.ibb.co/VvZg3d2/theatre-project.png', description: 'A comprehensive solution for a complete cinema theatre experience at home.' },
    { id: 'v2', name: 'Aut welkin', logo: 'https://i.ibb.co/F8C03Fq/aut-welkin.png', description: 'The No 1 online platform for used spare parts.' },
    { id: 'v3', name: 'Social Hardware', logo: 'https://i.ibb.co/L6V2t2T/social-hardware.png', description: 'Innovating hardware for social impact and connectivity.' },
    { id: 'v4', name: 'Astromeda', logo: 'https://i.ibb.co/L67CqVj/astromeda.png', description: 'Pioneering new frontiers in astronomical data analysis.' },
    { id: 'v5', name: 'Astrophel Aerospace', logo: 'https://i.ibb.co/bF96b1g/astrophel-aerospace.png', description: 'Advanced aerospace technologies for the next generation.' },
    { id: 'v6', name: 'Navars', logo: 'https://i.ibb.co/qD5jQx3/navars.png', description: 'Space lab developing cutting-edge satellite systems.' },
];
const bharatBreakthroughCompanies = [
    { id: 'b1', name: 'Kyari', logo: 'https://i.ibb.co/ZJvQfWk/kyari.png', description: 'Sustainable solutions for urban farming and agriculture.' },
    { id: 'b2', name: 'Cloudworx', logo: 'https://i.ibb.co/N1pXJ5D/cloudworx.png', description: 'Enterprise-grade cloud infrastructure and management.' },
    { id: 'b3', name: 'Kelvin', logo: 'https://i.ibb.co/JqjS01m/kelvin.png', description: 'Advanced thermal management solutions for electronics.' },
    { id: 'b4', name: 'Swaaha', logo: 'https://i.ibb.co/bX1b3Xm/swaaha.png', description: 'A platform connecting local artisans to global markets.' },
];

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('valley');
    const [activeCardId, setActiveCardId] = useState(null);
    const pageRef = useRef(null);
    const sliderRef = useRef(null);
    const gridRef = useRef(null);
    
    const companiesToShow = activeCategory === 'valley' ? valleyVenturesCompanies : bharatBreakthroughCompanies;

    const handleCardClick = (cardId) => {
        setActiveCardId(currentId => (currentId === cardId ? null : cardId));
    };

    const handleToggle = (category) => {
        if (category === activeCategory) return;
        
        const direction = category === 'valley' ? 1 : -1;

        gsap.to(gridRef.current, {
            autoAlpha: 0,
            x: 50 * direction,
            duration: 0.3,
            onComplete: () => {
                setActiveCardId(null);
                setActiveCategory(category);
            }
        });
    };

    useGSAP(() => {
        const toggleButtons = gsap.utils.toArray('.toggle-button');
        const activeBtn = toggleButtons[activeCategory === 'valley' ? 0 : 1];
        if (activeBtn) {
            gsap.to(sliderRef.current, {
                width: activeBtn.offsetWidth,
                x: activeBtn.offsetLeft,
                duration: 0.5,
                ease: 'power3.inOut'
            });
        }
        
        const direction = activeCategory === 'valley' ? 1 : -1;
        gsap.fromTo(gridRef.current, 
            { autoAlpha: 0, x: -50 * direction }, 
            { autoAlpha: 1, x: 0, duration: 0.3, delay: 0.1 }
        );

        const cards = gsap.utils.toArray('.company-card');
        const numCols = 3;

        cards.forEach((card, index) => {
            const isActive = card.dataset.id === activeCardId;
            const detailsPanel = card.querySelector('.details-panel');
            const logoPanel = card.querySelector('.logo-panel');
            
            const column = (index % numCols) + 1;
            const isLastRow = Math.floor(index / numCols) === Math.floor((cards.length - 1) / numCols);
            const originY = isLastRow ? 'bottom' : 'top';
            const originX = column === numCols ? 'right' : 'left';

            gsap.to(card, {
                transformOrigin: `${originY} ${originX}`,
                scale: isActive ? 2 : 1,
                zIndex: isActive ? 100 : 1,
                duration: 0.6,
                ease: 'power3.inOut',
            });
            gsap.to(detailsPanel, { autoAlpha: isActive ? 1 : 0, duration: 0.4, delay: isActive ? 0.2 : 0 });
            gsap.to(logoPanel, { autoAlpha: isActive ? 0.15 : 1, duration: 0.4 });
        });

        if (activeCardId) {
            const activeCard = gridRef.current.querySelector(`[data-id="${activeCardId}"]`);
            const siblings = cards.filter(c => c !== activeCard);
            gsap.to(siblings, { autoAlpha: 0.3, duration: 0.5 });
        } else {
            gsap.to(cards, { autoAlpha: 1, duration: 0.5 });
        }

    }, { dependencies: [activeCategory, activeCardId], scope: pageRef });


    return (
        <div ref={pageRef} className="bg-black flex flex-col items-center w-full">
            <PageHero 
                subtitle="Our Portfolio Companies"
                titleLine1="CONNECTED TO THE VISIONARIES"
                titleLine2="shaping tomorrow's market"
                titleLine2Serif={true}
                buttonText="Looking for Funding and mentorship?"
            />
            
            <div className="w-full flex justify-center mb-12">
                <div className="relative w-[90%] md:w-[60%] max-w-4xl flex items-center p-1 bg-black rounded-full border border-[#F47A36]">
                    <div ref={sliderRef} className="absolute h-[85%] bg-[#F47A36] rounded-full z-0"></div>
                    <button onClick={() => handleToggle('valley')} className="toggle-button relative z-10 w-1/2 px-4 py-3 text-sm font-semibold text-white text-center transition-colors duration-300">
                        VALLEY NXT VENTURES
                    </button>
                    <button onClick={() => handleToggle('bharat')} className="toggle-button relative z-10 w-1/2 px-4 py-3 text-sm font-semibold text-white text-center transition-colors duration-300">
                        BHARAT BREAKTHROUGH
                    </button>
                </div>
            </div>
            
            <div ref={gridRef} className="relative w-[80%] min-h-screen py-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 content-start">
                {companiesToShow.map((company, index) => (
                    <CompanyCard 
                        key={company.id} 
                        company={company} 
                        onClick={() => handleCardClick(company.id)}
                        isExpanded={activeCardId === company.id}
                        data-id={company.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;