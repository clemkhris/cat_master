// src/data/tests.ts
export type Language = 'zh-CN' | 'en';

export interface TestItem {
  id: number;
  emoji: string;
  title: {
    'zh-CN': string;
    'en': string;
  };
  desc: {
    'zh-CN': string;
    'en': string;
  };
  modalTitle: {
    'zh-CN': string;
    'en': string;
  };
}

export const tests: TestItem[] = [
  {
    id: 1,
    emoji: "♈",
    title: {
      'zh-CN': "猫咪星座性格测试",
      'en': "Cat Zodiac Personality Test"
    },
    desc: {
      'zh-CN': "根据出生日期对应黄道十二宫，解读性格与行为倾向",
      'en': "Interpret personality and behavioral tendencies based on birth date and zodiac signs"
    },
    modalTitle: {
      'zh-CN': "猫咪星座性格测试",
      'en': "Cat Zodiac Personality Test"
    }
  },
  {
    id: 2,
    emoji: "🐱",
    title: {
      'zh-CN': "猫咪毛色玄学判定",
      'en': "Cat Fur Color Mystical Analysis"
    },
    desc: {
      'zh-CN': "通过毛发颜色、花纹推断性格与福气属性",
      'en': "Infer personality and fortune attributes through fur color and patterns"
    },
    modalTitle: {
      'zh-CN': "毛色玄学判定",
      'en': "Fur Color Mystical Reading"
    }
  },
  {
    id: 3,
    emoji: "🌱",
    title: {
      'zh-CN': "猫咪节气性格测试",
      'en': "Cat Solar Term Personality Test"
    },
    desc: {
      'zh-CN': "根据出生月对应二十四节气解读先天气质",
      'en': "Interpret innate temperament according to the 24 solar terms of the birth month"
    },
    modalTitle: {
      'zh-CN': "节气性格测试",
      'en': "Solar Term Personality Test"
    }
  },
  {
    id: 4,
    emoji: "🌊",
    title: {
      'zh-CN': "猫咪月令五行测试",
      'en': "Cat Monthly Five Elements Test"
    },
    desc: {
      'zh-CN': "按出生月份地支五行分析性格短板",
      'en': "Analyze personality weaknesses using earthly branches and five elements by birth month"
    },
    modalTitle: {
      'zh-CN': "月令五行测试",
      'en': "Monthly Five Elements Analysis"
    }
  },
  {
    id: 5,
    emoji: "⭐",
    title: {
      'zh-CN': "猫咪星座宫位叠加测试",
      'en': "Cat Zodiac House Overlay Test"
    },
    desc: {
      'zh-CN': "太阳星座与农历月份双重性格标签",
      'en': "Dual personality tags combining solar sign and lunar month"
    },
    modalTitle: {
      'zh-CN': "星座宫位叠加测试",
      'en': "Zodiac House Overlay Test"
    }
  },
  {
    id: 6,
    emoji: "🍂",
    title: {
      'zh-CN': "猫咪四季生肖细分测试",
      'en': "Cat Four Seasons Zodiac Subtype Test"
    },
    desc: {
      'zh-CN': "出生季节对生肖性格的二次细化",
      'en': "Secondary refinement of zodiac personality based on birth season"
    },
    modalTitle: {
      'zh-CN': "四季生肖细分测试",
      'en': "Seasonal Zodiac Refinement"
    }
  },
  {
    id: 7,
    emoji: "🌕",
    title: {
      'zh-CN': "猫咪月相灵性指数测试",
      'en': "Cat Moon Phase Spirituality Test"
    },
    desc: {
      'zh-CN': "根据月相判断猫咪感知力强弱",
      'en': "Judge the cat's spiritual perception strength based on moon phase"
    },
    modalTitle: {
      'zh-CN': "月相灵性指数测试",
      'en': "Moon Phase Spirituality Index"
    }
  },
  {
    id: 8,
    emoji: "⏰",
    title: {
      'zh-CN': "猫咪出生时辰性格说",
      'en': "Cat Birth Hour Personality Analysis"
    },
    desc: {
      'zh-CN': "十二时辰判断先天习性与相处模式",
      'en': "Determine innate habits and interaction patterns through the 12 Chinese hours"
    },
    modalTitle: {
      'zh-CN': "出生时辰性格分析",
      'en': "Birth Hour Personality Reading"
    }
  },
  {
    id: 9,
    emoji: "🐯",
    title: {
      'zh-CN': "猫咪生肖性格测试",
      'en': "Cat Chinese Zodiac Personality Test"
    },
    desc: {
      'zh-CN': "出生年份对应十二生肖基础性格",
      'en': "Basic personality corresponding to the 12 Chinese zodiac signs by birth year"
    },
    modalTitle: {
      'zh-CN': "生肖性格测试",
      'en': "Chinese Zodiac Personality Test"
    }
  },
  {
    id: 10,
    emoji: "🔥",
    title: {
      'zh-CN': "猫咪出生年份五行测试",
      'en': "Cat Birth Year Five Elements Test"
    },
    desc: {
      'zh-CN': "年份五行属性分析体质与偏好",
      'en': "Analyze constitution and preferences through the five elements of the birth year"
    },
    modalTitle: {
      'zh-CN': "出生年份五行测试",
      'en': "Birth Year Five Elements Analysis"
    }
  },
  {
    id: 11,
    emoji: "📅",
    title: {
      'zh-CN': "猫咪流年运势概览",
      'en': "Cat Annual Luck Overview"
    },
    desc: {
      'zh-CN': "当年生肖刑冲合害关系预测年度运势",
      'en': "Predict annual fortune based on current year's zodiac clashes and combinations"
    },
    modalTitle: {
      'zh-CN': "流年运势概览",
      'en': "Annual Luck Forecast"
    }
  },
  {
    id: 12,
    emoji: "📆",
    title: {
      'zh-CN': "猫咪出生年代性格标签",
      'en': "Cat Birth Decade Personality Label"
    },
    desc: {
      'zh-CN': "按年代匹配时代性格标签",
      'en': "Match era-specific personality labels by birth decade"
    },
    modalTitle: {
      'zh-CN': "出生年代性格标签",
      'en': "Generation Personality Tags"
    }
  },
  {
    id: 13,
    emoji: "🧭",
    title: {
      'zh-CN': "猫咪干支方位吉运测试",
      'en': "Cat Heavenly Stems & Earthly Branches Direction Test"
    },
    desc: {
      'zh-CN': "天干地支推荐家中有利活动方位",
      'en': "Recommend auspicious home activity directions using heavenly stems and earthly branches"
    },
    modalTitle: {
      'zh-CN': "干支方位吉运测试",
      'en': "Directional Luck Test"
    }
  },
  {
    id: 14,
    emoji: "🕯️",
    title: {
      'zh-CN': "猫咪前世今生探秘",
      'en': "Cat Past & Present Life Exploration"
    },
    desc: {
      'zh-CN': "探寻猫咪前世因果与今生缘分",
      'en': "Explore karmic causes from past life and destiny in this life"
    },
    modalTitle: {
      'zh-CN': "前世今生探秘",
      'en': "Past Life & Current Life Reading"
    }
  },
  {
    id: 15,
    emoji: "🃏",
    title: {
      'zh-CN': "猫咪塔罗每日一签",
      'en': "Cat Tarot Daily Oracle"
    },
    desc: {
      'zh-CN': "每日塔罗牌给猫咪的灵性指引",
      'en': "Daily tarot card spiritual guidance for your cat"
    },
    modalTitle: {
      'zh-CN': "塔罗每日一签",
      'en': "Daily Tarot Reading"
    }
  },
  {
    id: 16,
    emoji: "🏠",
    title: {
      'zh-CN': "猫宅风水布局测试",
      'en': "Cat House Feng Shui Layout Test"
    },
    desc: {
      'zh-CN': "评估猫砂盆、猫爬架等风水布局",
      'en': "Evaluate feng shui layout of litter box, cat tree, and other items"
    },
    modalTitle: {
      'zh-CN': "猫宅风水布局测试",
      'en': "Cat Home Feng Shui Assessment"
    }
  }
];
