/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                   // 🔥 Static build
  trailingSlash: true,               // Optional: adds trailing slashes to URLs
  eslint: {
    ignoreDuringBuilds: true,        // ✅ Prevent build errors due to ESLint
  },
  typescript: {
    ignoreBuildErrors: true,         // ✅ Allow build with type errors (be cautious)
  },
  images: {
    unoptimized: true,               // ✅ Required for export
    loader: 'custom',
    loaderFile: './app/image-loader.js', // ✅ Your custom loader
  },
  devIndicators: false,              // ✅ Hide dev indicators like "next dev"
  allowedDevOrigins: [
    "*.macaly.dev",
    "*.macaly.app",
    "*.macaly-app.com",
    "*.macaly-user-data.dev",
  ],
};

module.exports = nextConfig;
