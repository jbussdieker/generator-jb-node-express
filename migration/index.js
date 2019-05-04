const Generator = require('yeoman-generator');
const pluralize = require('pluralize');

module.exports = class extends Generator {
  writing() {
    const template = this.options.template || 'default';

    const dateFormat = require('dateformat');
    const now = new Date();
    const stamp = dateFormat(now, 'yyyymmddhhMMss');

    this.fs.copyTpl(
      this.templatePath(`${template}.js`),
      this.destinationPath(
        `db/migrations/${stamp}_create_${pluralize.plural(this.options.name)}.js`
      ),
      {
        tableName: pluralize.plural(this.options.name)
      }
    );
  }
};
