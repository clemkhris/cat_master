import Link from "next/link";
export default function ComingSoon({title, description, label}: {title: string; description: string; label: string}) {
  return <main className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-6 py-16"><section className="w-full rounded-[2rem] border-4 border-[#3D2B1F] bg-[#fff9ed] p-8 shadow-[8px_8px_0_#3D2B1F] sm:p-16"><p className="text-sm font-bold tracking-widest">MIAO / {label}</p><h1 className="mt-6 text-4xl font-black sm:text-6xl">{title}</h1><p className="mt-6 max-w-xl text-lg leading-relaxed">{description}</p><p className="mt-6 inline-block rounded-full bg-yellow-200 px-4 py-2 font-bold">正在筹备</p><div className="mt-10"><Link href="/" className="font-bold underline underline-offset-4">返回 MIAO 首页 →</Link></div></section></main>;
}
