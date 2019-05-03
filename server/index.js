const Generator = require('yeoman-generator');
const extend = require('deep-extend');

module.exports = class extends Generator {
  writing() {
    const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    extend(pkg, {
      scripts: {
        start: 'node ./bin/www'
      }
    });
    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    this.fs.copy(this.templatePath('app.js'), this.destinationPath('app.js'));
    this.fs.copyTpl(this.templatePath('bin/www'), this.destinationPath('bin/www'), {
      name: this.options.name
    });
  }
};
