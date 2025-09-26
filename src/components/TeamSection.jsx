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
    name: "CA Anand Saklecha",
    title: "Founder and Head of Investment Committee",
    bio: "Veteran fund manager, structuring over ₹4,500 Cr in deals and guiding entrepreneurs from inception to IPO.",
    image: AnandSaklechaImage,
    linkedin: "https://www.linkedin.com/in/anand-saklecha-18a57716/"
  },
  {
    id: 2,
    name: "Dr. Madhu Vasepalli",
    title: "Founder and Managing Partner",
    bio: "Serial healthtech entrepreneur and investor in 17+ startups. Mentor to founders at the intersection of tech and healthcare.",
    image: DrMadhuImage,
    linkedin: "https://www.linkedin.com/in/dr-madhu-vasepalli-mds-43a24812/"
  },
  {
    id: 3,
    name: "Dr. Nikhil Agarwal",
    title: "Founder & Advisor",
    bio: "Architect behind India's leading incubators and 175+ startups. Pioneer in innovation ecosystems and startup policy.",
    image: DrNikhilImage,
    linkedin: "https://www.linkedin.com/in/drnikhilagarwalindia/"
  },
  {
    id: 4,
    name: "Mr. Suresh Goyal",
    title: "Partner & Fund Manager",
    bio: "Infrastructure finance leader with 30+ years experience. Scaled India's largest PPP platform and managed global assets.",
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
                            ALIGNED LEADERS
                            <br />
                            <span className='font-serifa leading-[-10] text-4xl sm:text-5xl md:text-6xl font-normal text-accent'>
                                building the next
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

                <div className="flex justify-center mt-16">
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