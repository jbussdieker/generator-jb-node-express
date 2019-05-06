const Generator = require('yeoman-generator');
const pluralize = require('pluralize');
const changeCase = require('change-case');
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
      this.destinationPath(`controllers/${pluralize.plural(this.options.name)}.js`),
      {
        singularName: pluralize.singular(this.options.name),
        pluralName: pluralize.plural(this.options.name),
        modelName: changeCase.pascal(pluralize.singular(this.options.name)),
        attributes: helper.parseAttributes(this.options.attributes)
      }
    );
    this.fs.copyTpl(
      this.templatePath(`tests/${template}.js`),
      this.destinationPath(`tests/controllers/${pluralize.plural(this.options.name)}.js`),
      {
        singularName: pluralize.singular(this.options.name),
        pluralName: pluralize.plural(this.options.name),
        modelName: changeCase.pascal(pluralize.singular(this.options.name)),
        keys: Object.keys(helper.parseAttributes(this.options.attributes)),
        attributes: helper.parseAttributes(this.options.attributes),
        mockAttributes: helper.mockAttributes(
          helper.parseAttributes(this.options.attributes)
        ),
        mockAttributesDelta: helper.mockAttributes(
          helper.parseAttributes(this.options.attributes),
          'bar',
          21,
          'baz'
        )
      }
    );
  }
};
