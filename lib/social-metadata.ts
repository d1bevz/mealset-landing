import type { Metadata } from 'next';
import { assetUrl, siteUrl } from './site-url';
import { previewMetaCopy } from './preview-metadata';

export function socialMetadata(locale: 'ru' | 'en'): Metadata {
  const ru = locale === 'ru';
  const { title, description, imageAlt } = previewMetaCopy[locale];
  const image = {
    url: assetUrl(`/assets/og-mealset-effort-${locale}-v1.png`),
    width: 1200,
    height: 630,
    alt: imageAlt,
    type: 'image/png',
  };
  return {
    title,
    description,
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
