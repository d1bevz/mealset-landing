'use client';
import { useState } from 'react';
import Image from 'next/image';
import { publicPath } from '@/lib/public-path';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import type { Locale } from '../copy';
import { premiumCopy } from './copy';
export function PremiumExperience({ locale }: { locale: Locale }) {
  const d = premiumCopy[locale];
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  return (
    <div className="p-demonstration">
      <Tabs
        defaultValue="taste"
        orientation="vertical"
        className="p-context-tabs"
      >
        <TabsList
          className="p-topic-list"
          aria-label={
            locale === 'ru' ? 'Ситуации из жизни' : 'Everyday situations'
          }
        >
          {d.topics.map((topic, i) => (
            <TabsTrigger className="p-topic" value={topic.id} key={topic.id}>
              <span className="p-topic-index">0{i + 1}</span>
              <span className="p-topic-text">
                <span className="p-topic-title">{topic.title}</span>
                <span className="p-topic-description">{topic.description}</span>
              </span>
              <ArrowRight className="p-topic-arrow" size={18} />
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="p-chat-stage">
          {d.topics.map((topic) => (
            <TabsContent
              value={topic.id}
              key={topic.id}
              className="p-product-panel"
            >
              <div className="p-context">
                <span className="p-context-label">{d.contextLabel}</span>
                <div>
                  {topic.context.map((context) => (
                    <span key={context}>
                      <Check size={12} />
                      {context}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-product-chat">
                <header>
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
                  <a
                    href="https://t.me/mealset_bot"
                    aria-label={
                      locale === 'ru'
                        ? 'Открыть Сашу в Telegram'
                        : 'Open Sasha in Telegram'
                    }
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </header>
                <div className="p-chat-content" aria-live="polite">
                  <span className="p-example-label">{d.example}</span>
                  <p className="p-user-message">{topic.message}</p>
                  <div className="p-answer">
                    <span className="p-answer-label">
                      {locale === 'ru' ? 'САША' : 'SASHA'}
                    </span>
                    <p>{topic.answer}</p>
                  </div>
                  {expanded[topic.id] && (
                    <>
                      <p className="p-user-message">{topic.continuation}</p>
                      <div className="p-answer">
                        <span className="p-answer-label">
                          {locale === 'ru' ? 'САША' : 'SASHA'}
                        </span>
                        <p>{topic.reply}</p>
                      </div>
                    </>
                  )}
                </div>
                <button
                  className="p-continue"
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [topic.id]: !prev[topic.id],
                    }))
                  }
                >
                  <span>{expanded[topic.id] ? d.reset : d.continue}</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </TabsContent>
          ))}
          <p className="p-demo-note">{d.demoNote}</p>
        </div>
      </Tabs>
    </div>
  );
}
