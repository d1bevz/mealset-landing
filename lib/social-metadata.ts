import type { Metadata } from 'next';
import { assetUrl, siteUrl } from './site-url';
import { previewMetaCopy } from './preview-metadata';
import { localeInfo, type PrimaryLocale } from './primary-locales';

export function socialMetadata(locale: PrimaryLocale): Metadata {
  const { title, description, imageAlt } = previewMetaCopy[locale];
  const { ogLocale, route } = localeInfo[locale];
  const image = {
    url: assetUrl(`/assets/og-mealset-life-${locale}-v2.png`),
    width: 1200,
    height: 630,
    alt: imageAlt,
    type: 'image/png',
  };
  return {
    title,
    description,
    alternates: {
      canonical: siteUrl(route),
      languages: {
        ...Object.fromEntries(
          Object.values(localeInfo).map((info) => [
            info.htmlLang,
            siteUrl(info.route),
          ]),
        ),
        'x-default': siteUrl(localeInfo.en.route),
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'Mealset',
      locale: ogLocale,
      url: siteUrl(route),
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
