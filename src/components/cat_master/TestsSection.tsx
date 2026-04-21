const tests = [
  { emoji: "♈", title: "猫咪星座性格测试", desc: "根据出生日期对应黄道十二宫，解读性格与行为倾向" },
  { emoji: "🐱", title: "猫咪毛色玄学判定", desc: "通过毛发颜色、花纹推断性格与福气属性" },
  // ... add all 16 tests from your original data
];

export default function TestsSection() {
  return (
    <section id="tests" className="bg-white py-20 border-t-8 border-b-8 border-[#3D2B1F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-pink-500 text-white px-8 py-3 rounded-3xl thick-border text-2xl font-bold mb-4">
            🔮 16宫玄学测试
          </div>
          <p className="text-3xl title-font">从星座到月相，从五行到风水，猫大仙一爪搞定！</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tests.map((test, index) => (
            <div key={index} className="card bg-white thick-border rounded-3xl p-8 cursor-pointer hover:scale-105 transition">
              <div className="text-7xl mb-6">{test.emoji}</div>
              <div className="text-2xl font-bold mb-3">{test.title}</div>
              <div className="text-[#3D2B1F]/70">{test.desc}</div>
              <div className="mt-8 flex justify-end">
                <span className="bg-[#3D2B1F] text-white px-6 py-2 rounded-2xl text-sm font-bold">立即占卜 →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
