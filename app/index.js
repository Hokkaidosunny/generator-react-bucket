var generators = require('yeoman-generator');
var extend = require('deep-extend');

module.exports = generators.Base.extend({
  /*初始化方法（检验当前项目状态、获取configs、等）*/
  initializing: function () {
    this.props = {};
  },

  /*获取用户选项*/
  prompting: function () {

  },

  writing: function () {
    /*copy source files*/
    this.fs.copy(
      this.templatePath(),//from
      this.destinationPath()//to
    );

    /*modify package.json*/
    var pkg = this.fs.readJSON(this.destinationPath('package.json'),{});
    extend(pkg, {
      scripts: {
        "prestart": "npm install",
        "start": "node webpackDev.server.js"
      },
      dependencies: {
        "history": "^1.17.0",
        "react": "^0.14.6",
        "react-dom": "^0.14.6",
        "react-redux": "^4.0.6",
        "react-router": "^1.0.3",
        "redux": "^3.0.6",
        "redux-router": "^1.0.0-beta7",
        "redux-thunk": "^1.0.3"
      },
      devDependencies: {
        "babel-core": "^6.6.0",
        "babel-loader": "^6.2.4",
        "babel-preset-es2015": "^6.6.0",
        "babel-preset-react": "^6.5.0",
        "babel-preset-stage-0": "^6.5.0",
        "css-loader": "^0.23.1",
        "node-sass": "^3.7.0",
        "react-hot-loader": "^1.3.0",
        "sass-loader": "^3.2.0",
        "style-loader": "^0.13.0",
        "url-loader": "^0.5.7",
        "webpack": "^1.12.14",
        "webpack-dev-server": "^1.14.1"
      }
    });
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    /*write .babelrc*/
    this.fs.writeJSON(this.destinationPath('.babelrc'), {
      "presets": ["es2015", "react", "stage-0"]
    });

  }
});
