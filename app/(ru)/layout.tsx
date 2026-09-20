import { publicPath } from '@/lib/public-path';
import { siteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Mealset — хорошее питание. Привычное дело.',
  description:
    'Саша — твой ИИ-нутрициолог в Telegram. Помогает наладить питание с учётом твоих целей, вкусов и образа жизни. Научный подход и изменения, которые вписываются в твой день.',
  icons: { icon: publicPath('/assets/mealset-mark.svg') },
  alternates: {
    canonical: siteUrl('/'),
    languages: {
      ru: siteUrl('/'),
      en: siteUrl('/en'),
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
