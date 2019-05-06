const Generator = require('yeoman-generator');
const pluralize = require('pluralize');
const changeCase = require('change-case');

module.exports = class extends Generator {
  writing() {
    const template = this.options.template || 'default';
    this.fs.copyTpl(
      this.templatePath(`${template}.js`),
      this.destinationPath(`controllers/${pluralize.plural(this.options.name)}.js`),
      {
        singularName: pluralize.singular(this.options.name),
        pluralName: pluralize.plural(this.options.name),
        modelName: changeCase.pascal(pluralize.singular(this.options.name))
      }
    );
    this.fs.copyTpl(
      this.templatePath(`tests/${template}.js`),
      this.destinationPath(`tests/controllers/${pluralize.plural(this.options.name)}.js`),
      {
        singularName: pluralize.singular(this.options.name),
        pluralName: pluralize.plural(this.options.name),
        modelName: changeCase.pascal(pluralize.singular(this.options.name))
      }
    );
  }
};
