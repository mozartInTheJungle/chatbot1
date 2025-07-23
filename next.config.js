/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper handling of images and static assets
  images: {
    unoptimized: true,
  },
  
  // Ensure proper TypeScript handling
  typescript: {
    // Don't fail build on TypeScript errors during deployment
    ignoreBuildErrors: false,
  },
  
  // Ensure proper ESLint handling
  eslint: {
    // Don't fail build on ESLint errors during deployment
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig; 