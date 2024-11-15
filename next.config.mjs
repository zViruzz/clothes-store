/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'acdn.mitiendanube.com',
      },
      {
        protocol: 'https',
        hostname: 'littleparadise.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'lulabim.com.ar',
      },
    ],
  },

};

export default nextConfig;
