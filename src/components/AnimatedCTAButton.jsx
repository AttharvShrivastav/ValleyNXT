import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(SplitText);

const AnimatedCtaButton = ({ text, link = "#" }) => {
    const buttonRef = useRef(null);

    useGSAP(() => {
        const ctaButton = buttonRef.current;
        if (!ctaButton) return;

        const ctaText = ctaButton.querySelector('.cta-text');
        
        // --- WIDER BUTTON CALCULATION ---
        // Added an extra 30px of padding to the right for a wider button
        const expandedWidth = ctaText.offsetLeft + ctaText.offsetWidth + 60 + 30;
        const circleTravelDistance = expandedWidth - 60;

        const splitButtonText = new SplitText(ctaText, { type: "words", wordsClass: "cta-word" });

        const tl = gsap.timeline({ paused: true });

        tl.to(ctaButton, { width: expandedWidth, duration: 0.5, ease: 'power3.inOut' })
          .to(ctaButton.querySelector(".cta-background"), { width: expandedWidth, duration: 0.5, ease: 'power3.inOut' }, 0)
          .to(ctaButton.querySelector(".cta-circle"), { x: circleTravelDistance, duration: 0.5, ease: 'power3.inOut' }, 0)
          .from(splitButtonText.words, {
              yPercent: 110,
              stagger: 0.05,
              duration: 0.3,
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
        <a ref={buttonRef} href={link} className="relative w-[60px] h-[60px] cursor-pointer inline-block">
            <div className="cta-background absolute inset-0 w-[60px] h-[60px] bg-[#FA9D79] rounded-full flex items-center">
               <div className="cta-text-container absolute left-[30px] overflow-hidden">
                   <div className="cta-text pr-3 text-lg font-medium text-[#2b1107] whitespace-nowrap">
                        {text}
                   </div>
               </div>
            </div>
            <div className="cta-circle absolute top-0 left-0 w-[60px] h-[60px] bg-[#E64910] rounded-full flex items-center justify-center z-10">
                <svg className="w-6 h-6" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C33.0609 0 34.0783 0.421427 34.8284 1.17157C35.5786 1.92172 36 2.93913 36 4V32C36 33.0609 35.5786 34.0783 34.8284 34.8284C34.0783 35.5786 33.0609 36 32 36H4C2.93913 36 1.92172 35.5786 1.17157 34.8284C0.421427 34.0783 0 33.0609 0 32V4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0H32ZM31 31V20.4C31 18.6708 30.3131 17.0124 29.0903 15.7897C27.8676 14.5669 26.2092 13.88 24.48 13.88C22.78 13.88 20.8 14.92 19.84 16.48V14.26H14.26V31H19.84V21.14C19.84 19.6 21.08 18.34 22.62 18.34C23.3626 18.34 24.0748 18.635 24.5999 19.1601C25.125 19.6852 25.42 20.3974 25.42 21.14V31H31ZM7.76 11.12C8.65113 11.12 9.50576 10.766 10.1359 10.1359C10.766 9.50576 11.12 8.65113 11.12 7.76C11.12 5.9 9.62 4.38 7.76 4.38C6.86357 4.38 6.00385 4.73611 5.36998 5.36998C4.73611 6.00385 4.38 6.86357 4.38 7.76C4.38 9.62 5.9 11.12 7.76 11.12ZM10.54 31V14.26H5V31H10.54Z" fill="#2b1107"/>
                </svg>
            </div>
        </a>
    );
};

export default AnimatedCtaButton;