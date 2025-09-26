import {React, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider, useTheme } from './context/ThemeProvider';

import Preloader from './components/Preloader';
import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import PortfolioPage from './pages/PortfolioPage';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import logoBlack from './assets/LogoBlack.png';
import logoLight from './assets/LogoWhite.png';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="absolute h-24 w-full top-0 left-0 right-0 z-50 px-6 sm:px-12 flex items-center">
      <nav className="flex items-center justify-between w-full">
        <div className='h-full w-auto overflow-x-hidden'>
          <a href="/"><img className='w-[80px] h-[80px] sm:w-[140px] sm:h-[140px]' src={theme === 'light' ? logoBlack : logoLight} alt="ValleyNXT Ventures Logo" /></a>
        </div>
        <NavMenu />
      </nav>
    </header>
  );
};

// ✅ CHANGE: The Layout component now accepts and spreads extra props (...props)
const Layout = ({ startAnimations, ...props }) => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    // ✅ CHANGE: The style prop (containing visibility) is now applied here
    <div className='bg-background text-text-main overflow-x-hidden' {...props}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage startAnimations={startAnimations} />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
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
        {/* ✅ CHANGE: The style prop is passed to Layout to control visibility */}
        <Layout 
          startAnimations={isPreloaderFinished} 
          style={{ visibility: isPreloaderFinished ? 'visible' : 'hidden' }}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}