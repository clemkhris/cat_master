// app/TestModal.tsx
'use client';

import { useLanguage } from '@src/hooks/useLanguage';
import { TestItem } from '@src/data/tests';

interface TestModalProps {
  test: TestItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TestModal({ test, isOpen, onClose }: TestModalProps) {
  const { lang } = useLanguage();

  if (!isOpen || !test) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4">
      <div className="modal bg-white thick-border rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b-8 border-[#3D2B1F] p-8">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{test.emoji}</span>
            <h2 className="text-4xl font-bold title-font">
              {test.modalTitle[lang]}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-4xl hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* Content Area - Currently Placeholder */}
        <div className="flex-1 p-10 overflow-auto">
          <div className="text-center py-20">
            <div className="text-8xl mb-8">🔮</div>
            <h3 className="text-3xl font-bold mb-4">
              {lang === 'zh-CN' ? '大仙正在为你排盘...' : 'The Cat Immortal is preparing your reading...'}
            </h3>
            <p className="text-xl text-gray-600 max-w-md mx-auto">
              {lang === 'zh-CN' 
                ? '真实测试功能开发中～ 请稍后再次访问' 
                : 'Real test functionality is under development~ Please come back later'}
            </p>
            
            <div className="mt-12 text-6xl animate-pulse">🐾</div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t-8 border-[#3D2B1F] bg-yellow-100 flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-4 bg-orange-400 hover:bg-orange-500 text-white font-bold text-xl rounded-3xl thick-border transition"
          >
            {lang === 'zh-CN' ? '好的，我知道了' : 'Got it'}
          </button>
        </div>
      </div>
    </div>
  );
}
