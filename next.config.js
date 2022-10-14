/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'upload.wikimedia.org', 'logos-world.net']
  }
}

module.exports = nextConfig
