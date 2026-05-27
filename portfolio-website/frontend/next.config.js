/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  compress: false,
  poweredByHeader: false,
  basePath: '/formal-cars',
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost', 'api.github.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
