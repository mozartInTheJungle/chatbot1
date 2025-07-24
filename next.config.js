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
  
  // Add explicit routing configuration for Vercel
  async rewrites() {
    return [
      // Do NOT rewrite API routes
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      // Rewrite all other routes to the home page
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
  
  // Ensure proper trailing slash handling
  trailingSlash: false,
  
  // Add base path if needed
  basePath: '',
  
  // Ensure proper asset prefix
  assetPrefix: '',
};

module.exports = nextConfig; 