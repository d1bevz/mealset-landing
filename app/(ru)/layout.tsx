import { publicPath } from '@/lib/public-path';
import { siteUrl } from '@/lib/site-url';
import { socialMetadata } from '@/lib/social-metadata';
import type { Metadata } from 'next';
import '../globals.css';

const title = 'Mealset — хорошее питание. Привычное дело.';
const description =
  'Саша — ИИ-нутрициолог в Telegram. Записывает еду текстом, голосом, по фото и скриншоту Uber Eats. Помнит твои вкусы и разговоры. Рекомендации на основе науки.';

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: publicPath('/assets/mealset-mark.svg') },
  alternates: {
    canonical: siteUrl('/'),
    languages: {
      ru: siteUrl('/'),
      en: siteUrl('/en'),
    },
  },
  ...socialMetadata({
    locale: 'ru',
    path: '/',
    title,
    description,
    image: '/assets/og-default.jpg',
    imageAlt: 'Боул с лососем, овощами и крупой на светлом столе',
  }),
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
