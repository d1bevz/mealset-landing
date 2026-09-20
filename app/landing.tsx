/* Full document navigation between language root layouts keeps html lang correct. */
/* oxlint-disable next/no-html-link-for-pages */
import Image from 'next/image';
import { pagePath, publicPath } from '@/lib/public-path';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Conversation } from './conversation';
import { FoodLogging } from './food-logging';
import { Science } from './science';
import { Pricing } from './pricing';
import { copy, type Locale } from './copy';
const telegram = 'https://t.me/mealset_bot';
export function Wordmark() {
  return (
    <span className="wordmark">
      mealset<span className="wordmark-dot">.</span>
    </span>
  );
}
function Lines({ text }: { text: string[] }) {
  return (
    <>
      {text.map((line, i) => (
        <span key={line}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}
export function Landing({ locale }: { locale: Locale }) {
  const d = copy[locale];
  return (
    <>
      <a className="skip-link" href="#main">
        {d.skip}
      </a>
      <header className="site-header">
        <a href={pagePath(locale === 'ru' ? '/' : '/en')} aria-label={d.home}>
          <Wordmark />
        </a>
        <nav
          aria-label={
            locale === 'ru' ? 'Основная навигация' : 'Main navigation'
          }
        >
          {['mindset', 'how', 'sasha'].map((id, i) => (
            <a key={id} href={`#${id}`}>
              {d.nav[i]}
            </a>
          ))}
          <a href="#pricing">{locale === 'ru' ? 'Стоимость' : 'Pricing'}</a>
        </nav>
        <div className="header-actions">
          <div
            className="locale-switch"
            aria-label={locale === 'ru' ? 'Язык страницы' : 'Page language'}
          >
            <a
              href={pagePath('/')}
              hrefLang="ru"
              lang="ru"
              aria-current={locale === 'ru' ? 'page' : undefined}
            >
              RU
            </a>
            <span>/</span>
            <a
              href={pagePath('/en')}
              hrefLang="en"
              lang="en"
              aria-current={locale === 'en' ? 'page' : undefined}
            >
              EN
            </a>
          </div>
          <a className="button button-small" href={telegram}>
            {d.start} <ArrowUpRight size={15} />
          </a>
        </div>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">{d.eyebrow}</p>
          <h1 id="hero-title">
            {d.headline[0]}
            <br />
            <span>{d.headline[1]}</span>
          </h1>
          <p className="hero-description">
            <Lines text={d.intro} />
          </p>
          <div className="hero-actions">
            <a className="button" href={telegram}>
              {d.meet} <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#how">
              {d.nav[1]} <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-image-wrap">
            <Image
              unoptimized
              className="hero-image"
              src={publicPath('/assets/food-hero.jpg')}
              alt={d.foodAlt}
              width={1536}
              height={1024}
              fetchPriority="high"
            />
            <div className="hero-note">
              <span className="note-dot" />
              <span>
                {d.note[0]}
                <br />
                <strong>{d.note[1]}</strong>
              </span>
            </div>
            <span className="hero-caption">MEAL + MINDSET</span>
          </div>
        </section>
        <section
          className="mindset section-shell"
          id="mindset"
          aria-labelledby="mindset-title"
        >
          <div className="section-intro">
            <p className="eyebrow">{d.mindsetEyebrow}</p>
            <h2 id="mindset-title">
              <Lines text={d.mindsetTitle} />
            </h2>
            <p>{d.mindsetBody}</p>
          </div>
          <div className="values">
            {d.values.map((value, i) => (
              <article key={value.label}>
                <span className="value-number">0{i + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
                <span className="value-label">{value.label}</span>
              </article>
            ))}
          </div>
        </section>
        <FoodLogging locale={locale} />
        <section className="how-section" id="how" aria-labelledby="how-title">
          <div className="section-shell how-grid">
            <div className="how-copy">
              <p className="eyebrow">{d.howEyebrow}</p>
              <h2 id="how-title">
                {d.howTitle[0]}
                <br />
                <span>{d.howTitle[1]}</span>
              </h2>
              <p>{d.howBody}</p>
              <p className="secondary-copy">{d.howNote}</p>
            </div>
            <Conversation locale={locale} />
          </div>
        </section>
        <Science locale={locale} />
        <section
          className="food-story section-shell"
          aria-labelledby="food-title"
        >
          <div className="food-story-title">
            <p className="eyebrow">{d.foodEyebrow}</p>
            <h2 id="food-title">
              {d.foodTitle[0]}
              <br />
              {d.foodTitle[1]}
              <br />
              <span>{d.foodTitle[2]}</span>
            </h2>
          </div>
          <div className="food-detail">
            <Image
              unoptimized
              src={publicPath('/assets/food-bolognese.png')}
              alt={d.foodDetailAlt}
              width={1536}
              height={1024}
              loading="lazy"
            />
            <p>
              <Lines text={d.foodCaption} />
            </p>
          </div>
        </section>
        <section
          className="sasha-section"
          id="sasha"
          aria-labelledby="sasha-title"
        >
          <div className="section-shell sasha-grid">
            <div className="sasha-art">
              <Image
                unoptimized
                src={publicPath('/assets/sasha-avatar.png')}
                alt={d.sashaAlt}
                width={1254}
                height={1254}
                loading="lazy"
              />
              <span className="sasha-signature">{d.sashaName}, Mealset</span>
            </div>
            <div className="sasha-copy">
              <p className="eyebrow">{d.sashaEyebrow}</p>
              <h2 id="sasha-title">
                <Lines text={d.sashaTitle} />
              </h2>
              <p>{d.sashaBody}</p>
              <blockquote>
                <Lines text={d.quote} />
              </blockquote>
              <a className="button" href={telegram}>
                {d.talk} <ArrowUpRight size={17} />
              </a>
              <p className="access-note">
                <Lines text={d.access} />
                <br />
                <a href="#pricing">
                  {locale === 'ru'
                    ? 'Стоимость подписки'
                    : 'Subscription pricing'}
                </a>
              </p>
            </div>
          </div>
        </section>
        <Pricing locale={locale} />
        <section className="closing section-shell" aria-label={d.promise}>
          <span className="eyebrow">MEALSET</span>
          <p>
            {d.closing[0]}
            <br />
            <span>{d.closing[1]}</span>
          </p>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <div>
          <Wordmark />
          <p>{d.footerValues}</p>
        </div>
        <p>
          <Lines text={d.boundary} />
        </p>
        <span>© {new Date().getFullYear()} Mealset</span>
      </footer>
    </>
  );
}
