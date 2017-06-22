import makeWebpackConfig from './makeWebpackConfig.js';

module.exports = makeWebpackConfig({
  isDev: true,
  isPro: false,
  ifOpenActionLogger: true //是否开启action logger
});
