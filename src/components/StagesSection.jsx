// import React, { useRef } from 'react';
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import BackgroundBars from './BackgroundBars';
// import StagesSectionBars from './StagesSectionBars';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// // --- SVG Icon Components ---
// const AccelerationIcon = () => (
//     <svg width="187" height="149" viewBox="0 0 187 149" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M47.9257 34.2299C47.9229 31.7281 50.6293 30.1615 52.7973 31.41L122.593 71.6018C124.761 72.8503 124.764 75.9774 122.599 77.2309L52.8937 117.58C50.7964 118.793 48.1877 117.367 48.0238 115.003L48.0157 114.77L47.9257 34.2299Z" stroke="var(--color-accent)" strokeWidth="1.5"/>
//         <path d="M85.9257 34.2299C85.9229 31.7281 88.6293 30.1615 90.7973 31.41L160.593 71.6018C162.761 72.8503 162.764 75.9774 160.599 77.2309L90.8937 117.58C88.7964 118.793 86.1877 117.367 86.0238 115.003L86.0157 114.77L85.9257 34.2299Z" stroke="var(--color-accent)" strokeWidth="1.5"/>
//     </svg>
// );

// const InnovationIcon = () => (
//     <svg width="153" height="105" viewBox="0 0 153 105" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <g filter="url(#filter0_d_359_5142)">
//             <circle cx="52.5" cy="48.5" r="47.75" stroke="var(--color-accent)" strokeWidth="1" shapeRendering="crispEdges"/>
//         </g>
//         <g filter="url(#filter1_d_359_5142)">
//             <circle cx="100.5" cy="48.5" r="47.75" stroke="var(--color-accent)" strokeWidth="1" shapeRendering="crispEdges"/>
//         </g>
//         <defs>
//             <filter id="filter0_d_359_5142" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                 <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//                 <feComposite in2="hardAlpha" operator="out"/>
//                 <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
//                 <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_359_5142"/>
//                 <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_359_5142" result="shape"/>
//             </filter>
//             <filter id="filter1_d_359_5142" x="48" y="0" width="105" height="105" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                 <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
//                 <feComposite in2="hardAlpha" operator="out"/>
//                 <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
//                 <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_359_5142"/>
//                 <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_359_5142" result="shape"/>
//             </filter>
//         </defs>
//     </svg>
// );

// const BreakthroughIcon = () => (
//     <svg width="139" height="121" viewBox="0 0 139 121" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M48.1748 60.0859C48.1748 43.5409 50.525 28.5868 54.3076 17.7891C56.1999 12.3875 58.4396 8.0566 60.8984 5.08789C63.3601 2.11572 65.9824 0.574366 68.6494 0.574218C71.3166 0.574218 73.9396 2.11557 76.4014 5.08789C78.8602 8.0566 81.1 12.3876 82.9922 17.7891C86.7747 28.5868 89.125 43.5409 89.125 60.0859C89.125 76.6312 86.7748 91.5861 82.9922 102.384C81.1 107.785 78.8601 112.115 76.4014 115.084C73.9396 118.056 71.3166 119.598 68.6494 119.598C65.9824 119.598 63.3601 118.056 60.8984 115.084C58.4397 112.115 56.1998 107.785 54.3076 102.384C50.525 91.5861 48.1748 76.6312 48.1748 60.0859Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
//         <path d="M61.2092 80.8526C46.1266 72.1447 33.7963 62.4463 26.0509 53.8199C22.176 49.5042 19.4704 45.4808 18.1288 42.0046C16.783 38.5175 16.8472 35.6868 18.3077 33.6432C19.7682 31.5997 22.6054 30.3708 26.693 30.0208C30.7681 29.672 35.9643 30.2107 41.9422 31.5835C53.8913 34.3278 68.8322 40.3733 83.9148 49.0812C98.9973 57.7891 111.326 67.4879 119.072 76.1143C122.947 80.43 125.652 84.4533 126.994 87.9295C128.34 91.4166 128.277 94.247 126.816 96.2907C125.356 98.3343 122.518 99.5634 118.43 99.9133C114.354 100.262 109.158 99.7235 103.18 98.3506C91.2314 95.6064 76.2917 89.5605 61.2092 80.8526Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
//         <path d="M55.0855 50.8251C70.1678 42.1173 85.1076 36.0714 97.0566 33.3271C103.035 31.9542 108.231 31.4151 112.307 31.7639C116.395 32.1138 119.232 33.3434 120.693 35.3871C122.153 37.4306 122.217 40.2608 120.871 43.7477C119.529 47.2239 116.823 51.2477 112.948 55.5634C105.202 64.1898 92.8734 73.8887 77.791 82.5965C62.7085 91.3044 47.7683 97.3494 35.8192 100.094C29.8412 101.467 24.6453 102.005 20.5701 101.656C16.4821 101.306 13.6445 100.078 12.1839 98.0345C10.7234 95.9908 10.66 93.1598 12.0058 89.6726C13.3475 86.1964 16.0531 82.1729 19.928 77.8574C27.6734 69.231 40.003 59.5329 55.0855 50.8251Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
//         <circle cx="69.5" cy="63.5" r="4.95" stroke="var(--color-accent)" strokeWidth="1.1"/>
//     </svg>
// );

// const StagesSection = () => {
//     const sectionRef = useRef(null);
//     const cardsRef = useRef([]);

//     const stages = [
//       { id: 'acceleration', icon: <AccelerationIcon />, title: 'Acceleration', content: `Funding is just the beginning. We offer mentorship, networks, and market access so founders build smarter and scale faster, turning bold concepts into reality.`},
//       { id: 'innovation', icon: <InnovationIcon />, title: 'Innovation',  content: `India, despite abundant talent, still imports critical technologies. Supporting bold founders builds self-reliance, driving disruption and transformation by backing breakthrough ideas even before sectors are defined.` },
//       { id: 'breakthrough', icon: <BreakthroughIcon />, title: 'Breakthrough', content: `Support for ventures solving real-world problems in health, education, climate, jobs, and livelihoods.
// Strategic partnerships, funding, and expert guidance. Building technology that matters at scale.` }
//     ];

//     useGSAP(() => {
//         const mm = gsap.matchMedia();

//         mm.add("(min-width: 768px)", () => {
//             if (cardsRef.current.length < 3) return;
//             const [left, middle, right] = cardsRef.current;
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     pin: true,
//                     start: 'top top',
//                     end: '+=2000',
//                     scrub: 1,
//                 }
//             });

//             tl.from(middle, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' })
//               .from(left, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2')
//               .from(right, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2');
//         });

//         mm.add("(max-width: 767px)", () => {
//             if (cardsRef.current.length < 3) return;
//             const [accelerationCard, innovationCard, breakthroughCard] = cardsRef.current;

//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     pin: true,
//                     start: 'top top',
//                     end: '+=800',
//                     scrub: 1,
//                 }
//             });
            
//             tl.from(innovationCard, { opacity: 0, ease: 'none' })
//               .from(accelerationCard, { opacity: 0, ease: 'none' }, '+=0.2')
//               .from(breakthroughCard, { opacity: 0, ease: 'none' }, '+=0.2');
//         });

//         return () => mm.revert();

//     }, { scope: sectionRef });

//     return (
//         <section ref={sectionRef} className="stages-section bg-background min-h-screen h-auto min-w-screen flex items-center justify-center relative overflow-hidden p-4">
//             <style>{`
//               .stages-section {
//                 --section-pt: 9rem;
//                 padding-top: var(--section-pt);
//               }
//               .stages-grid {
//                 --grid-gap: 2rem;
//                 gap: var(--grid-gap);
//               }
//               .stage-card {
//                 transform-origin: bottom;
//                 transform: translateY(0);
//               }
//               @media (min-width: 768px) {
//                 .stages-grid {
//                   --card-offset-y: 6rem;
//                   --grid-gap: 4rem;
//                   transform: translateY(-6rem);
//                 }
//                 .staggered-card {
//                   transform: translateY(var(--card-offset-y));
//                 }
//                 .center-card {
//                   transform: translateY(0);
//                 }
//               }
//               @media (min-width: 768px) and (max-width: 1024px) {
//                 .stages-grid {
//                   --grid-gap: 2rem;
//                 }
//                 .stage-card {
//                   width: 280px;
//                 }
//               }
//               @media (min-width: 768px) and (max-height: 800px) {
//                 .stages-section {
//                   --section-pt: 5rem;
//                 }
//                 .stages-grid {
//                   --card-offset-y: 4rem;
//                 }
//                 .staggered-card {
//                   transform: translateY(var(--card-offset-y)) scale(0.85);
//                 }
//                 .center-card {
//                   transform: scale(0.85);
//                 }
//               }
//             `}</style>
            
//               <StagesSectionBars />
            
//              <div className="stages-grid flex flex-col md:grid md:grid-cols-3 md:items-end relative z-10">
//                 {stages.map((stage, index) => {
//                     let orderClass = '';
//                     if (stage.id === 'innovation') orderClass = 'order-1';
//                     if (stage.id === 'acceleration') orderClass = 'order-2';
//                     if (stage.id === 'breakthrough') orderClass = 'order-3';

//                     let transformClass = "";
//                     if (stage.id === 'acceleration' || stage.id === 'breakthrough') transformClass = "staggered-card";
//                     if (stage.id === 'innovation') transformClass = "center-card";

//                     return (
//                         <div
//                             key={stage.id}
//                             ref={el => cardsRef.current[index] = el}
//                             className={`stage-card flex flex-col items-center text-center p-8 border-2 border-accent rounded-3xl bg-stages-bg w-full max-w-sm h-auto md:w-auto lg:w-[22vw] md:max-w-[380px] md:order-none ${orderClass} ${transformClass}`}
//                         >
//                             <div 
//                                 className="h-1/3 w-full mb-8 flex items-center justify-center"
//                                 style={{
//                                   backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)',
//                                   backgroundSize: '20px 20px',
//                                 }}
//                             >
//                               {stage.icon}
//                             </div>
//                             <h3 className="text-lg font-secondary font-regular text-text-main uppercase mb-4">{stage.title}</h3>
//                             <p className="text-text-main h-auto pb-2.5 w-8/9 border-b-2 border-accent text-[14px] font-secondary mb-8 flex-grow">
//                                 {stage.content}
//                             </p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// };

// export default StagesSection;



// // import React, { useRef } from 'react';
// // import { gsap } from "gsap";
// // import { useGSAP } from "@gsap/react";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import StagesSectionBars from './StagesSectionBars';

// // // The image imports are no longer needed as we are using inline SVGs.
// // // import BreakthroughIcon from '../assets/Group 164.png';
// // // import AccelerationIcon from '../assets/AccelerationIcon.png';
// // // import IdeationIcon from '../assets/IdeationIcon.png';

// // gsap.registerPlugin(useGSAP, ScrollTrigger);

// // // --- SVG Icon Components ---
// // // I've converted your SVGs into React components and replaced the stroke color
// // // with the CSS variable you requested. Attributes are now camelCased for JSX.

// // const AccelerationIcon = () => (
// //     <svg width="187" height="149" viewBox="0 0 187 149" fill="none" xmlns="http://www.w3.org/2000/svg">
// //         <path d="M47.9257 34.2299C47.9229 31.7281 50.6293 30.1615 52.7973 31.41L122.593 71.6018C124.761 72.8503 124.764 75.9774 122.599 77.2309L52.8937 117.58C50.7964 118.793 48.1877 117.367 48.0238 115.003L48.0157 114.77L47.9257 34.2299Z" stroke="var(--color-accent)" strokeWidth="1.5"/>
// //         <path d="M85.9257 34.2299C85.9229 31.7281 88.6293 30.1615 90.7973 31.41L160.593 71.6018C162.761 72.8503 162.764 75.9774 160.599 77.2309L90.8937 117.58C88.7964 118.793 86.1877 117.367 86.0238 115.003L86.0157 114.77L85.9257 34.2299Z" stroke="var(--color-accent)" strokeWidth="1.5"/>
// //     </svg>
// // );

// // const InnovationIcon = () => (
// //     <svg width="153" height="105" viewBox="0 0 153 105" fill="none" xmlns="http://www.w3.org/2000/svg">
// //         <g filter="url(#filter0_d_359_5142)">
// //             <circle cx="52.5" cy="48.5" r="47.75" stroke="var(--color-accent)" strokeWidth="1" shapeRendering="crispEdges"/>
// //         </g>
// //         <g filter="url(#filter1_d_359_5142)">
// //             <circle cx="100.5" cy="48.5" r="47.75" stroke="var(--color-accent)" strokeWidth="1" shapeRendering="crispEdges"/>
// //         </g>
// //         <defs>
// //             <filter id="filter0_d_359_5142" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
// //                 <feFlood floodOpacity="0" result="BackgroundImageFix"/>
// //                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// //                 {/* <feOffset dy="4"/>
// //                 <feGaussianBlur stdDeviation="2"/> */}
// //                 <feComposite in2="hardAlpha" operator="out"/>
// //                 <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
// //                 <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_359_5142"/>
// //                 <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_359_5142" result="shape"/>
// //             </filter>
// //             <filter id="filter1_d_359_5142" x="48" y="0" width="105" height="105" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
// //                 <feFlood floodOpacity="0" result="BackgroundImageFix"/>
// //                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// //                 {/* <feOffset dy="4"/> */}
// //                 {/* <feGaussianBlur stdDeviation="2"/> */}
// //                 <feComposite in2="hardAlpha" operator="out"/>
// //                 <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
// //                 <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_359_5142"/>
// //                 <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_359_5142" result="shape"/>
// //             </filter>
// //         </defs>
// //     </svg>
// // );

// // const BreakthroughIcon = () => (
// //     <svg width="139" height="121" viewBox="0 0 139 121" fill="none" xmlns="http://www.w3.org/2000/svg">
// //         <path d="M48.1748 60.0859C48.1748 43.5409 50.525 28.5868 54.3076 17.7891C56.1999 12.3875 58.4396 8.0566 60.8984 5.08789C63.3601 2.11572 65.9824 0.574366 68.6494 0.574218C71.3166 0.574218 73.9396 2.11557 76.4014 5.08789C78.8602 8.0566 81.1 12.3876 82.9922 17.7891C86.7747 28.5868 89.125 43.5409 89.125 60.0859C89.125 76.6312 86.7748 91.5861 82.9922 102.384C81.1 107.785 78.8601 112.115 76.4014 115.084C73.9396 118.056 71.3166 119.598 68.6494 119.598C65.9824 119.598 63.3601 118.056 60.8984 115.084C58.4397 112.115 56.1998 107.785 54.3076 102.384C50.525 91.5861 48.1748 76.6312 48.1748 60.0859Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
// //         <path d="M61.2092 80.8526C46.1266 72.1447 33.7963 62.4463 26.0509 53.8199C22.176 49.5042 19.4704 45.4808 18.1288 42.0046C16.783 38.5175 16.8472 35.6868 18.3077 33.6432C19.7682 31.5997 22.6054 30.3708 26.693 30.0208C30.7681 29.672 35.9643 30.2107 41.9422 31.5835C53.8913 34.3278 68.8322 40.3733 83.9148 49.0812C98.9973 57.7891 111.326 67.4879 119.072 76.1143C122.947 80.43 125.652 84.4533 126.994 87.9295C128.34 91.4166 128.277 94.247 126.816 96.2907C125.356 98.3343 122.518 99.5634 118.43 99.9133C114.354 100.262 109.158 99.7235 103.18 98.3506C91.2314 95.6064 76.2917 89.5605 61.2092 80.8526Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
// //         <path d="M55.0855 50.8251C70.1678 42.1173 85.1076 36.0714 97.0566 33.3271C103.035 31.9542 108.231 31.4151 112.307 31.7639C116.395 32.1138 119.232 33.3434 120.693 35.3871C122.153 37.4306 122.217 40.2608 120.871 43.7477C119.529 47.2239 116.823 51.2477 112.948 55.5634C105.202 64.1898 92.8734 73.8887 77.791 82.5965C62.7085 91.3044 47.7683 97.3494 35.8192 100.094C29.8412 101.467 24.6453 102.005 20.5701 101.656C16.4821 101.306 13.6445 100.078 12.1839 98.0345C10.7234 95.9908 10.66 93.1598 12.0058 89.6726C13.3475 86.1964 16.0531 82.1729 19.928 77.8574C27.6734 69.231 40.003 59.5329 55.0855 50.8251Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
// //         <circle cx="69.5" cy="63.5" r="4.95" stroke="var(--color-accent)" strokeWidth="1.1"/>
// //     </svg>
// // );


// // const StagesSection = () => {
// //     const sectionRef = useRef(null);
// //     const cardsRef = useRef([]);

// //     const stages = [
// //       { id: 'acceleration', icon: <AccelerationIcon />, title: 'Acceleration', content: `Funding is just the beginning. We offer mentorship, networks, and market access so founders build smarter and scale faster, turning bold concepts into reality.`},
// //       { id: 'innovation', icon: <InnovationIcon />, title: 'Innovation',  content: `India, despite abundant talent, still imports critical technologies. Supporting bold founders builds self-reliance, driving disruption and transformation by backing breakthrough ideas even before sectors are defined.` },
// //       { id: 'breakthrough', icon: <BreakthroughIcon />, title: 'Breakthrough', content: `Support for ventures solving real-world problems in health, education, climate, jobs, and livelihoods.
// // Strategic partnerships, funding, and expert guidance. Building technology that matters at scale.` }
// //     ];

// //     useGSAP(() => {
// //         const mm = gsap.matchMedia();

// //         mm.add("(min-width: 768px)", () => {
// //             if (cardsRef.current.length < 3) return;
// //             const [left, middle, right] = cardsRef.current;
// //             const tl = gsap.timeline({
// //                 scrollTrigger: {
// //                     trigger: sectionRef.current,
// //                     pin: true,
// //                     start: 'top top',
// //                     end: '+=2000',
// //                     scrub: 1,
// //                 }
// //             });

// //             tl.from(middle, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' })
// //               .from(left, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2')
// //               .from(right, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2');
// //         });

// //         mm.add("(max-width: 767px)", () => {
// //             if (cardsRef.current.length < 3) return;
// //             const [accelerationCard, innovationCard, breakthroughCard] = cardsRef.current;

// //             const tl = gsap.timeline({
// //                 scrollTrigger: {
// //                     trigger: sectionRef.current,
// //                     pin: true,
// //                     start: 'top top',
// //                     end: '+=800',
// //                     scrub: 1,
// //                 }
// //             });
            
// //             tl.from(innovationCard, { opacity: 0, ease: 'none' })
// //               .from(accelerationCard, { opacity: 0, ease: 'none' }, '+=0.2')
// //               .from(breakthroughCard, { opacity: 0, ease: 'none' }, '+=0.2');
// //         });

// //         return () => mm.revert();

// //     }, { scope: sectionRef });

// //     return (
// //         <section ref={sectionRef} className="stages-section bg-background min-h-screen h-auto w-full flex items-center justify-center relative overflow-hidden p-4">
// //             <style>{`
// //               .stages-section {
// //                 --section-pt: 9rem; /* 144px */
// //                 padding-top: var(--section-pt);
// //               }
// //               .stages-grid {
// //                 /* ✅ FIX: Set mobile gap first */
// //                 --grid-gap: 2rem; /* 32px for mobile */
// //                 gap: var(--grid-gap);
// //               }
// //               .stage-card {
// //                 transform-origin: bottom;
// //                 /* ✅ FIX: Default transform for mobile is none */
// //                 transform: translateY(0);
// //               }

// //               /* ✅ FIX: All desktop-specific transforms and gaps are now scoped */
// //               @media (min-width: 768px) {
// //                 .stages-grid {
// //                   --card-offset-y: 6rem; /* 96px */
// //                   --grid-gap: 4rem; /* 64px for desktop */
// //                   transform: translateY(-6rem); /* Equivalent of -translate-y-24 */
// //                 }
// //                 .staggered-card {
// //                   transform: translateY(var(--card-offset-y));
// //                 }
// //                 .center-card {
// //                   transform: translateY(0);
// //                 }
// //               }

// //               @media (min-width: 768px) and (max-width: 1024px) {
// //                 .stages-grid {
// //                   --grid-gap: 2rem; /* 32px */
// //                 }
// //                 .stage-card {
// //                   width: 280px;
// //                 }
// //               }

// //               @media (min-width: 768px) and (max-height: 800px) {
// //                 .stages-section {
// //                   --section-pt: 5rem; /* 80px */
// //                 }
// //                 .stages-grid {
// //                   --card-offset-y: 4rem; /* 64px */
// //                 }
// //                 .staggered-card {
// //                   transform: translateY(var(--card-offset-y)) scale(0.85);
// //                 }
// //                 .center-card {
// //                   transform: scale(0.85);
// //                 }
// //               }
// //             `}</style>
// //             <StagesSectionBars />
            
// //             <div className="stages-grid flex flex-col md:grid md:grid-cols-3 md:items-end relative z-10">
// //                 {stages.map((stage, index) => {
// //                     let orderClass = '';
// //                     if (stage.id === 'innovation') orderClass = 'order-1';
// //                     if (stage.id === 'acceleration') orderClass = 'order-2';
// //                     if (stage.id === 'breakthrough') orderClass = 'order-3';

// //                     let transformClass = "";
// //                     if (stage.id === 'acceleration' || stage.id === 'breakthrough') transformClass = "staggered-card";
// //                     if (stage.id === 'innovation') transformClass = "center-card";

// //                     return (
// //                         <div
// //                             key={stage.id}
// //                             ref={el => cardsRef.current[index] = el}
// //                             className={`stage-card flex flex-col items-center text-center p-8 border-2 border-accent rounded-3xl bg-stages-bg w-full max-w-sm h-auto md:w-auto lg:w-[22vw] md:max-w-[380px] md:order-none ${orderClass} ${transformClass}`}
// //                         >
// //                             <div 
// //                                 className="h-1/3 w-full mb-8 flex items-center justify-center"
// //                                 style={{
// //                                   backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)',
// //                                   backgroundSize: '20px 20px',
// //                                 }}
// //                             >
// //                               {/* The SVG component is now rendered directly instead of an img tag */}
// //                               {stage.icon}
// //                             </div>
// //                             <h3 className="text-lg font-secondary font-regular text-text-main uppercase mb-4">{stage.title}</h3>
// //                             <p className="text-text-main h-auto pb-2.5 w-8/9 border-b-2 border-accent text-[14px] font-secondary mb-8 flex-grow">
// //                                 {stage.content}
// //                             </p>
// //                         </div>
// //                     );
// //                 })}
// //             </div>
// //         </section>
// //     );
// // };

// // export default StagesSection;


import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StagesSectionBars from './StagesSectionBars';

// The image imports are no longer needed as we are using inline SVGs.
// import BreakthroughIcon from '../assets/Group 164.png';
// import AccelerationIcon from '../assets/AccelerationIcon.png';
// import IdeationIcon from '../assets/IdeationIcon.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- SVG Icon Components ---
// I've converted your SVGs into React components and replaced the stroke color
// with the CSS variable you requested. Attributes are now camelCased for JSX.

const AccelerationIcon = () => (
    <svg width="187" height="149" viewBox="0 0 187 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47.9257 34.2299C47.9229 31.7281 50.6293 30.1615 52.7973 31.41L122.593 71.6018C124.761 72.8503 124.764 75.9774 122.599 77.2309L52.8937 117.58C50.7964 118.793 48.1877 117.367 48.0238 115.003L48.0157 114.77L47.9257 34.2299Z" stroke="var(--color-accent)" strokeWidth="1.5"/>
        <path d="M85.9257 34.2299C85.9229 31.7281 88.6293 30.1615 90.7973 31.41L160.593 71.6018C162.761 72.8503 162.764 75.9774 160.599 77.2309L90.8937 117.58C88.7964 118.793 86.1877 117.367 86.0238 115.003L86.0157 114.77L85.9257 34.2299Z" stroke="var(--color-accent)" strokeWidth="1.5"/>
    </svg>
);

const InnovationIcon = () => (
    <svg width="153" height="105" viewBox="0 0 153 105" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_359_5142)">
            <circle cx="52.5" cy="48.5" r="47.75" stroke="var(--color-accent)" strokeWidth="1" shapeRendering="crispEdges"/>
        </g>
        <g filter="url(#filter1_d_359_5142)">
            <circle cx="100.5" cy="48.5" r="47.75" stroke="var(--color-accent)" strokeWidth="1" shapeRendering="crispEdges"/>
        </g>
        <defs>
            <filter id="filter0_d_359_5142" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                {/* <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/> */}
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_359_5142"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_359_5142" result="shape"/>
            </filter>
            <filter id="filter1_d_359_5142" x="48" y="0" width="105" height="105" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                {/* <feOffset dy="4"/> */}
                {/* <feGaussianBlur stdDeviation="2"/> */}
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_359_5142"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_359_5142" result="shape"/>
            </filter>
        </defs>
    </svg>
);

const BreakthroughIcon = () => (
    <svg width="139" height="121" viewBox="0 0 139 121" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.1748 60.0859C48.1748 43.5409 50.525 28.5868 54.3076 17.7891C56.1999 12.3875 58.4396 8.0566 60.8984 5.08789C63.3601 2.11572 65.9824 0.574366 68.6494 0.574218C71.3166 0.574218 73.9396 2.11557 76.4014 5.08789C78.8602 8.0566 81.1 12.3876 82.9922 17.7891C86.7747 28.5868 89.125 43.5409 89.125 60.0859C89.125 76.6312 86.7748 91.5861 82.9922 102.384C81.1 107.785 78.8601 112.115 76.4014 115.084C73.9396 118.056 71.3166 119.598 68.6494 119.598C65.9824 119.598 63.3601 118.056 60.8984 115.084C58.4397 112.115 56.1998 107.785 54.3076 102.384C50.525 91.5861 48.1748 76.6312 48.1748 60.0859Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
        <path d="M61.2092 80.8526C46.1266 72.1447 33.7963 62.4463 26.0509 53.8199C22.176 49.5042 19.4704 45.4808 18.1288 42.0046C16.783 38.5175 16.8472 35.6868 18.3077 33.6432C19.7682 31.5997 22.6054 30.3708 26.693 30.0208C30.7681 29.672 35.9643 30.2107 41.9422 31.5835C53.8913 34.3278 68.8322 40.3733 83.9148 49.0812C98.9973 57.7891 111.326 67.4879 119.072 76.1143C122.947 80.43 125.652 84.4533 126.994 87.9295C128.34 91.4166 128.277 94.247 126.816 96.2907C125.356 98.3343 122.518 99.5634 118.43 99.9133C114.354 100.262 109.158 99.7235 103.18 98.3506C91.2314 95.6064 76.2917 89.5605 61.2092 80.8526Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
        <path d="M55.0855 50.8251C70.1678 42.1173 85.1076 36.0714 97.0566 33.3271C103.035 31.9542 108.231 31.4151 112.307 31.7639C116.395 32.1138 119.232 33.3434 120.693 35.3871C122.153 37.4306 122.217 40.2608 120.871 43.7477C119.529 47.2239 116.823 51.2477 112.948 55.5634C105.202 64.1898 92.8734 73.8887 77.791 82.5965C62.7085 91.3044 47.7683 97.3494 35.8192 100.094C29.8412 101.467 24.6453 102.005 20.5701 101.656C16.4821 101.306 13.6445 100.078 12.1839 98.0345C10.7234 95.9908 10.66 93.1598 12.0058 89.6726C13.3475 86.1964 16.0531 82.1729 19.928 77.8574C27.6734 69.231 40.003 59.5329 55.0855 50.8251Z" stroke="var(--color-accent)" strokeWidth="1.14814"/>
        <circle cx="69.5" cy="63.5" r="4.95" stroke="var(--color-accent)" strokeWidth="1.1"/>
    </svg>
);


const StagesSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const stages = [
      { id: 'acceleration', icon: <AccelerationIcon />, title: 'Acceleration', content: `Funding is just the beginning. We offer mentorship, networks, and market access so founders build smarter and scale faster, turning bold concepts into reality.`},
      { id: 'innovation', icon: <InnovationIcon />, title: 'Innovation',  content: `India, despite abundant talent, still imports critical technologies. Supporting bold founders builds self-reliance, driving disruption and transformation by backing breakthrough ideas even before sectors are defined.` },
      { id: 'breakthrough', icon: <BreakthroughIcon />, title: 'Breakthrough', content: `Support for ventures solving real-world problems in health, education, climate, jobs, and livelihoods.
Strategic partnerships, funding, and expert guidance. Building technology that matters at scale.` }
    ];

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
 
          gsap.set(sectionRef.current,{width:'100%'})


            if (cardsRef.current.length < 3) return;
            const [left, middle, right] = cardsRef.current;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    start: 'top top',
                    end: '+=2000',
                    scrub: 1,
                 
                }
            });

            tl.from(middle, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' })
              .from(left, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2')
              .from(right, { opacity: 0, y: '100%', duration: 1, ease: 'power2.out' }, '+=0.2');
        });

        mm.add("(max-width: 767px)", () => {
            if (cardsRef.current.length < 3) return;
            const [accelerationCard, innovationCard, breakthroughCard] = cardsRef.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    start: 'top top',
                    end: '+=800',
                    scrub: 1,
                }
            });
            
            tl.from(innovationCard, { opacity: 0, ease: 'none' })
              .from(accelerationCard, { opacity: 0, ease: 'none' }, '+=0.2')
              .from(breakthroughCard, { opacity: 0, ease: 'none' }, '+=0.2');
        });

        return () => mm.revert();

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="stages-section bg-background min-h-screen h-auto min-w-screen  flex items-center justify-center relative overflow-hidden" style={{width:'100%'}}>
            <style>{`
              .stages-section {
                --section-pt: 9rem; /* 144px */
                padding-top: var(--section-pt);
              }
              .stages-grid {
                /* ✅ FIX: Set mobile gap first */
                --grid-gap: 2rem; /* 32px for mobile */
                gap: var(--grid-gap);
              }
              .stage-card {
                transform-origin: bottom;
                /* ✅ FIX: Default transform for mobile is none */
                transform: translateY(0);
              }

              /* ✅ FIX: All desktop-specific transforms and gaps are now scoped */
              @media (min-width: 768px) {
                .stages-grid {
                  --card-offset-y: 6rem; /* 96px */
                  --grid-gap: 4rem; /* 64px for desktop */
                  transform: translateY(-6rem); /* Equivalent of -translate-y-24 */
                }
                .staggered-card {
                  transform: translateY(var(--card-offset-y));
                }
                .center-card {
                  transform: translateY(0);
                }
              }

              @media (min-width: 768px) and (max-width: 1024px) {
                .stages-grid {
                  --grid-gap: 2rem; /* 32px */
                }
                .stage-card {
                  width: 280px;
                }
              }

              @media (min-width: 768px) and (max-height: 800px) {
                .stages-section {
                  --section-pt: 5rem; /* 80px */
                }
                .stages-grid {
                  --card-offset-y: 4rem; /* 64px */
                }
                .staggered-card {
                  transform: translateY(var(--card-offset-y)) scale(0.85);
                }
                .center-card {
                  transform: scale(0.85);
                }
              }
            `}</style>
            <StagesSectionBars />
            
            <div className="stages-grid flex flex-col md:grid md:grid-cols-3 md:items-end relative z-10">
                {stages.map((stage, index) => {
                    let orderClass = '';
                    if (stage.id === 'innovation') orderClass = 'order-1';
                    if (stage.id === 'acceleration') orderClass = 'order-2';
                    if (stage.id === 'breakthrough') orderClass = 'order-3';

                    let transformClass = "";
                    if (stage.id === 'acceleration' || stage.id === 'breakthrough') transformClass = "staggered-card";
                    if (stage.id === 'innovation') transformClass = "center-card";

                    return (
                        <div
                            key={stage.id}
                            ref={el => cardsRef.current[index] = el}
                            className={`stage-card flex flex-col items-center text-center p-8 border-2 border-accent rounded-3xl bg-stages-bg w-full max-w-sm h-auto md:w-auto lg:w-[22vw] md:max-w-[380px] md:order-none ${orderClass} ${transformClass}`}
                        >
                            <div 
                                className="h-1/3 w-full mb-8 flex items-center justify-center"
                                style={{
                                  backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 0)',
                                  backgroundSize: '20px 20px',
                                }}
                            >
                              {/* The SVG component is now rendered directly instead of an img tag */}
                              {stage.icon}
                            </div>
                            <h3 className="text-lg font-secondary font-regular text-text-main uppercase mb-4">{stage.title}</h3>
                            <p className="text-text-main h-auto pb-2.5 w-8/9 border-b-2 border-accent text-[14px] font-secondary mb-8 flex-grow">
                                {stage.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StagesSection;