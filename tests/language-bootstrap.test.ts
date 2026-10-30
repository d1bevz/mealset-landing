import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { languageBootstrap } from '../lib/language-bootstrap';
import { languagePreferenceKey } from '../lib/language-preference';

const origin = 'https://mealset.example';

function visit(options: {
  url?: string;
  languages?: string[];
  saved?: string;
  blocked?: boolean;
  base?: string;
  paths?: { en: string; ru: string; pt: string };
}) {
  let redirect: string | undefined;
  let cleaned: string | undefined;
  let saved = options.saved;
  const base = options.base || '';
  const paths = options.paths || {
    en: `${base}/`,
    ru: `${base}/ru`,
    pt: `${base}/pt`,
  };
  runInNewContext(languageBootstrap(paths), {
    URL,
    navigator: { languages: options.languages || [], language: '' },
    window: {
      location: {
        href: options.url || `${origin}/`,
        replace: (url: string) => {
          redirect = url;
        },
      },
      history: {
        replaceState: (_state: unknown, _title: string, url: string) => {
          cleaned = url;
        },
      },
      localStorage: {
        getItem(key: string) {
          assert.equal(key, languagePreferenceKey);
          if (options.blocked) throw new Error('Storage blocked');
          return saved;
        },
        setItem(key: string, value: string) {
          assert.equal(key, languagePreferenceKey);
          if (options.blocked) throw new Error('Storage blocked');
          saved = value;
        },
      },
    },
  });
  return { redirect, saved, cleaned };
}

test('browser languages: first of en/ru/pt wins, regional tags normalised', () => {
  assert.equal(visit({ languages: ['ru-RU', 'en'] }).redirect, `${origin}/ru`);
  assert.equal(visit({ languages: ['pt-BR', 'en'] }).redirect, `${origin}/pt`);
  assert.equal(visit({ languages: ['PT-pt'] }).redirect, `${origin}/pt`);
  assert.equal(visit({ languages: ['de', 'ru'] }).redirect, `${origin}/ru`);
  assert.equal(visit({ languages: ['en-GB', 'ru'] }).redirect, undefined);
  assert.equal(visit({ languages: ['de', 'fr'] }).redirect, undefined);
  assert.equal(visit({ languages: [] }).redirect, undefined);
});

test('saved preference wins over the browser; invalid values are ignored', () => {
  assert.equal(
    visit({ saved: 'ru', languages: ['en'] }).redirect,
    `${origin}/ru`,
  );
  assert.equal(
    visit({ saved: 'pt', languages: ['en'] }).redirect,
    `${origin}/pt`,
  );
  assert.equal(visit({ saved: 'en', languages: ['ru'] }).redirect, undefined);
  assert.equal(
    visit({ saved: 'de', languages: ['ru'] }).redirect,
    `${origin}/ru`,
  );
});

test('only the English root redirects', () => {
  for (const path of ['/ru', '/ru/', '/pt', '/v2', '/en/v2', '/preview']) {
    assert.equal(
      visit({ url: `${origin}${path}`, saved: 'pt', languages: ['ru'] })
        .redirect,
      undefined,
      path,
    );
  }
});

test('?lang= is explicit, saved and wins', () => {
  const ru = visit({ url: `${origin}/?lang=ru`, languages: ['en'] });
  assert.equal(ru.saved, 'ru');
  assert.equal(ru.redirect, `${origin}/ru`);
  assert.equal(
    visit({ url: `${origin}/?lang=pt`, languages: ['en'] }).redirect,
    `${origin}/pt`,
  );
  const en = visit({
    url: `${origin}/?lang=en`,
    saved: 'ru',
    languages: ['ru'],
  });
  assert.equal(en.saved, 'en');
  assert.equal(en.redirect, undefined);
  assert.equal(en.cleaned, `${origin}/`);
  assert.equal(
    visit({ url: `${origin}/?lang=de`, languages: ['ru'] }).redirect,
    `${origin}/ru`,
  );
});

test('explicit choices work when storage throws', () => {
  assert.equal(
    visit({
      url: `${origin}/?lang=ru`,
      blocked: true,
      languages: ['en'],
    }).redirect,
    `${origin}/ru`,
  );
  assert.equal(
    visit({
      url: `${origin}/?lang=en`,
      blocked: true,
      languages: ['ru'],
    }).redirect,
    undefined,
  );
  assert.equal(
    visit({ blocked: true, languages: ['ru'] }).redirect,
    `${origin}/ru`,
  );
});

test('redirect keeps query, hash, base path and trailing slash', () => {
  assert.equal(
    visit({
      base: '/mealset',
      paths: { en: '/mealset/', ru: '/mealset/ru/', pt: '/mealset/pt/' },
      url: `${origin}/mealset/?utm_source=demo&lang=ru#food-diary`,
      languages: ['en'],
    }).redirect,
    `${origin}/mealset/ru/?utm_source=demo#food-diary`,
  );
});
