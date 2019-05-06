const Generator = require('yeoman-generator');
const extend = require('deep-extend');

module.exports = class extends Generator {
  writing() {
    const pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    const config = this.fs.readJSON(this.destinationPath('config/default.json'), {});

    extend(pkg, {
      scripts: {
        start: 'node ./bin/www',
        test: 'mocha ./tests --recursive --exit',
        pretest: 'eslint . --fix'
      },
      eslintConfig: {
        extends: ['xo-space/esnext', 'prettier'],
        env: {
          es6: true,
          node: true,
          mocha: true
        },
        rules: {
          'prettier/prettier': [
            'error',
            {
              singleQuote: true,
              printWidth: 90
            }
          ]
        },
        plugins: ['prettier']
      }
    });

    this.fs.copy(this.templatePath('app.js'), this.destinationPath('app.js'));
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
    this.fs.writeJSON(this.destinationPath('config/default.json'), config);
  }

  install() {
    const packages = ['express', 'body-parser', 'config'];

    packages.push('knex');
    packages.push('sqlite3');
    packages.push('pg');
    packages.push('bookshelf');

    this.npmInstall(packages);

    const devPackages = ['mocha', 'chai', 'chai-http', 'eslint'];

    devPackages.push('eslint-config-prettier');
    devPackages.push('eslint-config-xo-space');
    devPackages.push('eslint-plugin-prettier');
    devPackages.push('prettier');

    this.npmInstall(devPackages, { 'save-dev': true });
  }
};
