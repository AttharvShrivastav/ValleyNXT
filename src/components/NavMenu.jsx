import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeProvider';

// Import both logo assets
import logoBlack from '../assets/LogoBlack.png';
import logoLight from '../assets/LogoWhite.png';

// A simple toggle component with Sun and Moon icons
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="text-text-main hover:text-accent transition-colors duration-300 p-2 rounded-full"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? (
                // Moon Icon
                <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
            ) : (
                // Sun Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            )}
        </button>
    );
};


const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // Get theme for the logo
  const menuContainer = useRef(null);
  const navLinksContainer = useRef(null);
  const menuButtonRef = useRef(null);
  const timelineRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    timelineRef.current = gsap.timeline({
      paused: true,
      onStart: () => {
        gsap.to(menuContainer.current, { display: 'flex' });
        document.body.style.overflow = 'hidden';
      },
      onReverseComplete: () => {
        gsap.set(menuContainer.current, { display: 'none' });
        gsap.to(menuButtonRef.current, { opacity: 1, duration: 0.5 });
        document.body.style.overflow = '';
      }
    });

    timelineRef.current.fromTo(menuContainer.current,
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    const linkSeparators = gsap.utils.toArray(navLinksContainer.current.querySelectorAll('.link-separator'));
    timelineRef.current.from(linkSeparators,
      { width: '0%', duration: 0.6, stagger: 0.05, ease: 'power2.out' },
      '-=0.4'
    );
    
    const linkItems = gsap.utils.toArray(navLinksContainer.current.querySelectorAll('.link-item'));
    timelineRef.current.fromTo(linkItems,
      { y: '20px', opacity: 0 },
      { y: '0px', opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    );

  }, { scope: menuContainer });

  useEffect(() => {
    if (!timelineRef.current) return;

    if (isOpen) {
      gsap.to(menuButtonRef.current, { opacity: 0, duration: 0.3 });
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <>
      <button
        ref={menuButtonRef}
        onClick={toggleMenu}
        className="fixed top-6 right-6 sm:top-8 sm:right-8 z-[100] text-text-main dark:text-text-secondary cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <div
        ref={menuContainer}
        className={`fixed inset-0 z-40 w-screen bg-background text-text-main flex flex-col justify-center font-primary font-light px-6 sm:px-8 hidden opacity-0`}
      >
        <Link to="/" onClick={toggleMenu} className="absolute top-2 left-6 sm:top-0 sm:left-8 z-50">
          <img 
            className='w-[80px] h-[80px] sm:w-[140px] sm:h-[140px]' 
            src={theme === 'light' ? logoBlack : logoLight} 
            alt="ValleyNXT Ventures Logo" 
          />
        </Link>
        
        {/* --- TOGGLE AND CLOSE BUTTON CONTAINER --- */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div ref={navLinksContainer} className="w-full max-w-none">
          
          <div className="link-separator h-0.5 bg-accent"></div>

          <div className="link-item overflow-hidden">
            <Link to="/" onClick={toggleMenu} className="relative block text-4xl md:text-5xl font-normal transition-colors duration-300 group">
              <span className="relative z-10 py-4 transition-colors font-primary duration-300 group-hover:text-accent block pl-8">HOME</span>
              <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-background/50 to-accent transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
          
          <div className="link-separator h-0.5 bg-accent"></div>
          
          <div className="link-item overflow-hidden">
            <Link to="/team" onClick={toggleMenu} className="relative block text-4xl md:text-5xl font-normal transition-colors duration-300 group">
              <span className="relative z-10 py-4 font-primary transition-colors duration-300 group-hover:text-accent block pl-8">TEAM</span>
              <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-background/50 to-accent transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
          
          <div className="link-separator h-0.5 bg-accent"></div>
          
          <div className="link-item overflow-hidden">
            <Link to="/portfolio" onClick={toggleMenu} className="relative block text-4xl md:text-5xl font-normal transition-colors duration-300 group">
              <span className="relative z-10 py-4 transition-colors font-primary duration-300 group-hover:text-accent block pl-8">PORTFOLIO</span>
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
          <a href="https://x.com/ValleyNXT_VC" target="_blank" rel="noopener noreferrer" className="block hover:text-text-main transition-colors duration-300">Twitter</a>
          <a href="https://www.linkedin.com/company/valleynxtventures/" target="_blank" rel="noopener noreferrer" className="block hover:text-text-main transition-colors duration-300">LinkedIn</a>
          <a href="https://www.instagram.com/valleynxt_vc?utm_source=ig_web_button_share_sheet&igsh=cWtqMzR1eWFsaXJx" target="_blank" rel="noopener noreferrer" className="block hover:text-text-main transition-colors duration-300">Instagram</a>
        </div>
      </div>
    </>
  );
};

export default NavMenu;