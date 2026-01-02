
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { title: '브랜드 탐색', desc: '브랜드의 본질과 지향점을 깊이 있게 대화하며 디자인의 핵심 재료를 모읍니다.' },
    { title: '전략적 분석', desc: '경쟁 시장을 분석하고 차별화된 키워드와 컨셉을 도출하여 뼈대를 잡습니다.' },
    { title: '아이디어 구체화', desc: '추출된 전략을 바탕으로 브랜드만의 독창적인 로고 시안을 탄생시킵니다.' },
    { title: '정교한 정제', desc: '제안된 시안 중 가장 적합한 아이디어를 정교하게 다듬고 완성도를 높입니다.' },
    { title: '가이드 전달', desc: '완성된 브랜드 아이덴티티가 현장에서 힘을 발휘하도록 원본과 가이드를 전달합니다.' },
  ];

  return (
    <section id="process" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-widest text-point uppercase mb-4">Design Process</h2>
          <h3 className="text-4xl font-black tracking-tighter">체계적인 공정으로 <br />최상의 결과물을 완성합니다.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-neutral-100 border border-neutral-100 rounded-3xl overflow-hidden shadow-sm">
          {steps.map((step, idx) => (
            <div key={idx} className="p-10 bg-white hover:bg-violet-50/50 transition-colors group">
              <div className="text-point font-black text-4xl mb-8 opacity-10 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
