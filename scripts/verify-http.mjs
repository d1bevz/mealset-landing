import assert from 'node:assert/strict';

const base = process.env.CHECK_URL || 'http://127.0.0.1:8080';
const pageAssets = new Set();
for (const path of ['/', '/en', '/v2', '/en/v2']) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get('content-type'), /text\/html/);
  assert.match(response.headers.get('cache-control'), /no-cache/);
  const html = await response.text();
  assert(html.includes('https://t.me/mealset_bot'), `${path}: Telegram links`);
  for (const match of html.matchAll(/(?:src|href)="([^"<>]+\.(?:js|css))"/g)) {
    pageAssets.add(match[1]);
  }
}
assert(pageAssets.size > 0, 'Client JavaScript and styles must be emitted');
for (const path of [
  ...pageAssets,
  '/assets/food-bolognese.png',
  '/assets/food-hero.jpg',
  '/fonts/onest.ttf',
]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `Asset ${path}`);
  assert(
    !response.headers.get('content-type')?.includes('text/html'),
    `HTML fallback for ${path}`,
  );
}
const redirect = await fetch(new URL('/en/', base), { redirect: 'manual' });
assert.equal(redirect.status, 301);
assert.equal(redirect.headers.get('location'), '/en');
for (const path of [
  '/missing-mealset-page',
  '/.env',
  '/assets/missing-image.png',
]) {
  assert.equal((await fetch(new URL(path, base))).status, 404, path);
}
console.log(
  'HTTP checks passed: routes, assets, redirects, 404s and cache headers.',
);
