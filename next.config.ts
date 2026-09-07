import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  // Routing stays unprefixed during prerender; the static host mounts the export.
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
};

export default nextConfig;
