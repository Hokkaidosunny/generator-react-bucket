module.exports = function ({isDev = true}) {
  const rc = {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'react',
      'stage-0'
    ],
    plugins: [
      'transform-decorators-legacy',
      'lodash'
    ]
  };

  if (isDev) {
    rc.plugins.push('react-hot-loader/babel');
  }

  return rc;
};
