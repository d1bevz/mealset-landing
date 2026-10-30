import { localeInfo } from '@/lib/primary-locales';
import { previewMetaCopy } from '@/lib/preview-metadata';
import { publicPath } from '@/lib/public-path';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: previewMetaCopy.pt.title,
  description: previewMetaCopy.pt.description,
  icons: { icon: publicPath('/assets/mealset-mark.svg') },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={localeInfo.pt.htmlLang}>
      <body>{children}</body>
    </html>
  );
}
