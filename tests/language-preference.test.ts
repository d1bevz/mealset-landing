import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import {
  languageBootstrap,
  languagePreferenceKey,
} from '../lib/language-preference';

function visit(options: {
  url?: string;
  languages?: string[];
  saved?: string;
  blocked?: boolean;
  base?: string;
}) {
  let redirect: string | undefined;
  let saved = options.saved;
  const base = options.base || '';
  runInNewContext(languageBootstrap(`${base}/`, `${base}/en`), {
    URL,
    navigator: { languages: options.languages || [], language: '' },
    window: {
      location: {
        href: options.url || 'https://mealset.example/',
        replace: (url: string) => {
          redirect = url;
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
  return { redirect, saved };
}

test('browser preference order and regional language tags', () => {
  assert.equal(
    visit({ languages: ['pt-PT', 'RU-ru', 'en'] }).redirect,
    undefined,
  );
  assert.equal(
    visit({ languages: ['en-GB', 'ru'] }).redirect,
    'https://mealset.example/en',
  );
  assert.equal(
    visit({ languages: ['pt'] }).redirect,
    'https://mealset.example/en',
  );
});
test('explicit saved preference wins; invalid storage is ignored', () => {
  assert.equal(visit({ saved: 'ru', languages: ['en'] }).redirect, undefined);
  assert.equal(
    visit({ saved: 'en', languages: ['ru'] }).redirect,
    'https://mealset.example/en',
  );
  assert.equal(
    visit({ saved: 'invalid', languages: ['ru'] }).redirect,
    undefined,
  );
});
test('direct English and v2 paths never redirect', () => {
  for (const path of ['/en', '/en/', '/v2', '/en/v2']) {
    assert.equal(
      visit({ url: `https://mealset.example${path}`, saved: 'ru' }).redirect,
      undefined,
    );
  }
});
test('explicit Russian works even when storage throws', () => {
  const url = 'https://mealset.example/?lang=ru';
  assert.equal(
    visit({ url, blocked: true, languages: ['en'] }).redirect,
    undefined,
  );
  assert.equal(visit({ url, saved: 'en' }).saved, 'ru');
  assert.equal(
    visit({ blocked: true, languages: ['en'] }).redirect,
    'https://mealset.example/en',
  );
});
test('redirect preserves query, hash and deployment base path', () => {
  assert.equal(
    visit({
      base: '/mealset',
      url: 'https://mealset.example/mealset/?utm_source=demo#food-diary',
      languages: ['en'],
    }).redirect,
    'https://mealset.example/mealset/en?utm_source=demo#food-diary',
  );
});
