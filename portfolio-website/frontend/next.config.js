/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ['localhost', 'api.github.com'],
    formats: ['image/avif', 'image/webp'],
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/abhinavpolimera',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/abhinavpolimera',
        permanent: true,
      },
      {
        source: '/email',
        destination: 'mailto:abhinavpolimera@gmail.com',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/abhinavpolimera',
        permanent: true,
      }
    ];
  }
};

module.exports = nextConfig;
