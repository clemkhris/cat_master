// src/app/cat_master/page.tsx
'use client';

import { useLanguage } from '@src/hooks/useLanguage';
import MasterArchive from '@src/components/cat_master/masterArchive';
import QuotesSection from '@src/components/cat_master/QuotesSection';
import TestsSection from '@src/components/cat_master/TestsSection';
import HeroDivination from '@src/components/cat_master/HeroDivination';

export default function CatMasterPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section - Optimized for All Devices */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-8 md:py-0">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-orange-300 to-blue-400"
            style={{ filter: 'contrast(1.05) saturate(1.15)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-blue-400/30" />
        </div>

        <div className="relative z-10 text-center px-6 w-full max-w-5xl">
          <div className="text-5xl md:text-6xl mb-4 animate-float">🔥</div>
          <h1 className="title-font text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-[6px_6px_0_#3D2B1F] tracking-tighter leading-none">
            {t('heroTitle')}
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl lg:text-2xl text-white drop-shadow-md font-medium">
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
