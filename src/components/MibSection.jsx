import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';
import { debounce } from '../utils/debounce';

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, MotionPathPlugin, DrawSVGPlugin, useGSAP);

const ventureData = {
  content: [
    { id: 'mentorship', title: 'Mentorship', subtitle: 'Unlock Founder Speed and Precision.', description: 'A 150+ member network of CXOs, industry veterans, and domain experts offering tailored guidance to founders—from product-market fit and strategy to leadership and technical growth—accelerating decisions and avoiding pitfalls.'},
    { id: 'investment', title: 'Investment', subtitle: 'Fuel Bold Visions with Smart Capital.', description: 'Capital deployed from pre-seed to Series A+, with performance-based follow-on funding up to ₹10 Cr, focused on scalable models, strong tech moats, and clear exit potential.'},
    { id: 'connects', title: 'Business Connects', subtitle: 'Accelerate Market Access and Scale.', description: 'A platform linking startups to customers, partners, and investors via curated introductions, demo days, and global networks to fast-track market access and growth.'},
  ],
  svg: {
    paths: { mentorship: ["M 50,1 A 49,49 0 1,1 49.9,1 Z", "M 50,13 A 37,37 0 1,1 49.9,13 Z", "M 50,25 A 25,25 0 1,1 49.9,25 Z", "M 50,37 A 13,13 0 1,1 49.9,37 Z"], investment: ["M50,0 L85,50 L50,100 L15,50 Z", "M50,10 L78,50 L50,90 L22,50 Z", "M50,20 L71,50 L50,80 L29,50 Z", "M50,30 L64,50 L50,70 L36,50 Z"], connects: ["M50,0 L90,25 L90,75 L50,100 L10,75 L10,25 Z", "M50,10 L82,30 L82,70 L50,90 L18,70 L18,30 Z", "M50,20 L74,35 L74,65 L50,80 L26,65 L26,35 Z", "M50,30 L66,40 L66,60 L50,70 L34,60 L34,40 Z"] },
    dots: { mentorship: [{ cx: 84.6, cy: 15.4 }, { cx: 23.9, cy: 23.9 }, { cx: 32.3, cy: 67.7 }, { cx: 59.2, cy: 59.2 }], investment: [{ cx: 37, cy: 20 }, { cx: 22, cy: 50 }, { cx: 50, cy: 80 }, { cx: 64, cy: 50 }], connects: [{ cx: 10, cy: 25 }, { cx: 82, cy: 30 }, { cx: 74, cy: 65 }, { cx: 34, cy: 60 }] },
  },
};

const useHeadingAnimation = (scopeRef) => {
  useGSAP(() => {
    if (!scopeRef.current) return;
    const topHorizontalLine = scopeRef.current.querySelector('path:nth-child(1)');
    const topDot = scopeRef.current.querySelector('circle:nth-child(2)');
    const leftVerticalLine = scopeRef.current.querySelector('path:nth-child(6)');
    const bottomHorizontalBorder = scopeRef.current.querySelector('path:nth-child(5)');
    const rightVerticalLine = scopeRef.current.querySelector('path:nth-child(7)');
    const bottomHorizontalLine = scopeRef.current.querySelector('path:nth-child(3)');
    const bottomDot = scopeRef.current.querySelector('circle:nth-child(4)');
    gsap.set([topHorizontalLine, leftVerticalLine, bottomHorizontalBorder, rightVerticalLine, bottomHorizontalLine], { drawSVG: "0%" });
    gsap.set([topDot, bottomDot], { scale: 0, transformOrigin: "center" });
    const tl = gsap.timeline({ scrollTrigger: { trigger: scopeRef.current, start: 'top 70%', toggleActions: "play none none reverse" } });
    tl.to(topDot, { scale: 1, duration: 0.3, ease: "back.out(1.7)" })
      .fromTo(topHorizontalLine, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%", duration: 0.5 })
      .to(leftVerticalLine, { drawSVG: "100%", duration: 0.3 })
      .to(bottomHorizontalBorder, { drawSVG: "100%", duration: 0.8 })
      .fromTo(rightVerticalLine, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%", duration: 0.2 })
      .fromTo(bottomHorizontalLine, { drawSVG: "100% 100%" }, { drawSVG: "0% 100%", duration: 0.5 })
      .to(bottomDot, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
  }, { scope: scopeRef });
};

const useDesktopAnimations = ({ mainRef, pinRef, contentRefs }) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      if (!pinRef.current) return;
      const contentElements = contentRefs.current.filter(Boolean);
      if (contentElements.length < ventureData.content.length) return;
      gsap.set(contentElements.slice(1), { autoAlpha: 0 });
      const mainTimeline = gsap.timeline({ scrollTrigger: { trigger: mainRef.current, pin: pinRef.current, start: 'top top', end: 'bottom bottom', scrub: 1 } });
      ventureData.content.forEach((section, index) => {
        if (index === 0) return; 
        const fadeOutPos = `fadeOut-${index}`;
        const fadeInPos = `fadeIn-${index}`;
        mainTimeline
          .to(contentElements[index - 1], { autoAlpha: 0 }, fadeOutPos)
          .to('.morph-path', { morphSVG: (i) => ventureData.svg.paths[section.id][i], ease: 'power1.inOut' }, fadeOutPos)
          .to('.morph-dot', { attr: (i) => ({ ...ventureData.svg.dots[section.id][i] }), ease: 'power1.inOut' }, fadeOutPos)
          .to(contentElements[index], { autoAlpha: 1 }, fadeInPos);
      });
      const wrapper = pinRef.current.querySelector('.content-wrapper');
      if (!wrapper) return;
      const glowSvg = wrapper.querySelector('.glow-svg');
      const motionPath = wrapper.querySelector('.motion-path');
      const traceLine = wrapper.querySelector('.trace-line');
      let motionPathAnim;
      const updateMotionPath = () => {
        if (!glowSvg || !motionPath || !traceLine) return;
        if (motionPathAnim) motionPathAnim.kill();
        const radius = 32;
        const inset = 0.5;
        const w = wrapper.offsetWidth;
        const h = wrapper.offsetHeight;
        glowSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        const pathRadius = radius - inset;
        const pathData = `M ${radius},${inset} H ${w - radius} a ${pathRadius},${pathRadius} 0 0 1 ${pathRadius},${pathRadius} V ${h - radius} a ${pathRadius},${pathRadius} 0 0 1 -${pathRadius},${pathRadius} H ${radius} a ${pathRadius},${pathRadius} 0 0 1 -${pathRadius},-${pathRadius} V ${radius} a ${pathRadius},${pathRadius} 0 0 1 ${pathRadius},-${pathRadius} Z`;
        motionPath.setAttribute('d', pathData);
        motionPathAnim = gsap.to(traceLine, { motionPath: { path: motionPath, align: motionPath, alignOrigin: [0.5, 0.5], autoRotate: true }, ease: 'none', scrollTrigger: { trigger: mainRef.current, start: 'top top', end: 'bottom bottom', scrub: 1 } });
      };
      const debouncedUpdate = debounce(updateMotionPath, 200);
      updateMotionPath();
      window.addEventListener('resize', debouncedUpdate);
      return () => window.removeEventListener('resize', debouncedUpdate);
    });
    return () => mm.revert();
  }, { scope: mainRef });
};

const useMobileAnimations = (scopeRef) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(max-width: 767px)", () => {
      const mobileSections = gsap.utils.toArray('.mobile-service-section');
      mobileSections.forEach(section => {
        gsap.from(section, { opacity: 0, y: 50, scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: "play none none reverse" } });
      });
    });
    return () => mm.revert();
  }, { scope: scopeRef });
};

const VentureServices = () => {
  const mainRef = useRef(null);
  const pinRef = useRef(null);
  const headingSvgRef = useRef(null);
  const contentRefs = useRef([]);

  useHeadingAnimation(headingSvgRef);
  useDesktopAnimations({ mainRef, pinRef, contentRefs });
  useMobileAnimations(mainRef);

  return (
    <div ref={mainRef} className="bg-background text-text-main">
      <style>{`
        @media (min-width: 768px) {
          .dynamic-height-container {
            height: ${ventureData.content.length * 100}vh;
          }
        }
        .main-heading-container {
          --heading-py: 3rem;
          padding-top: var(--heading-py);
          padding-bottom: var(--heading-py);
        }
        .heading-svg-container {
          top: calc(var(--heading-py) + 2rem);
        }
        @media (min-width: 768px) and (max-height: 800px) {
          .main-heading-container {
            --heading-py: 2rem;
          }
          .desktop-content-section {
            padding: 2rem;
            gap: 1.5rem;
          }
          .desktop-content-section h1 {
            /* ✅ FIX: Increased font-size for shorter screens */
            font-size: 1.75rem; /* Equivalent to text-4xl */
          }
          .desktop-content-section p {
            font-size: 0.875rem;
            line-height: 1.4;
          }
          .svg-container {
            width: 240px;
            height: 240px;
          }
          .svg-container svg {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
      <div className="dynamic-height-container">
        <div ref={pinRef} className="flex w-screen flex-col md:h-screen">
          <div className="main-heading-container w-full text-center relative flex flex-col items-center justify-center">
              <div className="heading-svg-container absolute left-1/2 -translate-x-1/2 w-full max-w-[1100px] hidden md:block px-4">
  <svg 
    ref={headingSvgRef} 
    width="100%" 
    height="100%" 
    viewBox="0 0 1112 149" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 3L327.086 3" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
    <circle cx="327.086" cy="3" r="2.5" fill="var(--color-accent)" />
    <path d="M736 93L1112 93" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
    <circle cx="736" cy="93" r="2.5" fill="var(--color-accent)" />
    <path d="M0 148.428L1112 148.428" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
    <path d="M0.572369 3L0.572369 148" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
    <path d="M1111.57 93L1111.57 148" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
  </svg>
</div>
              <div className="relative z-10 max-w-[900px] w-full flex justify-center items-center p-4">
                  <h1 className='text-2xl sm:text-3xl md:text-4xl font-primary leading-tight'>
                    THREE PILLARS,<br />
                    ONE BRIDGE TO <br />
                    <span style={{ fontFamily: 'Georgia, serif', marginTop: '-0.5em', display: 'inline-block' }} className='text-accent text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight'>
                      success
                    </span>
                  </h1>
              </div>
          </div>

          <div className="hidden md:flex flex-grow items-center justify-center w-full px-4 pb-8 overflow-hidden">
            <div className="content-wrapper relative grid grid-cols-10 max-w-[1100px] w-full h-full max-h-[670px] border border-accent rounded-[2rem] bg-container-bg overflow-hidden">
              <div className="col-span-6 relative flex items-center justify-center p-12 border-r border-accent">
                {ventureData.content.map((item, index) => (
                  <div key={item.id} ref={(element) => { contentRefs.current[index] = element; }} className="desktop-content-section absolute w-full h-full flex flex-col gap-8 items-center justify-center p-12 text-center">
                    <div className="flex flex-col items-center gap-0">
                      {/* ✅ FIX: Increased Tailwind font size for standard desktops */}
                      <h1 className="text-5xl font-primary pb-5 font-normal leading-none">{item.title}</h1>
                      <h2 className="text-lg font-secondary font-normal text-accent">{item.subtitle}</h2>
                    </div>
                    <p className="text-lg font-secondary leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="col-span-4 flex flex-col justify-center items-center gap-6 p-4">
                <div className="svg-container w-[320px] h-[320px] rounded-2xl flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                  <svg width="300" height="300" viewBox="0 0 100 100">
                    {ventureData.svg.paths.mentorship.map((path, i) => ( <path key={`path-${i}`} className="morph-path fill-none stroke-accent" d={path} strokeWidth="0.5" /> ))}
                    {ventureData.svg.dots.mentorship.map((dot, i) => ( <circle key={`dot-${i}`} className="morph-dot fill-accent" r="2.5" cx={dot.cx} cy={dot.cy} /> ))}
                  </svg>
                </div>
              </div>
              <svg className="glow-svg absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
                <path className="motion-path" fill="none" stroke="none" />
                <line className="trace-line" x1="-15" y1="0" x2="15" y2="0" stroke="var(--color-accent)" strokeWidth="1.2" />
              </svg>
            </div>
          </div>

          <div className="flex md:hidden flex-col gap-12 p-4">
            {ventureData.content.map((item) => (
              <div key={item.id} className="mobile-service-section flex flex-col items-center text-center gap-6 border border-accent rounded-[2rem] p-6">
                <div className="flex flex-col items-center gap-0">
                  <h1 className="text-2xl font-primary font-normal text-text-main leading-none">{item.title}</h1>
                  <h2 className="text-sm font-secondary font-normal text-accent">{item.subtitle}</h2>
                </div>
                <p className="text-sm text-text-main font-secondary leading-tight">{item.description}</p>
                <div className="w-full max-w-[300px] aspect-square rounded-2xl flex items-center justify-center mt-4" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                  <svg width="280" height="280" viewBox="0 0 100 100">
                    {ventureData.svg.paths[item.id].map((path, i) => ( <path key={`path-${i}`} className="fill-none stroke-accent" d={path} strokeWidth="0.5" /> ))}
                    {ventureData.svg.dots[item.id].map((dot, i) => ( <circle key={`dot-${i}`} className="fill-accent" r="2.5" cx={dot.cx} cy={dot.cy} /> ))}
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureServices;
