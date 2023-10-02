/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.pinimg.com',
        hostname: 'www.thecocktaildb.com'
      },
    ],
  }
}

module.exports = nextConfig
