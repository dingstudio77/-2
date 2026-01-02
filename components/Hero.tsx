
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[750px] flex items-center overflow-hidden hero-gradient text-white">
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-violet-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] border border-violet-900 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-violet-600 blur-[100px] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-violet-800/50 bg-violet-950/30 text-violet-300 text-xs font-bold mb-8 tracking-widest uppercase backdrop-blur-sm">
            Premium Logo Branding Studio
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter">
            브랜드의 첫인상,<br />
            <span className="text-point">로고마녀</span>가 만드는 가치.
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 mb-12 font-medium leading-relaxed max-w-2xl">
            단순히 예쁜 그림이 아닙니다. <br />
            브랜드의 본질을 꿰뚫어 보는 통찰력으로 <br />
            고객의 신뢰를 얻는 전문적인 로고를 디자인합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#portfolio" 
              className="px-10 py-4 bg-point text-white rounded-xl font-bold text-center hover:bg-violet-500 shadow-point transition-all transform hover:-translate-y-1"
            >
              포트폴리오 보기
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 border border-neutral-700 rounded-xl font-bold text-center hover:bg-neutral-800 hover:border-neutral-500 transition-all backdrop-blur-sm"
            >
              1:1 상담 예약
            </a>
          </div>
        </div>
      </div>

      {/* Floating Image / Visual Element */}
      <div className="absolute right-0 bottom-0 hidden lg:block w-2/5 h-4/5 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1634942537034-2531766767d7?q=80&w=1000&auto=format&fit=crop" 
          alt="Premium Logo Mockup" 
          className="w-full h-full object-cover transition-all duration-1000"
          style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1a] via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
