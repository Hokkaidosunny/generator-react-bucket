import makeWebpackConfig from './makeWebpackConfig.js';

module.exports = makeWebpackConfig({
  port: 4000,
  isDev: true,
  isPro: false,
  ifMock: true,
  ifOpenActionLogger: true //是否开启action logger
});
