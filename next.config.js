/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      domains: ['cdn.worldvectorlogo.com', 'ik.imagekit.io'],
   },
}

module.exports = nextConfig
