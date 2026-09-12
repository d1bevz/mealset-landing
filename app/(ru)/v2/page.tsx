import { siteUrl } from '@/lib/site-url';
import { socialMetadata } from '@/lib/social-metadata';
import type { Metadata } from 'next';
import { PremiumLanding } from '../../premium/landing';

const title = 'Mealset — питание становится личным';
const description =
  'Саша — ИИ-нутрициолог в Telegram. Записывает еду текстом, голосом, по фото и скриншоту Uber Eats. Помнит твои вкусы и разговоры. Рекомендации на основе науки.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: siteUrl('/v2'),
    languages: {
      ru: siteUrl('/v2'),
      en: siteUrl('/en/v2'),
    },
  },
  ...socialMetadata({
    locale: 'ru',
    path: '/v2',
    title,
    description,
    image: '/assets/premium/og-premium.jpg',
    imageAlt: 'Романеско на тёмно-зелёном фоне',
  }),
};
export default function Page() {
  return <PremiumLanding locale="ru" />;
}
