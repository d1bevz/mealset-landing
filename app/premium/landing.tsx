/* Language links cross document layouts and intentionally use full navigation. */
/* oxlint-disable next/no-html-link-for-pages */
import Image from 'next/image';
import { pagePath, publicPath } from '@/lib/public-path';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { Locale } from '../copy';
import { premiumCopy } from './copy';
import './premium.css';
import { PremiumExperience } from './experience';
const bot = 'https://t.me/mealset_bot';
export function PremiumLanding({ locale }: { locale: Locale }) {
  const d = premiumCopy[locale];
  return (
    <div className="premium">
      <a className="skip-link" href="#premium-main">
        {locale === 'ru' ? 'К содержимому' : 'Skip to content'}
      </a>
      <header className="p-header">
        <a
          className="p-wordmark"
          href={pagePath(locale === 'ru' ? '/v2' : '/en/v2')}
          aria-label="Mealset"
        >
          mealset<span>.</span>
        </a>
        <nav aria-label={locale === 'ru' ? 'Навигация' : 'Navigation'}>
          <a href="#approach">{d.nav[0]}</a>
          <a href="#experience">{d.nav[1]}</a>
        </nav>
        <div className="p-header-right">
          <div className="p-languages">
            <a
              href={pagePath('/v2')}
              hrefLang="ru"
              lang="ru"
              aria-current={locale === 'ru' ? 'page' : undefined}
            >
              RU
            </a>
            <span>/</span>
            <a
              href={pagePath('/en/v2')}
              hrefLang="en"
              lang="en"
              aria-current={locale === 'en' ? 'page' : undefined}
            >
              EN
            </a>
          </div>
          <a className="p-nav-cta" href={bot}>
            {d.nav[2]}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>
      <main id="premium-main">
        <section className="p-hero" aria-labelledby="p-hero-title">
          <Image
            unoptimized
            className="p-hero-art"
            src={publicPath('/assets/premium/romanesco-natural.jpg')}
            alt={d.imageAlt}
            width={1536}
            height={1024}
            fetchPriority="high"
          />
          <div className="p-hero-shade" />
          <div className="p-hero-copy p-shell">
            <p className="p-eyebrow">{d.eyebrow}</p>
            <h1 id="p-hero-title">
              {d.hero.map((line, i) => (
                <span key={line} className={i === 2 ? 'p-lime' : undefined}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="p-hero-body">{d.heroBody}</p>
            <a className="p-button p-button-light" href={bot}>
              {d.start}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="p-hero-bottom p-shell">
            <span>MEAL + MINDSET</span>
            <a href="#approach">
              {d.scroll}
              <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <section id="approach" className="p-thesis p-shell">
          <div>
            <p className="p-eyebrow">{d.thesisLabel}</p>
            <h2>
              {d.thesis[0]}
              <br />
              <span>{d.thesis[1]}</span>
            </h2>
          </div>
          <p className="p-thesis-body">{d.thesisBody}</p>
        </section>
        <section id="experience" className="p-experience p-shell">
          <p className="p-eyebrow">{d.experienceLabel}</p>
          <h2>
            {d.experience[0]}
            <br />
            <span>{d.experience[1]}</span>
          </h2>
          <p className="p-section-body">{d.experienceBody}</p>
          <PremiumExperience locale={locale} />
        </section>
        <section className="p-food">
          <div className="p-food-copy p-shell">
            <p className="p-eyebrow">{d.foodLabel}</p>
            <h2>
              {d.food[0]}
              <br />
              <span>{d.food[1]}</span>
            </h2>
            <p>{d.foodBody}</p>
          </div>
          <Image
            unoptimized
            src={publicPath('/assets/food-hero.jpg')}
            alt={d.foodAlt}
            width={1536}
            height={1024}
            loading="lazy"
          />
        </section>
        <section className="p-values p-shell">
          <p className="p-eyebrow">{d.valuesLabel}</p>
          <div>
            {d.values.map((v, i) => (
              <article key={v.name}>
                <span className="p-value-number">0{i + 1}</span>
                <h3>{v.name}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="p-finale">
          <div className="p-shell">
            <Image
              unoptimized
              className="p-sasha"
              src={publicPath('/assets/sasha-avatar.png')}
              alt={locale === 'ru' ? 'Саша' : 'Sasha'}
              width={72}
              height={72}
              loading="lazy"
            />
            <p className="p-eyebrow">{d.endLabel}</p>
            <h2>
              {d.end[0]}
              <br />
              <span>{d.end[1]}</span>
            </h2>
            <p className="p-end-body">{d.endBody}</p>
            <a className="p-button p-button-dark" href={bot}>
              {d.start}
              <ArrowUpRight size={17} />
            </a>
            <p className="p-access">{d.access}</p>
          </div>
        </section>
      </main>
      <footer className="p-footer p-shell">
        <a
          className="p-wordmark"
          href={pagePath(locale === 'ru' ? '/v2' : '/en/v2')}
          aria-label="Mealset"
        >
          mealset<span>.</span>
        </a>
        <p>{d.boundary}</p>
        <span>© {new Date().getFullYear()} Mealset</span>
      </footer>
    </div>
  );
}
