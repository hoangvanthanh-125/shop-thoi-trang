module.exports = {
  reactStrictMode: true,
}
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')
// const withImages = require('next-images')
// module.exports = withImages(
//   withCSS(
//     withSass()
//   )
// )