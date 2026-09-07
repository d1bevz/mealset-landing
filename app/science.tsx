import { ArrowUpRight } from 'lucide-react';
import type { Locale } from './copy';
import { featureCopy } from './product-copy';
import './product.css';

export function Science({ locale }: { locale: Locale }) {
  const d = featureCopy[locale].science;
  return (
    <section
      className="product-section science-section"
      id="science"
      aria-labelledby="science-title"
    >
      <div className="product-shell">
        <p className="product-eyebrow">{d.eyebrow}</p>
        <div className="science-intro">
          <h2 id="science-title">
            {d.title[0]}
            <br />
            <span>{d.title[1]}</span>
          </h2>
          <p>{d.body}</p>
        </div>
        <div className="science-principles">
          {d.principles.map((p, i) => (
            <article key={p.title}>
              <span>0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
        <div className="science-sources">
          <span>{d.sourcesLabel}</span>
          <a
            href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet"
            target="_blank"
            rel="noreferrer"
          >
            {d.who}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href="https://www.efsa.europa.eu/en/topics/topic/dietary-reference-values"
            target="_blank"
            rel="noreferrer"
          >
            {d.efsa}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
