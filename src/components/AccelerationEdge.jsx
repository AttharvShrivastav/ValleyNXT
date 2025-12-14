import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider"; 


const benefits = [
  { id: 1, title: "Capital Injection", desc: "Secured ₹4 Cr seed funding with access to up to ₹10 Cr in follow-on capital.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { id: 2, title: "Global Immersion", desc: "International market access through residency programs in Singapore, London, and Silicon Valley.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { id: 3, title: "Strategic Mentorship", desc: "Dedicated access to two domain-specific mentors per startup for hands-on weekly guidance.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  { id: 4, title: "Fundraising Pathways", desc: "Direct access to demo days and curated investor meets to secure future funding rounds.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg> },
  { id: 5, title: "Product Excellence", desc: "Expert support in achieving Product-Market Fit (PMF), prototyping, and technical validation.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg> },
  { id: 6, title: "Market Expansion", desc: "Execution of GTM strategies and facilitation of B2B/B2G partnerships to drive scalable revenue.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
  { id: 7, title: "Brand Amplification", desc: "Strategic PR and media visibility to build credibility and industry recognition.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
  { id: 8, title: "Business Advisory", desc: "Tailored operational support for finance, HR, legal compliance, and corporate governance.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
  { id: 9, title: "Exit Readiness", desc: "Long-term value alignment with clear planning for IPOs, secondary sales, or strategic acquisitions.", icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
];

const BenefitCard = ({ item, isDark }) => {
  return (
    <div className={"benefit-card p-8 md:p-10 rounded-3xl shadow-xl bg-background border-accent border-2 flex flex-col justify-center min-h-[240px] transition-all duration-300 hover:shadow-2xl"}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
        <div className="pr-2 bg-white/5 border-white/10">
           {item.icon}
        </div>
        <h3 className={`text-2xl text-accent md:text-3xl font-primary`}>
          {item.title}
        </h3>
        </div>
      </div>
      <p className={`text-base md:text-lg text-text-main font-primary leading-relaxed max-w-xl`}>
        {item.desc}
      </p>
    </div>
  );
};

export default function AccelerationEdge() {
  const containerRef = useRef(null);
  const pinnedContentRef = useRef(null); // Ref for the actual content we pin
  const rightColumnRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      
      const endScroll = rightColumnRef.current.offsetHeight - window.innerHeight;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top", 
        end: () => `+=${endScroll}`,
        pin: pinnedContentRef.current, // Pin the inner content, not the column
        pinSpacing: false, 
        invalidateOnRefresh: true,
        // This ensures the width doesn't get messed up during pinning state
        onRefresh: self => {
            if (self.pin) {
                self.pin.style.width = "100%"; 
            }
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section className="w-full bg-background relative py-10 px-6 sm:px-12 overflow-hidden">
        
        <div 
          ref={containerRef}
          className="max-w-[1400px] mx-auto w-full relative flex flex-col lg:flex-row items-start justify-between"
        >
            
            {/* PARENT COLUMN (The Track) 
               - shrink-0: Prevents flexbox compression.
               - w-[45%]: Sets the rigid track width.
               - pr-12: Adds the padding HERE in the parent, so the inner child has space but stays 100% width.
            */}
            <div className="w-full lg:w-[45%] shrink-0 pr-12 relative">
              
              {/* PINNED CONTENT (The Car on the Track)
                 - h-screen: Allows vertical centering.
                 - w-full: Fills the parent track (minus the parent's padding).
              */}
              <div 
                ref={pinnedContentRef} 
                className="flex flex-col justify-center h-screen w-full"
              >
                <div className="flex flex-col gap-6">
                  <h2 className="text-4xl md:text-6xl font-primary leading-tight">
                    The <br />
                    <span className=' leading-[-10] text-4xl sm:text-5xl md:text-6xl font-normal text-accent'>
                                    Acceleration
                                </span> <br />
                    Edge.
                  </h2>

                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div 
                ref={rightColumnRef}
                className="w-full lg:w-[55%] flex flex-col gap-6 pb-24 lg:pt-[50vh]"
            >
              {benefits.map((item) => (
                <BenefitCard key={item.id} item={item} isDark={isDark} />
              ))}
            </div>

        </div>
    </section>
  );
}