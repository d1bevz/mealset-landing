'use client';
/* Full navigation switches root layouts and the document language. */
/* oxlint-disable next/no-html-link-for-pages */
import { pagePath } from '@/lib/public-path';
import { languagePreferenceKey } from '@/lib/language-preference';
import type { Locale } from './copy';

export function PrimaryLanguageSwitch({ locale }: { locale: Locale }) {
  function remember(language: Locale) {
    try {
      window.localStorage.setItem(languagePreferenceKey, language);
    } catch {
      // The explicit RU URL also works when browser storage is unavailable.
    }
  }
  return (
    <div
      className="locale-switch"
      aria-label={locale === 'ru' ? 'Язык страницы' : 'Page language'}
    >
      <a
        href={`${pagePath('/')}?lang=ru`}
        hrefLang="ru"
        lang="ru"
        aria-current={locale === 'ru' ? 'page' : undefined}
        onClick={() => remember('ru')}
      >
        RU
      </a>
      <span>/</span>
      <a
        href={pagePath('/en')}
        hrefLang="en"
        lang="en"
        aria-current={locale === 'en' ? 'page' : undefined}
        onClick={() => remember('en')}
      >
        EN
      </a>
    </div>
  );
}
