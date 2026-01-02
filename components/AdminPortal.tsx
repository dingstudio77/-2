
import React, { useState, useRef } from 'react';
import { PortfolioItem } from '../types';

interface AdminPortalProps {
  items: PortfolioItem[];
  onClose: () => void;
  onSave: (items: PortfolioItem[]) => boolean;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ items, onClose, onSave }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingItems, setEditingItems] = useState<PortfolioItem[]>(items);
  const [isSaving, setIsSaving] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1111') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const addItem = () => {
    const newItem: PortfolioItem = {
      id: Date.now().toString(),
      category: 'Startup',
      title: '새로운 프로젝트',
      description: '간략한 설명',
      imageUrls: [],
      applicationType: 'Mockup',
      isBeforeAfter: false
    };
    setEditingItems([newItem, ...editingItems]);
  };

  const removeItem = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      setEditingItems(editingItems.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, updates: Partial<PortfolioItem>) => {
    setEditingItems(editingItems.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const handleFileUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    (Array.from(files) as File[]).forEach((file: File) => {
      // 용량 체크 (개별 파일 1MB 권장)
      if (file.size > 1024 * 1024 * 2) {
        alert(`${file.name}의 용량이 너무 큽니다. 2MB 이하의 이미지를 권장합니다.`);
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setEditingItems(prev => prev.map(item => 
          item.id === id 
            ? { ...item, imageUrls: [...item.imageUrls, base64String] } 
            : item
        ));
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

  const removeImage = (itemId: string, imgIndex: number) => {
    setEditingItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, imageUrls: item.imageUrls.filter((_, i) => i !== imgIndex) } 
        : item
    ));
  };

  const handleSave = () => {
    setIsSaving(true);
    // setTimeout을 사용하여 UI가 업데이트될 시간을 줍니다.
    setTimeout(() => {
      const success = onSave(editingItems);
      setIsSaving(false);
      if (success) {
        onClose();
      }
    }, 100);
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6">
        <div className="bg-[#1a102e] border border-violet-900/50 p-10 rounded-3xl w-full max-w-md shadow-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-8 tracking-tighter">로고<span className="text-point">마녀</span> ADMIN</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호 (1111)" 
              className="w-full px-5 py-4 bg-neutral-900 border border-violet-900/30 rounded-xl text-white outline-none focus:ring-2 focus:ring-point text-center font-black tracking-widest"
              autoFocus
            />
            <div className="flex gap-4">
              <button type="button" onClick={onClose} className="flex-1 py-4 text-neutral-400 font-bold hover:text-white transition-colors">취소</button>
              <button type="submit" className="flex-1 py-4 bg-point text-white rounded-xl font-bold hover:bg-violet-500 transition-all">관리자 입장</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-neutral-50 flex flex-col">
      <div className="bg-white border-b border-neutral-200 px-8 py-5 flex justify-between items-center shrink-0">
        <h2 className="text-xl font-black tracking-tighter">로고<span className="text-point">마녀</span> 관리자</h2>
        <div className="flex gap-3">
          <button 
            disabled={isSaving}
            onClick={onClose} 
            className="px-6 py-2.5 rounded-xl font-bold text-neutral-500 hover:bg-neutral-100 transition-all disabled:opacity-50"
          >
            취소
          </button>
          <button 
            disabled={isSaving}
            onClick={handleSave} 
            className={`px-8 py-2.5 bg-point text-white rounded-xl font-bold transition-all shadow-lg shadow-violet-500/20 flex items-center gap-2 ${isSaving ? 'opacity-70 cursor-wait' : 'hover:bg-violet-600'}`}
          >
            {isSaving ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                저장 중...
              </>
            ) : '변경사항 저장'}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 p-4 bg-violet-50 border border-violet-100 rounded-2xl text-violet-700 text-xs font-medium leading-relaxed">
            💡 <strong>안내:</strong> 브라우저 저장 공간의 한계로 인해 너무 많은 고해상도 이미지는 저장이 되지 않을 수 있습니다. 
            <br /> 가급적 1MB 이하로 최적화된 이미지를 사용하시기를 권장합니다.
          </div>
          
          <button 
            onClick={addItem}
            className="w-full py-10 border-2 border-dashed border-violet-200 rounded-3xl mb-10 text-violet-300 font-bold hover:border-point hover:text-point transition-all bg-white group"
          >
            <span className="text-2xl block mb-2 group-hover:scale-125 transition-transform">+</span>
            포트폴리오 프로젝트 추가
          </button>

          <div className="space-y-8">
            {editingItems.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm relative group grid grid-cols-1 lg:grid-cols-3 gap-10">
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute -top-3 -right-3 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
                >
                  ✕
                </button>
                
                {/* Image Upload Area */}
                <div className="lg:col-span-1 space-y-4">
                  <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest block mb-2">Project Images</label>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {item.imageUrls.map((url, idx) => (
                      <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-neutral-100">
                        <img src={url} className="w-full h-full object-cover" />
                        <button 
                          onClick={() => removeImage(item.id, idx)}
                          className="absolute top-1 right-1 w-6 h-6 bg-black/50 text-white rounded-full flex items-center justify-center text-[10px] hover:bg-red-500 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                    <label className="aspect-square rounded-xl border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center cursor-pointer hover:border-point hover:bg-violet-50 transition-all">
                      <span className="text-xl text-neutral-300">+</span>
                      <span className="text-[8px] font-bold text-neutral-400">파일 선택</span>
                      <input 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileUpload(item.id, e)}
                      />
                    </label>
                  </div>
                  <p className="text-[8px] text-neutral-400 leading-tight">* 여러 장 선택 가능 (한 장당 2MB 미만 권장)</p>
                </div>

                {/* Info Input Area */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-neutral-400 uppercase">Category</label>
                      <select 
                        value={item.category}
                        onChange={(e) => updateItem(item.id, { category: e.target.value as PortfolioItem['category'] })}
                        className="w-full p-4 bg-neutral-50 border-none rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-point transition-all"
                      >
                        <option value="Cafe">Cafe</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Startup">Startup</option>
                        <option value="Personal">Personal</option>
                        <option value="IT">IT</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-neutral-400 uppercase">Application</label>
                      <input 
                        type="text" 
                        value={item.applicationType}
                        onChange={(e) => updateItem(item.id, { applicationType: e.target.value })}
                        className="w-full p-4 bg-neutral-50 border-none rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-point transition-all"
                        placeholder="예: 간판, 웹사이트"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-neutral-400 uppercase">Project Title</label>
                    <input 
                      type="text" 
                      value={item.title}
                      onChange={(e) => updateItem(item.id, { title: e.target.value })}
                      className="w-full p-4 bg-neutral-50 border-none rounded-xl text-sm font-black outline-none focus:ring-2 focus:ring-point transition-all"
                      placeholder="프로젝트 제목"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-neutral-400 uppercase">Description</label>
                    <textarea 
                      value={item.description}
                      onChange={(e) => updateItem(item.id, { description: e.target.value })}
                      className="w-full p-4 bg-neutral-50 border-none rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-point transition-all h-24 resize-none"
                      placeholder="프로젝트 상세 설명"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                    <input 
                      type="checkbox" 
                      id={`ba-${item.id}`}
                      checked={item.isBeforeAfter} 
                      onChange={(e) => updateItem(item.id, { isBeforeAfter: e.target.checked })}
                      className="w-5 h-5 accent-point"
                    />
                    <label htmlFor={`ba-${item.id}`} className="text-sm font-black text-neutral-700 cursor-pointer">Before / After 강조 표기</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
