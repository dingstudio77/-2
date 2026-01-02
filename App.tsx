
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Trust from './components/Trust';
import Service from './components/Service';
import Process from './components/Process';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';
import { PortfolioItem } from './types';
import { INITIAL_PORTFOLIO } from './constants';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const savedPortfolio = localStorage.getItem('logo_portfolio');
    if (savedPortfolio) {
      try {
        setPortfolio(JSON.parse(savedPortfolio));
      } catch (e) {
        console.error("Failed to parse saved portfolio", e);
        setPortfolio(INITIAL_PORTFOLIO);
      }
    } else {
      setPortfolio(INITIAL_PORTFOLIO);
      localStorage.setItem('logo_portfolio', JSON.stringify(INITIAL_PORTFOLIO));
    }

    // Global interceptor for all internal anchor links to prevent iframe navigation issues
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        // Only intercept internal hash links starting with #
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          
          if (!targetId || targetId === '' || targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const updatePortfolio = (newItems: PortfolioItem[]) => {
    try {
      const serializedData = JSON.stringify(newItems);
      localStorage.setItem('logo_portfolio', serializedData);
      setPortfolio(newItems);
      alert('변경사항이 성공적으로 저장되었습니다.');
      return true;
    } catch (e: any) {
      console.error('Storage failed', e);
      if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        alert('저장 공간이 부족합니다! \n\n이미지 파일 용량이 너무 크거나 이미지가 너무 많습니다. \n이미지 크기를 줄이거나 불필요한 이미지를 삭제한 후 다시 시도해주세요.');
      } else {
        alert('저장 중 알 수 없는 오류가 발생했습니다.');
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

      {/* Admin Portal Overlay */}
      {isAdminOpen && (
        <AdminPortal 
          items={portfolio} 
          onClose={() => setIsAdminOpen(false)} 
          onSave={updatePortfolio}
        />
      )}
    </div>
  );
};

export default App;
