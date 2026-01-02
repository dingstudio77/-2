
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onAdminClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '포트폴리오', id: 'portfolio' },
    { name: '서비스', id: 'service' },
    { name: '프로세스', id: 'process' },
    { name: '후기', id: 'reviews' },
    { name: '문의', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}
        >
          로고<span className="text-point">마녀</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} 
              className={`text-sm font-semibold transition-colors hover:text-point ${isScrolled ? 'text-neutral-600' : 'text-neutral-200'}`}
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={onAdminClick}
            type="button"
            className={`text-[10px] px-2.5 py-1 border rounded-md transition-all font-bold ${isScrolled ? 'border-neutral-200 text-neutral-400 hover:border-violet-400 hover:text-violet-500' : 'border-neutral-800 text-neutral-600 hover:border-white hover:text-white'}`}
          >
            ADMIN
          </button>
        </div>

        <a 
          href="#contact" 
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg active:scale-95 ${isScrolled ? 'bg-black text-white hover:bg-point' : 'bg-white text-black hover:bg-neutral-100'}`}
        >
          전문 상담 신청
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
