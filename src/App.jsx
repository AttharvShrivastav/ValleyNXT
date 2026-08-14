import { Link } from 'react-router-dom'; // Make sure this is imported at the top!
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider, useTheme } from './context/ThemeProvider';

import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import PortfolioPage from './pages/PortfolioPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer'; // Re-imported Footer
import logoBlack from './assets/LogoBlack.png';
import logoLight from './assets/LogoWhite.png';
import AcceleratorPage from './pages/AcceleratorPage';
import WikiPage from './pages/WikiPage';
import { AccessibilityGrievancePage } from './pages/AccessibilityGrievancePage';
import SingleBlogPage from './pages/SingleBlogPage';
import InsightsEventsPage from './pages/InsightsEventsPage';
import GrievanceRedressalPolicyPage from "./pages/GrievanceRedressalPolicyPage";
import StewardshipCodePage from "./pages/StewardshipCodePage";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="absolute h-24 w-full top-0 left-0 right-0 z-50 px-6 sm:px-12 flex items-center">
      <nav className="flex items-center justify-between w-full">
        
        {/* ACCESSIBILITY FIX: Removed overflow-x-hidden so the focus ring can be seen */}
        <div className='h-full w-auto'>
          
          {/* ACCESSIBILITY & REACT FIX: Changed <a> to <Link> and added focus ring styles */}
          <Link 
            to="/" 
            className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <img 
              className='w-[80px] h-[80px] sm:w-[140px] sm:h-[140px]' 
              src={theme === 'light' ? logoBlack : logoLight} 
              alt="ValleyNXT Ventures - Return to Home" 
            />
          </Link>
          
        </div>
        
        <NavMenu />
      </nav>
    </header>
  );
};
const Layout = ({ startAnimations, ...props }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <div className='bg-background overflow-x-hidden text-text-main' {...props}>
      
      {/* ACCESSIBILITY FIX: Skip to Main Content Link (SC 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-background focus:text-text-main focus:font-semibold focus:border focus:border-text-main"
      >
        Skip to main content
      </a>

      <Header />
      
      {/* ACCESSIBILITY FIX: Main Content Landmark (SC 1.3.1) */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<HomePage startAnimations={startAnimations} />} />
          <Route path="/team" element={<TeamsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/accelerator" element={<AcceleratorPage />} />
          
          {/* NEW ROUTES - Untouched */}
          <Route path="/wiki" element={<WikiPage />} />
          <Route path="/wiki/:slug" element={<SingleBlogPage />} /> 
          <Route path="/insights-and-events" element={<InsightsEventsPage />} />
          <Route path="/accessibility-grievance" element={<AccessibilityGrievancePage />} />
          <Route
              path="/grievance-redressal-policy"
              element={<GrievanceRedressalPolicyPage />}
          />

          <Route
              path="/stewardship-code"
              element={<StewardshipCodePage />}
          />
        </Routes>
      </main>

      {/* FOOTER: Kept completely separate from main for GSAP scroll calculations */}
      {/* <Footer /> */}
    </div>
  );
};

export default function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 500);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <ThemeProvider>
      {!isPreloaderFinished && (
        <Preloader
          isLoaded={isPageLoaded}
          onExitComplete={() => setIsPreloaderFinished(true)}
        />
      )}
      <BrowserRouter>
        <Layout
          startAnimations={isPreloaderFinished}
          style={{ visibility: isPreloaderFinished ? 'visible' : 'hidden' }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}