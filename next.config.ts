import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sporton-be-production-0383.up.railway.app',
        pathname: '/uploads/**'
      }
    ],
    dangerouslyAllowLocalIP: true
  },
  staticPageGenerationTimeout: 10000
};

export default nextConfig;
