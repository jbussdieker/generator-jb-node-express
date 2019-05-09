const Generator = require('yeoman-generator');
const pluralize = require('pluralize');
const changeCase = require('change-case');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('model.js'),
      this.destinationPath(`models/${pluralize.singular(this.options.name)}.js`),
      {
        modelName: changeCase.pascal(pluralize.singular(this.options.name)),
        tableName: pluralize.plural(this.options.name)
      }
    );
  }
};
