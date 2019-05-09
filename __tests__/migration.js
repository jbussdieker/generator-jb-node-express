'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const fs = require('fs');

const testOptions = {
  name: 'foo'
};

describe('jbb-node-express:migration', () => {
  describe('normal', () => {
    beforeEach(() => {
      return helpers
        .run(path.join(__dirname, '../generators/migration'))
        .withOptions(testOptions);
    });

    it('creates the db/migrations dir', () => {
      assert.file(['db/migrations']);
    });

    it('creates a new migrations files', () => {
      assert.equal(fs.readdirSync('db/migrations').length, 1);
    });
  });

  describe('multiple runs', () => {
    beforeEach(() => {
      return helpers
        .run(path.join(__dirname, '../generators/migration'))
        .withOptions(testOptions)
        .on('ready', gen => {
          gen.fs.write(
            gen.destinationPath('db/migrations/20190101010101_create_foo.js'),
            'INVALID'
          );
        });
    });

    xit('does not create duplicate migrations', () => {
      assert.equal(fs.readdirSync('db/migrations').length, 1);
    });
  });
});
