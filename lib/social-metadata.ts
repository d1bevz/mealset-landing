import type { Metadata } from 'next';
import { assetUrl, siteUrl } from './site-url';

type Locale = 'ru' | 'en';

const ogLocale: Record<Locale, string> = { ru: 'ru_RU', en: 'en_US' };

// Open Graph and Twitter cards share one 1200x630 photo per design;
// the title and description come from the page metadata.
export function socialMetadata({
  locale,
  path,
  title,
  description,
  image,
  imageAlt,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  const imageUrl = assetUrl(image);
  return {
    openGraph: {
      type: 'website',
      siteName: 'Mealset',
      url: siteUrl(path),
      title,
      description,
      locale: ogLocale[locale],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
