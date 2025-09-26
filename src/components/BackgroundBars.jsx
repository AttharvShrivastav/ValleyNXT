import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

// ✅ CHANGE: Component now accepts the startAnimations prop
const BackgroundBars = ({ position = 'bottom', startAnimations }) => {
    const barsContainerRef = useRef(null);

    const heights = [100, 90, 70, 60, 40, 25, 40, 60, 70, 90, 100];
    const bars = heights.map(h => ({
        height: `${h}%`,
    }));

    useGSAP(() => {
        // ✅ CHANGE: Animation now waits for the preloader to finish
        if (!startAnimations) return;

        gsap.from(barsContainerRef.current.children, {
            scaleY: 0,
            transformOrigin: position === 'top' ? 'top' : 'bottom',
            duration: 2.5,
            ease: 'power2.out',
            stagger: {
                amount: 2,
                from: 'start'
            },
            delay: 0.3
        });
    }, { scope: barsContainerRef, dependencies: [position, startAnimations] }); // ✅ CHANGE: Add startAnimations to dependency array

    return (
        <div className={`absolute left-0 right-0 h-1/2 md:h-2/3 opacity-80 z-0 overflow-hidden ${position === 'top' ? 'top-0' : 'bottom-0'}`}>
            <div
                ref={barsContainerRef}
                className="absolute bottom-0 left-0 right-0 flex items-end h-full w-full"
                style={{ transform: position === 'top' ? 'rotate(180deg)' : 'none' }}
            >
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className="flex-1"
                        style={{
                            height: bar.height,
                            background:'linear-gradient(to top, var(--color-accent), var(--color-background) 85%)'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundBars;