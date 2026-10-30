export type PrimaryLocale = 'en' | 'ru' | 'pt';

// route is the unprefixed page path; htmlLang is the document language tag.
export const localeInfo: Record<
  PrimaryLocale,
  { htmlLang: string; ogLocale: string; route: string; intl: string }
> = {
  en: { htmlLang: 'en', ogLocale: 'en_US', route: '/', intl: 'en-GB' },
  ru: { htmlLang: 'ru', ogLocale: 'ru_RU', route: '/ru', intl: 'ru-RU' },
  pt: { htmlLang: 'pt-PT', ogLocale: 'pt_PT', route: '/pt', intl: 'pt-PT' },
};
