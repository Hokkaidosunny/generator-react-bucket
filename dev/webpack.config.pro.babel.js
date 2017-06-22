import makeWebpackConfig from './makeWebpackConfig.js';

module.exports = makeWebpackConfig({
  isDev: false,
  isPro: true,
  ifOpenActionLogger: false //是否开启action logger
});
