import { siteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import { PremiumLanding } from '../../../premium/landing';
export const metadata: Metadata = {
  title: 'Mealset — Nutrition. Made personal.',
  description:
    'Sasha is your AI nutrition companion in Telegram. Log food by text, voice, photo or Uber Eats screenshot. Personal memory and science-based guidance.',
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
