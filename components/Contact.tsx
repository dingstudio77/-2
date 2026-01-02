
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-sm font-black tracking-widest text-point uppercase mb-6">Contact Us</h2>
            <h3 className="text-5xl md:text-6xl font-black leading-tight mb-10 tracking-tighter">로고 하나로 <br />브랜드의 가치가 <br /><span className="text-point">완성</span>됩니다.</h3>
            <p className="text-lg text-neutral-500 font-medium mb-16 leading-relaxed">
              더 이상 고민하지 마세요. <br />
              로고마녀가 당신의 브랜드에 가장 강력한 <br />
              시각적 아이덴티티를 구축해드리겠습니다.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-neutral-200/50 text-point">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="font-black text-xl tracking-tight">010-8888-9999</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-neutral-200/50 text-point">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p className="font-black text-xl tracking-tight">magic@logowitch.kr</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[60px] shadow-2xl shadow-violet-500/5 border border-neutral-100">
            <h4 className="text-3xl font-black mb-10 tracking-tighter">무료 상담 신청</h4>
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('상담 신청이 완료되었습니다. 로고마녀가 곧 연락드릴게요!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">이름</label>
                  <input type="text" placeholder="성함" className="w-full px-6 py-5 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-point transition-all outline-none font-bold" required />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">연락처</label>
                  <input type="tel" placeholder="010-0000-0000" className="w-full px-6 py-5 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-point transition-all outline-none font-bold" required />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">브랜드명</label>
                <input type="text" placeholder="운영 중이거나 준비 중인 브랜드" className="w-full px-6 py-5 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-point transition-all outline-none font-bold" required />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest ml-1">선호하는 디자인 스타일</label>
                <select className="w-full px-6 py-5 bg-neutral-50 border-none rounded-2xl focus:ring-2 focus:ring-point transition-all outline-none appearance-none cursor-pointer font-bold text-neutral-800">
                  <option>미니멀 & 심플</option>
                  <option>럭셔리 & 프리미엄</option>
                  <option>트렌디 & 유니크</option>
                  <option>클래식 & 헤리티지</option>
                  <option>전문가 추천 희망</option>
                </select>
              </div>
              <button type="submit" className="w-full py-6 bg-black text-white rounded-[20px] font-black text-xl hover:bg-point shadow-xl shadow-violet-500/20 transition-all active:scale-95">
                상담 신청하기
              </button>
            </form>
            <p className="mt-8 text-center text-[10px] text-neutral-400 font-bold uppercase tracking-widest">Witch will call you within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
