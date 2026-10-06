/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/restaurant-demo',
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
