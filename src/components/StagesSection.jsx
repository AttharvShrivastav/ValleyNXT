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

            tl.from(middle, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' })
              .from(left, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2')
              .from(right, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2');
        });

        mm.add("(max-width: 767px)", () => {
            if (cardsRef.current.length < 3) return;
            // The refs array order is [acceleration, innovation, breakthrough]
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
            
            // The visual order on mobile is innovation -> acceleration -> breakthrough
            tl.from(innovationCard, { opacity: 0, ease: 'none' })
              .from(accelerationCard, { opacity: 0, ease: 'none' }, '+=0.2')
              .from(breakthroughCard, { opacity: 0, ease: 'none' }, '+=0.2');
        });

        return () => mm.revert();

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="stages-section bg-background min-h-screen h-auto w-full flex items-center justify-center relative overflow-hidden p-4">
            <style>{`
              .stages-section {
                --section-pt: 9rem; /* 144px */
                padding-top: var(--section-pt);
              }
              .stages-grid {
                /* ✅ FIX: Set mobile gap first */
                --grid-gap: 2rem; /* 32px for mobile */
                gap: var(--grid-gap);
              }
              .stage-card {
                transform-origin: bottom;
                /* ✅ FIX: Default transform for mobile is none */
                transform: translateY(0);
              }

              /* ✅ FIX: All desktop-specific transforms and gaps are now scoped */
              @media (min-width: 768px) {
                .stages-grid {
                  --card-offset-y: 6rem; /* 96px */
                  --grid-gap: 4rem; /* 64px for desktop */
                  transform: translateY(-6rem); /* Equivalent of -translate-y-24 */
                }
                .staggered-card {
                  transform: translateY(var(--card-offset-y));
                }
                .center-card {
                  transform: translateY(0);
                }
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
                .staggered-card {
                  transform: translateY(var(--card-offset-y)) scale(0.85);
                }
                .center-card {
                  transform: scale(0.85);
                }
              }
            `}</style>
            <StagesSectionBars />
            
            {/* ✅ FIX: Removed md:-translate-y-24 from JSX */}
            <div className="stages-grid flex flex-col md:grid md:grid-cols-3 md:items-end relative z-10">
                {stages.map((stage, index) => {
                    let orderClass = '';
                    // These order classes only affect the flex-col layout on mobile
                    if (stage.id === 'innovation') orderClass = 'order-1';
                    if (stage.id === 'acceleration') orderClass = 'order-2';
                    if (stage.id === 'breakthrough') orderClass = 'order-3';

                    // These transform classes are now only active on desktop via CSS
                    let transformClass = "";
                    if (stage.id === 'acceleration' || stage.id === 'breakthrough') transformClass = "staggered-card";
                    if (stage.id === 'innovation') transformClass = "center-card";

                    return (
                        <div
                            key={stage.id}
                            ref={el => cardsRef.current[index] = el}
                            className={`stage-card flex flex-col items-center text-center p-8 border-2 border-accent rounded-3xl bg-background w-full max-w-sm h-auto md:w-auto lg:w-[22vw] md:max-w-[380px] md:order-none ${orderClass} ${transformClass}`}
                        >
                            <div 
                                className="h-1/3 w-full mb-8 flex items-center justify-center"
                                style={{
                                  backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)',
                                  backgroundSize: '20px 20px',
                                }}
                            >
                              <img src={stage.icon} alt={`${stage.title} icon`} />
                            </div>
                            <h3 className="text-lg font-secondary font-regular text-text-main uppercase mb-4">{stage.title}</h3>
                            <p className="text-text-main h-auto pb-2.5 w-8/9 border-b-2 border-accent text-[14px] font-secondary mb-8 flex-grow">
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