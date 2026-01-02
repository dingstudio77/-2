
import React, { useState } from 'react';
import { FAQS } from '../constants.tsx';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black tracking-widest text-point uppercase mb-4">Witch's FAQ</h2>
          <h3 className="text-4xl font-black tracking-tighter">궁금하신 점을 풀어드릴게요.</h3>
        </div>
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-neutral-100 rounded-[30px] overflow-hidden transition-all duration-300 hover:border-violet-200">
              <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full px-10 py-8 flex items-center justify-between bg-white hover:bg-violet-50/30 transition-colors">
                <span className="text-lg font-black text-left tracking-tight">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIdx === idx ? 'bg-point text-white rotate-180' : 'bg-neutral-100 text-neutral-400'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-10 pb-10 text-neutral-500 font-semibold leading-relaxed text-base">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
