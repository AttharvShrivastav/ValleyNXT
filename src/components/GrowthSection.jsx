import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider"; 
import GradientNumber from "../components/GradientNumber"; 


// --- Icons ---
// const SingaporeIcon = () => (
//   <svg className="w-5 h-5 ml-2 inline-block text-[#F47A36] mb-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M2 21H22V19H2V21ZM5 9H8V17H5V9ZM10.5 7H13.5V17H10.5V7ZM16 9H19V17H16V9ZM4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V7H4V5Z" />
//   </svg>
// );

// const LondonIcon = () => (
//   <svg className="w-5 h-5 ml-2 inline-block text-[#F47A36] mb-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 2L9 5V19H15V5L12 2ZM10.5 19H13.5V21H10.5V19ZM11 7H13V9H11V7ZM12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10Z" />
//   </svg>
// );

// const ValleyIcon = () => (
//   <svg className="w-6 h-6 ml-2 inline-block text-[#F47A36] mb-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M1 21H23V19H1V21ZM4 19V11L8 7L12 11V19H10V12L8 10L6 12V19H4ZM14 19V11L18 7L22 11V19H20V12L18 10L16 12V19H14Z" />
//   </svg>
// );

const phases = [
  {
    id: "1",
    title: "Alignment",
    steps: [
      { text: "In-depth evaluation of strengths and challenges" },
      { text: "Mentor assignment, early strategy definition, market and investor alignment" },
      { text: "International Immersion: Singapore" },
    ],
  },
  {
    id: "2",
    title: "Fast Track GTM",
    steps: [
      { text: "Business model validation, B2B alliances, co-investments" },
      { text: "Compliance, investment readiness" },
      { text: "International immersion: London",},
    ],
  },
  {
    id: "3",
    title: "Scale Up",
    steps: [
      { text: "Global expansion (GITEX, Techweek, TiEcon), media and PR initiatives" },
      { text: "Structured Demo Days, investor meetings, funding opportunities" },
      { text: "International immersion: Silicon Valley",},
    ],
  },
];

export default function GrowthSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const presentationButton = useRef(null);
  
  const { theme } = useTheme();

  useGSAP(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(containerRef.current, 
          { scale: 0.95, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
        );
      });

      const button = presentationButton.current;
      if (button) {
        const svg = button.querySelector("svg");
        const buttonEnter = () => { gsap.to(svg, { rotation: 360, duration: 0.5, ease: "power2.inOut" }); };
        const buttonLeave = () => { gsap.to(svg, { rotation: 0, duration: 0.5, ease: "elastic.out(1, 0.75)" }); };
        button.addEventListener("mouseenter", buttonEnter);
        button.addEventListener("mouseleave", buttonLeave);
        return () => {
          button.removeEventListener("mouseenter", buttonEnter);
          button.removeEventListener("mouseleave", buttonLeave);
        };
      }
  }, { scope: sectionRef });

  return (
    // UPDATED LAYOUT STRUCTURE: 
    // 1. Matched padding exactly: 'px-6 sm:px-12' (Same as AcceleratorInfo)
    // 2. Removed 'flex justify-center items-center' from section (Switched to block layout)
    <section ref={sectionRef} className="bg-background w-full text-brown-900 py-10 px-6 sm:px-12">
      
      {/* UPDATED CONTAINER:
         1. max-w-[1400px]: Matches the sections above.
         2. mx-auto: Centers the block element perfectly.
         This combination guarantees alignment with AcceleratorInfo above.
      */}
      <div ref={containerRef} className="max-w-[1400px] mx-auto bg-bg-growth rounded-3xl p-6 md:p-10 shadow-lg flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl text-text-primary font-primary font-bold text-dark">
              The path to <span className="text-text-secondary font-serifa font-normal">Growth</span>
            </h2>
            <p className="text-base md:text-lg text-text-primary font-primary mt-2 text-dark">“36 weeks, three phases, global reach”</p>
          </div>
          <a href="https://vclub.valleynxtventures.com/investor/signup/Mg==" ref={presentationButton} className="w-44 md:w-52 px-4 rounded-full flex-shrink-0 text-sm md:text-[15px] font-primary font-bold flex items-center justify-center gap-3 h-12 bg-text-primary text-white transition-colors hover:bg-accent hover:text-white">
            <span>View Presentation</span>
            <svg className="w-2 md:w-auto" height="18" viewBox="0 0 15 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.22732 0.771729L0.259766 2.75703L10.3514 12.9397L0.259766 23.1224L2.22732 25.1077L14.223 12.9397L2.22732 0.771729Z" /></svg>
          </a>
        </div>

        {/* Phases Grid */}
        <div className="bg-bg-card rounded-[30px] p-8 md:p-12 text-text-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {phases.map((phase, index) => (
              <div key={phase.id} className="relative flex flex-col gap-6 group">
                
                <div className="border-b border-white/10 pb-4 min-h-[110px] flex flex-col justify-start">
                  <h3 className="text-2xl font-primary">
                    <span className="opacity-50 text-sm uppercase tracking-widest block mb-1">Phase 0{phase.id}</span>
                    <span className="font-bold text-3xl text-bg-growth">{phase.title}</span>
                  </h3>
                </div>
                
                <div className="flex flex-col gap-2">
                  {phase.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      
                      {/* Gradient Number: Solid Fill */}
                      <GradientNumber 
                        number={i + 1} 
                        theme={theme} 
                        variant="fill" 
                        className="w-12 h-12 md:w-14 md:h-14" 
                      />
                      
                      <p className="text-bg-growth font-primary text-sm leading-relaxed opacity-90 pt-1">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>

                {index !== phases.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-white/20 to-transparent -mr-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}