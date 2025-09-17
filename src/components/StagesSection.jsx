import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StagesSectionBars from './StagesSectionBars';

import BreakthroughIcon from '../assets/Group 164.png'
import AccelerationIcon from '../assets/AccelerationIcon.png'
import IdeationIcon from '../assets/IdeationIcon.png'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StagesSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const stages = [
      { id: 'acceleration', icon: AccelerationIcon, title: 'Acceleration', content: `9 months of expert mentorship, funding, rapid tech build, and product sprints.
Cloud and data workshops, CXO access. Everything needed to launch and scale.`},
      { id: 'innovation', icon: IdeationIcon, title: 'Innovation',  content: `Early-stage backing for bold ideas, with belief, capital, and hands-on support.
Mentors who've built before, market access, and global connections.
Raw ideas refined into breakthrough solutions.` },
      { id: 'breakthrough', icon: BreakthroughIcon, title: 'Breakthrough', content: `Support for ventures solving real-world problems in health, education, climate, jobs, and livelihoods.
Strategic partnerships, funding, and expert guidance. Building technology that matters at scale.` }
    ];

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // ✅ DESKTOP ANIMATION (Your original, approved code for cards)
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

        // ✅ NEW MOBILE ANIMATION (Pins the section, fades in cards)
        mm.add("(max-width: 767px)", () => {
            if (cardsRef.current.length < 3) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    start: 'top top',
                    end: '+=800', // Pin duration for the mobile fade animation
                    scrub: 1,
                }
            });

            // Fade in the cards sequentially
            tl.from(cardsRef.current, {
                opacity: 0,
                ease: 'none',
                stagger: 0.3
            });
        });

        return () => mm.revert(); // Cleanup

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="bg-black pt-24 md:pt-36 min-h-screen w-full flex items-center justify-center relative overflow-hidden p-4">
            {/* StagesSectionBars animates itself independently */}
            <StagesSectionBars />
            
            <div className="flex flex-col md:flex-row justify-center md:items-end gap-8 md:gap-16 relative z-10">
                {stages.map((stage, index) => {
                    let orderClass = '';
                    if (stage.id === 'innovation') orderClass = 'order-1';
                    if (stage.id === 'acceleration') orderClass = 'order-2';
                    if (stage.id === 'breakthrough') orderClass = 'order-3';

                    let transformClass = "";
                    if (index === 0 || index === 2) transformClass = "md:translate-y-14";
                    if (index === 1) transformClass = "md-translate-y-0";

                    return (
                        <div
                            key={stage.id}
                            ref={el => cardsRef.current[index] = el}
                            className={`flex flex-col items-center text-center p-8 border-2 border-[#F47A36] rounded-3xl bg-black w-full max-w-sm h-auto md:w-[380px] md:h-[484px] md:order-none ${orderClass} ${transformClass}`}
                        >
                            <div className="h-48 w-full mb-8 flex items-center justify-center" style={{
                                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)',
                                backgroundSize: '20px 20px'
                            }}>
                              <img src={stage.icon} alt={`${stage.title} icon`} />
                            </div>
                            <h3 className="text-2xl font-secondary font-regular text-[#FFC7A8] uppercase mb-4">{stage.title}</h3>
                            <p className="text-[#FFC7A8] h-auto pb-2.5 w-5/6 border-b-2 border-[#F47A36] text-[15px] font-secondary mb-8 flex-grow">
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