const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function publicPath(path: string) {
  return `${basePath}${path}`;
}

export function pagePath(path: string) {
  const route = path === '/' ? '/' : path.replace(/\/$/, '');
  const trailingSlash = process.env.NEXT_PUBLIC_TRAILING_SLASH === 'true';
  return publicPath(route + (trailingSlash && route !== '/' ? '/' : ''));
}
