/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/treatment/acupressure',
        destination: '/acupressure-acupuncture-lucknow',
        permanent: true,
      },
      {
        source: '/treatments/acupressure',
        destination: '/acupressure-acupuncture-lucknow',
        permanent: true,
      },
      {
        source: '/treatments/yoga-therapy',
        destination: '/yoga-meditation-lucknow',
        permanent: true,
      },
      {
        source: '/physiotherapy',
        destination: '/physiotherapy-lucknow',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
