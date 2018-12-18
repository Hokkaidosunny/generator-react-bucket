/**
 * next config
 */
const webpack = require('webpack')
const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withTypescript = require('@zeit/next-typescript')
const withSourceMap = require('@zeit/next-source-maps')()
const compose = require('lodash/fp/compose')

const env = process.env.NODE_ENV

const enhancers = compose(
  withCSS,
  withSass,
  withLess,
  withTypescript,
  withSourceMap
)

module.exports = enhancers({
  webpack: (config, { isServer, dev }) => {
    config.resolve.alias['@root'] = path.join(__dirname, '.')

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      })
    )

    return config
  }
})
