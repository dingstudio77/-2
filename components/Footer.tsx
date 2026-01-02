
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <a href="#home" className="text-xl font-black tracking-tighter mb-4 inline-block">
            로고<span className="text-point">마녀</span>
          </a>
          <p className="text-neutral-400 text-xs font-medium">브랜드의 가치를 시각화하는 전문 디자인 스튜디오</p>
          <p className="text-neutral-300 text-[10px] mt-2 font-medium">© 2024 LogoWitch Studio. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-bold text-neutral-400">
          <a href="#home" className="hover:text-point transition-colors">이용약관</a>
          <a href="#home" className="hover:text-point transition-colors text-neutral-800">개인정보처리방침</a>
          <a href="#portfolio" className="hover:text-point transition-colors">포트폴리오</a>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-point hover:text-white transition-all shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-point hover:text-white transition-all shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
