import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { SplitText } from 'gsap/all'; 
import AnandSaklechaImage from '../assets/AnandSaklecha.png';
import DrMadhuImage from '../assets/DrMadhu.png';
import DrNikhilImage from '../assets/DrNikhil.png';
import MrSureshImage from '../assets/MrSureshImage.png';
import ProfileCard from './ProfileCard';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText, useGSAP);

const teamMembers =  [
    {
      id: 1,
      name: "Dr. Madhu Vasepalli",
      title: "Founder and Managing Partner",
      bio: "Investor in 17+ Indian and American startups and a serial healthtech entrepreneur. Founded and mentored 12+ ventures, including Ocimum Clinics, Yira Healthcare, BHS Robotics, and DEEP Trust. Actively participates in India’s startup ecosystem through Shark Tank events and panel discussions, guiding tech-first founders on innovation and growth.",
      image: DrMadhuImage,
      linkedin: "https://www.linkedin.com/in/dr-madhu-vasepalli-mds-43a24812/"
    },
    {
      id: 2,
      name: "Dr. Nikhil Agarwal",
      title: "Founder & Advisor",
      bio: "As MD of FITT at IIT Delhi, empowered 175+ startups leading in innovation. Led SIIC at IIT Kanpur, building India’s largest tech incubator with 300+ startups, ranked #1 in NIRF Innovation Ranking 2023. Headed C3iHub, India’s first cybersecurity hub, and served as former CEO of Andhra Pradesh Innovation, drafting the state’s first startup policy. Founded Entrepreneur Café, creating a global network across 110 cities supporting 45,000+ entrepreneurs.",
      image: DrNikhilImage,
      linkedin: "https://www.linkedin.com/in/drnikhilagarwalindia/"
    },
  {
    id: 3,
    name: "CA Anand Saklecha",
    title: "Founder and Head of Investment Committee",
    bio: "As an ICAI MSME & Startups Committee Co-opted Member, brings 25+ years of experience in deal structuring, IPOs, and startup investments. Serves as MD & CEO of ASCO Capital, a boutique investment banking company, and Founder and Head of IC. Has structured ₹4,500+ Cr in corporate finance across 1,000+ projects, consulted 500+ companies across 50+ industries in 10+ countries, and leverages diversified global exposure with strong investor networks.",
    image: AnandSaklechaImage,
    linkedin: "https://www.linkedin.com/in/anand-saklecha-18a57716/"
  },
  {
    id: 4,
    name: "Mr. Suresh Goyal",
    title: "Partner & Fund Manager",
    bio: "Finance veteran with 30+ years in infrastructure investing and asset management. As former MD & CEO of NHIT, scaled India’s largest PPP road platform to ₹48,000 Cr and led Macquarie’s Infrastructure Funds across India and Southeast Asia. Brings deep expertise in boardrooms, policy, and capital markets for public and private sector investments.",
    image: MrSureshImage,
    linkedin: "https://www.linkedin.com/in/suresh-goyal-4534364/"
  }
];

const TeamSection = () => {
    const container = useRef(null);
    const headingSvgRef = useRef(null); 
    const bigHorizontalSvgRef = useRef(null); 
    const leftVerticalSvgRef = useRef(null); 
    const rightVerticalSvgRef = useRef(null);
    const topRightLineRef = useRef(null);
    const topRightCircleRef = useRef(null);
    const topLeftLineRef = useRef(null);
    const topLeftCircleRef = useRef(null);

    useGSAP(() => {
        const heading = container.current.querySelector('.main-heading');
        const ctaButton = container.current.querySelector('.team-cta-button');

        if (heading) {
            const splitText = new SplitText(heading, { type: "words,chars", wordsClass: "word" });
            
            const topRightLine = topRightLineRef.current;
            const topRightCircle = topRightCircleRef.current;
            const leftVertical = leftVerticalSvgRef.current;
            const bigHorizontal = bigHorizontalSvgRef.current;
            const rightVertical = rightVerticalSvgRef.current;
            const topLeftLine = topLeftLineRef.current;
            const topLeftCircle = topLeftCircleRef.current;
            
            gsap.set([topRightLine, leftVertical, bigHorizontal, rightVertical, topLeftLine], { drawSVG: "0%" });
            gsap.set([topRightCircle, topLeftCircle], { scale: 0, transformOrigin: 'center center' });

            const masterTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });

            masterTl.from(splitText.words, { 
                duration: 0.8, 
                yPercent: 110, 
                ease: 'power3.out', 
                stagger: 0.05 
            });

            //  .fromTo(topHorizontalLine, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%", duration: 0.5 })
            masterTl.to(topRightCircle, { scale: 1, duration: 0.3 }, "-=0.2")
            .fromTo(topRightLine, {drawSVG: "100% 100%"}, { drawSVG: "100%", duration: 0.8, ease: 'power2.inOut' })
            //   .to(topRightCircle, { scale: 1, duration: 0.3 }, "-=0.2")
              .to(leftVertical, { drawSVG: "100%", duration: 0.3, ease: 'none' })
              .to(bigHorizontal, { drawSVG: "100%", duration: 0.8, ease: 'power2.inOut' })
              .to(rightVertical, { drawSVG: "100%", duration: 0.2, ease: 'none' })
              .to(topLeftLine, { drawSVG: "100%", duration: 1, ease: 'power2.inOut' })
              .to(topLeftCircle, { scale: 1, duration: 0.3 }, "-=0.2");
        }
        
        if (ctaButton) {
            const splitButtonText = new SplitText(ctaButton.querySelector(".cta-text"), { type: "words", wordsClass: "cta-word" });
            const hoverTl = gsap.timeline({ paused: true });
            
            hoverTl.to(ctaButton, { width: 240, duration: 0.5, ease: 'power3.inOut' })
              .to(ctaButton.querySelector(".cta-background"), { width: 240, duration: 0.5, ease: 'power3.inOut' }, 0)
              .to(ctaButton.querySelector(".cta-circle"), { x: 180, duration: 0.5, ease: 'power3.inOut' }, 0)
              .from(splitButtonText.words, { yPercent: 110, stagger: 0.05, duration: 0.3, ease: 'power2.out' }, "-=0.4");
            
            const enterHandler = () => hoverTl.timeScale(1.2).play();
            const leaveHandler = () => hoverTl.timeScale(1.8).reverse();

            ctaButton.addEventListener('mouseenter', enterHandler);
            ctaButton.addEventListener('mouseleave', leaveHandler);

            return () => {
                ctaButton.removeEventListener('mouseenter', enterHandler);
                ctaButton.removeEventListener('mouseleave', leaveHandler);
            };
        }
    }, { scope: container });

    return (
        <div ref={container} className="relative font-sans bg-background text-text-main flex justify-center items-center min-h-screen p-5 sm:p-10 box-border overflow-hidden">
            <div className="w-full max-w-7xl text-center relative z-10">
                <div className="relative mb-16 md:mb-32 flex justify-center items-center">
                    <svg ref={headingSvgRef} className="absolute w-[94%] hidden lg:block top-0 translate-y-5 h-auto z-0" viewBox="0 0 833 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line ref={topRightLineRef} x1="0" y1="3" x2="263" y2="3" stroke="var(--color-accent)"/>
                        <circle ref={topRightCircleRef} cx="263" cy="3" r="2.66" fill="var(--color-accent)"/>
                        <line ref={topLeftLineRef} x1="833" y1="45" x2="634" y2="45" stroke="var(--color-accent)"/>
                        <circle ref={topLeftCircleRef} cx="634" cy="45" r="2.66" fill="var(--color-accent)"/>
                        <path ref={bigHorizontalSvgRef} d="M0 81L833 81" stroke="var(--color-accent)"/>
                        <line ref={leftVerticalSvgRef} x1="0.5" y1="3" x2="0.5" y2="81" stroke="var(--color-accent)"/>
                        <line ref={rightVerticalSvgRef} x1="832.5" y1="81" x2="832.5" y2="45" stroke="var(--color-accent)"/>
                    </svg>
                    <div className="overflow-hidden relative z-10">
                        <h2 className="main-heading text-2xl sm:text-3xl md:text-4xl text-text-main font-primary leading-tight">
                            Visionary Leaders
                            <br />
                            <span className='font-serifa leading-[-10] text-4xl sm:text-5xl md:text-6xl font-normal text-accent'>
                                shaping tomorrow
                            </span>
                        </h2>
                    </div>
                </div>

                {/* ✅ FIX: Uses Grid for mobile/tablet, but switches to Flexbox on desktop to restore original layout */}
                <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center justify-items-center gap-8">
                    {teamMembers.map(person => (
                        <ProfileCard key={person.id} person={person} />
                    ))}
                </div>

                <div className="flex bg-red justify-center mt-16">
                    <Link to="/team" className="team-cta-button relative w-[60px] h-[60px] cursor-pointer">
                        <div className="cta-background absolute inset-0 w-[60px] h-[60px] bg-CTA-button-bg rounded-full flex items-center">
                           <div className="cta-text-container absolute left-[30px] overflow-hidden">
                               <div className="cta-text text-lg font-medium font-primary text-CTA-button-text whitespace-nowrap">
                                    View Full Team
                               </div>
                           </div>
                        </div>
                        <div className="cta-circle absolute top-0 left-0 w-[60px] h-[60px] bg-accent rounded-full flex items-center justify-center z-10">
                            <svg className="w-6 h-6 stroke-background" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L16 12L9 19" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;