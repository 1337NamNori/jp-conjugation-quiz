export const VERB_TYPES = {
  godan: 1,
  ichidan: 2,
  irregular: 3,
}

export const VERB_CONJUGATION_TYPES = [
  {
    value: 'polite',
    name: 'Polite',
    label: '〜ます (Polite)',
  },
  {
    value: 'past',
    name: 'Past',
    label: '〜た (Past Plain)',
  },
  {
    value: 'negative',
    name: 'Negative',
    label: '〜ない (Negative)',
  },
  {
    value: 'te',
    name: 'Te-form',
    label: '〜て (Te-form)',
  },
  {
    value: 'command',
    name: 'Command',
    label: '〜ろ (Command)',
  },
  {
    value: 'conditional',
    name: 'Conditional',
    label: '〜ば (Conditional)',
  },
  {
    value: 'potential',
    name: 'Potential',
    label: '〜れる (Potential)',
  },
  {
    value: 'passive',
    name: 'Passive',
    label: '〜られる (Passive)',
  },
  {
    value: 'causative',
    name: 'Causative',
    label: '〜させる (Causative)',
  },
  {
    value: 'causativePassive',
    name: 'Causative Passive',
    label: '〜させられる (Causative Passive)',
  },
] as const

export type Verb = {
  id: number
  type: number
  kanji: string
  hiragana: string
  meaning: string
}

export const VERBS: Verb[] = [
  { id: 1, type: VERB_TYPES.godan, hiragana: 'かう', kanji: '買う', meaning: 'to buy' },
  { id: 2, type: VERB_TYPES.ichidan, hiragana: 'たべる', kanji: '食べる', meaning: 'to eat' },
  { id: 3, type: VERB_TYPES.irregular, hiragana: 'くる', kanji: '来る', meaning: 'to come' },
  { id: 4, type: VERB_TYPES.godan, hiragana: 'のむ', kanji: '飲む', meaning: 'to drink' },
  { id: 5, type: VERB_TYPES.ichidan, hiragana: 'みる', kanji: '見る', meaning: 'to see' },
  { id: 6, type: VERB_TYPES.irregular, hiragana: 'する', kanji: 'する', meaning: 'to do' },
  { id: 7, type: VERB_TYPES.godan, hiragana: 'あそぶ', kanji: '遊ぶ', meaning: 'to play' },
  { id: 8, type: VERB_TYPES.ichidan, hiragana: 'ねる', kanji: '寝る', meaning: 'to sleep' },
  { id: 9, type: VERB_TYPES.godan, hiragana: 'はなす', kanji: '話す', meaning: 'to speak' },
  { id: 10, type: VERB_TYPES.godan, hiragana: 'かく', kanji: '書く', meaning: 'to write' },
  { id: 11, type: VERB_TYPES.godan, hiragana: 'きく', kanji: '聞く', meaning: 'to listen' },
  { id: 12, type: VERB_TYPES.ichidan, hiragana: 'おきる', kanji: '起きる', meaning: 'to wake up' },
  { id: 13, type: VERB_TYPES.godan, hiragana: 'かえる', kanji: '帰る', meaning: 'to return' },
  { id: 14, type: VERB_TYPES.godan, hiragana: 'あるく', kanji: '歩く', meaning: 'to walk' },
  { id: 15, type: VERB_TYPES.godan, hiragana: 'はしる', kanji: '走る', meaning: 'to run' },
  { id: 16, type: VERB_TYPES.irregular, hiragana: 'いく', kanji: '行く', meaning: 'to go' },
  { id: 17, type: VERB_TYPES.ichidan, hiragana: 'でる', kanji: '出る', meaning: 'to leave' },
  { id: 18, type: VERB_TYPES.godan, hiragana: 'とる', kanji: '取る', meaning: 'to take' },
  { id: 19, type: VERB_TYPES.godan, hiragana: 'あう', kanji: '会う', meaning: 'to meet' },
  { id: 20, type: VERB_TYPES.ichidan, hiragana: 'しめる', kanji: '閉める', meaning: 'to close' },
  { id: 21, type: VERB_TYPES.godan, hiragana: 'およぐ', kanji: '泳ぐ', meaning: 'to swim' },
  { id: 22, type: VERB_TYPES.godan, hiragana: 'まつ', kanji: '待つ', meaning: 'to wait' },
  { id: 23, type: VERB_TYPES.godan, hiragana: 'つかう', kanji: '使う', meaning: 'to use' },
  { id: 24, type: VERB_TYPES.ichidan, hiragana: 'わすれる', kanji: '忘れる', meaning: 'to forget' },
  { id: 25, type: VERB_TYPES.godan, hiragana: 'あける', kanji: '開ける', meaning: 'to open' },
  { id: 26, type: VERB_TYPES.irregular, hiragana: 'もってくる', kanji: '持って来る', meaning: 'to bring' },
  { id: 27, type: VERB_TYPES.godan, hiragana: 'おもう', kanji: '思う', meaning: 'to think' },
  { id: 28, type: VERB_TYPES.godan, hiragana: 'うたう', kanji: '歌う', meaning: 'to sing' },
  { id: 29, type: VERB_TYPES.godan, hiragana: 'よむ', kanji: '読む', meaning: 'to read' },
  { id: 30, type: VERB_TYPES.godan, hiragana: 'あらう', kanji: '洗う', meaning: 'to wash' },
  { id: 31, type: VERB_TYPES.ichidan, hiragana: 'つける', kanji: '付ける', meaning: 'to turn on' },
  { id: 32, type: VERB_TYPES.godan, hiragana: 'けす', kanji: '消す', meaning: 'to turn off' },
  { id: 33, type: VERB_TYPES.ichidan, hiragana: 'でんわする', kanji: '電話する', meaning: 'to call' },
  { id: 34, type: VERB_TYPES.irregular, hiragana: 'けんきゅうする', kanji: '研究する', meaning: 'to research' },
  { id: 35, type: VERB_TYPES.godan, hiragana: 'きる', kanji: '切る', meaning: 'to cut' },
  { id: 36, type: VERB_TYPES.godan, hiragana: 'はたらく', kanji: '働く', meaning: 'to work' },
  { id: 37, type: VERB_TYPES.ichidan, hiragana: 'ならべる', kanji: '並べる', meaning: 'to line up' },
  { id: 38, type: VERB_TYPES.godan, hiragana: 'かりる', kanji: '借りる', meaning: 'to borrow' },
  { id: 39, type: VERB_TYPES.ichidan, hiragana: 'みせる', kanji: '見せる', meaning: 'to show' },
  { id: 40, type: VERB_TYPES.godan, hiragana: 'おくる', kanji: '送る', meaning: 'to send' },
  { id: 41, type: VERB_TYPES.godan, hiragana: 'うる', kanji: '売る', meaning: 'to sell' },
  { id: 42, type: VERB_TYPES.godan, hiragana: 'もらう', kanji: '貰う', meaning: 'to receive' },
  { id: 43, type: VERB_TYPES.godan, hiragana: 'たのむ', kanji: '頼む', meaning: 'to request' },
  { id: 44, type: VERB_TYPES.godan, hiragana: 'きめる', kanji: '決める', meaning: 'to decide' },
  { id: 45, type: VERB_TYPES.godan, hiragana: 'つくる', kanji: '作る', meaning: 'to make' },
  { id: 46, type: VERB_TYPES.ichidan, hiragana: 'たすける', kanji: '助ける', meaning: 'to help' },
  { id: 47, type: VERB_TYPES.godan, hiragana: 'まなぶ', kanji: '学ぶ', meaning: 'to learn' },
  { id: 48, type: VERB_TYPES.godan, hiragana: 'ひく', kanji: '引く', meaning: 'to pull' },
  { id: 49, type: VERB_TYPES.godan, hiragana: 'さがす', kanji: '探す', meaning: 'to search' },
  { id: 50, type: VERB_TYPES.ichidan, hiragana: 'あげる', kanji: '上げる', meaning: 'to raise' },
]
