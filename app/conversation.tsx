'use client';
import Image from 'next/image';
import { publicPath } from '@/lib/public-path';
import { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { copy, type Locale } from './copy';
export function Conversation({ locale }: { locale: Locale }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const d = copy[locale];
  return (
    <div className="demo">
      <Tabs defaultValue="taste" className="demo-tabs">
        <TabsList className="scenario-tabs" aria-label={d.demoAria}>
          {d.examples.map((e) => (
            <TabsTrigger key={e.id} value={e.id}>
              {e.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {d.examples.map((e) => (
          <TabsContent key={e.id} value={e.id} className="chat-window">
            <div className="chat-header">
              <Image
                unoptimized
                src={publicPath('/assets/sasha-avatar.png')}
                alt=""
                width={44}
                height={44}
              />
              <div>
                <strong>{d.sashaName}</strong>
                <span>{d.demoRole}</span>
              </div>
              <span className="chat-status" aria-hidden="true" />
            </div>
            <div className="chat-messages" aria-live="polite">
              <span className="chat-day">{d.demoLabel}</span>
              <p className="bubble user-bubble">{e.question}</p>
              <p className="bubble sasha-bubble">{e.answer}</p>
              {expanded[e.id] && (
                <>
                  <p className="bubble user-bubble">{e.followup}</p>
                  <p className="bubble sasha-bubble">{e.response}</p>
                </>
              )}
            </div>
            <button
              className="demo-continue"
              onClick={() =>
                setExpanded((prev) => ({ ...prev, [e.id]: !prev[e.id] }))
              }
            >
              <span>{expanded[e.id] ? d.demoBack : d.demoNext}</span>
              <ArrowUp size={19} />
            </button>
          </TabsContent>
        ))}
      </Tabs>
      <p className="demo-caption">{d.demoCaption}</p>
    </div>
  );
}
