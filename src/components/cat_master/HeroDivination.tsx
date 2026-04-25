'use client';

import { useState } from 'react';
import { useLanguage } from '@src/hooks/useLanguage';

interface DivinationResult {
  title: string;
  subtitle: string;
  emoji: string;
  message: string;
  luck?: string;
}

export default function HeroDivination() {
  const { t } = useLanguage();
  const [result, setResult] = useState<DivinationResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentType, setCurrentType] = useState<number | null>(null);

  const openDivination = (type: number) => {
    setCurrentType(type);
    setIsModalOpen(true);

    // Simulate divination process
    setTimeout(() => {
      const results: Record<number, DivinationResult> = {
        1: {
          title: "仙缘已至",
          subtitle: "猫大仙亲自开卦",
          emoji: "🐱🌙",
          message: "今日猫缘极佳！主子会在晚上8点左右给你一个大大的“么么”。近期有贵人（可能是新猫玩具）相助，记得多准备小鱼干供奉。",
          luck: "大吉 ↑↑↑"
        },
        2: {
          title: "运势灵签",
          subtitle: "第37签 · 上上签",
          emoji: "🐟🍣",
          message: "近三日运势大旺！但第4天需小心“沙发陷阱”。工作/学习上多摸鱼反而会有惊喜，感情上记得多给主子拍照留念。",
          luck: "中吉 → 大吉"
        },
        3: {
          title: "今日塔罗",
          subtitle: "The Star · 正位",
          emoji: "🌟🃏",
          message: "猫大仙今天抽到了「星星」。代表希望与治愈。你会遇到一件让心情瞬间变好的事——可能是主子主动蹭你，也可能是快递到了。",
          luck: "希望满满"
        },
        4: {
          title: "2026守护兽",
          subtitle: "已降临",
          emoji: "🦁✨",
          message: "2026年你的专属守护兽是「白狮子猫」。它会守护你的健康、财运和猫缘。建议在家里放一只白色毛绒玩具作为连接媒介。",
          luck: "全年守护"
        }
      };

      setResult(results[type]);
      setIsModalOpen(false);
    }, 1350);
  };

  const closeResult = () => setResult(null);

  return (
    <>
      {/* Four Divination Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* 1. 立即求仙缘 */}
        <button
          onClick={() => openDivination(1)}
          className="group bg-white/95 hover:bg-white border-[10px] border-[#3D2B1F] rounded-3xl p-8 text-left transition-all hover:scale-105 hover:shadow-2xl flex flex-col h-full"
        >
          <div className="text-5xl mb-4">🌟</div>
          <div className="text-2xl font-bold title-font text-[#3D2B1F] mb-2">立即求仙缘</div>
          <div className="text-pink-600 font-medium text-lg">来都来了，不求一卦？</div>
          <div className="mt-auto pt-6 text-sm opacity-70">猫大仙亲自为你开一卦</div>
        </button>

        {/* 2. 猫咪运势签 */}
        <button
          onClick={() => openDivination(2)}
          className="group bg-white/95 hover:bg-white border-[10px] border-[#3D2B1F] rounded-3xl p-8 text-left transition-all hover:scale-105 hover:shadow-2xl flex flex-col h-full"
        >
          <div className="text-5xl mb-4">🐾</div>
          <div className="text-2xl font-bold title-font text-[#3D2B1F] mb-2">猫咪运势签</div>
          <div className="text-orange-600 font-medium text-lg">随机推演近期走向，看看要顺还是要躲</div>
          <div className="mt-auto pt-6 text-sm opacity-70">抽一支灵签</div>
        </button>

        {/* 3. 今日塔罗牌 */}
        <button
          onClick={() => openDivination(3)}
          className="group bg-white/95 hover:bg-white border-[10px] border-[#3D2B1F] rounded-3xl p-8 text-left transition-all hover:scale-105 hover:shadow-2xl flex flex-col h-full"
        >
          <div className="text-5xl mb-4">🃏</div>
          <div className="text-2xl font-bold title-font text-[#3D2B1F] mb-2">今日塔罗牌</div>
          <div className="text-purple-600 font-medium text-lg">抽一张牌，听听它今天想说什么</div>
          <div className="mt-auto pt-6 text-sm opacity-70">猫大仙塔罗</div>
        </button>

        {/* 4. 年度守护兽 */}
        <button
          onClick={() => openDivination(4)}
          className="group bg-white/95 hover:bg-white border-[10px] border-[#3D2B1F] rounded-3xl p-8 text-left transition-all hover:scale-105 hover:shadow-2xl flex flex-col h-full"
        >
          <div className="text-5xl mb-4">🛡️</div>
          <div className="text-2xl font-bold title-font text-[#3D2B1F] mb-2">年度守护兽</div>
          <div className="text-emerald-600 font-medium text-lg">2026专属守护降临，它被谁选中</div>
          <div className="mt-auto pt-6 text-sm opacity-70">2026限定</div>
        </button>
      </div>

      {/* Result Display */}
      {result && (
        <div className="mt-10 bg-white/95 border-[10px] border-[#3D2B1F] rounded-3xl p-8 max-w-2xl mx-auto text-left shadow-2xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-3xl font-bold title-font">{result.title}</div>
              <div className="text-pink-600 font-medium">{result.subtitle}</div>
            </div>
            <button 
              onClick={closeResult}
              className="text-3xl hover:scale-125 transition text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>

          <div className="text-6xl mb-6 text-center">{result.emoji}</div>

          <p className="text-xl leading-relaxed text-[#3D2B1F] whitespace-pre-line">
            {result.message}
          </p>

          {result.luck && (
            <div className="mt-6 inline-block bg-yellow-200 px-6 py-2 rounded-2xl font-bold text-lg border-4 border-[#3D2B1F]">
              {result.luck}
            </div>
          )}
        </div>
      )}

      {/* Loading Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[100]">
          <div className="bg-white border-[12px] border-[#3D2B1F] rounded-3xl p-12 text-center max-w-md">
            <div className="text-7xl mb-6 animate-spin">🐱🔮</div>
            <div className="text-3xl font-bold title-font mb-3">猫大仙正在占卜...</div>
            <div className="text-lg text-gray-600">灵力传输中，请稍等</div>
          </div>
        </div>
      )}
    </>
  );
}
