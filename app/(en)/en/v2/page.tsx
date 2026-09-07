import { siteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import { PremiumLanding } from '../../../premium/landing';
export const metadata: Metadata = {
  title: 'Mealset — Nutrition. Made personal.',
  description:
    'Your tastes. Your rhythm. Your goals. Meet Sasha, Mealset’s AI nutrition companion in Telegram. A personal approach to everyday nutrition.',
  alternates: {
    canonical: siteUrl('/en/v2'),
    languages: {
      ru: siteUrl('/v2'),
      en: siteUrl('/en/v2'),
    },
  },
};
export default function Page() {
  return <PremiumLanding locale="en" />;
}
