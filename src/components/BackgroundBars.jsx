import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef,useState, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

// 1. The component now accepts a 'position' prop, defaulting to 'bottom'
const BackgroundBars = ({ position = 'bottom' }) => {
    const barsContainerRef = useRef(null);

    // Using the heights array you provided
    const heights = [100, 90, 70, 60, 40, 25, 40, 60, 70, 90, 100];
    const bars = heights.map(h => ({
        height: `${h}%`,
    }));

    useGSAP(() => {
        gsap.from(barsContainerRef.current.children, {
            scaleY: 0,
            // 2. Animation origin changes based on the 'position' prop
            transformOrigin: position === 'top' ? 'top' : 'bottom',
            duration: 2.5,
            ease: 'power2.out',
            stagger: {
                amount: 2,
                from: 'start'
            },
            delay: 0.3 // Added a small delay for better visual timing
        });
    }, { scope: barsContainerRef, dependencies: [position] }); // Re-run if position changes

    return (
        // 3. Positioning is now dynamic based on the 'position' prop
        <div className={`absolute left-0 right-0 h-1/2 md:h-2/3 opacity-80 z-0 overflow-hidden ${position === 'top' ? 'top-0' : 'bottom-0'}`}>
            <div
                ref={barsContainerRef}
                className="absolute bottom-0 left-0 right-0 flex items-end h-full w-full"
                // 4. We flip the entire container for the 'top' version to mirror it perfectly
                style={{ transform: position === 'top' ? 'rotate(180deg)' : 'none' }}
            >
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className="flex-1"
                        style={{
                            height: bar.height,
                            background: 'linear-gradient(to top, #F47A36, #000000 85%)'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundBars;