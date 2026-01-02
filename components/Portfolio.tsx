
import React, { useState } from 'react';
import { PortfolioItem, Category } from '../types.ts';

interface PortfolioProps {
  items: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ items }) => {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === 'All' 
    ? items 
    : items.filter(item => item.category === filter);

  const categories: Category[] = ['All', 'Cafe', 'Beauty', 'Startup', 'Personal', 'IT'];

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-black tracking-widest text-point uppercase mb-4">Design Portfolio</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              말보다는 결과물로 <br className="hidden md:block" />증명하겠습니다.
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-point text-white shadow-lg shadow-violet-500/30' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}
                >
                  {cat === 'All' ? '전체' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.imageUrls[0] || 'https://via.placeholder.com/800x600?text=No+Image'} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {item.imageUrls.length > 1 && (
                  <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    +{item.imageUrls.length - 1} Photos
                  </div>
                )}
                {item.isBeforeAfter && (
                  <div className="absolute top-6 right-6 bg-point/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    Before / After
                  </div>
                )}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl">
                  <p className="text-[10px] font-black text-point uppercase mb-1 tracking-wider">{item.applicationType}</p>
                  <p className="text-xs font-black text-black">{item.category}</p>
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black mb-3 group-hover:text-point transition-colors tracking-tight">{item.title}</h4>
                <p className="text-neutral-500 font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex flex-col items-center justify-center p-6 md:p-12">
          <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 text-white hover:text-point transition-colors text-4xl font-light">✕</button>
          <div className="max-w-5xl w-full flex flex-col gap-8 h-full">
            <div className="flex-1 overflow-y-auto space-y-6 pr-4 custom-scrollbar">
              {selectedItem.imageUrls.map((url, idx) => (
                <img key={idx} src={url} className="w-full rounded-2xl shadow-2xl" alt={`${selectedItem.title} - ${idx}`} />
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl text-white">
              <span className="text-point text-xs font-black uppercase tracking-widest mb-2 block">{selectedItem.category}</span>
              <h4 className="text-3xl font-black mb-4 tracking-tighter">{selectedItem.title}</h4>
              <p className="text-neutral-400 font-medium leading-relaxed">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
