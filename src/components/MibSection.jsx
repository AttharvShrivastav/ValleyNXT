// import React, { useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, MotionPathPlugin, DrawSVGPlugin, useGSAP);

// const ventureData = {
//   content: [
//     { id: 'mentorship', title: 'Mentorship', subtitle: 'Unlock Founder Speed and Precision.', description: 'Our curated network of 150+ CXOs, industry veterans, and domain experts work closely with founders, providing tailored guidance every step of the way. From strategic problem-solving and product-market fit advice to leadership coaching and technical workshops, mentorship is designed to accelerate decision-making and avoid common pitfalls. With deep sector expertise and a founder-first approach, our mentors turn bold ideas into executable, scalable plans.'},
//     { id: 'investment', title: 'Investment', subtitle: 'Fuel Bold Visions with Smart Capital.', description: 'We deploy capital thoughtfully, matching the right funding to each startup\'s stage—from pre-seed validation to Series A+ growth. With structured investment tranches and active performance-based follow-on funding of up to ₹10 Cr, we ensure startups have the runway and resources they need to execute rapidly and attract further market interest. Our investment rigor focuses on ventures with strong tech moats, scalable models, and clear exit potential, aiming for high-impact returns and sustainable growth.'},
//     { id: 'connects', title: 'Business Connects', subtitle: 'Accelerate Market Access and Scale.', description: 'Building connections that matter—our Business Connect platform links startups to paying customers, strategic partners, co-builders, and ecosystem gatekeepers. Regular Demo Days spotlight innovation and open doors to new opportunities, while curated introductions to corporates, government bodies, and global networks fast-track market entry. Through syndication with leading investors and collaborative deal-making, startups gain an unmatched advantage in scaling faster and with confidence.'},
//   ],
//   svg: {
//     paths: { mentorship: ["M 50,1 A 49,49 0 1,1 49.9,1 Z", "M 50,13 A 37,37 0 1,1 49.9,13 Z", "M 50,25 A 25,25 0 1,1 49.9,25 Z", "M 50,37 A 13,13 0 1,1 49.9,37 Z"], investment: ["M50,0 L85,50 L50,100 L15,50 Z", "M50,10 L78,50 L50,90 L22,50 Z", "M50,20 L71,50 L50,80 L29,50 Z", "M50,30 L64,50 L50,70 L36,50 Z"], connects: ["M50,0 L90,25 L90,75 L50,100 L10,75 L10,25 Z", "M50,10 L82,30 L82,70 L50,90 L18,70 L18,30 Z", "M50,20 L74,35 L74,65 L50,80 L26,65 L26,35 Z", "M50,30 L66,40 L66,60 L50,70 L34,60 L34,40 Z"] },
//     dots: { mentorship: [{ cx: 84.6, cy: 15.4 }, { cx: 23.9, cy: 23.9 }, { cx: 32.3, cy: 67.7 }, { cx: 59.2, cy: 59.2 }], investment: [{ cx: 37, cy: 20 }, { cx: 22, cy: 50 }, { cx: 50, cy: 80 }, { cx: 64, cy: 50 }], connects: [{ cx: 10, cy: 25 }, { cx: 82, cy: 30 }, { cx: 74, cy: 65 }, { cx: 34, cy: 60 }] },
//   },
// };

// const VentureServices = () => {
//   const mainRef = useRef(null);
//   const pinRef = useRef(null);

//   useGSAP(() => {
//     if (!mainRef.current) return;
//     const mm = gsap.matchMedia();

//     // DESKTOP ANIMATION
//     mm.add("(min-width: 768px)", () => {
//       if (!pinRef.current) return;
//       const mainTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: mainRef.current,
//           pin: pinRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       });
//       mainTimeline
//         .to('#mentorship-content', { opacity: 0 }, "first_fadeout")
//         .to('#investment-content', { opacity: 1 }, "first_fadein")
//         .to('.morph-path', { morphSVG: (i) => ventureData.svg.paths.investment[i], ease: 'power1.inOut' }, "first_fadeout")
//         .to('.morph-dot', { attr: (i) => ({...ventureData.svg.dots.investment[i]}), ease: 'power1.inOut' }, "first_fadeout")
//         .to('#investment-content', { opacity: 0 }, "second_fadeout")
//         .to('#connects-content', { opacity: 1 }, "second_fadein")
//         .to('.morph-path', { morphSVG: (i) => ventureData.svg.paths.connects[i], ease: 'power1.inOut' }, "second_fadeout")
//         .to('.morph-dot', { attr: (i) => ({...ventureData.svg.dots.connects[i]}), ease: 'power1.inOut' }, "second_fadeout");
//       const wrapper = pinRef.current.querySelector('.content-wrapper');
//       if (!wrapper) return;
//       const glowSvg = wrapper.querySelector('.glow-svg');
//       const motionPath = wrapper.querySelector('.motion-path');
//       if (glowSvg && motionPath) {
//         const radius = 32, inset = 0.5, w = wrapper.offsetWidth, h = wrapper.offsetHeight;
//         glowSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
//         const pathRadius = radius - inset;
//         const pathData = `M ${radius},${inset} H ${w - radius} a ${pathRadius},${pathRadius} 0 0 1 ${pathRadius},${pathRadius} V ${h - radius} a ${pathRadius},${pathRadius} 0 0 1 -${pathRadius},${pathRadius} H ${radius} a ${pathRadius},${pathRadius} 0 0 1 -${pathRadius},-${pathRadius} V ${radius} a ${pathRadius},${pathRadius} 0 0 1 ${pathRadius},-${pathRadius} Z`;
//         motionPath.setAttribute('d', pathData);
//         gsap.to(".trace-line", {
//           motionPath: { path: ".motion-path", align: ".motion-path", alignOrigin: [0.5, 0.5], autoRotate: true },
//           ease: 'none',
//           scrollTrigger: {
//             trigger: mainRef.current,
//             start: 'top top',
//             end: 'bottom bottom',
//             scrub: 1,
//           },
//         });
//       }
//     });

//     // MOBILE ANIMATION (Pinning & Morphing)
//     mm.add("(max-width: 767px)", () => {
//         if (!pinRef.current) return;
//         const mobileTimeline = gsap.timeline({
//             scrollTrigger: {
//                 trigger: mainRef.current,
//                 pin: pinRef.current,
//                 start: 'top top',
//                 end: 'bottom bottom',
//                 scrub: 1,
//             },
//         });
//         mobileTimeline
//             .to('#mentorship-content-mobile', { opacity: 0 }, "first_fadeout")
//             .to('#investment-content-mobile', { opacity: 1 }, "first_fadein")
//             .to('.morph-path-mobile', { morphSVG: (i) => ventureData.svg.paths.investment[i], ease: 'power1.inOut' }, "first_fadeout")
//             .to('.morph-dot-mobile', { attr: (i) => ({...ventureData.svg.dots.investment[i]}), ease: 'power1.inOut' }, "first_fadeout")
//             .to('#investment-content-mobile', { opacity: 0 }, "second_fadeout")
//             .to('#connects-content-mobile', { opacity: 1 }, "second_fadein")
//             .to('.morph-path-mobile', { morphSVG: (i) => ventureData.svg.paths.connects[i], ease: 'power1.inOut' }, "second_fadeout")
//             .to('.morph-dot-mobile', { attr: (i) => ({...ventureData.svg.dots.connects[i]}), ease: 'power1.inOut' }, "second_fadeout");
//     });

//     return () => mm.revert();
//   }, { scope: mainRef });

//   return (
//     <div ref={mainRef} className="h-[300vh] bg-black text-[#FFC7A8]">
//       <div ref={pinRef} className="h-screen w-screen flex flex-col">
//         <div className="w-full text-center py-12 relative flex flex-col items-center justify-center">
//             <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[1100px] hidden md:block px-4">
//                 <svg width="100%" height="160" viewBox="0 0 1162 199" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
//                   <path d="M330.367 3.11328C330.367 1.85369 329.346 0.832583 328.086 0.832583C326.827 0.832583 325.806 1.85369 325.806 3.11328C325.806 4.37288 326.827 5.39398 328.086 5.39398C329.346 5.39398 330.367 4.37288 330.367 3.11328ZM328.086 3.11328L328.086 2.68565L1.00003 2.68567L1.00003 3.11331L1.00003 3.54094L328.086 3.54091L328.086 3.11328Z" fill="#F47A36"/>
//                   <path d="M719.281 149C719.281 147.74 718.26 146.719 717 146.719C715.74 146.719 714.719 147.74 714.719 149C714.719 150.26 715.74 151.281 717 151.281C718.26 151.281 719.281 150.26 719.281 149ZM1162 149L1162 148.572L717 148.572L717 149L717 149.428L1162 149.428L1162 149Z" fill="#F47A36"/>
//                   <line x1="1162" y1="197.779" x2="1" y2="197.779" stroke="#F47A36" strokeWidth="0.855262"/>
//                   <line y1="-0.427631" x2="194.819" y2="-0.427631" transform="matrix(0.00536359 -0.999986 0.999984 0.00573948 1 197.488)" stroke="#F47A36" strokeWidth="0.855262"/>
//                   <line x1="1161.57" y1="198" x2="1161.57" y2="149" stroke="#F47A36" strokeWidth="0.855262"/>
//                 </svg>
//             </div>
//             <div className="relative z-10 max-w-[900px] w-full flex justify-center items-center p-4">
//                 <h1 className='text-2xl sm:text-3xl md:text-4xl font-primary leading-tight'>
//                   THREE PILLARS,<br />
//                   ONE BRIDGE TO <br />
//                   <span 
//                     style={{ fontFamily: 'Georgia, serif', marginTop: '-0.5em', display: 'inline-block' }} 
//                     className='text-[#F47A36] text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight'
//                   >
//                     success
//                   </span>
//                 </h1>
//             </div>
//         </div>
//         <div className="flex md:hidden flex-grow flex-col items-center justify-center w-full px-4 pb-8 overflow-hidden">
//             <div className="relative w-full h-full flex flex-col justify-center items-center gap-6 border border-[#F47A36] rounded-[2rem] p-6">
//                 <div className="relative w-full flex-1 flex items-center justify-center">
//                     {ventureData.content.map((item, index) => (
//                         <div key={item.id} id={`${item.id}-content-mobile`} className={`absolute w-full h-full flex flex-col gap-4 items-center justify-center text-center ${index === 0 ? 'opacity-100' : 'opacity-0'}`}>
//                             <div className="flex flex-col items-center">
//                                 <h1 className="text-2xl font-primary leading-none">{item.title}</h1>
//                                 <h2 className="text-sm font-secondary text-[#F47A36]">{item.subtitle}</h2>
//                             </div>
//                             <p className="text-sm font-secondary leading-tight">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="w-full max-w-[240px] aspect-square rounded-2xl flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
//                     <svg width="220" height="220" viewBox="0 0 100 100">
//                         {ventureData.svg.paths.mentorship.map((path, i) => (
//                             <path key={`path-${i}`} className="morph-path-mobile fill-none stroke-[#F47A36]" d={path} strokeWidth="0.5" />
//                         ))}
//                         {ventureData.svg.dots.mentorship.map((dot, i) => (
//                             <circle key={`dot-${i}`} className="morph-dot-mobile fill-[#F47A36]" r="2.5" cx={dot.cx} cy={dot.cy} />
//                         ))}
//                     </svg>
//                 </div>
//             </div>
//         </div>
//         <div className="hidden md:flex flex-grow items-center justify-center w-full px-4 pb-8 overflow-hidden">
//           <div 
//             className="content-wrapper relative grid grid-cols-10 max-w-[1100px] w-full h-full max-h-[670px] border border-[#F47A36] rounded-[2rem] bg-black overflow-hidden"
//           >
//             <div className="col-span-6 relative flex items-center justify-center p-12 border-r border-[#F47A36]">
//               {ventureData.content.map((item, index) => (
//                 <div key={item.id} id={`${item.id}-content`} className={`absolute w-full h-full flex flex-col gap-8 items-center justify-center p-12 text-center ${index === 0 ? 'opacity-100' : 'opacity-0'}`}>
//                   <div className="flex flex-col items-center gap-0">
//                     <h1 className="text-2xl font-primary font-normal leading-none">{item.title}</h1>
//                     <h2 className="text-sm font-secondary font-normal text-[#F47A36]">{item.subtitle}</h2>
//                   </div>
//                   <p className="text-sm font-secondary leading-relaxed">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="col-span-4 flex flex-col justify-center items-center gap-6 p-4">
//               <div className="w-[320px] h-[320px] rounded-2xl flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
//                 <svg width="300" height="300" viewBox="0 0 100 100">
//                   {ventureData.svg.paths.mentorship.map((path, i) => (
//                     <path key={`path-${i}`} className="morph-path fill-none stroke-[#F47A36]" d={path} strokeWidth="0.5" />
//                   ))}
//                   {ventureData.svg.dots.mentorship.map((dot, i) => (
//                     <circle key={`dot-${i}`} className="morph-dot fill-[#F47A36]" r="2.5" cx={dot.cx} cy={dot.cy} />
//                   ))}
//                 </svg>
//               </div>
//             </div>
//             <svg className="glow-svg absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
//               <path className="motion-path" fill="none" stroke="none" />
//               <line className="trace-line" x1="-15" y1="0" x2="15" y2="0" stroke="#FFC7A8" strokeWidth="2" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default VentureServices;
// import React, { useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, MotionPathPlugin, DrawSVGPlugin, useGSAP);

// const ventureData = {
//   content: [
//     { id: 'mentorship', title: 'Mentorship', subtitle: 'Unlock Founder Speed and Precision.', description: 'Our curated network of 150+ CXOs, industry veterans, and domain experts work closely with founders, providing tailored guidance every step of the way. From strategic problem-solving and product-market fit advice to leadership coaching and technical workshops, mentorship is designed to accelerate decision-making and avoid common pitfalls. With deep sector expertise and a founder-first approach, our mentors turn bold ideas into executable, scalable plans.'},
//     { id: 'investment', title: 'Investment', subtitle: 'Fuel Bold Visions with Smart Capital.', description: 'We deploy capital thoughtfully, matching the right funding to each startup\'s stage—from pre-seed validation to Series A+ growth. With structured investment tranches and active performance-based follow-on funding of up to ₹10 Cr, we ensure startups have the runway and resources they need to execute rapidly and attract further market interest. Our investment rigor focuses on ventures with strong tech moats, scalable models, and clear exit potential, aiming for high-impact returns and sustainable growth.'},
//     { id: 'connects', title: 'Business Connects', subtitle: 'Accelerate Market Access and Scale.', description: 'Building connections that matter—our Business Connect platform links startups to paying customers, strategic partners, co-builders, and ecosystem gatekeepers. Regular Demo Days spotlight innovation and open doors to new opportunities, while curated introductions to corporates, government bodies, and global networks fast-track market entry. Through syndication with leading investors and collaborative deal-making, startups gain an unmatched advantage in scaling faster and with confidence.'},
//   ],
//   svg: {
//     paths: { mentorship: ["M 50,1 A 49,49 0 1,1 49.9,1 Z", "M 50,13 A 37,37 0 1,1 49.9,13 Z", "M 50,25 A 25,25 0 1,1 49.9,25 Z", "M 50,37 A 13,13 0 1,1 49.9,37 Z"], investment: ["M50,0 L85,50 L50,100 L15,50 Z", "M50,10 L78,50 L50,90 L22,50 Z", "M50,20 L71,50 L50,80 L29,50 Z", "M50,30 L64,50 L50,70 L36,50 Z"], connects: ["M50,0 L90,25 L90,75 L50,100 L10,75 L10,25 Z", "M50,10 L82,30 L82,70 L50,90 L18,70 L18,30 Z", "M50,20 L74,35 L74,65 L50,80 L26,65 L26,35 Z", "M50,30 L66,40 L66,60 L50,70 L34,60 L34,40 Z"] },
//     dots: { mentorship: [{ cx: 84.6, cy: 15.4 }, { cx: 23.9, cy: 23.9 }, { cx: 32.3, cy: 67.7 }, { cx: 59.2, cy: 59.2 }], investment: [{ cx: 37, cy: 20 }, { cx: 22, cy: 50 }, { cx: 50, cy: 80 }, { cx: 64, cy: 50 }], connects: [{ cx: 10, cy: 25 }, { cx: 82, cy: 30 }, { cx: 74, cy: 65 }, { cx: 34, cy: 60 }] },
//   },
// };

// const VentureServices = () => {
//   const mainRef = useRef(null);
//   const pinRef = useRef(null);

//   useGSAP(() => {
//     if (!mainRef.current) return;
//     const mm = gsap.matchMedia();

//     // DESKTOP ANIMATION
//     mm.add("(min-width: 768px)", () => {
//       if (!pinRef.current) return;
//       const mainTimeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: mainRef.current,
//           pin: pinRef.current,
//           start: 'top top',
//           end: 'bottom bottom',
//           scrub: 1,
//         },
//       });
//       mainTimeline
//         .to('#mentorship-content', { opacity: 0 }, "first_fadeout")
//         .to('#investment-content', { opacity: 1 }, "first_fadein")
//         .to('.morph-path', { morphSVG: (i) => ventureData.svg.paths.investment[i], ease: 'power1.inOut' }, "first_fadeout")
//         .to('.morph-dot', { attr: (i) => ({...ventureData.svg.dots.investment[i]}), ease: 'power1.inOut' }, "first_fadeout")
//         .to('#investment-content', { opacity: 0 }, "second_fadeout")
//         .to('#connects-content', { opacity: 1 }, "second_fadein")
//         .to('.morph-path', { morphSVG: (i) => ventureData.svg.paths.connects[i], ease: 'power1.inOut' }, "second_fadeout")
//         .to('.morph-dot', { attr: (i) => ({...ventureData.svg.dots.connects[i]}), ease: 'power1.inOut' }, "second_fadeout");
      
//       const wrapper = pinRef.current.querySelector('.content-wrapper');
//       if (!wrapper) return;
//       const glowSvg = wrapper.querySelector('.glow-svg');
//       const motionPath = wrapper.querySelector('.motion-path');
//       if (glowSvg && motionPath) {
//         const radius = 32, inset = 0.5, w = wrapper.offsetWidth, h = wrapper.offsetHeight;
//         glowSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
//         const pathRadius = radius - inset;
//         const pathData = `M ${radius},${inset} H ${w - radius} a ${pathRadius},${pathRadius} 0 0 1 ${pathRadius},${pathRadius} V ${h - radius} a ${pathRadius},${pathRadius} 0 0 1 -${pathRadius},${pathRadius} H ${radius} a ${pathRadius},${pathRadius} 0 0 1 -${pathRadius},-${pathRadius} V ${radius} a ${pathRadius},${pathRadius} 0 0 1 ${pathRadius},-${pathRadius} Z`;
//         motionPath.setAttribute('d', pathData);
//         gsap.to(".trace-line", {
//           motionPath: { path: ".motion-path", align: ".motion-path", alignOrigin: [0.5, 0.5], autoRotate: true },
//           ease: 'none',
//           scrollTrigger: {
//             trigger: mainRef.current,
//             start: 'top top',
//             end: 'bottom bottom',
//             scrub: 1,
//           },
//         });
//       }
//     });

//     // MOBILE ANIMATION
//     mm.add("(max-width: 767px)", () => {
//       const mobileSections = gsap.utils.toArray('.mobile-service-section');
//       mobileSections.forEach(section => {
//         gsap.from(section, {
//           opacity: 0,
//           y: 50,
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 85%',
//           }
//         });
//       });
//     });

//     return () => mm.revert();
//   }, { scope: mainRef });

//   return (
//     <div ref={mainRef} className="md:h-[300vh] bg-black text-[#FFC7A8]">
//       <div ref={pinRef} className="md:h-screen w-screen flex flex-col">
//         <div className="w-full text-center py-12 relative flex flex-col items-center justify-center">
//           {/* ✅ CHANGE: Centered the SVG container to make its position robust on zoom */}
//           <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1162px] hidden md:block">
//             <svg width="1162" height="199" viewBox="0 0 1162 199" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M330.367 3.11328C330.367 1.85369 329.346 0.832583 328.086 0.832583C326.827 0.832583 325.806 1.85369 325.806 3.11328C325.806 4.37288 326.827 5.39398 328.086 5.39398C329.346 5.39398 330.367 4.37288 330.367 3.11328ZM328.086 3.11328L328.086 2.68565L1.00003 2.68567L1.00003 3.11331L1.00003 3.54094L328.086 3.54091L328.086 3.11328Z" fill="#F47A36"/>
//               <path d="M719.281 149C719.281 147.74 718.26 146.719 717 146.719C715.74 146.719 714.719 147.74 714.719 149C714.719 150.26 715.74 151.281 717 151.281C718.26 151.281 719.281 150.26 719.281 149ZM1162 149L1162 148.572L717 148.572L717 149L717 149.428L1162 149.428L1162 149Z" fill="#F47A36"/>
//               <line x1="1162" y1="197.779" x2="1" y2="197.779" stroke="#F47A36" strokeWidth="0.855262"/>
//               <line y1="-0.427631" x2="194.819" y2="-0.427631" transform="matrix(0.00536359 -0.999986 0.999984 0.00573948 1 197.488)" stroke="#F47A36" strokeWidth="0.855262"/>
//               <line x1="1161.57" y1="198" x2="1161.57" y2="149" stroke="#F47A36" strokeWidth="0.855262"/>
//             </svg>
//           </div>
//           <div className="relative z-10 max-w-[900px] w-full flex justify-center items-center p-4">
//             <h1 className='text-3xl sm:text-4xl md:text-5xl font-primary leading-tight'>
//               THREE PILLARS,<br />
//               ONE BRIDGE TO <br />
//               <span 
//                 style={{ fontFamily: 'Georgia, serif', marginTop: '-0.5em', display: 'inline-block' }} 
//                 className='text-[#F47A36] text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight'
//               >
//                 success
//               </span>
//             </h1>
//           </div>
//         </div>
//         <div className="hidden md:flex flex-grow items-center justify-center w-full px-4 pb-8 overflow-hidden">
//           <div 
//             className="content-wrapper relative grid grid-cols-10 max-w-[1100px] w-full h-full max-h-[670px] border border-[#F47A36] rounded-[2rem] bg-black overflow-hidden"
//           >
//             <div className="col-span-6 relative flex items-center justify-center p-12 border-r border-[#F47A36]">
//               {ventureData.content.map((item, index) => (
//                 <div key={item.id} id={`${item.id}-content`} className={`absolute w-full h-full flex flex-col gap-12 items-center justify-center p-12 text-center ${index === 0 ? 'opacity-100' : 'opacity-0'}`}>
//                   <div className="flex flex-col items-center gap-0">
//                     <h1 className="text-3xl font-primary font-normal leading-none">{item.title}</h1>
//                     <h2 className="text-base font-secondary font-normal text-[#F47A36]">{item.subtitle}</h2>
//                   </div>
//                   <p className="text-base font-secondary leading-snug">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//             <div className="col-span-4 flex flex-col justify-center items-center gap-6 p-4">
//               <div className="w-[400px] h-[400px] rounded-2xl flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
//                 <svg width="360" height="360" viewBox="0 0 100 100">
//                   {ventureData.svg.paths.mentorship.map((path, i) => (
//                     <path key={`path-${i}`} className="morph-path fill-none stroke-[#F47A36]" d={path} strokeWidth="0.5" />
//                   ))}
//                   {ventureData.svg.dots.mentorship.map((dot, i) => (
//                     <circle key={`dot-${i}`} className="morph-dot fill-[#F47A36]" r="2.5" cx={dot.cx} cy={dot.cy} />
//                   ))}
//                 </svg>
//               </div>
//             </div>
//             <svg className="glow-svg absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
//               <path className="motion-path" fill="none" stroke="none" />
//               <line className="trace-line" x1="-15" y1="0" x2="15" y2="0" stroke="#FFC7A8" strokeWidth="2" />
//             </svg>
//           </div>
//         </div>
//         <div className="flex md:hidden flex-col gap-12 p-4">
//           {ventureData.content.map((item) => (
//             <div key={item.id} className="mobile-service-section flex flex-col items-center text-center gap-6 border border-[#F47A36] rounded-[2rem] p-6">
//               <div className="flex flex-col items-center gap-0">
//                 <h1 className="text-2xl font-primary font-normal leading-none">{item.title}</h1>
//                 <h2 className="text-sm font-secondary font-normal text-[#F47a36]">{item.subtitle}</h2>
//               </div>
//               <p className="text-sm font-secondary leading-tight">{item.description}</p>
//               <div className="w-full max-w-[300px] aspect-square rounded-2xl flex items-center justify-center mt-4" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
//                 <svg width="280" height="280" viewBox="0 0 100 100">
//                   {ventureData.svg.paths[item.id].map((path, i) => (
//                     <path key={`path-${i}`} className="fill-none stroke-[#F47A36]" d={path} strokeWidth="0.5" />
//                   ))}
//                   {ventureData.svg.dots[item.id].map((dot, i) => (
//                     <circle key={`dot-${i}`} className="fill-[#F47A36]" r="2.5" cx={dot.cx} cy={dot.cy} />
//                   ))}
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VentureServices;

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, MotionPathPlugin, DrawSVGPlugin, useGSAP);

const ventureData = {
  content: [
    { id: 'mentorship', title: 'Mentorship', subtitle: 'Unlock Founder Speed and Precision.', description: 'Our curated network of 150+ CXOs, industry veterans, and domain experts work closely with founders, providing tailored guidance every step of the way. From strategic problem-solving and product-market fit advice to leadership coaching and technical workshops, mentorship is designed to accelerate decision-making and avoid common pitfalls. With deep sector expertise and a founder-first approach, our mentors turn bold ideas into executable, scalable plans.'},
    { id: 'investment', title: 'Investment', subtitle: 'Fuel Bold Visions with Smart Capital.', description: 'We deploy capital thoughtfully, matching the right funding to each startup\'s stage—from pre-seed validation to Series A+ growth. With structured investment tranches and active performance-based follow-on funding of up to ₹10 Cr, we ensure startups have the runway and resources they need to execute rapidly and attract further market interest. Our investment rigor focuses on ventures with strong tech moats, scalable models, and clear exit potential, aiming for high-impact returns and sustainable growth.'},
    { id: 'connects', title: 'Business Connects', subtitle: 'Accelerate Market Access and Scale.', description: 'Building connections that matter—our Business Connect platform links startups to paying customers, strategic partners, co-builders, and ecosystem gatekeepers. Regular Demo Days spotlight innovation and open doors to new opportunities, while curated introductions to corporates, government bodies, and global networks fast-track market entry. Through syndication with leading investors and collaborative deal-making, startups gain an unmatched advantage in scaling faster and with confidence.'},
  ],
  svg: {
    paths: { mentorship: ["M 50,1 A 49,49 0 1,1 49.9,1 Z", "M 50,13 A 37,37 0 1,1 49.9,13 Z", "M 50,25 A 25,25 0 1,1 49.9,25 Z", "M 50,37 A 13,13 0 1,1 49.9,37 Z"], investment: ["M50,0 L85,50 L50,100 L15,50 Z", "M50,10 L78,50 L50,90 L22,50 Z", "M50,20 L71,50 L50,80 L29,50 Z", "M50,30 L64,50 L50,70 L36,50 Z"], connects: ["M50,0 L90,25 L90,75 L50,100 L10,75 L10,25 Z", "M50,10 L82,30 L82,70 L50,90 L18,70 L18,30 Z", "M50,20 L74,35 L74,65 L50,80 L26,65 L26,35 Z", "M50,30 L66,40 L66,60 L50,70 L34,60 L34,40 Z"] },
    dots: { mentorship: [{ cx: 84.6, cy: 15.4 }, { cx: 23.9, cy: 23.9 }, { cx: 32.3, cy: 67.7 }, { cx: 59.2, cy: 59.2 }], investment: [{ cx: 37, cy: 20 }, { cx: 22, cy: 50 }, { cx: 50, cy: 80 }, { cx: 64, cy: 50 }], connects: [{ cx: 10, cy: 25 }, { cx: 82, cy: 30 }, { cx: 74, cy: 65 }, { cx: 34, cy: 60 }] },
  },
};

const VentureServices = () => {
  const mainRef = useRef(null);
  const pinRef = useRef(null);

  useGSAP(() => {
    if (!mainRef.current) return;
    const mm = gsap.matchMedia();

    // DESKTOP ANIMATION
    mm.add("(min-width: 768px)", () => {
      if (!pinRef.current) return;
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          pin: pinRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });
      mainTimeline
        .to('#mentorship-content', { opacity: 0 }, "first_fadeout")
        .to('#investment-content', { opacity: 1 }, "first_fadein")
        .to('.morph-path', { morphSVG: (i) => ventureData.svg.paths.investment[i], ease: 'power1.inOut' }, "first_fadeout")
        .to('.morph-dot', { attr: (i) => ({...ventureData.svg.dots.investment[i]}), ease: 'power1.inOut' }, "first_fadeout")
        .to('#investment-content', { opacity: 0 }, "second_fadeout")
        .to('#connects-content', { opacity: 1 }, "second_fadein")
        .to('.morph-path', { morphSVG: (i) => ventureData.svg.paths.connects[i], ease: 'power1.inOut' }, "second_fadeout")
        .to('.morph-dot', { attr: (i) => ({...ventureData.svg.dots.connects[i]}), ease: 'power1.inOut' }, "second_fadeout");
      
      const wrapper = pinRef.current.querySelector('.content-wrapper');
      if (!wrapper) return;
      const glowSvg = wrapper.querySelector('.glow-svg');
      const motionPath = wrapper.querySelector('.motion-path');
      if (glowSvg && motionPath) {
        const radius = 32, inset = 0.5, w = wrapper.offsetWidth, h = wrapper.offsetHeight;
        glowSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        const pathRadius = radius - inset;
        const pathData = `M ${radius},${inset} H ${w - radius} a ${pathRadius},${pathRadius} 0 0 1 ${pathRadius},${pathRadius} V ${h - radius} a ${pathRadius},${pathRadius} 0 0 1 -${pathRadius},${pathRadius} H ${radius} a ${pathRadius},${pathRadius} 0 0 1 -${pathRadius},-${pathRadius} V ${radius} a ${pathRadius},${pathRadius} 0 0 1 ${pathRadius},-${pathRadius} Z`;
        motionPath.setAttribute('d', pathData);
        gsap.to(".trace-line", {
          motionPath: { path: ".motion-path", align: ".motion-path", alignOrigin: [0.5, 0.5], autoRotate: true },
          ease: 'none',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        });
      }
    });

    // MOBILE ANIMATION
    mm.add("(max-width: 767px)", () => {
      const mobileSections = gsap.utils.toArray('.mobile-service-section');
      mobileSections.forEach(section => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: mainRef });

  return (
    <div ref={mainRef} className="md:h-[300vh] bg-black text-[#FFC7A8]">
      <div ref={pinRef} className="md:h-screen w-screen flex flex-col">
        <div className="w-full text-center py-12 relative flex flex-col items-center justify-center">
          {/* ✅ CHANGE: Pulled SVG up and reduced its container width for alignment */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[1100px] hidden md:block px-4">
            {/* ✅ CHANGE: Reduced SVG height to create more space */}
            <svg width="100%" height="160" viewBox="0 0 1162 199" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <path d="M330.367 3.11328C330.367 1.85369 329.346 0.832583 328.086 0.832583C326.827 0.832583 325.806 1.85369 325.806 3.11328C325.806 4.37288 326.827 5.39398 328.086 5.39398C329.346 5.39398 330.367 4.37288 330.367 3.11328ZM328.086 3.11328L328.086 2.68565L1.00003 2.68567L1.00003 3.11331L1.00003 3.54094L328.086 3.54091L328.086 3.11328Z" fill="#F47A36"/>
              <path d="M719.281 149C719.281 147.74 718.26 146.719 717 146.719C715.74 146.719 714.719 147.74 714.719 149C714.719 150.26 715.74 151.281 717 151.281C718.26 151.281 719.281 150.26 719.281 149ZM1162 149L1162 148.572L717 148.572L717 149L717 149.428L1162 149.428L1162 149Z" fill="#F47A36"/>
              <line x1="1162" y1="197.779" x2="1" y2="197.779" stroke="#F47A36" strokeWidth="0.855262"/>
              <line y1="-0.427631" x2="194.819" y2="-0.427631" transform="matrix(0.00536359 -0.999986 0.999984 0.00573948 1 197.488)" stroke="#F47A36" strokeWidth="0.855262"/>
              <line x1="1161.57" y1="198" x2="1161.57" y2="149" stroke="#F47A36" strokeWidth="0.855262"/>
            </svg>
          </div>
          <div className="relative z-10 max-w-[900px] w-full flex justify-center items-center p-4">
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-primary leading-tight'>
              THREE PILLARS,<br />
              ONE BRIDGE TO <br />
              <span 
                style={{ fontFamily: 'Georgia, serif', marginTop: '-0.5em', display: 'inline-block' }} 
                className='text-[#F47A36] text-4xl sm:text-5xl md:text-6xl leading-none tracking-tight'
              >
                success
              </span>
            </h1>
          </div>
        </div>
        <div className="hidden md:flex flex-grow items-center justify-center w-full px-4 pb-8 overflow-hidden">
          <div 
            className="content-wrapper relative grid grid-cols-10 max-w-[1100px] w-full h-full max-h-[670px] border border-[#F47A36] rounded-[2rem] bg-black overflow-hidden"
          >
            <div className="col-span-6 relative flex items-center justify-center p-12 border-r border-[#F47A36]">
              {ventureData.content.map((item, index) => (
                <div key={item.id} id={`${item.id}-content`} className={`absolute w-full h-full flex flex-col gap-8 items-center justify-center p-12 text-center ${index === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex flex-col items-center gap-0">
                    <h1 className="text-2xl font-primary font-normal leading-none">{item.title}</h1>
                    <h2 className="text-sm font-secondary font-normal text-[#F47A36]">{item.subtitle}</h2>
                  </div>
                  <p className="text-sm font-secondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="col-span-4 flex flex-col justify-center items-center gap-6 p-4">
              <div className="w-[320px] h-[320px] rounded-2xl flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                <svg width="300" height="300" viewBox="0 0 100 100">
                  {ventureData.svg.paths.mentorship.map((path, i) => (
                    <path key={`path-${i}`} className="morph-path fill-none stroke-[#F47A36]" d={path} strokeWidth="0.5" />
                  ))}
                  {ventureData.svg.dots.mentorship.map((dot, i) => (
                    <circle key={`dot-${i}`} className="morph-dot fill-[#F47A36]" r="2.5" cx={dot.cx} cy={dot.cy} />
                  ))}
                </svg>
              </div>
            </div>
            <svg className="glow-svg absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
              <path className="motion-path" fill="none" stroke="none" />
              <line className="trace-line" x1="-15" y1="0" x2="15" y2="0" stroke="#FFC7A8" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="flex md:hidden flex-col gap-12 p-4">
          {ventureData.content.map((item) => (
            <div key={item.id} className="mobile-service-section flex flex-col items-center text-center gap-6 border border-[#F47A36] rounded-[2rem] p-6">
              <div className="flex flex-col items-center gap-0">
                <h1 className="text-2xl font-primary font-normal leading-none">{item.title}</h1>
                <h2 className="text-sm font-secondary font-normal text-[#F47a36]">{item.subtitle}</h2>
              </div>
              <p className="text-sm font-secondary leading-tight">{item.description}</p>
              <div className="w-full max-w-[300px] aspect-square rounded-2xl flex items-center justify-center mt-4" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.4) 1px, transparent 0)', backgroundSize: '20px 20px' }}>
                <svg width="280" height="280" viewBox="0 0 100 100">
                  {ventureData.svg.paths[item.id].map((path, i) => (
                    <path key={`path-${i}`} className="fill-none stroke-[#F47A36]" d={path} strokeWidth="0.5" />
                  ))}
                  {ventureData.svg.dots[item.id].map((dot, i) => (
                    <circle key={`dot-${i}`} className="fill-[#F47A36]" r="2.5" cx={dot.cx} cy={dot.cy} />
                  ))}
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VentureServices;