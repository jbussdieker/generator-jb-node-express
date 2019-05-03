'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testOptions = {
  name: 'foo'
};

describe('jbb-node-express:app', () => {
  describe('without existing package.json', () => {
    beforeEach(() => {
      return helpers.run(path.join(__dirname, '../app')).withOptions(testOptions);
    });

    it('creates all the files', () => {
      assert.file(['package.json', '.gitignore', 'app.js', 'bin/www']);
    });
  });

  describe('with existing app.js', () => {
    beforeEach(() => {
      return helpers
        .run(path.join(__dirname, '../app'))
        .withOptions(testOptions)
        .on('ready', gen => {
          gen.fs.write(gen.destinationPath('app.js'), 'INVALID');
        });
    });

    it('overwrites values in app.js', () => {
      assert.fileContent('app.js', 'express');
    });
  });
});
