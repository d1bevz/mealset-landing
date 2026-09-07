import { siteUrl } from '@/lib/site-url';
import type { Metadata } from 'next';
import { PremiumLanding } from '../../premium/landing';
export const metadata: Metadata = {
  title: 'Mealset — питание становится личным',
  description:
    'Твои вкусы. Твой ритм. Твоя цель. Саша — ИИ-нутрициолог Mealset в Telegram. Личный подход к повседневному питанию.',
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
