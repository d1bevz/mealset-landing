'use client';

import { useState } from 'react';
import { FoodDemo } from './food-demo';
import { Camera, MessageSquare, Mic, ReceiptText } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import type { Locale } from './copy';
import { featureCopy } from './product-copy';
import './product.css';
import { Comparison } from './comparison/comparison';

const icons = {
  text: MessageSquare,
  voice: Mic,
  photo: Camera,
  delivery: ReceiptText,
};

export function PreviewFoodLogging({ locale }: { locale: Locale }) {
  const d = {
    ...featureCopy[locale],
    intro:
      locale === 'ru'
        ? 'Домашний обед не нужно заносить по ингредиентам. Расскажи, что приготовил и сколько съел, — текстом, голосом или фото. Саша подберёт продукты, рассчитает порцию и даст полезный совет.'
        : 'No need to log a home-cooked meal ingredient by ingredient. Tell Sasha what you made and how much you ate — by text, voice or photo. She finds the foods, calculates your portion and offers practical advice.',
    nutrientsBody:
      locale === 'ru'
        ? 'Запись еды — начало разговора. Саша объяснит, что получилось хорошо и что можно улучшить, с учётом твоего рациона. Она использует доступные данные о клетчатке, витаминах и минералах — полнота зависит от продукта и источника.'
        : 'Logging a meal starts a conversation. Sasha explains what went well and what you could improve in the context of your diet. She uses available fibre, vitamin and mineral data; coverage varies by food and source.',
  };
  const [activeMethod, setActiveMethod] = useState('text');
  return (
    <section
      className="product-section food-logging"
      id="food-diary"
      aria-labelledby="logging-title"
    >
      <div className="product-shell">
        <p className="product-eyebrow">{d.eyebrow}</p>
        <h2 id="logging-title">
          {d.title[0]}
          <br />
          <span>{d.title[1]}</span>
        </h2>
        <p className="product-intro">{d.intro}</p>
        <p className="food-demo-instruction">{d.demo.instruction}</p>
        <Tabs
          value={activeMethod}
          onValueChange={(value) => {
            if (typeof value === 'string') setActiveMethod(value);
          }}
          className="logging-tabs"
        >
          <TabsList className="logging-methods" aria-label={d.choose}>
            {d.methods.map((method) => {
              const Icon = icons[method.id];
              return (
                <TabsTrigger key={method.id} value={method.id}>
                  <Icon size={20} aria-hidden="true" />
                  <span>{method.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {d.methods.map((method) => {
            return (
              <TabsContent
                key={method.id}
                value={method.id}
                className="logging-panel"
              >
                {activeMethod === method.id && (
                  <FoodDemo
                    key={`${locale}-${method.id}`}
                    method={method}
                    d={d.demo}
                    locale={locale}
                    sasha={d.sasha}
                  />
                )}
              </TabsContent>
            );
          })}
        </Tabs>
        <p className="product-note">{d.note}</p>
        <Comparison locale={locale} />
        <div className="nutrient-detail">
          <div>
            <p className="product-eyebrow">{d.nutrientsLabel}</p>
            <h3>{d.nutrientsTitle}</h3>
            <p>{d.nutrientsBody}</p>
          </div>
          <ul aria-label={d.nutrientsLabel}>
            {d.nutrients.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
