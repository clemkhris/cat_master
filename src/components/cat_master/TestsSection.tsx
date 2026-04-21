'use client';

import { useState } from 'react';
import { tests, type TestItem } from '@src/data/tests';
import { useLanguage } from '@src/hooks/useLanguage';
import TestModal from './TestModal';

export default function TestsSection() {
  const { lang } = useLanguage();
  const [selectedTest, setSelectedTest] = useState<TestItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTest = (test: TestItem) => {
    setSelectedTest(test);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTest(null), 300); // smooth close
  };

  return (
    <section id="tests" className="bg-white py-20 border-t-8 border-b-8 border-[#3D2B1F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-500 text-white px-8 py-3 rounded-3xl thick-border text-2xl font-bold mb-4">
            🔮 {lang === 'zh-CN' ? '16宫玄学测试' : '16 Mystical Tests'}
          </div>
          <p className="text-3xl title-font">
            {lang === 'zh-CN' 
              ? '从星座到月相，从五行到风水，猫大仙一爪搞定！' 
              : 'From zodiac to moon phase, from five elements to feng shui — Cat Immortal handles it all!'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tests.map((test) => (
            <div 
              key={test.id} 
              onClick={() => openTest(test)}
              className="card bg-white thick-border rounded-3xl p-8 cursor-pointer hover:scale-105 transition-all active:scale-95"
            >
              <div className="text-7xl mb-6">{test.emoji}</div>
              <div className="text-2xl font-bold mb-3">
                {test.title[lang]}
              </div>
              <div className="text-[#3D2B1F]/70 leading-relaxed">
                {test.desc[lang]}
              </div>
              <div className="mt-8 flex justify-end">
                <span className="bg-[#3D2B1F] text-white px-6 py-2 rounded-2xl text-sm font-bold">
                  {lang === 'zh-CN' ? '立即占卜 →' : 'Divine Now →'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <TestModal 
        test={selectedTest} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
}
