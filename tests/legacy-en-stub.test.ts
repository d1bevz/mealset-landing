import { test } from 'node:test';
import assert from 'node:assert/strict';
import { runInNewContext } from 'node:vm';
import { legacyEnglishStub } from '../scripts/legacy-en-stub.mjs';

const target = '/mealset-landing/?lang=en';
const canonical = 'https://d1bevz.github.io/mealset-landing/';

test('the stub redirects to the English page and names the canonical', () => {
  const html = legacyEnglishStub({ target, canonical });
  assert.match(html, /<html lang="en">/);
  assert.ok(html.includes(`http-equiv="refresh" content="0; url=${target}"`));
  assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
  assert.ok(html.includes(`<a href="${target}"`));
});

test('the stub escapes its values', () => {
  const html = legacyEnglishStub({
    target: '/x"><script>alert(1)</script>',
    canonical,
  });
  assert.ok(!html.includes('<script>alert(1)'));
  assert.ok(html.includes('&quot;'));
  assert.ok(html.includes('&lt;script&gt;'));
});

test('the stub script keeps the query string and the hash', () => {
  const html = legacyEnglishStub({ target, canonical });
  const script = html.match(/<script>([\s\S]*?)<\/script>/)![1];
  let redirect: string | undefined;
  runInNewContext(script, {
    URL,
    URLSearchParams,
    location: {
      href: 'https://mealset.example/mealset-landing/en/?utm_source=newsletter&lang=ru#pricing',
      search: '?utm_source=newsletter&lang=ru',
      hash: '#pricing',
      replace: (url: string) => {
        redirect = url;
      },
    },
  });
  assert.equal(
    redirect,
    'https://mealset.example/mealset-landing/?lang=en&utm_source=newsletter#pricing',
  );
});
