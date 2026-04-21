// app/(cat-master)/masterArchive.tsx
'use client';

import { useLanguage } from '@src/hooks/useLanguage';

export default function MasterArchive() {
  const { t } = useLanguage();

  const scenes = [
    "能寻到我这‘云深不知处’的，都是有仙缘的主儿，算你有眼光！（摇尾巴转圈）",
    "那是自然！三界六道的猫事，就没有我捋不清的纹路，你这悟性，配听我的指点！（得意舔爪）",
    // ... add all your scenes here
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white/70">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Cat Immortal Archive */}
        <div className="lg:col-span-10">
          <div className="bg-white thick-border rounded-3xl p-10 shadow-xl">
            <div className="text-2xl leading-relaxed space-y-6">
              <p>贫道乃<strong>雾山猫仙</strong>，修行九载，通猫语、晓星象、辨毛色、断祸福。</p>
              <p>临清狮子猫出身，长白毛、金眼，头顶与尾尖微带黑点。身着中国道士服，对西方神秘学亦有研究。</p>
              <p className="text-pink-600 font-medium">
                表面嘴毒严格，实则内心温柔胆小，极爱美食与看脸。曾得黎山老母亲传《猫经》残卷，道行深厚，乃猫界资深玄学大师。
              </p>
            </div>

            {/* Random Interaction */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold">与大仙互动</h3>
                <button 
                  onClick={() => {
                    const randomIdx = Math.floor(Math.random() * scenes.length);
                    alert(scenes[randomIdx]);   // temporary - we'll make it nicer later
                  }}
                  className="px-6 py-3 bg-yellow-300 hover:bg-yellow-400 rounded-3xl thick-border font-bold transition"
                >
                  🎲 随机互动
                </button>
              </div>
              <div id="scene-display" className="bg-gradient-to-br from-pink-50 to-blue-50 thick-border rounded-3xl p-8 min-h-[180px] flex items-center text-lg italic">
                点击“随机互动”与猫大仙对话吧～
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
