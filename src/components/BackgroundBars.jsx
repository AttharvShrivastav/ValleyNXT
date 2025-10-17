import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BackgroundBars = ({ 
    position = 'bottom', 
    startAnimations, 
    triggerOnScroll = false,
    scrollTriggerRef 
}) => {
    const barsContainerRef = useRef(null);

    const heights = [100, 90, 70, 60, 40, 25, 40, 60, 70, 90, 100];
    const bars = heights.map(h => ({
        height: `${h}%`,
    }));

    useGSAP(() => {
        if (!barsContainerRef.current) return;

        // Shared animation configuration for consistency
        const animationConfig = {
            scaleY: 0,
            transformOrigin: position === 'top' ? 'bottom' : 'bottom',
            duration: 2.5,
            ease: 'power2.out',
            stagger: {
                amount: 2,
                from: 'start'
            },
        };

        // Conditionally apply either a ScrollTrigger or a time-based delay
        if (triggerOnScroll && scrollTriggerRef?.current) {
            // New logic for scroll-triggered animation
            gsap.from(barsContainerRef.current.children, {
                ...animationConfig,
                scrollTrigger: {
                    trigger: scrollTriggerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });
        } else if (startAnimations) {
            // Original logic for the hero section animation
            gsap.from(barsContainerRef.current.children, {
                ...animationConfig,
                delay: 0.3
            });
        }

    }, { dependencies: [position, startAnimations, triggerOnScroll, scrollTriggerRef] });

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
                        className="" /* ✅ CHANGE 1: Removed 'flex-1' */
                        style={{
                            height: bar.height,
                            /* ✅ CHANGE 2: Added explicit width calculation */
                            width: `calc(100% / ${bars.length})`,
                            background:'linear-gradient(to top, var(--color-accent), var(--color-background) 85%)'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundBars;