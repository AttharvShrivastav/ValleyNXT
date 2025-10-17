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
            scaleY: 0,
            transformOrigin: 'top', 
            duration: 2.5,
            ease: 'power2.out',
            stagger: {
                amount: 2,
                from: 'start'
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
            
            <div
                ref={barsContainerRef}
                className="absolute top-0 left-0 right-0 flex items-start h-full w-full"
            >
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        // ✅ FIX: Removed `flex-1` className
                        className="" 
                        style={{
                            height: bar.height,
                            // By explicitly calculating the width, we prevent the browser's
                            // rounding errors that were causing the gap.
                            width: 'calc(100% / 11)',
                            background: 'linear-gradient(to bottom, var(--color-accent), var(--color-background) 85%)',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default StagesSectionBars;