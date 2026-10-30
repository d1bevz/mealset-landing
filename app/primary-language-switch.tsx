'use client';
import { Fragment } from 'react';
/* Full navigation switches root layouts and the document language. */
/* oxlint-disable next/no-html-link-for-pages */
import { pagePath } from '@/lib/public-path';
import { languagePreferenceKey } from '@/lib/language-preference';
import { localeInfo, type PrimaryLocale } from '@/lib/primary-locales';
import { primaryCopy } from './primary-copy';

const options: { locale: PrimaryLocale; label: string }[] = [
  { locale: 'ru', label: 'RU' },
  { locale: 'en', label: 'EN' },
  { locale: 'pt', label: 'PT' },
];

// The English root runs the language bootstrap, so an explicit English choice
// travels with the link.
function hrefFor(locale: PrimaryLocale) {
  const route = pagePath(localeInfo[locale].route);
  return locale === 'en' ? `${route}?lang=en` : route;
}

export function PrimaryLanguageSwitch({ locale }: { locale: PrimaryLocale }) {
  function remember(language: PrimaryLocale) {
    try {
      window.localStorage.setItem(languagePreferenceKey, language);
    } catch {
      // The explicit URL also works when browser storage is unavailable.
    }
  }
  return (
    <div
      className="locale-switch"
      aria-label={primaryCopy[locale].languageLabel}
    >
      {options.map((option, index) => (
        <Fragment key={option.locale}>
          {index > 0 && <span>/</span>}
          <a
            href={hrefFor(option.locale)}
            hrefLang={localeInfo[option.locale].htmlLang}
            lang={localeInfo[option.locale].htmlLang}
            aria-current={locale === option.locale ? 'page' : undefined}
            onClick={() => remember(option.locale)}
          >
            {option.label}
          </a>
        </Fragment>
      ))}
    </div>
  );
}
