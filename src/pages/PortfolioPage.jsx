import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import PageHero from '../components/PageHero';
import CompanyCard from '../components/CompanyCard';

// import CloudworxStudioLogo from '../assets/logos/CloudWorx.png';
import KyariLogo from '../assets/logos/Kyari.png';
import TheatreProjectLogo from '../assets/logos/TheatreProject.png';
import Kelvin6kLogo from '../assets/logos/Kelvin.png';
import YiraAiLogo from '../assets/logos/yira-ai.png';
import AstromedaLogo from '../assets/logos/Astromeda.png';
import NavarsLogo from '../assets/logos/Navars.png';
import SocialHardwareLogo from '../assets/logos/SocialHardware.png';
import AstrophelAerospaceLogo from '../assets/logos/AstrophelAerospace.png';
import AutWelkinLogo from '../assets/logos/AutoWelkin.png';
import SwaahaLogo from '../assets/logos/Swaaha.png';
import Footer from '../components/Footer';

const CloudworxStudioSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        {/* The invalid style="" attribute has been removed from this <g> tag */}
        <g transform="matrix(0.280634, 0, 0, 0.282613, 89.113174, 119.930145)">
            {/* The fill URL now points to the simplified ID "cloudworx-gradient" from the <defs> below */}
            <path
            fill="url(#cloudworx-gradient)"
            d="M649.378 280.335c-15.764-31.441-48.424-52.343-86.396-52.343-48.206 0-87.311 33.618-96.717 77.861-8.709 62.054 49.643 114.571 111.305 99.069 19.857-4.834 38.147-16.504 50.906-32.834-12.063 16.852-30.047 29.524-50.253 35.316-41.151 12.585-88.661-7.098-109.519-44.94-9.319-16.374-13.587-35.36-12.542-54.172-28.174 7.011-50.296 33.27-50.296 63.752 0 36.623 28.784 65.451 65.45 65.494H641.54c43.198 0 78.558-35.403 78.558-78.558 0-40.542-30.091-73.289-70.72-78.601z"
            />
            <path
            fill="#8D8D8D"
            d="m793.73 493.114-77.208-44.548c-5.618-3.223-7.534-10.408-4.268-15.982 3.222-5.617 10.408-7.533 16.025-4.311l77.165 44.548c5.617 3.223 7.533 10.408 4.311 16.025-2.178 3.745-6.097 5.836-10.19 5.836-1.96 0-4.006-.479-5.835-1.568"
            />
            <path
            fill="#8D8D8D"
            d="M314.588 488.847c-3.223-5.618-1.307-12.803 4.311-16.025l72.069-41.631c5.618-3.222 12.759-1.306 16.025 4.311 3.223 5.618 1.307 12.759-4.311 15.982l-72.069 41.63c-1.829 1.089-3.876 1.568-5.836 1.568-4.049 0-8.012-2.09-10.189-5.835"
            />
            <path
            fill="#8D8D8D"
            d="M550.392 190.161V71.714C550.436 65.226 555.705 60 562.15 60c6.488 0 11.714 5.226 11.714 11.758V190.16c0 6.488-5.269 11.714-11.758 11.714a11.69 11.69 0 0 1-11.714-11.714"
            />
            <path
            fill="#E0E0E0"
            d="M809.755 202.936a9.7 9.7 0 0 0-1.829-2.308l-.305-.305a13.5 13.5 0 0 0-2.003-1.524c-.087-.087-.174-.13-.261-.174L624.552 94.244l-56.567-32.66c-3.614-2.09-8.1-2.134-11.714 0L318.812 198.625s-.349.305-.567.436c-.435.304-.87.653-1.306 1.001-.087.087-.218.174-.305.261s-.174.131-.261.175c-.087.087-.131.217-.218.348a7.5 7.5 0 0 0-1.219 1.611c-.218.349-.436.74-.653 1.132a9 9 0 0 0-.741 1.786c-.087.348-.174.74-.261 1.132-.13.566-.174 1.089-.218 1.611 0 .261-.087.479-.087.697V482.94c0 4.181 2.265 8.057 5.879 10.19l237.416 137.041s.13.044.218.087c.783.436 1.654.784 2.569 1.046h.13c.958.261 1.96.435 3.005.435 2.09 0 4.05-.61 5.748-1.568 0 0 .044 0 .044-.043l.218-.131s.392-.218.566-.348l236.632-136.606a11.78 11.78 0 0 0 5.878-10.19V209.729c.175-2.308-.261-4.703-1.524-6.836zM562.106 85.273l213.988 123.542-213.988 123.498-213.944-123.498zM573.82 352.65l213.988-123.498v247.04L573.864 599.689v-247.04zM336.404 229.108l213.945 123.541v247.04L336.404 476.191z"
            />
            <path
            fill="#E0E0E0"
            d="M139.705 881.708c-8.785 1.789-22.426 3.769-34.278 3.769-37.153 0-45.427-22.617-45.427-63.54s8.082-64.276 45.427-64.276c12.747 0 26.388 2.332 34.278 3.962l-.543 11.66c-8.082-1.438-22.618-3.227-32.329-3.227-27.633 0-32.49 16.516-32.49 51.881 0 35.364 4.473 51.177 32.841 51.177 10.063 0 23.353-1.629 31.946-3.226l.543 11.852z"
            />
            <path fill="#E0E0E0" d="M162.323 883.349V759.111h13.833v111.843h54.563v12.395z" />
            <path
            fill="#E0E0E0"
            d="M239.729 822.096c0-40.922 10.606-64.435 49.005-64.435s49.197 23.161 49.197 64.435-10.606 63.381-49.197 63.381-49.005-21.723-49.005-63.381m83.826 0c0-33.575-6.453-52.231-34.821-52.231s-34.821 18.496-34.821 52.231 6.101 51.178 34.821 51.178 34.821-16.165 34.821-51.178"
            />
            <path
            fill="#E0E0E0"
            d="M405.273 871.485c19.391 0 30.349-7.539 30.349-26.93v-86.894h13.641v86.542c0 28.368-15.622 39.485-43.99 39.485s-42.904-10.957-42.904-39.485v-86.542h13.833v86.894c0 19.391 10.766 26.93 29.071 26.93"
            />
            <path
            fill="#E0E0E0"
            d="M478.876 883.349V759.111h44.341c36.068 0 45.971 25.142 45.971 60.314 0 35.173-9.328 63.924-45.971 63.924zm44.341-112.034h-30.508v99.831h30.508c25.845 0 31.787-24.79 31.787-51.721s-5.91-48.11-31.787-48.11"
            />
            <path
            fill="#E0E0E0"
            d="m598.643 759.111 21.18 112.035h5.207l25.301-110.949h16.165l25.301 110.949h5.208l21.18-112.035h14.184l-25.142 124.238h-25.301l-23.512-106.092-23.512 106.092H609.6l-25.301-124.238h14.376z"
            />
            <path
            fill="#E0E0E0"
            d="M748.214 822.096c0-40.922 10.606-64.435 49.005-64.435s49.197 23.161 49.197 64.435-10.606 63.381-49.197 63.381-49.005-21.723-49.005-63.381m83.858 0c0-33.575-6.453-52.231-34.821-52.231s-34.821 18.496-34.821 52.231 6.101 51.178 34.821 51.178 34.821-16.165 34.821-51.178"
            />
            <path
            fill="#E0E0E0"
            d="M885.551 835.782v47.567h-13.833V759.111h45.97c26.037 0 39.677 11.501 39.677 37.697 0 18.305-7.187 31.051-22.809 36.099l23.864 50.442h-15.271l-22.426-47.567zm32.137-64.435h-32.137v52.231h32.329c18.657 0 25.301-11.117 25.301-26.738 0-17.06-8.082-25.493-25.493-25.493"
            />
            <path
            fill="#E0E0E0"
            d="m1017.52 812.238 31.59-53.127H1064l-38.24 63.03 38.24 61.208h-15.62l-31.25-51.529-31.781 51.529H970.43l38.43-60.857-38.43-63.381h15.621l31.399 53.127z"
            />
        </g>
        <defs fill="none">
            {/* The ID has been simplified for better compatibility */}
            <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="453.224"
            x2="597.541"
            y1="264.586"
            x1="457.275"
            id="cloudworx-gradient"
            >
            <stop stopColor="#426BB6" />
            <stop stopColor="#26458C" offset="1" />
            </linearGradient>
        </defs>
    </svg>
);


const valleyVenturesCompanies = [
  {
    id: 'v1',
    name: 'Cloudworx Studio',
    // ✅ CHANGE: Use `logoComponent` for SVG code and `logoUrl` for image files.
    logoUrl: null, // No image file for this example
    logoComponent: CloudworxStudioSVG, // Using the SVG component defined above
    description: 'Provides a web-based environment for building 3D applications and workflows without coding. Focused on enterprise metaverse digital twins powered by real-time data.'
  },
  {
    id: 'v2',
    name: 'Kyari',
    // ✅ CHANGE: Renamed `logo` to `logoUrl`.
    logoUrl: KyariLogo,
    logoComponent: null,
    description: 'Premium indoor plants and planters provider. Transforms spaces into lush green environments with high-quality plants.'
  },
  {
    id: 'v3',
    name: 'The Theatre Project',
    logoUrl: TheatreProjectLogo,
    logoComponent: null,
    description: 'Delivers a comprehensive cinema theatre experience at home. Specializes in gourmet snacks to enhance movie watching.'
  },
  {
    id: 'v4',
    name: 'Kelvin6k',
    logoUrl: Kelvin6kLogo,
    logoComponent: null,
    description: 'Builds sustainable houses using 3D concrete printing technology. Reduces materials and labor costs with eco-friendly methods.'
  },
  {
    id: 'v5',
    name: 'Yira.ai',
    logoUrl: YiraAiLogo,
    logoComponent: null,
    description: 'Health and wellness platform designed for organizations and providers. Promotes holistic well-being with innovative solutions.'
  },
  {
    id: 'v6',
    name: 'Astromeda',
    logoUrl: AstromedaLogo,
    logoComponent: null,
    description: 'Develops smart fabric-based medical wearables. Focuses on occupational health and deep technology integration.'
  },
  {
    id: 'v7',
    name: 'NAVARS',
    logoUrl: NavarsLogo,
    logoComponent: null,
    description: 'Offers astronomy and space education through outreach programs and portable planetariums. Provides DIY kits for students.'
  },
  {
    id: 'v8',
    name: 'Social Hardware',
    logoUrl: SocialHardwareLogo,
    logoComponent: null,
    description: 'Designs tele-operated bionic robots for high-risk environments. Features immersive VR control and real-time feedback.'
  },
  {
    id: 'v9',
    name: 'Astrophel Aerospace',
    logoUrl: AstrophelAerospaceLogo,
    logoComponent: null,
    description: 'Develops advanced propulsion and modular spacecraft. Enables cost-effective space launches and operations.'
  },
  {
    id: 'v10',
    name: 'AutWelkin',
    logoUrl: AutWelkinLogo,
    logoComponent: null,
    description: 'Comprehensive B2B platform organizing auto junkyards. Offers premium used car spares and vehicle scraps.'
  },
  {
    id: 'v11',
    name: 'Swaaha',
    logoUrl: SwaahaLogo,
    logoComponent: null,
    description: 'Provides tech-enabled sustainable waste management. Aims to build zero-waste communities and events across India.'
  }
];

const bharatBreakthroughCompanies = [];

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('valley');
    const [activeCardId, setActiveCardId] = useState(null);
    const [preExpandingCardId, setPreExpandingCardId] = useState(null);
    const pageRef = useRef(null);
    const sliderRef = useRef(null);
    const gridRef = useRef(null);
    const clickTimeoutRef = useRef(null);
    
    const hasBharatBreakthrough = bharatBreakthroughCompanies.length > 0;
    const companiesToShow = activeCategory === 'valley' ? valleyVenturesCompanies : bharatBreakthroughCompanies;

    const handleCardClick = (cardId) => {
        clearTimeout(clickTimeoutRef.current);
        setPreExpandingCardId(null);
        if (activeCardId === cardId) {
            setActiveCardId(null);
            return;
        }
        setPreExpandingCardId(cardId);
        clickTimeoutRef.current = setTimeout(() => {
            setActiveCardId(cardId);
            setPreExpandingCardId(null);
        }, 500);
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
        return () => clearTimeout(clickTimeoutRef.current);
    }, []);

    useGSAP(() => {
        if (hasBharatBreakthrough) {
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
        });
        
        return () => mm.revert();
    }, { dependencies: [activeCategory, activeCardId, hasBharatBreakthrough], scope: pageRef });

    return (
        <>
            <div ref={pageRef} className="bg-background flex flex-col items-center w-full overflow-x-hidden min-h-screen">
                <PageHero 
                    subtitle="Our Portfolio Companies"
                    titleLine1="VENTURES IN MOTION"
                    titleLine2="a collective growth"
                    titleLine2Serif={true}
                    buttonText="Get Funding"
                />
                
                {hasBharatBreakthrough && (
                    <div className="w-full flex justify-center mt-12 mb-12 px-4">
                        <div className="relative w-[90%] flex items-center justify-center bg-background rounded-full border border-accent">
                            <div ref={sliderRef} className="absolute top-0 left-0 h-[88%] bg-accent rounded-full z-0"></div>
                            <button onClick={() => handleToggle('valley')} className={`toggle-button relative z-10 px-4 md:px-8 py-2 md:py-3 text-xs sm:text-sm font-semibold text-text-main text-center transition-colors duration-300 flex justify-center items-center w-1/2`}>
                                VALLEY NXT VENTURES
                            </button>
                            <button onClick={() => handleToggle('bharat')} className="toggle-button relative z-10 w-1/2 px-4 md:px-8 py-2 md:py-3 text-xs sm:text-sm font-semibold text-text-main text-center transition-colors duration-300 flex justify-center items-center">
                                BHARAT BREAKTHROUGH
                            </button>
                        </div>
                    </div>
                )}
                
                <div ref={gridRef} className="w-[90%] md:w-[80%] max-w-6xl pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 content-start">
                    {companiesToShow.length > 0 ? (
                        companiesToShow.map((company) => (
                            <CompanyCard 
                                key={company.id} 
                                company={company}
                                onClick={() => handleCardClick(company.id)}
                                isActive={activeCardId === company.id}
                                isPreExpanding={preExpandingCardId === company.id}
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
            <Footer />
        </>
    );
};

export default PortfolioPage;