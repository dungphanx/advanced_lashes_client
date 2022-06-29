const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['https://www.advancelashes.com/', 'www.advancelashes.com'],
    formats: ['image/avif', 'image/webp'],
  },
}
