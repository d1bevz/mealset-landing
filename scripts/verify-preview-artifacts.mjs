import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist/client';
const origin = new URL(process.env.SITE_URL || 'http://localhost:8080').origin;
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const slash = process.env.NEXT_PUBLIC_TRAILING_SLASH === 'true' ? '/' : '';
const decode = (s) =>
  s
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#x27;', "'")
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
for (const [route, locale] of [
  ['preview', 'ru'],
  ['en/preview', 'en'],
]) {
  const html = readFileSync(join(root, `${route}.html`), 'utf8');
  const tags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(([tag]) =>
    Object.fromEntries(
      [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, k, v]) => [
        k.toLowerCase(),
        decode(v),
      ]),
    ),
  );
  const meta = (key) => {
    const matches = tags.filter((t) => t.name === key || t.property === key);
    assert.equal(matches.length, 1, `${route}: exactly one ${key}`);
    return matches[0].content;
  };
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || '');
  assert(
    title && !/макет|preview|под контролем|made personal/i.test(title),
    `${route}: current public title`,
  );
  assert.equal(meta('og:title'), title);
  assert.equal(meta('twitter:title'), title);
  assert.equal(meta('description'), meta('og:description'));
  assert.equal(meta('description'), meta('twitter:description'));
  assert.equal(meta('twitter:card'), 'summary_large_image');
  assert.equal(meta('og:type'), 'website');
  assert.equal(meta('og:locale'), locale === 'ru' ? 'ru_RU' : 'en_US');
  const url = `${origin}${base}/${route}${slash}`;
  assert.equal(meta('og:url'), url);
  assert(tags.some((t) => t.rel === 'canonical' && t.href === url));
  assert(html.includes(`lang="${locale}"`));
  assert(
    meta('robots').includes('noindex'),
    `${route}: preview stays unindexed`,
  );
  for (const lang of ['ru', 'en']) {
    const target = `${origin}${base}/${lang === 'ru' ? 'preview' : 'en/preview'}${slash}`;
    assert(
      tags.some(
        (t) =>
          t.rel === 'alternate' && t.hreflang === lang && t.href === target,
      ),
      `${route}: ${lang} alternate`,
    );
  }
  const image = new URL(meta('og:image'));
  assert.equal(image.origin, origin);
  assert(image.pathname.endsWith(`og-mealset-effort-${locale}-v1.png`));
  assert.equal(meta('twitter:image'), image.href);
  assert(meta('og:image:alt').length > 20);
  assert.equal(meta('og:image:width'), '1200');
  assert.equal(meta('og:image:height'), '630');
  const png = readFileSync(join(root, image.pathname.slice(base.length + 1)));
  assert.equal(png.toString('hex', 0, 8), '89504e470d0a1a0a');
  assert.equal(png.readUInt32BE(16), 1200);
  assert.equal(png.readUInt32BE(20), 630);
  for (const t of tags.filter((t) =>
    ['icon', 'apple-touch-icon'].includes(t.rel),
  )) {
    const path = new URL(t.href, origin).pathname;
    assert(
      existsSync(join(root, path.slice(base.length + 1))),
      `${route}: missing icon ${path}`,
    );
  }
  assert(tags.some((t) => t.rel === 'apple-touch-icon'));
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"<>]+)"/g))
    assert(existsSync(join(root, asset)), `${route}: ${asset}`);
  const visible = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<[^>]+>/g, ' ');
  if (locale === 'en')
    assert(!/[А-Яа-яЁё]/.test(visible), 'EN: Russian text leaked into page');
  assert(
    !/href="https?:\/\/[^"\s]*(?:myfitnesspal|fatsecret|yazio|bitepal|welling)/i.test(
      html,
    ),
    `${route}: competitor link`,
  );
  assert.equal(
    readFileSync(join(root, route, 'index.html'), 'utf8'),
    html,
    `${route}: static mobile link`,
  );
}
console.log(
  'Preview artifacts verified: RU/EN titles, descriptions, OG/Twitter covers, dimensions, icons, language links and static pages.',
);
