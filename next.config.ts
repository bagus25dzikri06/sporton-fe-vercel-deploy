import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'be-sporton.agunacourse.com',
        pathname: '/uploads/**'
      }
    ]
  },
  staticPageGenerationTimeout: 3000
};

export default nextConfig;
