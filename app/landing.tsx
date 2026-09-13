/* Full document navigation between language root layouts keeps html lang correct. */
/* oxlint-disable next/no-html-link-for-pages */
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';
import { pagePath, publicPath } from '@/lib/public-path';
import { copy, type Locale } from './copy';
import { primaryCopy, pricing, formatApproximatePrice } from './primary-copy';
import { PrimaryDemo } from './primary-demo';
import { PrimaryLanguageSwitch } from './primary-language-switch';
import { languageBootstrap } from '@/lib/language-preference';
import './primary.css';
const telegram = 'https://t.me/mealset_bot';
export function Wordmark() {
  return (
    <span className="wordmark">
      mealset<span className="wordmark-dot">.</span>
    </span>
  );
}
export function Landing({ locale }: { locale: Locale }) {
  const old = copy[locale];
  const d = primaryCopy[locale];
  return (
    <div className="mealset-primary">
      {locale === 'ru' && (
        <script
          dangerouslySetInnerHTML={{
            __html: languageBootstrap(pagePath('/'), pagePath('/en')),
          }}
        />
      )}
      <a className="skip-link" href="#main">
        {old.skip}
      </a>
      <header className="site-header">
        <a href={pagePath(locale === 'ru' ? '/' : '/en')} aria-label={old.home}>
          <Wordmark />
        </a>
        <nav
          aria-label={
            locale === 'ru' ? 'Основная навигация' : 'Main navigation'
          }
        >
          {['food-diary', 'approach', 'pricing'].map((id, i) => (
            <a key={id} href={`#${id}`}>
              {d.nav[i]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <PrimaryLanguageSwitch locale={locale} />
          <a className="button button-small" href={telegram}>
            {old.start}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>
      <main id="main">
        <section className="m-hero m-shell" aria-labelledby="hero-title">
          <p className="m-eyebrow">
            {locale === 'ru'
              ? 'ТВОЙ ИИ-НУТРИЦИОЛОГ В TELEGRAM'
              : 'YOUR AI NUTRITIONIST IN TELEGRAM'}
          </p>
          <h1 id="hero-title">
            {old.headline[0]}
            <br />
            <span>{old.headline[1]}</span>
          </h1>
          <p className="m-hero-body">{d.intro}</p>
          <div className="m-hero-actions">
            <a className="button" href={telegram}>
              {old.meet}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="m-text-link" href="#food-diary">
              {d.see}
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="m-paid-note">{d.paid}</p>
          <div className="m-hero-scene">
            <Image
              unoptimized
              className="m-hero-food"
              src={publicPath('/assets/food-hero.jpg')}
              alt={old.foodAlt}
              width={1536}
              height={1024}
              fetchPriority="high"
            />
            <div className="m-hero-conversation">
              <div className="m-chat-heading">
                <Image
                  unoptimized
                  src={publicPath('/assets/sasha-avatar.png')}
                  alt=""
                  width={40}
                  height={40}
                />
                <div>
                  <strong>{old.sashaName}</strong>
                  <span>{d.role}</span>
                </div>
                <span className="m-example-label">{d.example}</span>
              </div>
              <div className="m-message m-user">
                <p>{d.heroQuestion}</p>
              </div>
              <div className="m-message m-sasha">
                <p>{d.heroAnswer}</p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="m-section m-diary"
          id="food-diary"
          aria-labelledby="diary-title"
        >
          <PrimaryDemo locale={locale} />
        </section>
        <section
          className="m-section m-shell"
          id="how"
          aria-labelledby="memory-title"
        >
          <div className="m-section-heading">
            <p className="m-eyebrow">{d.memoryLabel}</p>
            <h2 id="memory-title">
              {d.memoryTitle[0]}
              <br />
              <span>{d.memoryTitle[1]}</span>
            </h2>
            <p className="m-lead">{d.memoryIntro}</p>
          </div>
          <div className="m-progress">
            {d.progress.map((p, i) => (
              <article key={p.title}>
                <span className="m-progress-number">0{i + 1}</span>
                <p className="m-progress-time">{p.time}</p>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="m-section m-approach"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="m-shell">
            <div className="m-approach-heading">
              <Image
                unoptimized
                src={publicPath('/assets/sasha-avatar.png')}
                alt={old.sashaAlt}
                width={220}
                height={220}
                loading="lazy"
              />
              <div>
                <p className="m-eyebrow">{d.approachLabel}</p>
                <h2 id="approach-title">
                  {d.approachTitle[0]}
                  <br />
                  <span>{d.approachTitle[1]}</span>
                </h2>
                <p className="m-lead">{d.approachBody}</p>
              </div>
            </div>
            <div className="m-principles">
              {d.principles.map((p) => (
                <article key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
            <div className="m-sources">
              <span>{d.sources}</span>
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
                target="_blank"
                rel="noreferrer"
              >
                {d.who}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                href="https://www.efsa.europa.eu/en/topics/topic/dietary-reference-values"
                target="_blank"
                rel="noreferrer"
              >
                {d.efsa}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section
          className="m-section m-shell m-pricing"
          id="pricing"
          aria-labelledby="pricing-title"
        >
          <div className="m-section-heading">
            <p className="m-eyebrow">{d.priceLabel}</p>
            <h2 id="pricing-title">{d.priceTitle}</h2>
            <p className="m-lead">{d.priceIntro}</p>
          </div>
          <div className="m-plans">
            {[
              {
                name: d.week,
                amount: pricing.week,
                period: d.weekPeriod,
                terms: d.weekTerms,
                description: d.weekDescription,
                cta: d.weekCta,
              },
              {
                name: d.month,
                amount: pricing.month,
                period: d.monthPeriod,
                terms: d.monthTerms,
                description: d.monthDescription,
                cta: d.monthCta,
              },
            ].map((p, i) => (
              <article
                className={`m-plan${i === 1 ? ' m-plan-month' : ''}`}
                key={p.name}
              >
                <h3>{p.name}</h3>
                <p className="m-plan-price">
                  <strong>{formatApproximatePrice(p.amount, locale)}</strong>
                </p>
                <p className="m-plan-period">{p.period}</p>
                <p className="m-plan-description">{p.description}</p>
                <p className="m-plan-terms">{p.terms}</p>
                <a
                  className="button"
                  href={telegram}
                  aria-label={`${p.cta} — Telegram`}
                >
                  {p.cta}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <p className="m-pricing-note">{d.priceNote}</p>
          <p className="m-pricing-note">{d.cancelNote}</p>
        </section>
        <section className="m-section m-faq" aria-labelledby="faq-title">
          <div className="m-shell m-faq-grid">
            <h2 id="faq-title">{d.faqTitle}</h2>
            <div>
              {d.faq.map((f) => (
                <details key={f.q}>
                  <summary>
                    {f.q}
                    <Plus size={20} aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section
          className="m-section m-shell m-closing"
          aria-labelledby="closing-title"
        >
          <Image
            unoptimized
            src={publicPath('/assets/sasha-avatar.png')}
            alt=""
            width={76}
            height={76}
            loading="lazy"
          />
          <h2 id="closing-title">{d.closing}</h2>
          <p className="m-lead">{d.closingBody}</p>
          <a className="button" href={telegram}>
            {old.meet}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p className="m-paid-note">{d.paid}</p>
        </section>
      </main>
      <footer className="m-footer m-shell">
        <div>
          <Wordmark />
          <p>{d.footer}</p>
        </div>
        <p>{old.boundary.join(' ')}</p>
        <span>© {new Date().getFullYear()} Mealset</span>
      </footer>
    </div>
  );
}
