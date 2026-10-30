import type { PrimaryLocale } from '@/lib/primary-locales';
import './pricing.css';
import { pricingCopy } from './pricing-copy';

export function Pricing({ locale }: { locale: PrimaryLocale }) {
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
