/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    experimental: {
      serverActions: true,
    },
    images: {
        unoptimized: false,
        domains: [
          "flagcdn.com",
          "images.unsplash.com",
        ],
      },
}

module.exports = nextConfig

