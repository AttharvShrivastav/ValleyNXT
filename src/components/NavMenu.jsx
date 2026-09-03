import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";

import logoBlack from "../assets/LogoBlack.png";
import logoLight from "../assets/LogoWhite.png";


const ThemeToggle = () => {
     const { theme, toggleTheme } = useTheme();

     return (
          <button
               onClick={toggleTheme}
               className="
                    flex items-center justify-center
                    text-text-main hover:text-accent
                    transition-colors duration-300
                    p-1.5 sm:p-2
                    rounded-full
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
               "
               aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
               } mode`}
          >
               {theme === "light" ? (
                    <svg
                         aria-hidden="true"
                         focusable="false"
                         xmlns="http://www.w3.org/2000/svg"
                         className="w-6 h-6 sm:w-7 sm:h-7"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         strokeWidth={1.5}
                    >
                         <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                         />
                    </svg>
               ) : (
                    <svg
                         aria-hidden="true"
                         focusable="false"
                         xmlns="http://www.w3.org/2000/svg"
                         className="w-6 h-6 sm:w-7 sm:h-7"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         strokeWidth={1.5}
                    >
                         <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                         />
                    </svg>
               )}
          </button>
     );
};

/* -------------------------------------------------------------------------- */
/*                                  NAV DATA                                  */
/* -------------------------------------------------------------------------- */

const navItems = [
     {
          label: "HOME",
          to: "/",
     },
     {
          label: "TEAM",
          to: "/team",
     },
     {
          label: "PORTFOLIO",
          to: "/portfolio",
     },
     {
          label: "ACCELERATOR",
          to: "/accelerator",
     },
     {
          label: "VALLEYNXT WEEKLY",
          to: "/wiki",
     },
     {
          label: "INSIGHTS & EVENTS",
          to: "/insights-and-events",
     },
];

/* -------------------------------------------------------------------------- */
/*                                  NAV MENU                                  */
/* -------------------------------------------------------------------------- */

const NavMenu = () => {
     const [isOpen, setIsOpen] = useState(false);

     const { theme } = useTheme();

     const menuContainer = useRef(null);
     const menuButtonRef = useRef(null);
     const closeButtonRef = useRef(null);
     const timelineRef = useRef(null);

     const toggleMenu = () => {
          setIsOpen((previous) => !previous);
     };

     const closeMenu = () => {
          setIsOpen(false);
     };

     /* --------------------------------------------------------------------- */
     /*                              GSAP ANIMATION                           */
     /* --------------------------------------------------------------------- */

     useGSAP(
          () => {
               if (!menuContainer.current) return;

               timelineRef.current = gsap.timeline({
                    paused: true,

                    onStart: () => {
                         gsap.set(menuContainer.current, {
                              display: "grid",
                         });

                         document.body.style.overflow = "hidden";
                    },

                    onReverseComplete: () => {
                         gsap.set(menuContainer.current, {
                              display: "none",
                         });

                         gsap.to(menuButtonRef.current, {
                              opacity: 1,
                              duration: 0.3,
                         });

                         document.body.style.overflow = "";
                    },
               });

               timelineRef.current.fromTo(
                    menuContainer.current,
                    {
                         xPercent: -100,
                         opacity: 0,
                    },
                    {
                         xPercent: 0,
                         opacity: 1,
                         duration: 0.7,
                         ease: "power3.out",
                    },
               );

               timelineRef.current.from(
                    ".link-separator",
                    {
                         scaleX: 0,
                         transformOrigin: "left center",
                         duration: 0.55,
                         stagger: 0.04,
                         ease: "power2.out",
                    },
                    "-=0.35",
               );

               timelineRef.current.fromTo(
                    ".link-item",
                    {
                         y: 18,
                         opacity: 0,
                    },
                    {
                         y: 0,
                         opacity: 1,
                         stagger: 0.07,
                         duration: 0.4,
                         ease: "power2.out",
                    },
                    "-=0.25",
               );
          },
          {
               scope: menuContainer,
          },
     );

     /* --------------------------------------------------------------------- */
     /*                           OPEN / CLOSE STATE                          */
     /* --------------------------------------------------------------------- */

     useEffect(() => {
          if (!timelineRef.current) return;

          if (isOpen) {
               gsap.to(menuButtonRef.current, {
                    opacity: 0,
                    duration: 0.2,
                    pointerEvents: "none",
               });

               timelineRef.current.play();

               const focusTimer = setTimeout(() => {
                    closeButtonRef.current?.focus();
               }, 50);

               return () => clearTimeout(focusTimer);
          }

          gsap.set(menuButtonRef.current, {
               pointerEvents: "auto",
          });

          timelineRef.current.reverse();

          const focusTimer = setTimeout(() => {
               menuButtonRef.current?.focus();
          }, 300);

          return () => clearTimeout(focusTimer);
     }, [isOpen]);

     /* --------------------------------------------------------------------- */
     /*                     ESCAPE KEY + ACCESSIBILITY                       */
     /* --------------------------------------------------------------------- */

     useEffect(() => {
          const handleKeyDown = (event) => {
               if (!isOpen || !menuContainer.current) return;

               if (event.key === "Escape") {
                    setIsOpen(false);
                    return;
               }

               if (event.key !== "Tab") return;

               const focusableElements =
                    menuContainer.current.querySelectorAll(
                         'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
                    );

               if (!focusableElements.length) return;

               const firstElement = focusableElements[0];

               const lastElement =
                    focusableElements[focusableElements.length - 1];

               if (
                    event.shiftKey &&
                    document.activeElement === firstElement
               ) {
                    event.preventDefault();
                    lastElement.focus();
               } else if (
                    !event.shiftKey &&
                    document.activeElement === lastElement
               ) {
                    event.preventDefault();
                    firstElement.focus();
               }
          };

          window.addEventListener("keydown", handleKeyDown);

          return () => {
               window.removeEventListener("keydown", handleKeyDown);
          };
     }, [isOpen]);

     /* --------------------------------------------------------------------- */
     /*                        CLEAN UP BODY OVERFLOW                         */
     /* --------------------------------------------------------------------- */

     useEffect(() => {
          return () => {
               document.body.style.overflow = "";
          };
     }, []);

     return (
          <>
               {/* ----------------------------------------------------------- */}
               {/*                       MENU OPEN BUTTON                      */}
               {/* ----------------------------------------------------------- */}

               <button
                    ref={menuButtonRef}
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Close main menu" : "Open main menu"}
                    aria-expanded={isOpen}
                    aria-controls="nav-menu-container"
                    className="
                         fixed
                         top-4 right-4
                         sm:top-6 sm:right-6
                         lg:top-8 lg:right-8
                         z-[100]

                         text-text-main
                         dark:text-text-secondary

                         cursor-pointer

                         focus:outline-none
                         focus-visible:ring-2
                         focus-visible:ring-accent

                         rounded-sm
                    "
               >
                    <svg
                         aria-hidden="true"
                         focusable="false"
                         xmlns="http://www.w3.org/2000/svg"
                         className="w-7 h-7 sm:w-8 sm:h-8"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor"
                         strokeWidth={1.5}
                    >
                         <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                         />
                    </svg>
               </button>

               {/* ----------------------------------------------------------- */}
               {/*                         FULL MENU                           */}
               {/* ----------------------------------------------------------- */}

               <div
                    id="nav-menu-container"
                    ref={menuContainer}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Main navigation"
                    className="
                         fixed
                         inset-0
                         z-[90]

                         w-full
                         h-[100dvh]

                         bg-background
                         text-text-main

                         hidden
                         opacity-0

                         font-primary
                         font-light

                         grid
                         grid-rows-[auto_minmax(0,1fr)_auto]

                         overflow-hidden

                         px-4
                         sm:px-6
                         md:px-8
                         lg:px-10
                    "
               >
                    {/* ------------------------------------------------------ */}
                    {/*                         HEADER                         */}
                    {/* ------------------------------------------------------ */}

                    <header
                         className="
                              flex
                              items-start
                              justify-between

                              shrink-0

                              pt-2
                              sm:pt-3
                              lg:pt-4

                              pb-[clamp(0.25rem,1vh,0.75rem)]
                         "
                    >
                         <Link
                              to="/"
                              onClick={closeMenu}
                              className="
                                   relative
                                   z-50

                                   shrink-0

                                   focus:outline-none
                                   focus-visible:ring-2
                                   focus-visible:ring-accent

                                   rounded-lg
                              "
                         >
                              <img
                                   src={
                                        theme === "light"
                                             ? logoBlack
                                             : logoLight
                                   }
                                   alt="ValleyNXT Ventures Logo"
                                   className="
                                        object-contain
                                        w-[clamp(72px,9vw,140px)]
                                        h-[clamp(58px,10vh,110px)]
                                   "
                              />
                         </Link>

                         <div
                              className="
                                   relative
                                   z-50

                                   flex
                                   items-center

                                   gap-1
                                   sm:gap-2
                              "
                         >
                              <ThemeToggle />

                              <button
                                   ref={closeButtonRef}
                                   onClick={closeMenu}
                                   aria-label="Close main menu"
                                   className="
                                        flex
                                        items-center
                                        justify-center

                                        cursor-pointer

                                        p-1.5
                                        sm:p-2

                                        rounded-full

                                        focus:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-accent
                                   "
                              >
                                   <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="
                                             w-7 h-7
                                             sm:w-8 sm:h-8
                                        "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                   >
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M6 18L18 6M6 6l12 12"
                                        />
                                   </svg>
                              </button>
                         </div>
                    </header>

                    {/* ------------------------------------------------------ */}
                    {/*                        NAVIGATION                       */}
                    {/* ------------------------------------------------------ */}

                    <nav
                         aria-label="Primary navigation"
                         className="
                              min-h-0
                              w-full

                              flex
                              flex-col
                              justify-center

                              overflow-y-auto
                              overscroll-contain

                              scrollbar-none

                              py-[clamp(0.25rem,1vh,1rem)]
                         "
                    >
                         <div className="w-full shrink-0">
                              <div
                                   className="
                                        link-separator
                                        h-px
                                        sm:h-0.5
                                        bg-accent
                                        w-full
                                   "
                              />

                              {navItems.map((item) => (
                                   <React.Fragment key={item.to}>
                                        <div
                                             className="
                                                  link-item
                                                  overflow-hidden
                                             "
                                        >
                                             <Link
                                                  to={item.to}
                                                  onClick={closeMenu}
                                                  className="
                                                       relative
                                                       block
                                                       w-full

                                                       font-normal

                                                       text-[clamp(1.35rem,4.25vh,2.5rem)]
                                                       leading-[1.05]

                                                       transition-colors
                                                       duration-300

                                                       group

                                                       focus:outline-none
                                                       focus-visible:ring-2
                                                       focus-visible:ring-inset
                                                       focus-visible:ring-accent
                                                  "
                                             >
                                                  <span
                                                       className="
                                                            relative
                                                            z-10

                                                            block

                                                            py-[clamp(0.45rem,1.3vh,0.9rem)]

                                                            pl-2
                                                            sm:pl-5
                                                            md:pl-8

                                                            pr-3

                                                            font-primary

                                                            whitespace-normal

                                                            transition-colors
                                                            duration-300

                                                            group-hover:text-accent
                                                       "
                                                  >
                                                       {item.label}
                                                  </span>

                                                  <div
                                                       aria-hidden="true"
                                                       className="
                                                            absolute
                                                            inset-y-0
                                                            right-0

                                                            w-0

                                                            bg-gradient-to-r
                                                            from-background/50
                                                            to-accent

                                                            transition-all
                                                            duration-300

                                                            group-hover:w-full
                                                       "
                                                  />
                                             </Link>
                                        </div>

                                        <div
                                             className="
                                                  link-separator
                                                  h-px
                                                  sm:h-0.5
                                                  bg-accent
                                                  w-full
                                             "
                                        />
                                   </React.Fragment>
                              ))}
                         </div>
                    </nav>

                    {/* ------------------------------------------------------ */}
                    {/*                          FOOTER                        */}
                    {/* ------------------------------------------------------ */}

                    <footer
                         className="
                              shrink-0

                              grid
                              grid-cols-1
                              sm:grid-cols-[1fr_auto]

                              gap-3
                              sm:gap-8

                              items-end

                              pt-[clamp(0.35rem,1vh,0.75rem)]
                              pb-3
                              sm:pb-5
                              lg:pb-7

                              text-text-secondary
                              font-light
                         "
                    >
                         <div
                              className="
                                   text-[clamp(0.68rem,1.5vh,0.875rem)]
                                   leading-[1.45]
                              "
                         >
                              <p>195, Asco Capital</p>

                              <p>
                                   Sch.No.78 Part II Near Daisy Dales School
                              </p>

                              <p>Indore, Madhya Pradesh</p>
                         </div>

                         <div
                              className="
                                   flex
                                   flex-row
                                   flex-wrap

                                   sm:flex-col

                                   gap-x-5
                                   gap-y-1
                                   sm:gap-1.5

                                   text-[clamp(0.68rem,1.5vh,0.875rem)]

                                   sm:text-right
                              "
                         >
                              <a
                                   href="https://x.com/ValleyNXT_VC"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="ValleyNXT Ventures on Twitter, opens in a new tab"
                                   className="
                                        hover:text-text-main
                                        transition-colors
                                        duration-300

                                        focus:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-accent
                                   "
                              >
                                   Twitter
                              </a>

                              <a
                                   href="https://www.linkedin.com/company/valleynxtventures/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="ValleyNXT Ventures on LinkedIn, opens in a new tab"
                                   className="
                                        hover:text-text-main
                                        transition-colors
                                        duration-300

                                        focus:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-accent
                                   "
                              >
                                   LinkedIn
                              </a>

                              <a
                                   href="https://www.instagram.com/valleynxt_vc"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   aria-label="ValleyNXT Ventures on Instagram, opens in a new tab"
                                   className="
                                        hover:text-text-main
                                        transition-colors
                                        duration-300

                                        focus:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-accent
                                   "
                              >
                                   Instagram
                              </a>
                         </div>
                    </footer>
               </div>
          </>
     );
};

export default NavMenu;