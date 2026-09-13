'use client';
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Calculator,
  Brain,
  Lightbulb,
  CalendarDays,
  ShoppingBasket,
  BellRing,
  RotateCcw,
  Send,
} from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { publicPath } from '@/lib/public-path';
import { primaryCopy } from './primary-copy';
import { demoContent } from './primary-demo-copy';
import { demoVisual } from './primary-demo-visuals';
import type { Locale } from './copy';

const ids = ['calories', 'memory', 'advice', 'plan', 'shopping', 'proactive'];
const icons = [
  Calculator,
  Brain,
  Lightbulb,
  CalendarDays,
  ShoppingBasket,
  BellRing,
];
type Copy = ReturnType<typeof demoContent>;
function Message({
  children,
  user = false,
}: {
  children: ReactNode;
  user?: boolean;
}) {
  return (
    <div className={`m-message ${user ? 'm-user' : 'm-sasha'}`}>{children}</div>
  );
}
function Nutrition({
  c,
  index,
  locale,
}: {
  c: Copy;
  index: number;
  locale: Locale;
}) {
  const n = c.nutrition[index];
  const fmt = (v: number) =>
    v.toLocaleString(locale === 'ru' ? 'ru-RU' : 'en-GB');
  const labels = [c.protein, c.fat, c.carbs, c.fibre];
  return (
    <>
      <div className="m-nutrition">
        <strong>
          ≈ {fmt(n.kcal)} {c.kcal} <small>(±{n.error})</small>
        </strong>
        <dl>
          {[n.protein, n.fat, n.carbs, n.fibre].map((v, i) => (
            <div key={labels[i]}>
              <dt>{labels[i]}</dt>
              <dd>
                {fmt(v)} {c.grams}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="m-day-progress">
        <p>
          <strong>
            {c.day}: {fmt(n.day)} / {fmt(n.target)} {c.kcal} · {n.pct}%
          </strong>
        </p>
        <progress value={n.pct} max={100} aria-label={c.day} />
        <p>
          {c.remaining}: {n.remaining} {c.kcal}
        </p>
        <details className="m-source">
          <summary>{c.dayDetails}</summary>
          <p>
            {locale === 'ru' ? 'Диапазон итога дня' : 'Day total range'}:{' '}
            {n.range} {c.kcal}.
          </p>
          {n.dayMacros.map((v, i) => (
            <p key={labels[i]}>
              {labels[i]}: {fmt(v)} / {fmt(n.macroTargets[i])} {c.grams} ·{' '}
              {c.remaining.toLowerCase()} {fmt(n.macroRemaining[i])} {c.grams}
            </p>
          ))}
        </details>
      </div>
    </>
  );
}
function FoodResponse({
  c,
  index,
  locale,
}: {
  c: Copy;
  index: number;
  locale: Locale;
}) {
  return (
    <>
      <Message>
        <p>
          <strong>{c.mealTitle}</strong>
        </p>
        <ul className="m-food-lines">
          {(index === 0 ? c.breakfastIngredients : c.smoothieIngredients).map(
            (line) => (
              <li key={line}>{line}</li>
            ),
          )}
        </ul>
        {index === 0 && <p>{c.labelMemory}</p>}
        <Nutrition c={c} index={index} locale={locale} />
      </Message>
      <Message>
        <p>{index === 0 ? c.breakfastAdvice : c.smoothieAdvice}</p>
      </Message>
    </>
  );
}
function Shopping({ c }: { c: Copy }) {
  const [checked, setChecked] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [textMode, setTextMode] = useState(false);
  const reset = () => {
    setChecked([]);
    setDone(false);
    setTextMode(false);
  };
  const rows = (start: number, end: number) =>
    c.shopping.slice(start, end).map((label, offset) => {
      const i = start + offset;
      const selected = checked.includes(i);
      return (
        <button
          key={label}
          type="button"
          className="m-shopping-item"
          aria-pressed={selected}
          onClick={() =>
            setChecked((old) =>
              old.includes(i) ? old.filter((v) => v !== i) : [...old, i],
            )
          }
        >
          <span aria-hidden="true">{selected ? '✅' : '⬜'}</span>
          <span>{label}</span>
        </button>
      );
    });
  return (
    <Message>
      <div className="m-shopping-list">
        <p>
          <strong>{c.shoppingTitle}</strong>
        </p>
        <output className="m-shopping-count">
          {c.bought} {checked.length} {c.of} {c.shopping.length}
        </output>
        {done ? (
          <>
            <p>{c.completed}</p>
            <ul className="m-food-lines">
              {checked.map((i) => (
                <li key={i}>✅ {c.shopping[i]}</li>
              ))}
            </ul>
          </>
        ) : textMode ? (
          <ol className="m-shopping-text">
            {c.shopping.map((label, i) => (
              <li key={label}>
                {checked.includes(i) ? '☑' : '☐'} {label}
              </li>
            ))}
          </ol>
        ) : (
          <>
            {rows(0, 6)}
            <details className="m-source m-shopping-more">
              <summary>
                {c.more} · {c.shopping.length - 6}
              </summary>
              {rows(6, c.shopping.length)}
            </details>
          </>
        )}
        {!done && (
          <div className="m-shopping-actions">
            <button type="button" onClick={() => setDone(true)}>
              {c.done}
            </button>
            <a href="https://t.me/mealset_bot">
              {c.order}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <button
              type="button"
              aria-pressed={textMode}
              onClick={() => setTextMode(!textMode)}
            >
              {c.text}
            </button>
          </div>
        )}
        {(done || checked.length > 0 || textMode) && (
          <button
            type="button"
            className="m-reply m-shopping-reset"
            onClick={reset}
          >
            <RotateCcw size={16} aria-hidden="true" />
            {c.reset}
          </button>
        )}
      </div>
    </Message>
  );
}
function Scenario({ locale, index }: { locale: Locale; index: number }) {
  const d = primaryCopy[locale];
  const c = demoContent(locale);
  const [step, setStep] = useState(0);
  const hasNext =
    (index === 1 && step === 0) || ((index === 2 || index === 5) && step < 2);
  const followupId = `primary-followup-${ids[index]}`;
  return (
    <>
      <p className="m-demo-pain">{c.pains[index]}</p>
      <div className="m-transcript">
        <div className="m-chat-heading">
          <Image
            unoptimized
            src={publicPath('/assets/sasha-avatar.png')}
            alt=""
            width={40}
            height={40}
          />
          <div>
            <strong>{locale === 'ru' ? 'Саша' : 'Sasha'}</strong>
            <span>{d.role}</span>
          </div>
          <span className="m-example-label">{d.example}</span>
        </div>
        <div className="m-messages">
          {index !== 5 && (
            <Message user>
              <p>{c.inputs[index]}</p>
            </Message>
          )}
          {index === 5 && (
            <>
              <p className="m-proactive-context">{c.proactiveContext}</p>
              <p className="m-proactive-label">
                <BellRing size={15} aria-hidden="true" />
                {c.proactiveLabel}
              </p>
              <Message>
                <p>{c.proactiveMessage}</p>
              </Message>
              <div id={followupId} className="m-followup" aria-live="polite">
                {c.proactiveReplies.slice(0, step).map((reply, i) => (
                  <div key={reply}>
                    <Message user>
                      <p>{c.proactiveActions[i]}</p>
                    </Message>
                    <Message>
                      <p>{reply}</p>
                    </Message>
                  </div>
                ))}
              </div>
            </>
          )}
          {index === 0 && <FoodResponse c={c} index={0} locale={locale} />}
          {index === 1 && (
            <Message>
              <p>{c.confirm}</p>
            </Message>
          )}
          {index === 2 && (
            <Message>
              <p>{c.adviceStart}</p>
            </Message>
          )}
          {(index === 1 || index === 2) && (
            <div
              id={followupId}
              className="m-followup"
              aria-live="polite"
              aria-atomic="false"
            >
              {index === 1 && step > 0 && (
                <>
                  <Message user>
                    <p>{c.confirmAction}</p>
                  </Message>
                  <FoodResponse c={c} index={1} locale={locale} />
                </>
              )}
              {index === 2 &&
                c.adviceReplies.slice(0, step).map((reply, i) => (
                  <div key={reply}>
                    <Message user>
                      <p>{c.adviceActions[i]}</p>
                    </Message>
                    <Message>
                      <p>{reply}</p>
                    </Message>
                  </div>
                ))}
            </div>
          )}
          {index === 3 && (
            <Message>
              <p>{c.planIntro}</p>
              <p className="m-plan-target">
                <strong>{c.planTarget}</strong>
              </p>
              <ul className="m-plan-summary">
                {c.planSummary.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
              <p>{c.planEnd}</p>
              <a className="m-inline-link" href="https://t.me/mealset_bot">
                {c.planCta}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </Message>
          )}
          {index === 4 && (
            <>
              <Message>
                <p>{c.shoppingIntro}</p>
              </Message>
              <Shopping c={c} />
            </>
          )}
        </div>
        <div className="m-demo-controls">
          {index === 0 && (
            <details className="m-source">
              <summary>{c.planChangeTitle}</summary>
              <p className="m-demo-small">{c.planChangeNote}</p>
              <ul className="m-plan-changes">
                {c.planChanges.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p>{c.planChangeEnd}</p>
            </details>
          )}
          {hasNext && <p className="m-control-label">{d.try}</p>}
          {(hasNext || step > 0) && (
            <button
              className="m-reply"
              type="button"
              onClick={() => setStep(hasNext ? step + 1 : 0)}
              aria-expanded={step > 0}
              aria-controls={followupId}
            >
              {hasNext ? (
                <Send size={18} aria-hidden="true" />
              ) : (
                <RotateCcw size={18} aria-hidden="true" />
              )}
              {hasNext
                ? index === 1
                  ? c.confirmAction
                  : index === 5
                    ? c.proactiveActions[step]
                    : c.adviceActions[step]
                : d.reset}
            </button>
          )}
          <details className="m-source m-demo-provenance">
            <summary>
              {locale === 'ru'
                ? 'О примере и расчётах'
                : 'About this example and its calculations'}
            </summary>
            <p>{c.sources[index]}</p>
            {[0, 1].includes(index) && <p>{c.historyNote}</p>}
          </details>
        </div>
      </div>
    </>
  );
}
function ScenarioVisual({
  index,
  locale,
  mobile = false,
}: {
  index: number;
  locale: Locale;
  mobile?: boolean;
}) {
  const visual = demoVisual(index, locale);
  return (
    <figure
      className={`m-scenario-visual${mobile ? ' m-scenario-visual-mobile' : ''}`}
    >
      <Image
        key={visual.file}
        unoptimized
        className="m-diary-photo"
        src={publicPath(`/assets/${visual.file}`)}
        alt={visual.alt}
        width={1050}
        height={700}
        loading="lazy"
      />
      <figcaption>{visual.caption}</figcaption>
    </figure>
  );
}
export function PrimaryDemo({ locale }: { locale: Locale }) {
  const d = primaryCopy[locale];
  const c = demoContent(locale);
  const [method, setMethod] = useState(ids[0]);
  const activeIndex = ids.indexOf(method);
  const demoRef = useRef<HTMLDivElement>(null);
  const returnToStart = useRef(false);
  useLayoutEffect(() => {
    if (!returnToStart.current || !demoRef.current) return;
    returnToStart.current = false;
    demoRef.current.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, [method]);
  return (
    <div className="m-shell m-diary-grid">
      <div className="m-diary-copy">
        <p className="m-eyebrow">{d.demoLabel}</p>
        <h2 id="diary-title">
          {d.demoTitle[0]}
          <br />
          <span>{d.demoTitle[1]}</span>
        </h2>
        <p className="m-lead">{d.demoIntro}</p>
        <ScenarioVisual index={activeIndex} locale={locale} />
      </div>
      <Tabs
        ref={demoRef}
        value={method}
        onValueChange={(v) => {
          if (typeof v !== 'string' || v === method) return;
          const headerHeight = window.matchMedia('(max-width: 760px)').matches
            ? 70
            : 82;
          returnToStart.current =
            (demoRef.current?.getBoundingClientRect().top ?? 0) < headerHeight;
          setMethod(v);
        }}
        className="m-demo"
      >
        <TabsList aria-label={d.choose} className="m-methods">
          {ids.map((id, i) => {
            const Icon = icons[i];
            return (
              <TabsTrigger key={id} value={id}>
                <Icon size={16} aria-hidden="true" />
                {c.tabs[i]}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <ScenarioVisual index={activeIndex} locale={locale} mobile />
        {ids.map((id, index) => (
          <TabsContent key={id} value={id}>
            {method === id && (
              <Scenario key={method} locale={locale} index={index} />
            )}
          </TabsContent>
        ))}
        <p className="m-demo-note">{d.demoNote}</p>
        <a className="button m-demo-cta" href="https://t.me/mealset_bot">
          {d.open}
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </Tabs>
    </div>
  );
}
