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
    setTimeout(() => setSelectedTest(null), 300);
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

        {/* Improved Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tests.map((test) => (
            <div 
              key={test.id} 
              onClick={() => openTest(test)}
              className="group bg-white thick-border rounded-3xl p-8 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 flex flex-col h-full border-[#3D2B1F] hover:shadow-xl"
            >
              <div className="text-7xl mb-6 transition-transform group-hover:scale-110">{test.emoji}</div>
              
              <div className="text-2xl font-bold mb-3 title-font min-h-[3.5rem]">
                {test.title[lang]}
              </div>
              
              <div className="text-[#3D2B1F]/70 leading-relaxed flex-1 mb-8">
                {test.desc[lang]}
              </div>

              {/* Aligned Button at Bottom */}
              <div className="mt-auto">
                <div className="bg-[#3D2B1F] text-white px-8 py-3 rounded-2xl text-sm font-bold text-center tracking-wider hover:bg-pink-600 transition-colors">
                  {lang === 'zh-CN' ? '立即占卜 →' : 'Divine Now →'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TestModal 
        test={selectedTest} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
}
