import { test } from 'node:test';
import assert from 'node:assert/strict';

process.env.SITE_URL = 'https://mealset.example';
const { socialMetadata } = await import('../lib/social-metadata');
const { previewMetaCopy } = await import('../lib/preview-metadata');

type Social = {
  title: string;
  openGraph: { locale: string; url: string };
  twitter: { images: { url: string }[] };
  alternates: { canonical: string; languages: Record<string, string> };
};
const social = (locale: 'en' | 'ru' | 'pt') =>
  socialMetadata(locale) as unknown as Social;

const origin = 'https://mealset.example';

test('socialMetadata describes the Portuguese page', () => {
  const pt = social('pt');
  assert.equal(pt.openGraph.locale, 'pt_PT');
  assert.equal(pt.openGraph.url, `${origin}/pt`);
  assert.ok(
    pt.twitter.images[0].url.endsWith('/assets/og-mealset-life-pt-v2.png'),
  );
  assert.equal(pt.title, previewMetaCopy.pt.title);
});

test('socialMetadata uses the root for English and /ru for Russian', () => {
  assert.equal(social('en').openGraph.url, `${origin}/`);
  assert.equal(social('en').openGraph.locale, 'en_US');
  assert.equal(social('ru').openGraph.url, `${origin}/ru`);
  assert.equal(social('ru').openGraph.locale, 'ru_RU');
});

test('every language lists all alternates and its own canonical', () => {
  const languages = {
    en: `${origin}/`,
    ru: `${origin}/ru`,
    'pt-PT': `${origin}/pt`,
    'x-default': `${origin}/`,
  };
  for (const [locale, canonical] of [
    ['en', `${origin}/`],
    ['ru', `${origin}/ru`],
    ['pt', `${origin}/pt`],
  ] as const) {
    assert.deepEqual(social(locale).alternates.languages, languages);
    assert.equal(social(locale).alternates.canonical, canonical);
  }
});
