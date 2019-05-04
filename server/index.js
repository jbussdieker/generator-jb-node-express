const Generator = require('yeoman-generator');
const extend = require('deep-extend');

module.exports = class extends Generator {
  writing() {
    const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});

    extend(pkg, {
      scripts: {
        start: 'node ./bin/www',
        test: 'mocha ./tests --recursive --exit'
      }
    });

    this.fs.copy(this.templatePath('app.js'), this.destinationPath('app.js'));
    this.fs.copy(
      this.templatePath('config/default.json'),
      this.destinationPath('config/default.json')
    );
    this.fs.copy(
      this.templatePath('routes/index.js'),
      this.destinationPath('routes/index.js')
    );
    this.fs.copy(
      this.templatePath('tests/helper.js'),
      this.destinationPath('tests/helper.js')
    );
    this.fs.copyTpl(this.templatePath('bin/www'), this.destinationPath('bin/www'), {
      name: this.options.name
    });

    this.fs.copy(
      this.templatePath('db/knexfile.js'),
      this.destinationPath('db/knexfile.js')
    );
    this.fs.copy(
      this.templatePath('db/bookshelf.js'),
      this.destinationPath('db/bookshelf.js')
    );

    extend(pkg, {
      scripts: {
        knex: 'knex --knexfile db/knexfile.js',
        migrate: 'npm run knex migrate:latest',
        seed: 'npm run knex seed:run'
      }
    });

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);
  }

  install() {
    const packages = ['express', 'body-parser', 'config'];

    if (this.options.database) {
      packages.push('knex');
      packages.push('sqlite3');
      packages.push('pg');
      packages.push('bookshelf');
    }

    this.npmInstall(packages);
    this.npmInstall(['mocha', 'chai', 'chai-http'], { 'save-dev': true })
  }
};
