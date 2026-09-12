import assert from 'node:assert/strict';

const base = process.env.CHECK_URL || 'http://127.0.0.1:8080';
const staticHost = process.env.CHECK_STATIC_HOST === 'true';
const mount = new URL(base);
mount.pathname = `${mount.pathname.replace(/\/$/, '')}/`;
const mountedUrl = (path) => new URL(path.replace(/^\//, ''), mount);
const pageAssets = new Set();
for (const path of ['/', '/en', '/v2', '/en/v2']) {
  const response = await fetch(
    mountedUrl(path + (staticHost && path !== '/' ? '/' : '')),
  );
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get('content-type'), /text\/html/);
  if (!staticHost)
    assert.match(response.headers.get('cache-control'), /no-cache/);
  const html = await response.text();
  assert(html.includes('https://t.me/mealset_bot'), `${path}: Telegram links`);
  for (const match of html.matchAll(/(?:src|href)="([^"<>]+\.(?:js|css))"/g)) {
    pageAssets.add(match[1]);
  }
}
assert(pageAssets.size > 0, 'Client JavaScript and styles must be emitted');
const resources = new Set([
  ...pageAssets,
  mountedUrl('/assets/food-bolognese.png').href,
  mountedUrl('/assets/food-hero.jpg').href,
  mountedUrl('/assets/og-default.jpg').href,
  mountedUrl('/assets/premium/og-premium.jpg').href,
  mountedUrl('/fonts/onest.ttf').href,
]);
for (const path of resources) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `Asset ${path}`);
  assert(
    !response.headers.get('content-type')?.includes('text/html'),
    `HTML fallback for ${path}`,
  );
  if (response.headers.get('content-type')?.includes('text/css')) {
    const css = await response.text();
    for (const match of css.matchAll(/url\(["']?([^"'\s)]+)["']?\)/g)) {
      if (match[1].startsWith('data:')) continue;
      resources.add(new URL(match[1], response.url).href);
    }
  }
}
if (!staticHost) {
  const redirect = await fetch(mountedUrl('/en/'), { redirect: 'manual' });
  assert.equal(redirect.status, 301);
  assert.equal(redirect.headers.get('location'), mountedUrl('/en').pathname);
}
for (const path of [
  '/missing-mealset-page',
  '/.env',
  '/assets/missing-image.png',
]) {
  assert.equal((await fetch(mountedUrl(path))).status, 404, path);
}
console.log(
  'HTTP checks passed: pages, JavaScript, styles, images, fonts and 404s.',
);
