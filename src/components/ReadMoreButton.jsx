import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

const ReadMoreButton = ({ text = "Read More", link = "#" }) => {
    const buttonRef = useRef(null);

    useGSAP(() => {
        const ctaButton = buttonRef.current;
        if (!ctaButton) return;

        const ctaText = ctaButton.querySelector('.cta-text');
        const baseSize = 44; // Figma circle size
        const leftOffset = 36; // Where the text container begins
        
        // Measure exact text width (including padding) to prevent clipping
        const textWidth = ctaText.offsetWidth;
        
        // Calculate exact travel distance so the circle clears the text
        const circleTravelDistance = leftOffset + textWidth - 24; 
        const expandedWidth = circleTravelDistance + baseSize;

        const splitButtonText = new SplitText(ctaText, { type: "words", wordsClass: "cta-word" });

        const tl = gsap.timeline({ paused: true });

        tl.to(ctaButton, { width: expandedWidth, duration: 0.5, ease: 'power3.inOut' })
          .to(ctaButton.querySelector(".cta-background"), { width: expandedWidth, duration: 0.5, ease: 'power3.inOut' }, 0)
          .to(ctaButton.querySelector(".cta-circle"), { x: circleTravelDistance, duration: 0.5, ease: 'power3.inOut' }, 0)
          .from(splitButtonText.words, {
              yPercent: 110,
              stagger: 0.05,
              duration: 0.3,
              opacity: 0,
              ease: 'power2.out'
          }, "-=0.4");
        
        const enterHandler = () => tl.timeScale(1.2).play();
        const leaveHandler = () => tl.timeScale(1.8).reverse();
        
        ctaButton.addEventListener('mouseenter', enterHandler);
        ctaButton.addEventListener('mouseleave', leaveHandler);

        return () => {
            if (ctaButton) {
                ctaButton.removeEventListener('mouseenter', enterHandler);
                ctaButton.removeEventListener('mouseleave', leaveHandler);
            }
            if (splitButtonText) {
                splitButtonText.revert();
            }
        }

    }, { scope: buttonRef });

    return (
        <a ref={buttonRef} href={link} className="relative w-[44px] h-[44px] cursor-pointer inline-block">
            {/* Light blue background matching the Figma design */}
            <div className="cta-background absolute inset-0 w-[44px] h-[44px] bg-[#E2EDFA] dark:bg-accent/20 rounded-full flex items-center">
               <div className="cta-text-container absolute left-[14px] overflow-hidden">
                   {/* pr-8 provides the necessary padding so the text doesn't touch the circle */}
                   <div className="cta-text text-[15px] font-primary font-semibold text-text-main dark:text-white whitespace-nowrap">
                        {text}
                   </div>
               </div>
            </div>
            
            {/* Solid accent circle with bold white chevron */}
            <div className="cta-circle absolute top-0 left-0 w-[44px] h-[44px] bg-accent rounded-full flex items-center justify-center z-10 shadow-sm">
                <svg className="w-5 h-5 text-white ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </a>
    );
};

export default ReadMoreButton;