const Generator = require('yeoman-generator');
const pluralize = require('pluralize');

module.exports = class extends Generator {
  writing() {
    const template = this.options.template || 'default';
    this.fs.copyTpl(
      this.templatePath(`${template}.js`),
      this.destinationPath(`db/seeds/${pluralize.plural(this.options.name)}.js`),
      { tableName: pluralize.plural(this.options.name) }
    );
  }
};
