import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'be-sporton.agunacourse.com',
        pathname: '/uploads/**'
      }
    ],
    dangerouslyAllowLocalIP: true
  },
  staticPageGenerationTimeout: 10000
};

export default nextConfig;
