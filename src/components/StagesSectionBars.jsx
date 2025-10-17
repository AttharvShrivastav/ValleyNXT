import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ✅ IMPORT: Import useState and useEffect for dynamic calculations.
import React, { useRef, useState, useEffect } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StagesSectionBars = () => {
    const componentRootRef = useRef(null);
    const barsContainerRef = useRef(null);
    const [bars, setBars] = useState([]); // State to hold our dynamically generated bars

    // This is the repeating "valley" shape for the bar heights.
    const heightPattern = [0.9, 0.75, 0.6, 0.4, 0.25, 0.15, 0.25, 0.4, 0.6, 0.75, 0.9];

    // This effect runs on mount and on window resize to calculate the correct number of bars.
    useEffect(() => {
        const calculateBars = () => {
            if (!componentRootRef.current) return;

            const containerWidth = componentRootRef.current.offsetWidth;
            const desiredBarWidth = 45; // We want each bar to be around 45px wide.
            const numBars = Math.ceil(containerWidth / desiredBarWidth);

            // Create a new array of bars with the calculated length.
            const newBars = Array.from({ length: numBars }, (_, i) => {
                // Repeat the height pattern across all the generated bars.
                const height = heightPattern[i % heightPattern.length];
                return { height: `${height * 100}%` };
            });
            setBars(newBars);
        };

        calculateBars(); // Run once on initial render.
        window.addEventListener('resize', calculateBars); // Rerun whenever the window is resized.
        
        // Cleanup function to remove the event listener.
        return () => window.removeEventListener('resize', calculateBars);
    }, []); // The empty array ensures this effect only sets up the listener once.

    useGSAP(() => {
        // Don't run the animation if the container or bars aren't ready yet.
        if (!barsContainerRef.current || bars.length === 0) return;

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
        // By adding `bars` to the dependency array, GSAP will automatically
        // clean up the old animation and create a new one if the number of bars changes.
    }, { dependencies: [bars], scope: componentRootRef });

    return (
        <div ref={componentRootRef} className="absolute top-0 left-0 right-0 h-1/2 md:h-2/3 opacity-80 z-0 ">
            <div
                ref={barsContainerRef}
                className="absolute bottom-0 left-0 right-0 grid h-full w-full"
                style={{
                    // ✅ FINAL FIX: The number of columns is now dynamically set based on our calculation.
                    gridTemplateColumns: `repeat(${bars.length}, 1fr)`,
                    transform: 'rotate(180deg)'
                }}
            >
                {bars.map((bar, index) => (
                    <div
                        key={index}
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