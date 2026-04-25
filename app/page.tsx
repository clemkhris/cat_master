// src/app/cat_master/page.tsx
'use client';

import { useLanguage } from '@src/hooks/useLanguage';
import MasterArchive from '@src/components/cat_master/masterArchive';
import QuotesSection from '@src/components/cat_master/QuotesSection';
import TestsSection from '@src/components/cat_master/TestsSection';
import HeroDivination from '@src/components/cat_master/HeroDivination';
import { useEffect, useState } from 'react';

export default function CatMasterPage() {
  const { t, lang, setLang } = useLanguage();

  // You can move all your data here or to a separate data file later
  const [posts, setPosts] = useState([
    { id: 1, user: "铲屎官小明", content: "我家主子是白狮子猫...", likes: 23 },
    // ...
  ]);

  return (
    <>
      {/* Navbar - Improved & Consistent */}
      <nav className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 border-b-8 border-[#3D2B1F] py-4 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-2xl border-[10px] border-[#3D2B1F] flex items-center justify-center text-4xl shadow-lg">
              🐱🔮
            </div>
            <div>
              <div className="font-bold text-4xl tracking-tighter title-font drop-shadow-md">喵喵喵事务所</div>
              <div className="text-pink-600 text-xl font-bold -mt-1">猫大仙灵验馆</div>
            </div>
          </div>

          {/* Navigation Buttons - Now Same Size */}
          <div className="hidden md:flex gap-3">
            <button className="px-7 py-3 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-3xl border-[8px] border-[#3D2B1F] transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
              猫博士 <span className="text-xs bg-white text-blue-600 px-2 py-0.5 rounded-full font-normal">专业</span>
            </button>

            <button className="px-7 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-3xl border-[8px] border-[#3D2B1F] transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
              猫大仙 <span className="text-xs bg-white text-pink-600 px-2 py-0.5 rounded-full font-normal">灵验</span>
            </button>

            <button className="px-7 py-3 bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-3xl border-[8px] border-[#3D2B1F] transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
              猫管家 <span className="text-xs bg-white text-orange-600 px-2 py-0.5 rounded-full font-normal">实用</span>
            </button>
          </div>

          {/* Right Side Tools */}
          <div className="flex items-center gap-3">
            
            {/* Search */}
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white rounded-3xl border-[8px] border-[#3D2B1F] hover:bg-yellow-100 transition">
              🔍 搜玄学
            </button>

            {/* Today Luck */}
            <button 
              onClick={() => alert('今日猫运功能开发中...')} 
              className="flex items-center gap-2 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-3xl border-[8px] border-[#3D2B1F] transition hover:scale-105"
            >
              ⭐ 今日猫运
            </button>

            {/* Login */}
            <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-3xl border-[8px] border-[#3D2B1F] hover:bg-pink-100 transition">
              🐾 铲屎官登录
            </button>

          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/53/2000/1200')] bg-cover bg-center" 
            style={{ filter: 'contrast(1.05) saturate(1.15)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-blue-400/30" />
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-5xl">
          <div className="text-6xl mb-4 animate-float">🔥</div>
          <h1 className="title-font text-7xl md:text-8xl font-black text-white drop-shadow-[6px_6px_0_#3D2B1F] tracking-tighter leading-none">
            {t('heroTitle')}
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl md:text-2xl text-white drop-shadow-md font-medium">
            {t('heroSubtitle')}
          </p>

          <HeroDivination />
        </div>
      </section>

      {/* === Archive + Quotes Side by Side === */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">   {/* ← Change to items-start */}

          {/* Left: Master Archive */}
          <div className="lg:col-span-5">
          <h2 className="title-font text-6xl font-bold mb-8 flex items-center gap-4">
            🐾 猫大仙档案
          </h2>
            <MasterArchive />
          </div>

          {/* Right: Quotes Section */}
          <div className="lg:col-span-7">
          <h2 className="title-font text-5xl font-bold mb-8">大仙金句 · 永不过时</h2>
            <QuotesSection />
          </div>

        </div>
      </section>
      <TestsSection />

      {/* Community Section + Footer */}
      {/* You can create more components similarly */}
    </>
  );
}
