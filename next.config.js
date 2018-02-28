/**
 * next config
 * @type {[type]}
 */

const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const {compose} = require('redux')

const enhancers = compose(
  withSass,
  withTypescript
)

module.exports = enhancers()
