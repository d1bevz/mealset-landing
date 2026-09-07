import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist/client';
const routes = [
  ['', 'ru', 'Хорошее питание.'],
  ['en', 'en', 'Good food.'],
  ['v2', 'ru', 'Mealset'],
  ['en/v2', 'en', 'Mealset'],
];
const origin = new URL(process.env.SITE_URL || 'http://localhost:8080').origin;
for (const [route, language, text] of routes) {
  const html = readFileSync(
    join(root, route ? `${route}.html` : 'index.html'),
    'utf8',
  );
  assert(html.includes(`lang="${language}"`), `${route}: document language`);
  assert(html.includes(text), `${route}: server-rendered content`);
  assert(html.includes(`${origin}/${route}`), `${route}: domain metadata`);
  assert(html.includes('https://t.me/mealset_bot'), `${route}: Telegram CTA`);
  assert(
    !html.includes('mealset-mindset.d1bevz.chatgpt.site'),
    `${route}: stale Sites origin`,
  );
  assert(!html.includes('/_sites/'), `${route}: private Sites runtime`);
  if (!route.includes('v2')) {
    assert(
      html.includes('/assets/food-bolognese.png'),
      `${route}: final food photo`,
    );
    assert(html.includes('/assets/food-hero.jpg'), `${route}: original hero`);
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
