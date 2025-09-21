// src/components/StagesSection.jsx

import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StagesSectionBars from './StagesSectionBars';

import BreakthroughIcon from '../assets/Group 164.png';
import AccelerationIcon from '../assets/AccelerationIcon.png';
import IdeationIcon from '../assets/IdeationIcon.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StagesSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const stages = [
      { id: 'acceleration', icon: AccelerationIcon, title: 'Acceleration', content: `Funding is just the beginning. We offer mentorship, networks, and market access so founders build smarter and scale faster, turning bold concepts into reality.`},
      { id: 'innovation', icon: IdeationIcon, title: 'Innovation',  content: `Early-stage backing for bold ideas, with belief, capital, and hands-on support.
Mentors who've built before, market access, and global connections.
Raw ideas refined into breakthrough solutions.` },
      { id: 'breakthrough', icon: BreakthroughIcon, title: 'Breakthrough', content: `Support for ventures solving real-world problems in health, education, climate, jobs, and livelihoods.
Strategic partnerships, funding, and expert guidance. Building technology that matters at scale.` }
    ];

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // DESKTOP ANIMATION
        mm.add("(min-width: 768px)", () => {
            if (cardsRef.current.length < 3) return;
            const [left, middle, right] = cardsRef.current;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    start: 'top top',
                    end: '+=2000',
                    scrub: 1,
                }
            });

            // REVERTED: Restore original "slide from way bottom" effect
            tl.from(middle, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' })
              .from(left, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2')
              .from(right, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2');
        });

        // MOBILE ANIMATION
        mm.add("(max-width: 767px)", () => {
            if (cardsRef.current.length < 3) return;
            const [accelerationCard, innovationCard, breakthroughCard] = cardsRef.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    start: 'top top',
                    end: '+=800',
                    scrub: 1,
                }
            });

            // REVERTED: Restore original simple fade-in effect
            tl.from(innovationCard, { opacity: 0, ease: 'none' })
              .from(accelerationCard, { opacity: 0, ease: 'none' }, '+=0.2')
              .from(breakthroughCard, { opacity: 0, ease: 'none' }, '+=0.2');
        });

        return () => mm.revert();

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="stages-section bg-black min-h-screen w-full flex items-center justify-center relative overflow-hidden p-4">
            <style>{`
              .stages-section {
                --section-pt: 9rem; /* 144px */
                padding-top: var(--section-pt);
              }
              .stages-grid {
                --card-offset-y: 6rem; /* 96px */
                --grid-gap: 4rem; /* 64px */
                gap: var(--grid-gap);
              }
              .stage-card {
                transform-origin: bottom;
              }
              .staggered-card {
                transform: translateY(var(--card-offset-y));
              }
              .center-card {
                transform: translateY(0);
              }

              @media (min-width: 768px) and (max-width: 1024px) {
                .stages-grid {
                  --grid-gap: 2rem; /* 32px */
                }
                .stage-card {
                  width: 280px;
                }
              }

              @media (min-width: 768px) and (max-height: 800px) {
                .stages-section {
                  --section-pt: 5rem; /* 80px */
                }
                .stages-grid {
                  --card-offset-y: 4rem; /* 64px */
                }
                /* FIXED: Scale cards down on short viewports */
                .staggered-card {
                  transform: translateY(var(--card-offset-y)) scale(0.85);
                }
                .center-card {
                  transform: scale(0.85);
                }
              }
            `}</style>
            <StagesSectionBars />
            
            <div className="stages-grid -translate-y-24 flex flex-col md:grid md:grid-cols-3 md:items-end relative z-10">
                {stages.map((stage, index) => {
                    let orderClass = '';
                    if (stage.id === 'innovation') orderClass = 'order-1';
                    if (stage.id === 'acceleration') orderClass = 'order-2';
                    if (stage.id === 'breakthrough') orderClass = 'order-3';

                    let transformClass = "";
                    if (index === 0 || index === 2) transformClass = "staggered-card";
                    if (index === 1) transformClass = "center-card";

                    return (
                        <div
                            key={stage.id}
                            ref={el => cardsRef.current[index] = el}
                            className={`stage-card flex flex-col items-center text-center p-8 border-2 border-[#F47A36] rounded-3xl bg-black w-full max-w-sm h-auto md:w-auto lg:w-[22vw] md:max-w-[380px] md:order-none ${orderClass} ${transformClass}`}
                        >
                            <div 
                                className="h-1/3 w-full mb-8 flex items-center justify-center"
                                style={{
                                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)',
                                  backgroundSize: '20px 20px',
                                }}
                            >
                              <img src={stage.icon} alt={`${stage.title} icon`} />
                            </div>
                            <h3 className="text-lg font-secondary font-regular text-[#FFC7A8] uppercase mb-4">{stage.title}</h3>
                            <p className="text-[#FFC7A8] h-auto pb-2.5 w-8/9 border-b-2 border-[#F47A36] text-[14px] font-secondary mb-8 flex-grow">
                                {stage.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StagesSection;