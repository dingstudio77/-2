
import React from 'react';
import { REVIEWS } from '../constants.tsx';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-[#0f0a1a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <h2 className="text-sm font-black tracking-widest text-point uppercase mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">로고마녀와 함께한 <br />브랜드들의 실제 목소리</h3>
          </div>
          <div className="flex items-center gap-3 px-8 py-5 bg-violet-900/20 border border-violet-800/30 rounded-[30px] backdrop-blur-sm">
            <span className="text-point font-black text-3xl">5.0</span>
            <div className="flex text-point">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-neutral-500 text-xs font-bold ml-2 tracking-widest uppercase">Certified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-12 rounded-[40px] bg-white/5 border border-white/10 hover:border-violet-500/50 transition-all group backdrop-blur-md">
              <div className="flex items-center gap-5 mb-10">
                <img src={review.imageUrl} alt={review.author} className="w-16 h-16 rounded-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all border-2 border-transparent group-hover:border-point shadow-xl" />
                <div>
                  <h4 className="font-black text-xl tracking-tight">{review.author}</h4>
                  <p className="text-point text-[10px] font-black uppercase tracking-widest mt-1">{review.brand}</p>
                </div>
              </div>
              <p className="text-neutral-400 leading-relaxed italic font-medium text-lg">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
