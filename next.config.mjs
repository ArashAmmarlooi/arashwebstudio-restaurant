/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/restaurant-demo',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
