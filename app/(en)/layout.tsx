import { publicPath } from '@/lib/public-path';
import { siteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import '../globals.css';
export const metadata: Metadata = {
  title: 'Mealset — Good food. Second nature.',
  description:
    'Meet Sasha, your AI nutrition companion in Telegram. Understand your food, build a realistic meal plan and make self-care an everyday habit.',
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
