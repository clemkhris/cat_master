// src/app/cat_master/layout.tsx
import type { Metadata } from 'next';
import { Comic_Neue, Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-sc',
});

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-comic-neue',
});

export const metadata: Metadata = {
  title: '喵喵喵事务所 · 猫大仙灵验馆',
  description: '猫大仙灵验馆 - 专业猫咪玄学与灵性指导',
};

export default function CatMasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${comicNeue.variable}`}>
      <body className="bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300 min-h-screen text-[#3D2B1F] overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
