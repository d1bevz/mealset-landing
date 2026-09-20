import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist/client';
const routes = [
  ['', 'ru', 'Наслаждайся жизнью.'],
  ['en', 'en', 'Enjoy your life.'],
  ['v2', 'ru', 'Mealset'],
  ['en/v2', 'en', 'Mealset'],
];
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
for (const [route, language, text] of routes) {
  const html = readFileSync(
    join(root, route ? `${route}.html` : 'index.html'),
    'utf8',
  );
  assert(html.includes(`lang="${language}"`), `${route}: document language`);
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
    const cover = `assets/og-mealset-life-${language}-v2.png`;
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
      html.includes(language === 'ru' ? 'Клетчатка' : 'Fibre'),
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
  }
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
  'Static export verified: four routes, RU/EN metadata, Telegram links and final images.',
);

await import('./verify-preview-artifacts.mjs');
