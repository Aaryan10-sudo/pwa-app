/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  // Your existing Next.js config
  reactStrictMode: true,
  // other configs
};

module.exports = withPWA(nextConfig);
