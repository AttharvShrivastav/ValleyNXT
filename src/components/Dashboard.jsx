import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // 1. Import useGSAP
import MyLogo from "../assets/logoblack.svg";

// Register the plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const stats = [
     { label: "Total Fund Size", value: 200, prefix: "INR ", suffix: "Cr+" },
     { label: "Startups Screened", value: 3500, suffix: "+" },
     { label: "Startups Evaluated", value: 800, suffix: "+" },
     { label: "Startups Funded", value: 10, suffix: "+" },
];

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
     const ref = useRef(null);

     // Replaced useEffect with useGSAP for the number animation
     useGSAP(() => {
          const counter = { val: 0 };
          const target = ref.current;

          gsap.to(counter, {
               val: value,
               duration: 2.5,
               ease: "power2.out",
               scrollTrigger: {
                    trigger: target,
                    start: "top 85%",
                    toggleActions: "play none none none",
               },
               onUpdate: () => {
                    target.innerText = `${prefix}${Math.floor(counter.val)}${suffix}`;
               },
          });
     }, { scope: ref, dependencies: [value, prefix, suffix] }); // scope and dependencies for the hook

     return (
          <span ref={ref} className="text-[#F47A36] font-primary text-3xl md:text-5xl">
               0{suffix}
          </span>
     );
}

export default function DashboardSection() {
     const container = useRef(null);
     const statCards = useRef([]);
     const presentationButton = useRef(null);
     const buttonSvg = useRef(null);

     // Main animation hook for the section
     useGSAP(() => {

          // Stat Card hover effect
          statCards.current.forEach((el) => {
               if (!el) return;
               const enter = () => gsap.to(el, { scale: 1.04, duration: 0.18, ease: "power1.out" });
               const leave = () => gsap.to(el, { scale: 1, duration: 0.22, ease: "power1.out" });
               el.addEventListener("mouseenter", enter);
               el.addEventListener("mouseleave", leave);
          });

          // 2. Button hover animation logic
          const button = presentationButton.current;
          const svg = buttonSvg.current;
          const svgPath = svg.querySelector('path'); // Target the path for fill color change

          const enterButton = () => {
              gsap.to(button, { backgroundColor: '#1C0800', color: '#FFC7A8', duration: 0.3, ease: 'power1.in' });
              gsap.to(svg, { rotation: 360, duration: 0.5, ease: 'power2.inOut' });
              gsap.to(svgPath, { fill: '#FFC7A8', duration: 0.3, ease: 'power1.in' });
          };

          const leaveButton = () => {
              gsap.to(button, { backgroundColor: '#F47A36', color: '#330000', duration: 0.3, ease: 'power1.out' });
              gsap.to(svg, { rotation: 0, duration: 0.5, ease: 'power2.inOut' });
              gsap.to(svgPath, { fill: '#330000', duration: 0.3, ease: 'power1.out' });
          };

          button.addEventListener('mouseenter', enterButton);
          button.addEventListener('mouseleave', leaveButton);

     }, { scope: container }); // Scope all animations to the main container for cleanup

     return (
          <section ref={container} className="bg-black min-h-screen w-full text-brown-900 flex justify-center items-center py-10 px-4">
               <div className="w-[85vw] max-w-[85vw] h-[90vh] md:h-[90vh] bg-[#FFC7A8] rounded-3xl p-6 md:p-8 shadow-lg flex flex-col gap-4 md:gap-8">
                    <div className="w-full flex items-center justify-between">
                         <div className="logo">
                              <img src={MyLogo} alt="ValleyNXT Ventures Logo" className="w-28 md:w-40" />
                         </div>
                         {/* Added refs to the button and SVG */}
                         <button ref={presentationButton} className="w-44 md:w-52 px-4 rounded-full flex-shrink-0 text-[15px] font-primary font-bold flex items-center justify-evenly h-12 md:h-13 bg-[#F47A36] text-[#330000]">
                              <p>Explore VN Club</p>
                              <svg ref={buttonSvg} width="10" height="18" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                   <path d="M2.22732 0.771729L0.259766 2.75703L10.3514 12.9397L0.259766 23.1224L2.22732 25.1077L14.223 12.9397L2.22732 0.771729Z" fill="#330000" />
                              </svg>
                         </button>
                    </div>
                    <div className="w-full flex-grow flex flex-col md:flex-row gap-8 md:gap-12 text-[#330000] min-h-0">
                         
                         <div className="w-full md:w-1/4 flex flex-col gap-6">
                              <div>
                                   <h2 className="text-5xl w-sm md:text-6xl font-serifa leading-100%">
                                        One look<br /> At Us
                                   </h2>
                                   <p className="text-xl font-primary mt-4">
                                        What have we done till now is presented to you here
                                   </p>
                                   <a href="#" className="text-lg font-primary hover:pointer-select text-[#F47A36] mt-4 inline-block hover:text-[#1C0800]" >
                                        Get to know us better!
                                   </a>
                              </div>
                              <div className="bg-[#1C0800] rounded-2xl p-6 flex-grow flex flex-col">
                                   <p className="text-[#FFC7A8] text-center font-primary text-xl">Startups by <span className="font-serifa text-2xl text-[#F47A36]">sector</span></p>
                                   <div className="w-full flex-grow flex items-center justify-center mt-4">
                                        <svg width="210" height="187" viewBox="0 0 210 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <mask id="path-1-inside-1_51_2870" fill="white">
                                          <path d="M41.8094 0.841234C26.3414 12.3307 14.3988 27.8134 7.30221 45.577C0.205661 63.3406 -1.7682 82.6929 1.59893 101.493C4.96606 120.294 13.543 137.81 26.381 152.105C39.2191 166.4 55.8181 176.916 74.3421 182.49C92.8662 188.064 112.593 188.48 131.342 183.69C150.091 178.9 167.13 169.093 180.576 155.351C194.021 141.61 203.349 124.471 207.527 105.829C211.706 87.1873 210.572 67.7696 204.251 49.7235L105 83.5L41.8094 0.841234Z"/>
                                          </mask>
                                          <path d="M41.8094 0.841234C26.3414 12.3307 14.3988 27.8134 7.30221 45.577C0.205661 63.3406 -1.7682 82.6929 1.59893 101.493C4.96606 120.294 13.543 137.81 26.381 152.105C39.2191 166.4 55.8181 176.916 74.3421 182.49C92.8662 188.064 112.593 188.48 131.342 183.69C150.091 178.9 167.13 169.093 180.576 155.351C194.021 141.61 203.349 124.471 207.527 105.829C211.706 87.1873 210.572 67.7696 204.251 49.7235L105 83.5L41.8094 0.841234Z" fill="#4D1600" stroke="#330000" strokeWidth="4" mask="url(#path-1-inside-1_51_2870)"/>
                                        </svg>
                                   </div>
                              </div>
                         </div>
                         
                         <div className="w-full md:w-3/4 flex flex-col gap-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                   {stats.map((stat, index) => (
                                        <div
                                             key={stat.label}
                                             ref={(el) => (statCards.current[index] = el)}
                                             className="bg-[#1C0800] text-center rounded-2xl p-6 flex flex-col justify-center transform-gpu transition-transform"
                                        >
                                             <p className="text-[#FFC7A8] font-primary text-xl mb-1">{stat.label}</p>
                                             <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                                        </div>
                                   ))}
                              </div>
                              <div className="bg-[#1C0800] rounded-2xl p-6 flex-grow flex flex-col justify-end min-h-[150px]">
                                    <div className="w-full h-full flex items-end justify-around gap-4">
                                        <div className="flex flex-col items-center gap-2"><div className="w-12 md:w-16 h-3/5 bg-[#F47A36] rounded-t-md"></div><p className="font-bold text-[#4D1600]">M</p></div>
                                        <div className="flex flex-col items-center gap-2"><div className="w-12 md:w-16 h-full bg-[#F47A36] rounded-t-md"></div><p className="font-bold text-[#4D1600]">T</p></div>
                                        <div className="flex flex-col items-center gap-2"><div className="w-12 md:w-16 h-2/5 bg-[#F47A36] rounded-t-md"></div><p className="font-bold text-[#4D1600]">W</p></div>
                                        <div className="flex flex-col items-center gap-2"><div className="w-12 md:w-16 h-3/4 bg-[#F47A36] rounded-t-md"></div><p className="font-bold text-[#4D1600]">T</p></div>
                                        <div className="flex flex-col items-center gap-2"><div className="w-12 md:w-16 h-4/5 bg-[#F47A36] rounded-t-md"></div><p className="font-bold text-[#4D1600]">F</p></div>
                                    </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
