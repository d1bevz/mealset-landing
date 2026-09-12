import { siteUrl } from '@/lib/site-url';
import { socialMetadata } from '@/lib/social-metadata';
import type { Metadata } from 'next';
import { PremiumLanding } from '../../../premium/landing';

const title = 'Mealset — Nutrition. Made personal.';
const description =
  'Sasha is your AI nutrition companion in Telegram. Log food by text, voice, photo or Uber Eats screenshot. Personal memory and science-based guidance.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: siteUrl('/en/v2'),
    languages: {
      ru: siteUrl('/v2'),
      en: siteUrl('/en/v2'),
    },
  },
  ...socialMetadata({
    locale: 'en',
    path: '/en/v2',
    title,
    description,
    image: '/assets/premium/og-premium.jpg',
    imageAlt: 'Romanesco on a dark green background',
  }),
};
export default function Page() {
  return <PremiumLanding locale="en" />;
}
