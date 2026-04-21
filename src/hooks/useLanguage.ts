// src/hooks/useLanguage.ts
'use client';

import { useState, useEffect } from 'react';

export type Language = 'zh-CN' | 'en';

const translations = {
  // Navigation
  navDoctor: { 'zh-CN': '👓 猫博士', 'en': '👓 Cat Doctor' },
  navImmortal: { 'zh-CN': '🔮 猫大仙', 'en': '🔮 Cat Immortal' },
  navButler: { 'zh-CN': '📋 猫管家', 'en': '📋 Cat Butler' },
  todayLuck: { 'zh-CN': '⭐ 今日猫运', 'en': '⭐ Today\'s Cat Luck' },
  login: { 'zh-CN': '🐾 铲屎官登录', 'en': '🐾 Shovel Officer Login' },

  // Hero
  heroTitle: { 'zh-CN': '猫大仙灵验馆', 'en': 'Cat Immortal Divination Hall' },
  heroSubtitle: {
    'zh-CN': '“贫道乃雾山猫仙，修行九载通猫语晓星象。你这凡夫能寻到我这云深不知处，也算有仙缘。”',
    'en': '"This poor Daoist is the Fog Mountain Cat Immortal..."'
  },
  startDivination: { 'zh-CN': '立即求仙缘 →', 'en': 'Seek Immortal Affinity Now →' },
  hearQuote: { 'zh-CN': '听大仙金句 ✨', 'en': 'Hear Cat Immortal Quotes ✨' },

  // Archive
  catImmortalArchive: { 'zh-CN': '🐾 猫大仙档案', 'en': '🐾 Cat Immortal Profile' },

  // Tests
  testsTitle: { 'zh-CN': '16宫玄学测试', 'en': '16 Palaces Mystical Tests' },
  testsSubtitle: {
    'zh-CN': '从星座到月相，从五行到风水，猫大仙一爪搞定！',
    'en': 'From zodiac to moon phase, from five elements to feng shui — Cat Immortal handles it all!'
  },

  // Footer
  footerMadeFor: { 'zh-CN': 'Made for 年轻铲屎官', 'en': 'Made for Young Cat Parents' },
} as const;

export function useLanguage() {
  const [lang, setLang] = useState<Language>('zh-CN');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang) setLang(savedLang);
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: keyof typeof translations): string => {
    return translations[key]?.[lang] || key;
  };

  return { lang, setLang: changeLanguage, t };
}
