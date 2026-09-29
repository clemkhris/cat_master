"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const items = [["/", "MIAO 首页"], ["/quiz", "趣味测评"], ["/petfelt", "Petfelt"], ["/trends", "潮流资讯"], ["/studio", "大片定制"]];
export default function MiaoNav() {
  const pathname = usePathname();
  return <nav aria-label="MIAO 栏目" className="border-b-4 border-[#3D2B1F] bg-[#fff9ed] px-4 py-4">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 sm:gap-4">
      <Link href="/" className="mr-auto text-2xl font-black tracking-tight">MIAO 🐾</Link>
      {items.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`rounded-full border-2 border-[#3D2B1F] px-3 py-2 text-sm font-bold transition hover:bg-yellow-200 ${pathname === href ? "bg-yellow-300" : "bg-white"}`}>{label}</Link>)}
    </div>
  </nav>;
}
