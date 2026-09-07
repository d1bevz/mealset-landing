import { publicPath } from '@/lib/public-path';
import { siteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Mealset — хорошее питание. Привычное дело.',
  description:
    'Саша — ИИ-нутрициолог в Telegram. Помогает понять свой рацион, составить план и превратить заботу о себе в привычку.',
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
