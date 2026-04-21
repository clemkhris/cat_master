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
  immortalComment?: string;   // Optional: Cat Immortal's witty remark
}

export const tests: TestItem[] = [
  {
    id: 1,
    emoji: "♈",
    title: {
      'zh-CN': "猫咪星座人格测试",
      'en': "Cat Zodiac Personality Test"
    },
    desc: {
      'zh-CN': "西方十二星座解析性格、情绪与亲人方式",
      'en': "Analyze personality, emotions, and bonding style through 12 Western zodiac signs"
    },
    modalTitle: {
      'zh-CN': "你家猫天生什么命（性格一眼看穿）",
      'en': "What Is Your Cat's Innate Fate?"
    },
    immortalComment: "（眯眼）西洋术，浅但准。别不信。"
  },
  {
    id: 2,
    emoji: "🔥",
    title: {
      'zh-CN': "猫咪五行命格测试",
      'en': "Cat Five Elements Destiny Test"
    },
    desc: {
      'zh-CN': "金木水火土分析性格优势与能量平衡",
      'en': "Analyze personality strengths and energy balance through Metal, Wood, Water, Fire, Earth"
    },
    modalTitle: {
      'zh-CN': "五行失衡警告（你家猫缺了哪一行？）",
      'en': "Five Elements Imbalance Warning"
    },
    immortalComment: "（金瞳微亮）偏哪一行，性格就歪哪。"
  },
  {
    id: 3,
    emoji: "🐯",
    title: {
      'zh-CN': "猫咪生肖宿命测试",
      'en': "Cat Chinese Zodiac Fate Test"
    },
    desc: {
      'zh-CN': "十二生肖揭示天赋、运势与行为底色",
      'en': "Reveal talent, fortune, and behavioral foundation through the 12 Chinese zodiac signs"
    },
    modalTitle: {
      'zh-CN': "它的命运早就写好了（生肖宿命曝光）",
      'en': "Its Fate Was Written Long Ago"
    },
    immortalComment: "（尾巴轻甩）生肖者，地气所化。有些猫，一出生就带贵气；有些……带债。"
  },
  {
    id: 4,
    emoji: "🌱",
    title: {
      'zh-CN': "猫咪节气气运测试",
      'en': "Cat Solar Term Fortune Test"
    },
    desc: {
      'zh-CN': "二十四节气出生，决定体质与气场类型",
      'en': "Determine physique and aura type based on the 24 solar terms"
    },
    modalTitle: {
      'zh-CN': "出生时间决定气场（很多人忽略了）",
      'en': "Birth Time Determines Aura"
    },
    immortalComment: "（淡淡一哼）时间一差，命就不同。"
  },
  {
    id: 5,
    emoji: "🏠",
    title: {
      'zh-CN': "猫咪风水守护位测试",
      'en': "Cat Feng Shui Guardian Position Test"
    },
    desc: {
      'zh-CN': "找出猫咪在家中的“开运驻点”",
      'en': "Find the lucky spot where your cat brings the most fortune at home"
    },
    modalTitle: {
      'zh-CN': "猫在家最旺的位置（放错会影响运气）",
      'en': "Where Your Cat Brings the Most Luck"
    },
    immortalComment: "（看了你一眼）它待哪，哪就是气口。"
  },
  {
    id: 6,
    emoji: "🐾",
    title: {
      'zh-CN': "猫咪掌纹缘分测试",
      'en': "Cat Paw Print Affinity Test"
    },
    desc: {
      'zh-CN': "通过猫掌纹路，解析你和猫之间的羁绊与隐藏关系",
      'en': "Analyze the bond and hidden relationship between you and your cat through paw prints"
    },
    modalTitle: {
      'zh-CN': "你和猫的关系早有暗示（掌纹已经写明）",
      'en': "Your Relationship With Your Cat Was Predestined"
    },
    immortalComment: "（轻抬猫爪）亲不亲，早写好了。"
  },
  {
    id: 7,
    emoji: "🌕",
    title: {
      'zh-CN': "猫咪第三眼灵性测试",
      'en': "Cat Third Eye Spirituality Test"
    },
    desc: {
      'zh-CN': "直觉感知力有多强？是否能“看见你看不见的”？",
      'en': "How strong is its intuitive perception? Can it see what you cannot?"
    },
    modalTitle: {
      'zh-CN': "猫咪是否已经“开眼”（请谨慎测试）",
      'en': "Has Your Cat Opened Its Third Eye?"
    },
    immortalComment: "（忽然压低声音）有些猫……看得见你看不见的。"
  },
  {
    id: 8,
    emoji: "🪔",
    title: {
      'zh-CN': "猫咪古埃及神系守护测试",
      'en': "Cat Ancient Egyptian Divine Protection Test"
    },
    desc: {
      'zh-CN': "它是否受到神秘守护力量的庇佑？",
      'en': "Is it protected by mysterious divine forces?"
    },
    modalTitle: {
      'zh-CN': "被神选中的猫（古老守护者认证）",
      'en': "The Cat Chosen by the Gods"
    },
    immortalComment: "普通猫？未必。（轻笑）"
  },
  {
    id: 9,
    emoji: "✨",
    title: {
      'zh-CN': "猫咪古神契约测试",
      'en': "Cat Ancient God Contract Test"
    },
    desc: {
      'zh-CN': "是否与未知存在建立过连接？命运是否被注视？",
      'en': "Has it formed a contract with unknown beings? Is its fate being watched?"
    },
    modalTitle: {
      'zh-CN': "它可能不是普通猫（高能预警）",
      'en': "It Might Not Be an Ordinary Cat"
    },
    immortalComment: "（尾巴猛地一顿）这一宫——不建议轻点。若测出“契约已成”，那你……不是主人。"
  },
  {
    id: 10,
    emoji: "🕯️",
    title: {
      'zh-CN': "猫咪前世轮回身份测试",
      'en': "Cat Past Life Identity Test"
    },
    desc: {
      'zh-CN': "它前世是神兽、巫师，还是某位失落文明的守护者？",
      'en': "Was it a divine beast, wizard, or guardian of a lost civilization in its past life?"
    },
    modalTitle: {
      'zh-CN': "前世身份曝光（很多人不敢点开）",
      'en': "Past Life Identity Exposed"
    },
    immortalComment: "报恩还是讨债，看这。（叹气）"
  },
  {
    id: 11,
    emoji: "⚡",
    title: {
      'zh-CN': "猫咪隐藏超能力觉醒测试",
      'en': "Cat Hidden Superpower Awakening Test"
    },
    desc: {
      'zh-CN': "读心、预知、空间跳跃？解锁猫咪的隐藏技能",
      'en': "Mind reading, precognition, space jumping? Unlock your cat's hidden abilities"
    },
    modalTitle: {
      'zh-CN': "猫咪真实能力曝光（可能远超人类）",
      'en': "Your Cat's True Abilities Revealed"
    },
    immortalComment: "（眯眼看你）：别把它当普通猫。"
  },
  {
    id: 12,
    emoji: "🌟",
    title: {
      'zh-CN': "猫咪灵魂等级鉴定",
      'en': "Cat Soul Level Appraisal"
    },
    desc: {
      'zh-CN': "普通猫/灵猫/守护灵/半神级？",
      'en': "Ordinary cat / Spirit cat / Guardian spirit / Demigod level?"
    },
    modalTitle: {
      'zh-CN': "它正在觉醒（等级可能超出认知）",
      'en': "It Is Awakening"
    },
    immortalComment: "（轻拍蒲团）：有些，不在人类认知内。"
  },
  {
    id: 13,
    emoji: "😼",
    title: {
      'zh-CN': "猫咪心眼子密度测试",
      'en': "Cat Cunning Density Test"
    },
    desc: {
      'zh-CN': "表面无辜 vs 内心小算盘，它到底有几层？",
      'en': "Innocent appearance vs inner schemes — how many layers does it have?"
    },
    modalTitle: {
      'zh-CN': "心眼子有多深（别被外表骗了）",
      'en': "How Deep Are Its Schemes?"
    },
    immortalComment: "冷笑：它不傻，只是不说。"
  },
  {
    id: 14,
    emoji: "🌑",
    title: {
      'zh-CN': "猫咪反派潜质测试",
      'en': "Cat Villain Potential Test"
    },
    desc: {
      'zh-CN': "如果黑化，它会成为哪一类终极反派？",
      'en': "If it turns dark, what kind of ultimate villain would it become?"
    },
    modalTitle: {
      'zh-CN': "一旦黑化会多可怕（慎点）",
      'en': "How Terrifying It Would Be If It Turns Evil"
    },
    immortalComment: "尾巴缓缓炸开：别把猫逼急。"
  },
  {
    id: 15,
    emoji: "🏰",
    title: {
      'zh-CN': "猫咪魔法学院分院测试",
      'en': "Cat Magic Academy House Test"
    },
    desc: {
      'zh-CN': "它会进入哪一院？天赋与性格决定归属",
      'en': "Which house will it enter? Talent and personality decide its destiny"
    },
    modalTitle: {
      'zh-CN': "命中注定的归属（结果基本改不了）",
      'en': "Its Predestined Affiliation"
    },
    immortalComment: "整理道袍的猫大仙：此乃西方分院之术。性格早决定去向。"
  },
  {
    id: 16,
    emoji: "🧠",
    title: {
      'zh-CN': "猫咪天才类型测试",
      'en': "Cat Genius Type Test"
    },
    desc: {
      'zh-CN': "战略型、艺术型、破坏型？天赋点在哪里",
      'en': "Strategic type, artistic type, destructive type? Where are its talent points?"
    },
    modalTitle: {
      'zh-CN': "别低估你的猫（它可能是天才）",
      'en': "Never Underestimate Your Cat"
    },
    immortalComment: "有的猫，只是在装普通。"
  }
];
