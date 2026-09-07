import { siteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import { PremiumLanding } from '../../premium/landing';
export const metadata: Metadata = {
  title: 'Mealset — питание становится личным',
  description:
    'Саша — ИИ-нутрициолог в Telegram. Записывает еду текстом, голосом, по фото и скриншоту Uber Eats. Помнит твои вкусы и разговоры. Рекомендации на основе науки.',
  alternates: {
    canonical: siteUrl('/v2'),
    languages: {
      ru: siteUrl('/v2'),
      en: siteUrl('/en/v2'),
    },
  },
};
export default function Page() {
  return <PremiumLanding locale="ru" />;
}
