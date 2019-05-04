const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  default() {
    this.composeWith(require.resolve('../migration'), {
      name: this.options.name,
      template: 'scaffold'
    });
    this.composeWith(require.resolve('../seed'), {
      name: this.options.name,
      template: 'scaffold'
    });
    this.composeWith(require.resolve('../model'), {
      name: this.options.name
    });
    this.composeWith(require.resolve('../route'), {
      name: this.options.name,
      template: 'scaffold'
    });
    this.composeWith(require.resolve('../controller'), {
      name: this.options.name,
      template: 'scaffold'
    });
  }
};
