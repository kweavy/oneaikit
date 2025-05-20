/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', ❌ HAPUS baris ini
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // tetap boleh
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
