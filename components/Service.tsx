
import React from 'react';

const Service: React.FC = () => {
  const packages = [
    {
      name: 'BASIC',
      price: '상담 후 안내',
      desc: '개인 사업자 및 초기 창업자를 위한 합리적인 스타트 패키지',
      features: ['로고 시안 2안 제안', '수정 2회 제공', '고해상도 원본 파일', '로고 사용 가이드 기초'],
      isPopular: false
    },
    {
      name: 'STANDARD',
      price: '상담 후 안내',
      desc: '브랜드의 본격적인 성장을 준비하는 비즈니스 실전 패키지',
      features: ['로고 시안 4안 제안', '무제한 수정 지원', '브랜드 전용 컬러/폰트 가이드', '명함 디자인 1종 서비스'],
      isPopular: true
    },
    {
      name: 'PREMIUM',
      price: '상담 후 안내',
      desc: '브랜드 아이덴티티를 완벽하게 구축하는 프리미엄 통합 패키지',
      features: ['로고 시안 6안 제안', '무제한 수정 지원', '응용 디자인 3종 (봉투, 서식 등)', '브랜드 가이드북 PDF 제공'],
      isPopular: false
    }
  ];

  return (
    <section id="service" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black tracking-widest text-point uppercase mb-4">Design Service</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">가격보다 앞선 브랜드의 <span className="text-point">진실된 가치</span></h3>
          <p className="text-neutral-500 max-w-2xl mx-auto font-medium leading-relaxed">로고마녀는 단순한 그림이 아닌 브랜드의 미래를 바꾸는 전략적 디자인을 추구합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative p-12 rounded-[40px] bg-white border transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 ${pkg.isPopular ? 'border-point shadow-xl shadow-violet-500/10' : 'border-neutral-100'}`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-12 -translate-y-1/2 bg-point text-white text-[10px] font-black px-5 py-2 rounded-full tracking-widest shadow-lg">
                  BEST CHOICE
                </div>
              )}
              <h4 className="text-2xl font-black mb-3 tracking-tighter">{pkg.name}</h4>
              <p className="text-neutral-400 text-sm mb-10 leading-relaxed font-medium">{pkg.desc}</p>
              <div className="text-3xl font-black mb-10 text-neutral-800">{pkg.price}</div>
              
              <ul className="space-y-5 mb-12">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-neutral-600 font-semibold">
                    <svg className="w-5 h-5 text-point mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`block w-full py-5 rounded-2xl text-center font-black text-sm transition-all shadow-md active:scale-95 ${pkg.isPopular ? 'bg-black text-white hover:bg-point' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
              >
                상담 예약하기
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
