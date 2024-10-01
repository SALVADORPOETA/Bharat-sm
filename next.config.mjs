/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bharat-api-sm.vercel.app',
        port: '',
        pathname: '/assets/**', // Adjust the pathname as needed
      },
    ],
  },
}

export default nextConfig
