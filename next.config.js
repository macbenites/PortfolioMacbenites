/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pwa: { dest: 'public', register: true, skipWaiting: true },
  images: {
    domains: ['res.cloudinary.com'],
  },
});
