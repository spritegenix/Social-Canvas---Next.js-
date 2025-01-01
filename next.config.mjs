import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('src'), // Adjusts alias for `@` to point to the `src` directory
    };
    return config;
  },
};

export default nextConfig;
