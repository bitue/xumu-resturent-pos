import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://127.0.0.1:5001/api/:path*', // Proxy to Backend
      },
      {
        source: '/ws/:path*',
        destination: 'http://127.0.0.1:5001/ws/:path*', // Proxy WebSockets to Backend
      },
    ];
  },
};

export default nextConfig;

