/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'cdn.jsdelivr.net']
  },

  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  }
}

module.exports = nextConfig
