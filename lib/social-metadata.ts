import type { Metadata } from 'next';
import { assetUrl, siteUrl } from './site-url';

export function socialMetadata(locale: 'ru' | 'en'): Metadata {
  const ru = locale === 'ru';
  const title = ru
    ? 'Саша — питание под контролем'
    : 'Sasha — nutrition made personal';
  const description = ru
    ? 'Считает калории. Помнит тебя. Помогает каждый день. Твой ИИ-нутрициолог в Telegram.'
    : 'Tracks calories. Remembers you. Helps every day. Your AI nutritionist in Telegram.';
  const image = {
    url: assetUrl(`/assets/og-sasha-${locale}.png`),
    width: 1200,
    height: 630,
    alt: title,
  };
  return {
    openGraph: {
      type: 'website',
      siteName: 'Mealset',
      locale: ru ? 'ru_RU' : 'en_US',
      url: siteUrl(ru ? '/' : '/en'),
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
