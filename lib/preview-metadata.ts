import type { Metadata } from 'next';
import { publicPath } from './public-path';
import { siteUrl } from './site-url';

export const previewMetaCopy = {
  ru: {
    title: 'Mealset — питаться лучше с меньшими усилиями',
    description:
      'Саша поможет с ежедневными заботами о питании: запишет еду, даст понятный совет и составит меню под твои вкусы, привычки и продукты дома. Всё в Telegram.',
    imageAlt:
      'Mealset. Питаться лучше. С меньшими усилиями. Саша поможет с питанием, меню и ежедневными заботами.',
  },
  en: {
    title: 'Mealset — Eat better with less effort',
    description:
      'Sasha helps with everyday nutrition: log meals, get practical advice and plan food around your tastes, routines and ingredients at home. All in Telegram.',
    imageAlt:
      'Mealset. Eat better. With less effort. Sasha helps with meals, planning and everyday details.',
  },
};

export function previewMetadata(locale: 'ru' | 'en'): Metadata {
  const d = previewMetaCopy[locale];
  const route = locale === 'ru' ? '/preview' : '/en/preview';
  // Use the configured origin and asset prefix without applying page trailing slashes.
  const imageUrl = new URL(
    publicPath(`/assets/og-mealset-effort-${locale}-v1.png`),
    siteUrl('/'),
  ).href;
  const image = {
    url: imageUrl,
    width: 1200,
    height: 630,
    alt: d.imageAlt,
    type: 'image/png',
  };
  return {
    title: d.title,
    description: d.description,
    applicationName: 'Mealset',
    robots: { index: false, follow: false },
    alternates: {
      canonical: siteUrl(route),
      languages: { ru: siteUrl('/preview'), en: siteUrl('/en/preview') },
    },
    icons: {
      icon: [
        { url: publicPath('/assets/mealset-mark.svg'), type: 'image/svg+xml' },
        {
          url: publicPath('/assets/mealset-icon-32.png'),
          type: 'image/png',
          sizes: '32x32',
        },
      ],
      apple: [
        {
          url: publicPath('/assets/mealset-apple-touch-icon.png'),
          sizes: '180x180',
          type: 'image/png',
        },
      ],
    },
    openGraph: {
      type: 'website',
      siteName: 'Mealset',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      alternateLocale: locale === 'ru' ? ['en_US'] : ['ru_RU'],
      url: siteUrl(route),
      title: d.title,
      description: d.description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.title,
      description: d.description,
      images: [image],
    },
  };
}
