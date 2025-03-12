import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.squarespace-cdn.com', 'img.freepik.com'],
  },
};

export default nextConfig;
