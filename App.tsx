
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Portfolio from './components/Portfolio.tsx';
import Trust from './components/Trust.tsx';
import Service from './components/Service.tsx';
import Process from './components/Process.tsx';
import Reviews from './components/Reviews.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AdminPortal from './components/AdminPortal.tsx';
import { PortfolioItem } from './types.ts';
import { INITIAL_PORTFOLIO } from './constants.tsx';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const savedPortfolio = localStorage.getItem('logo_portfolio');
    if (savedPortfolio) {
      try {
        setPortfolio(JSON.parse(savedPortfolio));
      } catch (e) {
        setPortfolio(INITIAL_PORTFOLIO);
      }
    } else {
      setPortfolio(INITIAL_PORTFOLIO);
      localStorage.setItem('logo_portfolio', JSON.stringify(INITIAL_PORTFOLIO));
    }

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          if (!targetId || targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const element = document.getElementById(targetId);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const updatePortfolio = (newItems: PortfolioItem[]) => {
    try {
      localStorage.setItem('logo_portfolio', JSON.stringify(newItems));
      setPortfolio(newItems);
      alert('변경사항이 성공적으로 저장되었습니다.');
      return true;
    } catch (e: any) {
      if (e.name === 'QuotaExceededError') {
        alert('저장 공간이 부족합니다! 이미지 용량을 줄여주세요.');
      } else {
        alert('저장 중 오류가 발생했습니다.');
      }
      return false;
    }
  };

  return (
    <div className="relative antialiased">
      <Navbar onAdminClick={() => setIsAdminOpen(true)} />
      <main>
        <Hero />
        <Portfolio items={portfolio} />
        <Trust />
        <Service />
        <Process />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {isAdminOpen && (
        <AdminPortal items={portfolio} onClose={() => setIsAdminOpen(false)} onSave={updatePortfolio} />
      )}
    </div>
  );
};

export default App;
