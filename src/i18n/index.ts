import type { UI } from './types';
import { pt } from './pt';
import { en } from './en';

export type Lang = 'pt' | 'en';

export function useTranslations(lang: Lang): UI {
  return lang === 'pt' ? pt : en;
}
