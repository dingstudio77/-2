
import React from 'react';

const Trust: React.FC = () => {
  const stats = [
    { label: '누적 로고 디자인', value: '250+', sub: 'Projects' },
    { label: '평균 고객 만족도', value: '5.0', sub: '/ 5.0' },
    { label: '기존 고객 재의뢰율', value: '68%', sub: 'Retention' },
    { label: '협업 브랜드 수', value: '180+', sub: 'Brands' },
  ];

  const partners = [
    'Logo One', 'Brand Two', 'Studio Three', 'Creative Four', 'Global Five', 'Local Six'
  ];

  return (
    <section className="py-24 bg-[#0f0a1a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <p className="text-neutral-500 text-sm font-bold mb-3">{stat.label}</p>
              <div className="flex items-baseline justify-center md:justify-start gap-1">
                <span className="text-4xl md:text-5xl font-black tracking-tight">{stat.value}</span>
                <span className="text-point font-black text-sm">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-24 border-t border-violet-900/30">
          <p className="text-center text-neutral-500 text-[10px] font-black tracking-widest uppercase mb-12">Trusted By Expert Professionals</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-20 grayscale contrast-125">
             {partners.map((p, i) => (
               <span key={i} className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">{p}</span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
