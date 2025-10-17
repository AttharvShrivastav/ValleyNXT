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
        // This animation remains the same, wiping from right-to-left.
        gsap.from(barsContainerRef.current.children, {
            clipPath: 'inset(100% 0 0 0)',
            duration: 2.5,
            ease: 'power2.out',
            stagger: {
                amount: 2,
                from: 'end' // Stagger from the end
            },
            scrollTrigger: {
                trigger: componentRootRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    }, { scope: componentRootRef });

    return (
        <div ref={componentRootRef} className="absolute top-0 left-0 right-0 h-1/2 md:h-2/3 opacity-80 z-0 ">
            <div
                ref={barsContainerRef}
                // ✅ FINAL FIX: Reverted to the reliable `flex` layout from your working BackgroundBars component.
                className="absolute bottom-0 left-0 right-0 flex items-end h-full w-full"
                // The container is flipped to create the mirrored effect.
                style={{ transform: 'rotate(180deg)' }}
            >
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        // Each bar will grow to fill the available space.
                        className="flex-1"
                        style={{
                            height: bar.height,
                            background: 'linear-gradient(to top, var(--color-accent), var(--color-background) 85%)',
                            // ✅ FINAL FIX: This small negative margin forces a tiny overlap between bars,
                            // guaranteeing there are no sub-pixel gaps on any screen.
                            marginLeft: '-1px'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default StagesSectionBars;