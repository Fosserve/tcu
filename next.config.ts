import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.squarespace-cdn.com'],
  },
};

export default nextConfig;
