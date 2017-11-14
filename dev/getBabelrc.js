module.exports = function () {
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

  return rc;
};
