/** @type {import('next').NextConfig} */
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  compress: false,
  poweredByHeader: false,
  basePath: publicBasePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: publicBasePath,
  },
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost', 'api.github.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
