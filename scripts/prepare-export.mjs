import { copyFileSync, mkdirSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

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
  for (const route of ['en', 'v2', 'en/v2']) {
    const directory = join('dist/client', route);
    mkdirSync(directory, { recursive: true });
    copyFileSync(
      join('dist/client', `${route}.html`),
      join(directory, 'index.html'),
    );
  }
}
writeFileSync('dist/client/.nojekyll', '');
