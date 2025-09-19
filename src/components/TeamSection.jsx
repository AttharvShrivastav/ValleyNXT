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

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText, useGSAP);

const teamMembers = [
  {
    id: 1,
    name: "CA Anand Saklecha",
    title: "Capitalizing Ideas",
    bio: "Veteran fund manager, structuring over ₹4,500 Cr in deals and guiding entrepreneurs from inception to IPO.",
    image: AnandSaklechaImage,
    linkedin: "#" // ✅ ADDED: LinkedIn URL
  },
  {
    id: 2,
    name: "Dr. Madhu Vasepalli",
    title: "Managing Partner",
    bio: "Serial healthtech entrepreneur and investor in 17+ startups. Mentor to founders at the intersection of tech and healthcare.",
    image: DrMadhuImage,
    linkedin: "#" // ✅ ADDED: LinkedIn URL
  },
  {
    id: 3,
    name: "Dr. Nikhil Agarwal",
    title: "Founder & Advisor",
    bio: "Architect behind India's leading incubators and 175+ startups. Pioneer in innovation ecosystems and startup policy.",
    image: DrNikhilImage,
    linkedin: "#" // ✅ ADDED: LinkedIn URL
  },
  {
    id: 4,
    name: "Mr. Suresh Goyal",
    title: "Partner & Fund Manager",
    bio: "Infrastructure finance leader with 30+ years experience. Scaled India's largest PPP platform and managed global assets.",
    image: MrSureshImage,
    linkedin: "#" // ✅ ADDED: LinkedIn URL
  }
];


const TeamSection = () => {
    const container = useRef(null);
    const arcPathRef = useRef(null); 

    useGSAP(() => {
        gsap.utils.toArray('.main-heading', container.current).forEach(heading => {
            const split = new SplitText(heading, { type: "words,chars", wordsClass: "word" });
            gsap.from(split.words, { 
                scrollTrigger: { trigger: heading, start: "top 80%" }, 
                duration: 0.8, 
                yPercent: 110, 
                ease: 'power3.out', 
                stagger: 0.05 
            });
        });
        
        const ctaButton = container.current.querySelector('.team-cta-button');
        if (ctaButton) {
            const splitButtonText = new SplitText(ctaButton.querySelector(".cta-text"), { type: "words", wordsClass: "cta-word" });
            const tl = gsap.timeline({ paused: true });
            tl.to(ctaButton, { width: 240, duration: 0.5, ease: 'power3.inOut' })
              .to(ctaButton.querySelector(".cta-background"), { width: 240, duration: 0.5, ease: 'power3.inOut' }, 0)
              .to(ctaButton.querySelector(".cta-circle"), { x: 180, duration: 0.5, ease: 'power3.inOut' }, 0)
              .from(splitButtonText.words, { yPercent: 110, stagger: 0.05, duration: 0.3, ease: 'power2.out' }, "-=0.4");
            
            ctaButton.addEventListener('mouseenter', () => tl.timeScale(1.2).play());
            ctaButton.addEventListener('mouseleave', () => tl.timeScale(1.8).reverse());
        }

        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            gsap.from(arcPathRef.current, {
                drawSVG: "0%",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                    end: "bottom 80%",
                }
            });
        });

        return () => mm.revert();

    }, { scope: container });

    return (
        <div ref={container} className="relative font-sans bg-[#000] text-white flex justify-center items-center min-h-screen p-5 sm:p-10 box-border overflow-hidden">
            
            <svg
                className="absolute top-10 left-1/2 -translate-x-1/2 w-[1200px] h-auto z-0 hidden md:block"
                viewBox="0 0 1200 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: 'scaleY(-1)' }}
            >
                <path
                    ref={arcPathRef}
                    d="M50 2 C 300 350, 900 350, 1150 2"
                    stroke="#F47A36"
                    strokeWidth="2"
                />
            </svg>

            <div className="w-full max-w-7xl text-center relative z-10">
                <div className="overflow-hidden mb-16 md:mb-32">
                    <h2 className="main-heading text-4xl md:text-5xl text-[#FFC7A8] font-bold leading-tight">
                        CONNECTED TO THE VISIONARIES
                        <br />
                        <span className='font-serifa text-5xl md:text-6xl font-normal text-[#F47A36]'>
                            shaping tomorrow's market
                        </span>
                    </h2>
                </div>

                <div className="card-container flex flex-col md:flex-row justify-center items-center gap-8">
                    {teamMembers.map(person => (
                        <ProfileCard key={person.id} person={person} />
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <a href="/team" className="team-cta-button relative w-[60px] h-[60px] cursor-pointer">
                        <div className="cta-background absolute inset-0 w-[60px] h-[60px] bg-[#FA9D79] rounded-full flex items-center">
                           <div className="cta-text-container absolute left-[30px] overflow-hidden">
                               <div className="cta-text text-lg font-medium text-[#2b1107] whitespace-nowrap">
                                    View Full Team
                               </div>
                           </div>
                        </div>
                        <div className="cta-circle absolute top-0 left-0 w-[60px] h-[60px] bg-[#F47A36] rounded-full flex items-center justify-center z-10">
                            <svg className="w-6 h-6 stroke-[#2b1107]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L16 12L9 19" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default TeamSection;