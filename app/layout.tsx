// src/app/cat_master/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import MiaoNav from '@/components/miao-nav';

export const metadata: Metadata = {
  metadataBase: new URL('https://kelve.cn/miao/'),
  title: { default: 'MIAO · 喵喵喵事务所', template: '%s · MIAO' },
  description: '猫大仙灵验馆 - 专业猫咪玄学与灵性指导',
};

export default function CatMasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" >
      <body className="bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300 min-h-screen text-[#3D2B1F] overflow-x-hidden font-sans">
        <MiaoNav />
        {children}
      </body>
    </html>
  );
}
