'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Check,
  LoaderCircle,
  RotateCcw,
  Send,
} from 'lucide-react';
import { publicPath } from '@/lib/public-path';
import type { Locale } from './copy';
import type { LoggingMethod, LoggingDemoCopy } from './product-copy';

export function FoodDemo({
  method,
  d,
  locale,
  sasha,
}: {
  method: LoggingMethod;
  d: LoggingDemoCopy;
  locale: Locale;
  sasha: string;
}) {
  const [step, setStep] = useState(0);
  const [corrected, setCorrected] = useState(false);
  const actionRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (step !== 1) return;
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 0
      : 1600;
    const timer = window.setTimeout(() => setStep(2), delay);
    return () => window.clearTimeout(timer);
  }, [step]);

  const followUpApplied = corrected && Boolean(method.followUp);
  const nutrition = method.nutrition.map((value, index) => {
    if (!corrected) return value;
    return method.followUp
      ? value + method.followUp.nutritionDelta[index]
      : value * 0.5;
  });
  const number = (value: number) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(value);
  return (
    <div className="logging-chat interactive-food-demo">
      <header>
        <Image
          unoptimized
          src={publicPath('/assets/sasha-avatar.png')}
          alt=""
          width={40}
          height={40}
        />
        <div>
          <strong>{sasha}</strong>
          <span>{d.stepLabels[step]}</span>
        </div>
        <span className="demo-step-count" aria-hidden="true">
          {step + 1} / 3
        </span>
      </header>
      <ol
        className="food-demo-steps"
        aria-label={locale === 'ru' ? 'Этапы примера' : 'Example steps'}
      >
        {d.stepLabels.map((label, i) => (
          <li
            key={label}
            data-current={i === step ? '' : undefined}
            data-complete={i < step ? '' : undefined}
            aria-current={i === step ? 'step' : undefined}
          >
            <span>
              {i < step ? <Check size={13} aria-hidden="true" /> : i + 1}
            </span>
            {label}
          </li>
        ))}
      </ol>
      <div className="food-demo-stage" aria-busy={step === 1}>
        {step === 0 ? (
          <div className="food-demo-draft">
            {method.id === 'photo' && (
              <Image
                unoptimized
                className="food-demo-photo"
                src={publicPath('/assets/food-bolognese.png')}
                alt={d.photoAlt}
                width={1536}
                height={1024}
              />
            )}
            {method.id === 'delivery' && (
              <div className="food-demo-order">
                <span>{d.receiptLabel}</span>
                <strong>
                  Uber <b>Eats</b>
                </strong>
                <p>Bullguer</p>
                <ul>
                  {method.items.map((item) => (
                    <li key={item}>
                      <span>1 ×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {method.id === 'voice' && (
              <div className="food-demo-voice">
                <AudioLines size={32} aria-hidden="true" />
                <span>{d.voiceLabel}</span>
              </div>
            )}
            {method.id === 'voice' ? (
              <details className="food-demo-transcript">
                <summary>{d.transcript}</summary>
                <p>{method.message}</p>
              </details>
            ) : (
              <p className="food-demo-message">{method.message}</p>
            )}
          </div>
        ) : step === 1 ? (
          <div className="food-demo-loading">
            <LoaderCircle
              className="food-demo-spinner"
              size={36}
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <p>{d.working}</p>
          </div>
        ) : (
          <div className="food-demo-finished">
            <p className="food-demo-saved">
              <Check size={16} aria-hidden="true" />
              {corrected ? d.corrected : d.saved}
            </p>
            <div className="food-demo-receipt">
              <div className="food-demo-receipt-title">
                <strong>{method.diaryTitle}</strong>
                <span>
                  {corrected
                    ? (method.followUp?.portionLabel ?? d.halfPortion)
                    : d.originalPortion}
                </span>
              </div>
              <p className="food-demo-energy">
                <span>≈{number(nutrition[0])}</span> {d.calories}
              </p>
              <dl className="food-demo-macros">
                {d.macroLabels.map((label, i) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>
                      {number(nutrition[i + 1])} <span>{d.grams}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="food-demo-estimate">{d.resultLabel}</p>
            </div>
            <div className="food-demo-feedback">
              <strong>{method.feedback.title}</strong>
              <p>{method.feedback.strength}</p>
              <p>{method.feedback.suggestion}</p>
            </div>
            <p className="food-demo-response">
              {corrected && !method.followUp ? d.correction : method.answer}
            </p>
            {followUpApplied && method.followUp && (
              <div className="food-demo-followup">
                <p className="food-demo-user-reply">
                  {method.followUp.message}
                </p>
                <p className="food-demo-response">{method.followUp.answer}</p>
              </div>
            )}
            <div className="food-demo-extras">
              <span>{d.more}</span>
              <p>{method.extras.join(' · ')}</p>
            </div>
            <details className="food-demo-sources">
              <summary>{d.lookup}</summary>
              <ul>
                {method.lookup.map((source) => (
                  <li key={source}>{source}</li>
                ))}
                {followUpApplied && method.followUp && (
                  <li>{method.followUp.lookup}</li>
                )}
              </ul>
            </details>
          </div>
        )}
      </div>
      <output className="food-demo-status" aria-live="polite">
        {step === 1
          ? d.working
          : step === 2
            ? corrected
              ? (method.followUp?.answer ?? d.corrected)
              : d.saved
            : ''}
      </output>
      <div className="food-demo-actions">
        <button
          ref={actionRef}
          type="button"
          className={step === 2 ? 'food-demo-correct' : 'food-demo-send'}
          aria-disabled={step === 2 && followUpApplied ? true : undefined}
          onClick={() => {
            if (step < 2) setStep(step + 1);
            else if (!followUpApplied) setCorrected(!corrected);
          }}
        >
          {step === 0
            ? d.send
            : step === 1
              ? d.showResult
              : corrected
                ? (method.followUp?.appliedLabel ?? d.whole)
                : (method.followUp?.message ?? d.half)}
          {followUpApplied ? (
            <Check size={17} aria-hidden="true" />
          ) : step === 0 || (step === 2 && method.followUp) ? (
            <Send size={17} aria-hidden="true" />
          ) : (
            <ArrowRight size={17} aria-hidden="true" />
          )}
        </button>
        {step === 2 && (
          <div className="food-demo-footer">
            <button
              type="button"
              onClick={() => {
                setStep(0);
                setCorrected(false);
                actionRef.current?.focus({ preventScroll: true });
              }}
            >
              <RotateCcw size={15} aria-hidden="true" />
              {d.replay}
            </button>
            <a href="https://t.me/mealset_bot">
              {d.telegram}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
