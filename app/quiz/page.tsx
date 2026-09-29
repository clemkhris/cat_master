import type { Metadata } from "next";
import TestsSection from "@src/components/cat_master/TestsSection";
export const metadata: Metadata = { title: "趣味测评" };
export default function QuizPage() {
  return <main><header className="mx-auto max-w-5xl px-6 py-12"><p className="text-sm font-bold tracking-widest">MIAO / QUIZ</p><h1 className="mt-4 text-4xl font-black">趣味测评</h1><p className="mt-4">和猫大仙一起，看看生活的另一面。测评内容正在筹备，目前可以浏览主题。</p></header><TestsSection /></main>;
}
