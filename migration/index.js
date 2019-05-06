const Generator = require('yeoman-generator');
const pluralize = require('pluralize');
const helper = require('../helper');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('attributes', {
      type: String,
      required: true,
      default: '',
      desc: 'List of attributes (eg name:string,body:text)'
    });
  }

  _makeMigrationDate() {
    const dateFormat = require('dateformat');
    return dateFormat(new Date(), 'yyyymmddhhMMss');
  }

  writing() {
    const template = this.options.template || 'default';
    const stamp = this._makeMigrationDate();

    this.fs.copyTpl(
      this.templatePath(`${template}.js`),
      this.destinationPath(
        `db/migrations/${stamp}_create_${pluralize.plural(this.options.name)}.js`
      ),
      {
        tableName: pluralize.plural(this.options.name),
        attributes: helper.parseAttributes(this.options.attributes),
        keys: Object.keys(helper.parseAttributes(this.options.attributes))
      }
    );
  }
};
