import {
  copyFileSync,
  existsSync,
  mkdirSync,
  renameSync,
  writeFileSync,
} from 'node:fs';
import { join } from 'node:path';
import { legacyEnglishStub } from './legacy-en-stub.mjs';

// Vinext includes a path assetPrefix on disk. Pages mounts the artifact at
// that prefix itself, so generated assets must be relative to the artifact.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (basePath) {
  renameSync(
    join('dist/client', basePath.slice(1), '_next'),
    join('dist/client', '_next'),
  );
}

// Vinext's trailingSlash prerender currently redirects instead of rendering.
// Emit directory indexes from the validated flat export for static-only hosts.
if (process.env.NEXT_PUBLIC_TRAILING_SLASH === 'true') {
  for (const route of ['ru', 'pt', 'v2', 'en/v2']) {
    const directory = join('dist/client', route);
    mkdirSync(directory, { recursive: true });
    copyFileSync(
      join('dist/client', `${route}.html`),
      join(directory, 'index.html'),
    );
  }
}
writeFileSync('dist/client/.nojekyll', '');

// /en is retired: the page set no longer renders it, so emit a stub that sends
// old links to the English root with an explicit language choice.
const origin = new URL(process.env.SITE_URL || 'http://localhost:8080').origin;
const legacyStub = legacyEnglishStub({
  target: `${basePath}/?lang=en`,
  canonical: `${origin}${basePath}/`,
});
writeFileSync('dist/client/en.html', legacyStub);
if (process.env.NEXT_PUBLIC_TRAILING_SLASH === 'true') {
  mkdirSync('dist/client/en', { recursive: true });
  writeFileSync('dist/client/en/index.html', legacyStub);
}

// Preview language links also work with a simple local static server.
for (const route of ['preview', 'en/preview']) {
  const source = join('dist/client', `${route}.html`);
  if (existsSync(source)) {
    const directory = join('dist/client', route);
    mkdirSync(directory, { recursive: true });
    copyFileSync(source, join(directory, 'index.html'));
  }
}
