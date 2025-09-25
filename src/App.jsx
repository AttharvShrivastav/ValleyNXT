import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider, useTheme } from './context/ThemeProvider';

import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import PortfolioPage from './pages/PortfolioPage';

import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

// Import both logo assets
import logoBlack from './assets/LogoBlack.png';
import logoLight from './assets/LogoWhite.png';

// ✅ Register the GSAP ScrollTrigger plugin once at the top level of your app
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="absolute h-24 w-full top-0 left-0 right-0 z-50 px-6 sm:px-12 flex items-center">
      <nav className="flex items-center justify-between w-full">
        <div className='h-full w-auto overflow-x-hidden'>
          <a href="/">
            <img 
              className='w-[80px] h-[80px] sm:w-[140px] sm:h-[140px]' 
              src={theme === 'light' ? logoBlack : logoLight} 
              alt="ValleyNXT Ventures Logo" 
            />
          </a>
        </div>
        <NavMenu />
      </nav>
    </header>
  );
};

// Layout component now handles scroll animation refreshing
const Layout = () => {
  const location = useLocation();

  // ✅ This effect runs every time the route changes.
  useEffect(() => {
    // A short timeout ensures the new page has rendered before recalculating.
    // This prevents ScrollTrigger from measuring the old page's layout.
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); 

    // Cleanup the timeout if the component unmounts before it fires
    return () => clearTimeout(timer);

  }, [location.pathname]); // The effect's dependency is the URL pathname

  return (
    // Corrected the typo from 'overflox-x-hidden'
    <div className='bg-background text-text-main overflow-x-hidden'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  );
}
