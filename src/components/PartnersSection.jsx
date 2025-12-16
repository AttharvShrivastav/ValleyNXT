import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider"; 

// --- IMPORTING 8 PARTNER LOGOS ---
import Partner1 from "../assets/PartnerLogos/Partner1.png";
import Partner2 from "../assets/PartnerLogos/Partner2.png";
import Partner3 from "../assets/PartnerLogos/Partner3.png";
import Partner5 from "../assets/PartnerLogos/Partner5.png";
import Partner6 from "../assets/PartnerLogos/Partner6.png";
import Partner7 from "../assets/PartnerLogos/Partner10.png";
import Partner8 from "../assets/PartnerLogos/Partner8.png";
import Partner4 from "../assets/PartnerLogos/Partner11.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// --- STATIC LIST OF 8 PARTNERS ---
const partners = [
  { id: 1, name: "Partner 1", logo: Partner1 },
  { id: 2, name: "Partner 2", logo: Partner2 },
  { id: 3, name: "Partner 3", logo: Partner3 },
  { id: 4, name: "Partner 4", logo: Partner4 },
  { id: 5, name: "Partner 5", logo: Partner5 },
  { id: 6, name: "Partner 6", logo: Partner6 },
  { id: 7, name: "Partner 7", logo: Partner7 },
  { id: 8, name: "Partner 8", logo: Partner8 },
];

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const gridRef = useRef(null);
  const { theme } = useTheme(); 

  useGSAP(
    () => {
      // FIX: Removed 'mm.add' matchMedia wrapper so animations run on MOBILE too.
      ScrollTrigger.refresh();

      // Reveal Text
      gsap.fromTo(textRef.current,
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1, 
            ease: "power3.out", 
            scrollTrigger: { 
              trigger: sectionRef.current, 
              start: "top 80%" 
            }
          }
      );

      // Reveal Grid Items
      gsap.fromTo(".partner-logo",
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.1, 
            ease: "back.out(1.7)", 
            scrollTrigger: { 
              trigger: gridRef.current, 
              start: "top 85%" 
            }
          }
      );
    },
    { scope: sectionRef, dependencies: [theme], revertOnUpdate: true }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background py-16 px-4 md:py-24 md:px-4 flex justify-center"
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-8">
        
        {/* Left Side: Text */}
        <div ref={textRef} className="w-full md:w-1/3 flex flex-col justify-center h-full pt-4 md:pt-12">
            <div className="pl-0 md:pl-4">
                <h2 className="text-4xl md:text-5xl font-bold font-primary text-text-main mb-4">
                    Our Partners
                </h2>
                <p className="text-sm font-primary font-bold tracking-widest text-accent uppercase">
                    PEOPLE WHO BUILD WITH US
                </p>
            </div>
        </div>

        {/* Right Side: Grid of 8 Logos (4 cols x 2 rows) */}
        <div ref={gridRef} className="w-full md:w-2/3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="partner-logo flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-0 cursor-pointer"
              >
                <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-12 w-auto md:max-h-16 object-contain opacity-70 hover:opacity-100 hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}