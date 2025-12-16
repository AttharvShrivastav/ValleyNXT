import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider"; 
import GradientNumber from "../components/GradientNumber";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const philosophies = [
  { id: "01", title: "Deeptech & Tech First", focus: "Spacetech, Defense Tech, Robotics, AI/ML, Quantum, Semiconductor, Healthtech, Cybersecurity", philosophy: "Investing in IP-driven companies and transformative innovations that create high entry barriers and capture exponential alpha." },
  { id: "02", title: "Sustainability", focus: "Green Energy, Agritech, WaterTech, ESG, Climate-Tech, Circular Economy, Carbon Reduction", philosophy: "Targeting systemic challenges in the $4T+ global market by backing clean energy and circular solutions with strong policy tailwinds." },
  { id: "03", title: "Consumer & Enterprise", focus: "E-commerce, D2C, B2B Tech, Logistics, Foodtech, PropTech, Fintech, Edtech", philosophy: "Building sticky, brand-driven businesses that capitalize on India’s expanding $6T+ digital-first consumer economy." }
];

// Custom SVG Background
const FolderBg = ({ isHovered, isDark }) => {
  // FIXED: Only active if hovered (no default active state)
  const isActive = isHovered;

  let fill = "transparent";
  let stroke = isDark ? "rgba(255, 255, 255, 0.5)" : "var(--color-text-main, #202039)";
  let strokeOpacity = isDark ? "1" : "0.8";

  if (isActive) {
    fill = isDark ? "var(--color-accent)" : "#B1CEEB";
    stroke = "none";
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      viewBox="0 0 429 425"
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M238.062 22.752H383.843C394.612 22.752 403.724 33.1723 403.725 46.5391V370.176C403.724 383.542 394.612 393.963 383.843 393.963H58.3955C47.6265 393.963 38.5139 383.542 38.5137 370.176V78.25C38.5138 61.2776 50.0958 47.9348 63.9111 47.9346H189.993C192.444 47.9345 194.805 47.4784 197.015 46.6367C200.709 45.2295 204.259 42.9748 207.696 40.4473C211.115 37.9333 214.55 35.0492 217.885 32.4297C224.696 27.0787 231.206 22.752 238.062 22.752Z"
        fill={fill}
        stroke={stroke}
        strokeOpacity={stroke === 'none' ? 0 : strokeOpacity}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        shapeRendering="crispEdges"
      />
    </svg>
  );
};

export default function InvestmentPhilosophy() {
  const sectionRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.refresh();

      gsap.fromTo(".philosophy-title", 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(".philosophy-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: ".cards-container", start: "top 85%" }
        }
      );
    });
  }, { scope: sectionRef, dependencies: [theme], revertOnUpdate: true });

  return (
    <section ref={sectionRef} className="w-full bg-background py-8 px-1 sm:py-16 sm:px-4 md:py-24 flex flex-col items-center">
      
      <div className="philosophy-title text-center max-w-4xl mb-8 md:mb-16 px-4">
        <h2 className={`text-3xl md:text-5xl font-primary font-bold mb-4 ${isDark ? 'text-white' : 'text-text-main'}`}>
          Investment <span className="text-accent">Philosophy</span>
        </h2>
        <p className={`text-sm md:text-base font-primary leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Capital that believes early, mentors who’ve built, and market access without red tape across various frontiers
        </p>
      </div>

      <div className="cards-container w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-stretch gap-5 px-0 md:px-0">
        {philosophies.map((item, index) => {
          // FIXED: Active ONLY if hovered.
          const isHovered = index === hoveredIndex;
          const isActive = isHovered;

          const tags = item.focus.split(',').map(tag => tag.trim());

          let titleColor = isDark ? "text-white" : "text-text-main";
          let textColor = isDark ? "text-gray-300" : "text-gray-700";
          let labelColor = isDark ? "text-gray-400" : "text-gray-500";
          let tagClass = isDark 
                ? "bg-white/5 text-gray-300 border-white/20" 
                : "bg-gray-100 text-gray-700 border-gray-200";
          
          if (isActive) {
             titleColor = isDark ? "text-[#330000]" : "text-text-main";
             textColor = isDark ? "text-[#4D1600]" : "text-text-main/80";
             labelColor = isDark ? "text-[#4D1600]/70" : "text-text-main/60";
             tagClass = isDark 
                ? "bg-[#4D1600]/10 text-[#4D1600] border-[#4D1600]/20" 
                : "bg-white/40 text-text-main border-text-main/20";    
          }

          return (
            <div 
              key={item.id} 
              className="philosophy-card relative flex flex-col w-full md:w-[26rem] lg:w-[28rem] shrink h-auto md:min-h-[540px] group cursor-default"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <FolderBg isHovered={isHovered} isDark={isDark} />

              <div className="relative z-10 px-8 pt-20 pb-10 md:px-16 md:pt-32 md:pb-12 flex flex-col h-full justify-start transition-colors duration-300">
                
                <div className="absolute top-6 right-6 md:top-10 md:right-12 pointer-events-none">
                   <GradientNumber 
                     number={item.id} 
                     theme={theme}
                     variant={isActive ? "fill" : "outline"}
                     className="w-12 h-12 md:w-16 md:h-16" 
                   />
                </div>

                <div className="flex-grow flex flex-col">
                  <h3 className={`text-xl md:text-2xl font-bold font-primary mb-4 md:mb-8 ${titleColor} transition-colors duration-300 leading-tight`}>
                    {item.title}
                  </h3>

                  <div className="flex flex-col gap-4 md:gap-8">
                    <div>
                      <p className={`text-[10px] md:text-xs font-bold font-primary uppercase tracking-widest mb-2 md:mb-3 ${labelColor} transition-colors duration-300`}>
                        Focus Areas:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className={`px-2 py-1 md:px-3 rounded-full text-[10px] md:text-xs font-medium font-primary border transition-colors duration-300 ${tagClass}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className={`text-[10px] md:text-xs font-bold font-primary uppercase tracking-widest mb-2 md:mb-3 ${labelColor} transition-colors duration-300`}>
                        Philosophy:
                      </p>
                      <p className={`text-sm font-primary leading-relaxed ${textColor} transition-colors duration-300`}>
                        {item.philosophy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}