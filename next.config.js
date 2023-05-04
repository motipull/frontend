/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page,ts"],
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
