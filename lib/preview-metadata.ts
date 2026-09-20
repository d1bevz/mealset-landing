import type { Metadata } from 'next';
import { publicPath } from './public-path';
import { siteUrl } from './site-url';

export const previewMetaCopy = {
  ru: {
    title: 'Mealset — наслаждайся жизнью. Саша разберётся с едой.',
    description:
      'Хочешь похудеть или набрать мышцы? Саша возьмёт учёт еды на себя и поможет выстроить полезные привычки в питании, которые легко поддерживать. В Telegram.',
    imageAlt:
      'Mealset. Наслаждайся жизнью. Саша разберётся с едой. Полезные привычки в питании. Меньше ручной рутины.',
  },
  en: {
    title: 'Mealset — Enjoy your life. Sasha handles the food.',
    description:
      'Want to lose weight or build muscle? Sasha takes care of food tracking and helps you build healthier eating habits that feel easy to stick with. In Telegram.',
    imageAlt:
      'Mealset. Enjoy your life. Sasha handles the food. Healthier eating habits. Less manual tracking.',
  },
};

export function previewMetadata(locale: 'ru' | 'en'): Metadata {
  const d = previewMetaCopy[locale];
  const route = locale === 'ru' ? '/preview' : '/en/preview';
  // Use the configured origin and asset prefix without applying page trailing slashes.
  const imageUrl = new URL(
    publicPath(`/assets/og-mealset-life-${locale}-v2.png`),
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
