module.exports = function (target = 'web') {
  let envOptions = {};

  if (target === 'web') {
    envOptions = {
      "targets": {
        "ios": 8,
        "android": "4.4"
      },
      "modules": false,
      "useBuiltIns": true
    };
  }

  if (target === 'node') {
    envOptions = {
      "targets": {
        "node": "current"
      }
    };
  }

  const rc = {
    babelrc: false,
    presets: [
      ["env", envOptions],
      'react',
      'stage-0'
    ],
    plugins: [
      'transform-decorators-legacy',
      'lodash'
    ]
  };

  return rc;
};
