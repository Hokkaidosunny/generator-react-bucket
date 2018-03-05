/**
 * next config
 * @type {[type]}
 */

const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const {compose} = require('redux')
const path = require('path')

const enhancers = compose(
  withTypescript,
  withSass
)

module.exports = enhancers({
  webpack(config) {
    config.resolve = {
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      alias: {
        '@src': path.join(__dirname, '.'),
      }
    }

    return config
  }
})
