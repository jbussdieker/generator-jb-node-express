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

  writing() {
    const template = this.options.template || 'default';
    this.fs.copyTpl(
      this.templatePath(`${template}.js`),
      this.destinationPath(`db/seeds/${pluralize.plural(this.options.name)}.js`),
      {
        tableName: pluralize.plural(this.options.name),
        mockAttributes: helper.mockAttributes(
          helper.parseAttributes(this.options.attributes)
        )
      }
    );
  }
};
