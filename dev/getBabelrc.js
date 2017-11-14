module.exports = function ({ifDevServer = true}) {
  const rc = {
    babelrc: false,
    presets: [
      ["env", {
        "targets": {
          "ios": 8,
          "android": "4.4"
        },
        "modules": false,
        "useBuiltIns": true
      }],
      'react',
      'stage-0'
    ],
    plugins: [
      'transform-decorators-legacy',
      'lodash'
    ]
  };

  if (ifDevServer) {
    rc.plugins.push('react-hot-loader/babel');
  }

  return rc;
};
