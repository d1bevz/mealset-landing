'use client';

import Image from 'next/image';
import { publicPath } from '@/lib/public-path';
import { Camera, MessageSquare, Mic, ReceiptText, Check } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import type { Locale } from './copy';
import { featureCopy } from './product-copy';
import './product.css';

const icons = {
  text: MessageSquare,
  voice: Mic,
  photo: Camera,
  delivery: ReceiptText,
};

export function FoodLogging({ locale }: { locale: Locale }) {
  const d = featureCopy[locale];
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
        <Tabs defaultValue="text" className="logging-tabs">
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
            const Icon = icons[method.id];
            return (
              <TabsContent
                key={method.id}
                value={method.id}
                className="logging-panel"
              >
                <div className="logging-explanation">
                  <h3>{method.title}</h3>
                  <p>{method.body}</p>
                  <div className="logging-search">
                    <span>8 000+</span>
                    <p>{d.database}</p>
                  </div>
                </div>
                <div className="logging-chat">
                  <header>
                    <Image
                      unoptimized
                      src={publicPath('/assets/sasha-avatar.png')}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <strong>{d.sasha}</strong>
                      <span>{d.chatLabel}</span>
                    </div>
                  </header>
                  <div className="logging-messages">
                    <div className="logging-input">
                      {method.attachment && (
                        <div className="logging-attachment">
                          <Icon size={22} aria-hidden="true" />
                          <span>{method.attachment}</span>
                        </div>
                      )}
                      <p>{method.message}</p>
                    </div>
                    <div className="logging-answer">
                      <span>{d.sasha}</span>
                      <p>{method.answer}</p>
                    </div>
                    {method.result && (
                      <div className="logging-result">
                        <Check size={17} aria-hidden="true" />
                        <p>{method.result}</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
        <p className="product-note">{d.note}</p>
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
