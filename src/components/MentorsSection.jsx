import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "../components/ProfileCard";
import { useTheme } from "../context/ThemeProvider";

// ============================================================
// MENTOR IMAGE IMPORTS
// ============================================================

import VisheshKhuranaImage from "../assets/Mentors/Vishesh.webp";
import RahulGargImage from "../assets/Mentors/RahulGarg.png";
import SandeepAgarwalImage from "../assets/Mentors/Sandeep.webp";
import AnvitaVarshneyImage from "../assets/Mentors/AnvitaVarshney.webp";
import NipunAgrawalImage from "../assets/Mentors/NipunAgrawal.webp";
import SanjeevRaoImage from "../assets/Mentors/SanjeevRao.png";
import DeepikaNaharasImage from "../assets/Mentors/DeepikaNaharas.png";

import UmeshSharmaImage from "../assets/Mentors/UmeshSharma.png";
import ArunKanodiyaImage from "../assets/Mentors/ArunKanodiya.png";
import SanjeevAgrawalImage from "../assets/Mentors/SanjeevAgrawal.png";
import GauravBhandariImage from "../assets/Mentors/Gaurav.webp";
import ManishYadavImage from "../assets/Mentors/ManeeshYadav.webp";
import NandagopalImage from "../assets/Mentors/NandagopalGopinathan.webp";
import AvinashAmbaleImage from "../assets/Mentors/AvinashAmbale.webp";

import AnkitJainImage from "../assets/Mentors/AnkitJain.webp";
import RajaLahiriImage from "../assets/Mentors/RajaLahri.webp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ============================================================
// MENTORS
//
// FINAL ORDER:
//
// 1. Vishesh Khurana
// 2. Rahul Garg
// 3. Sandeep Aggarwal
// 4. Anvita Varshney
// 5. Nipun Agrawal
// 6. Sanjeev Rao
// 7. Deepika Naharas
// 8. Umesh Sharma
// 9. Arun Kanodiya
// 10. Sanjeev Agrawal
// 11. Gaurav Bhandari
// 12. Maneesh Yadav
// 13. Nandagopal Gopinathan
// 14. Avinash Ambale
// 15. Ankit Jain
// 16. Raja Lahiri
//
// REMOVED:
// - Ankit Saxena
// ============================================================

const mentors = [
  {
    id: 1,
    name: "Vishesh Khurana",
    title: "Managing Partner, Tribe Capital India",
    bio: "Co-founder of Shiprocket driving operator-led venture capital.",
    image: VisheshKhuranaImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 2,
    name: "Mr. Rahul Garg",
    title: "Founder & CEO, Moglix",
    bio: "Unicorn founder leading one of Asia's largest B2B commerce platforms.",
    image: RahulGargImage,
    linkedin: "https://www.linkedin.com/in/rahulgarg/",
  },
  {
    id: 3,
    name: "Mr. Sandeep Aggarwal",
    title: "Founder & CEO, Droom & ShopClues",
    bio: "Serial entrepreneur who founded two consumer internet unicorns.",
    image: SandeepAgarwalImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 4,
    name: "Ms. Anvita Varshney",
    title: "MD, AV Capital Partners",
    bio: "Unicorn operator, angel investor, and former Regional MD at Lazada.",
    image: AnvitaVarshneyImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 5,
    name: "Mr. Nipun Agrawal",
    title: "Director, PATH Group",
    bio: "Infrastructure executive driving highways and defense technology ventures.",
    image: NipunAgrawalImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 6,
    name: "Mr. Sanjeev Rao",
    title: "Partner, Priscus Finance",
    bio: "Franco-Indian cross-border M&A and corporate growth strategist.",
    image: SanjeevRaoImage,
    linkedin: "https://www.linkedin.com/in/sanjeev-rao-a75226/",
  },
  {
    id: 7,
    name: "Mrs. Deepika Naharas",
    title: "Director, KongBasile Consulting",
    bio: "Finance leader guiding Silicon Valley and global startup scaling.",
    image: DeepikaNaharasImage,
    linkedin: "https://www.linkedin.com/in/deepikanaharas/",
  },
  {
    id: 8,
    name: "CA. Umesh Sharma",
    title: "Chairman, AI Committee, ICAI",
    bio: "Pioneering AI adoption and regulatory frameworks in finance.",
    image: UmeshSharmaImage,
    linkedin: "https://www.linkedin.com/in/ca-umesh-sharma-ab6b7433/",
  },
  {
    id: 9,
    name: "CA. Arun Kanodiya",
    title: "Senior Partner, KSA India",
    bio: "Governance professional and independent corporate director.",
    image: ArunKanodiyaImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 10,
    name: "Mr. Sanjeev Agrawal",
    title: "Ex-CFO / COO, Standard Chartered Bank",
    bio: "Veteran banker with extensive leadership across India and ASEAN.",
    image: SanjeevAgrawalImage,
    linkedin: "https://www.linkedin.com/in/sanjeev-agrawal-240a26b/",
  },
  {
    id: 11,
    name: "Mr. Gaurav Bhandari",
    title: "CEO, Monarch Networth Capital",
    bio: "Capital markets and investment banking leader scaling financial platforms.",
    image: GauravBhandariImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 12,
    name: "Mr. Maneesh Yadav",
    title: "Investment & Asset Management Leader",
    bio: "Specialist in private equity, structured credit, and wealth management.",
    image: ManishYadavImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 13,
    name: "Dr. Nandagopal Gopinathan",
    title: "Partner, Mavin Ventures",
    bio: "HealthTech & AI leader with background across Google, EY, and TCS.",
    image: NandagopalImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 14,
    name: "Mr. Avinash Ambale",
    title: "Managing Partner, Ovid Capital",
    bio: "Serial deep-tech entrepreneur and venture investor with 4 startups.",
    image: AvinashAmbaleImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 15,
    name: "Mr. Ankit Jain",
    title: "Founder, Bigship & BigMudra",
    bio: "Ecosystem builder simplifying logistics and credit for SMEs.",
    image: AnkitJainImage,
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 16,
    name: "Mr. Raja Lahiri",
    title: "Partner, Grant Thornton Bharat",
    bio: "TMT & IPO deal advisory lead advising marquee M&A and PE transactions.",
    image: RajaLahiriImage,
    linkedin: "https://www.linkedin.com/",
  },
];

// ============================================================
// COMPONENT
// ============================================================

const MentorsSection = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  const { theme } = useTheme();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // ==========================================================
  // UPDATE CAROUSEL BUTTON STATES
  // ==========================================================

  const updateScrollButtons = () => {
    if (!carouselRef.current) return;

    const {
      scrollLeft,
      scrollWidth,
      clientWidth,
    } = carouselRef.current;

    setCanScrollLeft(scrollLeft > 10);

    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 10
    );
  };

  // ==========================================================
  // CAROUSEL NAVIGATION
  // ==========================================================

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;

    const cardWidth = 360;

    const scrollAmount =
      direction === "left"
        ? -cardWidth * 2
        : cardWidth * 2;

    carouselRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // ==========================================================
  // RESIZE HANDLING
  // ==========================================================

  useEffect(() => {
    updateScrollButtons();

    window.addEventListener(
      "resize",
      updateScrollButtons
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateScrollButtons
      );
    };
  }, []);

  // ==========================================================
  // SCROLLTRIGGER CARD REVEAL
  // ==========================================================

  useGSAP(
    () => {
      const cards =
        gsap.utils.toArray(".mentor-card");

      if (!cards.length) return;

      /*
       * Initial hidden state is set before ScrollTrigger
       * registration to avoid visual flashing.
       */
      gsap.set(cards, {
        autoAlpha: 0,
        y: 35,
      });

      ScrollTrigger.batch(cards, {
        start: "top 88%",

        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            overwrite: true,
            ease: "power2.out",
          });
        },
      });

      ScrollTrigger.refresh();
    },
    {
      scope: sectionRef,
      dependencies: [theme],
      revertOnUpdate: true,
    }
  );

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background py-20 px-4 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto">

        {/* ===================================================
            HEADER + CONTROLS
            =================================================== */}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary font-normal mb-3 text-text-main">
              Meet Our{" "}
              <span className="text-accent">
                Mentors
              </span>
            </h2>

            <p className="text-sm md:text-base font-primary max-w-xl text-text-main opacity-80">
              Industry veterans, unicorn founders, and domain leaders guiding our portfolio ventures.
            </p>
          </div>

          {/* =================================================
              CAROUSEL CONTROLS
              ================================================= */}

          <div className="flex items-center gap-3 self-end md:self-auto">

            {/* LEFT */}
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`
                p-3
                rounded-full
                border
                transition-all
                duration-300
                flex
                items-center
                justify-center
                ${
                  canScrollLeft
                    ? "border-accent text-accent hover:bg-accent hover:text-arrow-text cursor-pointer"
                    : "border-accent text-accent opacity-30 cursor-not-allowed"
                }
              `}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* RIGHT */}
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`
                p-3
                rounded-full
                border
                transition-all
                duration-300
                flex
                items-center
                justify-center
                ${
                  canScrollRight
                    ? "border-accent text-accent hover:bg-accent hover:text-arrow-text cursor-pointer"
                    : "border-accent text-accent opacity-30 cursor-not-allowed"
                }
              `}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ===================================================
            MENTOR CAROUSEL
            =================================================== */}

        <div
          ref={carouselRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {mentors.map((person) => (
            <div
              key={person.id}
              className="mentor-card flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] snap-start"
            >
              <ProfileCard
                person={person}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;