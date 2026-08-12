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
               className="text-text-main hover:text-accent transition-colors duration-300 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
               aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
               {theme === "light" ? (
                    <svg
                         aria-hidden="true"
                         focusable="false"
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-6 w-6"
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
                         className="h-6 w-6"
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

const NavMenu = () => {
     const [isOpen, setIsOpen] = useState(false);
     const { theme } = useTheme();
     const menuContainer = useRef(null);
     const navLinksContainer = useRef(null);
     const menuButtonRef = useRef(null);
     const closeButtonRef = useRef(null);
     const timelineRef = useRef(null);

     const toggleMenu = () => {
          setIsOpen(!isOpen);
     };

     useGSAP(
          () => {
               timelineRef.current = gsap.timeline({
                    paused: true,
                    onStart: () => {
                         gsap.to(menuContainer.current, { display: "flex" });
                         document.body.style.overflow = "hidden";
                    },
                    onReverseComplete: () => {
                         gsap.set(menuContainer.current, { display: "none" });
                         gsap.to(menuButtonRef.current, {
                              opacity: 1,
                              duration: 0.5,
                         });
                         document.body.style.overflow = "";
                    },
               });

               timelineRef.current.fromTo(
                    menuContainer.current,
                    { x: "-100%", opacity: 0 },
                    { x: "0%", opacity: 1, duration: 0.8, ease: "power3.out" },
               );

               const linkSeparators = gsap.utils.toArray(".link-separator");
               timelineRef.current.from(
                    linkSeparators,
                    {
                         width: "0%",
                         duration: 0.6,
                         stagger: 0.05,
                         ease: "power2.out",
                    },
                    "-=0.4",
               );

               const linkItems = gsap.utils.toArray(".link-item");
               timelineRef.current.fromTo(
                    linkItems,
                    { y: "20px", opacity: 0 },
                    {
                         y: "0px",
                         opacity: 1,
                         stagger: 0.1,
                         duration: 0.5,
                         ease: "power2.out",
                    },
                    "-=0.2",
               );
          },
          { scope: menuContainer },
     );

     useEffect(() => {
          if (!timelineRef.current) return;

          if (isOpen) {
               gsap.to(menuButtonRef.current, { opacity: 0, duration: 0.3 });
               timelineRef.current.play();

               // ACCESSIBILITY FIX: Instant focus so the user doesn't wait 1.5s for GSAP to finish
               setTimeout(() => {
                    closeButtonRef.current?.focus();
               }, 50);
          } else {
               timelineRef.current.reverse().then(() => {
                    menuButtonRef.current?.focus();
               });
          }
     }, [isOpen]);

     // Focus Trap and Escape Key logic
     useEffect(() => {
          const handleKeyDown = (e) => {
               if (!isOpen) return;

               if (e.key === "Escape") {
                    setIsOpen(false);
                    return;
               }

               if (e.key === "Tab") {
                    const focusableElements =
                         menuContainer.current.querySelectorAll(
                              "a[href], button:not([disabled]), textarea, input, select",
                         );
                    const firstElement = focusableElements[0];
                    const lastElement =
                         focusableElements[focusableElements.length - 1];

                    if (e.shiftKey) {
                         // Reverse Tab
                         if (document.activeElement === firstElement) {
                              lastElement.focus();
                              e.preventDefault();
                         }
                    } else {
                         // Forward Tab
                         if (document.activeElement === lastElement) {
                              firstElement.focus();
                              e.preventDefault();
                         }
                    }
               }
          };

          window.addEventListener("keydown", handleKeyDown);
          return () => window.removeEventListener("keydown", handleKeyDown);
     }, [isOpen]);

     return (
          <>
               <button
                    ref={menuButtonRef}
                    onClick={toggleMenu}
                    // ACCESSIBILITY FIX: Dynamic aria-label based on state
                    aria-label={isOpen ? "Close main menu" : "Open main menu"}
                    aria-expanded={isOpen}
                    aria-controls="nav-menu-container"
                    className="fixed top-6 right-6 sm:top-8 sm:right-8 z-[100] text-text-main dark:text-text-secondary cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
               >
                    <svg
                         aria-hidden="true"
                         focusable="false"
                         xmlns="http://www.w3.org/2000/svg"
                         className="h-8 w-8"
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

               <div
                    id="nav-menu-container"
                    ref={menuContainer}
                    className={`fixed inset-0 z-40 w-screen bg-background text-text-main flex flex-col justify-center font-primary font-light px-6 sm:px-8 hidden opacity-0`}
               >
                    <Link
                         to="/"
                         onClick={toggleMenu}
                         className="absolute top-2 left-6 sm:top-0 sm:left-8 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                    >
                         <img
                              className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px]"
                              src={theme === "light" ? logoBlack : logoLight}
                              alt="ValleyNXT Ventures Logo"
                         />
                    </Link>

                    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 flex items-center gap-4">
                         <ThemeToggle />
                         <button
                              ref={closeButtonRef}
                              onClick={toggleMenu}
                              aria-label="Close main menu"
                              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-2"
                         >
                              <svg
                                   aria-hidden="true"
                                   focusable="false"
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-8 w-8"
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

                    <div
                         ref={navLinksContainer}
                         className="w-full max-w-none"
                    >
                         <div className="link-separator h-0.5 bg-accent"></div>

                         <div className="link-item overflow-hidden">
                              <Link
                                   to="/"
                                   onClick={toggleMenu}
                                   className="relative block text-3xl md:text-4xl font-normal transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                              >
                                   <span className="relative z-10 py-3 transition-colors font-primary duration-300 group-hover:text-accent block pl-8">
                                        HOME
                                   </span>
                                   <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-background/50 to-accent transition-all duration-300 group-hover:w-full"></div>
                              </Link>
                         </div>

                         <div className="link-separator h-0.5 bg-accent"></div>
                         <div className="link-item overflow-hidden">
                              <Link
                                   to="/team"
                                   onClick={toggleMenu}
                                   className="relative block text-3xl md:text-4xl font-normal transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                              >
                                   <span className="relative z-10 py-3 font-primary transition-colors duration-300 group-hover:text-accent block pl-8">
                                        TEAM
                                   </span>
                                   <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-background/50 to-accent transition-all duration-300 group-hover:w-full"></div>
                              </Link>
                         </div>

                         <div className="link-separator h-0.5 bg-accent"></div>
                         <div className="link-item overflow-hidden">
                              <Link
                                   to="/portfolio"
                                   onClick={toggleMenu}
                                   className="relative block text-3xl md:text-4xl font-normal transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                              >
                                   <span className="relative z-10 py-3 transition-colors font-primary duration-300 group-hover:text-accent block pl-8">
                                        PORTFOLIO
                                   </span>
                                   <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-background/50 to-accent transition-all duration-300 group-hover:w-full"></div>
                              </Link>
                         </div>

                         <div className="link-separator h-0.5 bg-accent"></div>
                         <div className="link-item overflow-hidden">
                              <Link
                                   to="/accelerator"
                                   onClick={toggleMenu}
                                   className="relative block text-3xl md:text-4xl font-normal transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                              >
                                   <span className="relative z-10 py-3 transition-colors font-primary duration-300 group-hover:text-accent block pl-8">
                                        ACCELERATOR
                                   </span>
                                   <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-background/50 to-accent transition-all duration-300 group-hover:w-full"></div>
                              </Link>
                         </div>

                         <div className="link-separator h-0.5 bg-accent"></div>
                         <div className="link-item overflow-hidden">
                              <Link
                                   to="/wiki"
                                   onClick={toggleMenu}
                                   className="relative block text-3xl md:text-4xl font-normal transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                              >
                                   <span className="relative z-10 py-3 transition-colors font-primary duration-300 group-hover:text-accent block pl-8">
                                        VALLEYNXT WIKI
                                   </span>
                                   <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-background/50 to-accent transition-all duration-300 group-hover:w-full"></div>
                              </Link>
                         </div>

                         <div className="link-separator h-0.5 bg-accent"></div>
                         <div className="link-item overflow-hidden">
                              <Link
                                   to="/insights-and-events"
                                   onClick={toggleMenu}
                                   className="relative block text-3xl md:text-4xl font-normal transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                              >
                                   <span className="relative z-10 py-3 transition-colors font-primary duration-300 group-hover:text-accent block pl-8">
                                        INSIGHTS & EVENTS
                                   </span>
                                   <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-background/50 to-accent transition-all duration-300 group-hover:w-full"></div>
                              </Link>
                         </div>
                         <div className="link-separator h-0.5 bg-accent"></div>
                    </div>

                    <div className="absolute bottom-8 left-6 sm:left-8 text-xs sm:text-sm text-text-secondary font-light">
                         <p>195, Asco Capital </p>
                         <p>Sch.No.78 Part II Near Daisy Dales School</p>
                         <p>Indore, Madhya Pradesh</p>
                    </div>

                    <div className="absolute bottom-8 right-6 sm:right-8 text-xs sm:text-sm text-text-secondary font-light space-y-2">
                         <a
                              href="https://x.com/ValleyNXT_VC"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="ValleyNXT Ventures on Twitter, opens in a new tab"
                              className="block hover:text-text-main transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                         >
                              Twitter
                         </a>
                         <a
                              href="https://www.linkedin.com/company/valleynxtventures/"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="ValleyNXT Ventures on LinkedIn, opens in a new tab"
                              className="block hover:text-text-main transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                         >
                              LinkedIn
                         </a>
                         <a
                              href="https://www.instagram.com/valleynxt_vc"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="ValleyNXT Ventures on Instagram, opens in a new tab"
                              className="block hover:text-text-main transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                         >
                              Instagram
                         </a>
                    </div>
               </div>
          </>
     );
};

export default NavMenu;