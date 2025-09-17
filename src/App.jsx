import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TeamsPage from './pages/TeamsPage';
import PortfolioPage from './pages/PortfolioPage';

import NavMenu from './components/NavMenu';
import MyLogo from './assets/LOGO 1.png';
import Footer from './components/Footer';

const Header = () => {
  return (
    <header className="absolute h-[70px] w-full top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <img className='w-[80px] h-[40px] sm:w-[140px] sm:h-[70px]' src={MyLogo} alt="ValleyNXT Ventures Logo" />
        </Link>
        <NavMenu />
      </nav>
    </header>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <BrowserRouter>
      <div className='bg-black'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}