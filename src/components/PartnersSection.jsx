import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../context/ThemeProvider";

// ============================================================
// PARTNER LOGOS
// ============================================================

// These are the exact imports from your current component.
import Partner1 from "../assets/PartnerLogos/Partner1.png";
import Partner2 from "../assets/PartnerLogos/Partner2.png";
import Partner3 from "../assets/PartnerLogos/Partner3.png";
import Partner4 from "../assets/PartnerLogos/Partner4.png";
import Partner5 from "../assets/PartnerLogos/Partner5.png";
import Partner6 from "../assets/PartnerLogos/Partner6.png";
import Partner7 from "../assets/PartnerLogos/Partner7.png";
import Partner8 from "../assets/PartnerLogos/Partner8.png";
import Partner9 from "../assets/PartnerLogos/Partner9.png";
import Partner10 from "../assets/PartnerLogos/Partner10.png";
import Partner11 from "../assets/PartnerLogos/Partner11.png";
import Partner12 from "../assets/PartnerLogos/Partner12.png";
import Partner13 from "../assets/PartnerLogos/Partner13.png";
import Partner14 from "../assets/PartnerLogos/Partner14.png";
import Partner15 from "../assets/PartnerLogos/Partner15.png";
import Partner16 from "../assets/PartnerLogos/Partner16.png";
import Partner17 from "../assets/PartnerLogos/Partner17.png";
import Partner18 from "../assets/PartnerLogos/Partner18.png";
import Partner19 from "../assets/PartnerLogos/Partner19.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ============================================================
// ALL 19 PARTNERS
// ============================================================

const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: Partner1,
  },
  {
    id: 2,
    name: "Partner 2",
    logo: Partner2,
  },
  {
    id: 3,
    name: "Partner 3",
    logo: Partner3,
  },
  {
    id: 4,
    name: "Partner 4",
    logo: Partner4,
  },
  {
    id: 5,
    name: "Partner 5",
    logo: Partner5,
  },
  {
    id: 6,
    name: "Partner 6",
    logo: Partner6,
  },
  {
    id: 7,
    name: "Partner 7",
    logo: Partner7,
  },
  {
    id: 8,
    name: "Partner 8",
    logo: Partner8,
  },
  {
    id: 9,
    name: "Partner 9",
    logo: Partner9,
  },
  {
    id: 10,
    name: "Partner 10",
    logo: Partner10,
  },
  {
    id: 11,
    name: "Partner 11",
    logo: Partner11,
  },
  {
    id: 12,
    name: "Partner 12",
    logo: Partner12,
  },
  {
    id: 13,
    name: "Partner 13",
    logo: Partner13,
  },
  {
    id: 14,
    name: "Partner 14",
    logo: Partner14,
  },
  {
    id: 15,
    name: "Partner 15",
    logo: Partner15,
  },
  {
    id: 16,
    name: "Partner 16",
    logo: Partner16,
  },
  {
    id: 17,
    name: "Partner 17",
    logo: Partner17,
  },
  {
    id: 18,
    name: "Partner 18",
    logo: Partner18,
  },
  {
    id: 19,
    name: "Partner 19",
    logo: Partner19,
  },
];

// ============================================================
// SETTINGS
// ============================================================

// Keep original desktop design:
// 4 columns × 2 rows.
const LOGOS_PER_VIEW = 8;

// Current set stays visible for 7 seconds.
const CHANGE_INTERVAL = 7000;

// Fade duration between sets.
const FADE_DURATION = 0.7;

// ============================================================
// COMPONENT
// ============================================================

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const gridRef = useRef(null);

  const { theme } = useTheme();

  const [startIndex, setStartIndex] = useState(0);

  // Prevent overlapping logo transitions.
  const isTransitioningRef = useRef(false);

  // ==========================================================
  // BUILD CURRENT GROUP OF 8
  // ==========================================================
  //
  // The modulo means the list wraps automatically.
  //
  // Example:
  //
  // 1 - 8
  //
  // 9 - 16
  //
  // 17, 18, 19, 1, 2, 3, 4, 5
  //
  // 6, 7, 8, 9, 10, 11, 12, 13
  //
  // etc.
  //
  // This means we never get an ugly final slide containing
  // only three logos.
  // ==========================================================

  const visiblePartners = Array.from(
    {
      length: LOGOS_PER_VIEW,
    },
    (_, index) => {
      const partnerIndex =
        (startIndex + index) % partners.length;

      return partners[partnerIndex];
    }
  );

  // ==========================================================
  // INITIAL SCROLL REVEAL
  // ==========================================================

  useGSAP(
    () => {
      if (!sectionRef.current) {
        return;
      }

      // ------------------------------------------------------
      // LEFT TEXT
      // ------------------------------------------------------

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // ------------------------------------------------------
      // LOGO GRID
      // ------------------------------------------------------

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    },
    {
      scope: sectionRef,
      dependencies: [theme],
      revertOnUpdate: true,
    }
  );

  // ==========================================================
  // AUTOMATIC LOGO ROTATION
  // ==========================================================

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!gridRef.current) {
        return;
      }

      if (isTransitioningRef.current) {
        return;
      }

      const logoElements =
        gridRef.current.querySelectorAll(".partner-logo");

      if (!logoElements.length) {
        return;
      }

      isTransitioningRef.current = true;

      // ------------------------------------------------------
      // FADE CURRENT LOGOS OUT
      // ------------------------------------------------------

      gsap.to(logoElements, {
        opacity: 0,
        y: -10,

        duration: FADE_DURATION,

        stagger: {
          each: 0.035,
          from: "start",
        },

        ease: "power2.inOut",

        overwrite: true,

        onComplete: () => {
          // Move ahead by 8 partners.
          setStartIndex((currentIndex) => {
            return (
              (currentIndex + LOGOS_PER_VIEW) %
              partners.length
            );
          });
        },
      });
    }, CHANGE_INTERVAL);

    return () => {
      window.clearInterval(interval);

      isTransitioningRef.current = false;

      if (gridRef.current) {
        const logoElements =
          gridRef.current.querySelectorAll(".partner-logo");

        gsap.killTweensOf(logoElements);
      }
    };
  }, []);

  // ==========================================================
  // FADE NEW LOGOS IN
  // ==========================================================
  //
  // Every time startIndex changes React renders the next
  // group of logos.
  //
  // We then animate those new elements into view.
  // ==========================================================

  useGSAP(
    () => {
      if (!gridRef.current) {
        return;
      }

      const logoElements =
        gridRef.current.querySelectorAll(".partner-logo");

      if (!logoElements.length) {
        return;
      }

      gsap.fromTo(
        logoElements,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.8,

          stagger: {
            each: 0.045,
            from: "start",
          },

          ease: "power2.out",

          overwrite: true,

          onComplete: () => {
            isTransitioningRef.current = false;
          },
        }
      );
    },
    {
      scope: gridRef,
      dependencies: [startIndex],
    }
  );

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-background
        py-16
        px-4
        md:py-24
        md:px-4
        flex
        justify-center
      "
    >
      <div
        className="
          w-full
          max-w-[1200px]

          flex
          flex-col

          md:flex-row

          items-center
          md:items-start

          gap-12
          md:gap-8
        "
      >
        {/* ===================================================
            LEFT SIDE
            =================================================== */}

        <div
          ref={textRef}
          className="
            w-full
            md:w-1/3

            flex
            flex-col
            justify-center

            h-full

            pt-4
            md:pt-12
          "
        >
          <div className="pl-0 md:pl-4">
            <h2
              className="
                text-4xl
                md:text-5xl

                font-bold
                font-primary

                text-text-main

                mb-4
              "
            >
              Our Partners
            </h2>

            <p
              className="
                text-sm

                font-primary
                font-bold

                tracking-widest

                text-accent

                uppercase
              "
            >
              PEOPLE WHO BUILD WITH US
            </p>
          </div>
        </div>

        {/* ===================================================
            RIGHT SIDE
            =================================================== */}

        <div
          ref={gridRef}
          className="
            w-full
            md:w-2/3
          "
        >
          <div
            className="
              grid

              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4

              gap-x-8
              gap-y-12
            "
          >
            {visiblePartners.map((partner) => (
              <div
                key={partner.id}
                className="
                  partner-logo

                  flex
                  items-center
                  justify-center

                  p-4

                  min-h-[90px]
                  md:min-h-[100px]

                  grayscale
                  hover:grayscale-0

                  cursor-pointer

                  transition-[filter]
                  duration-500
                "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  draggable="false"
                  className="
                    max-h-12
                    md:max-h-16

                    max-w-full

                    w-auto
                    h-auto

                    object-contain

                    opacity-70

                    hover:opacity-100
                    hover:scale-105

                    transition-all
                    duration-500

                    select-none
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}