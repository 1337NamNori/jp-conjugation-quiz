import { VERB_TYPES, type Verb } from '@/constants/verbs'

export const convertToTeForm = (verb: Verb): string => {
  if (verb.kanji === '行く') return '行って'
  switch (verb.type) {
    case VERB_TYPES.godan:
      if (verb.kanji.endsWith('る') || verb.kanji.endsWith('う') || verb.kanji.endsWith('つ')) {
        return verb.kanji.slice(0, -1) + 'って'
      } else if (verb.kanji.endsWith('く')) {
        return verb.kanji.slice(0, -1) + 'いて'
      } else if (verb.kanji.endsWith('ぐ')) {
        return verb.kanji.slice(0, -1) + 'いで'
      } else if (verb.kanji.endsWith('す')) {
        return verb.kanji.slice(0, -1) + 'して'
      } else if (verb.kanji.endsWith('ぬ') || verb.kanji.endsWith('ぶ') || verb.kanji.endsWith('む')) {
        return verb.kanji.slice(0, -1) + 'んで'
      } else {
        throw new Error('Invalid godan verb')
      }
    case VERB_TYPES.ichidan:
      return verb.kanji.slice(0, -1) + 'て'
    case VERB_TYPES.irregular:
      if (verb.kanji.endsWith('する')) {
        return verb.kanji.slice(0, -2) + 'して'
      } else if (verb.kanji.endsWith('くる')) {
        return 'きて'
      } else {
        throw new Error('Invalid irregular verb')
      }
    default:
      throw new Error('Invalid verb type')
  }
}

export const convertToPastForm = (verb: Verb): string => {
  const teForm = convertToTeForm(verb)
  if (teForm.endsWith('て')) {
    return teForm.slice(0, -1) + 'た'
  } else if (teForm.endsWith('で')) {
    return teForm.slice(0, -1) + 'だ'
  } else {
    throw new Error('Invalid te-form')
  }
}

export const convertToNegativeForm = (verb: Verb): string => {
  switch (verb.type) {
    case VERB_TYPES.godan:
      if (verb.kanji.endsWith('る')) return verb.kanji.slice(0, -1) + 'らない'
      if (verb.kanji.endsWith('う')) return verb.kanji.slice(0, -1) + 'わない'
      if (verb.kanji.endsWith('つ')) return verb.kanji.slice(0, -1) + 'たない'
      if (verb.kanji.endsWith('く')) return verb.kanji.slice(0, -1) + 'かない'
      if (verb.kanji.endsWith('ぐ')) return verb.kanji.slice(0, -1) + 'がない'
      if (verb.kanji.endsWith('す')) return verb.kanji.slice(0, -1) + 'さない'
      if (verb.kanji.endsWith('ぬ')) return verb.kanji.slice(0, -1) + 'なない'
      if (verb.kanji.endsWith('ぶ')) return verb.kanji.slice(0, -1) + 'ばない'
      if (verb.kanji.endsWith('む')) return verb.kanji.slice(0, -1) + 'まない'
      throw new Error('Invalid godan verb')
    case VERB_TYPES.ichidan:
      return verb.kanji.slice(0, -1) + 'ない'
    case VERB_TYPES.irregular:
      if (verb.kanji.endsWith('する')) return verb.kanji.slice(0, -2) + 'しない'
      if (verb.kanji.endsWith('くる')) return 'こない'
      throw new Error('Invalid irregular verb')
    default:
      throw new Error('Invalid verb type')
  }
}

export const convertToPastNegativeForm = (verb: Verb): string => {
  const negativeForm = convertToNegativeForm(verb)
  if (negativeForm.endsWith('ない')) {
    return negativeForm.slice(0, -1) + 'かった'
  } else {
    throw new Error('Invalid negative form')
  }
}

export const convertToPoliteForm = (verb: Verb): string => {
  switch (verb.type) {
    case VERB_TYPES.godan:
      if (verb.kanji.endsWith('る')) return verb.kanji.slice(0, -1) + 'ります'
      if (verb.kanji.endsWith('う')) return verb.kanji.slice(0, -1) + 'います'
      if (verb.kanji.endsWith('つ')) return verb.kanji.slice(0, -1) + 'ちます'
      if (verb.kanji.endsWith('く')) return verb.kanji.slice(0, -1) + 'きます'
      if (verb.kanji.endsWith('ぐ')) return verb.kanji.slice(0, -1) + 'ぎます'
      if (verb.kanji.endsWith('す')) return verb.kanji.slice(0, -1) + 'します'
      if (verb.kanji.endsWith('ぬ')) return verb.kanji.slice(0, -1) + 'にます'
      if (verb.kanji.endsWith('ぶ')) return verb.kanji.slice(0, -1) + 'びます'
      if (verb.kanji.endsWith('む')) return verb.kanji.slice(0, -1) + 'みます'
      throw new Error('Invalid godan verb')
    case VERB_TYPES.ichidan:
      return verb.kanji.slice(0, -1) + 'ます'
    case VERB_TYPES.irregular:
      if (verb.kanji.endsWith('する')) return verb.kanji.slice(0, -2) + 'します'
      if (verb.kanji.endsWith('くる')) return 'きます'
      throw new Error('Invalid irregular verb')
    default:
      throw new Error('Invalid verb type')
  }
}

export const convertToCommandForm = (verb: Verb): string => {
  switch (verb.type) {
    case VERB_TYPES.godan:
      if (verb.kanji.endsWith('る')) return verb.kanji.slice(0, -1) + 'ろ'
      if (verb.kanji.endsWith('う')) return verb.kanji.slice(0, -1) + 'え'
      if (verb.kanji.endsWith('つ')) return verb.kanji.slice(0, -1) + 'て'
      if (verb.kanji.endsWith('く')) return verb.kanji.slice(0, -1) + 'け'
      if (verb.kanji.endsWith('ぐ')) return verb.kanji.slice(0, -1) + 'げ'
      if (verb.kanji.endsWith('す')) return verb.kanji.slice(0, -1) + 'せ'
      if (verb.kanji.endsWith('ぬ')) return verb.kanji.slice(0, -1) + 'ね'
      if (verb.kanji.endsWith('ぶ')) return verb.kanji.slice(0, -1) + 'べ'
      if (verb.kanji.endsWith('む')) return verb.kanji.slice(0, -1) + 'め'
      throw new Error('Invalid godan verb')
    case VERB_TYPES.ichidan:
      return verb.kanji.slice(0, -1) + 'ろ'
    case VERB_TYPES.irregular:
      if (verb.kanji.endsWith('する')) return verb.kanji.slice(0, -2) + 'しろ'
      if (verb.kanji.endsWith('くる')) return 'こい'
      throw new Error('Invalid irregular verb')
    default:
      throw new Error('Invalid verb type')
  }
}

export const convertToPotentialForm = (verb: Verb): string => {
  switch (verb.type) {
    case VERB_TYPES.godan:
      if (verb.kanji.endsWith('る')) return verb.kanji.slice(0, -1) + 'られる'
      if (verb.kanji.endsWith('う')) return verb.kanji.slice(0, -1) + 'える'
      if (verb.kanji.endsWith('つ')) return verb.kanji.slice(0, -1) + 'てる'
      if (verb.kanji.endsWith('く')) return verb.kanji.slice(0, -1) + 'ける'
      if (verb.kanji.endsWith('ぐ')) return verb.kanji.slice(0, -1) + 'げる'
      if (verb.kanji.endsWith('す')) return verb.kanji.slice(0, -1) + 'せる'
      if (verb.kanji.endsWith('ぬ')) return verb.kanji.slice(0, -1) + 'ねる'
      if (verb.kanji.endsWith('ぶ')) return verb.kanji.slice(0, -1) + 'べる'
      if (verb.kanji.endsWith('む')) return verb.kanji.slice(0, -1) + 'める'
      throw new Error('Invalid godan verb')
    case VERB_TYPES.ichidan:
      return verb.kanji.slice(0, -1) + 'られる'
    case VERB_TYPES.irregular:
      if (verb.kanji.endsWith('する')) return verb.kanji.slice(0, -2) + 'できる'
      if (verb.kanji.endsWith('くる')) return 'こられる'
      throw new Error('Invalid irregular verb')
    default:
      throw new Error('Invalid verb type')
  }
}

export const convertToPassiveForm = (verb: Verb): string => {
  switch (verb.type) {
    case VERB_TYPES.godan:
      if (verb.kanji.endsWith('る')) return verb.kanji.slice(0, -1) + 'られる'
      if (verb.kanji.endsWith('う')) return verb.kanji.slice(0, -1) + 'われる'
      if (verb.kanji.endsWith('つ')) return verb.kanji.slice(0, -1) + 'たれる'
      if (verb.kanji.endsWith('く')) return verb.kanji.slice(0, -1) + 'かれる'
      if (verb.kanji.endsWith('ぐ')) return verb.kanji.slice(0, -1) + 'がれる'
      if (verb.kanji.endsWith('す')) return verb.kanji.slice(0, -1) + 'される'
      if (verb.kanji.endsWith('ぬ')) return verb.kanji.slice(0, -1) + 'なれる'
      if (verb.kanji.endsWith('ぶ')) return verb.kanji.slice(0, -1) + 'ばれる'
      if (verb.kanji.endsWith('む')) return verb.kanji.slice(0, -1) + 'まれる'
      throw new Error('Invalid godan verb')
    case VERB_TYPES.ichidan:
      return verb.kanji.slice(0, -1) + 'られる'
    case VERB_TYPES.irregular:
      if (verb.kanji.endsWith('する')) return verb.kanji.slice(0, -2) + 'される'
      if (verb.kanji.endsWith('くる')) return 'こられる'
      throw new Error('Invalid irregular verb')
    default:
      throw new Error('Invalid verb type')
  }
}

export const convertToCausativeForm = (verb: Verb): string => {
  switch (verb.type) {
    case VERB_TYPES.godan:
      if (verb.kanji.endsWith('る')) return verb.kanji.slice(0, -1) + 'らせる'
      if (verb.kanji.endsWith('う')) return verb.kanji.slice(0, -1) + 'わせる'
      if (verb.kanji.endsWith('つ')) return verb.kanji.slice(0, -1) + 'たせる'
      if (verb.kanji.endsWith('く')) return verb.kanji.slice(0, -1) + 'かせる'
      if (verb.kanji.endsWith('ぐ')) return verb.kanji.slice(0, -1) + 'がせる'
      if (verb.kanji.endsWith('す')) return verb.kanji.slice(0, -1) + 'させる'
      if (verb.kanji.endsWith('ぬ')) return verb.kanji.slice(0, -1) + 'なせる'
      if (verb.kanji.endsWith('ぶ')) return verb.kanji.slice(0, -1) + 'ばせる'
      if (verb.kanji.endsWith('む')) return verb.kanji.slice(0, -1) + 'ませる'
      throw new Error('Invalid godan verb')
    case VERB_TYPES.ichidan:
      return verb.kanji.slice(0, -1) + 'させる'
    case VERB_TYPES.irregular:
      if (verb.kanji.endsWith('する')) return verb.kanji.slice(0, -2) + 'させる'
      if (verb.kanji.endsWith('くる')) return 'こさせる'
      throw new Error('Invalid irregular verb')
    default:
      throw new Error('Invalid verb type')
  }
}

export const convertToConditionalForm = (verb: Verb): string => {
  switch (verb.type) {
    case VERB_TYPES.godan:
      if (verb.kanji.endsWith('る')) return verb.kanji.slice(0, -1) + 'れば'
      if (verb.kanji.endsWith('う')) return verb.kanji.slice(0, -1) + 'えば'
      if (verb.kanji.endsWith('つ')) return verb.kanji.slice(0, -1) + 'てば'
      if (verb.kanji.endsWith('く')) return verb.kanji.slice(0, -1) + 'けば'
      if (verb.kanji.endsWith('ぐ')) return verb.kanji.slice(0, -1) + 'げば'
      if (verb.kanji.endsWith('す')) return verb.kanji.slice(0, -1) + 'せば'
      if (verb.kanji.endsWith('ぬ')) return verb.kanji.slice(0, -1) + 'ねば'
      if (verb.kanji.endsWith('ぶ')) return verb.kanji.slice(0, -1) + 'べば'
      if (verb.kanji.endsWith('む')) return verb.kanji.slice(0, -1) + 'めば'
      throw new Error('Invalid godan verb')
    case VERB_TYPES.ichidan:
      return verb.kanji.slice(0, -1) + 'れば'
    case VERB_TYPES.irregular:
      if (verb.kanji.endsWith('する')) return verb.kanji.slice(0, -2) + 'すれば'
      if (verb.kanji.endsWith('くる')) return 'くれば'
      throw new Error('Invalid irregular verb')
    default:
      throw new Error('Invalid verb type')
  }
}
