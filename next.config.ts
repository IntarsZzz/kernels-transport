import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/lv',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lv/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
