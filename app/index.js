var generators = require('yeoman-generator');


/*
*this.sourceRoot() 'app/tempaltes'
*this.destinationRoot() '/'
*/

module.exports = generators.Base.extend({
  /*初始化方法（检验当前项目状态、获取configs、等）*/
  initializing: function () {
    this.props = {};
  },

  /*获取用户选项*/
  prompting: function () {
    var done = this.async();
    // this.prompt({
    //   type    : 'input',
    //   name    : 'name',
    //   message : 'Your project name',
    //   default : this.appname // Default to current folder name
    // }, function (answers) {
    //   this.log(answers.name);
    //   done();
    // }.bind(this));
  },

   writing: function () {
    this.fs.copyTpl(
      this.templatePath('a.js'),//第一个参数：from
      this.destinationPath('public/index.html'),//第二个参数：to
      { title: 'Templating with Yeoman' }//第三个参数：options
    );
  }
});
