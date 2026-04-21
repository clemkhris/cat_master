'use client';

import { useState } from 'react';

const quotes = [
  { id: 1, text: "月圆之夜莫喂猫，此乃它们巡界之时，扰了清修，可是要讨你三尾鱼干作赔的。", likes: 42 },
  { id: 2, text: "猫爪印在你床头，非是调皮，是用爪印画了道平安符，挡你梦中的魑魅。", likes: 67 },
  // ... add all 10 quotes from your original HTML
];

export default function QuotesSection() {
  const [visibleQuotes, setVisibleQuotes] = useState(quotes.slice(0, 4));
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="title-font text-5xl font-bold">大仙金句 · 永不过时</h2>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 bg-white hover:bg-gray-100 rounded-3xl thick-border font-bold transition"
        >
          {showAll ? '收起 ↑' : '展开全部 ↓'}
        </button>
      </div>

      <div className="space-y-6">
        {visibleQuotes.map((quote) => (
          <div key={quote.id} className="bg-white thick-border rounded-3xl p-8 flex justify-between items-center">
            <div className="flex-1 pr-8">
              <span className="text-2xl">“</span>
              <span className="text-lg">{quote.text}</span>
            </div>
            <button className="text-4xl hover:scale-125 transition">❤️ {quote.likes}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
