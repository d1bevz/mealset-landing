import { publicPath } from '@/lib/public-path';
import { siteUrl } from '@/lib/site-url';
import { socialMetadata } from '@/lib/social-metadata';
import type { Metadata } from 'next';
import '../globals.css';

const title = 'Mealset — Good food. Second nature.';
const description =
  'Sasha is your AI nutrition companion in Telegram. Log food by text, voice, photo or Uber Eats screenshot. Personal memory and science-based guidance.';

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: publicPath('/assets/mealset-mark.svg') },
  alternates: {
    canonical: siteUrl('/en'),
    languages: {
      ru: siteUrl('/'),
      en: siteUrl('/en'),
    },
  },
  ...socialMetadata({
    locale: 'en',
    path: '/en',
    title,
    description,
    image: '/assets/og-default.jpg',
    imageAlt: 'Bowl with salmon, vegetables and grains on a light table',
  }),
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
