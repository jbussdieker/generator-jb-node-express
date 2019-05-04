const Generator = require('yeoman-generator');
const pluralize = require('pluralize');
const pascalCase = require('pascal-case');

module.exports = class extends Generator {
  writing() {
    const template = this.options.template || 'default';
    this.fs.copyTpl(
      this.templatePath(`${template}.js`),
      this.destinationPath(`controllers/${pluralize.plural(this.options.name)}.js`),
      {
        singularName: pluralize.singular(this.options.name),
        pluralName: pluralize.plural(this.options.name),
        modelName: pascalCase(pluralize.singular(this.options.name))
      }
    );
    this.fs.copyTpl(
      this.templatePath(`tests/${template}.js`),
      this.destinationPath(`tests/controllers/${pluralize.plural(this.options.name)}.js`),
      {
        singularName: pluralize.singular(this.options.name),
        pluralName: pluralize.plural(this.options.name),
        modelName: pascalCase(pluralize.singular(this.options.name))
      }
    );
  }
};
