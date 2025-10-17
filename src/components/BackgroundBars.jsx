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

        if (triggerOnScroll && scrollTriggerRef?.current) {
            gsap.from(barsContainerRef.current.children, {
                ...animationConfig,
                scrollTrigger: {
                    trigger: scrollTriggerRef.current,
                    // ✅ THE FIX: Starts the animation when the top of the section hits the
                    // center of the viewport. This ensures it's visible before animating.
                    start: 'top center', 
                    toggleActions: 'play none none none',
                }
            });
        } else if (startAnimations) {
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