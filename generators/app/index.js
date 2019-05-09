const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  default() {
    this.composeWith(require.resolve('generator-jb-node/generators/app'), {
      name: this.options.name
    });
    this.composeWith(require.resolve('../boilerplate'), {
      name: this.options.name
    });
  }
};
