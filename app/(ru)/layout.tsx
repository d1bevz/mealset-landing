import { previewMetaCopy } from '@/lib/preview-metadata';
import { publicPath } from '@/lib/public-path';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: previewMetaCopy.ru.title,
  description: previewMetaCopy.ru.description,
  icons: { icon: publicPath('/assets/mealset-mark.svg') },
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
