import { pagePath, publicPath } from './public-path';

const origin = new URL(process.env.SITE_URL || 'http://localhost:8080');

if (
  !['http:', 'https:'].includes(origin.protocol) ||
  origin.username ||
  origin.password ||
  origin.pathname !== '/' ||
  origin.search ||
  origin.hash
) {
  throw new Error(
    'SITE_URL must be an HTTP(S) origin without a path or credentials',
  );
}

export function siteUrl(path: string) {
  return new URL(pagePath(path), origin).href;
}

// Files keep their exact path: pagePath would append a trailing slash.
export function assetUrl(path: string) {
  return new URL(publicPath(path), origin).href;
}
