import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (basePath && !/^\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)*$/.test(basePath)) {
  throw new Error(
    'NEXT_PUBLIC_BASE_PATH must be empty or a path without a trailing slash',
  );
}

export default defineConfig({
  base: `${basePath}/`,
  define: {
    'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(basePath),
    'process.env.NEXT_PUBLIC_TRAILING_SLASH': JSON.stringify(
      process.env.NEXT_PUBLIC_TRAILING_SLASH || 'false',
    ),
  },
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
});
