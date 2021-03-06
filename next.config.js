/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.github.com', 'avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
