const Generator = require('yeoman-generator');
const pluralize = require('pluralize');

module.exports = class extends Generator {
  writing() {
    const template = this.options.template || 'default';
    this.fs.copyTpl(
      this.templatePath(`${template}.js`),
      this.destinationPath(`routes/${pluralize.plural(this.options.name)}.js`),
      {
        controllerName: pluralize.plural(this.options.name)
      }
    );
  }
};
