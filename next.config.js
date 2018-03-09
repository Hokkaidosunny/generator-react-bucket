/**
 * next config
 * @type {[type]}
 */
const webpack = require('webpack')
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const {compose} = require('redux')
const path = require('path')

const enhancers = compose(
  withTypescript,
  withSass
)

const env = process.env.NODE_ENV

module.exports = enhancers({
  webpack(config) {
    config.resolve = {
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      alias: {
        '@src': path.join(__dirname, '.'),
      }
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ENV': JSON.stringify(env),
        'process.env.NODE_ENV': JSON.stringify(env)
      })
    )

    if (env !== 'development') {
      config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
      )
    }

    return config
  }
})
