const Generator = require('yeoman-generator');
const pluralize = require('pluralize');
const extend = require('deep-extend');

module.exports = class extends Generator {
  writing() {
    const template = this.options.template || 'default';
    const config = this.fs.readJSON(this.destinationPath('config/default.json'), {});

    const newRoute = {};

    newRoute[pluralize.plural(this.options.name)] = {
      enabled: true
    };

    extend(config, {
      routes: newRoute
    });

    this.fs.copyTpl(
      this.templatePath(`${template}.js`),
      this.destinationPath(`routes/${pluralize.plural(this.options.name)}.js`),
      {
        controllerName: pluralize.plural(this.options.name)
      }
    );

    this.fs.writeJSON(this.destinationPath('config/default.json'), config);
  }
};
