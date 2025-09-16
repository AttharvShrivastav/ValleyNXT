// src/components/NavMenu.jsx

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import MyLogo from '../assets/LOGO 1.png';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuContainer = useRef(null);
  const navLinksContainer = useRef(null);
  const menuButtonRef = useRef(null);
  const timelineRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    // Create the timeline once and configure its callbacks
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

    // Animate menu container sliding in
    timelineRef.current.fromTo(menuContainer.current,
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    // Animate separators
    const linkSeparators = gsap.utils.toArray(navLinksContainer.current.querySelectorAll('.link-separator'));
    timelineRef.current.from(linkSeparators,
      { width: '0%', duration: 0.6, stagger: 0.05, ease: 'power2.out' },
      '-=0.4'
    );
    
    // Animate nav links
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
        className="fixed top-8 right-8 z-50 text-white font-primary font-light text-xl cursor-pointer"
      >
        Menu
      </button>

      <div
        ref={menuContainer}
        className={`fixed inset-0 z-40 bg-black flex flex-col justify-center text-white font-primary font-light px-8 hidden opacity-0`}
      >
        <Link to="/" onClick={toggleMenu} className="absolute top-8 left-8 z-50">
          <img className='w-[140px] h-[70px]' src={MyLogo} alt="ValleyNXT Ventures Logo" />
        </Link>
        
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-8 text-xl font-light cursor-pointer"
        >
          X
        </button>
        
        <div ref={navLinksContainer} className="w-full max-w-none">
          
          <div className="link-separator h-0.5 bg-[#F47A36]"></div>

          <div className="link-item overflow-hidden">
            <Link to="/" onClick={toggleMenu} className="relative block text-4xl md:text-5xl font-normal transition-colors duration-300 group">
              <span className="relative z-10 py-4 transition-colors duration-300 group-hover:text-[#F47A36] block pl-8">HOME</span>
              <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-[#0000005b] to-[#F47A36] transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
          
          <div className="link-separator h-0.5 bg-[#F47A36]"></div>
          
          <div className="link-item overflow-hidden">
            <Link to="/team" onClick={toggleMenu} className="relative block text-4xl md:text-5xl font-normal transition-colors duration-300 group">
              <span className="relative z-10 py-4 transition-colors duration-300 group-hover:text-[#F47A36] block pl-8">TEAM</span>
              <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-[#0000005b] to-[#F47A36] transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
          
          <div className="link-separator h-0.5 bg-[#F47A36]"></div>
          
          <div className="link-item overflow-hidden">
            <Link to="/portfolio" onClick={toggleMenu} className="relative block text-4xl md:text-5xl font-normal transition-colors duration-300 group">
              <span className="relative z-10 py-4 transition-colors duration-300 group-hover:text-[#F47A36] block pl-8">PORTFOLIO</span>
              <div className="absolute top-0 right-0 h-full w-0 bg-gradient-to-r from-[#0000005b] to-[#F47A36] transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </div>
          
          <div className="link-separator h-0.5 bg-[#F47A36]"></div>
        </div>

        <div className="absolute bottom-8 left-8 text-sm text-gray-400 font-light">
          <p>Address</p>
          <p>123 Main St</p>
          <p>City, State, ZIP</p>
        </div>
        
        <div className="absolute bottom-8 right-8 text-sm text-gray-400 font-light space-y-2">
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors duration-300">Behance</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors duration-300">Dribbble</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors duration-300">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors duration-300">Instagram</a>
        </div>
      </div>
    </>
  );
};

export default NavMenu;