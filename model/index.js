const Generator = require('yeoman-generator');
const pluralize = require('pluralize');
const pascalCase = require('pascal-case');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('model.js'),
      this.destinationPath(`models/${pluralize.singular(this.options.name)}.js`),
      {
        modelName: pascalCase(pluralize.singular(this.options.name)),
        tableName: pluralize.plural(this.options.name)
      }
    );
  }
};
