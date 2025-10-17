import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StagesSectionBars = () => {
    const componentRootRef = useRef(null);
    const barsContainerRef = useRef(null);

    const anchorPoints = [0.9, 0.75, 0.6, 0.4, 0.25, 0.15, 0.25, 0.4, 0.6, 0.75, 0.9];
    const bars = anchorPoints.map(a => ({
        height: `${a * 100}%`
    }));


    useGSAP(() => {
        if (!barsContainerRef.current) return;
        
        gsap.from(barsContainerRef.current.children, {
            clipPath: 'inset(100% 0 0 0)',
            duration: 2.5,
            ease: 'power2.out',
            stagger: {
                amount: 2,
                from: 'end'
            },
            scrollTrigger: {
                trigger: componentRootRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: componentRootRef });

    return (
        <div ref={componentRootRef} className="absolute top-0 left-0 right-0 h-1/2 md:h-2/3 opacity-80 z-0 overflow-hidden">
            {/* ✅ **THE FIX:** Switched from Flexbox to CSS Grid for more reliable column calculation */}
            <div
                ref={barsContainerRef}
                className="absolute bottom-0 left-0 right-0 grid items-end h-full w-full"
                style={{ 
                    gridTemplateColumns: 'repeat(11, 1fr)', // Create 11 perfectly divided fractional columns
                    transform: 'rotate(180deg)' 
                }}
            >
                {bars.map((bar, index) => (
                    // ✅ Removed `flex-1` as it's no longer needed with Grid
                    <div
                        key={index}
                        className="" // `flex-1` has been removed
                        style={{
                            height: bar.height,
                            background: 'linear-gradient(to top, var(--color-accent), var(--color-background) 85%)',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default StagesSectionBars;