import { publicPath } from '@/lib/public-path';
import { siteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import '../globals.css';
export const metadata: Metadata = {
  title: 'Mealset — Good food. Second nature.',
  description:
    'Sasha is your AI nutritionist in Telegram. Build better eating habits around your goals, tastes and lifestyle, with science-based guidance and changes that fit your day.',
  icons: { icon: publicPath('/assets/mealset-mark.svg') },
  alternates: {
    canonical: siteUrl('/en'),
    languages: {
      ru: siteUrl('/'),
      en: siteUrl('/en'),
    },
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
