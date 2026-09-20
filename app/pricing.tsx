import type { Locale } from './copy';
import './pricing.css';

// Monthly prices: mealset PR #330, decisions dated 2026-09-20.
// Approximate purchase costs checked 2026-09-20 against App Store listings:
// RU: 2 × 500 Stars at RUB 1060 ≈ RUB 2100; PT: 1000 Stars at EUR 21.99 ≈ EUR 22.
export const pricingCopy = {
  ru: {
    label: 'ПОДПИСКА MEALSET',
    title: 'Забота о питании. Каждый месяц.',
    body: 'Разговоры с Сашей, дневник питания и план меню от Шефа на неделю — в одной подписке.',
    stars: 'Telegram Stars',
    starsPrice: '1000 ⭐',
    estimate: '≈ 2100 ₽ в месяц',
    estimateNote:
      'Ориентир по цене звёзд в App Store. Стоимость зависит от страны и места покупки звёзд.',
    estimateSource:
      'https://apps.apple.com/ru/app/telegram-messenger/id686449807',
    period: 'в месяц',
    terms:
      'Оплата звёздами в Telegram. Условия — в боте до покупки. Действуют лимиты использования: отдельно на диалоги и на составление меню Шефом.',
    action: 'Посмотреть условия в Telegram',
  },
  en: {
    label: 'MEALSET MEMBERSHIP',
    title: 'Nutrition support. Every month.',
    body: 'Conversations with Sasha, a food diary and a weekly meal plan from Chef — in one subscription.',
    stars: 'Telegram Stars',
    starsPrice: '1000 ⭐',
    estimate: '≈ €22 per month',
    estimateNote:
      'Estimate based on App Store Stars prices. Cost varies by country and where you buy Stars.',
    estimateSource:
      'https://apps.apple.com/pt/app/telegram-messenger/id686449807',
    period: 'per month',
    terms:
      'Pay with Stars in Telegram. See terms in the bot before purchasing. Usage limits apply separately to conversations and Chef meal planning.',
    action: 'See terms in Telegram',
  },
};

export function Pricing({ locale }: { locale: Locale }) {
  const d = pricingCopy[locale];
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <p className="pricing-label">{d.label}</p>
      <h2 id="pricing-title">{d.title}</h2>
      <p className="pricing-intro">{d.body}</p>
      <div className="pricing-options">
        <article className="pricing-option">
          <h3>{d.stars}</h3>
          <p className="pricing-amount">{d.starsPrice}</p>
          <p className="pricing-period">{d.period}</p>
          <p className="pricing-estimate">{d.estimate}</p>
          <p className="pricing-method-note">{d.estimateNote}</p>
          <a className="pricing-source" href={d.estimateSource}>
            App Store ↗
          </a>
        </article>
      </div>
      <p className="pricing-terms">{d.terms}</p>
      <a className="pricing-cta" href="https://t.me/mealset_bot">
        {d.action}
      </a>
    </section>
  );
}
