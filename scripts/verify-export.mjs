import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist/client';
// [route, html lang, language key (social cover, fibre label), server text]
const routes = [
  ['', 'en', 'en', 'Enjoy your life.'],
  ['ru', 'ru', 'ru', 'Наслаждайся жизнью.'],
  ['pt', 'pt-PT', 'pt', 'Aproveita a vida.'],
  ['v2', 'ru', 'ru', 'Mealset'],
  ['en/v2', 'en', 'en', 'Mealset'],
];
const fibre = { ru: 'Клетчатка', en: 'Fibre', pt: 'Fibra' };
const origin = new URL(process.env.SITE_URL || 'http://localhost:8080').origin;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const trailingSlash = process.env.NEXT_PUBLIC_TRAILING_SLASH === 'true';
for (const scene of [
  'breakfast',
  'smoothie',
  'containers',
  'plan',
  'shopping',
  'snack',
]) {
  assert(
    existsSync(join(root, 'assets', `demo-${scene}.webp`)),
    `Missing scenario image: ${scene}`,
  );
}
for (const [route, language, key, text] of routes) {
  const html = readFileSync(
    join(root, route ? `${route}.html` : 'index.html'),
    'utf8',
  );
  assert(
    new RegExp(`<html[^>]*\\slang="${language}"`).test(html),
    `${route}: document language`,
  );
  assert(html.includes(text), `${route}: server-rendered content`);
  const canonical = `${origin}${basePath}/${route}${route && trailingSlash ? '/' : ''}`;
  assert(
    html.includes(`rel="canonical" href="${canonical}"`),
    `${route}: domain metadata`,
  );
  if (trailingSlash && route) {
    assert.equal(readFileSync(join(root, route, 'index.html'), 'utf8'), html);
  }
  for (const match of html.matchAll(/(?:src|href)="(\/[^"<>]*)"/g)) {
    const url = new URL(match[1], origin);
    assert(
      url.pathname.startsWith(`${basePath}/`),
      `${route}: unprefixed URL ${url.pathname}`,
    );
    if (/\.[a-z0-9]+$/i.test(url.pathname)) {
      assert(
        existsSync(join(root, url.pathname.slice(basePath.length + 1))),
        `${route}: missing referenced asset ${url.pathname}`,
      );
    }
  }
  assert(html.includes('https://t.me/mealset_bot'), `${route}: Telegram CTA`);
  assert(
    !html.includes('mealset-mindset.d1bevz.chatgpt.site'),
    `${route}: stale Sites origin`,
  );
  assert(!html.includes('/_sites/'), `${route}: private Sites runtime`);
  if (!route.includes('v2')) {
    const cover = `assets/og-mealset-life-${key}-v2.png`;
    assert(existsSync(join(root, cover)), `${route}: social cover exists`);
    assert(
      html.includes(
        `property="og:image" content="${origin}${basePath}/${cover}"`,
      ),
      `${route}: localized absolute social image URL`,
    );
    assert(
      html.includes(`property="og:url" content="${canonical}"`),
      `${route}: social URL matches canonical`,
    );
    assert(
      html.includes('name="twitter:card" content="summary_large_image"'),
      `${route}: large social preview`,
    );
    assert.equal(
      [...html.matchAll(/role="tab"/g)].length,
      6,
      `${route}: six nutritionist scenarios`,
    );
    assert(
      html.includes(fibre[key]),
      `${route}: nutrition result is server rendered`,
    );
    assert(
      html.includes(`${basePath}/assets/demo-breakfast.webp`),
      `${route}: initial scenario photo`,
    );
    assert(
      html.includes(`${basePath}/assets/food-hero.jpg`),
      `${route}: original hero`,
    );
    const slash = trailingSlash ? '/' : '';
    const alternates = {
      en: `${origin}${basePath}/`,
      ru: `${origin}${basePath}/ru${slash}`,
      'pt-PT': `${origin}${basePath}/pt${slash}`,
      'x-default': `${origin}${basePath}/`,
    };
    // React prints the attribute as hrefLang; compare it as hreflang.
    const normalized = html.replace(/hrefLang=/g, 'hreflang=');
    const links = normalized.match(/<link[^>]*>/g) ?? [];
    for (const [tag, url] of Object.entries(alternates)) {
      assert(
        links.some(
          (link) =>
            link.includes(`hreflang="${tag}"`) &&
            link.includes(`href="${url}"`),
        ),
        `${route}: hreflang ${tag}`,
      );
    }
    for (const [tag, path] of [
      ['ru', `${basePath}/ru${slash}`],
      ['en', `${basePath}/?lang=en`],
      ['pt-PT', `${basePath}/pt${slash}`],
    ]) {
      assert(
        normalized.includes(`hreflang="${tag}"`) &&
          normalized.includes(`href="${path}"`),
        `${route}: language switch link ${tag}`,
      );
    }
    if (key === 'pt') {
      assert(!/[\u0400-\u04ff]/.test(html), `${route}: no Cyrillic text`);
      assert(
        !html.includes('Enjoy your life'),
        `${route}: no English headline`,
      );
    }
  }
}
// Retired /en address: a stub that sends old links to the English root.
for (const file of trailingSlash ? ['en.html', 'en/index.html'] : ['en.html']) {
  const html = readFileSync(join(root, file), 'utf8');
  assert(html.includes('http-equiv="refresh"'), `${file}: refresh redirect`);
  assert(html.includes(`${basePath}/?lang=en`), `${file}: English target`);
  assert(
    html.includes(`rel="canonical" href="${origin}${basePath}/"`),
    `${file}: canonical points to the root`,
  );
}
for (const asset of [
  'assets/food-bolognese.png',
  'assets/food-hero.jpg',
  'assets/sasha-avatar.png',
  'fonts/onest.ttf',
]) {
  assert(existsSync(join(root, asset)), `Missing ${asset}`);
}
console.log(
  'Static export verified: EN/RU/PT pages, the /en redirect stub, hreflang metadata, Telegram links and final images.',
);

await import('./verify-preview-artifacts.mjs');
